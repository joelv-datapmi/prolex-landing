"use client"

import { ScrollReveal } from "@/components/shared/ScrollReveal"
import soloPractitioner from "@/public/home/solo-practitioner.avif"
import lawFirms from "@/public/home/law-firms.avif"
import enterpriseFirms from "@/public/home/enterprise-firms.avif"
import Image from "next/image"

const audiences = [
    {
        title: "Solo Practitioner",
        description: "Simplify your entire practice in one tool. Manage cases, clients and billing without the complexity.",
        image: soloPractitioner
    },
    {
        title: "Law Firms",
        description: "Manage internal compliance and documentation effortlessly with enterprise-grade tools.",
        image: lawFirms
    },
    {
        title: "Enterprise Firms",
        description: "Scale operations with role-based dashboards and AI insights for large organisations.",
        image: enterpriseFirms
    },
]

export function BuiltForModernHome() {
    return (
        <section className="bg-white py-24 px-6">
            <div className="max-w-5xl mx-auto">

                <ScrollReveal>
                    <div className="text-center mb-14">
                        <div className="inline-flex items-center bg-gray-100 border border-gray-200 rounded-full px-4 py-1.5 mb-5">
                            <span className="text-xs text-gray-500 font-medium">Who all?</span>
                        </div>
                        <h2 className="text-[48px] font-jakarta text-gray-900 leading-tight">
                            Built for modern
                            <br />legal practice
                        </h2>
                        <p className="text-[16px] text-gray-500 mt-4 max-w-xs mx-auto leading-relaxed">
                            Whether you're a solo practitioner or a large enterprise firm, Prolex.ai
                            adapts to your practice and workflow.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {audiences.map((item, i) => (
                        <ScrollReveal key={item.title} delay={i * 0.1}>
                            <div className="rounded-2xl border border-gray-100 bg-[#f7f7f8] overflow-hidden">
                                <Image src={item.image} alt={item.title} width={500} height={500} />
                                <div className="p-5">
                                    <h3 className="font-jakarta text-[24px] text-gray-900 mb-1">{item.title}</h3>
                                    <p className="text-[16px] text-gray-500 leading-relaxed">{item.description}</p>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}