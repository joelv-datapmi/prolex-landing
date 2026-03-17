"use client"

import Image from "next/image"

import { ScrollReveal } from "@/components/shared/ScrollReveal"

import contextAware from "@/public/features/context-aware.avif";
import humanApproved from "@/public/features/human-approved.avif";
import conservativeResponsible from "@/public/features/conservative-responsible.avif";

const aiFeatures = [
    {
        side: "left",
        title: "Context-Aware Drafting",
        description:
            "Drafts documents with full awareness of your case, including court filings, parties, deadlines, and adjoining documents — no re-entering details in context.",
        image: contextAware,
    },
    {
        side: "right",
        title: "Human Approval Required",
        description:
            "All AI outputs need a draft must be reviewed and approved by a human before saving. Every edit, every decision is explicitly confirmed.",
        image: humanApproved,
    },
    {
        side: "left",
        title: "Conservative & Responsible AI",
        description:
            "Prolex AI follows strict legal language to prevent hallucination and real-world side effects.",
        image: conservativeResponsible,
    },
]

export function AISection() {
    return (
        <section className="bg-white py-24 px-6">
            <div className="max-w-3xl mx-auto text-center mb-20">
                <ScrollReveal>
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-gray-100 border border-gray-200 rounded-full px-4 py-1.5 mb-8">
                        <span className="text-xs text-gray-600 font-medium">AI-Powered</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight tracking-tight">
                        AI That Thinks
                        <br />
                        With Context —
                        <br />
                        Not Guesswork.
                    </h2>

                    <p className="text-sm text-gray-500 mt-6 leading-relaxed max-w-sm mx-auto">
                        Prolex AI is built on governed legal AI rails. It understands case context, respects access
                        controls, and always keeps the lawyer in control.
                    </p>
                </ScrollReveal>
            </div>

            {/* Alternating feature rows */}
            <div className="max-w-5xl mx-auto flex flex-col gap-24">
                {aiFeatures.map((item, i) => (
                    <ScrollReveal key={item.title} delay={0.1}>
                        <div
                            className={`flex flex-col md:flex-row items-center gap-12 ${item.side === "right" ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Text */}
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-gray-500 leading-relaxed max-w-sm">
                                    {item.description}
                                </p>
                            </div>

                            {/* Image */}
                            <div className="flex-1 mt-8 md:mt-0 w-full relative">
                                <Image 
                                    src={item.image} 
                                    alt={item.title} 
                                    className="w-full h-auto rounded-2xl shadow-xl border border-gray-100" 
                                    quality={100} 
                                />
                            </div>
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </section>
    )
}