/**
 * TRAJECTORY COMPONENT
 * Hero figure: an occupancy-grid map where a recorded robot route is drawn,
 * then replayed 10 times almost exactly on top of it (Fleet UI repeatability test).
 */

const COLS = 48;
const ROWS = 36;

// Occupied cells: outer walls, a dividing wall with a doorway, and furniture
const OBSTACLES = [
    [0, 0, COLS, 1], [0, ROWS - 1, COLS, 1], [0, 0, 1, ROWS], [COLS - 1, 0, 1, ROWS],
    [26, 0, 1, 13], [26, 21, 1, ROWS - 21],
    [8, 7, 5, 4], [17, 25, 3, 3], [34, 25, 7, 4], [44, 3, 3, 3]
];

// Recorded route through the doorway, in grid coordinates
const WAYPOINTS = [
    [5, 31], [6, 23], [11, 17], [18, 15.5], [24, 17], [29, 17],
    [35, 13], [41, 9.5], [43.5, 15], [39, 20.5]
];

const REPLAYS = 10;
const RECORD_MS = 2600;
const REPLAY_MS = 1100;
const REPLAY_STAGGER_MS = 260;

export class TrajectoryMap {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;

        this.ctx = this.canvas.getContext('2d');
        this.route = this.sampleRoute(WAYPOINTS, 360);
        this.replays = Array.from({ length: REPLAYS }, (_, i) => this.makeReplay(i));
        this.total = RECORD_MS + (REPLAYS - 1) * REPLAY_STAGGER_MS + REPLAY_MS;
        this.elapsed = 0;

        this.init();
    }

    init() {
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        new ResizeObserver(() => this.draw(this.elapsed)).observe(this.canvas);
        document.addEventListener('themeChange', () => this.draw(this.elapsed));

        if (reduceMotion) {
            this.elapsed = this.total;
            this.draw(this.total);
        } else {
            this.animate();
        }
    }

    animate() {
        const start = performance.now();
        const step = (now) => {
            this.elapsed = Math.min(now - start, this.total);
            this.draw(this.elapsed);
            if (this.elapsed < this.total) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }

    // Catmull-Rom spline through the waypoints, resampled to n points
    sampleRoute(points, n) {
        const p = [points[0], ...points, points[points.length - 1]];
        const out = [];
        const segments = points.length - 1;
        for (let i = 0; i < n; i++) {
            const t = (i / (n - 1)) * segments;
            const s = Math.min(Math.floor(t), segments - 1);
            const u = t - s;
            const [p0, p1, p2, p3] = [p[s], p[s + 1], p[s + 2], p[s + 3]];
            const f = (a, b, c, d) => 0.5 * (2 * b + (-a + c) * u + (2 * a - 5 * b + 4 * c - d) * u * u + (-a + 3 * b - 3 * c + d) * u * u * u);
            out.push([f(p0[0], p1[0], p2[0], p3[0]), f(p0[1], p1[1], p2[1], p3[1])]);
        }
        return out;
    }

    // A replay deviates a few centimetres sideways from the recorded route
    makeReplay(seed) {
        const phase = seed * 1.7;
        const amp = 0.22 + (seed % 4) * 0.05;
        return this.route.map(([x, y], i, arr) => {
            const t = i / (arr.length - 1);
            const [ax, ay] = arr[Math.max(i - 1, 0)];
            const [bx, by] = arr[Math.min(i + 1, arr.length - 1)];
            const len = Math.hypot(bx - ax, by - ay) || 1;
            const nx = -(by - ay) / len;
            const ny = (bx - ax) / len;
            const off = amp * (0.6 * Math.sin(2 * Math.PI * (2 * t) + phase) + 0.4 * Math.sin(2 * Math.PI * (5 * t) + phase * 2));
            return [x + nx * off, y + ny * off];
        });
    }

    colors() {
        const css = getComputedStyle(document.documentElement);
        const get = (name) => css.getPropertyValue(name).trim();
        return { surface: get('--surface'), rule: get('--rule'), wall: get('--wall'), accent: get('--accent'), ink: get('--ink') };
    }

    draw(elapsed) {
        const { canvas, ctx } = this;
        const dpr = window.devicePixelRatio || 1;
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        if (!width || !height) return;

        canvas.width = Math.round(width * dpr);
        canvas.height = Math.round(height * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

        const cell = Math.min(width / COLS, height / ROWS);
        const ox = (width - cell * COLS) / 2;
        const oy = (height - cell * ROWS) / 2;
        const toPx = ([x, y]) => [ox + x * cell, oy + y * cell];
        const c = this.colors();

        ctx.clearRect(0, 0, width, height);

        // Grid
        ctx.strokeStyle = c.rule;
        ctx.lineWidth = 1;
        ctx.globalAlpha = 0.55;
        ctx.beginPath();
        for (let x = 1; x < COLS; x++) {
            ctx.moveTo(ox + x * cell, oy);
            ctx.lineTo(ox + x * cell, oy + ROWS * cell);
        }
        for (let y = 1; y < ROWS; y++) {
            ctx.moveTo(ox, oy + y * cell);
            ctx.lineTo(ox + COLS * cell, oy + y * cell);
        }
        ctx.stroke();
        ctx.globalAlpha = 1;

        // Walls and obstacles
        ctx.fillStyle = c.wall;
        OBSTACLES.forEach(([x, y, w, h]) => ctx.fillRect(ox + x * cell, oy + y * cell, w * cell, h * cell));

        // Recorded route
        const recordT = Math.min(elapsed / RECORD_MS, 1);
        this.drawPath(this.route, recordT, toPx, c.accent, Math.max(2, cell * 0.28), 1);

        // Replays
        let robot = this.pointAt(this.route, recordT);
        this.replays.forEach((path, i) => {
            const startAt = RECORD_MS + i * REPLAY_STAGGER_MS;
            const t = Math.max(0, Math.min((elapsed - startAt) / REPLAY_MS, 1));
            if (t <= 0) return;
            this.drawPath(path, t, toPx, c.accent, Math.max(1, cell * 0.09), 0.45);
            if (t < 1) robot = this.pointAt(path, t);
        });

        // Start ring and goal square
        const [sx, sy] = toPx(this.route[0]);
        ctx.strokeStyle = c.ink;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(sx, sy, cell * 0.7, 0, Math.PI * 2);
        ctx.stroke();

        if (recordT === 1) {
            const [gx, gy] = toPx(this.route[this.route.length - 1]);
            ctx.fillStyle = c.ink;
            ctx.fillRect(gx - cell * 0.5, gy - cell * 0.5, cell, cell);
        }

        // Robot
        const [rx, ry] = toPx(robot);
        ctx.fillStyle = c.accent;
        ctx.strokeStyle = c.surface;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(rx, ry, cell * 0.55, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
    }

    drawPath(path, t, toPx, color, width, alpha) {
        const count = Math.max(2, Math.round(t * (path.length - 1)) + 1);
        const { ctx } = this;
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        path.slice(0, count).forEach((point, i) => {
            const [x, y] = toPx(point);
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        });
        ctx.stroke();
        ctx.globalAlpha = 1;
    }

    pointAt(path, t) {
        return path[Math.round(t * (path.length - 1))];
    }
}
