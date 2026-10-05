"use client"

import type { DashboardTransaction } from "../content/transactions-types"
import { dashboardTransactionsPageCopy } from "../content/transactions-mock-data"
import { TransactionCard } from "@/shared/ui/dashboard"
import { cn } from "@/shared/lib/cn"

export type DashboardTransactionsGridProps = {
  transactions: DashboardTransaction[]
  onViewMore?: (transaction: DashboardTransaction) => void
  className?: string
}

export function DashboardTransactionsGrid({
  transactions,
  onViewMore,
  className,
}: DashboardTransactionsGridProps) {
  return (
    <div
      data-slot="transactions-grid"
      className={cn("grid grid-cols-1 gap-4 xl:grid-cols-2", className)}
    >
      {transactions.map((transaction) => (
        <TransactionCard
          key={transaction.id}
          transaction={transaction}
          onViewMore={onViewMore}
          viewMoreLabel={dashboardTransactionsPageCopy.viewMoreLabel}
        />
      ))}
    </div>
  )
}

DashboardTransactionsGrid.displayName = "DashboardTransactionsGrid"
