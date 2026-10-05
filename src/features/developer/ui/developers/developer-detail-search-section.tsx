"use client"

import { List, Map } from "lucide-react"

import { PropertySearchBar } from "@/features/search/ui/global-search-bar"
import { cn } from "@/shared/lib/cn"

export type DeveloperDetailViewMode = "list" | "map"

type DeveloperDetailSearchSectionProps = {
  view: DeveloperDetailViewMode
  onViewChange: (view: DeveloperDetailViewMode) => void
  placeholder?: string
  className?: string
}

export function DeveloperDetailSearchSection({
  view,
  onViewChange,
  placeholder = "Area, Developer, Project",
  className,
}: DeveloperDetailSearchSectionProps) {

  return (
    <section className={cn("bg-white", className)} aria-label="Filter projects">
      <div className="container mx-auto px-4 py-5 sm:py-6">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-4">
          <div className="min-w-0 flex-1">
            <PropertySearchBar placeholder={placeholder} />
          </div>

          <div
            className="flex shrink-0 items-center justify-end gap-1 self-end lg:self-center"
            role="group"
            aria-label="View mode"
          >
            <button
              type="button"
              onClick={() => onViewChange("map")}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                view === "map"
                  ? "bg-a7-black text-white"
                  : "text-a7-text-gray hover:bg-muted/60"
              )}
              aria-pressed={view === "map"}
            >
              <Map className="size-4" aria-hidden />
              Map
            </button>
            <button
              type="button"
              onClick={() => onViewChange("list")}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                view === "list"
                  ? "bg-a7-black text-white"
                  : "text-a7-text-gray hover:bg-muted/60"
              )}
              aria-pressed={view === "list"}
            >
              <List className="size-4" aria-hidden />
              List
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
