"use client"

import type { ReactNode } from "react"
import { cva, type VariantProps } from "class-variance-authority"

import type { TooltipContent } from "@/shared/ui/tooltip"

type InfoIconName = "info" | "help"

const infoTooltipTriggerVariants = cva("text-muted-foreground", {
  variants: {
    trigger: {
      "icon-button":
        "size-8 min-h-8 min-w-8 hover:bg-muted/30 hover:text-muted-foreground",
      inline:
        "inline-flex size-5 items-center justify-center rounded-full outline-none ring-offset-background transition hover:text-a7-text-gray focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      compact:
        "inline-flex shrink-0 items-center justify-center rounded-full transition-colors hover:text-a7-text-gray focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      "ghost-icon":
        "inline-flex size-8 shrink-0 items-center justify-center rounded-full text-neutral-400 transition-colors hover:text-neutral-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    },
  },
  defaultVariants: {
    trigger: "icon-button",
  },
})

const infoTooltipContentVariants = cva("text-center", {
  variants: {
    size: {
      compact: "max-w-xs",
      detailed: "max-w-[300px]",
    },
    variant: {
      dark: "",
      soft: "max-w-[280px] rounded-2xl px-4 py-2.5 text-sm",
    },
  },
  defaultVariants: {
    size: "compact",
    variant: "dark",
  },
})

export const INFO_TOOLTIP_DUMMY_TEXT =
  "Tooltips are used to describe or identify an element."

export type InfoTooltipProps = {
  content?: ReactNode
  title?: ReactNode
  variant?: VariantProps<typeof infoTooltipContentVariants>["variant"]
  size?: VariantProps<typeof infoTooltipContentVariants>["size"]
  trigger?: VariantProps<typeof infoTooltipTriggerVariants>["trigger"]
  icon?: InfoIconName
  side?: React.ComponentProps<typeof TooltipContent>["side"]
  align?: React.ComponentProps<typeof TooltipContent>["align"]
  className?: string
  contentClassName?: string
  ariaLabel?: string
  iconClassName?: string
  open?: boolean
  defaultOpen?: boolean
}

/** Tooltips are disabled app-wide: the info icon only existed to show one, so nothing renders. */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function InfoTooltip(_props: InfoTooltipProps) {
  return null
}

InfoTooltip.displayName = "InfoTooltip"

export { infoTooltipContentVariants, infoTooltipTriggerVariants }
