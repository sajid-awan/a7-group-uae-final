"use client"

import { ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

import { BreadcrumbList, type BreadcrumbItem } from "@/shared/ui/breadcrumb"
import { Badge } from "@/shared/ui/badge"
import {
  PROPERTY_LISTING_AREA_PILLS,
  PROPERTY_LISTING_LOCATION_LINKS,
} from "@/features/property/services/content"
import { propertiesListPath } from "@/shared/lib/constants/routes"
import { cn } from "@/shared/lib/cn"

export type PropertyListingDiscoverSectionProps = {
  className?: string
}

const PROPERTY_LISTING_BREADCRUMBS: BreadcrumbItem[] = [
  { kind: "home", href: "/" },
  { kind: "link", href: propertiesListPath(), label: "Buy" },
  { kind: "current", label: "Dubai" },
]

/** Static location and area lists (display only — no search links). */
export function PropertyListingDiscoverSection({ className }: PropertyListingDiscoverSectionProps) {

  return (
    <section
      className={cn("bg-white", className)}
      aria-label="Browse by location"
    >
      <div className="container mx-auto px-4 py-5 sm:py-6">
        <BreadcrumbList
          items={PROPERTY_LISTING_BREADCRUMBS}
          size="sm"
          separator="chevron"
          wrap={false}
          className="min-w-0"
        />

        <nav
          className="mt-4 grid grid-cols-1 gap-y-2.5 min-[420px]:grid-cols-2 sm:mt-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:gap-x-6 lg:gap-y-3"
          aria-label="Locations by emirate"
        >
          {PROPERTY_LISTING_LOCATION_LINKS.map((location, index) => (
            <motion.div
              key={location.name}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.05 + index * 0.04 }}
            >
              <div className="flex min-w-0 items-center gap-1 py-0.5 text-sm text-a7-black">
                <span className="min-w-0 truncate font-medium">{location.name}</span>
                <span className="shrink-0 whitespace-nowrap text-muted-foreground">
                  ({location.count.toLocaleString()})
                </span>
                <ChevronRight className="size-3.5 shrink-0 text-muted-foreground" aria-hidden />
              </div>
            </motion.div>
          ))}
        </nav>

        <div
          className="mt-5 flex gap-2 overflow-x-auto border-t border-border/80 pt-5 [-ms-overflow-style:none] [scrollbar-width:none] sm:flex-wrap sm:overflow-visible [&::-webkit-scrollbar]:hidden"
          role="group"
          aria-label="Popular areas"
        >
          {PROPERTY_LISTING_AREA_PILLS.map((area, index) => (
            <motion.div
              key={area}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: 0.1 + index * 0.04 }}
            >
              <Badge
                variant="outline"
                size="lg"
                shape="pill"
                className="shrink-0 border-border bg-white px-4 py-2 text-sm font-medium normal-case tracking-normal text-a7-text-gray"
              >
                {area}
              </Badge>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
