"use client"

import type { ReactNode } from "react"
import { RefreshCw, Search } from "lucide-react"

import {
  DashboardViewModeToggle,
  type DashboardViewMode,
  dashboardToolbarIconButtonClassName,
} from "./dashboard-view-mode-toggle"
import { DashboardToolbarIconButton } from "@/features/dashboard/components/dashboard-toolbar-icon-button"
import { cn } from "@/shared/lib/cn"
import { Input } from "@/shared/ui/input"

export type DashboardListingToolbarProps = {
  searchValue: string
  onSearchChange: (value: string) => void
  searchPlaceholder?: string
  searchAriaLabel?: string
  viewMode: DashboardViewMode
  onViewModeChange: (mode: DashboardViewMode) => void
  onRefresh?: () => void
  refreshAriaLabel?: string
  trailingActions?: ReactNode
  className?: string
}

export function DashboardListingToolbar({
  searchValue,
  onSearchChange,
  searchPlaceholder = "Search",
  searchAriaLabel,
  viewMode,
  onViewModeChange,
  onRefresh,
  refreshAriaLabel = "Refresh",
  trailingActions,
  className,
}: DashboardListingToolbarProps) {
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
        <DashboardViewModeToggle viewMode={viewMode} onViewModeChange={onViewModeChange} />
        <DashboardToolbarIconButton
          label={refreshAriaLabel}
          className={dashboardToolbarIconButtonClassName}
          onClick={onRefresh}
        >
          <RefreshCw className="size-3.5" />
        </DashboardToolbarIconButton>
        {trailingActions}
      </div>
    </div>
  )
}

DashboardListingToolbar.displayName = "DashboardListingToolbar"
