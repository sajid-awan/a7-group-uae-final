"use client"

import { useId } from "react"
import {
  Area,
  AreaChart,
  CartesianGrid,
  ComposedChart,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts"

import type { ChartSeries } from "@/shared/ui/dashboard/charts/chart-config"
import { LINE_CHART_SERIES_GRADIENT } from "@/shared/ui/dashboard/charts/chart-config"
import { cn } from "@/shared/lib/cn"

type DataPoint = Record<string, string | number>

export type DashboardLineChartProps = {
  data: DataPoint[]
  series: ChartSeries[]
  xKey: string
  variant?: "line" | "area"
  height?: number
  className?: string
  xTicks?: string[]
  showGradient?: boolean
}

function seriesGradientId(baseId: string, seriesKey: string) {
  return `${baseId}-${seriesKey}`
}

export function DashboardLineChart({
  data,
  series,
  xKey,
  variant = "line",
  height,
  className,
  xTicks,
  showGradient = true,
}: DashboardLineChartProps) {
  const gradientBaseId = `line-chart-gradient-${useId().replace(/:/g, "")}`
  const useLineGradient = variant === "line" && showGradient && series.length > 0
  const fillsContainer = height == null
  const chartHeight = height ?? 280
  const ChartComponent = variant === "area" ? AreaChart : useLineGradient ? ComposedChart : LineChart

  const chartChildren = (
    <>
      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e8eaed" />
      <XAxis
        dataKey={xKey}
        ticks={xTicks}
        tickLine={false}
        axisLine={false}
        tick={{ fontSize: 11, fill: "#9ca3af" }}
        dy={8}
      />
      <YAxis
        domain={[0, "dataMax + 8"]}
        tickLine={false}
        axisLine={false}
        tick={{ fontSize: 11, fill: "#9ca3af" }}
        width={32}
        allowDecimals={false}
      />
      {useLineGradient ? (
        <defs>
          {series.map((item) => (
            <linearGradient
              key={item.key}
              id={seriesGradientId(gradientBaseId, item.key)}
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop
                offset="0%"
                stopColor={item.color}
                stopOpacity={LINE_CHART_SERIES_GRADIENT.topOpacity}
              />
              <stop
                offset="100%"
                stopColor={item.color}
                stopOpacity={LINE_CHART_SERIES_GRADIENT.bottomOpacity}
              />
            </linearGradient>
          ))}
        </defs>
      ) : null}
      {useLineGradient
        ? series.map((item, index) => (
            <Area
              key={`area-${item.key}`}
              type="monotone"
              dataKey={item.key}
              stroke="none"
              fill={`url(#${seriesGradientId(gradientBaseId, item.key)})`}
              fillOpacity={1}
              baseValue={0}
              isAnimationActive={false}
              legendType="none"
              activeDot={false}
              dot={false}
              zIndex={index}
            />
          ))
        : null}
      {series.map((item, index) =>
        variant === "area" ? (
          <Area
            key={item.key}
            type="monotone"
            dataKey={item.key}
            name={item.label}
            stroke={item.color}
            fill={item.color}
            fillOpacity={0.06}
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4, strokeWidth: 0 }}
          />
        ) : (
          <Line
            key={item.key}
            type="monotone"
            dataKey={item.key}
            name={item.label}
            stroke={item.color}
            strokeWidth={item.key === "answered" || item.key === "missed" ? 3 : 2.5}
            dot={false}
            activeDot={{ r: 4, strokeWidth: 0, fill: item.color }}
            isAnimationActive={false}
            zIndex={useLineGradient ? index + series.length : index + 1}
          />
        )
      )}
    </>
  )

  return (
    <div
      data-slot="dashboard-line-chart"
      className={cn("w-full min-h-[200px]", fillsContainer && "h-full", className)}
      style={fillsContainer ? undefined : { height: chartHeight }}
    >
      <ResponsiveContainer width="100%" height="100%" minHeight={fillsContainer ? 200 : chartHeight}>
        <ChartComponent data={data} margin={{ top: 12, right: 12, left: 4, bottom: 8 }}>
          {chartChildren}
        </ChartComponent>
      </ResponsiveContainer>
    </div>
  )
}

DashboardLineChart.displayName = "DashboardLineChart"
