/**
 * TYPING EFFECT COMPONENT
 * Typing text effect animation
 */

export class TypingEffect {
    constructor(element, words, options = {}) {
        this.element = element;
        this.words = words;
        this.wordIndex = 0;
        this.charIndex = 0;
        this.isDeleting = false;
        
        // Options
        this.options = {
            typingSpeed: 100,
            deletingSpeed: 50,
            delayBetweenWords: 2000,
            ...options
        };
        
        this.init();
    }

    init() {
        if (this.element && this.words.length > 0) {
            this.type();
        }
    }

    type() {
        const currentWord = this.words[this.wordIndex];
        
        if (this.isDeleting) {
            this.element.textContent = currentWord.substring(0, this.charIndex - 1);
            this.charIndex--;
        } else {
            this.element.textContent = currentWord.substring(0, this.charIndex + 1);
            this.charIndex++;
        }
        
        // Complete word, start deleting after delay
        if (!this.isDeleting && this.charIndex === currentWord.length) {
            this.isDeleting = true;
            setTimeout(() => this.type(), this.options.delayBetweenWords);
            return;
        }
        
        // Word deleted, move to next
        if (this.isDeleting && this.charIndex === 0) {
            this.isDeleting = false;
            this.wordIndex = (this.wordIndex + 1) % this.words.length;
        }
        
        const speed = this.isDeleting ? this.options.deletingSpeed : this.options.typingSpeed;
        setTimeout(() => this.type(), speed);
    }

    stop() {
        this.isActive = false;
    }

    restart() {
        this.isActive = true;
        this.type();
    }
}
