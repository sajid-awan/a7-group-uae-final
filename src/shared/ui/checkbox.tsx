"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { cva, type VariantProps } from "class-variance-authority"
import { Check, Minus } from "lucide-react"

import { fieldControlThemeVariants } from "@/shared/ui/field-control-variants"
import { cn } from "@/shared/lib/cn"

const checkboxSizeVariants = cva(
  "group inline-flex shrink-0 items-center justify-center outline-none transition-colors focus-visible:ring-[3px] focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      size: {
        sm: "size-4 rounded-[4px] [&_svg]:size-2.5",
        md: "size-5 rounded-[5px] [&_svg]:size-3",
        lg: "size-6 rounded-md [&_svg]:size-3.5",
        /** 48×48px hit target */
        xl: "size-12 rounded-lg [&_svg]:size-7",
      },
    },
    defaultVariants: { size: "md" },
  }
)

/**
 * Filled style when `accentColor` is set: unchecked = outline in accent; checked / indeterminate = solid fill.
 * Overrides `variant` until `accentColor` is cleared.
 */
const checkboxAccentTone =
  "border-2 border-[var(--checkbox-accent)] bg-white shadow-sm hover:brightness-[0.98] focus-visible:border-[var(--checkbox-accent)] focus-visible:ring-[color-mix(in_oklab,var(--checkbox-accent)_42%,transparent)] data-[state=checked]:border-[var(--checkbox-accent)] data-[state=checked]:bg-[var(--checkbox-accent)] data-[state=checked]:shadow-none data-[state=indeterminate]:border-[var(--checkbox-accent)] data-[state=indeterminate]:bg-[var(--checkbox-accent)] data-[state=indeterminate]:shadow-none data-[state=checked]:text-[var(--checkbox-fg,#ffffff)] data-[state=indeterminate]:text-[var(--checkbox-fg,#ffffff)]"

export type CheckboxProps = Omit<
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
  "children" | "style"
> &
  VariantProps<typeof checkboxSizeVariants> &
  VariantProps<typeof fieldControlThemeVariants> & {
    /** Primary line; clicking the label toggles the control. */
    label?: string
    /** Muted helper under the label; linked via `aria-describedby`. */
    description?: string
    /** Merged onto the control last (after `size`) so you can override dimensions, e.g. `className="size-10 [&_svg]:size-5"`. */
    className?: string
    /** When `label` or `description` is set, applies to the outer flex row (spacing, width). The control uses `className`. */
    containerClassName?: string
    /**
     * Any CSS color (e.g. `#b68c40`, `rgb(...)`, `var(--brand)`). Enables filled checked/indeterminate
     * state and accent-colored outline when unchecked.
     */
    accentColor?: string
    /**
     * Color for the check / minus icons when `accentColor` is set (e.g. `#ffffff` or `#111827`).
     * Defaults to white for contrast on saturated fills.
     */
    iconColor?: string
    style?: React.CSSProperties
  }

const Checkbox = React.forwardRef<React.ElementRef<typeof CheckboxPrimitive.Root>, CheckboxProps>(
  function Checkbox(
    {
      className,
      containerClassName,
      label,
      description,
      size = "md",
      variant = "default",
      id,
      disabled,
      checked,
      defaultChecked,
      onCheckedChange,
      accentColor,
      iconColor,
      style,
      ...props
    },
    ref
  ) {
    const uid = React.useId()
    const controlId = id ?? uid
    const descriptionId = description ? `${controlId}-description` : undefined

    const accentVars = React.useMemo(() => {
      if (!accentColor) return undefined
      return {
        "--checkbox-accent": accentColor,
        ...((iconColor ? { "--checkbox-fg": iconColor } : {}) as Record<string, string>),
      } as React.CSSProperties
    }, [accentColor, iconColor])

    const mergedStyle = React.useMemo(
      () => (accentVars ? { ...accentVars, ...style } : style),
      [accentVars, style]
    )

    const box = (
      <CheckboxPrimitive.Root
        ref={ref}
        id={controlId}
        disabled={disabled}
        checked={checked}
        defaultChecked={defaultChecked}
        onCheckedChange={onCheckedChange}
        data-slot="checkbox"
        data-fill={accentColor ? "accent" : undefined}
        data-variant={accentColor ? undefined : variant}
        data-size={size}
        aria-describedby={descriptionId}
        style={mergedStyle}
        className={cn(
          checkboxSizeVariants({ size }),
          accentColor ? checkboxAccentTone : fieldControlThemeVariants({ variant }),
          className
        )}
        {...props}
      >
        <CheckboxPrimitive.Indicator
          className="flex items-center justify-center text-inherit"
          style={accentColor ? { color: iconColor ?? "#ffffff" } : undefined}
        >
          <Check
            strokeWidth={accentColor ? 2.75 : 3}
            className="hidden group-data-[state=checked]:block group-data-[state=indeterminate]:hidden"
            aria-hidden
          />
          <Minus
            strokeWidth={accentColor ? 2.75 : 3}
            className="hidden group-data-[state=indeterminate]:block group-data-[state=checked]:hidden"
            aria-hidden
          />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
    )

    if (label == null && description == null) {
      return box
    }

    return (
      <div
        data-slot="checkbox-field"
        className={cn("flex max-w-full items-start gap-3", containerClassName)}
      >
        {box}
        <div className="grid min-w-0 gap-0.5 pt-0.5 leading-snug">
          {label != null && label !== "" ? (
            <label
              htmlFor={controlId}
              className={cn(
                "cursor-pointer text-a7-text-gray select-none",
                size === "sm" && "text-xs font-medium",
                size === "md" && "text-sm font-medium",
                size === "lg" && "text-[15px] font-medium",
                size === "xl" && "text-base font-medium",
                disabled && "cursor-not-allowed opacity-50"
              )}
            >
              {label}
            </label>
          ) : null}
          {description != null && description !== "" ? (
            <p
              id={descriptionId}
              className={cn(
                "text-muted-foreground leading-relaxed",
                size === "xl" ? "text-sm" : "text-xs sm:text-[13px]"
              )}
            >
              {description}
            </p>
          ) : null}
        </div>
      </div>
    )
  }
)
Checkbox.displayName = "Checkbox"

export { Checkbox, checkboxSizeVariants as checkboxBoxVariants, fieldControlThemeVariants }
export type { FieldControlVariant } from "@/shared/ui/field-control-variants"
