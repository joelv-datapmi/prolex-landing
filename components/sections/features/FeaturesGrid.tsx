"use client"

import { m } from "framer-motion"
import { ScrollReveal } from "@/components/shared/ScrollReveal"

import card1 from "@/public/features/card-1.webp"
import card2 from "@/public/features/card-2.webp"
import card3 from "@/public/features/card-3.avif"
import card4 from "@/public/features/card-4.avif"
import card5 from "@/public/features/card-5.avif"
import card6 from "@/public/features/card-6.avif"

import { FeatureImageCard } from "@/components/shared/FeatureImageCard"

const features = [
    {
        number: "01",
        title: "Case Intelligence",
        description:
            "Instantly structured case management. Track timelines, court dates, parties, documents, tasks, and hearings — all connected in one system.",
        image: card1,
    },
    {
        number: "02",
        title: "Client CRM",
        description:
            "Manage every client interaction with various context, advanced metadata, and AI-powered drafting support.",
        image: card2,
    },
    {
        number: "03",
        title: "User Management And Access",
        description:
            "Full control over who sees what. Set granular roles, permissions, and restrict team access to Prolex.",
        image: card3,
    },
    {
        number: "04",
        title: "Smart Hearings & Deadlines",
        description:
            "Never miss a date. Smart hearing and deadline tracking with calendar integration, practical reminders at every stage.",
        image: card4,
    },
    {
        number: "05",
        title: "Document Intelligence",
        description:
            "Smart document manager synced with AI-powered clause extraction, clause refinement, and version tracking.",
        image: card5,
    },
    {
        number: "06",
        title: "Role-Based Governance",
        description:
            "Give lawyers, advocates, admins, and clients only what they're authorised to access.",
        image: card6,
    },
]

export function FeaturesGrid() {
    return (
        <section className="bg-[#f7f7f8] py-20 px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, i) => (
                    <ScrollReveal key={feature.number} delay={i * 0.08}>
                        <div className="bg-white rounded-2xl p-8 min-h-[320px] flex flex-col border border-gray-100 shadow-sm">
                            {/* Number + Title */}
                            <div className="mb-4">
                                <span className="text-xs text-gray-400 font-medium tracking-widest">
                                    {feature.number}
                                </span>
                                <h3 className="text-lg font-bold text-gray-900 mt-1">
                                    {feature.title}
                                </h3>
                                <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>

                            <FeatureImageCard frontImage={feature.image} alt={feature.title} />
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </section>
    )
}