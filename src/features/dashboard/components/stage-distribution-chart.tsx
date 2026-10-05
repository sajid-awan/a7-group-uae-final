"use client"

import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts"
import type { ChartSeries } from "@/shared/ui/dashboard"
import { cn } from "@/shared/lib/cn"
import type { StageDistributionPoint } from "@/features/dashboard/content/dashboard-content-types"

type StageDistributionChartProps = {
  data: StageDistributionPoint[]
  series: ChartSeries[]
  className?: string
}

function SegmentLabel({
  x,
  y,
  width,
  height,
  value,
  seriesItem,
}: {
  x?: number
  y?: number
  width?: number
  height?: number
  value?: number
  seriesItem?: ChartSeries
}) {
  if (x == null || y == null || width == null || height == null || !value || value <= 0) {
    return null
  }

  if (width < 56) return null

  const shortLabel =
    seriesItem?.key === "buyerSecondary"
      ? "Buyer"
      : seriesItem?.key === "sellerSecondary"
        ? "Seller"
        : seriesItem?.key === "offPlan"
          ? "Off-Plan"
          : seriesItem?.label ?? ""

  const displayValue = String(value).padStart(seriesItem?.key === "buyerSecondary" ? 2 : 1, "0")

  return (
    <text
      x={x + width / 2}
      y={y + height / 2}
      fill="#ffffff"
      textAnchor="middle"
      dominantBaseline="middle"
      fontSize={11}
      fontWeight={600}
    >
      {`${shortLabel}: ${displayValue}`}
    </text>
  )
}

export function StageDistributionChart({
  data,
  series,
  className,
}: StageDistributionChartProps) {
  return (
    <div data-slot="stage-distribution-chart" className={cn("w-full", className)}>
      <div className="h-16 sm:h-[228px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 4, right: 8, left: 0, bottom: 4 }}
            barCategoryGap={0}
          >
            <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e8eaed" />
            <XAxis type="number" domain={[0, "dataMax"]} hide />
            <YAxis type="category" dataKey="category" hide width={0} />
            {series.map((item, index) => {
              const isFirst = index === 0
              const isLast = index === series.length - 1
              const segmentRadius: [number, number, number, number] = isFirst
                ? [4, 0, 0, 4]
                : isLast
                  ? [0, 4, 4, 0]
                  : [0, 0, 0, 0]

              return (
              <Bar
                key={item.key}
                dataKey={item.key}
                name={item.label}
                stackId="pipeline"
                fill={item.color}
                radius={segmentRadius}
                barSize={56}
                maxBarSize={64}
              >
                <LabelList
                  dataKey={item.key}
                  content={(rawProps) => {
                    const props = rawProps as {
                      x?: number
                      y?: number
                      width?: number
                      height?: number
                      value?: number
                    }
                    return (
                      <SegmentLabel
                        x={props.x}
                        y={props.y}
                        width={props.width}
                        height={props.height}
                        value={props.value}
                        seriesItem={item}
                      />
                    )
                  }}
                />
              </Bar>
              )
            })}
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 border-t border-border pt-4">
        <p className="mb-3 font-inter text-sm font-semibold text-neutral-900 font-inter">Platform</p>
        <div className="grid grid-cols-2 gap-x-6 gap-y-2">
          {series.map((item) => (
            <div key={item.key} className="flex items-center gap-2 text-xs text-muted-foreground">
              <span
                className="size-2 shrink-0 rounded-full"
                style={{ backgroundColor: item.color }}
                aria-hidden
              />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

StageDistributionChart.displayName = "StageDistributionChart"
