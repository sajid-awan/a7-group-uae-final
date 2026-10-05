"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { cn } from "@/shared/lib/cn"

export type ListingPaginationProps = {
  page: number
  pageCount: number
  onPageChange: (page: number) => void
  className?: string
  /** Max numbered page buttons in the center group on `sm+` (default 5). */
  maxPageButtons?: number
}

/** Returns a sliding window of 1-based page numbers when `pageCount` exceeds `max`. */
export function getListingPaginationPages(
  page: number,
  pageCount: number,
  max = 5
): number[] {
  if (pageCount <= 0) return []
  if (pageCount <= max) {
    return Array.from({ length: pageCount }, (_, i) => i + 1)
  }

  let start = Math.max(1, page - Math.floor(max / 2))
  let end = start + max - 1
  if (end > pageCount) {
    end = pageCount
    start = Math.max(1, end - max + 1)
  }

  return Array.from({ length: end - start + 1 }, (_, i) => start + i)
}

function useCompactPagination() {
  const [compact, setCompact] = React.useState(false)

  React.useEffect(() => {
    const media = window.matchMedia("(max-width: 639px)")
    const update = () => setCompact(media.matches)
    update()
    media.addEventListener("change", update)
    return () => media.removeEventListener("change", update)
  }, [])

  return compact
}

const navButtonClass =
  "inline-flex h-9 shrink-0 items-center justify-center gap-1.5 rounded-md border border-border bg-white px-3 text-sm font-medium text-a7-text-gray transition-colors hover:bg-muted/40 disabled:pointer-events-none disabled:opacity-40 sm:h-10 sm:px-4"

const pageButtonClass =
  "inline-flex h-9 min-w-9 items-center justify-center rounded-md border border-border bg-white px-2 text-sm font-medium text-a7-text-gray transition-colors hover:bg-muted/40 sm:h-10 sm:min-w-10 sm:px-2.5"

const pageButtonActiveClass =
  "border-a7-black bg-a7-black text-white hover:bg-a7-black hover:text-white"

/**
 * Listing-style pagination: Back (left), numbered pages (center), Next (right).
 * On mobile: icon prev/next with a "Page X of Y" label (no numbered strip).
 */
export function ListingPagination({
  page,
  pageCount,
  onPageChange,
  className,
  maxPageButtons = 5,
}: ListingPaginationProps) {
  const compact = useCompactPagination()

  if (pageCount <= 1) return null

  const visibleMaxButtons = compact ? 3 : maxPageButtons
  const pages = getListingPaginationPages(page, pageCount, visibleMaxButtons)
  const canPrev = page > 1
  const canNext = page < pageCount

  return (
    <nav
      className={cn("flex w-full min-w-0 items-center justify-between gap-2 sm:gap-4", className)}
      aria-label="Pagination"
    >
      <button
        type="button"
        className={navButtonClass}
        disabled={!canPrev}
        onClick={() => onPageChange(page - 1)}
        aria-label="Previous page"
      >
        <ChevronLeft className="size-4 shrink-0" aria-hidden />
        <span className="hidden sm:inline">Back</span>
      </button>

      {compact ? (
        <p className="min-w-0 flex-1 px-1 text-center text-sm font-medium tabular-nums text-a7-text-gray">
          Page {page} of {pageCount}
        </p>
      ) : (
        <div className="flex min-w-0 flex-1 items-center justify-center gap-1.5 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-2 [&::-webkit-scrollbar]:hidden">
          {pages.map((pageNumber) => {
            const isActive = pageNumber === page
            return (
              <button
                key={pageNumber}
                type="button"
                aria-label={`Page ${pageNumber}`}
                aria-current={isActive ? "page" : undefined}
                className={cn(pageButtonClass, "shrink-0", isActive && pageButtonActiveClass)}
                onClick={() => onPageChange(pageNumber)}
              >
                {pageNumber}
              </button>
            )
          })}
        </div>
      )}

      <button
        type="button"
        className={navButtonClass}
        disabled={!canNext}
        onClick={() => onPageChange(page + 1)}
        aria-label="Next page"
      >
        <span className="hidden sm:inline">Next</span>
        <ChevronRight className="size-4 shrink-0" aria-hidden />
      </button>
    </nav>
  )
}

ListingPagination.displayName = "ListingPagination"
