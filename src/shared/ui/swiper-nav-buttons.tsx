"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@/shared/ui/button"
import { CAROUSEL_NAV_SHELL_NEXT_STATIC, CAROUSEL_NAV_SHELL_PREV_STATIC } from "@/shared/lib/card-hover"
import { cn } from "@/shared/lib/cn"

type SwiperNavButtonsProps = {
  prevClass: string
  nextClass: string
  /** "dark" = white buttons for dark section backgrounds (default). "light" = bordered buttons for light backgrounds. */
  theme?: "dark" | "light"
  prevLabel?: string
  nextLabel?: string
  className?: string
}

const themeClasses: Record<NonNullable<SwiperNavButtonsProps["theme"]>, string> = {
  dark: "border-0 bg-white text-a7-text-gray shadow-none hover:bg-white/90",
  light: "border-border bg-white text-a7-text-gray shadow-sm hover:bg-muted/60",
}

export function SwiperNavButtons({
  prevClass,
  nextClass,
  theme = "dark",
  prevLabel = "Previous",
  nextLabel = "Next",
  className,
}: SwiperNavButtonsProps) {
  const btnBase = cn(
    "size-11 min-h-11 min-w-11 disabled:opacity-40 [&_svg]:size-5",
    themeClasses[theme]
  )

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Button
        type="button"
        variant="outline"
        size="icon-sm"
        shape="pill"
        className={cn(prevClass, btnBase, CAROUSEL_NAV_SHELL_PREV_STATIC)}
        aria-label={prevLabel}
      >
        <ChevronLeft aria-hidden />
      </Button>
      <Button
        type="button"
        variant="outline"
        size="icon-sm"
        shape="pill"
        className={cn(nextClass, btnBase, CAROUSEL_NAV_SHELL_NEXT_STATIC)}
        aria-label={nextLabel}
      >
        <ChevronRight aria-hidden />
      </Button>
    </div>
  )
}
