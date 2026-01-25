'use client';

import { motion } from 'framer-motion';

interface AnimatedButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
}

export default function AnimatedButton({
    children,
    onClick,
    className = ''
}: AnimatedButtonProps) {
    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            onClick={onClick}
            className={`px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl ${className}`}
        >
            {children}
        </motion.button>
    );
}
