"use client"

import Image from "next/image"

import { ScrollReveal } from "@/components/shared/ScrollReveal"

import caseintelligence from "@/public/home/case-int.avif"
import documentAutomation from "@/public/home/doc-auto.avif"
import smartHearings from "@/public/home/smart-hearing.avif"
import aiDrafting from "@/public/home/ai-draft.avif"
import clientOnboarding from "@/public/home/client-communication.avif"
import PrecedentFinder from "@/public/home/precedent-finder.avif"


const features = [
    {
        title: "Case Intelligence",
        description: "Manage every legal document with version control, structured metadata, and AI-powered drafting support.",
        image: caseintelligence,
    },
    {
        title: "Document Automation",
        description: "Generate, review, and store legal documents with AI-powered clause suggestions.",
        image: documentAutomation,
    },
    {
        title: "Smart Hearings & Reminders",
        description: "Never miss a court date. Automated reminders, structured hearing tracking, and deadline-based nudges.",
        image: smartHearings,
    },
    {
        title: "AI Drafting & Documents",
        description: "Human-guided AI drafting grounded in case context — with full control, review, and governance.",
        image: aiDrafting,
    },
    {
        title: "Client Communication",
        description: "Streamline client updates with AI-assisted, case summaries, and organized communication.",
        image: clientOnboarding,
    },
    {
        title: "Precedent Finder",
        description: "Find relevant precedents faster with our Prolex.Ai legal search that connects past cases to your current matter.",
        image: PrecedentFinder,
    },
]

export function PlatformFeatures() {
    return (
        <section className="bg-[#f7f7f8] py-24 px-6">
            <div className="max-w-5xl mx-auto">

                <ScrollReveal>
                    <div className="text-center mb-14">
                        <div className="inline-flex items-center bg-white border border-gray-200 rounded-full px-4 py-1.5 mb-5 shadow-sm">
                            <span className="text-xs text-gray-500 font-medium">Unique Features</span>
                        </div>
                        <h2 className="text-[48px] font-jakarta font-medium text-gray-900 leading-tight">
                            Make your platform
                            <br />work harder for you
                        </h2>
                        <p className="text-[16px] text-gray-500 mt-4 max-w-sm mx-auto leading-relaxed">
                            Streamline your business with unified metrics and AI-powered analytics—all in one place.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {features.map((f, i) => (
                        <ScrollReveal key={f.title} delay={i * 0.07}>
                            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                                {/* Illustration placeholder — purple-tinted like screenshot */}
                                <Image src={f.image} alt={f.title} width={500} height={500} />
                                <div className="p-5">
                                    <h3 className="text-[24px] font-jakarta font-medium text-gray-900 mb-1">{f.title}</h3>
                                    <p className="text-[16px] text-gray-500 leading-relaxed">{f.description}</p>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}