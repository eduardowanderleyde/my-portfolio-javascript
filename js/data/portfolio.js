/**
 * PORTFOLIO DATA
 * Centralized content in English and Portuguese.
 * `ui` holds the fixed page text (keys match data-i18n attributes in index.html);
 * `content` holds the sections rendered by the components.
 */

const contactLinks = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/edu-wanderley' },
    { label: 'GitHub', href: 'https://github.com/eduardowanderleyde' },
    { label: 'Lattes', href: 'https://lattes.cnpq.br/4068383542057315' }
];

const paperLink = 'https://doi.org/10.5753/sbes.2025.11613';

export const ui = {
    en: {
        htmlLang: 'en',
        title: 'Eduardo Wanderley - AI Engineer',
        description: 'Eduardo Wanderley - AI engineer building LLM agents, robotics tooling and the full stack systems around them. M.Sc. candidate in Computer Science at CIn-UFPE, Recife, Brazil.',
        skipLink: 'Skip to content',
        navWork: 'Work',
        navProjects: 'Projects',
        navToolbox: 'Toolbox',
        navContact: 'Contact',
        themeLabel: 'Switch color theme',
        langSwitch: 'PT',
        langLabel: 'Ver em português',
        heroLead: 'AI engineer. I build LLM agents that act in the real world, from robots following plain-language missions to assistants that answer from company knowledge.',
        heroMeta: '6+ years shipping the full stack around them: ERPs, intranets, APIs and data pipelines in production. Python, FastAPI, React and the Claude and OpenAI APIs. M.Sc. candidate at CIn-UFPE, based in Recife, Brazil.',
        emailMe: 'Email me',
        downloadCv: 'Download CV',
        cvFile: 'assets/cv/Eduardo-Wanderley-Resume-EN.pdf',
        mapLabel: 'Occupancy map of two rooms with one recorded robot route and ten replays drawn almost exactly on top of it',
        mapCaption: '<strong>Fleet UI, my Master\'s research.</strong> One recorded route, then 10 autonomous replays in simulation. Mean deviation from the original path: 3.35&nbsp;cm.',
        workTitle: 'Work',
        projectsTitle: 'Projects',
        toolboxTitle: 'Toolbox',
        educationTitle: 'Education and research',
        contactTitle: 'Get in touch',
        footer: '© 2026 Eduardo Wanderley. Built with plain HTML, CSS and JavaScript.',
        viewProject: 'View project',
        watchDemo: 'Play the Fleet UI demo video',
        videoTitle: 'Fleet UI demo video'
    },
    pt: {
        htmlLang: 'pt-BR',
        title: 'Eduardo Wanderley - Engenheiro de IA',
        description: 'Eduardo Wanderley - Engenheiro de IA que constrói agentes com LLMs, ferramentas para robótica e os sistemas full stack ao redor deles. Mestrando em Ciência da Computação no CIn-UFPE, Recife.',
        skipLink: 'Pular para o conteúdo',
        navWork: 'Experiência',
        navProjects: 'Projetos',
        navToolbox: 'Ferramentas',
        navContact: 'Contato',
        themeLabel: 'Alternar tema de cores',
        langSwitch: 'EN',
        langLabel: 'View in English',
        heroLead: 'Engenheiro de IA. Construo agentes com LLMs que agem no mundo real, de robôs que seguem missões em linguagem natural a assistentes que respondem a partir do conhecimento da empresa.',
        heroMeta: 'Mais de 6 anos entregando o full stack ao redor deles: ERPs, intranets, APIs e pipelines de dados em produção. Python, FastAPI, React e as APIs da Claude e da OpenAI. Mestrando no CIn-UFPE, em Recife.',
        emailMe: 'Enviar e-mail',
        downloadCv: 'Baixar currículo',
        cvFile: 'assets/cv/Eduardo-Wanderley-Curriculo-PT.pdf',
        mapLabel: 'Mapa de ocupação de duas salas com uma rota de robô gravada e dez repetições desenhadas quase exatamente por cima dela',
        mapCaption: '<strong>Fleet UI, minha pesquisa de mestrado.</strong> Uma rota gravada e depois 10 repetições autônomas em simulação. Desvio médio em relação ao caminho original: 3,35&nbsp;cm.',
        workTitle: 'Experiência',
        projectsTitle: 'Projetos',
        toolboxTitle: 'Ferramentas',
        educationTitle: 'Formação e pesquisa',
        contactTitle: 'Contato',
        footer: '© 2026 Eduardo Wanderley. Feito com HTML, CSS e JavaScript puros.',
        viewProject: 'Ver projeto',
        watchDemo: 'Assistir ao vídeo de demonstração do Fleet UI',
        videoTitle: 'Vídeo de demonstração do Fleet UI'
    }
};

