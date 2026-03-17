"use client"

import { useRef, useEffect } from "react"
import { useInView, animate } from "framer-motion"
import { Check } from "lucide-react"
import { ScrollReveal } from "@/components/shared/ScrollReveal"

function CountUp({ target, suffix, decimals = 0 }: { target: number; suffix: string; decimals?: number }) {
    const ref = useRef<HTMLSpanElement>(null)
    const containerRef = useRef(null)
    const isInView = useInView(containerRef, { once: true, margin: "-10%" })

    useEffect(() => {
        if (!isInView || !ref.current) return
        const node = ref.current
        const ctrl = animate(0, target, {
            duration: 2,
            ease: "easeOut",
            onUpdate(v) {
                node.textContent = (decimals > 0 ? v.toFixed(decimals) : Math.round(v).toString()) + suffix
            },
        })
        return () => ctrl.stop()
    }, [isInView, target, suffix, decimals])

    return <span ref={containerRef}><span ref={ref}>0{suffix}</span></span>
}

const otherTools = [
    "Generic AI tools without legal context",
    "No case metadata integration",
    "No hearing or court structure",
    "Limited or no governance controls",
    "No AI usage tracking",
    "Risk of fabricated legal citations",
]

const prolexFeatures = [
    "Context-aware drafting using case data",
    "Integrated case lifecycle tracking",
    "Hearing & deadline automation",
    "Limited or no governance controls",
    "Real-time AI usage limits & Drafting",
    "Conservative citation safeguards",
]

const stats = [
    { target: 10, suffix: "%", decimals: 0, label: "Faster Drafts" },
    { target: 99.9, suffix: "%", decimals: 1, label: "Uptime SLA" },
    { target: 98, suffix: "%", decimals: 0, label: "Client Satisfaction" },
]

export function SmarterData() {
    return (
        <section className="bg-white py-24 px-6">
            <div className="max-w-5xl mx-auto">

                <ScrollReveal>
                    <div className="text-center mb-14">
                        <h2 className="font-jakarta text-[48px] text-gray-900 leading-tight">
                            A smarter way to
                            <br />grow with data
                        </h2>
                        <p className="text-[16px] text-gray-500 mt-4 max-w-xs mx-auto">
                            Not just another legal CRM. A Human-Guided Legal Operating System.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Comparison table */}
                <ScrollReveal delay={0.1}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-2xl mx-auto mb-16">

                        {/* Other tools */}
                        <div className="rounded-2xl border border-gray-100 bg-[#f7f7f8] p-6">
                            <p className="text-sm font-semibold text-gray-400 mb-5">Other Tools</p>
                            <ul className="flex flex-col gap-3">
                                {otherTools.map((t) => (
                                    <li key={t} className="flex items-start gap-2">
                                        <span className="mt-0.5 w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center shrink-0">
                                            <span className="w-1.5 h-0.5 bg-gray-300 rounded" />
                                        </span>
                                        <span className="text-[16px] text-gray-400 line-through">{t}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Prolex.AI */}
                        <div className="rounded-2xl border border-[#1a237e] bg-white p-6 shadow-sm">
                            <p className="text-sm font-bold text-[#1a237e] mb-5">PROLEX.AI</p>
                            <ul className="flex flex-col gap-3">
                                {prolexFeatures.map((f) => (
                                    <li key={f} className="flex items-start gap-2">
                                        <Check className="h-4 w-4 text-[#1a237e] mt-0.5 shrink-0" />
                                        <span className="text-[16px] text-gray-700 font-medium">{f}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-6 max-w-xl mx-auto">
                    {stats.map((s, i) => (
                        <ScrollReveal key={s.label} delay={i * 0.1}>
                            <div className="text-center">
                                <div className="text-[64px] font-jakarta text-gray-900">
                                    <CountUp target={s.target} suffix={s.suffix} decimals={s.decimals} />
                                </div>
                                <p className="text-[16px] text-gray-400">{s.label}</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

            </div>
        </section>
    )
}