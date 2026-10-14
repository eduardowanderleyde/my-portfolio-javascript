/**
 * PORTFOLIO DATA
 * Centralized portfolio data for easy maintenance
 */

export const portfolioData = {
    // Personal Information
    personal: {
        name: 'Eduardo Wanderley',
        title: 'AI Engineer',
        location: 'Recife, Pernambuco, Brazil',
        university: 'CIn - UFPE',
        degree: 'M.Sc. in Computer Science (in progress)',
        description: 'AI Engineer | LLM Agents | Robotics | Full Stack'
    },

    // Professional Experience
    experience: [
        {
            id: 1,
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
            id: 2,
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
            id: 3,
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
            id: 4,
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
            id: 5,
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

    // Featured project (shown large, echoes the hero trajectory figure)
    featured: {
        title: 'Fleet UI',
        subtitle: 'LLM agents that run autonomous-navigation experiments on a robot fleet',
        context: 'Master\'s research at CIn-UFPE, 2024 – 2026',
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

    // Other projects
    projects: [
        {
            id: 1,
            title: 'Internal support chatbot',
            description: 'AI assistant that answers internal support questions from company knowledge, using retrieval-augmented generation with semantic search and Datadog monitoring.',
            tags: ['Python', 'LangChain', 'FastAPI', 'FAISS', 'PostgreSQL']
        },
        {
            id: 2,
            title: 'Engeletra ERP',
            status: 'In production',
            description: 'Vertical ERP for industrial electrical maintenance with 10+ modules, used by about 10 people: quotes with per-invoice taxes, work orders, electrical tests, technical reports, billing and finance.',
            tags: ['Electron', 'React', 'FastAPI', 'PostgreSQL', 'SQLAlchemy']
        },
        {
            id: 3,
            title: 'Wi-Fi Mesh test environment',
            description: 'Reconfigurable testbed where mobile robots carry Mesh routers while Raspberry Pi Zero 2 W boards collect signal, handover and latency data. Published at SBES 2025.',
            tags: ['Robotics', 'Raspberry Pi', 'Python', 'Networking'],
            link: 'https://doi.org/10.5753/sbes.2025.11613',
            linkLabel: 'Read the paper'
        },
        {
            id: 4,
            title: 'Casa Bacurau',
            status: 'Live',
            description: 'Website presenting the services and venue of a commercial space, with a responsive interface focused on usability.',
            tags: ['Web', 'Responsive UI'],
            link: 'http://casabacurau.com.br/',
            linkLabel: 'Visit the site'
        },
        {
            id: 5,
            title: 'Cais do Sertão ticketing',
            description: 'Ticketing and management system for a museum: sales, free admissions, group visits, role-based access and reports exported to Excel and CSV.',
            tags: ['FastAPI', 'SQLAlchemy', 'PostgreSQL', 'HTMX']
        },
        {
            id: 6,
            title: 'Acende Pavio store',
            status: 'Being rebuilt',
            description: 'Online store with catalog, cart, orders and an admin panel, with Mercado Pago payments and shipping quotes by postal code.',
            tags: ['E-commerce', 'Mercado Pago']
        },
        {
            id: 7,
            title: 'Educational data mining',
            description: 'Modeled school performance across ~5,500 Brazilian municipalities (SAEB) with logistic regression and decision trees, turning results into rules education managers can act on.',
            tags: ['Python', 'Pandas', 'Machine Learning']
        }
    ],

    // Skills (grouped by category)
    skills: [
        {
            id: 1,
            name: 'AI & data',
            items: ['LLM agents', 'Claude API', 'OpenAI API', 'LangChain', 'RAG (FAISS)', 'Computer vision', 'Airflow', 'PySpark', 'Pandas']
        },
        {
            id: 2,
            name: 'Languages',
            items: ['Python', 'SQL', 'TypeScript', 'JavaScript', 'Kotlin', 'Ruby']
        },
        {
            id: 3,
            name: 'Backend',
            items: ['FastAPI', 'Flask', 'Node.js', 'Ruby on Rails', 'SQLAlchemy', 'REST', 'WebSockets', 'JWT']
        },
        {
            id: 4,
            name: 'Frontend',
            items: ['React', 'Next.js', 'Tailwind CSS', 'Electron', 'Flutter']
        },
        {
            id: 5,
            name: 'Robotics',
            items: ['ROS 2', 'Nav2', 'SLAM', 'Gazebo', 'Arduino']
        },
        {
            id: 6,
            name: 'Databases',
            items: ['PostgreSQL', 'MySQL', 'BigQuery', 'MongoDB', 'SQLite', 'Alembic']
        },
        {
            id: 7,
            name: 'Infra & DevOps',
            items: ['Docker', 'Linux', 'Windows Server', 'Active Directory', 'GCP', 'AWS', 'CI/CD', 'Datadog']
        },
        {
            id: 8,
            name: 'Engineering',
            items: ['Software architecture', 'Data modeling', 'Requirements', 'Process mapping', 'Legacy systems']
        },
        {
            id: 9,
            name: 'Spoken languages',
            items: ['Portuguese (native)', 'English (fluent)', 'Spanish (B1)', 'German (A1)']
        }
    ],

    // Education
    education: [
        {
            degree: 'M.Sc. in Computer Science',
            school: 'CIn, Federal University of Pernambuco (UFPE)',
            period: '2024 – 2026, expected Dec 2026'
        },
        {
            degree: 'Graduate certificate in Robotics and AI applied to software testing',
            school: 'CIn, UFPE',
            period: '2023'
        },
        {
            degree: 'Technologist in Internet Systems',
            school: 'Catholic University of Pernambuco (UNICAP)',
            period: '2021 – 2022'
        },
        {
            degree: 'B.Eng. in Automation and Control Engineering',
            school: 'University of Pernambuco (UPE)',
            period: '2011 – 2021'
        },
        {
            degree: 'Lived in Leipzig, Germany; English studies in London and Vancouver',
            school: 'International experience',
            period: ''
        }
    ],

    // Publications
    publications: [
        {
            title: 'Mobile Robotics for Throughput Testing in a Reconfigurable Test Environment',
            venue: 'SBES 2025, Brazilian Symposium on Software Engineering, pp. 859–864',
            authors: 'Eduardo Araújo, Breno Miranda',
            link: 'https://doi.org/10.5753/sbes.2025.11613'
        }
    ],

    // Contact
    contact: {
        email: 'wanderley.eduardo@gmail.com',
        location: 'Recife, Pernambuco, Brazil',
        note: 'Open to AI engineering roles. Based in Recife, Brazil.',
        links: [
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/edu-wanderley' },
            { label: 'GitHub', href: 'https://github.com/eduardowanderleyde' },
            { label: 'Lattes', href: 'https://lattes.cnpq.br/4068383542057315' }
        ]
    }
};
