"use client"

import { ScrollReveal } from "@/components/shared/ScrollReveal"

const steps = [
    {
        number: "01",
        title: "Step 1 — Connect, Structure the Case",
        description: "Add your client, create the case, attach parties, documents, and set the timeline in minutes.",
        color: "bg-blue-50",
    },
    {
        number: "02",
        title: "Step 2 — AI-powered Cognitive Assistance",
        description: "Prolex AI analyses your case and surfaces relevant drafts, deadlines, and risk alerts automatically.",
        color: "bg-indigo-50",
    },
    {
        number: "03",
        title: "Step 3 — Assist and proceed with confidence",
        description: "Review AI outputs, approve changes, and proceed — with full audit trail and compliance tracking.",
        color: "bg-violet-50",
    },
]

export function HowItWorks() {
    return (
        <section className="bg-white py-24 px-6">
            <div className="max-w-5xl mx-auto">

                <ScrollReveal>
                    <div className="text-center mb-14">
                        <div className="inline-flex items-center bg-gray-100 border border-gray-200 rounded-full px-4 py-1.5 mb-5">
                            <span className="text-xs text-gray-500 font-medium">Flow</span>
                        </div>
                        <h2 className="text-4xl font-black text-gray-900">How Prolex Works</h2>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {steps.map((step, i) => (
                        <ScrollReveal key={step.number} delay={i * 0.1}>
                            <div className="rounded-2xl border border-gray-100 bg-[#f7f7f8] overflow-hidden">
                                {/* Step illustration placeholder */}
                                <div className={`h-44 ${step.color} border-b border-dashed border-gray-200 flex flex-col items-center justify-center gap-2`}>
                                    <span className="text-2xl font-black text-gray-200">{step.number}</span>
                                    <span className="text-xs text-gray-300">Illustration</span>
                                </div>
                                <div className="p-5">
                                    <h3 className="font-bold text-gray-900 text-sm mb-2">{step.title}</h3>
                                    <p className="text-xs text-gray-500 leading-relaxed">{step.description}</p>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}