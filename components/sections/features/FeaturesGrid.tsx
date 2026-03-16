"use client"

import { m } from "framer-motion"
import { ScrollReveal } from "@/components/shared/ScrollReveal"

const features = [
    {
        number: "01",
        title: "Case Intelligence",
        description:
            "Instantly structured case management. Track timelines, court dates, parties, documents, tasks, and hearings — all connected in one system.",
    },
    {
        number: "02",
        title: "Client CRM",
        description:
            "Manage every client interaction with various context, advanced metadata, and AI-powered drafting support.",
    },
    {
        number: "03",
        title: "User Management And Access",
        description:
            "Full control over who sees what. Set granular roles, permissions, and restrict team access to Prolex.",
    },
    {
        number: "04",
        title: "Smart Hearings & Deadlines",
        description:
            "Never miss a date. Smart hearing and deadline tracking with calendar integration, practical reminders at every stage.",
    },
    {
        number: "05",
        title: "Document Intelligence",
        description:
            "Smart document manager synced with AI-powered clause extraction, clause refinement, and version tracking.",
    },
    {
        number: "06",
        title: "Role-Based Governance",
        description:
            "Give lawyers, advocates, admins, and clients only what they're authorised to access.",
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

                            {/* Image placeholder — replace with your actual illustration */}
                            <div className="flex-1 mt-6 rounded-xl bg-gray-50 border border-dashed border-gray-200 flex items-center justify-center">
                                <span className="text-xs text-gray-300">
                                    Illustration — {feature.title}
                                </span>
                            </div>
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </section>
    )
}