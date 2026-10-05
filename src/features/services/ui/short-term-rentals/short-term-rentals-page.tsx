import {
  MarketingBenefitsGridSection,
  MarketingCtaBannerSection,
  MarketingHeroSection,
  MarketingImageGalleryTextSection,
  MarketingImageTextSection,
  MarketingSolutionsChecklistSection,
  ServiceMarketingPageLayout,
} from "@/shared/ui/marketing"
import type { ShortTermRentalsPageContent } from "@/features/services/services/content"

export type ShortTermRentalsPageProps = {
  content: ShortTermRentalsPageContent
}

export function ShortTermRentalsPage({ content }: ShortTermRentalsPageProps) {
  return (
    <ServiceMarketingPageLayout
      hero={<MarketingHeroSection {...content.heroProps} />}
      intro={<MarketingImageGalleryTextSection {...content.guestSectionProps} />}
      grid={
        <MarketingBenefitsGridSection
          title={content.whyTitle}
          benefits={content.whyBenefits}
          columns={3}
          headingId="short-term-rentals-why-heading"
        />
      }
      afterGrid={
        <>
          <MarketingImageTextSection {...content.transformSectionProps} />
          <MarketingCtaBannerSection {...content.journeyBanner} />
          <MarketingSolutionsChecklistSection {...content.servicesSectionProps} />
        </>
      }
      testimonialsSectionProps={content.testimonialsSectionProps}
      faqSectionProps={content.faqSectionProps}
      contactSectionProps={content.contactSectionProps}
    />
  )
}
