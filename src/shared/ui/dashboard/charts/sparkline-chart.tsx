"use client"

import { useId } from "react"
import { Area, AreaChart, Line, LineChart, ResponsiveContainer } from "recharts"

import { CHART_COLORS, SPARKLINE_GRADIENT } from "@/shared/ui/dashboard/charts/chart-config"
import { cn } from "@/shared/lib/cn"

export type SparklineTone = "green" | "orange" | "red"

const SPARKLINE_TONES: Record<SparklineTone, string> = {
  green: CHART_COLORS.green,
  orange: CHART_COLORS.orange,
  red: CHART_COLORS.red,
}

export type SparklineChartProps = {
  data: { value: number }[]
  color?: string
  tone?: SparklineTone
  height?: number
  className?: string
  showGradient?: boolean
}

export function SparklineChart({
  data,
  color,
  tone = "green",
  height = 36,
  className,
  showGradient = true,
}: SparklineChartProps) {
  const gradientId = `sparkline-gradient-${useId().replace(/:/g, "")}`
  const strokeColor = color ?? SPARKLINE_TONES[tone]

  return (
    <div data-slot="sparkline-chart" className={cn("w-full min-w-[72px]", className)} style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        {showGradient ? (
          <AreaChart data={data} margin={{ top: 4, right: 0, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={strokeColor} stopOpacity={SPARKLINE_GRADIENT.topOpacity} />
                <stop offset="100%" stopColor={strokeColor} stopOpacity={SPARKLINE_GRADIENT.bottomOpacity} />
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              dataKey="value"
              stroke={strokeColor}
              fill={`url(#${gradientId})`}
              fillOpacity={1}
              strokeWidth={2}
              dot={false}
              isAnimationActive={false}
            />
          </AreaChart>
        ) : (
          <LineChart data={data} margin={{ top: 2, right: 0, left: 0, bottom: 0 }}>
            <Line
              type="monotone"
              dataKey="value"
              stroke={strokeColor}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        )}
      </ResponsiveContainer>
    </div>
  )
}

SparklineChart.displayName = "SparklineChart"
