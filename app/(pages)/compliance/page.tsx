"use client"

import { ScrollReveal } from "@/components/shared/ScrollReveal"

export default function CompliancePage() {
    return (
        <main className="bg-white min-h-screen pt-20 pb-24 px-6">
            <div className="max-w-3xl mx-auto">
                <ScrollReveal>
                    <div className="mb-12">
                        <h1 className="text-[40px] md:text-[48px] font-jakarta font-bold text-gray-900 leading-tight mb-4">
                            Compliance & Security Policy
                        </h1>
                        <p className="text-gray-500 text-[16px]">
                            Last Updated: November 2025
                        </p>
                    </div>
                </ScrollReveal>

                <div className="space-y-10 text-gray-600 leading-relaxed font-sans">
                    <ScrollReveal delay={0.1}>
                        <section>
                            <p className="text-[18px]">
                                Prolex.ai is committed to maintaining the highest standards of data protection, AI ethics, and cloud security for all customers.
                            </p>
                        </section>
                    </ScrollReveal>

                    <ScrollReveal delay={0.15}>
                        <section>
                            <h2 className="text-2xl font-jakarta font-bold text-gray-900 mb-4">3.1 Infrastructure Security</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Hosted on AWS with redundancy across regions.</li>
                                <li>Multi-zone failover and daily backups.</li>
                                <li>99.9% uptime guarantee.</li>
                                <li>Strict internal access control and MFA.</li>
                            </ul>
                        </section>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2}>
                        <section>
                            <h2 className="text-2xl font-jakarta font-bold text-gray-900 mb-4">3.2 Encryption & Data Integrity</h2>
                            <ul className="list-disc pl-6 space-y-2 mb-4">
                                <li>All sensitive data uses AES-256 encryption.</li>
                                <li>Passwords are hashed and salted using bcrypt.</li>
                                <li>Data in transit uses TLS 1.3.</li>
                                <li>We never store plaintext credentials or API keys.</li>
                            </ul>
                        </section>
                    </ScrollReveal>

                    <ScrollReveal delay={0.25}>
                        <section>
                            <h2 className="text-2xl font-jakarta font-bold text-gray-900 mb-4">3.3 Regulatory Compliance</h2>
                            <p className="mb-4">Prolex.ai complies with:</p>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4 font-medium text-gray-800">
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#1a237e]" />
                                    GDPR (EU)
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#1a237e]" />
                                    Indian DPDP Act, 2023
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#1a237e]" />
                                    SOC 2 Type II
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#1a237e]" />
                                    ISO 27001
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#1a237e]" />
                                    CCPA (US)
                                </li>
                            </ul>
                            <p>Regular audits ensure adherence to global privacy standards.</p>
                        </section>
                    </ScrollReveal>

                    <ScrollReveal delay={0.3}>
                        <section>
                            <h2 className="text-2xl font-jakarta font-bold text-gray-900 mb-4">3.4 Responsible AI</h2>
                            <p className="mb-4">Prolex GPT follows strict ethical guidelines:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>AI outputs are assistive, not advisory.</li>
                                <li>No public AI training on user data.</li>
                                <li>Firms maintain ownership of all uploaded and generated content.</li>
                                <li>Logs retained only for quality assurance.</li>
                            </ul>
                        </section>
                    </ScrollReveal>

                    <ScrollReveal delay={0.35}>
                        <section>
                            <h2 className="text-2xl font-jakarta font-bold text-gray-900 mb-4">3.5 Vulnerability Reporting</h2>
                            <p className="mb-4">
                                We maintain an open, responsible disclosure policy. If you discover a vulnerability, email <a href="mailto:legal@prolex.ai" className="text-[#1a237e] font-bold hover:underline">legal@prolex.ai</a>.
                            </p>
                            <p>We acknowledge and address reports within 72 hours.</p>
                        </section>
                    </ScrollReveal>

                    <ScrollReveal delay={0.4}>
                        <section>
                            <h2 className="text-2xl font-jakarta font-bold text-gray-900 mb-4">3.6 Disaster Recovery & Backup</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Automatic daily encrypted backups.</li>
                                <li>Periodic recovery testing.</li>
                                <li>Full restoration capability within 24 hours in case of data loss.</li>
                            </ul>
                        </section>
                    </ScrollReveal>

                    <ScrollReveal delay={0.45}>
                        <section>
                            <h2 className="text-2xl font-jakarta font-bold text-gray-900 mb-4">3.7 Employee Security</h2>
                            <p className="mb-4">All employees undergo:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Background checks.</li>
                                <li>Confidentiality agreements.</li>
                                <li>Cybersecurity awareness training.</li>
                                <li>Access to production systems is strictly limited.</li>
                            </ul>
                        </section>
                    </ScrollReveal>

                    <ScrollReveal delay={0.5}>
                        <section>
                            <h2 className="text-2xl font-jakarta font-bold text-gray-900 mb-4">3.8 Third-Party Vendors</h2>
                            <p>
                                All vendors must meet our DPA (Data Protection Agreement) requirements and comply with international security frameworks.
                            </p>
                        </section>
                    </ScrollReveal>

                    <ScrollReveal delay={0.55}>
                        <section>
                            <h2 className="text-2xl font-jakarta font-bold text-gray-900 mb-4">3.9 Incident Response</h2>
                            <p className="mb-4">If a security breach occurs:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Affected systems are isolated immediately.</li>
                                <li>Users are notified within 72 hours.</li>
                                <li>Investigation and mitigation steps are documented.</li>
                            </ul>
                        </section>
                    </ScrollReveal>

                    <ScrollReveal delay={0.6}>
                        <section className="bg-blue-50/50 rounded-2xl p-8 border border-blue-100">
                            <h2 className="text-2xl font-jakarta font-bold text-gray-900 mb-4">3.10 Contact for Compliance</h2>
                            <p className="mb-2">For compliance inquiries, contact:</p>
                            <a href="mailto:legal@prolex.ai" className="text-[#1a237e] font-bold hover:underline">
                                📧 legal@prolex.ai
                            </a>
                        </section>
                    </ScrollReveal>
                </div>
            </div>
        </main>
    )
}
