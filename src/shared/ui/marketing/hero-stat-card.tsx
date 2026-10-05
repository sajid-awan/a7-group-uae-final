import type { LucideIcon } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"

import { AedText } from "@/shared/ui/aed-text"
import { cn } from "@/shared/lib/cn"

const heroStatCardVariants = cva("flex h-full items-center gap-3 rounded-2xl bg-white px-4 py-4 shadow-[0_4px_20px_rgba(0,0,0,0.12)]", {
  variants: {
    iconTone: {
      gold: "[&_svg]:text-a7-brand-gold",
      primary: "[&_svg]:text-primary",
      muted: "[&_svg]:text-muted-foreground",
    },
  },
  defaultVariants: {
    iconTone: "gold",
  },
})

export type HeroStatCardProps = VariantProps<typeof heroStatCardVariants> & {
  value: string
  label: string
  icon: LucideIcon
  className?: string
  valueClassName?: string
  labelClassName?: string
}

export function HeroStatCard({
  value,
  label,
  icon: Icon,
  iconTone,
  className,
  valueClassName,
  labelClassName,
}: HeroStatCardProps) {
  return (
    <div data-slot="hero-stat-card" className={cn(heroStatCardVariants({ iconTone }), className)}>
      <div className="bg-a7-surface flex size-12 shrink-0 items-center justify-center rounded-xl">
        <Icon className="size-6 stroke-[1.5] text-primary" aria-hidden />
      </div>
      <div className="min-w-0">
        <p className={cn("text-xl font-bold leading-tight text-black sm:text-2xl", valueClassName)}>
          <AedText text={value} />
        </p>
        <p className={cn("text-a7-hero-stat-label mt-0.5 text-xs leading-snug", labelClassName)}>{label}</p>
      </div>
    </div>
  )
}

HeroStatCard.displayName = "HeroStatCard"

export { heroStatCardVariants }
