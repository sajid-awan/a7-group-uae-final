"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/shared/lib/cn"

const namedTones = ["default", "muted", "primary", "secondary", "destructive", "success"] as const

const iconVariants = cva("inline-block shrink-0", {
  variants: {
    size: {
      xs: "size-3.5",
      sm: "size-4",
      md: "size-5",
      lg: "size-6",
      xl: "size-8",
    },
    tone: {
      default: "text-a7-text-gray",
      muted: "text-muted-foreground",
      primary: "text-primary",
      secondary: "text-secondary",
      destructive: "text-destructive",
      success: "text-emerald-600",
    },
  },
  defaultVariants: {
    size: "md",
    tone: "default",
  },
})

type SvgIconProps = Omit<React.SVGProps<SVGSVGElement>, "children"> &
  Omit<VariantProps<typeof iconVariants>, "tone"> & {
    tone?: VariantProps<typeof iconVariants>["tone"] | string
    /** Any CSS color value (hex/rgb/hsl/var(--token)) */
    color?: string
    glyph: React.ReactNode
  }

function SvgIcon({ className, size, tone, color, style, glyph, ...props }: SvgIconProps) {
  const isNamedTone = typeof tone === "string" && (namedTones as readonly string[]).includes(tone)
  const toneClass = isNamedTone ? (tone as VariantProps<typeof iconVariants>["tone"]) : undefined
  const inlineColor = color ?? (!isNamedTone ? tone : undefined)

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
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
}

export { SvgIcon, iconVariants }
export type { SvgIconProps }
