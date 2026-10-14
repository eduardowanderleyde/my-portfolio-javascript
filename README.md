# Eduardo Wanderley - Portfolio

Personal portfolio of Eduardo Wanderley, AI engineer in Recife, Brazil: LLM agents, robotics and the full stack systems around them. M.Sc. candidate in Computer Science at CIn-UFPE.

Plain HTML, CSS and JavaScript (ES modules). No framework, no build step.

## Design

The hero is an occupancy-grid map, like the ones SLAM produces, where a recorded robot route is drawn and then replayed 10 times almost exactly on top of it. It shows the real repeatability result of Fleet UI, my Master's research (mean RMSE 3.35 cm). That animation is the one bold element; the rest of the page stays quiet.

- Palette from the map itself: free space, walls and one route color (`css/base.css`)
- Bricolage Grotesque for headings, Public Sans for text
- Light and dark themes, following the system until the visitor chooses
- Respects `prefers-reduced-motion` (the map is drawn in its final state)

## Structure

```
my-portfolio-javascript/
├── index.html               # Page structure and hero copy
├── assets/                  # Photo
├── css/
│   ├── base.css             # Tokens (color, type, spacing), reset, typography
│   ├── layout.css           # Header, hero, sections, footer
│   ├── components.css       # Buttons, timeline, projects, toolbox, contact
│   └── animations.css       # Hero load sequence and reduced motion
└── js/
    ├── main.js              # Wires data into components
    ├── data/portfolio.js    # All content: experience, projects, skills, education, contact
    └── components/
        ├── trajectory.js    # Hero map animation (canvas)
        ├── experience.js    # Work timeline
        ├── projects.js      # Featured project and project list
        ├── skills.js        # Toolbox
        ├── contact.js       # Education, publications and contact
        ├── navigation.js    # Active nav link
        └── theme.js         # Light/dark toggle
```

## Run locally

ES modules do not load from `file://`, so serve the folder:

```bash
python -m http.server 8000
# or
npx serve
```

Then open http://localhost:8000.

## Deploy to GitHub Pages

Settings → Pages → Deploy from branch → `main` / root.

## Update content

Edit `js/data/portfolio.js`. For example, a new project:

```javascript
projects: [
    {
        id: 8,
        title: 'New project',
        status: 'Live',                 // optional badge
        description: 'What it does, for whom.',
        tags: ['Python', 'FastAPI'],
        link: 'https://example.com',    // optional
        linkLabel: 'Visit the site'     // optional, defaults to "View project"
    }
]
```

## Contact

- **Email**: wanderley.eduardo@gmail.com
- **LinkedIn**: [in/edu-wanderley](https://www.linkedin.com/in/edu-wanderley)
- **GitHub**: [@eduardowanderleyde](https://github.com/eduardowanderleyde)
- **Lattes**: [lattes.cnpq.br/4068383542057315](https://lattes.cnpq.br/4068383542057315)

## License

MIT
