"use client"

import { useMemo, useState } from "react"
import { motion } from "framer-motion"

import { PropertyCardListingHorizontal } from "@/features/property/ui/property-card"
import { ListingPagination } from "@/shared/ui/listing-pagination"
import { PROPERTY_LISTING_PAGE_TITLE } from "@/features/property/services/content"
import type { PropertyListing } from "@/features/property"
import { cn } from "@/shared/lib/cn"

const DEFAULT_PAGE_SIZE = 12

export type PropertyListingResultsProps = {
  listings: PropertyListing[]
  title?: string
  pageSize?: number
  className?: string
}

export function PropertyListingResults({
  listings,
  title = PROPERTY_LISTING_PAGE_TITLE,
  pageSize = DEFAULT_PAGE_SIZE,
  className,
}: PropertyListingResultsProps) {
  const [page, setPage] = useState(1)

  const pageCount = Math.max(1, Math.ceil(listings.length / pageSize))
  const safePage = Math.min(page, pageCount)

  const visibleListings = useMemo(() => {
    const start = (safePage - 1) * pageSize
    return listings.slice(start, start + pageSize)
  }, [listings, pageSize, safePage])

  return (
    <section
      className={cn("bg-white py-6 md:py-14 lg:py-8", className)}
      aria-labelledby="property-listing-results-heading"
    >
      <div className="container mx-auto px-4">
        <header className="max-w-3xl">
          <motion.h1
            id="property-listing-results-heading"
            className="font-heading text-[clamp(1.5rem,5.5vw,2.75rem)] font-semibold leading-tight tracking-tight text-a7-black md:text-[40px]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {title}
          </motion.h1>
          <motion.p
            className="mt-3 text-sm text-muted-foreground md:text-base"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
          >
            {listings.length} {listings.length === 1 ? "listing" : "listings"} available — updated daily from our
            brokerage network.
          </motion.p>
        </header>

        <div className="mt-8 flex flex-col gap-5 md:mt-10 md:gap-6">
          {visibleListings.map((listing, index) => (
            <motion.div
              key={listing.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.08 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.04 + index * 0.06 }}
            >
              <PropertyCardListingHorizontal listing={listing} />
            </motion.div>
          ))}
        </div>

        {listings.length > pageSize ? (
          <ListingPagination
            className="mt-8 md:mt-10"
            page={safePage}
            pageCount={pageCount}
            onPageChange={setPage}
          />
        ) : null}
      </div>
    </section>
  )
}
