import { FeaturesHero } from "@/components/sections/features/FeaturesHero"
import { FeaturesGrid } from "@/components/sections/features/FeaturesGrid"
import { AISection } from "@/components/sections/features/AISection"
import { FeaturesCTA } from "@/components/sections/features/FeaturesCTA"

export const metadata = {
    title: "Features | Prolex.AI",
    description: "Features built for legal excellence.",
}

export default function FeaturesPage() {
    return (
        <main>
            <FeaturesHero />
            <FeaturesGrid />
            <AISection />
            <FeaturesCTA />
        </main>
    )
}