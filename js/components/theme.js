/**
 * THEME TOGGLE COMPONENT
 * Switches between light and dark; follows the system until the visitor chooses
 */

export class ThemeToggle {
    constructor(toggleButtonId = 'themeToggle') {
        this.toggleButton = document.getElementById(toggleButtonId);
        this.root = document.documentElement;
        this.storageKey = 'theme';
        this.init();
    }

    init() {
        if (this.toggleButton) {
            this.toggleButton.addEventListener('click', () => this.toggle());
        }
        window.matchMedia('(prefers-color-scheme: dark)')
            .addEventListener('change', () => this.dispatchThemeChangeEvent());
    }

    getCurrentTheme() {
        if (this.root.dataset.theme) return this.root.dataset.theme;
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    toggle() {
        const theme = this.getCurrentTheme() === 'dark' ? 'light' : 'dark';
        this.root.dataset.theme = theme;
        try {
            localStorage.setItem(this.storageKey, theme);
        } catch (e) {
            // Storage unavailable (private mode): the choice lasts for this visit only
        }
        this.dispatchThemeChangeEvent();
    }

    dispatchThemeChangeEvent() {
        document.dispatchEvent(new CustomEvent('themeChange', {
            detail: { theme: this.getCurrentTheme() }
        }));
    }
}
