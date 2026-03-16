import { PricingHero } from "@/components/sections/pricing/PricingHero"
import { PricingCards } from "@/components/sections/pricing/PricingCards"
import { PricingTable } from "@/components/sections/pricing/PricingTable"
import { PricingFAQ } from "@/components/sections/pricing/PricingFAQ"
import { FeaturesCTA } from "@/components/sections/features/FeaturesCTA"

export const metadata = {
    title: "Pricing | Prolex.AI",
    description: "Flexible Plans for Every Legal Practice.",
}

export default function PricingPage() {
    return (
        <main>
            <PricingHero />
            <PricingCards />
            <PricingTable />
            <PricingFAQ />
            <FeaturesCTA />
        </main>
    )
}