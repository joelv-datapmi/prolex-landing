"use client"

import { ScrollReveal } from "@/components/shared/ScrollReveal"

const team = [
    {
        title: "Legal-First Thinkers",
        description:
            "Built with deep understanding of court-driven workflows and compliance sensitivity.",
        icon: "👤",
    },
    {
        title: "AI Governance Advocates",
        description:
            "We prioritise conservative, explainable AI over flashy automation.",
        icon: "🛡️",
    },
    {
        title: "System Builders",
        description:
            "We design structured platforms, not disconnected feature sets.",
        icon: "🧱",
    },
    {
        title: "Long-Term Partners",
        description:
            "We partner with law firms for the long run — supporting growth, compliance, and operational transformation through governed AI and scalable infrastructure.",
        icon: "🤝",
    },
]

export function AboutWhoWeAre() {
    return (
        <section className="bg-[#f7f7f8] py-24 px-6">
            <div className="max-w-5xl mx-auto">

                <ScrollReveal>
                    <div className="text-center mb-14">
                        <div className="inline-flex items-center bg-white border border-gray-200 rounded-full px-4 py-1.5 mb-5 shadow-sm">
                            <span className="text-xs text-gray-500 font-medium">Values</span>
                        </div>
                        <h2 className="text-4xl font-black text-gray-900">Who We Are</h2>
                        <p className="text-sm text-gray-500 mt-4 max-w-sm mx-auto leading-relaxed">
                            We are legal technologists, system architects, and product thinkers committed
                            to modernising legal practice responsibly.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
                    {team.map((t, i) => (
                        <ScrollReveal key={t.title} delay={i * 0.08}>
                            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                                <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-xl mb-4">
                                    {t.icon}
                                </div>
                                <h3 className="font-bold text-gray-900 text-sm mb-2">{t.title}</h3>
                                <p className="text-xs text-gray-500 leading-relaxed">{t.description}</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

            </div>
        </section>
    )
}