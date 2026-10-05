"use client"

import { useMemo, useState } from "react"
import { motion } from "framer-motion"

import { CommunitySpotlightCard } from "@/features/area/ui/areas/community-spotlight-card"
import { ListingPagination } from "@/shared/ui/listing-pagination"
import {
  AREAS_PAGE_SIZE,
  getAreasForPage,
  type DubaiAreaListing,
} from "@/features/area/services/content"
import { propertiesListPath, areaDetailPath } from "@/shared/lib/constants/routes"
import { cn } from "@/shared/lib/cn"

import { AreasSidebar } from "./areas-sidebar"

function AreaSpotlightCard({ area }: { area: DubaiAreaListing }) {
  const discoverHref = propertiesListPath()
  const detailHref = areaDetailPath(area.id)

  return (
    <CommunitySpotlightCard
      imageUrls={area.imageUrls}
      thumbnails={area.thumbnails}
      title={area.title}
      description={area.description}
      pricePerSqft={area.pricePerSqft}
      propertyTypeStats={area.propertyTypeStats}
      rentAmount={area.rentAmount}
      saleAmount={area.saleAmount}
      discoverHref={discoverHref}
      learnMoreHref={detailHref}
    />
  )
}

type AreasListingContentProps = {
  className?: string
}

export function AreasListingContent({ className }: AreasListingContentProps) {
  const [page, setPage] = useState(1)
  const areas = useMemo(() => getAreasForPage("popular"), [])

  const pageCount = Math.max(1, Math.ceil(areas.length / AREAS_PAGE_SIZE))
  const safePage = Math.min(page, pageCount)

  const visibleAreas = useMemo(() => {
    const start = (safePage - 1) * AREAS_PAGE_SIZE
    return areas.slice(start, start + AREAS_PAGE_SIZE)
  }, [areas, safePage])

  return (
    <section className={cn("bg-white", className)} aria-label="Dubai areas">
      <div className="container mx-auto px-4 py-6 sm:px-6 md:py-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-8">
          <aside className="w-full shrink-0 lg:sticky lg:top-24 lg:w-64 xl:w-72">
            <AreasSidebar />
          </aside>

          <div className="min-w-0 flex-1 space-y-6">
            {visibleAreas.map((area, index) => (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.08 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.04 + index * 0.08 }}
              >
                <AreaSpotlightCard area={area} />
              </motion.div>
            ))}
          </div>
        </div>

        {pageCount > 1 ? (
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
