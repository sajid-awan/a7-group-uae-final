"use client"

import { Download, LayoutGrid, List, RefreshCw, Search } from "lucide-react"

import { DashboardToolbarIconButton } from "@/features/dashboard/components/dashboard-toolbar-icon-button"
import type { DashboardViewMode } from "@/features/dashboard/content/dashboard-view-mode"
import {
  DASHBOARD_TOOLBAR_CARD_CLASSNAME,
} from "@/features/dashboard/content/dashboard-view-mode"
import {
  DASHBOARD_LEAD_PIPELINE_FILTER_OPTIONS,
  DASHBOARD_LEAD_STAGE_FILTER_OPTIONS,
} from "@/features/dashboard/content/dashboard-lead-ui"
import { cn } from "@/shared/lib/cn"
import { Input } from "@/shared/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select"

const filterTriggerClassName =
  "h-10 w-auto shrink-0 rounded-lg border-border bg-white px-3 text-sm text-muted-foreground shadow-none"

export type DashboardLeadsToolbarProps = {
  searchValue: string
  onSearchChange: (value: string) => void
  viewMode: DashboardViewMode
  onViewModeChange: (mode: DashboardViewMode) => void
  leadStageFilter: string
  onLeadStageFilterChange: (value: string) => void
  pipelineStageFilter: string
  onPipelineStageFilterChange: (value: string) => void
  className?: string
}

export function DashboardLeadsToolbar({
  searchValue,
  onSearchChange,
  viewMode,
  onViewModeChange,
  leadStageFilter,
  onLeadStageFilterChange,
  pipelineStageFilter,
  onPipelineStageFilterChange,
  className,
}: DashboardLeadsToolbarProps) {
  return (
    <div className={cn(DASHBOARD_TOOLBAR_CARD_CLASSNAME, className)}>
      <div className="flex items-center gap-3 overflow-x-auto">
        <Input
          value={searchValue}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Search for leads"
          inputSize="sm"
          radius="lg"
          icon={<Search className="size-4" />}
          wrapperClassName="min-w-[12rem] flex-1"
          className="h-10 border-border bg-white shadow-none"
          aria-label="Search for leads"
        />

        <Select value={leadStageFilter} onValueChange={onLeadStageFilterChange}>
          <SelectTrigger className={cn(filterTriggerClassName, "min-w-[9.5rem]")} inputSize="sm" radius="lg">
            <SelectValue placeholder="Lead Stage" />
          </SelectTrigger>
          <SelectContent>
            {DASHBOARD_LEAD_STAGE_FILTER_OPTIONS.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={pipelineStageFilter} onValueChange={onPipelineStageFilterChange}>
          <SelectTrigger className={cn(filterTriggerClassName, "min-w-[11.5rem]")} inputSize="sm" radius="lg">
            <SelectValue placeholder="Lead Pipeline Stage" />
          </SelectTrigger>
          <SelectContent>
            {DASHBOARD_LEAD_PIPELINE_FILTER_OPTIONS.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <div className="ml-auto flex shrink-0 items-center gap-2">
          {viewMode === "table" ? (
            <DashboardToolbarIconButton label="Grid view" onClick={() => onViewModeChange("grid")}>
              <LayoutGrid className="size-3.5" />
            </DashboardToolbarIconButton>
          ) : (
            <DashboardToolbarIconButton label="List view" onClick={() => onViewModeChange("table")}>
              <List className="size-3.5" />
            </DashboardToolbarIconButton>
          )}

          <DashboardToolbarIconButton label="Download">
            <Download className="size-3.5" />
          </DashboardToolbarIconButton>
          <DashboardToolbarIconButton label="Refresh">
            <RefreshCw className="size-3.5" />
          </DashboardToolbarIconButton>
        </div>
      </div>
    </div>
  )
}

DashboardLeadsToolbar.displayName = "DashboardLeadsToolbar"
