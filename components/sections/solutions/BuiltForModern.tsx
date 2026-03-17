"use client"

import { ScrollReveal } from "@/components/shared/ScrollReveal"

import soloPraction from "@/public/solutions/solo-pract.webp";
import lawFirms from "@/public/solutions/law-firm.avif";
import enterpriseFirms from "@/public/solutions/enter-prise.avif";
import Image from "next/image";

const audiences = [
    {
        title: "Solo Practitioner",
        description:
            "Simply your entire practice in one tool. Manage cases, clients and billing without the complexity.",
        image: soloPraction
    },
    {
        title: "Law Firms",
        description:
            "Manage internal compliance and documentation effortlessly with enterprise-grade tools.",
        image: lawFirms
    },
    {
        title: "Enter Prise Firms",
        description:
            "Scale operations with role-based dashboards and AI insights for large organisations.",
        image: enterpriseFirms
    },
]

export function BuiltForModern() {
    return (
        <section className="bg-white py-24 px-6">
            <div className="max-w-5xl mx-auto">

                {/* Header */}
                <div className="text-center mb-16">
                    <ScrollReveal>
                        <div className="inline-flex items-center bg-gray-100 border border-gray-200 rounded-full px-4 py-1.5 mb-6">
                            <span className="text-xs text-gray-500 font-medium">Why AI?</span>
                        </div>
                        <h2 className="text-4xl font-black text-gray-900 leading-tight">
                            Built for modern
                            <br />
                            legal practice
                        </h2>
                        <p className="text-sm text-gray-500 mt-4 max-w-xs mx-auto leading-relaxed">
                            Whether you're a solo practitioner or a large enterprise firm, Prolex.ai
                            adapts to your practice and workflow.
                        </p>
                    </ScrollReveal>
                </div>

                {/* 3-col cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {audiences.map((item, i) => (
                        <ScrollReveal key={item.title} delay={i * 0.1}>
                            <div className="rounded-2xl border border-gray-100 bg-[#f7f7f8] overflow-hidden flex flex-col">
                                <div className="p-6 text-center flex-1">
                                    <h3 className="font-bold text-gray-900 text-[24px] mb-2 leading-tight">{item.title}</h3>
                                    <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
                                </div>

                                <div className="flex justify-center px-4 pb-4">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        width={354}
                                        height={228}
                                        className="object-cover w-[354px] h-[228px] rounded-xl shadow-sm"
                                        quality={100}
                                    />
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

            </div>
        </section>
    )
}