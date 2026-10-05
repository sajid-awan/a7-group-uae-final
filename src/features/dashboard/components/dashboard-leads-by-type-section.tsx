"use client"

import type { DonutChartItem } from "@/shared/ui/dashboard"
import { ChartCard, DashboardDonutChart } from "@/shared/ui/dashboard"

export type DashboardLeadsByTypeSectionProps = {
  data: DonutChartItem[]
  className?: string
}

export function DashboardLeadsByTypeSection({ data, className }: DashboardLeadsByTypeSectionProps) {
  return (
    <ChartCard
      title="Leads by Type"
      description="Distribution by Lead Category"
      showInfo
      className={className}
    >
      <DashboardDonutChart data={data} height={200} legendLayout="grid" />
    </ChartCard>
  )
}

DashboardLeadsByTypeSection.displayName = "DashboardLeadsByTypeSection"
