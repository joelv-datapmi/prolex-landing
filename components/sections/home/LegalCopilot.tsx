"use client"

import { ScrollReveal } from "@/components/shared/ScrollReveal"

const copilotFeatures = [
    { title: "AI Legal Draft Assistant", description: "Generates drafts with full case context — parties, timeline, and jurisdiction aware." },
    { title: "Document & Clause Summarisation", description: "Instantly summarises long contracts and flags risky clauses." },
    { title: "Drafting Risk Alerts", description: "Surfaces potential legal risks while drafting in real time." },
    { title: "Client Communication Assistant", description: "Drafts professional client emails with tone and context control." },
    { title: "Multi-Format Export", description: "Export to PDF, DOCX, or share via secure link with one click." },
    { title: "Proceeding Builder", description: "Structures court proceedings with AI-suggested templates and checklists." },
]

export function LegalCopilot() {
    return (
        <section className="bg-[#f7f7f8] py-24 px-6">
            <div className="max-w-5xl mx-auto">

                <ScrollReveal>
                    <div className="text-center mb-14">
                        <div className="inline-flex items-center bg-white border border-gray-200 rounded-full px-4 py-1.5 mb-5 shadow-sm">
                            <span className="text-xs text-gray-500 font-medium">Attorney Tool Builder</span>
                        </div>
                        <h2 className="text-4xl font-black text-gray-900 leading-tight">
                            Your Legal Copilot
                        </h2>
                        <p className="text-sm text-gray-500 mt-4 max-w-sm mx-auto leading-relaxed">
                            Prolex AI is built alongside attorneys to support — never replace — legal judgment.
                            It understands context, respects access controls, and always keeps the lawyer in control.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {copilotFeatures.map((f, i) => (
                        <ScrollReveal key={f.title} delay={i * 0.07}>
                            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                                    <div className="w-3 h-3 rounded-sm bg-[#1a237e]" />
                                </div>
                                <h3 className="font-bold text-gray-900 text-sm mb-2">{f.title}</h3>
                                <p className="text-xs text-gray-500 leading-relaxed">{f.description}</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}