"use client"
import { StageDistributionChart } from "./stage-distribution-chart"
import { ChartCard } from "@/shared/ui/dashboard"
import type { ChartSeries } from "@/shared/ui/dashboard"
import type { StageDistributionPoint } from "@/features/dashboard/content/dashboard-content-types"

export type DashboardStageDistributionSectionProps = {
  data: StageDistributionPoint[]
  series: ChartSeries[]
  className?: string
}

export function DashboardStageDistributionSection({
  data,
  series,
  className,
}: DashboardStageDistributionSectionProps) {
  return (
    <ChartCard
      title="Stage Distribution"
      description="Lead Types Grouped by Stage Category"
      showInfo
      className={className}
    >
      <StageDistributionChart data={data} series={series} />
    </ChartCard>
  )
}

DashboardStageDistributionSection.displayName = "DashboardStageDistributionSection"
