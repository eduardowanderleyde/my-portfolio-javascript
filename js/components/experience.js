/**
 * EXPERIENCE COMPONENT
 * Renders the professional timeline
 */

export class Experience {
    constructor(containerId, experience) {
        this.container = document.getElementById(containerId);
        this.experience = experience;
        this.init();
    }

    init() {
        if (this.container && this.experience) {
            this.render();
        }
    }

    render() {
        this.container.innerHTML = this.experience.map(job => `
            <li class="timeline-item">
                <p class="timeline-period">${job.period}</p>
                <div>
                    <h3>${job.role}</h3>
                    <p class="timeline-company">${job.company}, ${job.location}</p>
                    <ul class="timeline-highlights">
                        ${job.highlights.map(h => `<li>${h}</li>`).join('')}
                    </ul>
                    <p class="stack">${job.tags.join(', ')}</p>
                </div>
            </li>
        `).join('');
    }
}
