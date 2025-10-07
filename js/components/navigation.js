/**
 * NAVIGATION COMPONENT
 * Gerencia navegação e scroll to top
 */

export class Navigation {
    constructor() {
        this.scrollTopBtn = document.getElementById('scrollTop');
        this.init();
    }

    init() {
        // Botão scroll to top
        if (this.scrollTopBtn) {
            window.addEventListener('scroll', () => this.handleScroll());
            this.scrollTopBtn.addEventListener('click', () => this.scrollToTop());
        }
        
        // Destacar link ativo na navegação
        this.highlightActiveSection();
    }

    handleScroll() {
        if (window.pageYOffset > 500) {
            this.scrollTopBtn.classList.add('visible');
        } else {
            this.scrollTopBtn.classList.remove('visible');
        }
    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    highlightActiveSection() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        window.addEventListener('scroll', () => {
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if (pageYOffset >= sectionTop - 200) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });
    }
}

