"use client"

import Link from "next/link"
import Image from "next/image"
import { m, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useRef } from "react"
import { RequestDemoButton } from "@/components/shared/RequestDemoButton"

import { Briefcase } from "iconsax-reactjs"

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
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    })

    const rotateX = useTransform(scrollYProgress, [0, 0.3], [15, 0])
    const scale = useTransform(scrollYProgress, [0, 0.3], [0.95, 1])
    const opacity = useTransform(scrollYProgress, [0, 0.1], [0.8, 1])

    return (
        <section ref={containerRef} className="relative min-h-screen bg-[#f0f0f0] flex flex-col items-center pt-24 justify-start overflow-visible pb-20">

            {/* Floating cards */}
            <FloatingCard className="w-20 h-20 left-[26%] top-[8%] z-20" delay={0.2}>
                <svg width="36" height="36" viewBox="0 0 28 28" fill="none">
                    <path d="M14 2C14 2 15.5 10 20 13C15.5 16 14 24 14 24C14 24 12.5 16 8 13C12.5 10 14 2 14 2Z" fill="#1a237e" />
                    <path d="M22 5C22 5 22.6 9 25 11C22.6 13 22 17 22 17C22 17 21.4 13 19 11C21.4 9 22 5 22 5Z" fill="#1a237e" opacity="0.4" />
                </svg>
            </FloatingCard>
            <FloatingCard className="w-20 h-20 left-[24%] top-[33%] z-20" delay={0.5}>
                <Briefcase size={32} color="#1a237e" />
            </FloatingCard>
            <FloatingCard className="w-20 h-20 right-[26%] top-[8%] z-20" delay={0.3}>
                <svg width="36" height="36" viewBox="0 0 28 28" fill="none" stroke="#1a237e" strokeWidth="2">
                    <circle cx="14" cy="8" r="4" />
                    <path d="M6 22c0-4.418 3.582-8 8-8s8 3.582 8 8" />
                    <path d="M4 22h20" />
                </svg>
            </FloatingCard>
            <FloatingCard className="w-20 h-20 right-[24%] top-[33%] z-20" delay={0.6}>
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none">
                    <g clipPath="url(#clip0_4418_4899)">
                        <path d="M20.5398 19.0393C20.3898 19.1893 20.1998 19.2593 20.0098 19.2593C19.8198 19.2593 19.6298 19.1893 19.4798 19.0393L14.5298 14.0893L15.0598 13.5593L15.5898 13.0293L20.5398 17.9793C20.8298 18.2693 20.8298 18.7493 20.5398 19.0393Z" fill="#1a237e" />
                        <path opacity="0.4" d="M6.46987 9.28009L12.2699 15.0801C12.6599 15.4701 12.6599 16.1001 12.2699 16.4901L11.3699 17.4001C10.5599 18.2001 9.27986 18.2001 8.47986 17.4001L4.13986 13.0601C3.34986 12.2701 3.34986 10.9801 4.13986 10.1801L5.04987 9.27009C5.43987 8.89009 6.07986 8.89009 6.46987 9.28009Z" fill="#1a237e" />
                        <path d="M18.59 10.1895L14.78 13.9895C14.38 14.3895 13.74 14.3895 13.34 13.9895L7.57002 8.21945C7.17002 7.81945 7.17002 7.17945 7.57002 6.77945L11.38 2.96945C12.17 2.17945 13.46 2.17945 14.26 2.96945L18.6 7.30945C19.38 8.09945 19.38 9.37945 18.59 10.1895Z" fill="#1a237e" />
                        <path d="M8 21.75H2C1.59 21.75 1.25 21.41 1.25 21C1.25 20.59 1.59 20.25 2 20.25H8C8.41 20.25 8.75 20.59 8.75 21C8.75 21.41 8.41 21.75 8 21.75Z" fill="#1a237e" />
                    </g>
                    <defs>
                        <clipPath id="clip0_4418_4899">
                            <rect width="24" height="24" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </FloatingCard>

            {/* Center content */}
            <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl mx-auto mb-16">

                {/* Trust badge */}
                <m.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="flex items-center gap-2 bg-[#E1EAF8] border border-[#434C97] rounded-full px-4 py-1.5 mb-8 shadow-sm"
                >
                    <div className="flex -space-x-1.5">
                        {["/home/trust-1.avif", "/home/trust-2.avif", "/home/trust-3.avif"].map((src, i) => (
                            <div key={i} className="relative w-5 h-5 rounded-full border-2 border-white overflow-hidden bg-gray-100">
                                <Image
                                    src={src}
                                    alt={`Trusted user ${i + 1}`}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </div>
                    <span className="text-[14px] text-[#434C97] font-medium">Trusted by many people</span>
                </m.div>

                <m.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[60px] font-jakarta font-medium text-gray-900 leading-[1.1] tracking-tight mb-5"
                >
                    The Future Of Legal
                    <br />Practice Management
                    <br />Powered By AI
                </m.h1>

                <m.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.35 }}
                    className="text-[16px] text-gray-500 leading-relaxed max-w-sm mb-10"
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
                    <RequestDemoButton className="bg-[#1a237e] hover:bg-[#151c6b] text-white font-medium px-6" />

                    <Button variant="outline" className="border-gray-300 text-gray-700 px-6" asChild>
                        <a href="https://app.prolex.ai/login">Sign In</a>
                    </Button>

                </m.div>
            </div>

            {/* Video Preview with 3D Scroll Effect */}
            <div className="relative w-full max-w-6xl px-6 mx-auto perspective-1000">
                <m.div
                    style={{
                        rotateX,
                        scale,
                        opacity,
                        transformStyle: "preserve-3d"
                    }}
                    className="relative w-full"
                >
                    {/* Blue Tint Glow behind the video */}
                    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 w-[80%] h-[80%] mx-auto bg-blue-600/20 blur-[120px] rounded-full pointer-events-none z-0" />

                    {/* The Video Box */}
                    <div className="relative w-full rounded-2xl overflow-hidden border border-white/40 bg-transparent aspect-video z-10 shadow-sm">
                        <video
                            src="/home/crm-video.mp4"
                            autoPlay
                            muted
                            loop
                            className="w-full h-full object-cover"
                            playsInline
                        />
                    </div>

                    {/* Top Right Overflow Image */}
                    <m.div
                        initial={{ opacity: 0, x: 20, y: -20 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="absolute -top-[1%] -right-[8%] w-[25%] aspect-[4/3] z-20 drop-shadow-2xl"
                    >
                        <Image
                            src="/home/top-right.avif"
                            alt="Interface feature"
                            fill
                            className="object-contain"
                            quality={100}
                        />
                    </m.div>

                    {/* Bottom Left Overflow Image */}
                    <m.div
                        initial={{ opacity: 0, x: -20, y: 20 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="absolute -bottom-[5%] -left-[8%] w-[22%] aspect-[4/3] z-20 drop-shadow-2xl"
                    >
                        <Image
                            src="/home/bottom-left.avif"
                            alt="User card"
                            fill
                            className="object-contain"
                            quality={100}
                        />
                    </m.div>
                </m.div>
            </div>

            <style jsx>{`
        @keyframes heroFloat {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }
        .perspective-1000 {
            perspective: 1200px;
        }
      `}</style>
        </section>
    )
}