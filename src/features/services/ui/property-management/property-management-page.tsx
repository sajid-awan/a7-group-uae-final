import {
  MarketingHeroSection,
  MarketingWhyChooseSection,
  ServiceMarketingPageLayout,
} from "@/shared/ui/marketing"
import type { PropertyManagementPageContent } from "@/features/services/services/content"

import { PropertyManagementFeaturesSection } from "./property-management-features-section"
import { PropertyManagementIntroSection } from "./property-management-intro-section"

export type PropertyManagementPageProps = {
  content: PropertyManagementPageContent
}

export function PropertyManagementPage({ content }: PropertyManagementPageProps) {
  return (
    <ServiceMarketingPageLayout
      hero={<MarketingHeroSection {...content.heroProps} />}
      intro={<PropertyManagementIntroSection intro={content.intro} />}
      grid={<PropertyManagementFeaturesSection features={content.features} />}
      afterGrid={<MarketingWhyChooseSection {...content.whySectionProps} />}
      testimonialsSectionProps={content.testimonialsSectionProps}
      faqSectionProps={content.faqSectionProps}
      contactSectionProps={content.contactSectionProps}
    />
  )
}
