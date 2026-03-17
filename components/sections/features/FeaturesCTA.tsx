"use client"

import Link from "next/link"
import { m } from "framer-motion"
import { ScrollReveal } from "@/components/shared/ScrollReveal"
import { Button } from "@/components/ui/button"
import { RequestDemoButton } from "@/components/shared/RequestDemoButton"


export function FeaturesCTA() {
    return (
        <section className="px-6 py-16 bg-[#f7f7f8]">
            <ScrollReveal>
                <div className=" mx-auto bg-[#1a237e] rounded-2xl px-10 py-16 text-center relative overflow-hidden">

                    {/* Subtle background pattern */}
                    <div
                        className="absolute inset-0 opacity-10"
                        style={{
                            backgroundImage: `radial-gradient(circle at 20% 50%, white 1px, transparent 1px),
                                radial-gradient(circle at 80% 50%, white 1px, transparent 1px)`,
                            backgroundSize: "40px 40px",
                        }}
                    />

                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-black text-white leading-tight mb-4">
                            Ready To Modernize Your Legal Practice?
                        </h2>
                        <p className="text-blue-200 text-sm mb-8">
                            Experience the power of AI-driven legal case management with Prolex.
                        </p>
                        <RequestDemoButton className="bg-white text-[#1a237e] hover:bg-gray-100 font-semibold px-8">
                            Book a Demo
                        </RequestDemoButton>

                    </div>

                </div>
            </ScrollReveal>
        </section>
    )
}