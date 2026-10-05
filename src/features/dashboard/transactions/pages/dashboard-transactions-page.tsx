"use client"

import { useMemo } from "react"

import { getDashboardTransactionsMockData } from "../content/transactions-mock-data"
import { DashboardTransactionsView } from "../components/transactions-view"
import { cn } from "@/shared/lib/cn"

export type DashboardTransactionsPageProps = {
  className?: string
}

export function DashboardTransactionsPage({ className }: DashboardTransactionsPageProps) {
  const transactions = useMemo(() => getDashboardTransactionsMockData(), [])

  return (
    <DashboardTransactionsView
      transactions={transactions}
      className={cn(className)}
      onAddTransaction={() => undefined}
      onExport={() => undefined}
      onViewMore={() => undefined}
    />
  )
}

DashboardTransactionsPage.displayName = "DashboardTransactionsPage"
