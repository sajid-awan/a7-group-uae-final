import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/shared/lib/cn"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 cursor-pointer items-center justify-center border border-transparent bg-clip-padding text-[15px] font-medium leading-snug whitespace-nowrap transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:text-inherit [&_svg:not([class*='size-'])]:size-5 [&_[data-icon]]:pointer-events-none [&_[data-icon]]:shrink-0 [&_[data-icon]]:text-inherit [&_[data-icon]:not([class*='size-'])]:size-5 [&_[data-icon]_img:not([class*='size-'])]:size-5",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-sm hover:bg-[color-mix(in_srgb,var(--color-primary)_82%,#000)] hover:shadow-md hover:-translate-y-0.5 active:bg-[color-mix(in_srgb,var(--color-primary)_72%,#000)] active:shadow-sm [a]:hover:bg-[color-mix(in_srgb,var(--color-primary)_82%,#000)]",
        gradient:
          "bg-linear-to-r from-primary to-primary/70 text-primary-foreground shadow-sm hover:brightness-95 hover:shadow-md hover:-translate-y-0.5 active:brightness-90 active:shadow-sm [a]:hover:brightness-95",
        property:
          "relative w-full justify-center border border-black/70 [background-image:linear-gradient(to_left,var(--color-primary)_50%,#000_50%)] [background-size:200%_100%] [background-position:0%_center] text-[18px] font-semibold text-white shadow-sm transition-[background-position,color,border-color,transform,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-position-[100%_center] group-hover:bg-position-[100%_center] hover:text-white group-hover:text-white hover:border-primary group-hover:border-primary hover:shadow-md hover:-translate-y-0.5 active:brightness-95 active:shadow-sm has-data-[icon=inline-end]:pr-[50px] [&_[data-icon=inline-end]]:absolute [&_[data-icon=inline-end]]:top-1/2 [&_[data-icon=inline-end]]:right-1.5 [&_[data-icon=inline-end]]:-translate-y-1/2 [&_[data-icon=inline-end]]:inline-flex [&_[data-icon=inline-end]]:size-[28px] [&_[data-icon=inline-end]]:min-h-[28px] [&_[data-icon=inline-end]]:min-w-[28px] [&_[data-icon=inline-end]]:items-center [&_[data-icon=inline-end]]:justify-center [&_[data-icon=inline-end]]:rounded-full [&_[data-icon=inline-end]]:bg-primary [&_[data-icon=inline-end]]:text-secondary [&_[data-icon=inline-end]]:[&_svg]:size-4",
        outline:
          "border-border bg-muted text-a7-text-gray hover:bg-background hover:border-border/80 hover:shadow-sm hover:text-a7-text-gray aria-expanded:bg-muted/80 dark:border-white/15 dark:bg-white/5 dark:text-a7-text-gray dark:hover:bg-white/10 dark:hover:border-white/20",
        secondary:
          "[background-image:linear-gradient(to_left,var(--color-primary)_50%,var(--color-secondary)_50%)] [background-size:200%_100%] [background-position:0%_center] text-primary shadow-sm transition-[background-position,color,transform,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-position-[100%_center] group-hover:bg-position-[100%_center] hover:text-secondary group-hover:text-secondary hover:shadow-md hover:-translate-y-0.5 active:brightness-95 active:shadow-sm",
        ghost:
          "text-a7-text-gray hover:bg-muted hover:text-a7-text-gray hover:shadow-sm aria-expanded:bg-muted aria-expanded:text-a7-text-gray dark:hover:bg-muted/50",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 hover:shadow-sm focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
        link: "text-primary underline-offset-4 hover:text-primary/80 hover:underline",
      },
      shape: {
        default: "rounded-lg",
        rounded: "rounded-2xl",
        pill: "rounded-full",
        square: "rounded-md",
      },
      size: {
        default:
          "h-[55px] min-h-[55px] gap-2 px-10 has-data-[icon=inline-end]:pr-9 has-data-[icon=inline-start]:pl-9",
        xs: "h-12 gap-2 px-3.5 text-xs in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3.5 [&_[data-icon]:not([class*='size-'])]:size-3.5 [&_[data-icon]_img:not([class*='size-'])]:size-3.5",
        sm: "h-11 min-h-11 gap-1.5 px-7 text-sm has-data-[icon=inline-end]:pr-6 has-data-[icon=inline-start]:pl-6 [&_svg:not([class*='size-'])]:size-4 [&_[data-icon]:not([class*='size-'])]:size-4 [&_[data-icon]_img:not([class*='size-'])]:size-4",
        lg: "h-14 min-h-14 gap-2 px-7 text-[15px] has-data-[icon=inline-end]:pr-6 has-data-[icon=inline-start]:pl-6",
        icon: "size-[55px] min-h-[55px] min-w-[55px] [&_svg:not([class*='size-'])]:size-6 [&_[data-icon]:not([class*='size-'])]:size-6",
        "icon-xs":
          "size-11 min-h-11 min-w-11 in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-4 [&_[data-icon]:not([class*='size-'])]:size-4",
        "icon-sm":
          "size-12 min-h-12 min-w-12 in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-5 [&_[data-icon]:not([class*='size-'])]:size-5",
        /** 36px tall — calendar day cells (width fills grid cell) */
        "icon-calendar":
          "h-9 max-h-9 min-h-9 w-full min-w-9 p-0 in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3.5 [&_[data-icon]:not([class*='size-'])]:size-3.5",
        "icon-lg": "size-[55px] min-h-[55px] min-w-[55px] [&_svg:not([class*='size-'])]:size-6 [&_[data-icon]:not([class*='size-'])]:size-6",
      },
    },
    compoundVariants: [
      {
        variant: "link",
        class: "!rounded-none",
      },
      {
        variant: "property",
        size: "default",
        class:
          "h-[38px] min-h-[38px] px-6 py-1 has-data-[icon=inline-end]:pr-[50px] has-data-[icon=inline-start]:pl-6",
      },
      {
        shape: "pill",
        size: "xs",
        class: "!rounded-full in-data-[slot=button-group]:rounded-full",
      },
      {
        shape: "pill",
        size: "sm",
        class: "!rounded-full in-data-[slot=button-group]:rounded-full",
      },
      {
        shape: "pill",
        size: "icon-xs",
        class: "!rounded-full in-data-[slot=button-group]:rounded-full",
      },
      {
        shape: "pill",
        size: "icon-sm",
        class: "!rounded-full in-data-[slot=button-group]:rounded-full",
      },
      {
        shape: "square",
        size: "xs",
        class: "!rounded-md in-data-[slot=button-group]:rounded-md",
      },
      {
        shape: "square",
        size: "sm",
        class: "!rounded-md in-data-[slot=button-group]:rounded-md",
      },
      {
        shape: "square",
        size: "icon-xs",
        class: "!rounded-md in-data-[slot=button-group]:rounded-md",
      },
      {
        shape: "square",
        size: "icon-sm",
        class: "!rounded-md in-data-[slot=button-group]:rounded-md",
      },
      {
        shape: "square",
        size: "icon-calendar",
        class: "!rounded-md in-data-[slot=button-group]:rounded-md",
      },
      {
        shape: "rounded",
        size: "xs",
        class: "!rounded-2xl in-data-[slot=button-group]:rounded-2xl",
      },
      {
        shape: "rounded",
        size: "sm",
        class: "!rounded-2xl in-data-[slot=button-group]:rounded-2xl",
      },
      {
        shape: "rounded",
        size: "icon-xs",
        class: "!rounded-2xl in-data-[slot=button-group]:rounded-2xl",
      },
      {
        shape: "rounded",
        size: "icon-sm",
        class: "!rounded-2xl in-data-[slot=button-group]:rounded-2xl",
      },
      {
        shape: "rounded",
        size: "icon-calendar",
        class: "!rounded-2xl in-data-[slot=button-group]:rounded-2xl",
      },
    ],
    defaultVariants: {
      variant: "default",
      shape: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  shape = "default",
  size = "default",
  asChild = false,
  label,
  icon,
  iconAlign = "start",
  iconLeft,
  iconRight,
  children,
  ...props
}: React.ComponentProps<"button"> &
  Pick<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "target" | "rel" | "download" | "hrefLang" | "ping" | "referrerPolicy"> &
  VariantProps<typeof buttonVariants> & {
    /** Merge styles onto child element (e.g. Next.js `Link`) instead of rendering a `button`. */
    asChild?: boolean
    /** Text label; use with optional `icon` / `iconAlign` instead of composing `children`. */
    label?: string
    /** Single icon node (e.g. `<Plus />`). Pair with `label` or use alone with `aria-label`. */
    icon?: React.ReactNode
    /** Where `icon` sits relative to `label`. Default `start` (left in LTR). */
    iconAlign?: "start" | "end"
    /** Icon before the label (LTR). Prefer over `icon` + `iconAlign` when you also need `iconRight`. */
    iconLeft?: React.ReactNode
    /** Icon after the label (LTR). */
    iconRight?: React.ReactNode
  }) {
  if (asChild) {
    return (
      <Slot
        data-slot="button"
        data-variant={variant}
        data-shape={shape}
        data-size={size}
        className={cn(buttonVariants({ variant, shape, size }), className)}
        {...props}
      >
        {children}
      </Slot>
    )
  }

  const Comp: React.ElementType = props.href ? "a" : "button"

  const dualIcons = iconLeft != null || iconRight != null
  const structured = label != null || icon != null || dualIcons

  const content = structured ? (
    dualIcons ? (
      <>
        {iconLeft != null ? <ButtonIcon side="start">{iconLeft}</ButtonIcon> : null}
        {label != null && label !== "" ? label : children}
        {iconRight != null ? <ButtonIcon side="end">{iconRight}</ButtonIcon> : null}
      </>
    ) : (
      <>
        {icon != null && iconAlign === "start" ? (
          <ButtonIcon side="start">{icon}</ButtonIcon>
        ) : null}
        {label != null && label !== "" ? label : null}
        {icon != null && iconAlign === "end" ? <ButtonIcon side="end">{icon}</ButtonIcon> : null}
      </>
    )
  ) : (
    children
  )

  if (Comp === "a") {
    const { href, target, rel, download, hrefLang, ping, referrerPolicy, ref: _ref, ...rest } = props
    return (
      <a
        data-slot="button"
        data-variant={variant}
        data-shape={shape}
        data-size={size}
        className={cn(buttonVariants({ variant, shape, size }), className)}
        href={href}
        target={target}
        rel={rel}
        download={download}
        hrefLang={hrefLang}
        ping={ping}
        referrerPolicy={referrerPolicy}
        {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </a>
    )
  }

  return (
    <button
      data-slot="button"
      data-variant={variant}
      data-shape={shape}
      data-size={size}
      className={cn(buttonVariants({ variant, shape, size }), className)}
      {...props}
    >
      {content}
    </button>
  )
}

function buttonIconProps(side: "start" | "end") {
  return {
    "data-icon": side === "start" ? ("inline-start" as const) : ("inline-end" as const),
  }
}

function ButtonIcon({
  side,
  className,
  ...props
}: React.ComponentProps<"span"> & { side: "start" | "end" }) {
  return (
    <span
      data-icon={side === "start" ? "inline-start" : "inline-end"}
      className={["inline-flex shrink-0 items-center justify-center", className]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  )
}

ButtonIcon.displayName = "ButtonIcon"

export { Button, ButtonIcon, buttonIconProps, buttonVariants }

Button.displayName = "Button"

export type ButtonProps = React.ComponentProps<"button"> &
  Pick<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "target" | "rel" | "download" | "hrefLang" | "ping" | "referrerPolicy"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
    label?: string
    icon?: React.ReactNode
    iconAlign?: "start" | "end"
    iconLeft?: React.ReactNode
    iconRight?: React.ReactNode
  }

export default Button
