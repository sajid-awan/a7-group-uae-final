"use client"

import type { ReactNode } from "react"
import { cva, type VariantProps } from "class-variance-authority"

import type { TooltipContent } from "@/shared/ui/tooltip"

const actionTooltipContentVariants = cva("max-w-xs text-center", {
  variants: {
    variant: {
      dark: "",
      soft: "max-w-[280px] rounded-2xl px-4 py-2.5 text-sm",
    },
  },
  defaultVariants: {
    variant: "dark",
  },
})

export type ActionTooltipProps = {
  label: string
  content?: ReactNode
  variant?: VariantProps<typeof actionTooltipContentVariants>["variant"]
  side?: React.ComponentProps<typeof TooltipContent>["side"]
  align?: React.ComponentProps<typeof TooltipContent>["align"]
  contentClassName?: string
  children: ReactNode
  open?: boolean
  defaultOpen?: boolean
}

/** Tooltips are disabled app-wide: renders only the trigger. */
export function ActionTooltip({ children }: ActionTooltipProps) {
  return <>{children}</>
}

ActionTooltip.displayName = "ActionTooltip"

export { actionTooltipContentVariants }
