import Image from "next/image"

import { PropertyDetailHero } from "@/features/property/ui/property-detail/property-detail-hero"
import { PropertyGalleryStrip } from "@/features/property/ui/property-detail/property-gallery-strip"
import type { PropertyListingDetail } from "@/features/property"
import { cn } from "@/shared/lib/cn"

type PropertyHeroSectionProps = {
  property: PropertyListingDetail
  className?: string
}

/** Hero band with full-bleed background image, light overlay, and overlapping gallery strip. */
export function PropertyHeroSection({ property, className }: PropertyHeroSectionProps) {
 const backgroundImage =
    property.heroBackgroundImageUrl ?? property.galleryImageUrls[0] ?? property.imageUrls[0]

  return (
    <div className={cn("relative  ", className)}>
  

      <div className="relative z-10 h-[480px] min-h-[480px] overflow-hidden bg-black md:h-144 md:min-h-144">
          <Image
          src={backgroundImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center h-full"
        />
        <PropertyDetailHero property={property} />
    </div> 
    <div className="overflw-hidden">
        <PropertyGalleryStrip
          images={property.galleryImageUrls}
          propertyTitle={property.title}
          totalPhotos={property.totalPhotos}
        />
        </div>
    </div>
  )
}
