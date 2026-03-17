"use client"

import Link from "next/link"
import { m } from "framer-motion"
import { Button } from "@/components/ui/button"
import { RequestDemoButton } from "@/components/shared/RequestDemoButton"


export function PricingHero() {
    return (
        <section className="bg-[#f7f7f8] pt-32 pb-20 text-center px-6">
            <m.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-2xl mx-auto"
            >
                <h1 className="text-[48px] font-jakarta text-gray-900 leading-tight tracking-tight mb-5">
                    Flexible <span className="text-[#1a237e]">Plans</span> for Every
                    <br />
                    Legal Practice
                </h1>
                <p className="text-[16px] text-gray-500 mb-10">
                    Automate support and boost customer experience effortlessly.
                </p>
                <div className="flex items-center justify-center gap-3">
                    <RequestDemoButton className="bg-[#1a237e] hover:bg-[#151c6b] text-white font-medium px-6" />

                    <Button variant="outline" className="border-gray-300 text-gray-700 font-medium px-6" asChild>
                        <a href="https://app.prolex.ai/login">Sign In</a>
                    </Button>

                </div>
            </m.div>
        </section>
    )
}