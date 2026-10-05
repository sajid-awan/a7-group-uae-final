"use client"

import { ChartCard, ChartLegend, DashboardBarChart, SparklineChart } from "@/shared/ui/dashboard"
import { cn } from "@/shared/lib/cn"
import type { LeadSourceChartPoint, LeadSourceRow } from "@/features/dashboard/content/dashboard-content-types"

const LEAD_SOURCE_BAR_SIZE = 14
const LEAD_SOURCE_BAR_RADIUS: [number, number, number, number] = [
  LEAD_SOURCE_BAR_SIZE / 2,
  LEAD_SOURCE_BAR_SIZE / 2,
  0,
  0,
]

export type DashboardLeadSourceSectionProps = {
  chartData: LeadSourceChartPoint[]
  rows: LeadSourceRow[]
  platforms: { label: string; color: string }[]
  className?: string
}

function formatShare(value: number) {
  return value.toFixed(2)
}

function formatLeads(value: number) {
  return String(value).padStart(2, "0")
}

export function DashboardLeadSourceSection({
  chartData,
  rows,
  platforms,
  className,
}: DashboardLeadSourceSectionProps) {
  return (
    <ChartCard
      title="Lead Source"
      description="Distribution by Platform"
      showInfo
      showExport={false}
      showRefresh={false}
      className={cn("h-full", className)}
    >
      <DashboardBarChart
        data={chartData}
        xKey="platform"
        yDomain={[0, 1000]}
        showBarLabels
        shareKey="share"
        height={260}
        barSize={LEAD_SOURCE_BAR_SIZE}
        maxBarSize={LEAD_SOURCE_BAR_SIZE}
        barRadius={LEAD_SOURCE_BAR_RADIUS}
        barCategoryGap="32%"
      />

      <div className="mt-6 border-t border-border pt-4">
        <p className="mb-3 font-inter text-sm font-semibold text-neutral-900 font-inter">Platform</p>
        <ChartLegend items={platforms} className="mb-4 justify-start gap-x-4" />

        <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.4fr)] gap-3 border-b border-border pb-2 text-xs font-medium text-muted-foreground">
          <span>Leads</span>
          <span>Share %</span>
          <span className="text-right">Trend</span>
        </div>

        <div className="divide-y divide-border">
          {rows.map((row) => (
            <div
              key={row.platform}
              className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.4fr)] items-center gap-3 py-3 text-sm"
            >
              <span className="font-medium text-foreground">{formatLeads(row.leads)}</span>
              <span className="text-muted-foreground">{formatShare(row.share)}%</span>
              <SparklineChart
                data={row.trend}
                color={row.trendColor}
                tone={row.trendTone}
                className={cn("ml-auto max-w-[120px]")}
                height={40}
              />
            </div>
          ))}
        </div>
      </div>
    </ChartCard>
  )
}

DashboardLeadSourceSection.displayName = "DashboardLeadSourceSection"
