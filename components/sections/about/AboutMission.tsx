"use client"

import { Check } from "lucide-react"
import { ScrollReveal } from "@/components/shared/ScrollReveal"
import Image from "next/image"

import aboutBanner from "@/public/about/about-banner.avif"

const bullets = [
    "Human-guided AI — never autonomous decision-making",
    "AI That Works in the Background",
    "Designed for Speed and Focus",
    "Security, Control, and Accountability",
    "Evolving With the Legal Profession",
    "Built for Indian legal systems with global standards",
]

export function AboutMission() {
    return (
        <section className="bg-[#f7f7f8] py-20 px-6">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Image */}
                <ScrollReveal>
                    <Image
                        src={aboutBanner}
                        alt="About Prolex Mission"
                        width={486}
                        height={564}
                        className="w-full max-w-[486px] h-auto md:h-[564px] object-cover rounded-2xl shadow-xl border border-white bg-gray-100"
                        quality={100}
                    />
                </ScrollReveal>

                {/* Text */}
                <ScrollReveal delay={0.15}>
                    <h2 className="font-jakarta text-[24px] text-gray-900 leading-snug mb-4">
                        Transforming Legal Practice
                        <br />Management with AI-Powered
                        <br />Innovation
                    </h2>
                    <p className="text-[16px] text-gray-500 leading-relaxed mb-6">
                        Prolex.ai was created to modernize legal operations without compromising professional
                        judgment. We believe that technology should reduce friction, not replace expertise. In a
                        profession where accuracy, confidentiality, and accountability define success, we built
                        Prolex as a structured legal operating system — powered by governed AI and designed for
                        real-world court workflows.
                    </p>
                    <ul className="flex flex-col gap-2.5">
                        {bullets.map((b) => (
                            <li key={b} className="flex items-start gap-2.5">
                                <Check className="h-4 w-4 text-[#1a237e] mt-0.5 shrink-0" />
                                <span className="text-[18] font-jakarta text-gray-700">{b}</span>
                            </li>
                        ))}
                    </ul>
                </ScrollReveal>

            </div>
        </section>
    )
}