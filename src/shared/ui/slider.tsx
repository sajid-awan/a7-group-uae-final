"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/shared/lib/cn"

const sliderVariants = cva("relative flex w-full touch-none select-none items-center", {
  variants: {
    size: {
      sm: "[&_[data-slot=slider-track]]:h-1 [&_[data-slot=slider-thumb]]:size-3.5",
      md: "[&_[data-slot=slider-track]]:h-1.5 [&_[data-slot=slider-thumb]]:size-4",
      lg: "[&_[data-slot=slider-track]]:h-2 [&_[data-slot=slider-thumb]]:size-5",
    },
  },
  defaultVariants: {
    size: "md",
  },
})

export type SliderProps = React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> &
  VariantProps<typeof sliderVariants> & {
    /** Optional per-thumb bubble labels (e.g. current values). */
    thumbBubbles?: React.ReactNode[]
    bubblePosition?: "top" | "bottom"
    bubbleShape?: "rounded" | "pill" | "none"
  }

const Slider = React.forwardRef<React.ElementRef<typeof SliderPrimitive.Root>, SliderProps>(function Slider(
  { className, size, thumbBubbles, bubblePosition = "top", bubbleShape = "rounded", ...props },
  ref
) {
  return (
    <SliderPrimitive.Root ref={ref} data-slot="slider" className={cn(sliderVariants({ size }), className)} {...props}>
      <SliderPrimitive.Track data-slot="slider-track" className="relative w-full grow overflow-hidden rounded-full bg-muted">
        <SliderPrimitive.Range data-slot="slider-range" className="absolute h-full bg-[#8a6a2f]" />
      </SliderPrimitive.Track>
      {Array.from({ length: props.value?.length ?? props.defaultValue?.length ?? 1 }).map((_, index) => (
        <SliderPrimitive.Thumb
          key={index}
          data-slot="slider-thumb"
          className="relative block rounded-full border border-[#8a6a2f] bg-white shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/30 disabled:pointer-events-none disabled:opacity-50"
        >
          {thumbBubbles?.[index] != null ? (
            <span
              className={
                bubblePosition === "top"
                  ? "pointer-events-none absolute bottom-0 left-1/2 z-20 -translate-x-1/2 -translate-y-[calc(100%+2px)]"
                  : "pointer-events-none absolute left-1/2 z-20 -translate-x-1/2 translate-y-[calc(100%+6px)]"
              }
            >
              <span
                className={
                  bubbleShape === "none"
                    ? "inline-block px-1 text-center text-xs font-semibold text-a7-text-gray"
                    : bubbleShape === "pill"
                      ? "relative inline-block min-w-14 rounded-full bg-card px-3 py-1.5 text-center text-xs font-semibold text-a7-text-gray shadow-[0_4px_14px_rgba(0,0,0,0.12)]"
                      : "relative inline-block min-w-14 rounded-[18px] bg-card px-3 py-1.5 text-center text-xs font-semibold text-a7-text-gray shadow-[0_4px_14px_rgba(0,0,0,0.12)]"
                }
              >
                {thumbBubbles[index]}
                {bubbleShape !== "none" ? (
                  bubblePosition === "top" ? (
                    <span className="absolute top-full left-1/2 h-0 w-0 -translate-x-1/2 border-t-6 border-r-6 border-l-6 border-t-card border-r-transparent border-l-transparent drop-shadow-[0_2px_3px_rgba(0,0,0,0.08)]" />
                  ) : (
                    <span className="absolute bottom-full left-1/2 h-0 w-0 -translate-x-1/2 border-r-6 border-b-6 border-l-6 border-r-transparent border-b-card border-l-transparent drop-shadow-[0_-2px_3px_rgba(0,0,0,0.08)]" />
                  )
                ) : null}
              </span>
            </span>
          ) : null}
        </SliderPrimitive.Thumb>
      ))}
    </SliderPrimitive.Root>
  )
})

Slider.displayName = "Slider"

export { Slider, sliderVariants }
