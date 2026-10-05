import { MarketingHeroSection } from "@/shared/ui/marketing/marketing-hero-section"
import type { ServicesPageContent } from "@/features/services/services/content"
import { cn } from "@/shared/lib/cn"

type ServicesHeroSectionProps = {
  hero: ServicesPageContent["hero"]
  className?: string
}

export function ServicesHeroSection({ hero, className }: ServicesHeroSectionProps) {
  return (
    <MarketingHeroSection
      parallax
      className={cn(className)}
      headingId="services-hero-heading"
      title={hero.title}
      description={hero.subtitle}
      imageUrl={hero.imageUrl}
      imageClassName="object-cover object-[center_25%]"
      cta={{ label: "Enquiry Now", href: "#services-contact" }}
    />
  )
}
