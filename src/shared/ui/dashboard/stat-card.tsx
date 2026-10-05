import type { ComponentType } from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/shared/lib/cn"

const statCardVariants = cva(
  "rounded-xl  p-4 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.06)]", {
  variants: {
    iconTone: {
      gold: "bg-amber-50 [&_[data-slot=stat-icon]]:bg-amber-100 [&_[data-slot=stat-icon]]:text-amber-600",
      blue: "bg-sky-50 [&_[data-slot=stat-icon]]:bg-sky-100 [&_[data-slot=stat-icon]]:text-sky-600",
      orange: "bg-orange-50 [&_[data-slot=stat-icon]]:bg-orange-100 [&_[data-slot=stat-icon]]:text-orange-600",
      green: "bg-emerald-50 [&_[data-slot=stat-icon]]:bg-emerald-100 [&_[data-slot=stat-icon]]:text-emerald-600",
      purple: "bg-violet-50 [&_[data-slot=stat-icon]]:bg-violet-100 [&_[data-slot=stat-icon]]:text-violet-600",
      pink: "bg-rose-50 [&_[data-slot=stat-icon]]:bg-rose-100 [&_[data-slot=stat-icon]]:text-rose-600",
    },
  },
  defaultVariants: {
    iconTone: "gold",
  },
})

export type StatCardProps = VariantProps<typeof statCardVariants> & {
  value: string | number
  label: string
  icon: ComponentType<{ className?: string }>
  className?: string
}

export function StatCard({ value, label, icon: Icon, iconTone, className }: StatCardProps) {
  return (
    <div data-slot="stat-card" className={cn(statCardVariants({ iconTone }), className)}>
      <p className="font-inter text-sm font-medium text-neutral-900">{label}</p>
      <div className="mt-2 flex items-end justify-between gap-3">
        <p className="font-inter text-2xl font-semibold leading-none text-neutral-900">{value}</p>
        <div
          data-slot="stat-icon"
          className="flex size-10 shrink-0 items-center justify-center rounded-lg"
        >
          <Icon className="size-5" aria-hidden />
        </div>
      </div>
    </div>
  )
}

StatCard.displayName = "StatCard"

export { statCardVariants }
