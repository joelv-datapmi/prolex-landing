"use client"

import { m } from "framer-motion"

export function AboutHero() {
    return (
        <section className="bg-white pt-32 pb-16 text-center px-6">
            <m.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-2xl mx-auto"
            >
                <h1 className="font-jakarta text-5xl md:text-6xl font-black text-gray-900 leading-tight tracking-tight mb-4">
                    <span className="text-[#1a237e]">About</span> Prolex.Ai
                </h1>
                <p className="text-sm text-gray-500 leading-relaxed">
                    Transforming legal practice management
                    <br />with AI-powered innovation.
                </p>
            </m.div>
        </section>
    )
}