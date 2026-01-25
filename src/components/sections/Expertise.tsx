'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { staggerContainer, fadeInUp } from '@/lib/animations';
import { expertise } from '@/data/content';

const iconMap: Record<string, string> = {
    code: '💻',
    network: '🌐',
    server: '⚙️',
};

export default function Expertise() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section id="expertise" className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-16 py-20">
            <div className="max-w-7xl w-full">
                <motion.div
                    ref={ref}
                    variants={staggerContainer}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    className="space-y-12"
                >
                    <motion.div variants={fadeInUp} className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            My Expertise
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Specialized skills and technologies I work with
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {expertise.map((area, index) => (
                            <motion.div
                                key={area.id}
                                variants={fadeInUp}
                                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                                className="relative group"
                            >
                                {/* Gradient border effect */}
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />

                                <div className="relative glass p-10 rounded-xl border border-border hover:border-primary/30 transition-all cursor-pointer h-full flex flex-col items-center text-center">
                                    <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                                        {iconMap[area.icon]}
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4 group-hover:gradient-text transition-all">
                                        {area.title}
                                    </h3>
                                    <p className="text-muted-foreground mb-6 text-sm leading-relaxed min-h-[60px]">
                                        {area.description}
                                    </p>
                                    <div className="flex flex-wrap justify-center gap-2 pt-4 border-t border-border/50 w-full">
                                        {area.technologies.slice(0, 4).map((tech) => (
                                            <span
                                                key={tech}
                                                className="code-style text-xs px-3 py-1.5 bg-muted rounded-md text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
