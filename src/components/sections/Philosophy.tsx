'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fadeInUp } from '@/lib/animations';
import { philosophy } from '@/data/content';

export default function Philosophy() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    return (
        <section className="py-32 px-6 md:px-12 lg:px-16">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    variants={fadeInUp}
                    className="text-center"
                >
                    <div className="text-6xl mb-8 opacity-20">"</div>
                    <blockquote className="text-2xl md:text-3xl font-light leading-relaxed text-foreground/90 italic">
                        {philosophy.quote}
                    </blockquote>
                    <div className="text-6xl mt-8 opacity-20 rotate-180">"</div>
                </motion.div>
            </div>
        </section>
    );
}
