import { PropertyCardListing } from "@/features/property/ui/property-card"
import type { PropertyListing } from "@/features/property"
import { cn } from "@/shared/lib/cn"

type PropertySimilarListingsSectionProps = {
  listings: PropertyListing[]
  className?: string
}

export function PropertySimilarListingsSection({ listings, className }: PropertySimilarListingsSectionProps) {
  if (listings.length === 0) return null

  return (
    <section
      className={cn("mx-auto container bg-white px-6 py-[30px] md:px-10", className)}
      aria-labelledby="similar-listings-heading"
    >
      <h2 id="similar-listings-heading" className="font-heading text-2xl font-bold text-a7-black md:text-3xl">
        Similar Properties
      </h2>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {listings.map((listing) => (
          <PropertyCardListing key={listing.id} listing={listing} />
        ))}
      </div>
    </section>
  )
}
