import type { ComponentType, SVGProps } from "react"
import { Heart } from "lucide-react"

import { Car01Icon, CheckIcon, Menu04Icon, Share06Icon, SpacingWidth01Icon } from "@/shared/icons"

import type { AgentCardTone } from "@/features/agent/ui/agent-list/agent-card.constants"
import { agentCardTones } from "@/features/agent/ui/agent-list/agent-card.constants"
import type { PropertyListing } from "@/features/property"

export type IconComponent = ComponentType<SVGProps<SVGSVGElement> & { className?: string }>

export type CardAction = {
  key: string
  label: string
  Icon: IconComponent
}

export const cardActions: CardAction[] = [
  { key: "save", label: "Save", Icon: Heart },
  { key: "share", label: "Share", Icon: Share06Icon },
  { key: "more", label: "More options", Icon: Menu04Icon },
]

export type ListingSpec = {
  key: string
  Icon: IconComponent
  format: (listing: PropertyListing) => string
}

export const listingSpecs: ListingSpec[] = [
  { key: "area", Icon: SpacingWidth01Icon, format: (l) => `${l.areaSqft.toLocaleString()} sqft` },
  { key: "bed", Icon: CheckIcon, format: (l) => `${l.bedrooms} Bed` },
  { key: "bath", Icon: CheckIcon, format: (l) => `${l.bathrooms} Bath` },
  { key: "parking", Icon: Car01Icon, format: (l) => `${l.parking} Parking` },
]

/** Scales with badge `text-[10px]`; `size-[1em]` skips Badge default svg sizing. */
export const listingSpecIconProps = {
  width: "1em",
  height: "1em",
  className: "size-[1em] shrink-0 text-a7-black",
  strokeWidth: 2,
  "aria-hidden": true as const,
}

export const listingSpecBadgeClassName =
  "gap-0.5 border-border/80 bg-muted/60 px-2 py-1 text-[10px] font-normal leading-none text-a7-black normal-case sm:gap-1 sm:px-2 sm:py-1 sm:text-[10px]"

export const listingPricePerSqftBadgeClassName =
  "h-5 shrink-0 border border-border/80 bg-muted/60 px-1.5 text-[9px] font-medium leading-none tracking-normal text-a7-black normal-case sm:px-2 sm:text-[9px]"

export const furnishedListingSpecBadgeClassName = listingSpecBadgeClassName

export const furnishedListingPricePerSqftBadgeClassName = listingPricePerSqftBadgeClassName

export const propertyMetaBadgeClassName =
  "gap-1 text-a7-black [&_svg]:size-3 [&_svg]:text-a7-black"

export function hasPricePerSqft(value?: string) {
  return Boolean(value?.trim())
}

export function listingCardDescription(listing: PropertyListing): string {
  const trimmed = listing.description?.trim()
  if (trimmed) return trimmed

  const beds =
    listing.bedrooms === 0 ? "studio layout" : `${listing.bedrooms}-bedroom`
  return `${listing.propertyType} in ${listing.location} with ${beds}, ${listing.bathrooms} bathrooms, and ${listing.areaSqft.toLocaleString()} sqft of living space. Speak with ${listing.agentName} to arrange a private viewing.`
}

export function listingVariantIndex(listingId: string, modulus: number): number {
  if (modulus <= 0) return 0
  let hash = 0
  for (let i = 0; i < listingId.length; i++) {
    hash = (hash * 31 + listingId.charCodeAt(i)) >>> 0
  }
  return hash % modulus
}

export function agentCardToneForListingId(listingId: string): AgentCardTone {
  return agentCardTones[listingVariantIndex(listingId, agentCardTones.length)]!
}
