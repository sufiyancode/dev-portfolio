'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Home, Code, Briefcase, Calendar, Mail } from 'lucide-react';

const navItemsWithIcons = [
    { id: 'home', label: 'home', Icon: Home },
    { id: 'expertise', label: 'expertise', Icon: Code },
    { id: 'work', label: 'work', Icon: Briefcase },
    { id: 'experience', label: 'experience', Icon: Calendar },
    { id: 'contact', label: 'contact', Icon: Mail },
];

export default function Header() {
    const [activeSection, setActiveSection] = useState('home');
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Update active section based on scroll position
            const sections = navItemsWithIcons.map(item => document.getElementById(item.id));
            const scrollPosition = window.scrollY + 100;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(navItemsWithIcons[i].id);
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
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass shadow-lg' : ''
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 py-3 md:py-4 flex items-center justify-between">
                    <button
                        onClick={() => scrollToSection('home')}
                        className="text-2xl font-bold font-mono gradient-text hover:opacity-80 transition-opacity"
                    >
                        SufiyaN._
                    </button>

                    <nav className="hidden md:flex items-center gap-8">
                        {navItemsWithIcons.map((item) => (
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

            {/* Mobile bottom navigation - hidden on desktop */}
            <motion.nav
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="md:hidden fixed bottom-0 left-0 right-0 z-40 glass border-t border-border"
                style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
            >
                <div className="flex items-center justify-around px-2 py-2 max-w-7xl mx-auto">
                    {navItemsWithIcons.map((item) => {
                        const Icon = item.Icon;
                        const isActive = activeSection === item.id;

                        return (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`flex flex-col items-center justify-center flex-1 py-2 px-1 rounded-lg transition-all duration-300 active:scale-95 ${
                                    isActive
                                        ? 'text-amber-500'
                                        : 'text-muted-foreground active:text-foreground/80'
                                }`}
                            >
                                <Icon className={`w-5 h-5 mb-1 transition-all duration-300 ${
                                    isActive ? 'drop-shadow-[0_0_8px_rgba(245,158,11,0.6)]' : ''
                                }`} />
                                <span className={`code-style text-[10px] transition-all duration-300 ${
                                    isActive ? 'font-semibold' : 'font-normal'
                                }`}>
                                    {item.label}
                                </span>
                                {isActive && (
                                    <motion.div
                                        layoutId="activeMobileSection"
                                        className="absolute top-0 left-2 right-2 h-0.5 bg-amber-500 rounded-full"
                                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </button>
                        );
                    })}
                </div>
            </motion.nav>
        </>
    );
}
