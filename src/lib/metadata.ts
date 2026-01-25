import type { Metadata } from 'next';

export const siteMetadata: Metadata = {
    title: 'Sufiyan Shaikh | Full Stack Software Engineer',
    description: 'Results-driven Full Stack Developer specializing in MERN stack, Python frameworks, and real-time systems. Building scalable web applications and production-ready solutions.',
    keywords: [
        'Full Stack Developer',
        'MERN Stack',
        'Python Developer',
        'React',
        'Node.js',
        'Real-time Systems',
        'Software Engineer',
        'Web Development',
        'Pune',
    ],
    authors: [{ name: 'Sufiyan Shaikh' }],
    creator: 'Sufiyan Shaikh',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://sufiyan-shaikh.dev',
        title: 'Sufiyan Shaikh | Full Stack Software Engineer',
        description: 'Results-driven Full Stack Developer specializing in MERN stack, Python frameworks, and real-time systems.',
        siteName: 'Sufiyan Shaikh Portfolio',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Sufiyan Shaikh | Full Stack Software Engineer',
        description: 'Results-driven Full Stack Developer specializing in MERN stack, Python frameworks, and real-time systems.',
        creator: '@sufiyan',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

export function generateStructuredData() {
    return {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Sufiyan Shaikh',
        jobTitle: 'Full Stack Software Engineer',
        url: 'https://sufiyan-shaikh.dev',
        sameAs: [
            'https://linkedin.com/in/sufiyan-shaikh22',
            'https://github.com/sufiyancode',
        ],
        knowsAbout: [
            'Full Stack Development',
            'MERN Stack',
            'Real-Time Systems',
            'Python',
            'JavaScript',
            'TypeScript',
            'React',
            'Node.js',
            'Microservices',
        ],
        alumniOf: {
            '@type': 'CollegeOrUniversity',
            name: "Bharati Vidyapeeth's College of Engineering",
        },
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Pune',
            addressRegion: 'Maharashtra',
            addressCountry: 'India',
        },
    };
}
