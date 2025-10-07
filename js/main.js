/**
 * MAIN.JS - Main Initializer
 * Orchestrates all portfolio components and modules
 */

// Import data
import { portfolioData } from './data/portfolio.js';

// Import components
import { CustomCursor } from './components/cursor.js';
import { ThemeToggle } from './components/theme.js';
import { Navigation } from './components/navigation.js';
import { TypingEffect } from './components/typing.js';
import { Projects } from './components/projects.js';
import { Skills } from './components/skills.js';
import { Contact } from './components/contact.js';

// Import utilities
import { 
    ScrollAnimations, 
    initSmoothScroll, 
    initParallax, 
    initHeaderScroll 
} from './utils/scroll.js';

import { 
    initRippleEffect, 
    initMagneticEffect, 
    init3DCardEffect,
    initFloatingShapes,
    createParticles,
    staggerAnimation
} from './utils/effects.js';

/**
 * Main application class
 */
class Portfolio {
    constructor() {
        this.components = {};
        this.init();
    }

    async init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.initializeApp());
        } else {
            this.initializeApp();
        }
    }

    initializeApp() {
        console.log('%c🚀 Portfolio Initialized!', 'font-size: 20px; color: #667eea; font-weight: bold;');
        console.log('%c💻 Developed with Modular JavaScript ES6+', 'font-size: 14px; color: #764ba2;');
        
        // Initialize basic components
        this.initBasicComponents();
        
        // Render dynamic content
        this.renderDynamicContent();
        
        // Initialize visual effects
        this.initVisualEffects();
        
        // Initialize scroll and navigation
        this.initScrollAndNavigation();
        
        // Easter eggs and extras
        this.initEasterEggs();
        
        // Mark page as loaded
        this.onPageLoad();
    }

    /**
     * Initialize basic components
     */
    initBasicComponents() {
        // Custom cursor
        this.components.cursor = new CustomCursor();
        
        // Theme toggle
        this.components.theme = new ThemeToggle();
        
        // Navigation
        this.components.navigation = new Navigation();
        
        // Typing effect
        const typingElement = document.querySelector('.typing-text');
        if (typingElement) {
            this.components.typing = new TypingEffect(
                typingElement,
                portfolioData.typingWords,
                {
                    typingSpeed: 100,
                    deletingSpeed: 50,
                    delayBetweenWords: 2000
                }
            );
        }
    }

    /**
     * Render dynamic content
     */
    renderDynamicContent() {
        // Projects
        this.components.projects = new Projects(
            'projectsGrid',
            portfolioData.projects
        );
        
        // Skills
        this.components.skills = new Skills(
            'skillsGrid',
            portfolioData.skills
        );
        
        // Contact
        this.components.contact = new Contact(
            'contactForm',
            'contactInfo',
            portfolioData.contactCards
        );
    }

    /**
     * Initialize visual effects
     */
    initVisualEffects() {
        // Ripple effect on buttons
        initRippleEffect('.ripple-btn');
        
        // Magnetic effect on buttons
        initMagneticEffect('.magnetic-btn');
        
        // 3D effect on cards (wait for rendering)
        setTimeout(() => {
            init3DCardEffect('.project-card');
        }, 100);
        
        // Floating shapes with parallax
        initFloatingShapes();
        
        // Animated particles
        createParticles();
        
        // Stagger animation on cards
        setTimeout(() => {
            staggerAnimation('.project-card', 100);
        }, 100);
    }

    /**
     * Initialize scroll and navigation
     */
    initScrollAndNavigation() {
        // Smooth scroll
        initSmoothScroll();
        
        // Parallax on hero
        initParallax();
        
        // Dynamic header on scroll
        initHeaderScroll();
        
        // Scroll animations
        const scrollAnimations = new ScrollAnimations({
            threshold: 0.2,
            rootMargin: '0px'
        });
        
        // Observe elements
        scrollAnimations.observe('[data-scroll]');
        scrollAnimations.observe('.project-card');
        scrollAnimations.observe('.skill-item');
        
        this.components.scrollAnimations = scrollAnimations;
    }

    /**
     * Easter eggs and extras
     */
    initEasterEggs() {
        // Konami Code
        this.initKonamiCode();
        
        // Console messages
        this.logCreativeMessages();
    }

    /**
     * Konami Code
     */
    initKonamiCode() {
        let konamiCode = [];
        const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 
                                'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 
                                'b', 'a'];
        
        document.addEventListener('keydown', (e) => {
            konamiCode.push(e.key);
            konamiCode = konamiCode.slice(-10);
            
            if (konamiCode.join('') === konamiSequence.join('')) {
                this.activateRainbowMode();
            }
        });
    }

    activateRainbowMode() {
        document.body.style.animation = 'rainbow 2s infinite';
        
        // Create custom alert
        this.showCustomAlert('🎉 Konami Code Activated! 🎮', 'You are awesome!');
        
        // Add style if it doesn't exist
        if (!document.getElementById('rainbow-style')) {
            const style = document.createElement('style');
            style.id = 'rainbow-style';
            style.textContent = `
                @keyframes rainbow {
                    0% { filter: hue-rotate(0deg); }
                    100% { filter: hue-rotate(360deg); }
                }
            `;
            document.head.appendChild(style);
        }
        
        // Deactivate after 5 seconds
        setTimeout(() => {
            document.body.style.animation = '';
        }, 5000);
    }

    showCustomAlert(title, message) {
        const alert = document.createElement('div');
        alert.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: var(--surface-color);
            padding: 2rem 3rem;
            border-radius: 20px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            z-index: 10000;
            text-align: center;
            animation: scaleIn 0.3s ease;
        `;
        
        alert.innerHTML = `
            <h2 style="font-size: 2rem; margin-bottom: 1rem;">${title}</h2>
            <p style="font-size: 1.2rem; color: var(--text-secondary);">${message}</p>
        `;
        
        document.body.appendChild(alert);
        
        setTimeout(() => {
            alert.style.animation = 'scaleIn 0.3s ease reverse';
            setTimeout(() => alert.remove(), 300);
        }, 3000);
    }

    /**
     * Creative console messages
     */
    logCreativeMessages() {
        console.log('%c✨ Explore the interactions!', 'font-size: 14px; color: #f093fb;');
        console.log('%c🎯 Try the Konami Code: ⬆️⬆️⬇️⬇️⬅️➡️⬅️➡️BA', 'font-size: 12px; color: #a0a0b8;');
        console.log(' ');
        console.log('%cDeveloped by Eduardo Wanderley', 'font-size: 12px; font-weight: bold;');
        console.log('%cGitHub: @eduardowanderleyde', 'font-size: 11px; color: #667eea;');
    }

    /**
     * Page loaded event
     */
    onPageLoad() {
        window.addEventListener('load', () => {
            console.log('%c✅ Page fully loaded!', 'font-size: 16px; color: #4ade80; font-weight: bold;');
            
            document.body.classList.add('loaded');
            
            // Emit custom event
            const event = new CustomEvent('portfolioLoaded', {
                detail: {
                    components: this.components,
                    data: portfolioData
                }
            });
            document.dispatchEvent(event);
        });
    }

    /**
     * Public methods for component access
     */
    getComponent(name) {
        return this.components[name];
    }

    getData() {
        return portfolioData;
    }
}

// Initialize application
const app = new Portfolio();

// Export for global use (optional)
window.Portfolio = app;

export default Portfolio;
