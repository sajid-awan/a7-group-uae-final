import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/shared/lib/cn"

const badgeVariants = cva(
  "inline-flex w-fit shrink-0 items-center justify-center border font-medium whitespace-nowrap transition-colors [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-3.5",
  {
    variants: {
      variant: {
        meta: "border-transparent bg-white text-a7-black shadow-none [a]:hover:bg-slate-50",
        default:
          "border-transparent bg-primary text-primary-foreground shadow-sm [a]:hover:bg-primary/90",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground shadow-sm [a]:hover:bg-secondary/90",
        outline:
          "border-border bg-white text-a7-text-gray shadow-none [a]:hover:bg-muted",
        muted: "border-transparent bg-muted text-muted-foreground [a]:hover:bg-muted/80",
        destructive:
          "border-transparent bg-destructive/15 text-destructive dark:bg-destructive/25 dark:text-destructive-foreground [a]:hover:bg-destructive/25",
        success:
          "border-transparent bg-emerald-600/15 text-emerald-800 dark:bg-emerald-500/20 dark:text-emerald-100 [a]:hover:bg-emerald-600/25",
        warning:
          "border-transparent bg-amber-500/15 text-amber-950 dark:bg-amber-400/20 dark:text-amber-50 [a]:hover:bg-amber-500/25",
        info: "border-transparent bg-sky-100 text-sky-950 dark:bg-sky-400/18 dark:text-sky-50 [a]:hover:bg-sky-200",
        paymentPlan:
          "group/badge-payment relative z-0 overflow-visible border-transparent bg-primary !font-bold text-primary-foreground shadow-sm transition-colors [a]:hover:bg-[var(--a7-brand-gold-hover)]",
      },
      size: {
        xs: "gap-0.5 px-1 py-0 text-[9px] leading-tight uppercase tracking-wide",
        sm: "gap-1 px-1.5 py-0.5 text-[10px] leading-tight uppercase tracking-wide",
        default: "gap-1 px-2 py-0.5 text-xs leading-tight",
        lg: "gap-1.5 px-2.5 py-1 text-sm leading-tight [&_svg:not([class*='size-'])]:size-4",
        xl:
          "h-[30px] min-h-[30px] gap-1.5 px-3 text-xs font-medium leading-none [&_svg:not([class*='size-'])]:size-3.5",
        /** Hero / detail header pills. */
        hero: "h-7 min-h-7 gap-1.5 px-3 text-xs font-medium leading-none normal-case tracking-normal [&_svg:not([class*='size-'])]:size-2.5",
      },
      shape: {
        default: "rounded-lg",
        rounded: "rounded-2xl",
        pill: "rounded-full",
        square: "rounded-none",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      shape: "pill",
    },
  }
)

/** Ribbon fold under the payment-plan badge; tweak size / clip-path / colors here or via className. */
const badgePaymentPlanFoldVariants = cva(
  "pointer-events-none absolute -left-px top-full z-[1] mt-[1px] bg-[var(--a7-brand-gold-shadow)] transition-colors [clip-path:polygon(100%_0,0_0,100%_100%)]",
  {
    variants: {
      size: {
        xs: "h-1.5 w-[11px]",
        sm: "h-2 w-3.5",
        default: "h-[9px] w-[14px]",
        lg: "h-2.5 w-[17px]",
        xl: "h-[11px] w-5",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)

export type BadgeProps = React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & {
    /** Merged onto the ribbon `<span>` when `variant="paymentPlan"` (shape / clip-path / size). */
    paymentPlanFoldClassName?: string
  }

function Badge({ className, variant, size, shape, children, paymentPlanFoldClassName, ...props }: BadgeProps) {
  const shapeForVariants = variant === "paymentPlan" ? "square" : shape
  const rootClassName = cn(badgeVariants({ variant, size, shape: shapeForVariants }), className)

  if (variant === "paymentPlan") {
    return (
      <span
        data-slot="badge"
        data-variant={variant}
        data-size={size}
        data-shape={shape}
        className={rootClassName}
        {...props}
      >
        {children}
        <span
          aria-hidden
          data-slot="badge-payment-plan-fold"
          className={cn(badgePaymentPlanFoldVariants({ size: size === "hero" ? "xl" : size }), paymentPlanFoldClassName)}
        />
      </span>
    )
  }

  return (
    <span
      data-slot="badge"
      data-variant={variant}
      data-size={size}
      data-shape={shape}
      className={rootClassName}
      {...props}
    >
      {children}
    </span>
  )
}
Badge.displayName = "Badge"

export { Badge, badgePaymentPlanFoldVariants, badgeVariants }
