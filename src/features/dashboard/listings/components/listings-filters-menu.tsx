"use client"

import { useState } from "react"
import { Filter } from "lucide-react"

import type { DashboardListingFilters } from "../content/listings-types"
import { DashboardListingsFiltersDrawer } from "./listings-filters-drawer"
import { cn } from "@/shared/lib/cn"
import { ActionTooltip } from "@/shared/ui/action-tooltip"
import { Button } from "@/shared/ui/button"

export type DashboardListingsFiltersMenuProps = {
  filters: DashboardListingFilters
  onFiltersChange: (filters: DashboardListingFilters) => void
  className?: string
}

export function DashboardListingsFiltersMenu({
  filters,
  onFiltersChange,
  className,
}: DashboardListingsFiltersMenuProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <ActionTooltip label="Filters">
        <Button
          type="button"
          variant="outline"
          size="xs"
          className={cn("gap-1.5 text-muted-foreground", className)}
          aria-label="Filters"
          onClick={() => setOpen(true)}
        >
          <Filter className="size-3.5 shrink-0" aria-hidden />
          <span className="text-sm font-medium">Filters</span>
        </Button>
      </ActionTooltip>

      <DashboardListingsFiltersDrawer
        open={open}
        onOpenChange={setOpen}
        filters={filters}
        onApply={onFiltersChange}
      />
    </>
  )
}

DashboardListingsFiltersMenu.displayName = "DashboardListingsFiltersMenu"
