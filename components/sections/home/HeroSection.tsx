"use client"

import Link from "next/link"
import { m } from "framer-motion"
import { Button } from "@/components/ui/button"

function FloatingCard({
    children,
    className,
    delay = 0,
}: {
    children: React.ReactNode
    className?: string
    delay?: number
}) {
    return (
        <m.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
            className={`absolute bg-white rounded-2xl shadow-md p-4 flex items-center justify-center ${className}`}
            style={{ animation: `heroFloat ${3 + delay}s ease-in-out infinite`, animationDelay: `${delay}s` }}
        >
            {children}
        </m.div>
    )
}

export function HeroSection() {
    return (
        <section className="relative min-h-[calc(100vh-4rem)] bg-[#f0f0f0] flex items-center justify-center overflow-hidden">

            {/* Floating cards */}
            <FloatingCard className="w-16 h-16 left-[10%] top-[20%]" delay={0.2}>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M14 2C14 2 15.5 10 20 13C15.5 16 14 24 14 24C14 24 12.5 16 8 13C12.5 10 14 2 14 2Z" fill="#1a237e" />
                    <path d="M22 5C22 5 22.6 9 25 11C22.6 13 22 17 22 17C22 17 21.4 13 19 11C21.4 9 22 5 22 5Z" fill="#1a237e" opacity="0.4" />
                </svg>
            </FloatingCard>
            <FloatingCard className="w-16 h-16 left-[7%] bottom-[25%]" delay={0.5}>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#1a237e" strokeWidth="1.8">
                    <rect x="4" y="10" width="20" height="14" rx="2" />
                    <path d="M10 10V8a4 4 0 018 0v2" />
                    <path d="M4 16h20" />
                </svg>
            </FloatingCard>
            <FloatingCard className="w-16 h-16 right-[10%] top-[20%]" delay={0.3}>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#1a237e" strokeWidth="1.8">
                    <circle cx="14" cy="8" r="4" />
                    <path d="M6 22c0-4.418 3.582-8 8-8s8 3.582 8 8" />
                    <path d="M4 22h20" />
                </svg>
            </FloatingCard>
            <FloatingCard className="w-16 h-16 right-[7%] bottom-[25%]" delay={0.6}>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#1a237e" strokeWidth="1.8">
                    <path d="M6 22L20 8" strokeLinecap="round" />
                    <rect x="15" y="3" width="9" height="6" rx="1.5" transform="rotate(45 15 3)" />
                    <rect x="3" y="18" width="7" height="5" rx="1.5" transform="rotate(45 3 18)" />
                    <path d="M4 26h10" strokeLinecap="round" />
                </svg>
            </FloatingCard>

            {/* Center content */}
            <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl mx-auto">

                {/* Trust badge */}
                <m.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 mb-8 shadow-sm"
                >
                    <div className="flex -space-x-1.5">
                        {["bg-orange-400", "bg-blue-500", "bg-emerald-400"].map((c, i) => (
                            <div key={i} className={`w-5 h-5 rounded-full ${c} border-2 border-white`} />
                        ))}
                    </div>
                    <span className="text-xs text-gray-600 font-medium">Trusted by many people</span>
                </m.div>

                <m.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-5xl md:text-6xl font-black text-gray-900 leading-tight tracking-tight mb-5"
                >
                    The Future Of Legal
                    <br />Practice Management
                    <br />Powered By AI
                </m.h1>

                <m.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.35 }}
                    className="text-sm text-gray-500 leading-relaxed max-w-sm mb-10"
                >
                    Streamline your entire firm — client intake,
                    <br />case management, document automation,
                    <br />and collaboration — all in one secure platform.
                </m.p>

                <m.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="flex items-center gap-3"
                >
                    <Button className="bg-[#1a237e] hover:bg-[#151c6b] text-white font-medium px-6" asChild>
                        <Link href="/demo">Request Demo</Link>
                    </Button>
                    <Button variant="outline" className="border-gray-300 text-gray-700 px-6" asChild>
                        <Link href="/login">Sign In</Link>
                    </Button>
                </m.div>
            </div>

            <style jsx>{`
        @keyframes heroFloat {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }
      `}</style>
        </section>
    )
}