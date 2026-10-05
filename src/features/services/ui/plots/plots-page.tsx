import {
  MarketingAudienceChecklistSection,
  MarketingBenefitsGridSection,
  MarketingBreadcrumbsBand,
  MarketingDualCtaImageTextSection,
  MarketingHeroSection,
  MarketingMarketInsightsSection,
  MarketingPlotsListingsSection,
  MarketingStepCardsSection,
  ServiceMarketingPageLayout,
} from "@/shared/ui/marketing"
import type { PlotsPageContent } from "@/features/services/services/content"

export type PlotsPageProps = {
  content: PlotsPageContent
}

export function PlotsPage({ content }: PlotsPageProps) {
  return (
    <ServiceMarketingPageLayout
      hero={<MarketingHeroSection {...content.heroProps} />}
      intro={
        <>
          <MarketingBreadcrumbsBand items={content.breadcrumbs} />
          <MarketingBenefitsGridSection {...content.whyChooseSectionProps} />
        </>
      }
      grid={<MarketingAudienceChecklistSection {...content.audienceSectionProps} />}
      afterGrid={
        <>
          <MarketingPlotsListingsSection {...content.listingsSectionProps} />
          <MarketingStepCardsSection {...content.howItWorksSectionProps} />
          <MarketingMarketInsightsSection {...content.marketInsightsSectionProps} />
          <MarketingDualCtaImageTextSection {...content.legacySectionProps} />
        </>
      }
      testimonialsSectionProps={content.testimonialsSectionProps}
      faqSectionProps={content.faqSectionProps}
      contactSectionProps={content.contactSectionProps}
    />
  )
}
