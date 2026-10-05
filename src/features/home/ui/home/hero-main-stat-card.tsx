import type { ComponentType } from "react"

import { AedText } from "@/shared/ui/aed-text"
import { cn } from "@/shared/lib/cn"

type HeroStatIconProps = {
  className?: string
  strokeWidth?: number | string
  "aria-hidden"?: boolean
}

export type HeroMainStatCardProps = {
  icon: ComponentType<HeroStatIconProps>
  value: string
  label: string
  className?: string
}

export function HeroMainStatCard({ icon: Icon, value, label, className }: HeroMainStatCardProps) {
  return (
    <div
      data-slot="hero-main-stat-card"
      className={cn(
        "flex min-w-0 flex-1 items-center sm:gap-4 gap-2",
       
        className
      )}
    >
      <div className="flex sm:size-11 size-9 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white  backdrop-blur-md sm:size-18">
        <Icon className="size-5 sm:size-12" strokeWidth={1.75} aria-hidden />
      </div>
      <div className="min-w-0 text-left">
        <p className="sm:text-4xl text-xl font-inter font-semibold leading-none tracking-tight text-white sm:text-[28px]">
          <AedText text={value} />
        </p>
        <p className="mt-1.5 font-inter sm:text-lg text-sm font-medium uppercase tracking-wide text-white ">{label}</p>
      </div>
    </div>
  )
}

HeroMainStatCard.displayName = "HeroMainStatCard"
