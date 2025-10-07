/**
 * SKILLS COMPONENT
 * Dynamically renders skills
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
        this.container.innerHTML = '';
        
        this.skillsData.forEach((skill, index) => {
            const skillItem = this.createSkillItem(skill, index);
            this.container.appendChild(skillItem);
        });
    }

    createSkillItem(skill, index) {
        const item = document.createElement('div');
        item.className = 'skill-item';
        item.setAttribute('data-scroll', '');
        
        item.innerHTML = `
            <div class="skill-icon">${skill.icon}</div>
            <h3>${skill.name}</h3>
            <div class="skill-bar">
                <div class="skill-progress" data-progress="${skill.progress}"></div>
            </div>
            <span class="skill-percent">${skill.progress}%</span>
        `;
        
        return item;
    }

    addSkill(skill) {
        this.skillsData.push(skill);
        this.render();
    }

    removeSkill(skillId) {
        this.skillsData = this.skillsData.filter(s => s.id !== skillId);
        this.render();
    }

    updateSkill(skillId, updatedData) {
        const index = this.skillsData.findIndex(s => s.id === skillId);
        if (index !== -1) {
            this.skillsData[index] = { ...this.skillsData[index], ...updatedData };
            this.render();
        }
    }

    getSkillById(skillId) {
        return this.skillsData.find(s => s.id === skillId);
    }
}
