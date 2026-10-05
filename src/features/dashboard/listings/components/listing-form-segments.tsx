"use client"

import { Building2, Globe, Home, KeyRound, Lock, Mail, Percent } from "lucide-react"

import { CheckVerified02Icon } from "@/shared/icons"
import type { SegmentedControlOption } from "@/shared/ui/segmented-control"
import type { ListingCategory, ListingPurpose, ListingVisibility } from "../content/listing-form-types"

function SaleSegmentIcon() {
  return (
    <span className="flex size-5 shrink-0 items-center justify-center rounded-full border border-current" aria-hidden>
      <Percent className="size-3" strokeWidth={2.25} />
    </span>
  )
}

export const LISTING_PURPOSE_SEGMENT_OPTIONS: SegmentedControlOption<ListingPurpose>[] = [
  { value: "rent", label: "Rent", icon: <KeyRound className="size-4 shrink-0" aria-hidden /> },
  { value: "sale", label: "Sale", icon: <SaleSegmentIcon /> },
]

export const LISTING_CATEGORY_SEGMENT_OPTIONS: SegmentedControlOption<ListingCategory>[] = [
  { value: "residential", label: "Residential", icon: <Home className="size-4 shrink-0" aria-hidden /> },
  { value: "commercial", label: "Commercial", icon: <Building2 className="size-4 shrink-0" aria-hidden /> },
]

export const LISTING_VISIBILITY_SEGMENT_OPTIONS: SegmentedControlOption<ListingVisibility>[] = [
  { value: "draft", label: "Draft", icon: <Mail className="size-4 shrink-0" aria-hidden /> },
  { value: "private", label: "Private", icon: <Lock className="size-4 shrink-0" aria-hidden /> },
  { value: "public", label: "Public", icon: <Globe className="size-4 shrink-0" aria-hidden /> },
]

export function ListingTagIcon() {
  return (
    <CheckVerified02Icon size={20} className="shrink-0" aria-hidden />
  )
}
