'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { personalInfo } from '@/data/content';

export default function Hero() {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-16 pt-20"
        >
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="max-w-5xl w-full"
            >
                <motion.div variants={fadeInUp} className="mb-6">
                    <span className="code-style text-primary text-sm">
                        {'// Full Stack Software Engineer'}
                    </span>
                </motion.div>

                <motion.h1
                    variants={fadeInUp}
                    className="text-6xl md:text-8xl font-bold mb-6 tracking-tight"
                >
                    {personalInfo.name.split(' ').map((word, index) => (
                        <span key={index}>
                            {word}
                            {index === 0 && <br />}
                            {index === 1 && ' '}
                        </span>
                    ))}
                </motion.h1>

                <motion.p
                    variants={fadeInUp}
                    className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed"
                >
                    {personalInfo.tagline}
                </motion.p>

                <motion.div variants={fadeInUp} className="mt-12 flex gap-6">
                    <a
                        href={personalInfo.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="code-style text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                        {'// github'}
                    </a>
                    <a
                        href={personalInfo.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="code-style text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                        {'// linkedin'}
                    </a>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    variants={fadeInUp}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2"
                >
                    <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex items-start justify-center p-2">
                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                            className="w-1.5 h-1.5 bg-muted-foreground rounded-full"
                        />
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
