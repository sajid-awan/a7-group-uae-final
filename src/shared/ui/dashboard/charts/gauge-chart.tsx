"use client"

import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts"

import { cn } from "@/shared/lib/cn"

export type DashboardGaugeChartProps = {
  value: number
  max?: number
  label: string
  suffix?: string
  color?: string
  trackColor?: string
  height?: number
  className?: string
}

export function DashboardGaugeChart({
  value,
  max = 100,
  label,
  suffix = "%",
  color = "#8D6E63",
  trackColor = "#e8eaed",
  height = 140,
  className,
}: DashboardGaugeChartProps) {
  const percent = Math.min(100, Math.round((value / max) * 100))
  const data = [
    { name: "value", value: percent },
    { name: "rest", value: 100 - percent },
  ]

  return (
    <div
      data-slot="dashboard-gauge-chart"
      className={cn(
        "flex flex-col items-center rounded-xl bg-neutral-50 px-4 py-3",
        className
      )}
    >
      <p className="text-center font-semibold text-xs text-black">{label}</p>
      <div className="relative w-full flex-1 text-center" style={{ minHeight: height }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              startAngle={90}
              endAngle={-270}
              innerRadius="68%"
              outerRadius="88%"
              cx="50%"
              cy="50%"
              stroke="none"
            >
              <Cell fill={color} />
              <Cell fill={trackColor} />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <p className="text-xl font-semibold leading-none text-foreground">
            {value}
            {suffix}
          </p>
        </div>
      </div>
    </div>
  )
}

DashboardGaugeChart.displayName = "DashboardGaugeChart"
