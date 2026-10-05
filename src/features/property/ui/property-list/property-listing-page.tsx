import type { ProjectOverviewBlock, ProjectFaqItem, PropertyListing } from "@/features/property"
import { ProjectOverviewSection } from "@/features/project/ui/projects/project-overview-section"
import {
  HomeDeveloperCtaNewsletter,
  type HomeDeveloperCtaNewsletterProps,
} from "@/shared/ui/marketing/home-developer-cta-newsletter"
import { HomeFaqSection } from "@/shared/ui/marketing/home-faq-section"

import { PropertyListingDiscoverSection } from "./property-listing-discover-section"
import { PropertyListingResults } from "./property-listing-results"
import { PropertyListingSearchHero } from "./property-listing-search-hero"

export type PropertyListingPageProps = {
  listings: PropertyListing[]
  pageTitle: string
  faqTitle: string
  faqItems: readonly ProjectFaqItem[]
  seoSections: readonly ProjectOverviewBlock[]
  developerCta: HomeDeveloperCtaNewsletterProps
  heroImageUrl: string
}

export function PropertyListingPage({
  listings,
  pageTitle,
  faqTitle,
  faqItems,
  seoSections,
  developerCta,
  heroImageUrl,
}: PropertyListingPageProps) {
  return (
    <>
      <PropertyListingSearchHero heroImageUrl={heroImageUrl} />
      <PropertyListingDiscoverSection />
      <PropertyListingResults listings={listings} title={pageTitle} />
      <ProjectOverviewSection sections={[...seoSections]} className="border-t border-border" />
      <HomeFaqSection title={faqTitle} items={faqItems} />
      <HomeDeveloperCtaNewsletter {...developerCta} />
    </>
  )
}
