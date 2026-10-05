"use client"

import Link from "next/link"
import { useMemo, useState } from "react"

import { CheckCircleIcon } from "@/shared/icons"
import { PropertyMarketingListingCard } from "@/features/property/ui/property-card"
import type { PropertyMarketingAction } from "@/features/property/ui/property-card/property-marketing-listing-card"
import { WhatsAppColorIcon, whatsAppActionToneClassName } from "@/shared/ui/iconify-icons"
import { DEFAULT_MARKETING_CONTACT } from "@/shared/content/marketing/shared-marketing-content"
import { cn } from "@/shared/lib/cn"

export type PlotListingCategory = "sale" | "off-plan"

export type PlotListingItem = {
  id: string
  category: PlotListingCategory
  imageUrls: readonly string[]
  propertyTypes: string
  title: string
  price: string
  location: string
  description: string
  handover: string
  ribbonLabels?: readonly string[]
  href: string
}

export type PlotListingFilter = "both" | PlotListingCategory

export type MarketingPlotsListingsSectionProps = {
  title: string
  listings: readonly PlotListingItem[]
  filters?: readonly { id: PlotListingFilter; label: string }[]
  headingId?: string
  sectionId?: string
  className?: string
}

const WHATSAPP_ACTION: PropertyMarketingAction = {
  key: "whatsapp",
  label: "Whatsapp",
  icon: WhatsAppColorIcon,
  href: DEFAULT_MARKETING_CONTACT.whatsAppHref,
  toneClassName: whatsAppActionToneClassName,
}

const DEFAULT_FILTERS: readonly { id: PlotListingFilter; label: string }[] = [
  { id: "both", label: "Both" },
  { id: "sale", label: "For Sale" },
  { id: "off-plan", label: "Off Plan" },
]

export function MarketingPlotsListingsSection({
  title,
  listings,
  filters = DEFAULT_FILTERS,
  headingId = "plots-listings-heading",
  sectionId,
  className,
}: MarketingPlotsListingsSectionProps) {
  const [activeFilter, setActiveFilter] = useState<PlotListingFilter>("both")

  const visibleListings = useMemo(() => {
    if (activeFilter === "both") return listings
    return listings.filter((listing) => listing.category === activeFilter)
  }, [activeFilter, listings])

  return (
    <section
      id={sectionId}
      className={cn("bg-white py-10 md:py-14", className)}
      aria-labelledby={headingId}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2
            id={headingId}
            className="font-heading text-[clamp(1.5rem,3.5vw,2.25rem)] font-semibold leading-tight tracking-tight text-a7-black"
          >
            {title}
          </h2>
          <div
            role="group"
            aria-label="Filter plot listings"
            className="inline-flex w-full overflow-hidden rounded-full border border-border bg-white sm:w-auto"
          >
            {filters.map((filter, index) => {
              const active = activeFilter === filter.id
              const isLast = index === filters.length - 1

              return (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => setActiveFilter(filter.id)}
                  className={cn(
                    "inline-flex h-10 flex-1 items-center justify-center gap-1.5 px-3 text-sm font-medium transition-colors sm:min-w-[5.5rem] sm:flex-none sm:gap-2 sm:px-5",
                    !isLast && "border-r border-border",
                    active
                      ? "bg-primary text-primary-foreground"
                      : "bg-white text-a7-text-gray hover:bg-muted/40"
                  )}
                  aria-pressed={active}
                >
                  <CheckCircleIcon
                    className={cn(
                      "size-4 shrink-0",
                      active ? "text-primary-foreground" : "text-a7-text-gray"
                    )}
                    strokeWidth={1.5}
                    aria-hidden
                  />
                  {filter.label}
                </button>
              )
            })}
          </div>
        </div>

        <ul className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {visibleListings.map((listing) => (
            <li key={listing.id}>
              <Link
                href={listing.href}
                className="block h-full rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <PropertyMarketingListingCard
                  layout="vertical"
                  imageUrls={[...listing.imageUrls]}
                  propertyTypes={listing.propertyTypes}
                  title={listing.title}
                  price={listing.price}
                  pricePrefix="From"
                  location={listing.location}
                  description={listing.description}
                  handover={listing.handover}
                  ribbonLabels={listing.ribbonLabels ? [...listing.ribbonLabels] : undefined}
                  learnMoreLabel="Learn More"
                  actions={[WHATSAPP_ACTION]}
                  className="h-full border border-border bg-white shadow-none"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
