"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { m } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

const navLinks = [
    { label: "Prolex Features", href: "/features" },
    { label: "Solutions", href: "/solutions" },
    { label: "Pricing", href: "/pricing" },
    { label: "About", href: "/about" },
]

export function Navbar() {
    const pathname = usePathname()
    const [scrolled, setScrolled] = useState(false)
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener("scroll", handleScroll, { passive: true })
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <m.header
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50",
                "h-16 transition-all duration-300",
                scrolled
                    ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100"
                    : "bg-white border-b border-gray-100"
            )}
        >
            <div className="max-w-7xl mx-auto h-full px-6 grid grid-cols-3 items-center">

                {/* LEFT — Logo */}
                <div className="flex items-center">
                    <Link href="/" className="flex items-center gap-2">
                        {/* Replace with your actual SVG icon */}
                        <svg
                            className="h-6 w-6 text-[#1a237e]"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path d="M12 2L2 7l10 5 10-5-10-5z" />
                            <path d="M2 17l10 5 10-5" />
                            <path d="M2 12l10 5 10-5" />
                        </svg>
                        <span className="font-bold text-[#1a237e] text-base tracking-wide uppercase">
                            Prolex.AI
                        </span>
                    </Link>
                </div>

                {/* CENTER — Nav links */}
                <nav className="hidden md:flex items-center justify-center gap-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "relative px-4 py-2 text-sm transition-colors rounded-md",
                                pathname === link.href
                                    ? "text-[#1a237e] font-medium"
                                    : "text-gray-500 hover:text-gray-900"
                            )}
                        >
                            {link.label}
                            {/* Animated pill for active link */}
                            {pathname === link.href && (
                                <m.span
                                    layoutId="nav-indicator"
                                    className="absolute inset-0 rounded-md bg-blue-50 z-[-1]"
                                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                />
                            )}
                        </Link>
                    ))}
                </nav>

                {/* RIGHT — Sign In + CTA */}
                <div className="hidden md:flex items-center justify-end gap-3">
                    <Button
                        variant="ghost"
                        size="sm"
                        className="text-gray-600 hover:text-gray-900 font-normal"
                        asChild
                    >
                        <Link href="/login">Sign In</Link>
                    </Button>

                    <Button
                        size="sm"
                        className="bg-[#1a237e] hover:bg-[#151c6b] text-white font-medium px-5 rounded-md"
                        asChild
                    >
                        <Link href="/demo">Request Demo</Link>
                    </Button>
                </div>

                {/* MOBILE — Hamburger */}
                <div className="md:hidden flex justify-end col-span-2">
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu className="h-5 w-5" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-72">
                            <div className="flex items-center gap-2 mb-8 mt-2">
                                <svg
                                    className="h-5 w-5 text-[#1a237e]"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                    <path d="M2 17l10 5 10-5" />
                                    <path d="M2 12l10 5 10-5" />
                                </svg>
                                <span className="font-bold text-[#1a237e] uppercase tracking-wide">
                                    Prolex.AI
                                </span>
                            </div>

                            <nav className="flex flex-col gap-1">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setOpen(false)}
                                        className={cn(
                                            "px-4 py-3 rounded-md text-sm transition-colors",
                                            pathname === link.href
                                                ? "bg-blue-50 text-[#1a237e] font-medium"
                                                : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                                        )}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </nav>

                            <div className="border-t mt-4 pt-4 flex flex-col gap-2">
                                <Button variant="ghost" asChild>
                                    <Link href="/login" onClick={() => setOpen(false)}>
                                        Sign In
                                    </Link>
                                </Button>
                                <Button
                                    className="bg-[#1a237e] hover:bg-[#151c6b] text-white"
                                    asChild
                                >
                                    <Link href="/demo" onClick={() => setOpen(false)}>
                                        Request Demo
                                    </Link>
                                </Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>

            </div>
        </m.header>
    )
}