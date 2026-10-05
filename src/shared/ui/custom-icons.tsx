"use client"

import * as React from "react"
import { type VariantProps } from "class-variance-authority"

import { iconVariants } from "@/shared/ui/icon"
import { cn } from "@/shared/lib/cn"

const namedTones = ["default", "muted", "primary", "secondary", "destructive", "success"] as const

type CustomIconProps = Omit<React.SVGProps<SVGSVGElement>, "children"> &
  Omit<VariantProps<typeof iconVariants>, "tone"> & {
    tone?: VariantProps<typeof iconVariants>["tone"] | string
    /** Any CSS color value (hex/rgb/hsl/var(--token)) */
    color?: string
  }

type CreateCustomIconOptions = {
  viewBox?: string
  strokeWidth?: number
}

function createCustomIcon(glyph: React.ReactNode, options: CreateCustomIconOptions = {}) {
  const {
    viewBox = "0 0 24 24",
    strokeWidth = 2,
  } = options

  const CustomIcon = React.forwardRef<SVGSVGElement, CustomIconProps>(function CustomIcon(
    { className, size, tone, color, style, ...props },
    ref
  ) {
    const isNamedTone = typeof tone === "string" && (namedTones as readonly string[]).includes(tone)
    const toneClass = isNamedTone ? (tone as VariantProps<typeof iconVariants>["tone"]) : undefined
    const inlineColor = color ?? (!isNamedTone ? tone : undefined)

    return (
      <svg
        ref={ref}
        viewBox={viewBox}
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className={cn(iconVariants({ size, tone: toneClass }), className)}
        style={inlineColor ? { ...style, color: inlineColor } : style}
        {...props}
      >
        {glyph}
      </svg>
    )
  })

  return CustomIcon
}

const SearchCustomIcon = createCustomIcon(
  <>
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </>
)

const MailCustomIcon = createCustomIcon(
  <>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </>
)

export { createCustomIcon, MailCustomIcon, SearchCustomIcon }
export type { CreateCustomIconOptions, CustomIconProps }
