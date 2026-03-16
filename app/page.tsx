import { HeroSection } from "@/components/sections/home/HeroSection"
import { DashboardPreview } from "@/components/sections/home/DashboardPreview"
import { PlatformFeatures } from "@/components/sections/home/PlatformFeatures"
import { BuiltForModernHome } from "@/components/sections/home/BuiltForModernHome"
import { LegalCopilot } from "@/components/sections/home/LegalCopilot"
import { HowItWorks } from "@/components/sections/home/HowItWorks"
import { HomePricing } from "@/components/sections/home/HomePricing"
import { SmarterData } from "@/components/sections/home/SmarterData"
import { HomeFAQ } from "@/components/sections/home/HomeFAQ"
import { FeaturesCTA } from "@/components/sections/features/FeaturesCTA"

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <DashboardPreview />
      <PlatformFeatures />
      <BuiltForModernHome />
      <LegalCopilot />
      <HowItWorks />
      <HomePricing />
      <SmarterData />
      <HomeFAQ />
      <FeaturesCTA />
    </main>
  )
}