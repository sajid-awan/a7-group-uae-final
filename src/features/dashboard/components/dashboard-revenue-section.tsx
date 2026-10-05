"use client"

import type { RevenueByTypePoint } from "@/features/dashboard/content/dashboard-content-types"
import { ChartCard, DashboardBarChart, type ChartSeries } from "@/shared/ui/dashboard"

export type DashboardRevenueSectionProps = {
  data: RevenueByTypePoint[]
  series: ChartSeries[]
  className?: string
}

const REVENUE_MAX = 25_000_000

function formatAxisMillions(value: number) {
  if (value === 0) return "0"
  return `${value / 1_000_000}M`
}

export function DashboardRevenueSection({ data, series, className }: DashboardRevenueSectionProps) {
  return (
    <ChartCard
      title="Expected Revenue by Type"
      description="Value Distribution Across Categories"
      showInfo
      className={className}
    >
      <DashboardBarChart
        data={data}
        xKey="type"
        series={series}
        grouped
        height={280}
        showLegend
        legendAlign="right"
        yDomain={[0, REVENUE_MAX]}
        yAxisTickFormatter={formatAxisMillions}
        barCategoryGap="20%"
      />
    </ChartCard>
  )
}

DashboardRevenueSection.displayName = "DashboardRevenueSection"
