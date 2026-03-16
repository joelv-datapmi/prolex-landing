"use client"

import Link from "next/link"
import { m } from "framer-motion"
import { Button } from "@/components/ui/button"

export function SolutionsHero() {
    return (
        <section className="bg-white pt-32 pb-20 text-center px-6">
            <m.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-3xl mx-auto"
            >
                <h1 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight tracking-tight mb-6">
                    CRM <span className="text-[#1a237e]">Solutions</span> Built
                    <br />
                    For Legal Excellence
                </h1>

                <p className="text-gray-500 text-sm leading-relaxed max-w-sm mx-auto mb-10">
                    Designed for modern legal professionals who need structure, intelligence, and compliance.
                </p>

                <div className="flex items-center justify-center gap-3">
                    <Button
                        className="bg-[#1a237e] hover:bg-[#151c6b] text-white font-medium px-6"
                        asChild
                    >
                        <Link href="/demo">Request Demo</Link>
                    </Button>
                    <Button
                        variant="outline"
                        className="border-gray-300 text-gray-700 font-medium px-6"
                        asChild
                    >
                        <Link href="/pricing">See Pricing</Link>
                    </Button>
                </div>
            </m.div>
        </section>
    )
}