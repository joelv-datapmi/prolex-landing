"use client"

import Image from "next/image"

import { cn } from "@/lib/utils"
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
        <section className="bg-[#f7f7f8] py-24 px-6">
            <div className="max-w-3xl mx-auto text-center mb-20">
                <ScrollReveal>
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 mb-8 shadow-sm">
                        <span className="text-xs text-gray-600 font-medium">AI-Powered</span>
                    </div>

                    <h2 className="font-jakarta text-[48px] text-gray-900 leading-tight tracking-tight">
                        AI That Thinks
                        <br />
                        With Context —
                        <br />
                        Not Guesswork.
                    </h2>

                    <p className="text-[16px] text-gray-500 mt-6 leading-relaxed max-w-sm mx-auto">
                        Prolex AI is built on governed legal AI rails. It understands case context, respects access
                        controls, and always keeps the lawyer in control.
                    </p>
                </ScrollReveal>
            </div>

            {/* Alternating feature rows */}
            <div className="max-w-[1440px] mx-auto flex flex-col gap-12">
                {aiFeatures.map((item, i) => (
                    <ScrollReveal key={item.title} delay={0.1}>
                        <div
                            className={cn(
                                "bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-16 flex flex-col md:flex-row items-center gap-16",
                                item.side === "right" ? "md:flex-row-reverse" : ""
                            )}
                        >
                            {/* Text */}
                            <div className="flex-1">
                                <h3 className="text-[32px] font-jakarta font-medium text-gray-900 mb-4">
                                    {item.title}
                                </h3>
                                <p className="text-[16px] text-gray-500 leading-relaxed max-w-md">
                                    {item.description}
                                </p>
                            </div>

                            {/* Image */}
                            <div className="flex-1 w-full relative">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-auto rounded-2xl shadow-xl border border-gray-50"
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