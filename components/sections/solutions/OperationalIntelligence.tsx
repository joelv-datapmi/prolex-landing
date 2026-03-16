"use client"

import { useRef } from "react"
import { m, useInView, useMotionValue, useSpring, animate } from "framer-motion"
import { useEffect } from "react"
import { ScrollReveal } from "@/components/shared/ScrollReveal"

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
    { value: 4, decimals: 0, suffix: "%", label: "Faster Draft Preparation" },
    { value: 6, decimals: 0, suffix: "%", label: "Faster case tracking" },
    { value: 4.9, decimals: 1, suffix: "%", label: "Reduction in Missed Deadlines" },
    { value: 10, decimals: 0, suffix: "%", label: "Human Approval Control" },
]

function StatItem({ value, decimals, suffix, label }: typeof stats[0]) {
    const { ref, inViewRef } = useCountUp(value, decimals)

    return (
        <div ref={inViewRef} className="text-center">
            <div className="text-4xl font-black text-gray-900 flex items-end justify-center gap-0.5">
                <span ref={ref}>0</span>
                <span>{suffix}</span>
            </div>
            <p className="text-xs text-gray-400 mt-1 max-w-[100px] mx-auto leading-snug">
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
                        <h2 className="text-3xl font-black text-gray-900 leading-tight">
                            Operational Intelligence
                            <br />
                            for Modern Law Firms
                        </h2>
                    </ScrollReveal>

                    <ScrollReveal delay={0.1}>
                        <p className="text-sm text-gray-500 leading-relaxed">
                            Prolex.ai transforms legal operations into structured, measurable, and intelligent
                            workflows. From case management to AI-assisted drafting, every module is built
                            to reduce friction, increase clarity, and strengthen compliance.
                        </p>
                        <p className="text-xs text-gray-400 mt-3">
                            Designed for real-world legal practice — not generic productivity software.
                        </p>
                    </ScrollReveal>
                </div>

                {/* Image placeholder */}
                <ScrollReveal delay={0.15}>
                    <div className="w-full h-72 rounded-2xl bg-gray-200 border border-dashed border-gray-300 flex items-center justify-center mb-14 overflow-hidden">
                        <span className="text-sm text-gray-400">
                            Team / Office Photo — replace with &lt;Image&gt;
                        </span>
                    </div>
                </ScrollReveal>

                {/* Stats row with count-up */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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