"use client";

import { useRef } from "react";
import { useScroll, useSpring, useTransform, MotionValue } from "framer-motion";
import ImageSequence from "./ImageSequence";
import TextOverlay from "./TextOverlay";
import SignupForm from "./SignupForm";

export default function ScrollContainer() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <div ref={containerRef} className="relative h-[400vh]">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <ImageSequenceWrapper progress={smoothProgress} />
                <TextOverlay progress={smoothProgress} />
                <SignupOverlay progress={smoothProgress} />
            </div>
        </div>
    );
}

// Wrapper to bridge MotionValue to number for Canvas
import { useEffect, useState } from "react";

function ImageSequenceWrapper({ progress }: { progress: MotionValue<number> }) {
    const [val, setVal] = useState(0);

    useEffect(() => {
        return progress.on("change", (v) => {
            setVal(v);
        });
    }, [progress]);

    return <ImageSequence progress={val} />;
}

function SignupOverlay({ progress }: { progress: MotionValue<number> }) {
    // Placeholder for now, will implement properly in SignupForm.tsx
    // or just import it. using simple opacity mapping here.
    const opacity = useTransform(progress, [0.9, 1], [0, 1]);
    const y = useTransform(progress, [0.9, 1], [50, 0]);

    // We can conditionally render or just use opacity/pointer-events
    // Using opacity for smooth transition

    return (
        <SignupForm style={{ opacity, y }} />
    )
}
