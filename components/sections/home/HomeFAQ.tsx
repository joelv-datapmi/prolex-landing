"use client"

import { useState } from "react"
import { m, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"
import { ScrollReveal } from "@/components/shared/ScrollReveal"
import { cn } from "@/lib/utils"

const faqs = [
    { question: "Can I switch plans later?", answer: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any differences in pricing." },
    { question: "Is my data secure?", answer: "All data is encrypted at rest and in transit. We follow industry-standard security practices and are compliant with applicable data protection regulations." },
    { question: "What happens after my trial ends?", answer: "After your 14-day free trial, you'll be prompted to choose a paid plan. Your data is retained for 30 days if you choose not to upgrade." },
    { question: "Does Prolex AI have AI features?", answer: "Yes. Prolex includes AI-powered document drafting, clause suggestions, case summarisation, and smart deadline recommendations on Premium and above." },
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
    const [open, setOpen] = useState(false)
    return (
        <div className={cn("border border-gray-200 rounded-xl overflow-hidden", open ? "bg-white" : "bg-white hover:bg-gray-50")}>
            <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-6 py-4 text-left">
                <span className="text-sm font-medium text-gray-900">{question}</span>
                {open ? <Minus className="h-4 w-4 text-gray-400 shrink-0" /> : <Plus className="h-4 w-4 text-gray-400 shrink-0" />}
            </button>
            <AnimatePresence initial={false}>
                {open && (
                    <m.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                    >
                        <p className="px-6 pb-5 text-sm text-gray-500 leading-relaxed">{answer}</p>
                    </m.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export function HomeFAQ() {
    return (
        <section className="bg-[#f7f7f8] py-24 px-6">
            <div className="max-w-2xl mx-auto">
                <ScrollReveal>
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-black text-gray-900 leading-tight">
                            Common questions
                            <br />with Clear answers
                        </h2>
                        <p className="text-sm text-gray-500 mt-4 max-w-xs mx-auto">
                            Here are answers to the most common things people ask before getting started.
                        </p>
                    </div>
                </ScrollReveal>
                <div className="flex flex-col gap-3">
                    {faqs.map((f, i) => (
                        <ScrollReveal key={f.question} delay={i * 0.07}>
                            <FAQItem {...f} />
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}