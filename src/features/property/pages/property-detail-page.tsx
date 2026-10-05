import { notFound } from "next/navigation"

import { HomeDeveloperCtaNewsletter } from "@/shared/ui/marketing/home-developer-cta-newsletter"
import { PropertyDetailMain } from "@/features/property/ui/property-detail/property-detail-main"
import { PropertyDetailMobileCtaBar } from "@/features/property/ui/property-detail/property-detail-mobile-cta-bar"
import { PropertyHeroSection } from "@/features/property/ui/property-detail/property-hero-section"
import { PropertyInquirySection } from "@/features/property/ui/property-detail/property-inquiry-section"
import { PropertyInfoPanelSection } from "@/features/property/ui/property-detail/property-info-panel-section"
import { detailDeveloperCtaContent } from "@/features/developer/content/developer-cta-content"
import { getPropertyListingDetail } from "@/features/property/core/data/mocks/property-listing-details"

type PropertyDetailPageProps = {
  params: Promise<{ id: string }>
}

export async function PropertyDetailPage({ params }: PropertyDetailPageProps) {
  const { id } = await params
  const property = getPropertyListingDetail(id)

  if (!property) {
    notFound()
  }

  return (
    <main className="pb-0">
      <PropertyHeroSection property={property} />
      <PropertyDetailMain property={property} />
      <PropertyInfoPanelSection
        propertyInfo={property.propertyInfo}
        regulatoryInfo={property.regulatoryInfo}
        qrImage={property.qrImage}
        dldPermitNumber={property.dldPermitNumber}
      />
      <PropertyInquirySection property={property} />
      <HomeDeveloperCtaNewsletter {...detailDeveloperCtaContent} />
      <PropertyDetailMobileCtaBar property={property} />
    </main>
  )
}
