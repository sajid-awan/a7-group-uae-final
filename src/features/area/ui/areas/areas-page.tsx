import { HomeDeveloperCtaNewsletter } from "@/shared/ui/marketing/home-developer-cta-newsletter"
import { homeDeveloperCtaContent } from "@/features/developer/services/content"
import { AREAS_PAGE_BREADCRUMBS } from "@/features/area/services/content"

import { AreasListingContent } from "./areas-listing-content"
import { AreasPageHeaderSection } from "./areas-page-header-section"
import { AreasSearchHero } from "./areas-search-hero"

export function AreasPage() {
  return (
    <>
      <AreasSearchHero />
      <AreasPageHeaderSection breadcrumbs={AREAS_PAGE_BREADCRUMBS} />
      <AreasListingContent />
      <HomeDeveloperCtaNewsletter {...homeDeveloperCtaContent} />
    </>
  )
}