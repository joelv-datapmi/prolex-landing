"use client"

import { useState } from "react"
import { m, AnimatePresence } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ScrollReveal } from "@/components/shared/ScrollReveal"
import Link from "next/link"

const plans = {
    monthly: [
        {
            name: "Basic",
            price: "Free",
            period: "/month",
            tagline: "Perfect for solo practitioners.",
            features: [
                "Up to 10 active cases",
                "Basic client profiles",
                "5 AI document drafts/month",
                "1GB cloud storage",
                "Email support",
            ],
            cta: "Sign In",
            href: "/login",
            popular: false,
            custom: false,
        },
        {
            name: "Premium",
            price: "₹899",
            period: "/month",
            tagline: "Designed for small teams.",
            features: [
                "3 Users",
                "20 Active Cases",
                "14-Day Free Trial",
                "All Basic Features",
                "Team Collaboration Tools",
            ],
            cta: "Sign In",
            href: "/login",
            popular: false,
            custom: false,
        },
        {
            name: "Professional",
            price: "₹1499",
            period: "/month",
            tagline: "For growing law firms.",
            features: [
                "Unlimited active cases",
                "Full profiles & communication logs",
                "Unlimited AI drafting & summaries",
                "Full template library",
                "Priority email & chat support",
            ],
            cta: "Sign In",
            href: "/login",
            popular: true,
            custom: false,
        },
        {
            name: "Enterprise",
            price: "Custom",
            period: "/month",
            tagline: "Great for enterprises to convert more.",
            features: [
                "All Growth features",
                "Unlimited tracked users",
                "Dedicated account manager",
                "SLA & compliance support",
                "Advanced integrations",
            ],
            cta: "Sign In",
            href: "/login",
            popular: false,
            custom: true,
        },
    ],
    yearly: [
        {
            name: "Basic",
            price: "Free",
            period: "/year",
            tagline: "Perfect for solo practitioners.",
            features: [
                "Up to 10 active cases",
                "Basic client profiles",
                "5 AI document drafts/month",
                "1GB cloud storage",
                "Email support",
            ],
            cta: "Sign In",
            href: "/login",
            popular: false,
            custom: false,
        },
        {
            name: "Premium",
            price: "₹7,190",
            period: "/year",
            tagline: "Designed for small teams.",
            features: [
                "3 Users",
                "20 Active Cases",
                "14-Day Free Trial",
                "All Basic Features",
                "Team Collaboration Tools",
            ],
            cta: "Sign In",
            href: "/login",
            popular: false,
            custom: false,
        },
        {
            name: "Professional",
            price: "₹11,990",
            period: "/year",
            tagline: "For growing law firms.",
            features: [
                "Unlimited active cases",
                "Full profiles & communication logs",
                "Unlimited AI drafting & summaries",
                "Full template library",
                "Priority email & chat support",
            ],
            cta: "Sign In",
            href: "/login",
            popular: true,
            custom: false,
        },
        {
            name: "Enterprise",
            price: "Custom",
            period: "/year",
            tagline: "Great for enterprises to convert more.",
            features: [
                "All Growth features",
                "Unlimited tracked users",
                "Dedicated account manager",
                "SLA & compliance support",
                "Advanced integrations",
            ],
            cta: "Sign In",
            href: "/login",
            popular: false,
            custom: true,
        },
    ],
}

