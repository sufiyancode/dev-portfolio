'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { staggerContainer, fadeInUp, fadeInUpWithExit } from '@/lib/animations';
import { projects } from '@/data/content';
import { Star } from 'lucide-react';

type Category = 'all' | 'web' | 'ml' | 'community' | 'enterprise';

const categories: { id: Category; label: string }[] = [
    { id: 'all', label: 'All' },
    { id: 'enterprise', label: 'Enterprise' },
    { id: 'web', label: 'Web Apps' },
    { id: 'ml', label: 'ML' },
    { id: 'community', label: 'Community' },
];

export default function Projects() {
    const [activeCategory, setActiveCategory] = useState<Category>('all');
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const filteredProjects =
        activeCategory === 'all'
            ? projects
            : projects.filter((p) => p.category === activeCategory);

    const featuredProject = projects.find((p) => p.featured);

    return (
        <section id="work" className="min-h-screen px-6 md:px-12 lg:px-16 py-16 md:py-20">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    ref={ref}
                    variants={staggerContainer}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                >
                    <motion.div variants={fadeInUp} className="mb-16 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Featured Work
                        </h2>
                        <p className="text-muted-foreground text-base md:text-lg">
                            Projects that showcase my expertise
                        </p>
                    </motion.div>

                    {/* Featured Project */}
                    {featuredProject && (
                        <motion.div
                            variants={fadeInUp}
                            className="relative group mb-16"
                        >
                            {/* Gradient border effect */}
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500/50 via-orange-500/50 to-amber-500/50 rounded-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 blur" />

                            <div className="relative glass p-6 md:p-10 rounded-xl border border-amber-500/30 hover:border-amber-500/50 transition-all text-left">
                                <div className="flex items-start justify-between mb-5">
                                    <span className="code-style text-xs font-semibold text-amber-500 px-3 md:px-3 py-1.5 bg-amber-500/10 rounded-lg border border-amber-500/20 mr-3 inline-flex items-center gap-1.5">
                                        <Star className="w-3 h-3 fill-amber-500" /> Featured Project
                                    </span>
                                    <span className="code-style text-xs text-muted-foreground px-3 py-1.5 bg-muted rounded-lg capitalize">
                                        {featuredProject.category}
                                    </span>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground group-hover:text-amber-500 transition-colors">
                                    {featuredProject.name}
                                </h3>
                                <p className="text-muted-foreground text-sm md:text-base mb-6 leading-relaxed max-w-4xl">
                                    {featuredProject.description}
                                </p>
                                <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
                                    {featuredProject.techStack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="code-style text-xs px-3 py-1.5 bg-muted rounded-lg text-foreground hover:bg-amber-500/10 hover:text-amber-500 transition-colors border border-transparent hover:border-amber-500/20"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* Category Filter */}
                    <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-3 mb-8">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`code-style text-sm px-4 py-2 rounded-lg transition-all whitespace-nowrap ${activeCategory === cat.id
                                    ? 'bg-amber-500 text-white'
                                    : 'bg-muted text-muted-foreground hover:text-foreground/80'
                                    }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </motion.div>

                    {/* Projects Grid */}
                    <AnimatePresence mode="popLayout">
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
                            layout
                        >
                            {filteredProjects
                                .filter((p) => !p.featured)
                                .map((project) => (
                                    <motion.article
                                        key={project.id}
                                        variants={fadeInUpWithExit}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        layout
                                        whileHover={{ y: -6 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="relative group"
                                    >
                                        {/* Gradient border - now with mobile tap support */}
                                        <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500/50 to-orange-500/50 rounded-xl opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-500 blur-sm" />

                                        <div className="relative glass p-6 md:p-8 rounded-xl border border-border hover:border-amber-500/50 active:border-amber-500/50 transition-all cursor-pointer h-full flex flex-col">
                                            <div className="flex items-start justify-between mb-3">
                                                <h3 className="text-lg md:text-xl font-bold group-hover:text-amber-500 group-active:text-amber-500 transition-colors flex-1 pr-3">
                                                    {project.name}
                                                </h3>
                                                <span className="code-style text-xs text-muted-foreground px-2.5 py-1 bg-muted rounded-lg capitalize shrink-0">
                                                    {project.category}
                                                </span>
                                            </div>
                                            <p className="text-muted-foreground text-sm mb-5 leading-relaxed flex-1 min-h-[60px]">
                                                {project.description}
                                            </p>
                                            <div className="flex flex-wrap gap-2 pt-3 border-t border-border/50">
                                                {project.techStack.slice(0, 4).map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="code-style text-xs px-3 py-1.5 bg-muted rounded-lg text-muted-foreground hover:bg-amber-500/10 hover:text-amber-500 active:bg-amber-500/15 active:text-amber-500 transition-colors"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.article>
                                ))}
                        </motion.div>
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
