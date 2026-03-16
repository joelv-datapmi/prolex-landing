"use client"

import { ScrollReveal } from "@/components/shared/ScrollReveal"

const audiences = [
    {
        title: "Solo Practitioner",
        description:
            "Simply your entire practice in one tool. Manage cases, clients and billing without the complexity.",
    },
    {
        title: "Law Firms & Corporations",
        description:
            "Manage internal compliance and documentation effortlessly with enterprise-grade tools.",
    },
    {
        title: "Enter Prise Firms",
        description:
            "Scale operations with role-based dashboards and AI insights for large organisations.",
    },
]

export function BuiltForModern() {
    return (
        <section className="bg-white py-24 px-6">
            <div className="max-w-5xl mx-auto">

                {/* Header */}
                <div className="text-center mb-16">
                    <ScrollReveal>
                        <div className="inline-flex items-center bg-gray-100 border border-gray-200 rounded-full px-4 py-1.5 mb-6">
                            <span className="text-xs text-gray-500 font-medium">Why AI?</span>
                        </div>
                        <h2 className="text-4xl font-black text-gray-900 leading-tight">
                            Built for modern
                            <br />
                            legal practice
                        </h2>
                        <p className="text-sm text-gray-500 mt-4 max-w-xs mx-auto leading-relaxed">
                            Whether you're a solo practitioner or a large enterprise firm, Prolex.ai
                            adapts to your practice and workflow.
                        </p>
                    </ScrollReveal>
                </div>

                {/* 3-col cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {audiences.map((item, i) => (
                        <ScrollReveal key={item.title} delay={i * 0.1}>
                            <div className="rounded-2xl border border-gray-100 bg-[#f7f7f8] overflow-hidden">
                                {/* Image placeholder */}
                                <div className="h-44 bg-gray-200 border-b border-dashed border-gray-300 flex items-center justify-center">
                                    <span className="text-xs text-gray-400">{item.title} photo</span>
                                </div>
                                <div className="p-5">
                                    <h3 className="font-bold text-gray-900 text-sm mb-1">{item.title}</h3>
                                    <p className="text-xs text-gray-500 leading-relaxed">{item.description}</p>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

            </div>
        </section>
    )
}