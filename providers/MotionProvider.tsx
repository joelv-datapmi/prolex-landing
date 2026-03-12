"use client"

import { LazyMotion, domAnimation, MotionConfig } from "framer-motion"

export function MotionProvider({ children }: { children: React.ReactNode }) {
    return (
        // LazyMotion reduces bundle — only loads features you declare
        <LazyMotion features={domAnimation} strict>
            <MotionConfig
                reducedMotion="user"   // Automatically respects prefers-reduced-motion
                transition={{
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1], // Expo out — snappy feel
                }}
            >
                {children}
            </MotionConfig>
        </LazyMotion>
    )
}