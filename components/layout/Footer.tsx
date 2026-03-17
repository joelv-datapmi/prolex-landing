import Link from "next/link"
import { RequestDemoButton } from "@/components/shared/RequestDemoButton"


const footerLinks = {
    Pages: [
        { label: "Features", href: "/features" },
        { label: "Solutions", href: "/solutions" },
        { label: "Pricing", href: "/pricing" },
        { label: "About", href: "/about" },
        { label: "Contacts", href: "/contact" },
    ],
    Socials: [
        { label: "Instagram", href: "https://instagram.com" },
        { label: "Youtube", href: "https://youtube.com" },
        { label: "Linkedin", href: "https://linkedin.com" },
    ],
    Legal: [
        { label: "Terms of Service", href: "/terms" },
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Compliance Policy", href: "/compliance" },
        { label: "Contacts", href: "/contact" },
    ],
}

export function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-6 py-16">

                {/* Main grid — logo/tagline left, link columns right */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* LEFT — Brand */}
                    <div className="flex flex-col items-start gap-4">
                        <Link href="/">
                            <span className="font-black text-[#1a237e] text-3xl tracking-tight uppercase">
                                PROLEX.AI
                            </span>
                        </Link>

                        <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                            AI-powered legal case management for modern law firms.
                        </p>

                        <RequestDemoButton
                            className="mt-2 inline-flex items-center justify-center px-6 py-2.5 rounded-md
                         bg-[#1a237e] hover:bg-[#151c6b] text-white text-sm font-medium
                         transition-colors duration-200"
                        >
                            Request a Demo
                        </RequestDemoButton>

                    </div>

                    {/* RIGHT — Link columns */}
                    <div className="grid grid-cols-3 gap-8">
                        {Object.entries(footerLinks).map(([group, links]) => (
                            <div key={group}>
                                <h4 className="text-gray-900 font-semibold text-sm mb-4">
                                    {group}
                                </h4>
                                <ul className="space-y-3">
                                    {links.map((link) => (
                                        <li key={link.label}>
                                            <Link
                                                href={link.href}
                                                className="text-gray-500 hover:text-gray-900 text-sm transition-colors duration-150"
                                                {...(link.href.startsWith("http")
                                                    ? { target: "_blank", rel: "noopener noreferrer" }
                                                    : {})}
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                </div>

                {/* Bottom divider — no copyright text, matches the clean line in screenshot */}
                <div className="border-t border-gray-200 mt-12" />

            </div>
        </footer>
    )
}