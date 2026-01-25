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
        <section id="expertise" className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-16 py-16 md:py-20">
            <div className="max-w-7xl w-full">
                <motion.div
                    ref={ref}
                    variants={staggerContainer}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    className="space-y-12"
                >
                    <motion.div variants={fadeInUp} className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            My Expertise
                        </h2>
                        <p className="text-muted-foreground text-base md:text-lg">
                            Specialized skills and technologies I work with
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        {expertise.map((area, index) => (
                            <motion.div
                                key={area.id}
                                variants={fadeInUp}
                                whileHover={{ y: -6, transition: { duration: 0.3, ease: 'easeOut' } }}
                                whileTap={{ scale: 0.98 }}
                                className="relative group"
                            >
                                {/* Gradient border effect */}
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500/60 to-orange-500/60 rounded-xl opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-500 blur-sm" />

                                <div className="relative glass p-8 rounded-xl border border-border hover:border-amber-500/50 active:border-amber-500/50 hover:bg-amber-500/5 active:bg-amber-500/5 transition-all duration-300 cursor-pointer h-full flex flex-col items-center text-center">
                                    <div className="text-4xl mb-5 group-hover:scale-105 transition-transform duration-300">
                                        {iconMap[area.icon]}
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-amber-500 group-active:text-amber-500 transition-all duration-300">
                                        {area.title}
                                    </h3>
                                    <p className="text-muted-foreground group-hover:text-foreground/80 mb-5 text-sm leading-relaxed min-h-[60px] transition-colors duration-300">
                                        {area.description}
                                    </p>
                                    <div className="flex flex-wrap justify-center gap-2 pt-4 border-t border-border/50 w-full">
                                        {area.technologies.slice(0, 4).map((tech) => (
                                            <span
                                                key={tech}
                                                className="code-style text-xs px-3 py-1.5 bg-muted/80 rounded-lg text-muted-foreground hover:bg-amber-500/15 hover:text-amber-500 hover:border-amber-500/30 hover:shadow-lg hover:shadow-amber-500/20 active:bg-amber-500/20 active:text-amber-500 active:border-amber-500/40 border border-transparent transition-all duration-200"
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
