"use client"

import { QueryProvider } from "./QueryProvider"
import { MotionProvider } from "./MotionProvider"
import { ThemeProvider } from "./ThemeProvider"

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider>
            <QueryProvider>
                <MotionProvider>
                    {children}
                </MotionProvider>
            </QueryProvider>
        </ThemeProvider>
    )
}