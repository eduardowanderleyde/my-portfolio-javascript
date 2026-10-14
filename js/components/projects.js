/**
 * PROJECTS COMPONENT
 * Renders the featured project (with its demo video) and the list of other projects
 */

export class Projects {
    constructor(featuredId, listId) {
        this.featuredEl = document.getElementById(featuredId);
        this.listEl = document.getElementById(listId);
    }

    render(featured, projects, labels) {
        this.labels = labels;
        if (this.featuredEl && featured) {
            this.renderFeatured(featured);
        }
        if (this.listEl && projects) {
            this.renderList(projects);
        }
    }

    renderFeatured(f) {
        this.featuredEl.innerHTML = `
            ${f.video ? this.renderVideo(f.video) : ''}
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

        // Load YouTube only when the visitor asks for the video
        const poster = this.featuredEl.querySelector('.video-poster');
        poster?.addEventListener('click', () => {
            const iframe = document.createElement('iframe');
            iframe.src = `https://www.youtube-nocookie.com/embed/${poster.dataset.video}?autoplay=1&rel=0`;
            iframe.title = this.labels.videoTitle;
            iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
            iframe.allowFullscreen = true;
            poster.replaceWith(iframe);
            iframe.focus();
        });
    }

    renderVideo(id) {
        return `
            <div class="featured-video">
                <button class="video-poster" type="button" data-video="${id}" aria-label="${this.labels.watchDemo}">
                    <img src="https://i.ytimg.com/vi/${id}/maxresdefault.jpg" alt="" loading="lazy">
                    <span class="video-play" aria-hidden="true">
                        <svg viewBox="0 0 24 24" width="28" height="28"><path d="M8 5v14l11-7z" fill="currentColor"/></svg>
                    </span>
                </button>
            </div>
        `;
    }

    renderList(projects) {
        this.listEl.innerHTML = projects.map(project => {
            const status = project.status ? `<span class="project-status">${project.status}</span>` : '';
            const link = project.link
                ? `<a class="project-link" href="${project.link}" target="_blank" rel="noopener">${project.linkLabel || this.labels.viewProject}</a>`
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
