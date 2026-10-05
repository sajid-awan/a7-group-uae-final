import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/shared/lib/cn"

const spinnerVariants = cva("inline-block shrink-0", {
  variants: {
    variant: {
      default: "text-primary",
      secondary: "text-secondary",
      muted: "text-muted-foreground",
      destructive: "text-destructive",
      success: "text-[color:var(--chart-3)]",
      warning: "text-amber-600 dark:text-amber-400",
      /** For use on solid primary (or dark) surfaces */
      inverse: "text-primary-foreground",
    },
    size: {
      xs: "size-3.5",
      sm: "size-[18px]",
      md: "size-6",
      lg: "size-8",
      xl: "size-10",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
})

export type SpinnerProps = React.ComponentPropsWithoutRef<"span"> &
  VariantProps<typeof spinnerVariants> & {
    /** Visually hidden label for assistive tech */
    label?: string
  }

const Spinner = React.forwardRef<HTMLSpanElement, SpinnerProps>(function Spinner(
  { className, variant, size, label = "Loading", ...props },
  ref
) {
  return (
    <span
      ref={ref}
      role="status"
      aria-live="polite"
      aria-label={label}
      data-slot="spinner"
      className={cn(
        spinnerVariants({ variant, size }),
        "motion-safe:animate-spin motion-reduce:animate-none",
        className
      )}
      {...props}
    >
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-full" aria-hidden="true">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
        <circle
          className="opacity-90"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="3"
          strokeDasharray="48 75"
          strokeLinecap="round"
        />
      </svg>
    </span>
  )
})

const progressTrackVariants = cva("relative w-full overflow-hidden rounded-full bg-muted", {
  variants: {
    size: {
      sm: "h-1",
      md: "h-1.5",
      lg: "h-2",
    },
  },
  defaultVariants: {
    size: "md",
  },
})

const progressFillVariants = cva("rounded-full", {
  variants: {
    variant: {
      default: "bg-primary",
      secondary: "bg-secondary",
      muted: "bg-muted-foreground/50",
      destructive: "bg-destructive",
      success: "bg-[color:var(--chart-3)]",
      warning: "bg-amber-600 dark:bg-amber-400",
      inverse: "bg-primary-foreground",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

export type ProgressBarProps = Omit<React.ComponentPropsWithoutRef<"div">, "children"> &
  VariantProps<typeof progressTrackVariants> &
  VariantProps<typeof progressFillVariants> & {
    /** 0–100 when not indeterminate */
    value?: number
    indeterminate?: boolean
  }

const ProgressBar = React.forwardRef<HTMLDivElement, ProgressBarProps>(function ProgressBar(
  { className, variant, size, value = 0, indeterminate = false, ...props },
  ref
) {
  const pct = Math.min(100, Math.max(0, Number.isFinite(value) ? value : 0))

  return (
    <div
      ref={ref}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={indeterminate ? undefined : pct}
      aria-busy={indeterminate || undefined}
      data-slot="progress-bar"
      className={cn(progressTrackVariants({ size }), className)}
      {...props}
    >
      {indeterminate ? (
        <div
          className={cn(
            progressFillVariants({ variant }),
            "absolute inset-y-0 left-0 w-[38%] min-w-12 motion-safe:animate-progress-indeterminate motion-reduce:animate-none"
          )}
        />
      ) : (
        <div
          className={cn(progressFillVariants({ variant }), "h-full transition-[width] duration-300 ease-out")}
          style={{ width: `${pct}%` }}
        />
      )}
    </div>
  )
})

Spinner.displayName = "Spinner"
ProgressBar.displayName = "ProgressBar"

export { Spinner, ProgressBar, spinnerVariants, progressTrackVariants, progressFillVariants }
