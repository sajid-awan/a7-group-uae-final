import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/shared/lib/cn"
import { formControlTypographyClassName } from "@/shared/ui/form-control-styles"

const inputVariants = cva(
  cn(
    "flex h-11 w-full min-w-0 rounded-md border border-input bg-white px-3 py-2 shadow-xs transition-[color,box-shadow,border-color] outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/30 aria-invalid:border-destructive aria-invalid:ring-[3px] aria-invalid:ring-destructive/20",
    formControlTypographyClassName
  ),
  {
    variants: {
      inputSize: {
        sm: "h-9",
        md: "h-11",
        lg: "h-12",
      },
      radius: {
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
      },
    },
    defaultVariants: {
      inputSize: "md",
      radius: "md",
    },
  }
)

const inputIconToneVariants = cva("", {
  variants: {
    iconTone: {
      default: "text-[#8B93A1]",
      muted: "text-muted-foreground",
      primary: "text-primary",
    },
  },
  defaultVariants: {
    iconTone: "default",
  },
})

const inputIconPadding: Record<"sm" | "md" | "lg", { start: string; end: string }> = {
  sm: { start: "pl-9", end: "pr-9" },
  md: { start: "pl-10", end: "pr-10" },
  lg: { start: "pl-11", end: "pr-11" },
}

export type InputProps = React.ComponentProps<"input"> &
  VariantProps<typeof inputVariants> &
  VariantProps<typeof inputIconToneVariants> & {
    /** Leading or trailing icon inside the field. */
    icon?: React.ReactNode
    /** `start` = left (LTR), `end` = right (LTR). */
    iconPosition?: "start" | "end"
    iconClassName?: string
    wrapperClassName?: string
  }

const Input = React.forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    className,
    inputSize = "md",
    radius = "md",
    type = "text",
    icon,
    iconPosition = "start",
    iconTone,
    iconClassName,
    wrapperClassName,
    ...props
  },
  ref
) {
  const size = inputSize ?? "md"
  const field = (
    <input
      ref={ref}
      type={type}
      data-slot="input"
      className={cn(
        inputVariants({ inputSize: size, radius }),
        icon ? inputIconPadding[size][iconPosition] : null,
        className
      )}
      {...props}
    />
  )

  if (!icon) return field

  const iconEl = (
    <span
      className={cn(
        "pointer-events-none absolute top-1/2 z-10 -translate-y-1/2",
        iconPosition === "start" ? "left-3" : "right-3",
        inputIconToneVariants({ iconTone }),
        iconClassName
      )}
      aria-hidden
    >
      {icon}
    </span>
  )

  return (
    <div data-slot="input-wrapper" className={cn("relative w-full", wrapperClassName)}>
      {iconEl}
      {field}
    </div>
  )
})

Input.displayName = "Input"

export { Input, inputVariants, inputIconToneVariants }
