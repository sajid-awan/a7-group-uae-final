"use client"

import type { DatabaseLocation } from "../content/database-types"
import { cn } from "@/shared/lib/cn"
import { DatabaseLocationCard } from "@/shared/ui/dashboard/database-location-card"

export type DatabaseLocationsGridProps = {
  locations: DatabaseLocation[]
  onLocationClick?: (location: DatabaseLocation) => void
  className?: string
}

export function DatabaseLocationsGrid({
  locations,
  onLocationClick,
  className,
}: DatabaseLocationsGridProps) {
  return (
    <div className={cn("grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4", className)}>
      {locations.map((location) => (
        <DatabaseLocationCard
          key={location.id}
          location={location}
          onClick={onLocationClick ? () => onLocationClick(location) : undefined}
        />
      ))}
    </div>
  )
}

DatabaseLocationsGrid.displayName = "DatabaseLocationsGrid"
