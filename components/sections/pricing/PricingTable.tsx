"use client"

import { Check, Minus } from "lucide-react"
import { ScrollReveal } from "@/components/shared/ScrollReveal"
import { cn } from "@/lib/utils"

type CellValue = string | boolean | number

const columns = ["Features", "Basic", "Premium", "Professional"]

const rows: { feature: string; values: CellValue[] }[] = [
    { feature: "AI agent support", values: [3, "Unlimited", "—"] },
    { feature: "API integration", values: ["—", true, "Unlimited"] },
    { feature: "Collaboration tools", values: ["—", "—", true] },
    { feature: "Advanced automation", values: [10, true, "—"] },
    { feature: "AI agent support", values: ["—", "—", "Unlimited"] },
    { feature: "24/7 support", values: ["—", "Unlimited", "—"] },
    { feature: "Document management", values: [true, "Unlimited", true] },
    { feature: "AI agent support", values: [10, "Unlimited", "—"] },
]

function Cell({ value }: { value: CellValue }) {
    if (value === true) {
        return <Check className="h-4 w-4 text-[#1a237e] mx-auto" />
    }
    if (value === "—") {
        return <Minus className="h-4 w-4 text-gray-300 mx-auto" />
    }
    return (
        <span className="text-sm text-gray-700 font-medium">{value}</span>
    )
}

export function PricingTable() {
    return (
        <section className="bg-white py-24 px-6">
            <div className="max-w-4xl mx-auto">
                <ScrollReveal>
                    <h2 className="text-[48px] font-jakarta text-gray-900 text-center mb-12">
                        Membership pricing
                    </h2>
                </ScrollReveal>

                <ScrollReveal delay={0.1}>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr>
                                    {columns.map((col, i) => (
                                        <th
                                            key={col}
                                            className={cn(
                                                "pb-4 text-left text-[24px] font-jakarta text-gray-900 border-b border-gray-200",
                                                i > 0 && "text-center"
                                            )}
                                        >
                                            {col}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {rows.map((row, i) => (
                                    <tr
                                        key={`${row.feature}-${i}`}
                                        className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                                    >
                                        <td className="py-4 text-[20px] font-jakarta text-gray-600">{row.feature}</td>
                                        {row.values.map((val, j) => (
                                            <td key={j} className="py-4 text-center">
                                                <Cell value={val} />
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    )
}