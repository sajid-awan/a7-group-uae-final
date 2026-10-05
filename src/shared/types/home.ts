import type { LucideIcon } from "lucide-react"
import type { ReactNode } from "react"

import type { Property, PropertyListing } from "@/features/property"

/** Furnished luxury tab card — data for {@link FurnishedLuxuryTabs}. */
export type FurnishedCardProps = {
  imageUrl: string
  title: string
  location: string
  price: string
  description: string
  projectsTag?: string
}

export type HeroPropertySearchProps = {
  placeholder?: string
  typeLabel?: string
  className?: string
}

export type HeroMainSearchProps = Omit<HeroPropertySearchProps, "className">

export type HeroMainProps = {
  imageUrl: string
  imageUrls?: string[]
  imageAlt?: string
  titleLine1?: string
  titleLine2?: string
  titleLine2Options?: string[]
  subtitle?: string
  startingFromValue?: string
  startingFromLabel?: string
  paymentPlanValue?: string
  paymentPlanLabel?: string
  discoverMoreHref?: string
  searchProps?: HeroMainSearchProps
  className?: string
}

export type HeroMainStatProps = {
  icon: LucideIcon
  value: string
  label: string
}

export type SectionHeaderProps = {
  kicker?: string
  title: string
  action?: ReactNode
  className?: string
}

/**
 * Resolved marketing home payload — produced by {@link loadHomeContent}
 * and consumed by the home page server component.
 */
export type HomeContentViewModel = {
  heroImageUrl: string
  listingBlurb: string
  featuredProperties: readonly [Property, Property, Property, Property]
  primaryListing: PropertyListing
  furnishedVillas: FurnishedCardProps[]
  furnishedApartments: FurnishedCardProps[]
}
