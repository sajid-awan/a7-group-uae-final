"use client"

import { cn } from "@/shared/lib/cn"
import type { DashboardOverviewContent } from "@/features/dashboard/content/dashboard-content-types"
import { DashboardCommunicationSection } from "./dashboard-communication-section"
import { DashboardConversionRatesSection } from "./dashboard-conversion-rates-section"
import { DashboardLeadSourceSection } from "./dashboard-lead-source-section"
import { DashboardLeadsByTypeSection } from "./dashboard-leads-by-type-section"
import { DashboardRevenueSection } from "./dashboard-revenue-section"
import { DashboardStageDistributionSection } from "./dashboard-stage-distribution-section"

export type DashboardAnalyticsSectionsProps = {
  content: Pick<
    DashboardOverviewContent,
    "communication" | "leadSource" | "leadsByType" | "stageDistribution" | "revenue" | "conversionRates"
  >
  className?: string
}

export function DashboardAnalyticsSections({ content, className }: DashboardAnalyticsSectionsProps) {
  return (
    <div className={cn("space-y-4", className)}>
      <div className="grid items-stretch gap-4 xl:grid-cols-3">
        <DashboardCommunicationSection
          data={content.communication.data}
          callsSeries={content.communication.series}
          callsTooltipSeries={content.communication.tooltipSeries}
          whatsappSeries={content.communication.whatsappSeries}
          xAxisTicks={content.communication.xAxisTicks}
          efficiency={content.communication.efficiency}
        />
        <DashboardLeadSourceSection
          chartData={content.leadSource.chartData}
          rows={content.leadSource.rows}
          platforms={content.leadSource.platforms}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <DashboardLeadsByTypeSection data={content.leadsByType} />
        <DashboardStageDistributionSection
          data={content.stageDistribution.data}
          series={content.stageDistribution.series}
        />
        <DashboardRevenueSection data={content.revenue.data} series={content.revenue.series} />
        <DashboardConversionRatesSection data={content.conversionRates} />
      </div>
    </div>
  )
}

DashboardAnalyticsSections.displayName = "DashboardAnalyticsSections"
