"use client"

import Link from "next/link"
import { m } from "framer-motion"
import { Button } from "@/components/ui/button"
import { RequestDemoButton } from "@/components/shared/RequestDemoButton"


export function FeaturesHero() {
    return (
        <section className="bg-white pt-32 pb-20 text-center px-6">
            <m.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-3xl mx-auto"
            >
                <h1 className="font-jakarta text-[60px] text-gray-900 leading-tight tracking-tight mb-6">
                    <span className="text-[#1a237e]">Features</span> Built For
                    <br />
                    Legal Excellence
                </h1>

                <p className="text-gray-500 text-[16px] leading-relaxed max-w-xl mx-auto mb-10">
                    Prolex combines structured case management, AI drafting, document control, and
                    legal workflow automation into one unified platform — designed for modern law firms.
                </p>

                <div className="flex items-center justify-center gap-3">
                    <RequestDemoButton
                        className="bg-[#1a237e] hover:bg-[#151c6b] text-white text-[16px] px-6"
                    />

                    <Button
                        variant="outline"
                        className="border-gray-300 text-gray-700 text-16px px-6"
                        asChild
                    >
                        <Link href="/pricing">See Pricing</Link>
                    </Button>
                </div>
            </m.div>
        </section>
    )
}