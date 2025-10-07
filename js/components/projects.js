/**
 * PROJECTS COMPONENT
 * Dynamically renders portfolio projects
 */

export class Projects {
    constructor(containerId, projectsData) {
        this.container = document.getElementById(containerId);
        this.projectsData = projectsData;
        this.init();
    }

    init() {
        if (this.container && this.projectsData) {
            this.render();
        }
    }

    render() {
        this.container.innerHTML = '';
        
        this.projectsData.forEach((project, index) => {
            const projectCard = this.createProjectCard(project, index);
            this.container.appendChild(projectCard);
        });
    }

    createProjectCard(project, index) {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.setAttribute('data-scroll', '');
        
        card.innerHTML = `
            <div class="project-image" style="background: ${project.gradient};">
                <div class="project-overlay">
                    <a href="${project.link}" target="_blank" rel="noopener" class="project-btn">
                        View on GitHub
                    </a>
                </div>
            </div>
            <div class="project-info">
                <h3>${project.emoji} ${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tags">
                    ${this.renderTags(project.tags)}
                </div>
            </div>
        `;
        
        return card;
    }

    renderTags(tags) {
        return tags.map(tag => `<span class="tag">${tag}</span>`).join('');
    }

    addProject(project) {
        this.projectsData.push(project);
        this.render();
    }

    removeProject(projectId) {
        this.projectsData = this.projectsData.filter(p => p.id !== projectId);
        this.render();
    }

    updateProject(projectId, updatedData) {
        const index = this.projectsData.findIndex(p => p.id === projectId);
        if (index !== -1) {
            this.projectsData[index] = { ...this.projectsData[index], ...updatedData };
            this.render();
        }
    }

    getProjectById(projectId) {
        return this.projectsData.find(p => p.id === projectId);
    }
}
