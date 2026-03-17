"use client"

import { ScrollReveal } from "@/components/shared/ScrollReveal"

export default function PrivacyPage() {
    return (
        <main className="bg-white min-h-screen pt-20 pb-24 px-6">
            <div className="max-w-3xl mx-auto">
                <ScrollReveal>
                    <div className="mb-12">
                        <h1 className="text-[40px] md:text-[48px] font-jakarta font-bold text-gray-900 leading-tight mb-4">
                            Privacy Policy
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
                                At Prolex.ai, we respect your privacy. This Privacy Policy describes how we collect, use, and protect your information while using our Services.
                            </p>
                        </section>
                    </ScrollReveal>

                    <ScrollReveal delay={0.15}>
                        <section>
                            <h2 className="text-2xl font-jakarta font-bold text-gray-900 mb-4">2.1 Information We Collect</h2>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-gray-900 font-bold mb-2">A. You Provide:</h3>
                                    <ul className="list-disc pl-6 space-y-1">
                                        <li>Name, email, contact details, firm name.</li>
                                        <li>Client and case data uploaded to the CRM.</li>
                                        <li>Billing details (processed securely through third-party providers).</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-gray-900 font-bold mb-2">B. Automatically Collected:</h3>
                                    <ul className="list-disc pl-6 space-y-1">
                                        <li>Browser and device metadata.</li>
                                        <li>Session analytics, error logs, and performance data.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-gray-900 font-bold mb-2">C. AI Interactions:</h3>
                                    <p>Text entered in AI tools (e.g., Prolex GPT) is encrypted and stored temporarily for session accuracy. No AI data is used to train public models.</p>
                                </div>
                            </div>
                        </section>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2}>
                        <section>
                            <h2 className="text-2xl font-jakarta font-bold text-gray-900 mb-4">2.2 How We Use Data</h2>
                            <p className="mb-4">We use your data to:</p>
                            <ul className="list-disc pl-6 space-y-2 mb-4">
                                <li>Operate and improve our Services.</li>
                                <li>Communicate updates and product notices.</li>
                                <li>Process payments and subscriptions.</li>
                                <li>Provide AI-assisted legal automation features.</li>
                                <li>Ensure data security and detect misuse.</li>
                            </ul>
                            <p className="font-medium text-gray-900">We never sell or share user data with third parties for marketing purposes.</p>
                        </section>
                    </ScrollReveal>

                    <ScrollReveal delay={0.25}>
                        <section>
                            <h2 className="text-2xl font-jakarta font-bold text-gray-900 mb-4">2.3 Data Security</h2>
                            <p className="mb-4">We implement:</p>
                            <ul className="list-disc pl-6 space-y-2 mb-4">
                                <li>AES-256 encryption (at rest).</li>
                                <li>TLS 1.3 (in transit).</li>
                                <li>Role-based user authentication.</li>
                                <li>Regular vulnerability audits and third-party penetration testing.</li>
                            </ul>
                            <p>Data is hosted on AWS Cloud, compliant with ISO 27001 and SOC 2 standards.</p>
                        </section>
                    </ScrollReveal>

                    <ScrollReveal delay={0.3}>
                        <section>
                            <h2 className="text-2xl font-jakarta font-bold text-gray-900 mb-4">2.4 Retention & Deletion</h2>
                            <p>
                                Data is retained only as long as necessary for operations or compliance. Upon account closure, your data is permanently deleted after 90 days, unless legally required to retain longer.
                            </p>
                        </section>
                    </ScrollReveal>

                    <ScrollReveal delay={0.35}>
                        <section>
                            <h2 className="text-2xl font-jakarta font-bold text-gray-900 mb-4">2.5 User Rights</h2>
                            <p className="mb-4">You may:</p>
                            <ul className="list-disc pl-6 space-y-2 mb-4">
                                <li>Request a copy of your data.</li>
                                <li>Request correction or deletion.</li>
                                <li>Revoke AI interaction data usage.</li>
                                <li>Export all data in a readable format.</li>
                            </ul>
                            <p>Requests can be sent to <a href="mailto:legal@prolex.ai" className="text-[#1a237e] font-bold hover:underline">legal@prolex.ai</a></p>
                        </section>
                    </ScrollReveal>

                    <ScrollReveal delay={0.4}>
                        <section>
                            <h2 className="text-2xl font-jakarta font-bold text-gray-900 mb-4">2.6 Cookies</h2>
                            <p className="mb-4">Prolex.ai uses minimal functional cookies:</p>
                            <ul className="list-disc pl-6 space-y-2 mb-4">
                                <li>Authentication cookies (session-based).</li>
                                <li>Performance cookies (anonymous analytics).</li>
                            </ul>
                            <p>You can disable cookies in browser settings, but some features may not work as intended.</p>
                        </section>
                    </ScrollReveal>

                    <ScrollReveal delay={0.45}>
                        <section>
                            <h2 className="text-2xl font-jakarta font-bold text-gray-900 mb-4">2.7 AI Transparency</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>AI outputs are context-limited and not used for external learning.</li>
                                <li>Each firm's AI environment is private and isolated.</li>
                                <li>Inputs are not shared between clients or stored beyond session duration.</li>
                            </ul>
                        </section>
                    </ScrollReveal>

                    <ScrollReveal delay={0.5}>
                        <section>
                            <h2 className="text-2xl font-jakarta font-bold text-gray-900 mb-4">2.8 Legal Compliance</h2>
                            <p className="mb-4">We comply with:</p>
                            <ul className="list-disc pl-6 space-y-2 font-medium text-gray-800">
                                <li>Indian DPDP Act, 2023</li>
                                <li>GDPR (EU)</li>
                                <li>CCPA (California)</li>
                                <li>Information Technology Act, 2000</li>
                            </ul>
                        </section>
                    </ScrollReveal>

                    <ScrollReveal delay={0.55}>
                        <section>
                            <h2 className="text-2xl font-jakarta font-bold text-gray-900 mb-4">2.9 Policy Updates</h2>
                            <p>
                                This Privacy Policy may be updated from time to time. Updates are effective upon publication on this website.
                            </p>
                        </section>
                    </ScrollReveal>

                    <ScrollReveal delay={0.6}>
                        <section className="bg-blue-50/50 rounded-2xl p-8 border border-blue-100">
                            <h2 className="text-2xl font-jakarta font-bold text-gray-900 mb-4">2.10 Contact</h2>
                            <p className="mb-2">For privacy concerns, contact:</p>
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
