/**
 * CONTACT COMPONENT
 * Renders education, publications and contact details
 */

export class Contact {
    constructor() {
        this.educationEl = document.getElementById('educationList');
        this.publicationEl = document.getElementById('publicationList');
        this.contactEl = document.getElementById('contactContent');
    }

    render(data, labels) {
        this.renderEducation(data.education);
        this.renderPublications(data.publications);
        this.renderContact(data.contact, labels);
    }

    renderEducation(education) {
        if (!this.educationEl) return;
        this.educationEl.innerHTML = education.map(e => `
            <li>
                <strong>${e.degree}</strong>
                <span>${[e.school, e.period].filter(Boolean).join(', ')}</span>
            </li>
        `).join('');
    }

    renderPublications(publications) {
        if (!this.publicationEl) return;
        this.publicationEl.innerHTML = publications.map(p => {
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

    renderContact(c, labels) {
        if (!this.contactEl) return;
        this.contactEl.innerHTML = `
            <a class="contact-email" href="mailto:${c.email}">${c.email}</a>
            <p class="contact-note">${c.note}</p>
            <div class="contact-links">
                <a class="btn btn-primary" href="${labels.cvFile}" download>${labels.downloadCv}</a>
                ${c.links.map(link => `<a class="btn" href="${link.href}" target="_blank" rel="noopener">${link.label}</a>`).join('')}
            </div>
        `;
    }
}
