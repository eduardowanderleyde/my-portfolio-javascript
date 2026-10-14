/**
 * PROJECTS COMPONENT
 * Renders the featured project and the list of other projects
 */

export class Projects {
    constructor(featuredId, listId, featured, projects) {
        this.featuredEl = document.getElementById(featuredId);
        this.listEl = document.getElementById(listId);
        this.featured = featured;
        this.projects = projects;
        this.init();
    }

    init() {
        if (this.featuredEl && this.featured) {
            this.renderFeatured();
        }
        if (this.listEl && this.projects) {
            this.renderList();
        }
    }

    renderFeatured() {
        const f = this.featured;
        this.featuredEl.innerHTML = `
            <div>
                <h3>${f.title}</h3>
                <p class="featured-subtitle">${f.subtitle}</p>
                <p class="featured-context">${f.context}</p>
                <p class="featured-problem">${f.problem}</p>
                <ul class="featured-points">
                    ${f.points.map(point => `<li>${point}</li>`).join('')}
                </ul>
                <p class="stack">${f.stack.join(', ')}</p>
            </div>
            <dl class="results">
                ${f.results.map(r => `<div><dt>${r.value}</dt><dd>${r.label}</dd></div>`).join('')}
            </dl>
        `;
    }

    renderList() {
        this.listEl.innerHTML = this.projects.map(project => {
            const status = project.status ? `<span class="project-status">${project.status}</span>` : '';
            const link = project.link
                ? `<a class="project-link" href="${project.link}" target="_blank" rel="noopener">${project.linkLabel || 'View project'}</a>`
                : '';
            return `
                <li class="project-item">
                    <h3>${project.title} ${status}</h3>
                    <p>${project.description}</p>
                    <p class="stack">${project.tags.join(', ')}</p>
                    ${link}
                </li>
            `;
        }).join('');
    }
}
