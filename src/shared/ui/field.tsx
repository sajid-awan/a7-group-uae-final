import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/shared/lib/cn"

const fieldVariants = cva("grid gap-2", {
  variants: {
    orientation: {
      vertical: "grid-cols-1",
      horizontal: "items-start gap-3 sm:grid-cols-[180px_1fr]",
      responsive: "grid-cols-1 @sm/field:grid-cols-[180px_1fr] @sm/field:items-start",
    },
  },
  defaultVariants: {
    orientation: "responsive",
  },
})

type FieldOrientation = NonNullable<VariantProps<typeof fieldVariants>["orientation"]>

function FieldSet({ className, ...props }: React.ComponentProps<"fieldset">) {
  return <fieldset data-slot="field-set" className={cn("grid gap-4", className)} {...props} />
}

function FieldLegend({ className, ...props }: React.ComponentProps<"legend">) {
  return <legend data-slot="field-legend" className={cn("text-base font-medium text-a7-text-gray", className)} {...props} />
}

function FieldGroup({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="field-group" className={cn("@container/field grid gap-4", className)} {...props} />
}

function Field({
  className,
  orientation = "responsive",
  ...props
}: React.ComponentProps<"div"> & { orientation?: FieldOrientation }) {
  return <div data-slot="field" className={cn(fieldVariants({ orientation }), className)} {...props} />
}

function FieldContent({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="field-content" className={cn("grid gap-2", className)} {...props} />
}

function FieldLabel({ className, ...props }: React.ComponentProps<"label">) {
  return <label data-slot="field-label" className={cn("text-sm font-medium text-a7-text-gray", className)} {...props} />
}

function FieldTitle({ className, ...props }: React.ComponentProps<"p">) {
  return <p data-slot="field-title" className={cn("text-sm font-medium text-a7-text-gray", className)} {...props} />
}

function FieldDescription({ className, ...props }: React.ComponentProps<"p">) {
  return <p data-slot="field-description" className={cn("text-sm text-muted-foreground", className)} {...props} />
}

function FieldSeparator({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="field-separator" className={cn("h-px bg-border", className)} {...props} />
}

function FieldError({ className, ...props }: React.ComponentProps<"p">) {
  return <p data-slot="field-error" className={cn("text-sm text-destructive", className)} {...props} />
}

export {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
}
