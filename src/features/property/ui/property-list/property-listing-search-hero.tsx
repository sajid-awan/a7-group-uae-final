import Image from "next/image"

import { PropertyListingSearchBar } from "@/features/search/ui/property-listing-search-bar"
import { cn } from "@/shared/lib/cn"

export type PropertyListingSearchHeroProps = {
  className?: string
  heroImageUrl: string
}

export function PropertyListingSearchHero({
  className,
  heroImageUrl,
}: PropertyListingSearchHeroProps) {
  return (
    <section
      className={cn("relative border-b border-border z-20", className)}
      aria-label="Property search"
    >
      <div className="relative min-h-0 py-6 sm:min-h-40 sm:py-0">
        <Image
          src={heroImageUrl}
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-white/55" aria-hidden />

        <div className="relative z-10 flex items-center overflow-visible">
          <div className="container mx-auto w-full px-4 sm:py-8">
            <PropertyListingSearchBar />
          </div>
        </div>
      </div>
    </section>
  )
}
