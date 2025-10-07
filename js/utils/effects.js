/**
 * VISUAL EFFECTS UTILITIES
 * Reusable visual effects (ripple, magnetic, etc)
 */

// Ripple Effect
export function initRippleEffect(selector = '.ripple-btn') {
    const buttons = document.querySelectorAll(selector);
    
    buttons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
}

// Magnetic Effect
export function initMagneticEffect(selector = '.magnetic-btn') {
    const buttons = document.querySelectorAll(selector);
    
    buttons.forEach(btn => {
        btn.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            this.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translate(0, 0)';
        });
    });
}

// 3D Card Effect
export function init3DCardEffect(selector = '.project-card') {
    const cards = document.querySelectorAll(selector);
    
    cards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
}

// Floating shapes animation with parallax
export function initFloatingShapes() {
    const shapes = document.querySelectorAll('.shape');
    
    if (shapes.length === 0) return;
    
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        shapes.forEach((shape, index) => {
            const speed = (index + 1) * 20;
            const x = mouseX * speed;
            const y = mouseY * speed;
            
            shape.style.transform = `translate(${x}px, ${y}px)`;
        });
    });
}

// Create animated particles
export function createParticles() {
    function createParticle() {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.width = '3px';
        particle.style.height = '3px';
        particle.style.background = 'var(--primary-color)';
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '1';
        particle.style.left = Math.random() * window.innerWidth + 'px';
        particle.style.top = '-10px';
        particle.style.opacity = Math.random();
        
        document.body.appendChild(particle);
        
        const duration = Math.random() * 3 + 2;
        const drift = (Math.random() - 0.5) * 100;
        
        particle.animate([
            { transform: 'translateY(0) translateX(0)', opacity: particle.style.opacity },
            { transform: `translateY(${window.innerHeight}px) translateX(${drift}px)`, opacity: 0 }
        ], {
            duration: duration * 1000,
            easing: 'linear'
        }).onfinish = () => particle.remove();
    }
    
    // Create particles periodically
    setInterval(createParticle, 300);
}

// Add stagger effect to cards
export function staggerAnimation(selector, delay = 100) {
    const elements = document.querySelectorAll(selector);
    
    elements.forEach((el, index) => {
        el.style.transitionDelay = `${index * delay}ms`;
    });
}
