import {
  MarketingBenefitsGridSection,
  MarketingHeroSection,
  MarketingImageTextSection,
  MarketingSolutionsChecklistSection,
  ServiceMarketingPageLayout,
} from "@/shared/ui/marketing"
import type { ConveyancingPageContent } from "@/features/services/services/content"

export type ConveyancingPageProps = {
  content: ConveyancingPageContent
}

export function ConveyancingPage({ content }: ConveyancingPageProps) {
  return (
    <ServiceMarketingPageLayout
      hero={<MarketingHeroSection {...content.heroProps} />}
      intro={<MarketingImageTextSection {...content.aboutSectionProps} />}
      grid={
        <MarketingBenefitsGridSection
          title={content.prismTitle}
          subtitle={content.prismSubtitle}
          benefits={content.prismBenefits}
          columns={4}
          headingId="conveyancing-prism-heading"
        />
      }
      afterGrid={<MarketingSolutionsChecklistSection {...content.solutionsSectionProps} />}
      testimonialsSectionProps={content.testimonialsSectionProps}
      faqSectionProps={content.faqSectionProps}
      contactSectionProps={content.contactSectionProps}
    />
  )
}
