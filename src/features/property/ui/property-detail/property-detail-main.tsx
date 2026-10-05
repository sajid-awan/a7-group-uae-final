"use client"

import { motion } from "framer-motion"

import type { PropertyListingDetail } from "@/features/property"
import { cn } from "@/shared/lib/cn"

import { PropertyAboutSection } from "@/features/property/ui/property-detail/property-about-section"
import { PropertyAmenitiesSection } from "@/features/property/ui/property-detail/property-amenities-section"
import { PropertyDealerCard } from "@/features/property/ui/property-detail/property-dealer-card"
import { PropertyLocationSection } from "@/features/property/ui/property-detail/property-location-section"
import { PropertyTransactionsSection } from "@/features/property/ui/property-detail/property-transactions-section"

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]
const VIEWPORT = { once: true, amount: 0.1 as const }

type PropertyDetailMainProps = {
  property: PropertyListingDetail
  className?: string
}

/** Left column content + sticky dealer card (about, amenities, transactions, location). */
export function PropertyDetailMain({ property, className }: PropertyDetailMainProps) {
  return (
    <section
      className={cn("mx-auto container bg-white px-6 py-10 md:px-10 md:py-12", className)}
      aria-label="Property details"
    >
      <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_min(300px,28%)] lg:gap-12 xl:gap-14">
        <div className="min-w-0 space-y-12 md:space-y-14">
          <PropertyAboutSection
            description={property.aboutDescription}
            highlights={property.aboutHighlights}
          />
          <PropertyAmenitiesSection amenities={property.amenities} />
          <PropertyTransactionsSection
            transactions={property.transactions}
            subtitle={property.transactionsSubtitle}
          />
          <PropertyLocationSection location={property.locationMap} />
        </div>

        <motion.div
          className="hidden lg:block lg:sticky lg:top-28 lg:self-start"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
        >
          <PropertyDealerCard property={property} className="border-0" />
        </motion.div>
      </div>
    </section>
  )
}
