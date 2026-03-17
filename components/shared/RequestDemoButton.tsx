"use client"

import { useState } from "react"
import { Button, type ButtonProps } from "@/components/ui/button"
import { RequestDemoDialog } from "./RequestDemoDialog"

export function RequestDemoButton({ children = "Request Demo", ...props }: ButtonProps) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <Button {...props} onClick={(e) => {
                setIsOpen(true)
                props.onClick?.(e)
            }}>
                {children}
            </Button>
            <RequestDemoDialog open={isOpen} onOpenChange={setIsOpen} />
        </>
    )
}
