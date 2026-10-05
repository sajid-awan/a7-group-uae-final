"use client"

import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/shared/lib/cn"

function TooltipProvider({
  delayDuration = 150,
  ...props
}: React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Provider>) {
  return <TooltipPrimitive.Provider data-slot="tooltip-provider" delayDuration={delayDuration} {...props} />
}

function Tooltip({ ...props }: React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Root>) {
  return <TooltipPrimitive.Root data-slot="tooltip" {...props} />
}

function TooltipTrigger({ ...props }: React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Trigger>) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />
}

const tooltipContentVariants = cva(
  "z-[100] max-w-xs origin-(--radix-tooltip-content-transform-origin) rounded-xl px-3 py-2 text-xs leading-relaxed shadow-[0_10px_28px_rgba(0,0,0,0.35)]",
  {
    variants: {
      variant: {
        dark: "bg-neutral-900 font-medium text-white",
        soft: "bg-white text-slate-700 shadow-[0_12px_32px_rgba(15,23,42,0.12)]",
      },
    },
    defaultVariants: {
      variant: "dark",
    },
  }
)

function TooltipContent({
  className,
  sideOffset = 8,
  variant = "dark",
  showArrow = true,
  arrowClassName,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> & {
  variant?: VariantProps<typeof tooltipContentVariants>["variant"]
  showArrow?: boolean
  arrowClassName?: string
}) {
  const defaultArrowClassName =
    variant === "soft"
      ? "fill-white drop-shadow-[0_2px_2px_rgba(15,23,42,0.08)]"
      : "fill-neutral-900 drop-shadow-[0_2px_2px_rgba(0,0,0,0.15)]"

  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        className={cn(
          tooltipContentVariants({ variant }),
          "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
          "data-[state=delayed-open]:animate-in data-[state=delayed-open]:fade-in-0 data-[state=delayed-open]:zoom-in-95",
          "data-[side=bottom]:slide-in-from-top-1.5 data-[side=left]:slide-in-from-right-1.5",
          "data-[side=right]:slide-in-from-left-1.5 data-[side=top]:slide-in-from-bottom-1.5",
          className
        )}
        {...props}
      >
        {children}
        {showArrow ? (
          <TooltipPrimitive.Arrow className={cn(defaultArrowClassName, arrowClassName)} />
        ) : null}
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  )
}

export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger }
