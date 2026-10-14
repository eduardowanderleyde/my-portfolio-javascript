/**
 * CONTACT COMPONENT
 * Renders education, publications and contact details
 */

export class Contact {
    constructor(data) {
        this.data = data;
        this.init();
    }

    init() {
        this.renderEducation(document.getElementById('educationList'));
        this.renderPublications(document.getElementById('publicationList'));
        this.renderContact(document.getElementById('contactContent'));
    }

    renderEducation(el) {
        if (!el) return;
        el.innerHTML = this.data.education.map(e => `
            <li>
                <strong>${e.degree}</strong>
                <span>${[e.school, e.period].filter(Boolean).join(', ')}</span>
            </li>
        `).join('');
    }

    renderPublications(el) {
        if (!el) return;
        el.innerHTML = this.data.publications.map(p => {
            const title = p.link
                ? `<a href="${p.link}" target="_blank" rel="noopener">${p.title}</a>`
                : p.title;
            return `
                <h3>${title}</h3>
                <span>${p.venue}</span>
                <span>${p.authors}</span>
            `;
        }).join('');
    }

    renderContact(el) {
        if (!el) return;
        const c = this.data.contact;
        el.innerHTML = `
            <a class="contact-email" href="mailto:${c.email}">${c.email}</a>
            <p class="contact-note">${c.note}</p>
            <div class="contact-links">
                ${c.links.map(link => `<a class="btn" href="${link.href}" target="_blank" rel="noopener">${link.label}</a>`).join('')}
            </div>
        `;
    }
}
