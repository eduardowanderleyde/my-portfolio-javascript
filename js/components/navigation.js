/**
 * NAVIGATION COMPONENT
 * Highlights the nav link of the section currently on screen
 */

export class Navigation {
    constructor() {
        this.links = document.querySelectorAll('.nav-link');
        this.init();
    }

    init() {
        const sections = [...this.links]
            .map(link => document.querySelector(link.getAttribute('href')))
            .filter(Boolean);

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.setActive(entry.target.id);
                }
            });
        }, { rootMargin: '-40% 0px -55% 0px' });

        sections.forEach(section => observer.observe(section));
    }

    setActive(id) {
        this.links.forEach(link => {
            const isActive = link.getAttribute('href') === `#${id}`;
            link.classList.toggle('active', isActive);
            if (isActive) link.setAttribute('aria-current', 'true');
            else link.removeAttribute('aria-current');
        });
    }
}
