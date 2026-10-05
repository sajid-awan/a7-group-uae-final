"use client"

import { cn } from "@/shared/lib/cn"

export type IntegrationLogoProps = {
  label: string
  className?: string
  size?: "sm" | "md"
}

const sizeClassName = {
  sm: "size-10 rounded-xl text-xs font-bold",
  md: "size-12 rounded-2xl text-sm font-bold",
} as const

export function IntegrationLogo({ label, className, size = "md" }: IntegrationLogoProps) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center font-inter uppercase tracking-wide",
        sizeClassName[size],
        className
      )}
      aria-hidden
    >
      {label}
    </span>
  )
}

IntegrationLogo.displayName = "IntegrationLogo"
