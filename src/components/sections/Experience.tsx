'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { staggerContainer, fadeInUp } from '@/lib/animations';
import { experience } from '@/data/content';

export default function Experience() {
    const [expandedId, setExpandedId] = useState<string | null>(experience[0].id);
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section id="experience" className="min-h-screen px-6 md:px-12 lg:px-16 py-20 flex items-center justify-center">
            <div className="max-w-6xl mx-auto w-full">
                <motion.div
                    ref={ref}
                    variants={staggerContainer}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                >
                    <motion.div variants={fadeInUp} className="mb-20 text-center">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Professional Experience
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            My journey in software engineering
                        </p>
                    </motion.div>

                    <div>
                        {experience.map((exp, index) => (
                            <motion.article
                                key={exp.id}
                                variants={fadeInUp}
                                className={`relative group !mb-8 md:!mb-12 ${index === experience.length - 1 ? '!mb-0' : ''}`}
                            >
                                {/* Enhanced gradient border on hover */}
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500/50 to-orange-500/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

                                <div className="relative glass rounded-2xl border border-border overflow-hidden transition-all duration-300 hover:border-amber-500/50">
                                    <button
                                        onClick={() =>
                                            setExpandedId(expandedId === exp.id ? null : exp.id)
                                        }
                                        className="w-full p-8 md:p-10 text-left hover:bg-muted/10 transition-colors duration-300"
                                    >
                                        <div className="flex items-start justify-between gap-6 md:gap-8">
                                            <div className="flex-1 space-y-4">
                                                <h3 className="text-2xl md:text-3xl font-bold leading-tight">
                                                    <span className="group-hover:text-amber-500 transition-all duration-300">
                                                        {exp.role}
                                                    </span>
                                                    {' '}
                                                    <span className="text-amber-500">@</span>
                                                    {' '}
                                                    <span className="text-foreground/90">{exp.company}</span>
                                                </h3>
                                                <div className="flex flex-wrap gap-3 text-sm">
                                                    <span className="code-style flex items-center gap-2 px-4 py-2 bg-muted/80 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-all duration-200">
                                                        📍 {exp.location}
                                                    </span>
                                                    <span className="code-style flex items-center gap-2 px-4 py-2 bg-muted/80 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-all duration-200">
                                                        🗓️ {exp.duration}
                                                    </span>
                                                </div>
                                            </div>
                                            <motion.div
                                                animate={{ rotate: expandedId === exp.id ? 180 : 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="text-amber-500 text-3xl font-light shrink-0 w-10 h-10 flex items-center justify-center"
                                            >
                                                {expandedId === exp.id ? '−' : '+'}
                                            </motion.div>
                                        </div>
                                    </button>

                                    <AnimatePresence>
                                        {expandedId === exp.id && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                                                className="overflow-hidden"
                                            >
                                                <div className="px-8 md:px-10 pb-10 pt-8 border-t border-border/50 bg-background/30">
                                                    {/* Highlights Section */}
                                                    <div className="mb-10">
                                                        <h4 className="text-xs font-semibold text-foreground/70 mb-6 uppercase tracking-widest">
                                                            Key Achievements
                                                        </h4>
                                                        <ul className="space-y-5">
                                                            {exp.highlights.map((highlight, i) => (
                                                                <li
                                                                    key={i}
                                                                    className="flex gap-4 text-muted-foreground leading-relaxed text-sm md:text-base"
                                                                >
                                                                    <span className="text-amber-500 mt-0.5 text-lg">▹</span>
                                                                    <span className="flex-1">{highlight}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>

                                                    {/* Skills Section */}
                                                    <div className="pt-8 border-t border-border/30">
                                                        <h4 className="text-xs font-semibold text-foreground/70 mb-6 uppercase tracking-widest">
                                                            Technologies Used
                                                        </h4>
                                                        <div className="flex flex-wrap gap-3">
                                                            {exp.skills.map((skill) => (
                                                                <span
                                                                    key={skill}
                                                                    className="code-style text-xs px-4 py-2.5 bg-amber-500/10 text-amber-500 rounded-lg border border-amber-500/20 hover:bg-amber-500/20 hover:border-amber-500/40 hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-200 cursor-default"
                                                                >
                                                                    {skill}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
