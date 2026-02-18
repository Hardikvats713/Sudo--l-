"use client";

import { motion, useTransform, MotionValue } from "framer-motion";

interface TextOverlayProps {
    progress: MotionValue<number>;
}

export default function TextOverlay({ progress }: TextOverlayProps) {
    // Beat 1: "SYSTEM INITIALIZED" (0-10%)
    const opacity1 = useTransform(progress, [0, 0.05, 0.1, 0.15], [0, 1, 1, 0]);
    const y1 = useTransform(progress, [0, 0.15], [20, -20]);

    // Beat 2: "40 Million Cases Pending" (20-35%)
    const opacity2 = useTransform(progress, [0.2, 0.25, 0.3, 0.35], [0, 1, 1, 0]);
    const y2 = useTransform(progress, [0.2, 0.35], [20, -20]);

    // Beat 3: "Predictive Algorithmic Scheduling" (40-55%)
    const opacity3 = useTransform(progress, [0.4, 0.45, 0.5, 0.55], [0, 1, 1, 0]);
    const y3 = useTransform(progress, [0.4, 0.55], [20, -20]);

    // Beat 4: "Frictionless Jurisprudence" (60-75%)
    const opacity4 = useTransform(progress, [0.6, 0.65, 0.7, 0.75], [0, 1, 1, 0]);
    const y4 = useTransform(progress, [0.6, 0.75], [20, -20]);

    // Closing Headline (85-100%)
    const opacity5 = useTransform(progress, [0.85, 0.9, 1], [0, 1, 1]);
    const y5 = useTransform(progress, [0.85, 1], [20, 0]);

    return (
        <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center z-10 text-white font-serif tracking-widest uppercase">

            {/* Beat 1 */}
            <motion.h1 style={{ opacity: opacity1, y: y1 }} className="absolute text-4xl md:text-6xl text-center">
                System Initialized
            </motion.h1>

            {/* Beat 2 - Left Aligned */}
            <motion.h2 style={{ opacity: opacity2, y: y2 }} className="absolute left-10 md:left-20 top-1/3 text-2xl md:text-4xl text-left max-w-sm">
                40 Million Cases Pending
            </motion.h2>

            {/* Beat 3 - Right Aligned */}
            <motion.h2 style={{ opacity: opacity3, y: y3 }} className="absolute right-10 md:right-20 top-1/2 text-2xl md:text-4xl text-right max-w-sm text-blue-200">
                Predictive Algorithmic Scheduling
            </motion.h2>

            {/* Beat 4 - Centered */}
            <motion.h2 style={{ opacity: opacity4, y: y4 }} className="absolute text-3xl md:text-5xl text-center font-bold">
                Frictionless Jurisprudence
            </motion.h2>

            {/* Closing Headline (above form) */}
            <motion.h2 style={{ opacity: opacity5, y: y5 }} className="absolute top-[20%] text-sm md:text-base tracking-[0.5em] text-gray-400">
                COURT DELAY INTELLIGENCE SYSTEM
            </motion.h2>

        </div>
    );
}
