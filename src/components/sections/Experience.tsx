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
        <section id="experience" className="min-h-screen px-6 md:px-12 lg:px-16 py-20">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    ref={ref}
                    variants={staggerContainer}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                >
                    <motion.div variants={fadeInUp} className="mb-16 text-center">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Professional Experience
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            My journey in software engineering
                        </p>
                    </motion.div>

                    <div className="space-y-6">
                        {experience.map((exp, index) => (
                            <motion.article
                                key={exp.id}
                                variants={fadeInUp}
                                className="relative group"
                            >
                                {/* Gradient border on hover */}
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />

                                <div className="relative glass rounded-xl border border-border overflow-hidden transition-all hover:border-primary/30">
                                    <button
                                        onClick={() =>
                                            setExpandedId(expandedId === exp.id ? null : exp.id)
                                        }
                                        className="w-full p-8 text-left hover:bg-muted/20 transition-colors"
                                    >
                                        <div className="flex items-start justify-between gap-6">
                                            <div className="flex-1">
                                                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                                                    {exp.role}{' '}
                                                    <span className="text-primary">@</span>{' '}
                                                    {exp.company}
                                                </h3>
                                                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                                                    <span className="flex items-center gap-2 px-3 py-1.5 bg-muted rounded-md">
                                                        📍 {exp.location}
                                                    </span>
                                                    <span className="flex items-center gap-2 px-3 py-1.5 bg-muted rounded-md">
                                                        🗓️ {exp.duration}
                                                    </span>
                                                </div>
                                            </div>
                                            <motion.div
                                                animate={{ rotate: expandedId === exp.id ? 180 : 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="text-primary text-3xl font-light shrink-0"
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
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="px-8 pb-8 pt-4 border-t border-border/50 bg-muted/10">
                                                    <ul className="space-y-4 mb-8">
                                                        {exp.highlights.map((highlight, i) => (
                                                            <li
                                                                key={i}
                                                                className="flex gap-4 text-muted-foreground leading-relaxed"
                                                            >
                                                                <span className="text-primary mt-1 text-lg">▹</span>
                                                                <span className="flex-1">{highlight}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                    <div className="flex flex-wrap gap-2.5 pt-4 border-t border-border/50">
                                                        {exp.skills.map((skill) => (
                                                            <span
                                                                key={skill}
                                                                className="code-style text-xs px-4 py-2 bg-primary/10 text-primary rounded-lg border border-primary/20 hover:bg-primary/20 transition-colors"
                                                            >
                                                                {skill}
                                                            </span>
                                                        ))}
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
