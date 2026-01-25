export interface Project {
    id: string;
    name: string;
    description: string;
    techStack: string[];
    category: 'web' | 'ml' | 'community' | 'enterprise';
    featured?: boolean;
}

export interface Experience {
    id: string;
    role: string;
    company: string;
    location: string;
    duration: string;
    startDate: string;
    endDate: string;
    highlights: string[];
    skills: string[];
}

export interface ExpertiseArea {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    icon: string;
}

export const personalInfo = {
    name: 'Sufiyan Shaikh',
    title: 'Full Stack Software Engineer',
    tagline: 'Building scalable web applications and real-time systems that turn business needs into practical solutions',
    location: 'Pune, Maharashtra, India',
    email: 'sksufiyan9860@gmail.com',
    phone: '+91-8530618511',
    linkedin: 'https://linkedin.com/in/sufiyan-shaikh22',
    github: 'https://github.com/sufiyancode',
};

export const expertise: ExpertiseArea[] = [
    {
        id: 'fullstack',
        title: 'Full Stack Development',
        description: 'Expertise in building end-to-end web applications with modern frameworks and scalable architectures.',
        technologies: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'Django', 'Flask', 'MongoDB', 'PostgreSQL'],
        icon: 'code',
    },
    {
        id: 'realtime',
        title: 'Real-Time & Distributed Systems',
        description: 'Specialized in event-driven architectures, microservices, and real-time data processing.',
        technologies: ['WebSockets', 'Apache Kafka', 'RabbitMQ', 'Microservices', 'Socket.io', 'Redis'],
        icon: 'network',
    },
    {
        id: 'backend',
        title: 'Backend Architecture & APIs',
        description: 'Designing robust RESTful APIs with focus on performance, scalability, and maintainability.',
        technologies: ['REST APIs', 'JWT', 'OAuth2', 'Nginx', 'Connection Pooling', 'Caching Strategies'],
        icon: 'server',
    },
];

export const projects: Project[] = [
    {
        id: 'fiber-optics',
        name: 'Real-Time Fiber Optics Monitoring Platform',
        description: 'Architected a real-time monitoring platform with event-driven microservices, improving system performance by 40% through connection pooling and caching strategies.',
        techStack: ['Node.js', 'Angular', 'Apache Kafka', 'WebSockets', 'Redis', 'PostgreSQL'],
        category: 'enterprise',
        featured: true,
    },
    {
        id: 'delivery-prediction',
        name: 'Advanced Delivery Time Prediction System',
        description: 'End-to-end ML solution using ensemble methods (CatBoost, Random Forest, Gradient Boost) with Flask backend and React frontend for real-time predictions.',
        techStack: ['Python', 'Flask', 'React.js', 'CatBoost', 'scikit-learn', 'Pandas'],
        category: 'ml',
    },
    {
        id: 'gdg-pune',
        name: 'GDG Pune Official Website',
        description: 'Developed team member profiles and agenda sections for Google Developer Group Pune using modern Vue.js ecosystem.',
        techStack: ['Nuxt.js', 'Vue.js', 'TypeScript', 'Tailwind CSS'],
        category: 'community',
    },
    {
        id: 'maas-platform',
        name: 'Marketing Automation Platform (MAAS)',
        description: 'Built a comprehensive marketing automation system with asynchronous task processing and message queuing.',
        techStack: ['Django', 'Celery', 'RabbitMQ', 'PostgreSQL', 'Redis'],
        category: 'enterprise',
    },
    {
        id: 'university-mgmt',
        name: 'University Management System',
        description: 'Enterprise-level management system for educational institutions with role-based access control and comprehensive admin features.',
        techStack: ['Django', 'PostgreSQL', 'Bootstrap', 'jQuery'],
        category: 'enterprise',
    },
    {
        id: 'product-mgmt',
        name: 'Product Management System',
        description: 'Scalable product management platform with inventory tracking, order processing, and analytics dashboard.',
        techStack: ['Node.js', 'Express.js', 'MongoDB', 'React.js', 'Chart.js'],
        category: 'web',
    },
];

export const experience: Experience[] = [
    {
        id: 'iauro-sde',
        role: 'Software Development Engineer',
        company: 'iauro Systems Pvt. Ltd.',
        location: 'Pune, Maharashtra, India',
        duration: 'Aug 2025 - Present',
        startDate: '2025-08',
        endDate: 'Present',
        highlights: [
            'Architected a real-time fiber optics monitoring platform with event-driven microservices using Apache Kafka and WebSockets',
            'Built scalable RESTful APIs with Node.js and interactive dashboards with Angular',
            'Improved system performance by 40% through connection pooling and caching strategies',
            'Designed and implemented microservices architecture for distributed data processing',
        ],
        skills: ['Node.js', 'Angular', 'Apache Kafka', 'WebSockets', 'Microservices', 'Redis', 'PostgreSQL'],
    },
    {
        id: 'iauro-intern',
        role: 'Software Engineer Intern',
        company: 'iauro Systems Pvt. Ltd.',
        location: 'Pune, Maharashtra, India',
        duration: 'Feb 2025 - Aug 2025',
        startDate: '2025-02',
        endDate: '2025-08',
        highlights: [
            'Contributed to enterprise-level software development using modern frameworks',
            'Developed full-stack features for production-grade applications',
            'Collaborated with cross-functional teams on scalable solutions',
        ],
        skills: ['React.js', 'Node.js', 'TypeScript', 'PostgreSQL'],
    },
    {
        id: 'freelance',
        role: 'Freelance Software Developer',
        company: 'Stealth Startup',
        location: 'Remote',
        duration: 'Nov 2024 - Present',
        startDate: '2024-11',
        endDate: 'Present',
        highlights: [
            'Led product platform development with independent tech stack selection and architecture design',
            'Implemented real-time chat functionality using CometChat SDK',
            'Built scalable Node.js/Express.js APIs and React.js frontends',
            'Delivered MVP features on tight deadlines with high code quality',
        ],
        skills: ['React.js', 'Node.js', 'Express.js', 'CometChat', 'MongoDB', 'REST APIs'],
    },
    {
        id: 'datatechlabs',
        role: 'Software Engineer Trainee',
        company: 'The Data Tech Labs Inc.',
        location: 'Pune, Maharashtra, India',
        duration: 'Mar 2024 - Sep 2024',
        startDate: '2024-03',
        endDate: '2024-09',
        highlights: [
            'Developed Marketing Automation Platform (MAAS) with asynchronous task processing',
            'Built University Management System and Product Management System',
            'Implemented backend infrastructure using Django, Celery, and RabbitMQ',
            'Designed database schemas and optimized query performance',
        ],
        skills: ['Django', 'Celery', 'RabbitMQ', 'PostgreSQL', 'Python', 'REST APIs'],
    },
];

export const philosophy = {
    quote: "Great software isn't just about code—it's about solving real problems with scalable, maintainable solutions that stand the test of time.",
};
