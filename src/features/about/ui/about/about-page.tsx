import {
  MarketingBreadcrumbsBand,
  MarketingCtaBannerSection,
  MarketingHeroSection,
  ServiceMarketingPageLayout,
} from "@/shared/ui/marketing"
import {
  ABOUT_BREADCRUMBS,
  aboutContactSectionProps,
  aboutCtaBannerProps,
  aboutFaqSectionProps,
  aboutHeroProps,
  aboutStatsShowcaseSectionProps,
  aboutStoryGoalsSectionProps,
  aboutTestimonialsSectionProps,
  aboutTrustSectionProps,
} from "@/features/about/services/content"

import { AboutStatsShowcaseSection } from "./about-stats-showcase-section"
import { AboutStoryGoalsSection } from "./about-story-goals-section"
import { AboutTrustSection } from "./about-trust-section"

export function AboutPage() {
  return (
    <ServiceMarketingPageLayout
      hero={<MarketingHeroSection {...aboutHeroProps} />}
      intro={
        <>
          <MarketingBreadcrumbsBand items={ABOUT_BREADCRUMBS} />
          <AboutTrustSection {...aboutTrustSectionProps} breadcrumbs={undefined} className="pt-6 md:pt-8" />
        </>
      }
      grid={
        <>
          <AboutStoryGoalsSection {...aboutStoryGoalsSectionProps} />
          <MarketingCtaBannerSection {...aboutCtaBannerProps} />
        </>
      }
      afterGrid={<AboutStatsShowcaseSection {...aboutStatsShowcaseSectionProps} />}
      testimonialsSectionProps={aboutTestimonialsSectionProps}
      faqSectionProps={aboutFaqSectionProps}
      contactSectionProps={aboutContactSectionProps}
    />
  )
}
