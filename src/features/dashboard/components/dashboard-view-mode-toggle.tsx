"use client"

import { LayoutGrid, List } from "lucide-react"

import { cn } from "@/shared/lib/cn"
import { ActionTooltip } from "@/shared/ui/action-tooltip"
import { Button } from "@/shared/ui/button"

export type DashboardViewMode = "list" | "grid"

export const dashboardToolbarIconButtonClassName =
  "size-8 border border-border bg-white p-0 text-muted-foreground shadow-none hover:bg-muted/30"

export type DashboardViewModeToggleProps = {
  viewMode: DashboardViewMode
  onViewModeChange: (mode: DashboardViewMode) => void
  className?: string
  listAriaLabel?: string
  gridAriaLabel?: string
}

export function DashboardViewModeToggle({
  viewMode,
  onViewModeChange,
  className,
  listAriaLabel = "List view",
  gridAriaLabel = "Grid view",
}: DashboardViewModeToggleProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      {viewMode === "list" ? (
        <ActionTooltip label={gridAriaLabel}>
          <Button
            type="button"
            variant="outline"
            size="xs"
            shape="square"
            className={dashboardToolbarIconButtonClassName}
            aria-label={gridAriaLabel}
            onClick={() => onViewModeChange("grid")}
          >
            <LayoutGrid className="size-3.5" />
          </Button>
        </ActionTooltip>
      ) : (
        <ActionTooltip label={listAriaLabel}>
          <Button
            type="button"
            variant="outline"
            size="xs"
            shape="square"
            className={dashboardToolbarIconButtonClassName}
            aria-label={listAriaLabel}
            onClick={() => onViewModeChange("list")}
          >
            <List className="size-3.5" />
          </Button>
        </ActionTooltip>
      )}
    </div>
  )
}

DashboardViewModeToggle.displayName = "DashboardViewModeToggle"
