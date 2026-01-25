'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { staggerContainer, fadeInUp } from '@/lib/animations';
import { projects } from '@/data/content';

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
        <section id="work" className="min-h-screen px-6 md:px-12 lg:px-16 py-20">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    ref={ref}
                    variants={staggerContainer}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                >
                    <motion.div variants={fadeInUp} className="mb-16 text-center">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Featured Work
                        </h2>
                        <p className="text-muted-foreground text-lg">
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
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-300 blur" />

                            <div className="relative glass p-10 md:p-12 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all text-left">
                                <div className="flex items-start justify-between mb-6">
                                    <span className="code-style text-xs font-semibold text-primary px-4 py-2 bg-primary/10 rounded-lg border border-primary/20">
                                        ⭐ Featured Project
                                    </span>
                                    <span className="code-style text-xs text-muted-foreground px-3 py-1.5 bg-muted rounded-md capitalize">
                                        {featuredProject.category}
                                    </span>
                                </div>
                                <h3 className="text-3xl md:text-4xl font-bold mb-5 gradient-text">
                                    {featuredProject.name}
                                </h3>
                                <p className="text-muted-foreground text-lg mb-8 leading-relaxed max-w-4xl">
                                    {featuredProject.description}
                                </p>
                                <div className="flex flex-wrap gap-3 pt-6 border-t border-border/50">
                                    {featuredProject.techStack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="code-style text-sm px-4 py-2 bg-muted rounded-lg text-foreground hover:bg-primary/10 hover:text-primary transition-colors border border-transparent hover:border-primary/20"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* Category Filter */}
                    <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4 mb-8">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`code-style text-sm px-4 py-2 rounded transition-all whitespace-nowrap ${activeCategory === cat.id
                                    ? 'bg-primary text-white'
                                    : 'bg-muted text-muted-foreground hover:text-foreground'
                                    }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </motion.div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {filteredProjects
                            .filter((p) => !p.featured)
                            .map((project) => (
                                <motion.article
                                    key={project.id}
                                    variants={fadeInUp}
                                    whileHover={{ y: -6 }}
                                    className="relative group"
                                >
                                    {/* Subtle gradient border on hover */}
                                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-secondary/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />

                                    <div className="relative glass p-8 rounded-xl border border-border hover:border-primary/30 transition-all cursor-pointer h-full flex flex-col">
                                        <div className="flex items-start justify-between mb-4">
                                            <h3 className="text-xl font-bold group-hover:text-primary transition-colors flex-1 pr-4">
                                                {project.name}
                                            </h3>
                                            <span className="code-style text-xs text-muted-foreground px-2.5 py-1 bg-muted rounded-md capitalize shrink-0">
                                                {project.category}
                                            </span>
                                        </div>
                                        <p className="text-muted-foreground text-sm mb-6 leading-relaxed flex-1 min-h-[60px]">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
                                            {project.techStack.slice(0, 4).map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="code-style text-xs px-3 py-1.5 bg-muted rounded-md text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.article>
                            ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
