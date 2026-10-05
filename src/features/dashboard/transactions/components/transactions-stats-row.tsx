"use client"

import type { DashboardTransactionStat } from "../content/transactions-types"
import { cn } from "@/shared/lib/cn"
import { AedIcon } from "@/shared/ui/aed-text"
import { StatCard } from "@/shared/ui/dashboard"

export type DashboardTransactionsStatsRowProps = {
  stats: DashboardTransactionStat[]
  className?: string
}

export function DashboardTransactionsStatsRow({ stats, className }: DashboardTransactionsStatsRowProps) {
  return (
    <section
      aria-label="Transaction metrics"
      className={cn("grid gap-4 sm:grid-cols-2 xl:grid-cols-5", className)}
    >
      {stats.map((stat) => (
        <StatCard
          key={stat.label}
          value={stat.value}
          label={stat.label}
          icon={AedIcon}
          iconTone={stat.iconTone}
        />
      ))}
    </section>
  )
}

DashboardTransactionsStatsRow.displayName = "DashboardTransactionsStatsRow"
