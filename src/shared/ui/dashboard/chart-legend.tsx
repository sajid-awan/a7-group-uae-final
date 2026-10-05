import type { ChartLegendItem } from "@/shared/ui/dashboard/charts/chart-config"
import { cn } from "@/shared/lib/cn"

export type ChartLegendProps = {
  items: ChartLegendItem[]
  className?: string
}

export function ChartLegend({ items, className }: ChartLegendProps) {
  return (
    <div
      data-slot="chart-legend"
      className={cn("flex flex-wrap items-center gap-x-4 gap-y-2 sm:justify-between", className)}
    >
      {items.map((item) => (
        <span
          key={item.label}
          className="inline-flex items-center gap-1.5 text-xs text-muted-foreground"
        >
          <span
            className="size-2 shrink-0 rounded-full"
            style={{ backgroundColor: item.color }}
            aria-hidden
          />
          {item.label}
        </span>
      ))}
    </div>
  )
}

ChartLegend.displayName = "ChartLegend"
