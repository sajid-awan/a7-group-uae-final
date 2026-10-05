import { ServiceMarketingPageLayout } from "@/shared/ui/marketing/service-marketing-page-layout"
import type { ServicesPageContent } from "@/features/services/services/content"

import { ServicesGridSection } from "./services-grid-section"
import { ServicesHeroSection } from "./services-hero-section"
import { ServicesIntroSection } from "./services-intro-section"

export type ServicesPageProps = {
  content: ServicesPageContent
}

export function ServicesPage({ content }: ServicesPageProps) {
  return (
    <ServiceMarketingPageLayout
      hero={<ServicesHeroSection hero={content.hero} />}
      intro={<ServicesIntroSection intro={content.intro} />}
      grid={<ServicesGridSection offerings={content.offerings} />}
      overviewSections={content.seoSections}
      testimonialsSectionProps={content.testimonialsSectionProps}
      faqSectionProps={content.faqSectionProps}
      contactSectionProps={content.contactSectionProps}
    />
  )
}
