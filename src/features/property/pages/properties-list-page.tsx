import type { Metadata } from "next"

import { PropertyListingPage } from "@/features/property/ui/property-list/property-listing-page"
import { fetchPropertyListings } from "@/features/property"
import { homeDeveloperCtaContent } from "@/features/developer/content/developer-cta-content"
import {
  PROPERTY_LISTING_FAQ_ITEMS,
  PROPERTY_LISTING_PAGE_TITLE,
  PROPERTY_LISTING_SEARCH_HERO_IMAGE,
  PROPERTY_LISTING_SEO_SECTIONS,
} from "@/features/property/content/property-listing-page-content"

export const propertiesListMetadata: Metadata = {
  title: `${PROPERTY_LISTING_PAGE_TITLE} | A Seven Properties`,
  description:
    "Browse apartments in Dubai. Filter by location, price, and bedrooms. Connect with A Seven Properties advisors for viewings and offers.",
}

export async function PropertiesListPage() {
  const listings = await fetchPropertyListings()

  return (
    <main>
      <PropertyListingPage
        listings={listings}
        pageTitle={PROPERTY_LISTING_PAGE_TITLE}
        faqTitle={`${PROPERTY_LISTING_PAGE_TITLE} — FAQs`}
        faqItems={PROPERTY_LISTING_FAQ_ITEMS}
        seoSections={PROPERTY_LISTING_SEO_SECTIONS}
        developerCta={homeDeveloperCtaContent}
        heroImageUrl={PROPERTY_LISTING_SEARCH_HERO_IMAGE}
      />
    </main>
  )
}
