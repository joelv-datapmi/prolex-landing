import { AboutHero } from "@/components/sections/about/AboutHero"
import { AboutMission } from "@/components/sections/about/AboutMission"
import { AboutPurpose } from "@/components/sections/about/AboutPurpose"
import { AboutValues } from "@/components/sections/about/AboutValues"
import { AboutWhoWeAre } from "@/components/sections/about/AboutWhoWeAre"
import { FeaturesCTA } from "@/components/sections/features/FeaturesCTA"

export const metadata = {
  title: "About | Prolex.AI",
  description: "Transforming legal practice management with AI-powered innovation.",
}

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutMission />
      <AboutPurpose />
      <AboutValues />
      <AboutWhoWeAre />
      <FeaturesCTA />
    </main>
  )
}