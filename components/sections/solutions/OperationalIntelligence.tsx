"use client"

import { useRef } from "react"
import { m, useInView, useMotionValue, useSpring, animate } from "framer-motion"
import { useEffect } from "react"
import { ScrollReveal } from "@/components/shared/ScrollReveal"

import solutionsBanner from "@/public/solutions/solutions-banner.avif"
import Image from "next/image"

// Count-up hook
function useCountUp(target: number, decimals = 0, duration = 2) {
    const ref = useRef<HTMLSpanElement>(null)
    const inViewRef = useRef(null)
    const isInView = useInView(inViewRef, { once: true, margin: "-10%" })

    useEffect(() => {
        if (!isInView || !ref.current) return
        const node = ref.current
        const controls = animate(0, target, {
            duration,
            ease: "easeOut",
            onUpdate(value) {
                node.textContent = decimals > 0
                    ? value.toFixed(decimals)
                    : Math.round(value).toString()
            },
        })
        return () => controls.stop()
    }, [isInView, target, decimals, duration])

    return { ref, inViewRef }
}

const stats = [
    { value: 40, decimals: 0, suffix: "%", label: "Faster Draft Preparation" },
    { value: 60, decimals: 0, suffix: "%", label: "Faster case tracking" },
    { value: 50, decimals: 1, suffix: "%", label: "Reduction in Missed Deadlines" },
    { value: 100, decimals: 0, suffix: "%", label: "Human Approval Control" },
]

function StatItem({ value, decimals, suffix, label }: typeof stats[0]) {
    const { ref, inViewRef } = useCountUp(value, decimals)

    return (
        <div ref={inViewRef} className="text-center">
            <div className="text-[36px] sm:text-[48px] md:text-[61px] font-jakarta text-gray-900 flex items-end justify-center gap-0.5 leading-none">
                <span ref={ref}>0</span>
                <span>{suffix}</span>
            </div>
            <p className="text-[14px] sm:text-[16px] text-gray-400 mt-2 max-w-[140px] mx-auto leading-snug font-medium">
                {label}
            </p>
        </div>

    )
}

export function OperationalIntelligence() {
    return (
        <section className="bg-[#f7f7f8] py-20 px-6">
            <div className="max-w-5xl mx-auto">

                {/* Top text + image layout */}
                <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
                    <ScrollReveal>
                        <h2 className="font-jakarta text-[32px] sm:text-[40px] md:text-[48px] text-gray-900 leading-tight">
                            Operational Intelligence
                            <br className="hidden sm:block" /> for Modern Law Firms
                        </h2>
                    </ScrollReveal>


                    <ScrollReveal delay={0.1}>
                        <p className="text-[16px] text-gray-500 leading-relaxed">
                            Prolex.ai transforms legal operations into structured, measurable, and intelligent
                            workflows. From case management to AI-assisted drafting, every module is built
                            to reduce friction, increase clarity, and strengthen compliance.
                        </p>
                        <p className="text-[16px] text-gray-400 mt-3">
                            Designed for real-world legal practice — not generic productivity software.
                        </p>
                    </ScrollReveal>
                </div>

                {/* Banner Image */}
                <ScrollReveal delay={0.15}>
                    <m.div
                        initial={{ scale: 0.85, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true, margin: "-10%" }}
                        className="w-full max-w-[1008px] mx-auto mb-14 rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-white flex justify-center"
                    >
                        <Image
                            src={solutionsBanner}
                            alt="Operational Intelligence Banner"
                            className="w-full h-auto object-cover max-h-[385px]"
                            width={1008}
                            height={385}
                            quality={100}
                        />
                    </m.div>
                </ScrollReveal>

                {/* Stats row with count-up */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-8">
                    {stats.map((stat, i) => (
                        <ScrollReveal key={stat.label} delay={i * 0.08}>
                            <StatItem {...stat} />
                        </ScrollReveal>
                    ))}
                </div>


            </div>
        </section>
    )
}