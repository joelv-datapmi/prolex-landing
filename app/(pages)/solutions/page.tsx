import { SolutionsHero } from "@/components/sections/solutions/SolutionsHero"
import { OperationalIntelligence } from "@/components/sections/solutions/OperationalIntelligence"
import { BuiltForModern } from "@/components/sections/solutions/BuiltForModern"
import { RealWorkflows } from "@/components/sections/solutions/RealWorkFlows"
import { WorkflowCards } from "@/components/sections/solutions/WorkflowCards"
import { FeaturesCTA } from "@/components/sections/features/FeaturesCTA"

export const metadata = {
    title: "Solutions | Prolex.AI",
    description: "CRM Solutions Built For Legal Excellence.",
}

export default function SolutionsPage() {
    return (
        <main>
            <SolutionsHero />
            <OperationalIntelligence />
            <BuiltForModern />
            <RealWorkflows />
            <WorkflowCards />
            <FeaturesCTA />
        </main>
    )
}