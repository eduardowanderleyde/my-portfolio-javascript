/**
 * MAIN.JS - Main Initializer
 * Renders the portfolio sections from data and starts the hero figure
 */

import { portfolioData } from './data/portfolio.js';

import { ThemeToggle } from './components/theme.js';
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

    new Experience('experienceList', portfolioData.experience);
    new Projects('featuredProject', 'projectList', portfolioData.featured, portfolioData.projects);
    new Skills('skillsList', portfolioData.skills);
    new Contact(portfolioData);
}

// Module scripts are deferred, so the DOM is already parsed here
initPortfolio();
