"use client";

import { useEffect, useRef, useState } from "react";

interface ImageSequenceProps {
    progress: number;
}

const FRAME_COUNT = 120;
const IMAGES_DIR = "/sequence/";
const IMAGE_PREFIX = "ezgif-frame-";

export default function ImageSequence({ progress }: ImageSequenceProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [imagesLoaded, setImagesLoaded] = useState(false);

    // Preload images
    useEffect(() => {
        let loadedCount = 0;
        const imgArray: HTMLImageElement[] = [];

        for (let i = 1; i <= FRAME_COUNT; i++) {
            const img = new Image();
            // Pad with zeros: 001, 002, ..., 120
            const paddedIndex = i.toString().padStart(3, "0");
            img.src = `${IMAGES_DIR}${IMAGE_PREFIX}${paddedIndex}.jpg`;

            img.onload = () => {
                loadedCount++;
                if (loadedCount === FRAME_COUNT) {
                    setImagesLoaded(true);
                }
            };

            imgArray.push(img);
        }
        setImages(imgArray);
    }, []);

    // Draw frame based on progress
    useEffect(() => {
        if (!imagesLoaded || !canvasRef.current || images.length === 0) return;

        const ctx = canvasRef.current.getContext("2d");
        if (!ctx) return;

        // Map progress (0-1) to frame index (0-119)
        // Clamp between 0 and FRAME_COUNT - 1
        const frameIndex = Math.min(
            FRAME_COUNT - 1,
            Math.max(0, Math.floor(progress * (FRAME_COUNT - 1)))
        );

        const img = images[frameIndex];

        const draw = () => {
            if (!canvasRef.current) return;

            // Calculate aspect ratio to cover canvas like object-fit: cover
            const canvas = canvasRef.current;
            const cw = canvas.width;
            const ch = canvas.height;
            const iw = img.width;
            const ih = img.height;

            const scale = Math.max(cw / iw, ch / ih);
            const x = (cw - iw * scale) / 2;
            const y = (ch - ih * scale) / 2;

            ctx.clearRect(0, 0, cw, ch);
            ctx.drawImage(img, x, y, iw * scale, ih * scale);
        };

        draw();

    }, [progress, imagesLoaded, images]);

    // Handle Resize
    useEffect(() => {
        const handleResize = () => {
            if (canvasRef.current) {
                canvasRef.current.width = window.innerWidth;
                canvasRef.current.height = window.innerHeight;
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // Initial size

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full object-cover z-0 pointer-events-none"
        />
    );
}
