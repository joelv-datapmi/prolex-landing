"use client"

import { ScrollReveal } from "@/components/shared/ScrollReveal"


import missionDriven from "@/public/about/mission-driven.webp"
import clientCentric from "@/public/about/client-driven.webp"
import builtForRealLegalWork from "@/public/about/built-for.webp"
import contextOverGuesswork from "@/public/about/context-over.webp"
import growthThroughClarity from "@/public/about/growth-through.webp"
import { ImageError } from "next/dist/server/image-optimizer"
import Image from "next/image"

const values = [
    {
        title: "Mission-Driven",
        image: missionDriven,
        description:
            "Empowering legal professionals with cutting-edge AI technology to deliver justice efficiently and effectively.",
        tag: "Justice · Efficiency · Impact",
        tagColor: "text-[#1a237e]",
        bg: "bg-indigo-50",
        icon: "⚖️",
    },
    {
        title: "Client-Centric",
        image: clientCentric,
        description:
            "Building solutions that address real challenges faced by lawyers and law firms in their daily practice.",
        tag: "Lawyer-first design",
        tagColor: "text-pink-500",
        bg: "bg-pink-50",
        icon: "❤️",
    },
    {
        title: "Built for Real Legal Work",
        image: builtForRealLegalWork,
        description:
            "Designed for hearings, deadlines, filings, and court workflows — not generic office tasks.",
        tag: "Court-ready workflows",
        tagColor: "text-orange-500",
        bg: "bg-orange-50",
        icon: "🏛️",
    },
    {
        title: "Context Over Guesswork",
        image: contextOverGuesswork,
        description:
            "AI suggestions are grounded in case data and selected documents — never generic output.",
        tag: "Context-grounded AI",
        tagColor: "text-emerald-600",
        bg: "bg-emerald-50",
        icon: "🧠",
    },
    {
        title: "Growth Through Clarity",
        image: growthThroughClarity,
        description:
            "Operational insights, case insights, analytics, AI usage visibility — helping firms scale responsibly.",
        tag: "Data-driven growth",
        tagColor: "text-violet-600",
        bg: "bg-violet-50",
        icon: "📈",
    },
]

export function AboutValues() {
    return (
        <section className="bg-white py-24 px-6">
            <div className="max-w-5xl mx-auto">

                <ScrollReveal>
                    <div className="text-center mb-14">
                        <div className="inline-flex items-center bg-gray-100 border border-gray-200 rounded-full px-4 py-1.5 mb-5">
                            <span className="text-xs text-gray-500 font-medium">Values</span>
                        </div>
                        <h2 className="text-[48px] font-jakarta text-gray-900">Our Core Values</h2>
                        <p className="text-[16px] text-gray-500 mt-4 max-w-xs mx-auto leading-relaxed">
                            Technology in law must be intelligent, accountable, and secure. These
                            principles guide everything we build.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
                    {values.slice(0, 3).map((v, i) => (
                        <ScrollReveal key={v.title} delay={i * 0.08}>
                            <ValueCard {...v} />
                        </ScrollReveal>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-2xl mx-auto">
                    {values.slice(3).map((v, i) => (
                        <ScrollReveal key={v.title} delay={i * 0.08}>
                            <ValueCard {...v} />
                        </ScrollReveal>
                    ))}
                </div>

            </div>
        </section>
    )
}

function ValueCard({ title, description, tag, tagColor, bg, icon, image }: typeof values[0]) {
    return (
        <div className="rounded-2xl border border-gray-100 bg-[#f7f7f8] p-5">
            <h3 className="font-jakarta text-[24px] text-gray-900 text-sm mb-1">{title}</h3>
            <p className="text-[16px] text-gray-500 leading-relaxed mb-4">{description}</p>

            <div className={`rounded-xl ${bg} p-4 mb-3 flex items-center justify-center gap-3`}>

                <Image src={image} alt={title} width={280} height={163} />

            </div>
        </div>
    )
}