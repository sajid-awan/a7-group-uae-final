"use client"

import type { DonutChartItem } from "@/shared/ui/dashboard"
import { ChartCard, DashboardDonutChart } from "@/shared/ui/dashboard"

export type DashboardConversionRatesSectionProps = {
  data: DonutChartItem[]
  className?: string
}

export function DashboardConversionRatesSection({
  data,
  className,
}: DashboardConversionRatesSectionProps) {
  return (
    <ChartCard
      title="Conversion Rates"
      description="Revenue Share by Category"
      showInfo
      className={className}
    >
      <DashboardDonutChart data={data} height={200} legendLayout="grid" />
    </ChartCard>
  )
}

DashboardConversionRatesSection.displayName = "DashboardConversionRatesSection"
