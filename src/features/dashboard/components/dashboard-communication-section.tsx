"use client"

import { useState } from "react"

import { useMounted } from "@/shared/hooks/use-mounted"
import { cn } from "@/shared/lib/cn"
import {
  ChartCard,
  ChartLegend,
  DashboardGaugeChart,
  DashboardLineChart,
  type ChartSeries,
} from "@/shared/ui/dashboard"
import { Tabs, TabsList, TabsTrigger } from "@/shared/ui/tabs"
import type { CommunicationDataPoint, EfficiencyMetric } from "@/features/dashboard/content/dashboard-content-types"

const tabListClassName =
  "mb-4 flex h-auto w-full rounded-full bg-muted p-1"

const tabTriggerClassName =
  "flex-1 min-w-0 truncate rounded-full px-2 py-1.5 text-center text-xs text-muted-foreground data-[state=active]:bg-white data-[state=active]:text-foreground data-[state=active]:shadow-sm sm:px-4 sm:text-sm"

const activeTabTriggerClassName = cn(
  tabTriggerClassName,
  "bg-white text-foreground shadow-sm"
)

export type DashboardCommunicationSectionProps = {
  data: CommunicationDataPoint[]
  callsSeries: ChartSeries[]
  callsTooltipSeries: ChartSeries[]
  whatsappSeries: ChartSeries[]
  xAxisTicks: string[]
  efficiency: EfficiencyMetric[]
  className?: string
}

export function DashboardCommunicationSection({
  data,
  callsSeries,
  callsTooltipSeries,
  whatsappSeries,
  xAxisTicks,
  efficiency,
  className,
}: DashboardCommunicationSectionProps) {
  const mounted = useMounted()
  const [activeTab, setActiveTab] = useState("calls")
  const isCallsTab = activeTab === "calls"

  const legendItems = callsTooltipSeries.map((item) => ({
    label: item.label,
    color: item.color,
  }))

  const chartSeries = isCallsTab ? callsSeries : whatsappSeries

  return (
    <ChartCard
      title="Communication Summary"
      description="Performance Overview & Trends"
      showInfo
      showExport={false}
      showRefresh={false}
      className={cn("flex h-full flex-col xl:col-span-2", className)}
      contentClassName="flex flex-1 flex-col"
    >
      {mounted ? (
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className={tabListClassName}>
            <TabsTrigger value="calls" className={tabTriggerClassName}>
              Calls Performance
            </TabsTrigger>
            <TabsTrigger value="whatsapp" className={tabTriggerClassName}>
              Whatsapp Performance
            </TabsTrigger>
          </TabsList>
        </Tabs>
      ) : (
        <div className={cn(tabListClassName, "gap-0")} aria-hidden>
          <span className={cn(activeTabTriggerClassName, "flex-1 text-center")}>Calls Performance</span>
          <span className={cn(tabTriggerClassName, "text-center")}>Whatsapp Performance</span>
        </div>
      )}

      <ChartLegend items={legendItems} className="mb-3" />

      <div className="flex min-h-[220px] flex-1 flex-col">
        <DashboardLineChart
          data={data}
          series={chartSeries}
          xKey="month"
          xTicks={xAxisTicks}
          className="h-full"
        />
      </div>

      <div className="mt-5 flex flex-col border-t border-border pt-4">
        <p className="mb-3 font-inter text-sm font-semibold text-neutral-900 font-inter">Efficiency</p>
        <div className="grid flex-1 gap-3 sm:grid-cols-2 sm:items-stretch">
          {efficiency.map((metric) => (
            <DashboardGaugeChart
              key={metric.label}
              value={metric.value}
              label={metric.label}
              suffix={metric.suffix}
              max={metric.max}
              color={metric.color}
              className="h-full"
            />
          ))}
        </div>
      </div>
    </ChartCard>
  )
}

DashboardCommunicationSection.displayName = "DashboardCommunicationSection"
