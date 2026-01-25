'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const navItems = [
    { id: 'home', label: 'home' },
    { id: 'expertise', label: 'expertise' },
    { id: 'work', label: 'work' },
    { id: 'experience', label: 'experience' },
    { id: 'contact', label: 'contact' },
];

export default function Header() {
    const [activeSection, setActiveSection] = useState('home');
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Update active section based on scroll position
            const sections = navItems.map(item => document.getElementById(item.id));
            const scrollPosition = window.scrollY + 100;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(navItems[i].id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass shadow-lg' : ''
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <button
                    onClick={() => scrollToSection('home')}
                    className="text-xl font-bold code-style gradient-text hover:opacity-80 transition-opacity"
                >
                    SufiyaN._
                </button>

                <nav className="flex items-center gap-8">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`code-style text-sm transition-colors relative ${activeSection === item.id
                                    ? 'text-amber-500'
                                    : 'text-muted-foreground hover:text-foreground/80'
                                }`}
                        >
                            // {item.label}
                            {activeSection === item.id && (
                                <motion.div
                                    layoutId="activeSection"
                                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-amber-500"
                                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                />
                            )}
                        </button>
                    ))}
                </nav>
            </div>
        </motion.header>
    );
}