export const content = {
    en: {
        experience: [
            {
                role: 'ERP Developer (Freelance)',
                company: 'Engeletra',
                location: 'Recife, PE',
                period: 'May 2026 – Present',
                highlights: [
                    'Designed and built the company ERP, in daily use by its team: a vertical system for industrial electrical maintenance with 10+ operational modules on Electron, React and FastAPI',
                    'Modeled the end-to-end flow from service request and quote (with per-invoice taxes) to work order, electrical tests, technical report, billing and finance',
                    'Structured the domain on PostgreSQL 17, SQLAlchemy 2 and Alembic, with accounts receivable/payable, payment forecasting and payroll'
                ],
                tags: ['Electron', 'React', 'FastAPI', 'PostgreSQL']
            },
            {
                role: 'Systems Analyst',
                company: 'Empetur (Government of Pernambuco)',
                location: 'Recife, PE',
                period: 'Sep 2025 – Present',
                highlights: [
                    'Develops and maintains the corporate intranet in Next.js, including a ticketing module for administrative departments',
                    'Administers on-premises Windows Server and Ubuntu Server, Docker containers, Active Directory, Samba and PostgreSQL/MySQL databases',
                    'Built Python services that collect infrastructure metrics into management dashboards, and API integrations between departments'
                ],
                tags: ['Next.js', 'Docker', 'Linux', 'Active Directory']
            },
            {
                role: 'Systems Analyst / Data Engineer',
                company: 'Campello & Siqueira',
                location: 'Recife, PE',
                period: 'Jan 2024 – Apr 2025',
                highlights: [
                    'Led ETL pipelines and data models for financial and operational dashboards',
                    'Built Apache Airflow DAGs with SLAs, alerts and reprocessing for daily critical data',
                    'Optimized SQL on BigQuery and PostgreSQL and added data-quality validation before publishing'
                ],
                tags: ['Airflow', 'BigQuery', 'PostgreSQL', 'ETL']
            },
            {
                role: 'Systems Analyst (Resident)',
                company: 'Softex residency at UFPE',
                location: 'Recife, PE',
                period: 'Jan 2023 – Jan 2024',
                highlights: [
                    'Created a dataset and computer-vision model that detects tubes, trays and holes and guides a robotic arm placing tubes into trays',
                    'Built Flask backends with REST APIs and WebSockets for real-time telemetry of robotic systems',
                    'Developed the Flutter frontend of an app to control a Kinova robotic arm'
                ],
                tags: ['Computer Vision', 'Flask', 'WebSockets', 'Flutter']
            },
            {
                role: 'Software Developer (Freelance)',
                company: 'C.E.S.A.R, Hospital Português and others',
                location: 'Recife, PE',
                period: 'Feb 2020 – Nov 2022',
                highlights: [
                    'Delivered web applications with automated reports and data-driven user profiles',
                    'Ran requirements gathering, functional documentation and incremental delivery with technical and business stakeholders'
                ],
                tags: ['Web', 'Requirements']
            }
        ],

        featured: {
            title: 'Fleet UI',
            subtitle: 'LLM agents that run autonomous-navigation experiments on a robot fleet',
            context: 'Master\'s research at CIn-UFPE, 2024 – 2026',
            video: 'GtZP2-BW4CU',
            problem: 'Reproducibility in mobile robotics is rarely systematic: every lab improvises the tooling to configure navigation experiments, record sensors across runs and compare trajectories. Fleet UI makes those steps explicit, automated and reusable, and lets researchers drive them in plain language.',
            points: [
                'Agent layer on the Claude API: Planner, Executor and Analyst agents turn plain-language instructions into robot actions, full repeatability campaigns and diagnoses of anomalous runs, with one isolated agent per robot',
                'Compared LLM mission allocation against fixed, greedy and optimal allocators for multi-robot missions',
                'Record–replay protocol on TurtleBot4 robots with ROS 2 Jazzy, Nav2 and SLAM Toolbox in Gazebo, logging LiDAR, odometry, IMU and SLAM pose to MCAP bags',
                'React + Vite interface and FastAPI backend with a ROS 2 bridge over WebSockets; pytest, GitHub Actions CI and Docker Compose for Linux and Windows'
            ],
            results: [
                { value: '50 / 50', label: 'optimal mission allocations by the LLM in the hardest scenario (3 robots, 10 missions); fixed dispatch was up to 106% above optimal' },
                { value: '3.35 cm', label: 'mean RMSE across 10 independent replays of a recorded route (max 4.76 cm)' },
                { value: '1/5 → 10/10', label: 'simultaneous multi-robot startup success after diagnosing and replacing the DDS layer' }
            ],
            stack: ['Claude API', 'Python', 'ROS 2', 'Nav2', 'Gazebo', 'FastAPI', 'React', 'Docker']
        },

        projects: [
            {
                title: 'Internal support chatbot',
                description: 'AI assistant that answers internal support questions from company knowledge, using retrieval-augmented generation with semantic search and Datadog monitoring.',
                tags: ['Python', 'LangChain', 'FastAPI', 'FAISS', 'PostgreSQL']
            },
            {
                title: 'Engeletra ERP',
                status: 'In production',
                description: 'Vertical ERP for industrial electrical maintenance with 10+ modules, used by about 10 people: quotes with per-invoice taxes, work orders, electrical tests, technical reports, billing and finance.',
                tags: ['Electron', 'React', 'FastAPI', 'PostgreSQL', 'SQLAlchemy']
            },
            {
                title: 'Wi-Fi Mesh test environment',
                description: 'Reconfigurable testbed where mobile robots carry Mesh routers while Raspberry Pi Zero 2 W boards collect signal, handover and latency data. Published at SBES 2025.',
                tags: ['Robotics', 'Raspberry Pi', 'Python', 'Networking'],
                link: paperLink,
                linkLabel: 'Read the paper'
            },
            {
                title: 'Casa Bacurau',
                status: 'Live',
                description: 'Website presenting the services and venue of a commercial space, with a responsive interface focused on usability.',
                tags: ['Web', 'Responsive UI'],
                link: 'http://casabacurau.com.br/',
                linkLabel: 'Visit the site'
            },
            {
                title: 'Cais do Sertão ticketing',
                description: 'Ticketing and management system for a museum: sales, free admissions, group visits, role-based access and reports exported to Excel and CSV.',
                tags: ['FastAPI', 'SQLAlchemy', 'PostgreSQL', 'HTMX']
            },
            {
                title: 'Acende Pavio store',
                status: 'Being rebuilt',
                description: 'Online store with catalog, cart, orders and an admin panel, with Mercado Pago payments and shipping quotes by postal code.',
                tags: ['E-commerce', 'Mercado Pago']
            },
            {
                title: 'Educational data mining',
                description: 'Modeled school performance across ~5,500 Brazilian municipalities (SAEB) with logistic regression and decision trees, turning results into rules education managers can act on.',
                tags: ['Python', 'Pandas', 'Machine Learning']
            }
        ],

        skills: [
            { name: 'AI & data', items: ['LLM agents', 'Claude API', 'OpenAI API', 'LangChain', 'RAG (FAISS)', 'Computer vision', 'Airflow', 'PySpark', 'Pandas'] },
            { name: 'Languages', items: ['Python', 'SQL', 'TypeScript', 'JavaScript', 'Kotlin', 'Ruby'] },
            { name: 'Backend', items: ['FastAPI', 'Flask', 'Node.js', 'Ruby on Rails', 'SQLAlchemy', 'REST', 'WebSockets', 'JWT'] },
            { name: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS', 'Electron', 'Flutter'] },
            { name: 'Robotics', items: ['ROS 2', 'Nav2', 'SLAM', 'Gazebo', 'Arduino'] },
            { name: 'Databases', items: ['PostgreSQL', 'MySQL', 'BigQuery', 'MongoDB', 'SQLite', 'Alembic'] },
            { name: 'Infra & DevOps', items: ['Docker', 'Linux', 'Windows Server', 'Active Directory', 'GCP', 'AWS', 'CI/CD', 'Datadog'] },
            { name: 'Engineering', items: ['Software architecture', 'Data modeling', 'Requirements', 'Process mapping', 'Legacy systems'] },
            { name: 'Spoken languages', items: ['Portuguese (native)', 'English (fluent)', 'Spanish (B1)', 'German (A1)'] }
        ],

        education: [
            { degree: 'M.Sc. in Computer Science', school: 'CIn, Federal University of Pernambuco (UFPE)', period: '2024 – 2026, expected Dec 2026' },
            { degree: 'Graduate certificate in Robotics and AI applied to software testing', school: 'CIn, UFPE', period: '2023' },
            { degree: 'Technologist in Internet Systems', school: 'Catholic University of Pernambuco (UNICAP)', period: '2021 – 2022' },
            { degree: 'B.Eng. in Automation and Control Engineering', school: 'University of Pernambuco (UPE)', period: '2011 – 2021' },
            { degree: 'Lived in Leipzig, Germany; English studies in London and Vancouver', school: 'International experience', period: '' }
        ],

        publications: [
            {
                title: 'Mobile Robotics for Throughput Testing in a Reconfigurable Test Environment',
                venue: 'SBES 2025, Brazilian Symposium on Software Engineering, pp. 859–864',
                authors: 'Eduardo Araújo, Breno Miranda',
                link: paperLink
            }
        ],

        contact: {
            email: 'wanderley.eduardo@gmail.com',
            note: 'Open to AI engineering roles. Based in Recife, Brazil.',
            links: contactLinks
        }
    },

    pt: {
        experience: [
            {
                role: 'Desenvolvedor de ERP (freelance)',
                company: 'Engeletra',
                location: 'Recife, PE',
                period: 'mai 2026 – atual',
                highlights: [
                    'Projetei e desenvolvi o ERP da empresa, em uso diário pela equipe: um sistema vertical para manutenção elétrica industrial com mais de 10 módulos em Electron, React e FastAPI',
                    'Modelei o fluxo completo, da solicitação de serviço e do orçamento (com impostos por nota) à ordem de serviço, ensaios elétricos, relatório técnico, faturamento e financeiro',
                    'Estruturei o domínio em PostgreSQL 17, SQLAlchemy 2 e Alembic, com contas a receber e a pagar, previsão de pagamentos e folha de pagamento'
                ],
                tags: ['Electron', 'React', 'FastAPI', 'PostgreSQL']
            },
            {
                role: 'Analista de Sistemas',
                company: 'Empetur (Governo de Pernambuco)',
                location: 'Recife, PE',
                period: 'set 2025 – atual',
                highlights: [
                    'Desenvolvo e mantenho a intranet corporativa em Next.js, incluindo um módulo de chamados para os setores administrativos',
                    'Administro servidores on-premises Windows Server e Ubuntu Server, containers Docker, Active Directory, Samba e bancos PostgreSQL/MySQL',
                    'Criei serviços em Python que coletam métricas de infraestrutura para dashboards de gestão, e integrações via API entre departamentos'
                ],
                tags: ['Next.js', 'Docker', 'Linux', 'Active Directory']
            },
            {
                role: 'Analista de Sistemas / Engenheiro de Dados',
                company: 'Campello & Siqueira',
                location: 'Recife, PE',
                period: 'jan 2024 – abr 2025',
                highlights: [
                    'Liderei pipelines ETL e modelos de dados para dashboards financeiros e operacionais',
                    'Construí DAGs no Apache Airflow com SLA, alertas e reprocessamento para dados críticos diários',
                    'Otimizei consultas SQL no BigQuery e no PostgreSQL e implementei validações de qualidade de dados antes da publicação'
                ],
                tags: ['Airflow', 'BigQuery', 'PostgreSQL', 'ETL']
            },
            {
                role: 'Analista de Sistemas (residente)',
                company: 'Residência Softex na UFPE',
                location: 'Recife, PE',
                period: 'jan 2023 – jan 2024',
                highlights: [
                    'Criei um dataset e um modelo de visão computacional que reconhece tubos, bandejas e furos e guia um braço robótico a posicionar os tubos nas bandejas',
                    'Desenvolvi backends Flask com APIs REST e WebSockets para telemetria em tempo real de sistemas robóticos',
                    'Desenvolvi o frontend em Flutter de um aplicativo para controlar um braço robótico Kinova'
                ],
                tags: ['Visão computacional', 'Flask', 'WebSockets', 'Flutter']
            },
            {
                role: 'Desenvolvedor de software (freelance)',
                company: 'C.E.S.A.R, Hospital Português e outros',
                location: 'Recife, PE',
                period: 'fev 2020 – nov 2022',
                highlights: [
                    'Entreguei aplicações web com relatórios automatizados e perfis de usuários orientados a dados',
                    'Conduzi levantamento de requisitos, documentação funcional e entregas incrementais com stakeholders técnicos e de negócio'
                ],
                tags: ['Web', 'Requisitos']
            }
        ],

        featured: {
            title: 'Fleet UI',
            subtitle: 'Agentes com LLMs que executam experimentos de navegação autônoma em uma frota de robôs',
            context: 'Pesquisa de mestrado no CIn-UFPE, 2024 – 2026',
            video: 'GtZP2-BW4CU',
            problem: 'Reprodutibilidade em robótica móvel raramente é sistemática: cada laboratório improvisa as ferramentas para configurar experimentos de navegação, registrar sensores em várias execuções e comparar trajetórias. O Fleet UI torna essas etapas explícitas, automatizadas e reutilizáveis, e permite que pesquisadores as conduzam em linguagem natural.',
            points: [
                'Camada de agentes sobre a API da Claude: os agentes Planner, Executor e Analyst transformam instruções em linguagem natural em ações dos robôs, campanhas completas de repetibilidade e diagnósticos de execuções anômalas, com um agente isolado por robô',
                'Comparei a alocação de missões por LLM com alocadores fixo, guloso e ótimo em missões multi-robô',
                'Protocolo de gravação e reprodução de rotas em robôs TurtleBot4 com ROS 2 Jazzy, Nav2 e SLAM Toolbox no Gazebo, registrando LiDAR, odometria, IMU e pose SLAM em bags MCAP',
                'Interface em React + Vite e backend FastAPI com ponte ROS 2 via WebSockets; pytest, CI no GitHub Actions e Docker Compose para Linux e Windows'
            ],
            results: [
                { value: '50 / 50', label: 'alocações ótimas de missões pelo LLM no cenário mais difícil (3 robôs, 10 missões); o despacho fixo chegou a 106% acima do ótimo' },
                { value: '3,35 cm', label: 'RMSE médio em 10 reproduções independentes de uma rota gravada (máximo de 4,76 cm)' },
                { value: '1/5 → 10/10', label: 'sucesso na ativação simultânea de vários robôs após diagnosticar e trocar a camada DDS' }
            ],
            stack: ['Claude API', 'Python', 'ROS 2', 'Nav2', 'Gazebo', 'FastAPI', 'React', 'Docker']
        },

        projects: [
            {
                title: 'Chatbot de atendimento interno',
                description: 'Assistente de IA que responde dúvidas de atendimento interno a partir do conhecimento da empresa, com geração aumentada por recuperação (RAG), busca semântica e monitoramento no Datadog.',
                tags: ['Python', 'LangChain', 'FastAPI', 'FAISS', 'PostgreSQL']
            },
            {
                title: 'ERP Engeletra',
                status: 'Em produção',
                description: 'ERP vertical para manutenção elétrica industrial com mais de 10 módulos, usado por cerca de 10 pessoas: orçamentos com impostos por nota, ordens de serviço, ensaios elétricos, relatórios técnicos, faturamento e financeiro.',
                tags: ['Electron', 'React', 'FastAPI', 'PostgreSQL', 'SQLAlchemy']
            },
            {
                title: 'Ambiente de teste de Wi-Fi Mesh',
                description: 'Ambiente de teste reconfigurável em que robôs móveis carregam roteadores Mesh enquanto placas Raspberry Pi Zero 2 W coletam dados de sinal, handover e latência. Publicado no SBES 2025.',
                tags: ['Robótica', 'Raspberry Pi', 'Python', 'Redes'],
                link: paperLink,
                linkLabel: 'Ler o artigo'
            },
            {
                title: 'Casa Bacurau',
                status: 'No ar',
                description: 'Site de apresentação dos serviços e do espaço de um estabelecimento comercial, com interface responsiva focada em usabilidade.',
                tags: ['Web', 'Interface responsiva'],
                link: 'http://casabacurau.com.br/',
                linkLabel: 'Visitar o site'
            },
            {
                title: 'Bilheteria do Cais do Sertão',
                description: 'Sistema de bilheteria e gestão para um museu: vendas, gratuidades, visitas em grupo, controle de acesso por perfil e relatórios exportados em Excel e CSV.',
                tags: ['FastAPI', 'SQLAlchemy', 'PostgreSQL', 'HTMX']
            },
            {
                title: 'Loja Acende Pavio',
                status: 'Em reconstrução',
                description: 'Loja virtual com catálogo, carrinho, pedidos e painel administrativo, com pagamentos pelo Mercado Pago e cálculo de frete por CEP.',
                tags: ['E-commerce', 'Mercado Pago']
            },
            {
                title: 'Mineração de dados educacionais',
                description: 'Modelei o desempenho escolar de ~5.500 municípios brasileiros (SAEB) com regressão logística e árvores de decisão, transformando os resultados em regras que gestores de educação podem aplicar.',
                tags: ['Python', 'Pandas', 'Machine Learning']
            }
        ],

        skills: [
            { name: 'IA e dados', items: ['Agentes com LLMs', 'API da Claude', 'API da OpenAI', 'LangChain', 'RAG (FAISS)', 'Visão computacional', 'Airflow', 'PySpark', 'Pandas'] },
            { name: 'Linguagens', items: ['Python', 'SQL', 'TypeScript', 'JavaScript', 'Kotlin', 'Ruby'] },
            { name: 'Backend', items: ['FastAPI', 'Flask', 'Node.js', 'Ruby on Rails', 'SQLAlchemy', 'REST', 'WebSockets', 'JWT'] },
            { name: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS', 'Electron', 'Flutter'] },
            { name: 'Robótica', items: ['ROS 2', 'Nav2', 'SLAM', 'Gazebo', 'Arduino'] },
            { name: 'Bancos de dados', items: ['PostgreSQL', 'MySQL', 'BigQuery', 'MongoDB', 'SQLite', 'Alembic'] },
            { name: 'Infra e DevOps', items: ['Docker', 'Linux', 'Windows Server', 'Active Directory', 'GCP', 'AWS', 'CI/CD', 'Datadog'] },
            { name: 'Engenharia', items: ['Arquitetura de software', 'Modelagem de dados', 'Requisitos', 'Mapeamento de processos', 'Sistemas legados'] },
            { name: 'Idiomas', items: ['Português (nativo)', 'Inglês (fluente)', 'Espanhol (B1)', 'Alemão (A1)'] }
        ],

        education: [
            { degree: 'Mestrado em Ciência da Computação', school: 'CIn, Universidade Federal de Pernambuco (UFPE)', period: '2024 – 2026, conclusão prevista para dez 2026' },
            { degree: 'Pós-graduação em Robótica e IA aplicadas a testes de software', school: 'CIn, UFPE', period: '2023' },
            { degree: 'Tecnólogo em Sistemas para Internet', school: 'Universidade Católica de Pernambuco (UNICAP)', period: '2021 – 2022' },
            { degree: 'Bacharelado em Engenharia de Automação e Controle', school: 'Universidade de Pernambuco (UPE)', period: '2011 – 2021' },
            { degree: 'Morei em Leipzig, Alemanha; estudei inglês em Londres e Vancouver', school: 'Experiência internacional', period: '' }
        ],

        publications: [
            {
                title: 'Mobile Robotics for Throughput Testing in a Reconfigurable Test Environment',
                venue: 'SBES 2025, Simpósio Brasileiro de Engenharia de Software, pp. 859–864',
                authors: 'Eduardo Araújo, Breno Miranda',
                link: paperLink
            }
        ],

        contact: {
            email: 'wanderley.eduardo@gmail.com',
            note: 'Aberto a vagas de engenharia de IA. Moro em Recife.',
            links: contactLinks
        }
    }
};
