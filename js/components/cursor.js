/**
 * CUSTOM CURSOR COMPONENT
 * Custom cursor with smooth animation
 */

export class CustomCursor {
    constructor() {
        this.cursorDot = document.querySelector('.cursor-dot');
        this.cursorOutline = document.querySelector('.cursor-outline');
        
        this.mouseX = 0;
        this.mouseY = 0;
        this.outlineX = 0;
        this.outlineY = 0;
        
        this.init();
    }

    init() {
        // Track mouse position
        document.addEventListener('mousemove', (e) => {
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;
            
            // Update dot position immediately
            this.cursorDot.style.left = `${this.mouseX}px`;
            this.cursorDot.style.top = `${this.mouseY}px`;
        });

        // Start outline animation
        this.animateOutline();
        
        // Add hover effects on interactive elements
        this.addHoverEffects();
    }

    animateOutline() {
        const distX = this.mouseX - this.outlineX;
        const distY = this.mouseY - this.outlineY;
        
        this.outlineX += distX * 0.15;
        this.outlineY += distY * 0.15;
        
        this.cursorOutline.style.left = `${this.outlineX}px`;
        this.cursorOutline.style.top = `${this.outlineY}px`;
        
        requestAnimationFrame(() => this.animateOutline());
    }

    addHoverEffects() {
        const interactiveElements = document.querySelectorAll('a, button, input, textarea, .project-card, .skill-item');
        
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                this.cursorDot.classList.add('hover');
                this.cursorOutline.classList.add('hover');
            });
            
            el.addEventListener('mouseleave', () => {
                this.cursorDot.classList.remove('hover');
                this.cursorOutline.classList.remove('hover');
            });
        });
    }
}
