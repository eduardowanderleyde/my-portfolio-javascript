/**
 * SKILLS COMPONENT
 * Renders skill groups as a definition list
 */

export class Skills {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
    }

    render(skills) {
        if (!this.container || !skills) return;

        this.container.innerHTML = skills.map(group => `
            <div>
                <dt>${group.name}</dt>
                <dd>${group.items.join(', ')}</dd>
            </div>
        `).join('');
    }
}
