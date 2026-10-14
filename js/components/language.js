/**
 * LANGUAGE COMPONENT
 * Switches the page between English and Portuguese.
 * Fixed text lives in elements marked with data-i18n (text), data-i18n-html (markup),
 * data-i18n-aria (aria-label) and data-i18n-href (link target).
 */

export class LanguageSwitcher {
    constructor(buttonId, ui, onChange) {
        this.button = document.getElementById(buttonId);
        this.ui = ui;
        this.onChange = onChange;
        this.storageKey = 'lang';
        this.lang = this.initialLang();
        this.init();
    }

    initialLang() {
        try {
            const saved = localStorage.getItem(this.storageKey);
            if (saved && this.ui[saved]) return saved;
        } catch (e) {
            // Storage unavailable: fall back to the browser language
        }
        return navigator.language.toLowerCase().startsWith('pt') ? 'pt' : 'en';
    }

    init() {
        if (this.button) {
            this.button.addEventListener('click', () => this.set(this.lang === 'en' ? 'pt' : 'en'));
        }
        this.apply();
    }

    set(lang) {
        this.lang = lang;
        try {
            localStorage.setItem(this.storageKey, lang);
        } catch (e) {
            // Storage unavailable: the choice lasts for this visit only
        }
        this.apply();
    }

    apply() {
        const t = this.ui[this.lang];
        document.documentElement.lang = t.htmlLang;
        document.title = t.title;
        document.querySelector('meta[name="description"]')?.setAttribute('content', t.description);

        document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t[el.dataset.i18n]; });
        document.querySelectorAll('[data-i18n-html]').forEach(el => { el.innerHTML = t[el.dataset.i18nHtml]; });
        document.querySelectorAll('[data-i18n-aria]').forEach(el => el.setAttribute('aria-label', t[el.dataset.i18nAria]));
        document.querySelectorAll('[data-i18n-href]').forEach(el => el.setAttribute('href', t[el.dataset.i18nHref]));

        if (this.button) {
            this.button.textContent = t.langSwitch;
            this.button.setAttribute('aria-label', t.langLabel);
        }

        this.onChange(this.lang);
    }
}
