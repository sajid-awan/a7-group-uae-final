"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@/shared/ui/button"
import { cn } from "@/shared/lib/cn"

export type TablePaginationBarProps = {
  page: number
  pageCount: number
  onPageChange: (page: number) => void
  className?: string
  /** Shown on the left, e.g. "Showing 1–5 of 24". */
  summary?: string
}

export function TablePaginationBar({
  page,
  pageCount,
  onPageChange,
  className,
  summary,
}: TablePaginationBarProps) {
  const canPrev = page > 1
  const canNext = page < pageCount

  return (
    <div
      className={cn(
        "flex flex-col gap-3 border-t border-border bg-muted/20 px-3 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-4",
        className
      )}
    >
      <p className="text-center text-sm text-muted-foreground sm:text-left">
        {summary ?? `Page ${page} of ${Math.max(1, pageCount)}`}
      </p>
      <div className="flex items-center justify-center gap-2 sm:justify-end">
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="h-9 min-w-9 flex-1 gap-1 px-3 sm:h-10 sm:min-w-0 sm:flex-none sm:px-4"
          disabled={!canPrev}
          onClick={() => onPageChange(page - 1)}
          aria-label="Previous page"
        >
          <ChevronLeft className="size-4 shrink-0" />
          <span className="sm:hidden">Prev</span>
        </Button>
        <span className="shrink-0 px-1 text-sm font-medium tabular-nums text-a7-text-gray sm:hidden">
          {page}/{pageCount}
        </span>
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="h-9 min-w-9 flex-1 gap-1 px-3 sm:h-10 sm:min-w-0 sm:flex-none sm:px-4"
          disabled={!canNext}
          onClick={() => onPageChange(page + 1)}
          aria-label="Next page"
        >
          <span className="sm:hidden">Next</span>
          <ChevronRight className="size-4 shrink-0" />
        </Button>
      </div>
    </div>
  )
}
