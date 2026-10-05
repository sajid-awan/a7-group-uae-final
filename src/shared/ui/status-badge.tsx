"use client"

import { Badge, type BadgeProps } from "@/shared/ui/badge"
import { InfoTooltip } from "@/shared/ui/info-tooltip"
import { cn } from "@/shared/lib/cn"
import type { PropertyListingStatus } from "@/features/property"

export type StatusBadgeKind = "forSale" | "forRent" | "offPlan" | "underConstruction" | "closingCost"

export const STATUS_LABELS: Record<StatusBadgeKind, string> = {
  forSale: "For Sale",
  forRent: "For Rent",
  offPlan: "Off Plan",
  underConstruction: "Under Construction",
  closingCost: "Closing Cost",
}

export function statusList(status: PropertyListingStatus): StatusBadgeKind {
  if (status === "Off Plan") return "offPlan"
  if (status === "Under Construction") return "underConstruction"
  return "forSale"
}

const config: Record<StatusBadgeKind, { variant: BadgeProps["variant"]; className?: string; dot?: boolean; trailingIcon?: boolean }> = {
  forSale:           { variant: "success",  className: "gap-2 border-[#B8E6C0] bg-[#E4F7E8] text-[#1B5E3B] [a]:hover:bg-[#D8F2DD]", dot: true },
  forRent:           { variant: "info" },
  offPlan:           { variant: "warning" },
  underConstruction: { variant: "warning" },
  closingCost:       { variant: "info",     trailingIcon: true },
}

type StatusBadgeProps = {
  kind: StatusBadgeKind
  size?: BadgeProps["size"]
  className?: string
}

export function StatusBadge({ kind, size = "hero", className }: StatusBadgeProps) {
  const { variant, className: base, dot, trailingIcon } = config[kind]
  return (
    <Badge variant={variant} size={size} shape="pill" className={cn(base, className)}>
      {dot && <span className="size-2 shrink-0 rounded-full bg-[#1B5E3B]" aria-hidden />}
      {STATUS_LABELS[kind]}
      {trailingIcon ? (
        <InfoTooltip
          trigger="compact"
          ariaLabel="More information about closing cost"
          content="Fees and charges for finalizing a property transaction."
        />
      ) : null}
    </Badge>
  )
}
