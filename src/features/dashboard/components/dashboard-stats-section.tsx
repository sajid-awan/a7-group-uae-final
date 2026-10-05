"use client"
import { DASHBOARD_STAT_ICONS } from "@/features/dashboard/utils/dashboard-stat-icons"
import { StatCard } from "@/shared/ui/dashboard"
import { cn } from "@/shared/lib/cn"
import type { DashboardStat } from "@/features/dashboard/content/dashboard-content-types"

export type DashboardStatsSectionProps = {
  stats: DashboardStat[]
  className?: string
}

export function DashboardStatsSection({ stats, className }: DashboardStatsSectionProps) {
  return (
    <section
      data-slot="dashboard-stats-section"
      className={cn("grid gap-4 sm:grid-cols-2 xl:grid-cols-4", className)}
      aria-label="Key metrics"
    >
      {stats.map((stat) => (
        <StatCard
          key={stat.label}
          value={stat.value}
          label={stat.label}
          icon={DASHBOARD_STAT_ICONS[stat.iconKey]}
          iconTone={stat.iconTone}
        />
      ))}
    </section>
  )
}

DashboardStatsSection.displayName = "DashboardStatsSection"
