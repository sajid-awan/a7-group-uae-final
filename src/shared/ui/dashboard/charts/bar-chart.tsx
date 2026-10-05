"use client"

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  LabelList,
  Legend,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts"

import type { ChartSeries } from "@/shared/ui/dashboard/charts/chart-config"
import { CHART_PALETTE } from "@/shared/ui/dashboard/charts/chart-config"
import { cn } from "@/shared/lib/cn"

type DataPoint = Record<string, string | number>

export type DashboardBarChartProps = {
  data: DataPoint[]
  xKey: string
  yKey?: string
  colorKey?: string
  series?: ChartSeries[]
  /** Column bars (default) or horizontal row bars */
  layout?: "vertical" | "horizontal"
  stacked?: boolean
  grouped?: boolean
  height?: number
  className?: string
  showLegend?: boolean
  colors?: readonly string[]
  yDomain?: [number, number | string]
  showBarLabels?: boolean
  shareKey?: string
  yAxisTickFormatter?: (value: number) => string
  hideCategoryAxis?: boolean
  barCategoryGap?: string | number
  barSize?: number
  maxBarSize?: number
  barRadius?: [number, number, number, number]
  legendAlign?: "left" | "right"
}

function BarValueLabel({
  x,
  y,
  width,
  value,
  payload,
  shareKey,
}: {
  x?: number
  y?: number
  width?: number
  value?: number | string
  payload?: DataPoint
  shareKey?: string
}) {
  if (x == null || y == null || width == null) return null

  const share = shareKey && payload ? payload[shareKey] : undefined
  const displayValue = payload?.labelValue ?? value
  const label =
    share != null
      ? `${displayValue} (${Number(share).toFixed(2)}%)`
      : String(displayValue ?? "")

  return (
    <text
      x={x + width / 2}
      y={y - 8}
      fill="#6b7280"
      textAnchor="middle"
      fontSize={11}
      fontWeight={500}
    >
      {label}
    </text>
  )
}

export function DashboardBarChart({
  data,
  xKey,
  yKey = "value",
  colorKey = "color",
  series,
  layout = "vertical",
  stacked = false,
  grouped = false,
  height = 260,
  className,
  showLegend = false,
  colors = CHART_PALETTE,
  yDomain,
  showBarLabels = false,
  shareKey,
  yAxisTickFormatter,
  hideCategoryAxis = false,
  barCategoryGap,
  barSize = 40,
  maxBarSize = 48,
  barRadius,
  legendAlign = "left",
}: DashboardBarChartProps) {
  // Recharts 3: layout="horizontal" = column bars, layout="vertical" = row bars
  const isColumnChart = layout === "vertical"
  const rechartsLayout = isColumnChart ? "horizontal" : "vertical"
  const valueDomain = yDomain ?? [0, "auto"]
  const columnRadius: [number, number, number, number] = barRadius ?? [4, 4, 0, 0]
  const rowRadius: [number, number, number, number] = [0, 4, 4, 0]
  const radius = isColumnChart ? columnRadius : rowRadius

  return (
    <div
      data-slot="dashboard-bar-chart"
      className={cn("w-full min-h-[200px]", className)}
      style={{ height }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          layout={rechartsLayout}
          barCategoryGap={barCategoryGap}
          margin={{
            top: showBarLabels && isColumnChart ? 28 : 12,
            right: 12,
            left: isColumnChart ? 4 : hideCategoryAxis ? 0 : 8,
            bottom: 4,
          }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={!isColumnChart}
            horizontal={isColumnChart}
            stroke="#e8eaed"
          />
          {isColumnChart ? (
            <>
              <XAxis
                type="category"
                dataKey={xKey}
                tickLine={false}
                axisLine={false}
                tick={{ fontSize: 11, fill: "#9ca3af" }}
                interval={0}
                tickFormatter={(value) =>
                  String(value).length > 10 ? `${String(value).slice(0, 9)}…` : String(value)
                }
              />
              <YAxis
                type="number"
                domain={valueDomain}
                tickLine={false}
                axisLine={false}
                tick={{ fontSize: 11, fill: "#9ca3af" }}
                width={44}
                allowDecimals={false}
                tickCount={6}
                tickFormatter={yAxisTickFormatter}
              />
            </>
          ) : (
            <>
              <XAxis
                type="number"
                domain={valueDomain}
                tickLine={false}
                axisLine={false}
                tick={{ fontSize: 11, fill: "#9ca3af" }}
                tickFormatter={yAxisTickFormatter}
              />
              <YAxis
                type="category"
                dataKey={xKey}
                tickLine={false}
                axisLine={false}
                tick={hideCategoryAxis ? false : { fontSize: 11, fill: "#9ca3af" }}
                width={hideCategoryAxis ? 0 : 80}
                hide={hideCategoryAxis}
              />
            </>
          )}
          {showLegend ? (
            <Legend
              verticalAlign="top"
              align={legendAlign}
              height={28}
              iconType="circle"
              wrapperStyle={{ fontSize: 12, paddingBottom: 8 }}
            />
          ) : null}
          {series?.length ? (
            series.map((item) => (
              <Bar
                key={item.key}
                dataKey={item.key}
                name={item.label}
                fill={item.color}
                radius={radius}
                stackId={stacked ? "stack" : undefined}
                barSize={stacked ? 48 : grouped ? 28 : barSize}
                maxBarSize={stacked ? 56 : grouped ? 36 : maxBarSize}
              />
            ))
          ) : (
            <Bar dataKey={yKey} radius={radius} barSize={barSize} maxBarSize={maxBarSize} fill={CHART_PALETTE[0]}>
              {data.map((entry, index) => (
                <Cell
                  key={`${entry[xKey]}-${index}`}
                  fill={
                    colorKey in entry && entry[colorKey]
                      ? String(entry[colorKey])
                      : colors[index % colors.length]
                  }
                />
              ))}
              {showBarLabels && isColumnChart ? (
                <LabelList
                  dataKey={yKey}
                  content={(rawProps) => {
                    const props = rawProps as {
                      x?: number
                      y?: number
                      width?: number
                      value?: number | string
                      payload?: DataPoint
                    }

                    return (
                      <BarValueLabel
                        x={props.x}
                        y={props.y}
                        width={props.width}
                        value={props.value}
                        payload={props.payload}
                        shareKey={shareKey}
                      />
                    )
                  }}
                />
              ) : null}
            </Bar>
          )}
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

DashboardBarChart.displayName = "DashboardBarChart"
