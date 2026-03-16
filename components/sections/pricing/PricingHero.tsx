"use client"

import Link from "next/link"
import { m } from "framer-motion"
import { Button } from "@/components/ui/button"

export function PricingHero() {
    return (
        <section className="bg-[#f7f7f8] pt-32 pb-20 text-center px-6">
            <m.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-2xl mx-auto"
            >
                <h1 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight tracking-tight mb-5">
                    Flexible <span className="text-[#1a237e]">Plans</span> for Every
                    <br />
                    Legal Practice
                </h1>
                <p className="text-sm text-gray-500 mb-10">
                    Automate support and boost customer experience effortlessly.
                </p>
                <div className="flex items-center justify-center gap-3">
                    <Button className="bg-[#1a237e] hover:bg-[#151c6b] text-white font-medium px-6" asChild>
                        <Link href="/demo">Request Demo</Link>
                    </Button>
                    <Button variant="outline" className="border-gray-300 text-gray-700 font-medium px-6" asChild>
                        <Link href="/login">Sign In</Link>
                    </Button>
                </div>
            </m.div>
        </section>
    )
}