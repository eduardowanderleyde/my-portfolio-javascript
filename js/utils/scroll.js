/**
 * SCROLL UTILITIES
 * Manages scroll animations using Intersection Observer
 */

export class ScrollAnimations {
    constructor(options = {}) {
        this.options = {
            threshold: 0.2,
            rootMargin: '0px',
            ...options
        };
        
        this.observer = null;
        this.init();
    }

    init() {
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    
                    // Animate progress bars if it's a skill-item
                    if (entry.target.classList.contains('skill-item')) {
                        this.animateSkillBar(entry.target);
                    }
                }
            });
        }, this.options);
    }

    animateSkillBar(skillItem) {
        const progressBar = skillItem.querySelector('.skill-progress');
        if (progressBar) {
            const progress = progressBar.getAttribute('data-progress');
            progressBar.style.setProperty('--progress', `${progress}%`);
        }
    }

    observe(selector) {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => this.observer.observe(el));
    }

    unobserve(element) {
        if (this.observer) {
            this.observer.unobserve(element);
        }
    }

    disconnect() {
        if (this.observer) {
            this.observer.disconnect();
        }
    }
}

// Smooth scroll for navigation links
export function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Ignore if it's just #
            if (href === '#') return;
            
            e.preventDefault();
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Smooth parallax for hero section
export function initParallax() {
    const heroContent = document.querySelector('.hero-content');
    
    if (!heroContent) return;
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
        heroContent.style.opacity = 1 - (scrolled / 700);
    });
}

// Manage header on scroll
export function initHeaderScroll() {
    const header = document.querySelector('.header');
    
    if (!header) return;
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
            header.style.padding = '0.5rem 5%';
            header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
        } else {
            header.style.padding = '1rem 5%';
            header.style.boxShadow = 'none';
        }
    });
}
