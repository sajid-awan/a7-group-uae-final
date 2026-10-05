"use client"

import { Plus } from "lucide-react"
import { useEffect, useMemo, useState } from "react"

import { dashboardTransactionsDateRange, dashboardTransactionsPageCopy } from "../content/transactions-mock-data"
import type { DashboardTransaction, DashboardTransactionStat } from "../content/transactions-types"
import {
  filterDashboardTransactionsByDateRange,
  getDashboardTransactionsStats,
  paginateDashboardTransactions,
} from "../utils/transactions-filters"
import { DashboardTransactionsGrid } from "./transactions-grid"
import { DashboardTransactionsStatsRow } from "./transactions-stats-row"
import { DashboardTransactionsToolbar } from "./transactions-toolbar"
import { cn } from "@/shared/lib/cn"
import { Button } from "@/shared/ui/button"
import { DashboardPageHeader } from "@/shared/ui/dashboard/dashboard-page-header"
import type { DateRangeValue } from "@/shared/ui/date-range-picker"
import { ListingPagination } from "@/shared/ui/listing-pagination"

const PAGE_SIZE = 4

export type DashboardTransactionsViewProps = {
  transactions: DashboardTransaction[]
  stats?: DashboardTransactionStat[]
  initialDateRange?: DateRangeValue
  onAddTransaction?: () => void
  onExport?: () => void
  onViewMore?: (transaction: DashboardTransaction) => void
  className?: string
}

export function DashboardTransactionsView({
  transactions,
  stats: statsProp,
  initialDateRange = {
    from: dashboardTransactionsDateRange.from,
    to: dashboardTransactionsDateRange.to,
  },
  onAddTransaction,
  onExport,
  onViewMore,
  className,
}: DashboardTransactionsViewProps) {
  const [page, setPage] = useState(1)
  const [dateRange, setDateRange] = useState<DateRangeValue>(initialDateRange)

  useEffect(() => {
    setPage(1)
  }, [dateRange.from, dateRange.to])

  const filteredTransactions = useMemo(
    () => filterDashboardTransactionsByDateRange(transactions, dateRange.from, dateRange.to),
    [transactions, dateRange.from, dateRange.to]
  )

  const stats = useMemo(
    () => statsProp ?? getDashboardTransactionsStats(filteredTransactions),
    [statsProp, filteredTransactions]
  )

  const { items: visibleTransactions, pageCount } = useMemo(
    () => paginateDashboardTransactions(filteredTransactions, page, PAGE_SIZE),
    [filteredTransactions, page]
  )

  return (
    <div className={cn("space-y-5 p-4 font-inter sm:p-6", className)}>
      <DashboardPageHeader
        title={dashboardTransactionsPageCopy.title}
        subtitle={dashboardTransactionsPageCopy.subtitle}
        actions={
          <Button
            type="button"
            size="sm"
            className="shrink-0 gap-2 rounded-lg px-4"
            onClick={onAddTransaction}
          >
            <Plus className="size-4" aria-hidden />
            {dashboardTransactionsPageCopy.addButtonLabel}
          </Button>
        }
      />
      <DashboardTransactionsStatsRow stats={stats} />
      <DashboardTransactionsToolbar
        dateRange={dateRange}
        onDateRangeChange={setDateRange}
        onExport={onExport}
      />
      <DashboardTransactionsGrid transactions={visibleTransactions} onViewMore={onViewMore} />
      {pageCount > 1 ? (
        <ListingPagination page={page} pageCount={pageCount} onPageChange={setPage} />
      ) : null}
    </div>
  )
}

DashboardTransactionsView.displayName = "DashboardTransactionsView"
