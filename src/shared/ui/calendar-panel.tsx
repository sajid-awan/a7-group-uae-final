"use client"

import * as React from "react"

import { Button } from "@/shared/ui/button"
import { cn } from "@/shared/lib/cn"

export function CalendarPickerPanel({
  className,
  children,
  summary,
  onCancel,
  onDone,
}: {
  className?: string
  children: React.ReactNode
  /** Shown above the footer row on the left (e.g. formatted range). */
  summary?: React.ReactNode
  onCancel?: () => void
  onDone?: () => void
}) {
  return (
    <div
      className={cn(
        "w-fit min-w-0 rounded-xl border border-border bg-card p-4 shadow-[0_8px_30px_rgb(0,0,0,0.08)]",
        className
      )}
    >
      {children}
      <div
        className={cn(
          "mt-4 flex flex-wrap gap-3 border-t border-border pt-4",
          summary != null ? "items-center justify-between" : "justify-end"
        )}
      >
        {summary != null ? <div className="min-w-0 flex-1 text-sm text-a7-text-gray">{summary}</div> : null}
        <div className="flex shrink-0 justify-end gap-2">
          <Button
            type="button"
            variant="outline"
            size="xs"
            shape="square"
            className="h-9 min-h-9 border-[#e0e0e0] bg-[#f7f7f7] px-4 text-sm font-medium text-a7-text-gray hover:bg-[#efefef] dark:border-white/15 dark:bg-white/5 dark:hover:bg-white/10"
            onClick={onCancel}
          >
            Cancel
          </Button>
          <Button type="button" variant="default" size="xs" shape="square" className="h-9 min-h-9 px-5 text-sm font-medium" onClick={onDone}>
            Done
          </Button>
        </div>
      </div>
    </div>
  )
}
