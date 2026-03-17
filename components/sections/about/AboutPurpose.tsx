"use client"

import { m } from "framer-motion"
import { ScrollReveal } from "@/components/shared/ScrollReveal"

const cards = [
    {
        title: "AI + Legal",
        description:
            "Our AI-powered system actively assists in legal workflows while keeping lawyers in control of every decision.",
        tag: "Justice · Efficiency · Impact",
        tagColor: "text-[#1a237e]",
        bg: "bg-indigo-50",
    },
    {
        title: "The Value We Deliver",
        description:
            "We deliver contextual AI assistance, contractual drafting, and operational visibility — without sacrificing legal integrity.",
        tag: "Lawyer-first design",
        tagColor: "text-orange-500",
        bg: "bg-orange-50",
    },
    {
        title: "Legal AI Chat",
        description:
            "Ask Prolex anything about your case. It understands your context, selected documents, and always keeps the lawyer in the loop.",
        tag: "Context-grounded AI",
        tagColor: "text-emerald-600",
        bg: "bg-emerald-50",
    },
    {
        title: "Efficient Without Compromise",
        description:
            "Reduce repetitive tasks and streamline billing with automated time tracking and matter-based invoicing.",
        tag: "Court-ready workflows",
        tagColor: "text-violet-600",
        bg: "bg-violet-50",
    },
]

// Triple the cards to ensure we cover wide screens for the seamless loop
const allCards = [...cards, ...cards, ...cards, ...cards]

function InfiniteTrack() {
    return (
        <div className="relative overflow-hidden w-full">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#f7f7f8] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#f7f7f8] to-transparent z-10 pointer-events-none" />

            {/* Scrolling track */}
            <m.div
                className="flex gap-5 w-max py-4"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 30,
                        ease: "linear",
                    },
                }}
            >
                {allCards.map((card, i) => (
                    <div
                        key={i}
                        className="w-[850px] shrink-0 bg-white rounded-[32px] border border-gray-100 shadow-sm p-10 hover:shadow-md transition-shadow flex items-center gap-10"
                    >
                        <div className="flex-1 text-left">
                            <h3 className="text-[32px] font-black text-gray-900 leading-tight mb-4">
                                {card.title}
                            </h3>
                            <p className="text-sm text-gray-500 leading-relaxed mb-6">
                                {card.description}
                            </p>

                        </div>

                        {/* Illustration placeholder */}
                        <div className={`w-[372px] h-[314px] shrink-0 rounded-2xl ${card.bg} flex items-center justify-center`}>
                            <span className="text-xs text-gray-300">Illustration (372x314)</span>
                        </div>
                    </div>
                ))}
            </m.div>
        </div>
    )
}

export function AboutPurpose() {
    return (
        <section className="bg-[#f7f7f8] py-24">
            <div className="max-w-3xl mx-auto text-center px-6 mb-14">
                <ScrollReveal>
                    <div className="inline-flex items-center bg-white border border-gray-200 rounded-full px-4 py-1.5 mb-5 shadow-sm">
                        <span className="text-xs text-gray-500 font-medium">Purpose</span>
                    </div>
                    <h2 className="text-4xl font-black text-gray-900 leading-tight">
                        Why We
                        <br />Built Prolex.ai
                    </h2>
                    <p className="text-sm text-gray-500 mt-4 max-w-xs mx-auto leading-relaxed">
                        Prolex.ai was founded with a singular vision: to revolutionize how legal professionals
                        manage their practice through the power of artificial intelligence.
                    </p>
                </ScrollReveal>
            </div>

            {/* Infinite scroll strip */}
            <InfiniteTrack />
        </section>
    )
}