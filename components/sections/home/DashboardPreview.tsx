"use client"

import { ScrollReveal } from "@/components/shared/ScrollReveal"

export function DashboardPreview() {
    return (
        <section className="bg-white py-16 px-6">
            <div className="max-w-5xl mx-auto">
                <ScrollReveal>
                    {/* Dashboard mockup placeholder */}
                    <div className="w-full h-80 md:h-[420px] rounded-2xl bg-gray-50 border border-gray-200 shadow-lg flex items-center justify-center overflow-hidden relative">

                        {/* Top bar mock */}
                        <div className="absolute top-0 left-0 right-0 h-10 bg-white border-b border-gray-100 flex items-center px-4 gap-2">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                            <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                            <div className="flex-1 mx-4 h-5 bg-gray-100 rounded-md" />
                        </div>

                        <span className="text-sm text-gray-300 mt-8">
                            Dashboard Screenshot — replace with &lt;Image&gt;
                        </span>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    )
}