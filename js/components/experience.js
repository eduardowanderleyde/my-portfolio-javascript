/**
 * EXPERIENCE COMPONENT
 * Renders the professional timeline
 */

export class Experience {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
    }

    render(experience) {
        if (!this.container || !experience) return;

        this.container.innerHTML = experience.map(job => `
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
