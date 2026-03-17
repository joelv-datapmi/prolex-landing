"use client"

import { ScrollReveal } from "@/components/shared/ScrollReveal"

import litigationReady from "@/public/solutions/litigation-ready.avif";
import contractLifecycle from "@/public/solutions/contract-lifecycle.avif";
import fromTemplate from "@/public/solutions/template-selection.avif"
import Image from "next/image";

const workflowCards = [
    {
        title: "Litigation-Ready Structure",
        description:
            "Built for court-driven practice with structured filing, hearings, and deadline tracking.",
        image: litigationReady,
    },
    {
        title: "Contract Lifecycle Management",
        description:
            "From template selection to clause refinement and structured approval, Prolex simplifies contract workflows.",
        image: contractLifecycle,
    },
    {
        title: "From Template Selection To Clause Refinement And Structured Approval, Prolex Simplifies Contract Workflows.",
        description:
            "Track activity, deadlines, AI usage, billing, and team productivity — all in one dashboard.",
        isWide: true,
        image: fromTemplate,
    },
]

export function WorkflowCards() {
    return (
        <section className="bg-[#f7f7f8] pb-24 px-6">
            <div className="max-w-5xl mx-auto">

                <div className="grid md:grid-cols-2 gap-6 items-start">

                    {/* LEFT — Static label */}
                    <ScrollReveal>
                        <div className="pt-4">
                            <div className="inline-flex items-center bg-white border border-gray-200 rounded-full px-4 py-1.5 mb-5 shadow-sm">
                                <span className="text-xs text-gray-500 font-medium uppercase tracking-wider">
                                    Why Prolex Differ from others
                                </span>
                            </div>
                            <h3 className="text-[32px] font-jakarta text-gray-900 leading-snug">
                                From Setup To Insight — Just
                                <br />
                                Three Simple Steps.
                            </h3>
                        </div>
                    </ScrollReveal>

                    {/* RIGHT — Stacked cards */}
                    <div className="flex flex-col gap-5">
                        {workflowCards.map((card, i) => (
                            <ScrollReveal key={card.title} delay={i * 0.1}>
                                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                                    <h4 className={`font-jakarta text-[32px] text-gray-900 mb-2 ${card.isWide ? "text-base leading-snug" : "text-sm"}`}>
                                        {card.title}
                                    </h4>
                                    <p className="text-[16px] text-gray-500 leading-relaxed mb-5">
                                        {card.description}
                                    </p>

                                    <Image
                                        src={card.image}
                                        alt={card.title}
                                        width={400}
                                        height={232}
                                        className="object-cover w-[400px] h-[232px] rounded-xl shadow-sm"
                                        quality={100}
                                    />
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}