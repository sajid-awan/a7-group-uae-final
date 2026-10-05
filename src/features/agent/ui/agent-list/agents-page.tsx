import { HomeDeveloperCtaNewsletter } from "@/shared/ui/marketing/home-developer-cta-newsletter"
import { ProjectOverviewSection } from "@/features/project/ui/projects/project-overview-section"
import type { RealEstateAgentProfile } from "@/features/agent/core/domain/entity/agent.entity"
import type { ProjectOverviewBlock } from "@/features/property"
import type { BreadcrumbItem } from "@/shared/ui/breadcrumb"
import type { HomeDeveloperCtaNewsletterProps } from "@/shared/ui/marketing/home-developer-cta-newsletter"

import { AgentsListingShell } from "./agents-listing-shell"
import { AgentsSearchHero } from "./agents-search-hero"

export type AgentsPageProps = {
  agents: RealEstateAgentProfile[]
  breadcrumbs: BreadcrumbItem[]
  seoSections: ProjectOverviewBlock[]
  developerCta: HomeDeveloperCtaNewsletterProps
}

export function AgentsPage({
  agents,
  breadcrumbs,
  seoSections,
  developerCta,
}: AgentsPageProps) {
  return (
    <>
      <AgentsSearchHero />
      <AgentsListingShell agents={agents} breadcrumbs={breadcrumbs} />
      <ProjectOverviewSection sections={seoSections} className="border-t border-border" />
      <HomeDeveloperCtaNewsletter {...developerCta} />
    </>
  )
}
