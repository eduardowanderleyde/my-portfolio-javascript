/**
 * PORTFOLIO DATA
 * Centralized portfolio data for easy maintenance
 */

export const portfolioData = {
    // Personal Information
    personal: {
        name: 'Eduardo Wanderley',
        title: 'Web Developer & Robotics Researcher',
        location: 'Recife, Pernambuco, Brazil',
        university: 'CIn - UFPE',
        degree: 'Master\'s in Computer Science',
        description: 'Ruby on Rails Developer | Mechatronics Engineer | Robotics & AI Researcher'
    },

    // Words for typing effect
    typingWords: [
        'Ruby on Rails Developer',
        'Mechatronics Engineer',
        'AI Researcher',
        'Web Developer'
    ],

    // Projects
    projects: [
        {
            id: 1,
            emoji: '🎫',
            title: 'Bilheteria Cais do Sertão',
            description: 'Ticket system with FastAPI + HTMX + Tailwind. Authentication, reports and exports.',
            tags: ['Python', 'FastAPI', 'HTMX', 'Tailwind CSS'],
            link: 'https://github.com/eduardowanderleyde/bilheteria-cais-sertao',
            gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        },
        {
            id: 2,
            emoji: '📸',
            title: 'Instagram Clone',
            description: 'Full-featured Instagram clone with Rails + Devise + ActiveStorage. Feed, stories, posts and comments.',
            tags: ['Ruby on Rails', 'Devise', 'ActiveStorage', 'PostgreSQL'],
            link: 'https://github.com/eduardowanderleyde/instagram-clone',
            gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
        },
        {
            id: 3,
            emoji: '📡',
            title: 'Wi-Fi Mesh Testbed',
            description: 'Raspberry Pi mesh network with Flask + Socket.IO. RSSI data collection and handover analysis.',
            tags: ['Python', 'Flask', 'Socket.IO', 'Networking', 'IoT'],
            link: 'https://github.com/eduardowanderleyde',
            gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
        },
        {
            id: 4,
            emoji: '🤖',
            title: 'Robotics Research',
            description: 'Master\'s research in Robotics and Artificial Intelligence at UFPE.',
            tags: ['Robotics', 'AI/ML', 'Python', 'Research'],
            link: 'https://github.com/eduardowanderleyde',
            gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)'
        },
        {
            id: 5,
            emoji: '🐕',
            title: 'Dog Social Network',
            description: 'Social network for dogs built with Ruby on Rails.',
            tags: ['Ruby on Rails', 'PostgreSQL', 'Bootstrap'],
            link: 'https://github.com/eduardowanderleyde',
            gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
        },
        {
            id: 6,
            emoji: '🎮',
            title: 'Ping Pong Game',
            description: 'Classic Ping Pong game in pure JavaScript with Canvas API.',
            tags: ['JavaScript', 'Canvas API', 'Game Dev'],
            link: 'https://github.com/eduardowanderleyde',
            gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
        }
    ],

    // Skills
    skills: [
        {
            id: 1,
            icon: '💎',
            name: 'Ruby on Rails',
            progress: 95
        },
        {
            id: 2,
            icon: '🐍',
            name: 'Python (FastAPI/Flask)',
            progress: 90
        },
        {
            id: 3,
            icon: '⚡',
            name: 'JavaScript (ES6+)',
            progress: 85
        },
        {
            id: 4,
            icon: '🤖',
            name: 'Robotics & AI',
            progress: 90
        },
        {
            id: 5,
            icon: '🗄️',
            name: 'PostgreSQL',
            progress: 85
        },
        {
            id: 6,
            icon: '📡',
            name: 'Networking (Wi-Fi/Mesh)',
            progress: 88
        },
        {
            id: 7,
            icon: '🐳',
            name: 'DevOps (Docker/Render)',
            progress: 80
        },
        {
            id: 8,
            icon: '🔧',
            name: 'Mechatronics Engineering',
            progress: 92
        }
    ],

    // Contact Information
    contact: {
        email: 'wanderley.eduardo@gmail.com',
        github: 'https://github.com/eduardowanderleyde',
        lattes: 'http://lattes.cnpq.br/seu-lattes',
        location: 'Recife, Pernambuco, Brazil',
        international: 'Leipzig 🇩🇪 | London 🇬🇧 | Vancouver 🇨🇦 | Recife 🇧🇷'
    },

    // Contact Information Cards
    contactCards: [
        {
            id: 1,
            icon: '📧',
            title: 'Email',
            content: 'wanderley.eduardo@gmail.com',
            link: 'mailto:wanderley.eduardo@gmail.com',
            type: 'link'
        },
        {
            id: 2,
            icon: '🐙',
            title: 'GitHub',
            content: '@eduardowanderleyde',
            link: 'https://github.com/eduardowanderleyde',
            type: 'link'
        },
        {
            id: 3,
            icon: '🎓',
            title: 'Lattes',
            content: 'View Academic Profile',
            link: 'http://lattes.cnpq.br/seu-lattes',
            type: 'link'
        },
        {
            id: 4,
            icon: '📍',
            title: 'Location',
            content: 'Recife, Pernambuco, Brazil',
            type: 'text'
        },
        {
            id: 5,
            icon: '🌍',
            title: 'International Experience',
            content: 'Leipzig 🇩🇪 | London 🇬🇧 | Vancouver 🇨🇦 | Recife 🇧🇷',
            type: 'text',
            fullWidth: true
        }
    ]
};
