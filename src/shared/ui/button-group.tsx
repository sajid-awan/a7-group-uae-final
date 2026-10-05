import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/shared/lib/cn"

const buttonGroupVariants = cva("inline-flex", {
  variants: {
    orientation: {
      horizontal: "flex-row items-stretch",
      vertical: "flex-col items-stretch",
    },
    attached: {
      true: [
        "gap-0",
        "[&>:where(button,[data-slot=button],[data-slot=button-group-text],input,[data-slot=input],[data-slot=input-group])]:relative",
        "[&>:where(button,[data-slot=button],input,[data-slot=input],[data-slot=input-group])]:z-0",
        "[&>:where(button,[data-slot=button],input,[data-slot=input],[data-slot=input-group]):hover]:z-10",
        "[&>:where(button,[data-slot=button],input,[data-slot=input],[data-slot=input-group]):focus-within]:z-20",
        "[&>:where(button,[data-slot=button],[data-slot=button-group-text],input,[data-slot=input],[data-slot=input-group])]:rounded-none",
        "[&>[data-slot=button-group-separator]]:inline-flex",
      ],
      false: "gap-2 [&>:where(button,[data-slot=button],[data-slot=button-group-text],input,[data-slot=input],[data-slot=input-group])]:m-0 [&>[data-slot=button-group-separator]]:inline-flex",
    },
  },
  compoundVariants: [
    {
      orientation: "horizontal",
      attached: true,
      class: [
        "[&>:where(button,[data-slot=button],[data-slot=button-group-text],input,[data-slot=input],[data-slot=input-group]):first-child]:rounded-s-lg",
        "[&>:where(button,[data-slot=button],[data-slot=button-group-text],input,[data-slot=input],[data-slot=input-group]):last-child]:rounded-e-lg",
        "[&>:where(button,[data-slot=button],[data-slot=button-group-text],input,[data-slot=input],[data-slot=input-group]):only-child]:rounded-lg",
        "[&>:where(button,[data-slot=button],[data-slot=button-group-text],input,[data-slot=input],[data-slot=input-group]):not(:first-child)]:-ml-px",
        "[&>button[data-shape=pill]:first-child,&>[data-slot=button][data-shape=pill]:first-child]:!rounded-s-full [&>button[data-shape=pill]:first-child,&>[data-slot=button][data-shape=pill]:first-child]:!rounded-e-none",
        "[&>button[data-shape=pill]:last-child,&>[data-slot=button][data-shape=pill]:last-child]:!rounded-e-full [&>button[data-shape=pill]:last-child,&>[data-slot=button][data-shape=pill]:last-child]:!rounded-s-none",
        "[&>button[data-shape=pill]:only-child,&>[data-slot=button][data-shape=pill]:only-child]:!rounded-full",
        "[&>button[data-shape=rounded]:first-child,&>[data-slot=button][data-shape=rounded]:first-child]:!rounded-s-2xl [&>button[data-shape=rounded]:first-child,&>[data-slot=button][data-shape=rounded]:first-child]:!rounded-e-none",
        "[&>button[data-shape=rounded]:last-child,&>[data-slot=button][data-shape=rounded]:last-child]:!rounded-e-2xl [&>button[data-shape=rounded]:last-child,&>[data-slot=button][data-shape=rounded]:last-child]:!rounded-s-none",
        "[&>button[data-shape=rounded]:only-child,&>[data-slot=button][data-shape=rounded]:only-child]:!rounded-2xl",
        "[&>button[data-shape=square]:first-child,&>[data-slot=button][data-shape=square]:first-child]:!rounded-s-md [&>button[data-shape=square]:first-child,&>[data-slot=button][data-shape=square]:first-child]:!rounded-e-none",
        "[&>button[data-shape=square]:last-child,&>[data-slot=button][data-shape=square]:last-child]:!rounded-e-md [&>button[data-shape=square]:last-child,&>[data-slot=button][data-shape=square]:last-child]:!rounded-s-none",
        "[&>button[data-shape=square]:only-child,&>[data-slot=button][data-shape=square]:only-child]:!rounded-md",
      ],
    },
    {
      orientation: "vertical",
      attached: true,
      class: [
        "[&>:where(button,[data-slot=button],[data-slot=button-group-text],input,[data-slot=input],[data-slot=input-group]):first-child]:rounded-t-lg",
        "[&>:where(button,[data-slot=button],[data-slot=button-group-text],input,[data-slot=input],[data-slot=input-group]):last-child]:rounded-b-lg",
        "[&>:where(button,[data-slot=button],[data-slot=button-group-text],input,[data-slot=input],[data-slot=input-group]):only-child]:rounded-lg",
        "[&>:where(button,[data-slot=button],[data-slot=button-group-text],input,[data-slot=input],[data-slot=input-group]):not(:first-child)]:-mt-px",
        "[&>button[data-shape=pill]:first-child,&>[data-slot=button][data-shape=pill]:first-child]:!rounded-t-full [&>button[data-shape=pill]:first-child,&>[data-slot=button][data-shape=pill]:first-child]:!rounded-b-none",
        "[&>button[data-shape=pill]:last-child,&>[data-slot=button][data-shape=pill]:last-child]:!rounded-b-full [&>button[data-shape=pill]:last-child,&>[data-slot=button][data-shape=pill]:last-child]:!rounded-t-none",
        "[&>button[data-shape=pill]:only-child,&>[data-slot=button][data-shape=pill]:only-child]:!rounded-full",
        "[&>button[data-shape=rounded]:first-child,&>[data-slot=button][data-shape=rounded]:first-child]:!rounded-t-2xl [&>button[data-shape=rounded]:first-child,&>[data-slot=button][data-shape=rounded]:first-child]:!rounded-b-none",
        "[&>button[data-shape=rounded]:last-child,&>[data-slot=button][data-shape=rounded]:last-child]:!rounded-b-2xl [&>button[data-shape=rounded]:last-child,&>[data-slot=button][data-shape=rounded]:last-child]:!rounded-t-none",
        "[&>button[data-shape=rounded]:only-child,&>[data-slot=button][data-shape=rounded]:only-child]:!rounded-2xl",
        "[&>button[data-shape=square]:first-child,&>[data-slot=button][data-shape=square]:first-child]:!rounded-t-md [&>button[data-shape=square]:first-child,&>[data-slot=button][data-shape=square]:first-child]:!rounded-b-none",
        "[&>button[data-shape=square]:last-child,&>[data-slot=button][data-shape=square]:last-child]:!rounded-b-md [&>button[data-shape=square]:last-child,&>[data-slot=button][data-shape=square]:last-child]:!rounded-t-none",
        "[&>button[data-shape=square]:only-child,&>[data-slot=button][data-shape=square]:only-child]:!rounded-md",
      ],
    },
  ],
  defaultVariants: {
    orientation: "horizontal",
    attached: true,
  },
})

