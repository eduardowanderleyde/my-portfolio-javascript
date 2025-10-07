/**
 * THEME TOGGLE COMPONENT
 * Manages light/dark theme switching
 */

export class ThemeToggle {
    constructor(toggleButtonId = 'themeToggle') {
        this.toggleButton = document.getElementById(toggleButtonId);
        this.body = document.body;
        this.storageKey = 'theme';
        
        this.init();
    }

    init() {
        // Check saved preference
        this.loadSavedTheme();
        
        // Add event listener
        if (this.toggleButton) {
            this.toggleButton.addEventListener('click', () => this.toggle());
        }
    }

    loadSavedTheme() {
        const savedTheme = localStorage.getItem(this.storageKey);
        
        if (savedTheme === 'light') {
            this.body.classList.add('light-mode');
        }
    }

    toggle() {
        this.body.classList.toggle('light-mode');
        
        // Save preference
        const theme = this.body.classList.contains('light-mode') ? 'light' : 'dark';
        localStorage.setItem(this.storageKey, theme);
        
        // Animate button
        this.animateButton();
        
        // Emit custom event
        this.dispatchThemeChangeEvent(theme);
    }

    animateButton() {
        if (!this.toggleButton) return;
        
        this.toggleButton.style.transform = 'rotate(360deg)';
        
        setTimeout(() => {
            this.toggleButton.style.transform = 'rotate(0deg)';
        }, 300);
    }

    dispatchThemeChangeEvent(theme) {
        const event = new CustomEvent('themeChange', {
            detail: { theme }
        });
        document.dispatchEvent(event);
    }

    getCurrentTheme() {
        return this.body.classList.contains('light-mode') ? 'light' : 'dark';
    }
}
