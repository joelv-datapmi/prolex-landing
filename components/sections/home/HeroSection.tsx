"use client"

import Link from "next/link"
import { m } from "framer-motion"
import { Button } from "@/components/ui/button"

// Floating icon card component
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
            // Subtle floating animation loop
            whileInView={{ y: [0, -8, 0] }}
            viewport={{ once: false }}
            style={{
                animation: `float ${3 + delay}s ease-in-out infinite`,
                animationDelay: `${delay}s`,
            }}
            className={`absolute bg-white rounded-2xl shadow-md p-4 flex items-center justify-center ${className}`}
        >
            {children}
        </m.div>
    )
}

// SVG Icons matching the screenshot
function SparkleIcon() {
    return (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path
                d="M20 4C20 4 21.5 14 28 18C21.5 22 20 32 20 32C20 32 18.5 22 12 18C18.5 14 20 4 20 4Z"
                fill="#1a237e"
            />
            <path
                d="M30 8C30 8 30.8 13 34 15C30.8 17 30 22 30 22C30 22 29.2 17 26 15C29.2 13 30 8 30 8Z"
                fill="#1a237e"
                opacity="0.5"
            />
        </svg>
    )
}

function JudgeIcon() {
    return (
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" stroke="#1a237e" strokeWidth="1.8">
            <circle cx="22" cy="10" r="5" />
            <path d="M12 28c0-5.523 4.477-10 10-10s10 4.477 10 10" />
            <rect x="8" y="28" width="28" height="3" rx="1.5" />
            <rect x="12" y="34" width="20" height="3" rx="1.5" />
        </svg>
    )
}

function BriefcaseIcon() {
    return (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#1a237e" strokeWidth="1.8">
            <rect x="6" y="14" width="28" height="20" rx="3" />
            <path d="M14 14v-3a2 2 0 012-2h8a2 2 0 012 2v3" />
            <path d="M6 22h28" />
        </svg>
    )
}

function GavelIcon() {
    return (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#1a237e" strokeWidth="1.8">
            <path d="M10 30L28 12" strokeLinecap="round" />
            <rect x="22" y="6" width="12" height="8" rx="2" transform="rotate(45 22 6)" />
            <rect x="6" y="26" width="10" height="7" rx="2" transform="rotate(45 6 26)" />
            <path d="M8 34h12" strokeLinecap="round" />
        </svg>
    )
}

export function HeroSection() {
    return (
        <section className="relative min-h-[calc(100vh-4rem)] bg-[#f0f0f0] flex items-center justify-center overflow-hidden">

            {/* Floating icon cards — positioned absolutely */}
            <FloatingCard className="w-20 h-20 left-[10%] top-[18%]" delay={0.2}>
                <SparkleIcon />
            </FloatingCard>

            <FloatingCard className="w-20 h-20 left-[8%] bottom-[22%]" delay={0.5}>
                <BriefcaseIcon />
            </FloatingCard>

            <FloatingCard className="w-20 h-20 right-[10%] top-[18%]" delay={0.3}>
                <JudgeIcon />
            </FloatingCard>

            <FloatingCard className="w-20 h-20 right-[8%] bottom-[22%]" delay={0.6}>
                <GavelIcon />
            </FloatingCard>

            {/* Center content */}
            <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl mx-auto">

                {/* Trust badge */}
                <m.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 mb-8 shadow-sm"
                >
                    {/* Avatar stack */}
                    <div className="flex -space-x-2">
                        {["bg-orange-400", "bg-blue-400", "bg-green-400"].map((color, i) => (
                            <div
                                key={i}
                                className={`w-6 h-6 rounded-full ${color} border-2 border-white`}
                            />
                        ))}
                    </div>
                    <span className="text-sm text-gray-600 font-medium">
                        Trusted by many people
                    </span>
                </m.div>

                {/* Headline */}
                <m.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-5xl md:text-6xl font-black text-gray-900 leading-tight tracking-tight mb-6"
                >
                    The Future Of Legal
                    <br />
                    Practice Management
                    <br />
                    Powered By AI
                </m.h1>

                {/* Subheading */}
                <m.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="text-sm text-gray-500 leading-relaxed max-w-sm mb-10"
                >
                    Streamline your entire firm — client intake,
                    <br />
                    case management, document automation,
                    <br />
                    and collaboration — all in one secure platform.
                </m.p>

                {/* CTA buttons */}
                <m.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-center gap-3"
                >
                    <Button
                        className="bg-[#1a237e] hover:bg-[#151c6b] text-white font-medium px-6 py-2.5 rounded-md"
                        asChild
                    >
                        <Link href="/demo">Request Demo</Link>
                    </Button>

                    <Button
                        variant="outline"
                        className="border-gray-300 text-gray-700 font-medium px-6 py-2.5 rounded-md hover:bg-gray-50"
                        asChild
                    >
                        <Link href="/login">Sign In</Link>
                    </Button>
                </m.div>

            </div>

            {/* Floating animation keyframes */}
            <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }
      `}</style>

        </section>
    )
}