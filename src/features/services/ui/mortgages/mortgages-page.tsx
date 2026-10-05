import {
  MarketingBenefitsGridSection,
  MarketingHeroSection,
  MarketingImageTextSection,
  MarketingServicesSplitSection,
  ServiceMarketingPageLayout,
} from "@/shared/ui/marketing"
import type { MortgagesPageContent } from "@/features/services/services/content"

export type MortgagesPageProps = {
  content: MortgagesPageContent
}

export function MortgagesPage({ content }: MortgagesPageProps) {
  return (
    <ServiceMarketingPageLayout
      hero={<MarketingHeroSection {...content.heroProps} />}
      intro={<MarketingServicesSplitSection {...content.ourServicesSectionProps} />}
      grid={
        <MarketingBenefitsGridSection
          title={content.whyWorkTitle}
          subtitle={content.whyWorkSubtitle}
          benefits={content.whyWorkBenefits}
          headingId="mortgages-why-work-heading"
        />
      }
      afterGrid={<MarketingImageTextSection {...content.whyA7SectionProps} />}
      testimonialsSectionProps={content.testimonialsSectionProps}
      faqSectionProps={content.faqSectionProps}
      contactSectionProps={content.contactSectionProps}
    />
  )
}
