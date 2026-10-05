import {
  MarketingHeroSection,
  MarketingHowItWorksSection,
  MarketingWhyChooseSection,
  ServiceMarketingPageLayout,
} from "@/shared/ui/marketing"
import type { ListYourPropertyPageContent } from "@/features/services/services/content"

export type ListYourPropertyPageProps = {
  content: ListYourPropertyPageContent
}

export function ListYourPropertyPage({ content }: ListYourPropertyPageProps) {
  return (
    <ServiceMarketingPageLayout
      hero={<MarketingHeroSection {...content.heroProps} />}
      grid={
        <>
          <MarketingWhyChooseSection {...content.whySectionProps} />
          <MarketingHowItWorksSection
            title={content.howItWorksTitle}
            subtitle={content.howItWorksSubtitle}
            steps={content.howItWorksSteps}
            headingId="list-your-property-how-heading"
          />
        </>
      }
      testimonialsSectionProps={content.testimonialsSectionProps}
      faqSectionProps={content.faqSectionProps}
      contactSectionProps={content.contactSectionProps}
    />
  )
}
