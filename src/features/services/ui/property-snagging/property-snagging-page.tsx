import {
  MarketingGlassServicesSection,
  MarketingHeroSection,
  MarketingImageTextSection,
  MarketingStepCardsSection,
  ServiceMarketingPageLayout,
} from "@/shared/ui/marketing"
import type { PropertySnaggingPageContent } from "@/features/services/services/content"

export type PropertySnaggingPageProps = {
  content: PropertySnaggingPageContent
}

export function PropertySnaggingPage({ content }: PropertySnaggingPageProps) {
  return (
    <ServiceMarketingPageLayout
      hero={<MarketingHeroSection {...content.heroProps} />}
      intro={<MarketingImageTextSection {...content.introSectionProps} />}
      grid={<MarketingGlassServicesSection {...content.glassServicesSectionProps} />}
      afterGrid={<MarketingStepCardsSection {...content.stepCardsSectionProps} />}
      testimonialsSectionProps={content.testimonialsSectionProps}
      faqSectionProps={content.faqSectionProps}
      contactSectionProps={content.contactSectionProps}
    />
  )
}
