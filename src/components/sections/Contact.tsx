'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { personalInfo } from '@/data/content';
import { Mail, Briefcase, Github, Smartphone } from 'lucide-react';

export default function Contact() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    return (
        <section id="contact" className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-16 py-20">
            <motion.div
                ref={ref}
                variants={staggerContainer}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                className="max-w-3xl w-full text-center"
            >
                <motion.div variants={fadeInUp} className="mb-8">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Let's Work Together
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        Available for impactful opportunities
                    </p>
                </motion.div>

                <motion.div
                    variants={fadeInUp}
                    className="glass p-8 rounded-lg border border-border mb-8"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <a
                            href={`mailto:${personalInfo.email}`}
                            className="flex items-center gap-3 p-4 rounded bg-muted hover:bg-primary/10 hover:border-primary/50 border border-transparent transition-all group"
                        >
                            <Mail className="w-6 h-6" />
                            <div className="text-left">
                                <div className="text-xs text-muted-foreground mb-1">Email</div>
                                <div className="code-style text-sm group-hover:text-primary transition-colors">
                                    {personalInfo.email}
                                </div>
                            </div>
                        </a>

                        <a
                            href={personalInfo.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 p-4 rounded bg-muted hover:bg-primary/10 hover:border-primary/50 border border-transparent transition-all group"
                        >
                            <Briefcase className="w-6 h-6" />
                            <div className="text-left">
                                <div className="text-xs text-muted-foreground mb-1">LinkedIn</div>
                                <div className="code-style text-sm group-hover:text-primary transition-colors">
                                    /in/sufiyan-shaikh22
                                </div>
                            </div>
                        </a>

                        <a
                            href={personalInfo.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 p-4 rounded bg-muted hover:bg-primary/10 hover:border-primary/50 border border-transparent transition-all group"
                        >
                            <Github className="w-6 h-6" />
                            <div className="text-left">
                                <div className="text-xs text-muted-foreground mb-1">GitHub</div>
                                <div className="code-style text-sm group-hover:text-primary transition-colors">
                                    /sufiyancode
                                </div>
                            </div>
                        </a>

                        <a
                            href={`tel:${personalInfo.phone}`}
                            className="flex items-center gap-3 p-4 rounded bg-muted hover:bg-primary/10 hover:border-primary/50 border border-transparent transition-all group"
                        >
                            <Smartphone className="w-6 h-6" />
                            <div className="text-left">
                                <div className="text-xs text-muted-foreground mb-1">Phone</div>
                                <div className="code-style text-sm group-hover:text-primary transition-colors">
                                    {personalInfo.phone}
                                </div>
                            </div>
                        </a>
                    </div>
                </motion.div>

                <motion.p variants={fadeInUp} className="text-muted-foreground">
                    Based in {personalInfo.location}
                </motion.p>
            </motion.div>
        </section>
    );
}
