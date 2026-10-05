import { HomeDeveloperCtaNewsletter } from "@/shared/ui/marketing/home-developer-cta-newsletter"
import { ProjectOverviewSection } from "@/features/project/ui/projects/project-overview-section"
import { homeDeveloperCtaContent } from "@/features/developer/services/content"
import {
  DEVELOPERS_PAGE_BREADCRUMBS,
  DEVELOPERS_PAGE_SEO_SECTIONS,
  DUBAI_DEVELOPERS,
} from "@/features/developer/services/content"

import { DevelopersFaqSection } from "./developers-faq-section"
import { DevelopersPageHeaderSection } from "./developers-page-header-section"
import { DevelopersResultsSection } from "./developers-results-section"

export function DevelopersPage() {
  return (
    <>
      <DevelopersPageHeaderSection breadcrumbs={DEVELOPERS_PAGE_BREADCRUMBS} />
      <DevelopersResultsSection developers={DUBAI_DEVELOPERS} />
      <ProjectOverviewSection sections={DEVELOPERS_PAGE_SEO_SECTIONS} className="border-t border-border" />
      <DevelopersFaqSection />
      <HomeDeveloperCtaNewsletter {...homeDeveloperCtaContent} />
    </>
  )
}
