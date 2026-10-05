"use client"

import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts"

import { CHART_PALETTE } from "@/shared/ui/dashboard/charts/chart-config"
import { cn } from "@/shared/lib/cn"

export type DonutChartItem = {
  name: string
  value: number
  color?: string
}

export type DashboardDonutChartProps = {
  data: DonutChartItem[]
  height?: number
  innerRadius?: number
  outerRadius?: number
  className?: string
  showLegend?: boolean
  legendLayout?: "default" | "grid"
}

function formatPercent(value: number, total: number) {
  if (total <= 0) return "0%"
  return `${((value / total) * 100).toFixed(1)}%`
}

function DonutLegendGrid({ data, total }: { data: DonutChartItem[]; total: number }) {
  return (
    <div className="mt-2 grid grid-cols-2 gap-x-4 gap-y-2">
      {data.map((item) => (
        <div key={item.name} className="flex items-center gap-2 text-xs">
          <span
            className="size-2 shrink-0 rounded-full"
            style={{ backgroundColor: item.color }}
            aria-hidden
          />
          <span className="min-w-0 truncate text-muted-foreground">{item.name}</span>
          <span className="ml-auto shrink-0 font-medium text-foreground">
            {item.value} ({formatPercent(item.value, total)})
          </span>
        </div>
      ))}
    </div>
  )
}

export function DashboardDonutChart({
  data,
  height = 220,
  innerRadius = 62,
  outerRadius = 92,
  className,
  showLegend = true,
  legendLayout = "grid",
}: DashboardDonutChartProps) {
  const chartData = data.map((item, index) => ({
    ...item,
    color: item.color ?? CHART_PALETTE[index % CHART_PALETTE.length],
  }))
  const activeSlices = chartData.filter((item) => item.value > 0)
  const total = chartData.reduce((sum, item) => sum + item.value, 0)

  return (
    <div data-slot="dashboard-donut-chart" className={cn("w-full", className)}>
      <div style={{ height }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={[{ name: "track", value: 1 }]}
              dataKey="value"
              cx="50%"
              cy="50%"
              innerRadius={innerRadius}
              outerRadius={outerRadius}
              fill="#f3f4f6"
              stroke="none"
              isAnimationActive={false}
            />
            <Pie
              data={activeSlices.length > 0 ? activeSlices : [{ name: "Empty", value: 1, color: "#e5e7eb" }]}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={innerRadius}
              outerRadius={outerRadius}
              paddingAngle={activeSlices.length > 1 ? 2 : 0}
              stroke="none"
              isAnimationActive={false}
            >
              {(activeSlices.length > 0 ? activeSlices : [{ name: "Empty", value: 1, color: "#e5e7eb" }]).map(
                (entry) => (
                  <Cell key={entry.name} fill={entry.color} />
                )
              )}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      {showLegend && legendLayout === "grid" ? (
        <DonutLegendGrid data={chartData} total={total} />
      ) : null}
    </div>
  )
}

DashboardDonutChart.displayName = "DashboardDonutChart"
