"use client"

import { useState } from "react"
import { m, AnimatePresence } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ScrollReveal } from "@/components/shared/ScrollReveal"
import Link from "next/link"

const plans = [
    {
        name: "Basic",
        monthly: "Free", yearly: "Free",
        tagline: "Perfect for solo practitioners.",
        features: ["Up to 10 active cases", "Basic client profiles", "5 AI drafts/month", "1GB storage", "Email support"],
        popular: false, custom: false,
    },
    {
        name: "Premium",
        monthly: "₹899", yearly: "₹7,190",
        tagline: "Designed for small teams.",
        features: ["3 Users", "20 Active Cases", "14-Day Free Trial", "All Basic Features", "Team Collaboration"],
        popular: false, custom: false,
    },
    {
        name: "Professional",
        monthly: "₹1499", yearly: "₹11,990",
        tagline: "For growing law firms.",
        features: ["Unlimited active cases", "Full profiles & logs", "Unlimited AI drafting", "Full template library", "Priority support"],
        popular: true, custom: false,
    },
    {
        name: "Enterprise",
        monthly: "Custom", yearly: "Custom",
        tagline: "For large organisations.",
        features: ["All Growth features", "Unlimited users", "Dedicated manager", "SLA & compliance", "Advanced integrations"],
        popular: false, custom: true,
    },
]

export function HomePricing() {
    const [billing, setBilling] = useState<"monthly" | "yearly">("monthly")

    return (
        <section className="bg-[#f7f7f8] py-24 px-6">
            <div className="max-w-5xl mx-auto">

                <ScrollReveal>
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center bg-white border border-gray-200 rounded-full px-4 py-1.5 mb-5 shadow-sm">
                            <span className="text-xs text-gray-500 font-medium">Start Today</span>
                        </div>
                        <h2 className="text-4xl font-black text-gray-900 leading-tight">
                            Simple,
                            <br />Transparent Pricing
                        </h2>
                    </div>
                </ScrollReveal>

                {/* Toggle */}
                <ScrollReveal delay={0.1}>
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <span className={cn("text-sm font-medium", billing === "monthly" ? "text-gray-900" : "text-gray-400")}>Monthly</span>
                        <button
                            onClick={() => setBilling(b => b === "monthly" ? "yearly" : "monthly")}
                            className={cn("relative w-12 h-6 rounded-full transition-colors duration-300", billing === "yearly" ? "bg-[#1a237e]" : "bg-gray-300")}
                        >
                            <m.span
                                layout
                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                className={cn("absolute top-1 w-4 h-4 rounded-full bg-white shadow", billing === "yearly" ? "left-7" : "left-1")}
                            />
                        </button>
                        <span className={cn("text-sm font-medium", billing === "yearly" ? "text-gray-900" : "text-gray-400")}>Yearly</span>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
                    {plans.map((plan, i) => (
                        <ScrollReveal key={plan.name} delay={i * 0.08}>
                            <div className={cn(
                                "relative rounded-2xl border p-6 flex flex-col",
                                plan.popular
                                    ? "bg-[#1a237e] text-white border-[#1a237e] shadow-xl scale-105 z-10 pb-8 pt-10"
                                    : "bg-white border-gray-100 shadow-sm"
                            )}>
                                {plan.popular && (
                                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                                        <span className="bg-white text-[#1a237e] text-[10px] font-bold px-3 py-1 rounded-full shadow">Most Popular</span>
                                    </div>
                                )}
                                <p className={cn("text-xs font-semibold mb-1", plan.popular ? "text-blue-200" : "text-gray-400")}>{plan.name}</p>
                                <div className="flex items-end gap-1 mb-1">
                                    <AnimatePresence mode="wait">
                                        <m.span
                                            key={billing === "monthly" ? plan.monthly : plan.yearly}
                                            initial={{ opacity: 0, y: 6 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -6 }}
                                            transition={{ duration: 0.2 }}
                                            className={cn("font-black leading-none", plan.custom ? "text-3xl" : "text-4xl", plan.popular ? "text-white" : "text-gray-900")}
                                        >
                                            {billing === "monthly" ? plan.monthly : plan.yearly}
                                        </m.span>
                                    </AnimatePresence>
                                    <span className={cn("text-xs mb-1", plan.popular ? "text-blue-200" : "text-gray-400")}>/mo</span>
                                </div>
                                <p className={cn("text-xs mb-5 leading-snug", plan.popular ? "text-blue-100" : "text-gray-500")}>{plan.tagline}</p>
                                <ul className="flex flex-col gap-2 mb-8 flex-1">
                                    {plan.features.map((f) => (
                                        <li key={f} className="flex items-start gap-2">
                                            <Check className={cn("h-3.5 w-3.5 mt-0.5 shrink-0", plan.popular ? "text-blue-200" : "text-[#1a237e]")} />
                                            <span className={cn("text-xs leading-snug", plan.popular ? "text-blue-100" : "text-gray-600")}>{f}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Button
                                    className={cn("w-full text-sm font-medium rounded-lg", plan.popular ? "bg-white text-[#1a237e] hover:bg-gray-100" : "bg-[#1a237e] hover:bg-[#151c6b] text-white")}
                                    asChild
                                >
                                    <Link href="/login">Sign In</Link>
                                </Button>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                <ScrollReveal delay={0.3}>
                    <div className="text-center mt-8">
                        <Link href="/pricing" className="text-sm text-[#1a237e] font-medium hover:underline">
                            View full pricing details →
                        </Link>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    )
}