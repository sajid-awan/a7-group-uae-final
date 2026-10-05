import { FurnishedLuxuryProperties } from "@/features/home/ui/home/furnished-luxury-properties"
import { TrustedDeveloperPartners } from "@/features/home/ui/home/trusted-developer-partners"
import { RealEstateExperts } from "@/features/home/ui/home/real-estate-experts"
import { HomeDeveloperCtaNewsletter } from "@/shared/ui/marketing/home-developer-cta-newsletter"
import { homeDeveloperCtaContent } from "@/features/developer/content/developer-cta-content"
import { HomeFaqSection } from "@/shared/ui/marketing/home-faq-section"
import { HappyHomeOwners } from "@/features/home/ui/home/happy-home-owners"
import { RealEstateNews } from "@/features/home/ui/home/real-estate-news"
import { RealEstatingSinceBanner } from "@/features/home/ui/home/real-estating-since-banner"
import { TrendingLuxuryVillas } from "@/features/home/ui/home/trending-luxury-villas"
import { HeroSection } from "@/features/home/ui/home/hero-section"
import { MostTrendingProjects } from "@/features/home/ui/home/most-trending-projects"
import { OffPlanLatestLaunches } from "@/features/home/ui/home/off-plan-latest-launches"
import { HOME_HERO_IMAGE_FALLBACK, HERO_SLIDE_IMAGES } from "@/shared/lib/constants/home.constants"
import { HOME_NEWS_POSTS } from "@/features/home/content/home-news"
import { HOME_REAL_ESTATE_EXPERTS } from "@/features/home/content/home-real-estate-experts"
import { HOME_TESTIMONIALS } from "@/features/home/content/home-testimonials"
import {
  fetchProperties,
  fetchPropertyListings,
  fetchTrendingLuxuryVillas,
} from "@/features/property"

export default async function HomePage() {
  const [properties, listings, trendingVillas] = await Promise.all([
    fetchProperties(),
    fetchPropertyListings(),
    fetchTrendingLuxuryVillas(),
  ])

  return (
    <div>
      <HeroSection
        imageUrl={HERO_SLIDE_IMAGES[0] ?? HOME_HERO_IMAGE_FALLBACK}
        imageUrls={HERO_SLIDE_IMAGES}
        imageAlt="Dubai skyline — luxury living in Binghatti City"
        titleLine1="Luxury Living In"
        discoverMoreHref="#discover-main"
      />
      <OffPlanLatestLaunches properties={properties} sectionId="discover-main" />
      <MostTrendingProjects properties={properties.slice(0, 6)} />
      <TrustedDeveloperPartners />
      <FurnishedLuxuryProperties listings={listings} />
      <TrendingLuxuryVillas listings={trendingVillas} />
      <RealEstateExperts experts={HOME_REAL_ESTATE_EXPERTS} />
      <RealEstatingSinceBanner />
      <RealEstateNews posts={HOME_NEWS_POSTS} />
      <HappyHomeOwners testimonials={HOME_TESTIMONIALS} />
      <HomeFaqSection />
      <HomeDeveloperCtaNewsletter {...homeDeveloperCtaContent} />
    </div>
  )
}
