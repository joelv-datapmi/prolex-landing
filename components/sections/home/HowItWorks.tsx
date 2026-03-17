"use client"

import { ScrollReveal } from "@/components/shared/ScrollReveal"

import connectStructure from "@/public/home/create-structure.avif"
import uploadOrganize from "@/public/home/upload-organize.avif"
import draftAnalyze from "@/public/home/draft-analyze.avif"
import Image from "next/image"

const steps = [
    {
        number: "01",
        title: "Step 1 — Connect, Structure the Case",
        description: "Add your client, create the case, attach parties, documents, and set the timeline in minutes.",
        color: "bg-blue-50",
        image: connectStructure
    },
    {
        number: "02",
        title: "Step 2 — AI-powered Cognitive Assistance",
        description: "Prolex AI analyses your case and surfaces relevant drafts, deadlines, and risk alerts automatically.",
        color: "bg-indigo-50",
        image: uploadOrganize
    },
    {
        number: "03",
        title: "Step 3 — Assist and proceed with confidence",
        description: "Review AI outputs, approve changes, and proceed — with full audit trail and compliance tracking.",
        color: "bg-violet-50",
        image: draftAnalyze
    },
]

export function HowItWorks() {
    return (
        <section className="bg-white py-24 px-6">
            <div className="max-w-5xl mx-auto">

                <ScrollReveal>
                    <div className="text-center mb-14">
                        <div className="inline-flex items-center bg-gray-100 border border-gray-200 rounded-full px-4 py-1.5 mb-5">
                            <span className="text-xs text-gray-500 font-medium">How it works</span>
                        </div>
                        <h2 className="text-[48px] font-jakarta text-gray-900 leading-tight">How Prolex Works</h2>
                        <p className="text-[16px] text-gray-500 mt-4 max-w-sm mx-auto leading-relaxed">
                            From intake to resolution — structured, intelligent, and secure.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {steps.map((step, i) => (
                        <ScrollReveal key={step.number} delay={i * 0.1}>
                            <div className="rounded-2xl border border-gray-100 bg-[#f7f7f8] overflow-hidden">
                                {/* Step illustration placeholder */}
                                <Image src={step.image} alt={step.title} width={500} height={500} />
                                <div className="p-5">
                                    <h3 className="font-jakarta text-[24px] text-gray-900 mb-2">{step.title}</h3>
                                    <p className="text-[16px] text-gray-500 leading-relaxed">{step.description}</p>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}