"use client"

import { ScrollReveal } from "@/components/shared/ScrollReveal"

const values = [
    {
        title: "Mission-Driven",
        description:
            "Empowering legal professionals with cutting-edge AI technology to deliver justice efficiently and effectively.",
        tag: "Justice · Efficiency · Impact",
        tagColor: "text-[#1a237e]",
        bg: "bg-indigo-50",
        icon: "⚖️",
    },
    {
        title: "Client-Centric",
        description:
            "Building solutions that address real challenges faced by lawyers and law firms in their daily practice.",
        tag: "Lawyer-first design",
        tagColor: "text-pink-500",
        bg: "bg-pink-50",
        icon: "❤️",
    },
    {
        title: "Built for Real Legal Work",
        description:
            "Designed for hearings, deadlines, filings, and court workflows — not generic office tasks.",
        tag: "Court-ready workflows",
        tagColor: "text-orange-500",
        bg: "bg-orange-50",
        icon: "🏛️",
    },
    {
        title: "Context Over Guesswork",
        description:
            "AI suggestions are grounded in case data and selected documents — never generic output.",
        tag: "Context-grounded AI",
        tagColor: "text-emerald-600",
        bg: "bg-emerald-50",
        icon: "🧠",
    },
    {
        title: "Growth Through Clarity",
        description:
            "Operational insights, case insights, analytics, AI usage visibility — helping firms scale responsibly.",
        tag: "Data-driven growth",
        tagColor: "text-violet-600",
        bg: "bg-violet-50",
        icon: "📈",
    },
]

export function AboutValues() {
    return (
        <section className="bg-white py-24 px-6">
            <div className="max-w-5xl mx-auto">

                <ScrollReveal>
                    <div className="text-center mb-14">
                        <div className="inline-flex items-center bg-gray-100 border border-gray-200 rounded-full px-4 py-1.5 mb-5">
                            <span className="text-xs text-gray-500 font-medium">Values</span>
                        </div>
                        <h2 className="text-4xl font-black text-gray-900">Our Core Values</h2>
                        <p className="text-sm text-gray-500 mt-4 max-w-xs mx-auto leading-relaxed">
                            Technology in law must be intelligent, accountable, and secure. These
                            principles guide everything we build.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
                    {values.slice(0, 3).map((v, i) => (
                        <ScrollReveal key={v.title} delay={i * 0.08}>
                            <ValueCard {...v} />
                        </ScrollReveal>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-2xl mx-auto">
                    {values.slice(3).map((v, i) => (
                        <ScrollReveal key={v.title} delay={i * 0.08}>
                            <ValueCard {...v} />
                        </ScrollReveal>
                    ))}
                </div>

            </div>
        </section>
    )
}

function ValueCard({ title, description, tag, tagColor, bg, icon }: typeof values[0]) {
    return (
        <div className="rounded-2xl border border-gray-100 bg-[#f7f7f8] p-5">
            <h3 className="font-bold text-gray-900 text-sm mb-1">{title}</h3>
            <p className="text-xs text-gray-500 leading-relaxed mb-4">{description}</p>

            {/* Mini card preview */}
            <div className={`rounded-xl ${bg} p-4 mb-3 flex items-center gap-3`}>
                <span className="text-xl">{icon}</span>
                <div>
                    <p className="text-xs font-semibold text-gray-700">{title}</p>
                    <p className="text-[11px] text-gray-400 leading-snug mt-0.5">{description.slice(0, 40)}...</p>
                </div>
            </div>

            <span className={`text-[11px] font-semibold ${tagColor} underline underline-offset-2`}>
                {tag}
            </span>
        </div>
    )
}