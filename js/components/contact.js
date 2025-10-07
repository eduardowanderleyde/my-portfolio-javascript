/**
 * CONTACT COMPONENT
 * Gerencia formulário de contato e informações
 */

export class Contact {
    constructor(formId, contactInfoId, contactData) {
        this.form = document.getElementById(formId);
        this.contactInfo = document.getElementById(contactInfoId);
        this.contactData = contactData;
        
        this.init();
    }

    init() {
        // Renderizar cards de informação
        if (this.contactInfo && this.contactData) {
            this.renderContactInfo();
        }
        
        // Configurar formulário
        if (this.form) {
            this.setupForm();
            this.setupFormValidation();
        }
    }

    renderContactInfo() {
        this.contactInfo.innerHTML = '';
        
        this.contactData.forEach(card => {
            const cardElement = this.createInfoCard(card);
            this.contactInfo.appendChild(cardElement);
        });
    }

    createInfoCard(card) {
        const div = document.createElement('div');
        div.className = `info-card${card.fullWidth ? ' full-width' : ''}`;
        
        let contentHTML = '';
        
        if (card.type === 'link') {
            contentHTML = `<a href="${card.link}" ${card.link.startsWith('http') ? 'target="_blank" rel="noopener"' : ''}>${card.content}</a>`;
        } else {
            contentHTML = `<p>${card.content}</p>`;
        }
        
        div.innerHTML = `
            <div class="info-icon">${card.icon}</div>
            <h3>${card.title}</h3>
            ${contentHTML}
        `;
        
        return div;
    }

    setupForm() {
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    }

    setupFormValidation() {
        const formInputs = this.form.querySelectorAll('.form-input');
        
        formInputs.forEach(input => {
            input.addEventListener('blur', () => this.validateField(input));
            input.addEventListener('focus', () => this.resetFieldValidation(input));
        });
    }

    validateField(input) {
        if (input.value.trim() === '') {
            input.style.borderColor = 'var(--error-color)';
            return false;
        } else {
            input.style.borderColor = 'var(--success-color)';
            return true;
        }
    }

    resetFieldValidation(input) {
        input.style.borderColor = 'var(--primary-color)';
    }

    async handleSubmit(e) {
        e.preventDefault();
        
        const submitBtn = this.form.querySelector('.submit-btn');
        const originalText = submitBtn.innerHTML;
        
        // Validar todos os campos
        const inputs = this.form.querySelectorAll('.form-input');
        let isValid = true;
        
        inputs.forEach(input => {
            if (!this.validateField(input)) {
                isValid = false;
            }
        });
        
        if (!isValid) {
            this.showMessage('Please fill in all fields correctly.', 'error');
            return;
        }
        
        // Simulate sending
        submitBtn.innerHTML = '<span class="loading"></span> Sending...';
        submitBtn.style.pointerEvents = 'none';
        
        try {
            // Here you can add the actual sending logic
            await this.sendEmail();
            
            submitBtn.innerHTML = '✓ Sent!';
            submitBtn.style.background = 'linear-gradient(135deg, #4ade80, #22c55e)';
            
            this.showMessage('Message sent successfully!', 'success');
            
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.style.background = '';
                submitBtn.style.pointerEvents = '';
                this.form.reset();
            }, 2000);
            
        } catch (error) {
            submitBtn.innerHTML = originalText;
            submitBtn.style.pointerEvents = '';
            this.showMessage('Error sending message. Please try again.', 'error');
        }
    }

    async sendEmail() {
        // Simulate sending delay
        return new Promise((resolve) => {
            setTimeout(resolve, 1500);
        });
        
        // In production, you would do something like:
        /*
        const formData = new FormData(this.form);
        const response = await fetch('/api/contact', {
            method: 'POST',
            body: formData
        });
        return response.json();
        */
    }

    showMessage(message, type = 'info') {
        // Criar notificação
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            padding: 1rem 2rem;
            background: ${type === 'success' ? 'var(--success-color)' : 'var(--error-color)'};
            color: white;
            border-radius: 10px;
            z-index: 10000;
            animation: slideInRight 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
}

