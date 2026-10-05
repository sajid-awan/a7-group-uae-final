"use client"

import type { ReactNode } from "react"
import { LayoutGrid, List, Search } from "lucide-react"

import { DashboardToolbarIconButton } from "@/features/dashboard/components/dashboard-toolbar-icon-button"
import type { DashboardViewMode } from "@/features/dashboard/content/dashboard-view-mode"
import { cn } from "@/shared/lib/cn"
import { Input } from "@/shared/ui/input"

export type DashboardViewModeToolbarProps = {
  searchValue: string
  onSearchChange: (value: string) => void
  searchPlaceholder?: string
  searchAriaLabel?: string
  /** Omit both to hide the grid/list toggle. */
  viewMode?: DashboardViewMode
  onViewModeChange?: (mode: DashboardViewMode) => void
  trailingActions?: ReactNode
  className?: string
}

export function DashboardViewModeToolbar({
  searchValue,
  onSearchChange,
  searchPlaceholder = "Search",
  searchAriaLabel,
  viewMode,
  onViewModeChange,
  trailingActions,
  className,
}: DashboardViewModeToolbarProps) {
  return (
    <div className={cn("flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between", className)}>
      <div className="relative w-full max-w-md">
        <Search
          className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
          aria-hidden
        />
        <Input
          value={searchValue}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder={searchPlaceholder}
          inputSize="sm"
          radius="lg"
          className="h-10 pl-9"
          aria-label={searchAriaLabel ?? searchPlaceholder}
        />
      </div>

      <div className="flex items-center gap-2">
        {viewMode && onViewModeChange ? (
          viewMode === "table" ? (
            <DashboardToolbarIconButton label="Grid view" onClick={() => onViewModeChange("grid")}>
              <LayoutGrid className="size-3.5" />
            </DashboardToolbarIconButton>
          ) : (
            <DashboardToolbarIconButton label="List view" onClick={() => onViewModeChange("table")}>
              <List className="size-3.5" />
            </DashboardToolbarIconButton>
          )
        ) : null}

        {trailingActions}
      </div>
    </div>
  )
}

DashboardViewModeToolbar.displayName = "DashboardViewModeToolbar"
