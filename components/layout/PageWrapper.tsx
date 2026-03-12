"use client"

import { m, AnimatePresence, Variants } from "framer-motion"
import { usePathname } from "next/navigation"

const variants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
    exit: { opacity: 0, y: -16, transition: { duration: 0.3 } },
}

export function PageWrapper({ children }: { children: React.ReactNode }) {

    const pathname = usePathname()
    return (
        <AnimatePresence mode="wait">
            <m.main key={pathname} variants={variants} initial="hidden" animate="visible" exit="exit">
                {children}
            </m.main>
        </AnimatePresence>
    )
}