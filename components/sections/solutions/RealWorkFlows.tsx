"use client"

import { ScrollReveal } from "@/components/shared/ScrollReveal"

export function RealWorkflows() {
    return (
        <section className="bg-[#f7f7f8] py-24 px-6">
            <div className="max-w-3xl mx-auto text-center">
                <ScrollReveal>
                    <div className="inline-flex items-center bg-white border border-gray-200 rounded-full px-4 py-1.5 mb-6 shadow-sm">
                        <span className="text-xs text-gray-500 font-medium">
                            Why Prolex is different in real-world operation
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                        Built for Real
                        <br />
                        Legal Workflows
                    </h2>

                    <p className="text-sm text-gray-500 mt-5 max-w-xs mx-auto leading-relaxed">
                        Prolex adapts to how legal professionals actually work — structured,
                        deadline-driven, and compliance-sensitive.
                    </p>
                </ScrollReveal>
            </div>
        </section>
    )
}