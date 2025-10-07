# 🚀 Eduardo Wanderley - Interactive Portfolio

Modern and interactive portfolio built with modular vanilla JavaScript architecture, modular CSS, and semantic HTML.

## 👨‍💻 About

Eduardo Wanderley - Web Developer, Mechatronics Engineer, and Robotics & AI Researcher  
Master's in Computer Science - CIn/UFPE  
Recife, Pernambuco, Brazil 🇧🇷

## 🏗️ Project Architecture

```
my-portfolio-javascript/
├── index.html              # Semantic HTML structure
├── css/                    # Modular styles
│   ├── base.css           # Reset, variables, typography
│   ├── components.css     # Reusable components
│   ├── layout.css         # Layout and sections
│   └── animations.css     # Animations and transitions
├── js/                     # Modular JavaScript (ES6+)
│   ├── main.js            # Main initializer
│   ├── data/              # Application data
│   │   └── portfolio.js   # Projects, skills, etc.
│   ├── components/        # JS Components
│   │   ├── cursor.js      # Custom cursor
│   │   ├── theme.js       # Light/dark theme toggle
│   │   ├── navigation.js  # Navigation and scroll
│   │   ├── typing.js      # Typing effect
│   │   ├── projects.js    # Projects rendering
│   │   ├── skills.js      # Skills rendering
│   │   └── contact.js     # Contact form
│   └── utils/             # Utilities
│       ├── scroll.js      # Scroll animations observer
│       └── effects.js     # Visual effects (ripple, magnetic)
└── README.md              # Documentation
```

## ✨ Features

### 🎨 Visual Interactions
- **Custom Cursor**: Animated with smooth delay
- **Light/Dark Theme**: Persistent with localStorage
- **Button Effects**: Magnetic, ripple, and shine
- **3D Cards**: Mouse-based tilt
- **Parallax**: Depth effect on hero

### 🔧 Modular Components
- Reusable component system
- Centralized and easy-to-update data
- Dynamic content rendering
- Scalable architecture

### 📱 Responsive and Accessible
- Mobile-first design
- HTML5 semantics
- ARIA labels
- Optimized performance

## 🚀 How to Use

### 1. Clone the repository
```bash
git clone https://github.com/eduardowanderleyde/my-portfolio-javascript.git
```

### 2. Open the project
```bash
cd my-portfolio-javascript
```

### 3. Run locally
- Open `index.html` in your browser
- Or use a local server:

```bash
# Python
python -m http.server 8000

# Node.js (http-server)
npx http-server
```

## 🎯 Deploy to GitHub Pages

```bash
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/eduardowanderleyde/my-portfolio-javascript.git
git push -u origin main
```

### Configure GitHub Pages:
1. Go to Settings → Pages
2. Source: Deploy from branch
3. Branch: main / (root)
4. Save

## 🛠️ Technologies

- **HTML5**: Semantic structure
- **CSS3**: Grid, Flexbox, Custom Properties, Animations
- **JavaScript ES6+**: Modules, Classes, Async/Await
- **Git**: Version control

## 📝 Customization

### Update Data
Edit `js/data/portfolio.js` to modify:
- Projects
- Skills
- Contact information
- Hero texts

### Colors
Modify CSS variables in `css/base.css`:
```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    /* ... */
}
```

## 🎮 Easter Egg

Try the Konami Code: ↑ ↑ ↓ ↓ ← → ← → B A

## 🧩 Code Quality & Best Practices

### ✅ Implemented Engineering Principles

- **Single Responsibility**: Each module has a single, well-defined purpose
- **DRY (Don't Repeat Yourself)**: Data centralized, no code duplication
- **Separation of Concerns**: Clear division between data, logic, and presentation
- **Encapsulation**: ES6 modules with proper exports/imports
- **Scalability**: Easy to add new projects, skills, or features
- **Maintainability**: Clear naming conventions and code documentation

### 📁 Architecture Benefits

1. **Data Layer** (`js/data/`): All content in one place
2. **Component Layer** (`js/components/`): Reusable, independent components
3. **Utility Layer** (`js/utils/`): Shared functionality
4. **Presentation Layer** (`css/`): Modular, organized styles

### 🔄 How to Add New Content

**Add a new project:**
```javascript
// In js/data/portfolio.js
projects: [
    // ... existing projects
    {
        id: 7,
        emoji: '🎨',
        title: 'New Project',
        description: 'Project description',
        tags: ['Tag1', 'Tag2'],
        link: 'https://github.com/...',
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    }
]
```

**Add a new skill:**
```javascript
// In js/data/portfolio.js
skills: [
    // ... existing skills
    {
        id: 9,
        icon: '🎯',
        name: 'New Skill',
        progress: 85
    }
]
```

## 📄 License

MIT License - Free for personal and commercial use

## 📞 Contact

- **Email**: wanderley.eduardo@gmail.com
- **GitHub**: [@eduardowanderleyde](https://github.com/eduardowanderleyde)
- **Lattes**: [View profile](http://lattes.cnpq.br/seu-lattes)

---

**Developed with ❤️ by Eduardo Wanderley**

*Clean code, modular architecture, and modern JavaScript practices*
