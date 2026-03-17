"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Field, FieldLabel } from "@/components/ui/field"
import { CheckCircle2 } from "lucide-react"
import { m, AnimatePresence } from "framer-motion"

interface RequestDemoDialogProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    children?: React.ReactNode
}

export function RequestDemoDialog({ open, onOpenChange }: RequestDemoDialogProps) {
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsLoading(true)
        
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500))
        
        setIsLoading(false)
        setIsSubmitted(true)
        
        // Auto close after 3 seconds
        setTimeout(() => {
            onOpenChange(false)
            // Reset state after closing animation
            setTimeout(() => setIsSubmitted(false), 300)
        }, 3000)
    }

    return (
        <Dialog open={open} onOpenChange={(val) => {
            onOpenChange(val)
            if (!val) {
                // Reset state when closing manually
                setTimeout(() => setIsSubmitted(false), 300)
            }
        }}>

            <DialogContent className="sm:max-w-[480px] p-0 overflow-hidden border-none shadow-2xl">
                <DialogTitle className="sr-only">Request a Demo</DialogTitle>
                <DialogDescription className="sr-only">Fill out this form to request a personalized demonstration of Prolex.AI.</DialogDescription>
                <AnimatePresence mode="wait">

                    {!isSubmitted ? (
                        <m.div
                            key="form"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="p-8"
                        >
                            <DialogHeader className="mb-8">
                                <DialogTitle className="text-2xl font-jakarta font-semibold text-gray-900">
                                    Request a Demo
                                </DialogTitle>
                                <DialogDescription className="text-gray-500 text-[16px]">
                                    See how Prolex.AI can transform your legal workflow.
                                </DialogDescription>
                            </DialogHeader>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid grid-cols-2 gap-4">
                                    <Field>
                                        <FieldLabel className="text-sm font-medium text-gray-700 mb-1.5">
                                            Name
                                        </FieldLabel>
                                        <Input 
                                            placeholder="John Doe" 
                                            required 
                                            className="h-11 px-4 rounded-xl border-gray-200 focus:border-[#1a237e] focus:ring-1 focus:ring-[#1a237e] transition-all"
                                        />
                                    </Field>
                                    <Field>
                                        <FieldLabel className="text-sm font-medium text-gray-700 mb-1.5">
                                            Phone Number
                                        </FieldLabel>
                                        <Input 
                                            placeholder="+1 (555) 000-0000" 
                                            required 
                                            type="tel"
                                            className="h-11 px-4 rounded-xl border-gray-200 focus:border-[#1a237e] focus:ring-1 focus:ring-[#1a237e] transition-all"
                                        />
                                    </Field>
                                </div>
                                <Field>
                                    <FieldLabel className="text-sm font-medium text-gray-700 mb-1.5">
                                        Email Address
                                    </FieldLabel>
                                    <Input 
                                        placeholder="john@example.com" 
                                        type="email" 
                                        required 
                                        className="h-11 px-4 rounded-xl border-gray-200 focus:border-[#1a237e] focus:ring-1 focus:ring-[#1a237e] transition-all"
                                    />
                                </Field>
                                <Field>
                                    <FieldLabel className="text-sm font-medium text-gray-700 mb-1.5">
                                        Message
                                    </FieldLabel>
                                    <Textarea 
                                        placeholder="How can we help you?" 
                                        required 
                                        className="min-h-[120px] px-4 py-3 rounded-xl border-gray-200 focus:border-[#1a237e] focus:ring-1 focus:ring-[#1a237e] transition-all resize-none"
                                    />
                                </Field>
                                
                                <Button 
                                    type="submit" 
                                    className="w-full h-12 mt-6 bg-[#1a237e] hover:bg-[#151c6b] text-white rounded-xl font-semibold shadow-lg shadow-blue-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                                    disabled={isLoading}
                                >
                                    {isLoading ? (
                                        <div className="flex items-center gap-2">
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            <span>Sending...</span>
                                        </div>
                                    ) : (
                                        "Submit Request"
                                    )}
                                </Button>
                            </form>
                        </m.div>
                    ) : (
                        <m.div
                            key="success"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.05 }}
                            transition={{ 
                                type: "spring",
                                stiffness: 300,
                                damping: 25
                            }}
                            className="p-12 text-center flex flex-col items-center justify-center min-h-[400px]"
                        >
                            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
                                <CheckCircle2 className="w-10 h-10 text-green-500" />
                            </div>
                            <h2 className="text-2xl font-jakarta font-bold text-gray-900 mb-3">
                                Request Sent!
                            </h2>
                            <p className="text-gray-500 text-[16px] leading-relaxed max-w-[280px]">
                                Thank you for your interest. Our team will contact you shortly to schedule a demo.
                            </p>
                            <Button 
                                variant="outline" 
                                onClick={() => onOpenChange(false)}
                                className="mt-8 rounded-xl px-8 h-11 border-gray-200 hover:bg-gray-50 transition-colors"
                            >
                                Close
                            </Button>
                        </m.div>
                    )}
                </AnimatePresence>
            </DialogContent>
        </Dialog>
    )
}
