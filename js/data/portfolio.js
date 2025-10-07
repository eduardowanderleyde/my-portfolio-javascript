/**
 * PORTFOLIO DATA
 * Centralizando todos os dados do portfólio para fácil manutenção
 */

export const portfolioData = {
    // Informações Pessoais
    personal: {
        name: 'Eduardo Wanderley',
        title: 'Web Developer & Robotics Researcher',
        location: 'Recife, Pernambuco, Brasil',
        university: 'CIn - UFPE',
        degree: 'Mestre em Ciência da Computação',
        description: 'Ruby on Rails Developer | Engenheiro Mecatrônico | Pesquisador em Robótica & IA'
    },

    // Palavras para o efeito de digitação
    typingWords: [
        'Ruby on Rails Developer',
        'Engenheiro Mecatrônico',
        'Pesquisador em IA',
        'Web Developer'
    ],

    // Projetos
    projects: [
        {
            id: 1,
            emoji: '🐕',
            title: 'Dog Social Media',
            description: 'Rede social para cachorros construída com Ruby on Rails',
            tags: ['Ruby on Rails', 'PostgreSQL', 'Bootstrap'],
            link: 'https://github.com/eduardowanderleyde',
            gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        },
        {
            id: 2,
            emoji: '📸',
            title: 'Instagram Clone',
            description: 'Clone do Instagram desenvolvido com Ruby on Rails',
            tags: ['Ruby on Rails', 'ActiveStorage', 'API'],
            link: 'https://github.com/eduardowanderleyde',
            gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
        },
        {
            id: 3,
            emoji: '🚗',
            title: 'Car Showcase',
            description: 'Showcase de carros com Next.js 13 e API moderna',
            tags: ['Next.js 13', 'TypeScript', 'Tailwind'],
            link: 'https://github.com/eduardowanderleyde',
            gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
        },
        {
            id: 4,
            emoji: '📝',
            title: 'Ruby on Rails Blog',
            description: 'Blog completo sobre desenvolvimento e tecnologia',
            tags: ['Ruby on Rails', 'Markdown', 'SEO'],
            link: 'https://github.com/eduardowanderleyde',
            gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
        },
        {
            id: 5,
            emoji: '🎮',
            title: 'Ping Pong JS',
            description: 'Jogo clássico de Ping Pong em JavaScript puro',
            tags: ['JavaScript', 'Canvas API', 'Game Dev'],
            link: 'https://github.com/eduardowanderleyde',
            gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
        },
        {
            id: 6,
            emoji: '🤖',
            title: 'Pesquisa em Robótica',
            description: 'Pesquisa de mestrado em Robótica e Inteligência Artificial',
            tags: ['Robótica', 'AI/ML', 'Python'],
            link: 'https://github.com/eduardowanderleyde',
            gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)'
        }
    ],

    // Habilidades
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
            name: 'Robótica & IA',
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
            name: 'Engenharia',
            progress: 92
        },
        {
            id: 8,
            icon: '🌍',
            name: 'Comunicação',
            progress: 95
        }
    ],

    // Informações de Contato
    contact: {
        email: 'wanderley.eduardo@gmail.com',
        github: 'https://github.com/eduardowanderleyde',
        lattes: 'http://lattes.cnpq.br/seu-lattes',
        location: 'Recife, Pernambuco, Brasil',
        international: 'Leipzig 🇩🇪 | London 🇬🇧 | Vancouver 🇨🇦 | Recife 🇧🇷'
    },

    // Cards de Informação de Contato
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
            content: 'Ver Perfil Acadêmico',
            link: 'http://lattes.cnpq.br/seu-lattes',
            type: 'link'
        },
        {
            id: 4,
            icon: '📍',
            title: 'Localização',
            content: 'Recife, Pernambuco, Brasil',
            type: 'text'
        },
        {
            id: 5,
            icon: '🌍',
            title: 'Experiência Internacional',
            content: 'Leipzig 🇩🇪 | London 🇬🇧 | Vancouver 🇨🇦 | Recife 🇧🇷',
            type: 'text',
            fullWidth: true
        }
    ]
};

