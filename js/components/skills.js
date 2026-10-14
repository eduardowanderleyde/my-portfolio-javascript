/**
 * SKILLS COMPONENT
 * Renders skill groups as a definition list
 */

export class Skills {
    constructor(containerId, skillsData) {
        this.container = document.getElementById(containerId);
        this.skillsData = skillsData;
        this.init();
    }

    init() {
        if (this.container && this.skillsData) {
            this.render();
        }
    }

    render() {
        this.container.innerHTML = this.skillsData.map(group => `
            <div>
                <dt>${group.name}</dt>
                <dd>${group.items.join(', ')}</dd>
            </div>
        `).join('');
    }
}
