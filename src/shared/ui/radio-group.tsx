"use client"

import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { cva, type VariantProps } from "class-variance-authority"

import {
  fieldControlRadioIndicatorVariants,
  fieldControlThemeVariants,
} from "@/shared/ui/field-control-variants"
import type { FieldControlVariant } from "@/shared/ui/field-control-variants"
import { cn } from "@/shared/lib/cn"

const radioSizeVariants = cva(
  "inline-flex aspect-square shrink-0 items-center justify-center rounded-full outline-none transition-colors focus-visible:ring-[3px] focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      size: {
        sm: "size-4",
        md: "size-5",
        lg: "size-6",
        /** 48×48px */
        xl: "size-12",
      },
    },
    defaultVariants: { size: "md" },
  }
)

type RadioSize = NonNullable<VariantProps<typeof radioSizeVariants>["size"]>

type RadioGroupConfig = {
  size: RadioSize
  variant: FieldControlVariant
}

const RadioGroupConfigContext = React.createContext<RadioGroupConfig>({
  size: "md",
  variant: "default",
})

export type RadioGroupProps = React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> & {
  /** Default size for nested {@link RadioField} rows (each field can override). */
  size?: RadioSize
  /** Theme variant for nested fields — same set as {@link Checkbox}. */
  variant?: FieldControlVariant
}

const RadioGroup = React.forwardRef<React.ElementRef<typeof RadioGroupPrimitive.Root>, RadioGroupProps>(
  function RadioGroup({ className, size = "md", variant = "default", children, ...props }, ref) {
    const value = React.useMemo(() => ({ size, variant }), [size, variant])
    return (
      <RadioGroupPrimitive.Root
        ref={ref}
        data-slot="radio-group"
        className={cn("grid gap-3", className)}
        {...props}
      >
        <RadioGroupConfigContext.Provider value={value}>{children}</RadioGroupConfigContext.Provider>
      </RadioGroupPrimitive.Root>
    )
  }
)
RadioGroup.displayName = "RadioGroup"

export type RadioFieldProps = Omit<
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>,
  "children"
> &
  VariantProps<typeof radioSizeVariants> &
  VariantProps<typeof fieldControlThemeVariants> & {
    label?: string
    description?: string
    /** Merged onto the radio control last (after `size`), e.g. `className="size-10"`. */
    className?: string
    /** When `label` or `description` is set, applies to the outer flex row. */
    containerClassName?: string
  }

const RadioField = React.forwardRef<React.ElementRef<typeof RadioGroupPrimitive.Item>, RadioFieldProps>(
  function RadioField(
    {
      className,
      containerClassName,
      label,
      description,
      size: sizeProp,
      variant: variantProp,
      value,
      disabled,
      id,
      required,
      ...itemProps
    },
    ref
  ) {
    const ctx = React.useContext(RadioGroupConfigContext)
    const size = (sizeProp ?? ctx.size) as RadioSize
    const variant = variantProp ?? ctx.variant
    const uid = React.useId()
    const controlId = id ?? `${uid}-radio`
    const descriptionId = description ? `${controlId}-description` : undefined

    const item = (
      <RadioGroupPrimitive.Item
        ref={ref}
        value={value}
        id={controlId}
        disabled={disabled}
        required={required}
        data-slot="radio-item"
        data-variant={variant}
        data-size={size}
        aria-describedby={descriptionId}
        className={cn(radioSizeVariants({ size }), fieldControlThemeVariants({ variant }), className)}
        {...itemProps}
      >
        <RadioGroupPrimitive.Indicator className="flex size-full items-center justify-center">
          <span
            data-slot="radio-indicator-dot"
            className={cn(fieldControlRadioIndicatorVariants({ variant }))}
          />
        </RadioGroupPrimitive.Indicator>
      </RadioGroupPrimitive.Item>
    )

    if (label == null && description == null) {
      return item
    }

    return (
      <div data-slot="radio-field" className={cn("flex max-w-full items-start gap-3", containerClassName)}>
        {item}
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
RadioField.displayName = "RadioField"

export { RadioField, RadioGroup, radioSizeVariants as radioItemBoxVariants, fieldControlThemeVariants }
export type { FieldControlVariant } from "@/shared/ui/field-control-variants"
