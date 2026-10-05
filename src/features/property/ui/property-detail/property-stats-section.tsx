import {
  Bath,
  BedDouble,
  Car,
  CircleDollarSign,
  Home,
  Maximize,
  Ruler,
  Tag,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

import type { ProjectHighlight } from "@/features/property"
import { AedText } from "@/shared/ui/aed-text"
import { cn } from "@/shared/lib/cn"

const STAT_ICONS: Record<string, LucideIcon> = {
  Bedrooms: BedDouble,
  Bathrooms: Bath,
  Area: Maximize,
  Parking: Car,
  Price: CircleDollarSign,
  "Price / sqft": Ruler,
  Type: Home,
  Status: Tag,
}

type PropertyStatsSectionProps = {
  stats: ProjectHighlight[]
  className?: string
}

export function PropertyStatsSection({ stats, className }: PropertyStatsSectionProps) {
  if (stats.length === 0) return null

  return (
    <section className={cn("mx-auto container bg-white px-6 pb-[30px] md:px-10", className)} aria-label="Property stats">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-4">
        {stats.map((item) => {
          const Icon = STAT_ICONS[item.label] ?? Tag
          return (
            <div
              key={item.label}
              className="flex flex-col items-center rounded-xl border border-border bg-white px-4 py-5 text-center"
            >
              <span className="bg-a7-brand-gold-soft text-a7-brand-gold flex size-9 items-center justify-center rounded-full">
                <Icon className="size-4 stroke-[2.25]" aria-hidden />
              </span>
              <p className="mt-3 text-xs font-medium uppercase tracking-wide text-muted-foreground">{item.label}</p>
              <p className="mt-1 text-sm font-bold text-a7-black">
                <AedText text={item.value} />
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
