import { ListFilter, Search } from "lucide-react"

import { StaticFilterButton } from "@/features/search/ui/static-filter-button"
import { Button } from "@/shared/ui/button"
import { Input } from "@/shared/ui/input"
import { cn } from "@/shared/lib/cn"

export type PropertyListingSearchBarProps = {
  className?: string
  shellClassName?: string
  placeholder?: string
}

/** Static listing search bar (display only — no search behavior). */
export function PropertyListingSearchBar({
  className,
  shellClassName,
  placeholder = "Project name",
}: PropertyListingSearchBarProps) {
  return (
    <div
      role="search"
      aria-label="Property search"
      className={cn("relative z-30 w-full min-w-0 overflow-visible text-a7-text-gray", className)}
    >
      <div
        className={cn(
          "flex w-full min-w-0 flex-col rounded-2xl border border-border/90 bg-white p-3 text-a7-text-gray shadow-sm",
          "sm:min-h-[3.25rem] sm:flex-row sm:flex-nowrap sm:items-center sm:gap-0 sm:overflow-visible sm:rounded-full sm:p-0 sm:py-1.5 sm:pl-4 sm:pr-1.5",
          shellClassName
        )}
      >
        <div className="relative mb-3 flex min-h-11 min-w-0 flex-1 items-center gap-2 border-b border-border/70 pb-3 sm:mb-0 sm:min-h-0 sm:border-0 sm:border-r sm:border-border/70 sm:pb-0 sm:pr-3">
          <Search className="size-4 shrink-0 text-a7-text-gray" aria-hidden />
          <Input
            type="text"
            placeholder={placeholder}
            aria-label={placeholder}
            inputSize="sm"
            className="h-10 min-w-0 flex-1 border-0 bg-transparent px-0 text-base text-a7-text-gray shadow-none placeholder:text-muted-foreground focus-visible:ring-0 sm:h-9 sm:text-sm md:min-w-[10rem] lg:min-w-[12rem]"
            autoComplete="off"
          />
        </div>

        <div className="mb-3 flex w-full min-w-0 gap-2 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] sm:mb-0 sm:w-auto sm:flex-none sm:items-center sm:justify-start sm:gap-0.5 sm:overflow-x-auto sm:px-1 md:gap-1 [&::-webkit-scrollbar]:hidden">
          <StaticFilterButton label="Buy" />
          <StaticFilterButton label="Type" />
          <StaticFilterButton label="Beds & Baths" />
          <StaticFilterButton label="Price" />
        </div>

        <div className="flex w-full shrink-0 flex-col gap-2 sm:w-auto sm:flex-row sm:items-center sm:justify-end sm:gap-2 sm:pl-2">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            shape="pill"
            className="hidden h-9 gap-1.5 px-3 text-sm font-medium text-a7-text-gray hover:bg-muted/80 sm:inline-flex"
          >
            <ListFilter className="size-4 opacity-80" aria-hidden />
            More Filters
          </Button>
          <Button
            type="button"
            variant="property"
            shape="pill"
            size="sm"
            className="h-10 w-full min-w-0 shrink-0 gap-2 px-5 text-sm font-semibold shadow-sm sm:h-9 sm:w-auto"
          >
            <Search className="size-4 text-white" aria-hidden />
            Search
          </Button>
        </div>
      </div>
    </div>
  )
}

PropertyListingSearchBar.displayName = "PropertyListingSearchBar"
