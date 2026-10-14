/**
 * MAIN.JS - Main Initializer
 * Renders the portfolio sections in the chosen language and starts the hero figure
 */

import { ui, content } from './data/portfolio.js';

import { ThemeToggle } from './components/theme.js';
import { LanguageSwitcher } from './components/language.js';
import { Navigation } from './components/navigation.js';
import { TrajectoryMap } from './components/trajectory.js';
import { Experience } from './components/experience.js';
import { Projects } from './components/projects.js';
import { Skills } from './components/skills.js';
import { Contact } from './components/contact.js';

function initPortfolio() {
    new ThemeToggle();
    new Navigation();
    new TrajectoryMap('trajectoryMap');

    const experience = new Experience('experienceList');
    const projects = new Projects('featuredProject', 'projectList');
    const skills = new Skills('skillsList');
    const contact = new Contact();

    // Re-render every section whenever the language changes (including on load)
    new LanguageSwitcher('langToggle', ui, (lang) => {
        const data = content[lang];
        experience.render(data.experience);
        projects.render(data.featured, data.projects, ui[lang]);
        skills.render(data.skills);
        contact.render(data, ui[lang]);
    });
}

// Module scripts are deferred, so the DOM is already parsed here
initPortfolio();