const buttonGroupSeparatorVariants = cva("shrink-0 bg-border", {
  variants: {
    orientation: {
      horizontal: "h-auto w-px self-stretch",
      vertical: "h-px w-auto",
    },
  },
  defaultVariants: {
    orientation: "vertical",
  },
})

const buttonGroupTextVariants = cva(
  "inline-flex min-h-11 items-center justify-center border border-input bg-white px-3 text-sm text-muted-foreground"
)

export type ButtonGroupProps = React.ComponentProps<"div"> &
  VariantProps<typeof buttonGroupVariants> & {
    /** Accessible name when the group is not labelled by visible text. */
    "aria-label"?: string
  }

export type ButtonGroupSeparatorProps = React.ComponentProps<"div"> &
  VariantProps<typeof buttonGroupSeparatorVariants>

export type ButtonGroupTextProps = React.ComponentProps<"span"> & { asChild?: boolean }

function ButtonGroup({
  className,
  orientation = "horizontal",
  attached = true,
  role = "group",
  "aria-label": ariaLabel,
  ...props
}: ButtonGroupProps) {
  const resolvedOrientation = orientation ?? "horizontal"

  return (
    <div
      data-slot="button-group"
      data-orientation={resolvedOrientation}
      data-attached={attached ? "true" : "false"}
      role={role}
      aria-label={ariaLabel}
      className={cn(buttonGroupVariants({ orientation: resolvedOrientation, attached }), className)}
      {...props}
    />
  )
}
ButtonGroup.displayName = "ButtonGroup"

function ButtonGroupSeparator({
  className,
  orientation = "vertical",
  ...props
}: ButtonGroupSeparatorProps) {
  return (
    <div
      data-slot="button-group-separator"
      data-orientation={orientation}
      aria-hidden
      className={cn(buttonGroupSeparatorVariants({ orientation }), className)}
      {...props}
    />
  )
}
ButtonGroupSeparator.displayName = "ButtonGroupSeparator"

function ButtonGroupText({ className, asChild = false, children, ...props }: ButtonGroupTextProps) {
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children as React.ReactElement<Record<string, unknown>>, {
      ...props,
      "data-slot": "button-group-text",
      className: cn(buttonGroupTextVariants(), (children.props as { className?: string }).className, className),
    } as Record<string, unknown>)
  }

  return (
    <span data-slot="button-group-text" className={cn(buttonGroupTextVariants(), className)} {...props}>
      {children}
    </span>
  )
}
ButtonGroupText.displayName = "ButtonGroupText"

export {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
  buttonGroupVariants,
  buttonGroupSeparatorVariants,
  buttonGroupTextVariants,
}