export function PricingCards() {
    const [billing, setBilling] = useState<"monthly" | "yearly">("monthly")
    const currentPlans = plans[billing]

    return (
        <section className="bg-[#f7f7f8] pb-24 px-6">
            <div className="max-w-5xl mx-auto">

                {/* Section header */}
                <ScrollReveal>
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center bg-white border border-gray-200 rounded-full px-4 py-1.5 mb-5 shadow-sm">
                            <span className="text-[14px] text-gray-500 font-medium">Our Pricing</span>
                        </div>
                        <h2 className="text-[48px] font-jakarta text-gray-900 leading-tight">
                            Simple,
                            <br />
                            Transparent Pricing
                        </h2>
                        <p className="text-[16px] text-gray-500 mt-3 max-w-xs mx-auto">
                            Choose the plan that fits your practice. Start free, scale as you grow.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Monthly / Yearly toggle */}
                <ScrollReveal delay={0.1}>
                    <div className="flex items-center justify-center gap-4 mb-3">
                        <span className={cn("text-[18px] font-jakarta", billing === "monthly" ? "text-gray-900" : "text-gray-400")}>
                            Monthly
                        </span>

                        {/* Toggle switch */}
                        <button
                            onClick={() => setBilling(b => b === "monthly" ? "yearly" : "monthly")}
                            className={cn(
                                "relative w-[80px] h-[40px] rounded-full transition-colors duration-300",
                                billing === "yearly" ? "bg-[#1a237e]" : "bg-gray-300"
                            )}
                        >
                            <m.span
                                layout
                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                className={cn(
                                    "absolute top-[6px] w-[28px] h-[28px] rounded-full bg-white shadow",
                                    billing === "yearly" ? "left-[46px]" : "left-[6px]"
                                )}
                            />
                        </button>

                        <span className={cn("text-[18px] font-jakarta", billing === "yearly" ? "text-gray-900" : "text-gray-400")}>
                            Yearly
                        </span>
                    </div>

                    {billing === "yearly" && (
                        <m.p
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center text-xs text-green-600 font-medium mb-6"
                        >
                            Save ~33% with yearly billing
                        </m.p>
                    )}
                    {billing === "monthly" && <div className="mb-6" />}
                </ScrollReveal>

                {/* Plan cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
                    {currentPlans.map((plan, i) => (
                        <ScrollReveal key={plan.name} delay={i * 0.08}>
                            <div
                                className={cn(
                                    "relative rounded-2xl border p-6 flex flex-col",
                                    plan.popular
                                        ? "bg-[#1a237e] text-white border-[#1a237e] shadow-xl scale-105 z-10 pb-8 pt-10"
                                        : "bg-white border-gray-100 shadow-sm"
                                )}
                            >
                                {/* Most Popular badge */}
                                {plan.popular && (
                                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                                        <span className="bg-white text-[#1a237e] text-[14px] font-bold px-3 py-1 rounded-full shadow">
                                            Most Popular
                                        </span>
                                    </div>
                                )}

                                <p className={cn("text-[20px] font-jakarta mb-1", plan.popular ? "text-blue-200" : "text-gray-400")}>
                                    {plan.name}
                                </p>

                                <div className="flex items-end gap-1 mb-1">
                                    <AnimatePresence mode="wait">
                                        <m.span
                                            key={plan.price}
                                            initial={{ opacity: 0, y: 6 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -6 }}
                                            transition={{ duration: 0.25 }}
                                            className={cn(
                                                "font-jakarta text-[48px]",
                                                plan.custom ? "text-[48px]" : "text-[48px]",
                                                plan.popular ? "text-white" : "text-gray-900"
                                            )}
                                        >
                                            {plan.price}
                                        </m.span>
                                    </AnimatePresence>
                                    <span className={cn("text-xs mb-1", plan.popular ? "text-blue-200" : "text-gray-400")}>
                                        {plan.period}
                                    </span>
                                </div>

                                <p className={cn("text-[16px] mb-5 leading-snug", plan.popular ? "text-blue-100" : "text-gray-500")}>
                                    {plan.tagline}
                                </p>

                                <p className={cn("text-[14px] font-semibold mb-3 uppercase tracking-wide", plan.popular ? "text-blue-200" : "text-gray-400")}>
                                    What's included
                                </p>

                                <ul className="flex flex-col gap-2 mb-8 flex-1">
                                    {plan.features.map((f) => (
                                        <li key={f} className="flex items-start gap-2">
                                            <Check className={cn("h-3.5 w-3.5 mt-0.5 shrink-0", plan.popular ? "text-blue-200" : "text-[#1a237e]")} />
                                            <span className={cn("text-[16px] leading-snug", plan.popular ? "text-blue-100" : "text-gray-600")}>
                                                {f}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                <Button
                                    className={cn(
                                        "w-full text-sm font-medium rounded-lg",
                                        plan.popular
                                            ? "bg-white text-[#1a237e] hover:bg-gray-100"
                                            : "bg-[#1a237e] hover:bg-[#151c6b] text-white"
                                    )}
                                    asChild
                                >
                                    <Link href={plan.href}>{plan.cta}</Link>
                                </Button>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}