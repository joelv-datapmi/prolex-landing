"use client"

import { ScrollReveal } from "@/components/shared/ScrollReveal"

export default function TermsPage() {
    return (
        <main className="bg-white min-h-screen pt-20 pb-24 px-6">
            <div className="max-w-3xl mx-auto">
                <ScrollReveal>
                    <div className="mb-12">
                        <h1 className="text-[40px] md:text-[48px] font-jakarta font-bold text-gray-900 leading-tight mb-4">
                            Terms of Service
                        </h1>
                        <p className="text-gray-500 text-[16px]">
                            Last Updated: November 2025
                        </p>
                    </div>
                </ScrollReveal>

                <div className="space-y-10 text-gray-600 leading-relaxed font-sans">
                    <ScrollReveal delay={0.1}>
                        <section>
                            <p className="text-[18px] mb-6">
                                Welcome to Prolex.ai ("we," "our," or "us"). These Terms of Use ("Terms") govern your access to and use of our website, applications, and software services (collectively, the "Services").
                            </p>
                            <p className="text-[18px]">
                                By using Prolex.ai, you agree to these Terms. If you do not agree, you may not access or use the Services.
                            </p>
                        </section>
                    </ScrollReveal>

                    <ScrollReveal delay={0.15}>
                        <section>
                            <h2 className="text-2xl font-jakarta font-bold text-gray-900 mb-4">1.1 About Prolex.ai</h2>
                            <p>
                                Prolex.ai is an AI-powered, cloud-based Legal CRM and Case Management platform that enables law firms, legal professionals, and corporate legal departments to manage clients, cases, billing, and documentation securely.
                            </p>
                        </section>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2}>
                        <section>
                            <h2 className="text-2xl font-jakarta font-bold text-gray-900 mb-4">1.2 Eligibility</h2>
                            <p className="mb-4">To access the Services, you must:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Be at least 18 years old.</li>
                                <li>Have legal authority to act on behalf of your organization (if applicable).</li>
                                <li>Use the Services in compliance with all applicable laws and these Terms.</li>
                            </ul>
                        </section>
                    </ScrollReveal>

                    <ScrollReveal delay={0.25}>
                        <section>
                            <h2 className="text-2xl font-jakarta font-bold text-gray-900 mb-4">1.3 Account Registration</h2>
                            <p className="mb-4">You must register for an account to access key platform features. You agree to:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Provide accurate and updated information.</li>
                                <li>Maintain the confidentiality of your credentials.</li>
                                <li>Notify us immediately of unauthorized account use.</li>
                            </ul>
                            <p className="mt-4">You are responsible for any actions taken under your account.</p>
                        </section>
                    </ScrollReveal>

                    <ScrollReveal delay={0.3}>
                        <section>
                            <h2 className="text-2xl font-jakarta font-bold text-gray-900 mb-4">1.4 Subscription & Payment</h2>
                            <p className="mb-4">Prolex.ai operates under a subscription-based model.</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Payment terms, pricing tiers, and billing cycles are available on our Pricing page.</li>
                                <li>All payments are processed securely via third-party gateways (e.g., Razorpay, Stripe).</li>
                                <li>Fees are non-refundable except where required by law.</li>
                                <li>Non-payment may result in temporary suspension or account termination.</li>
                            </ul>
                        </section>
                    </ScrollReveal>

                    <ScrollReveal delay={0.35}>
                        <section>
                            <h2 className="text-2xl font-jakarta font-bold text-gray-900 mb-4">1.5 Use of Services</h2>
                            <p className="mb-4">You agree not to:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Use Prolex.ai for unlawful or fraudulent purposes.</li>
                                <li>Interfere with the platform's operation or security.</li>
                                <li>Reverse-engineer or modify software components.</li>
                                <li>Upload or transmit malicious code.</li>
                            </ul>
                            <p className="mt-4">We reserve the right to suspend access for violations or misuse.</p>
                        </section>
                    </ScrollReveal>

                    <ScrollReveal delay={0.4}>
                        <section>
                            <h2 className="text-2xl font-jakarta font-bold text-gray-900 mb-4">1.6 Intellectual Property</h2>
                            <p className="mb-4">
                                All content, source code, and trademarks within Prolex.ai are owned by Prolex.ai Technologies Pvt. Ltd. Users are granted a limited, non-exclusive, revocable license to use the platform solely for legitimate business purposes.
                            </p>
                            <p className="mb-2">You may not:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Copy, distribute, or reproduce our intellectual property.</li>
                                <li>Use the Prolex.ai name or brand assets without permission.</li>
                            </ul>
                        </section>
                    </ScrollReveal>

                    <ScrollReveal delay={0.45}>
                        <section>
                            <h2 className="text-2xl font-jakarta font-bold text-gray-900 mb-4">1.7 Data Confidentiality</h2>
                            <p className="mb-4">
                                All client and case data uploaded to the platform remain your property. Prolex.ai does not access, view, or disclose this data except:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mb-4">
                                <li>When required for customer support, or</li>
                                <li>When legally obligated under court order.</li>
                            </ul>
                            <p>We implement AES-256 encryption and maintain full compliance with data protection standards.</p>
                        </section>
                    </ScrollReveal>

                    <ScrollReveal delay={0.5}>
                        <section>
                            <h2 className="text-2xl font-jakarta font-bold text-gray-900 mb-4">1.8 Termination</h2>
                            <p className="mb-4">You may cancel your account anytime. We may terminate access for:</p>
                            <ul className="list-disc pl-6 space-y-2 mb-4">
                                <li>Policy violations,</li>
                                <li>Security concerns, or</li>
                                <li>Failure to make payments.</li>
                            </ul>
                            <p>After termination, data is retained for 90 days before deletion, unless legally required to preserve.</p>
                        </section>
                    </ScrollReveal>

                    <ScrollReveal delay={0.55}>
                        <section>
                            <h2 className="text-2xl font-jakarta font-bold text-gray-900 mb-4">1.9 Disclaimer</h2>
                            <p>
                                Prolex.ai provides software tools for automation and management. AI outputs are context-based and do not constitute legal advice. The platform is provided "as is," without any warranties, express or implied.
                            </p>
                        </section>
                    </ScrollReveal>

                    <ScrollReveal delay={0.6}>
                        <section>
                            <h2 className="text-2xl font-jakarta font-bold text-gray-900 mb-4">1.10 Limitation of Liability</h2>
                            <p className="mb-4">Prolex.ai is not liable for:</p>
                            <ul className="list-disc pl-6 space-y-2 mb-4">
                                <li>Data loss,</li>
                                <li>System downtime,</li>
                                <li>Indirect or consequential damages.</li>
                            </ul>
                            <p>Maximum aggregate liability shall not exceed the total fees paid by the user during the past 6 months.</p>
                        </section>
                    </ScrollReveal>

                    <ScrollReveal delay={0.65}>
                        <section>
                            <h2 className="text-2xl font-jakarta font-bold text-gray-900 mb-4">1.11 Governing Law</h2>
                            <p>
                                These Terms are governed by the laws of India, under the jurisdiction of Ernakulam, Kerala.
                            </p>
                        </section>
                    </ScrollReveal>

                    <ScrollReveal delay={0.7}>
                        <section className="bg-blue-50/50 rounded-2xl p-8 border border-blue-100">
                            <h2 className="text-2xl font-jakarta font-bold text-gray-900 mb-4">1.12 Contact</h2>
                            <p className="mb-2">For legal or policy inquiries, contact:</p>
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
