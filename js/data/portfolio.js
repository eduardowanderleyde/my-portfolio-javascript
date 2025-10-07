/**
 * PORTFOLIO DATA
 * Centralizing all portfolio data for easy maintenance
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
            emoji: '🐕',
            title: 'Dog Social Media',
            description: 'Social network for dogs built with Ruby on Rails',
            tags: ['Ruby on Rails', 'PostgreSQL', 'Bootstrap'],
            link: 'https://github.com/eduardowanderleyde',
            gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        },
        {
            id: 2,
            emoji: '📸',
            title: 'Instagram Clone',
            description: 'Instagram clone developed with Ruby on Rails',
            tags: ['Ruby on Rails', 'ActiveStorage', 'API'],
            link: 'https://github.com/eduardowanderleyde',
            gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
        },
        {
            id: 3,
            emoji: '🚗',
            title: 'Car Showcase',
            description: 'Car showcase with Next.js 13 and modern API',
            tags: ['Next.js 13', 'TypeScript', 'Tailwind'],
            link: 'https://github.com/eduardowanderleyde',
            gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
        },
        {
            id: 4,
            emoji: '📝',
            title: 'Ruby on Rails Blog',
            description: 'Complete blog about development and technology',
            tags: ['Ruby on Rails', 'Markdown', 'SEO'],
            link: 'https://github.com/eduardowanderleyde',
            gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
        },
        {
            id: 5,
            emoji: '🎮',
            title: 'Ping Pong JS',
            description: 'Classic Ping Pong game in pure JavaScript',
            tags: ['JavaScript', 'Canvas API', 'Game Dev'],
            link: 'https://github.com/eduardowanderleyde',
            gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
        },
        {
            id: 6,
            emoji: '🤖',
            title: 'Robotics Research',
            description: 'Master\'s research in Robotics and Artificial Intelligence',
            tags: ['Robotics', 'AI/ML', 'Python'],
            link: 'https://github.com/eduardowanderleyde',
            gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)'
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
            icon: '⚡',
            name: 'JavaScript',
            progress: 85
        },
        {
            id: 3,
            icon: '🤖',
            name: 'Robotics & AI',
            progress: 90
        },
        {
            id: 4,
            icon: '🐍',
            name: 'Python',
            progress: 88
        },
        {
            id: 5,
            icon: '🗄️',
            name: 'PostgreSQL',
            progress: 85
        },
        {
            id: 6,
            icon: '⚛️',
            name: 'React / Next.js',
            progress: 80
        },
        {
            id: 7,
            icon: '🔧',
            name: 'Engineering',
            progress: 92
        },
        {
            id: 8,
            icon: '🌍',
            name: 'Communication',
            progress: 95
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
