"use client"

import { Download } from "lucide-react"

import { dashboardTransactionsPageCopy } from "../content/transactions-mock-data"
import { cn } from "@/shared/lib/cn"
import { Button } from "@/shared/ui/button"
import { DateRangePicker, type DateRangeValue } from "@/shared/ui/date-range-picker"

export type DashboardTransactionsToolbarProps = {
  dateRange: DateRangeValue
  onDateRangeChange?: (range: DateRangeValue) => void
  onExport?: () => void
  className?: string
}

export function DashboardTransactionsToolbar({
  dateRange,
  onDateRangeChange,
  onExport,
  className,
}: DashboardTransactionsToolbarProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
        className
      )}
    >
      <DateRangePicker
        value={dateRange}
        onChange={onDateRangeChange}
        placeholder={dashboardTransactionsPageCopy.dateRangeLabel}
        className="sm:min-w-[280px]"
      />

      <Button
        type="button"
        variant="outline"
        size="sm"
        className="h-8 shrink-0 gap-2 self-start rounded-lg border-neutral-200 bg-white px-3 text-xs font-medium text-neutral-900 shadow-none sm:self-auto"
        onClick={onExport}
      >
        <Download className="size-3.5" aria-hidden />
        {dashboardTransactionsPageCopy.exportLabel}
      </Button>
    </div>
  )
}

DashboardTransactionsToolbar.displayName = "DashboardTransactionsToolbar"
