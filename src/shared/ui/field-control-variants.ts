import { cva, type VariantProps } from "class-variance-authority"

/**
 * Shared theme for {@link Checkbox} and {@link RadioField} surfaces (border, hover, focus, checked / indeterminate).
 * Checkbox sets icon color via `currentColor` on checked states; radio uses {@link fieldControlRadioIndicatorVariants} for the dot.
 */
export const fieldControlThemeVariants = cva(
  "border bg-white shadow-sm outline-none transition-colors hover:border-muted-foreground/45 focus-visible:ring-[3px] focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: [
          "border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50",
          "data-[state=checked]:border-primary data-[state=checked]:bg-primary/10 data-[state=checked]:text-primary",
          "data-[state=indeterminate]:border-primary data-[state=indeterminate]:bg-primary/10 data-[state=indeterminate]:text-primary",
          "dark:data-[state=checked]:bg-primary/15 dark:data-[state=indeterminate]:bg-primary/15",
        ].join(" "),
        primary: [
          "border-primary/40 text-primary focus-visible:border-primary focus-visible:ring-primary/35",
          "data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
          "data-[state=indeterminate]:border-primary data-[state=indeterminate]:bg-primary data-[state=indeterminate]:text-primary-foreground",
        ].join(" "),
        secondary: [
          "border-secondary/35 text-secondary focus-visible:border-secondary focus-visible:ring-secondary/30",
          "data-[state=checked]:border-secondary data-[state=checked]:bg-secondary data-[state=checked]:text-secondary-foreground",
          "data-[state=indeterminate]:border-secondary data-[state=indeterminate]:bg-secondary data-[state=indeterminate]:text-secondary-foreground",
        ].join(" "),
        destructive: [
          "border-destructive/35 text-destructive focus-visible:border-destructive focus-visible:ring-destructive/25",
          "data-[state=checked]:border-destructive data-[state=checked]:bg-destructive/90 data-[state=checked]:text-destructive-foreground",
          "data-[state=indeterminate]:border-destructive data-[state=indeterminate]:bg-destructive/90 data-[state=indeterminate]:text-destructive-foreground",
        ].join(" "),
        success: [
          "border-emerald-600/35 text-emerald-800 focus-visible:border-emerald-600 focus-visible:ring-emerald-600/30 dark:border-emerald-500/35 dark:text-emerald-100",
          "data-[state=checked]:border-emerald-600 data-[state=checked]:bg-emerald-600 data-[state=checked]:text-white dark:data-[state=checked]:border-emerald-500 dark:data-[state=checked]:bg-emerald-500",
          "data-[state=indeterminate]:border-emerald-600 data-[state=indeterminate]:bg-emerald-600 data-[state=indeterminate]:text-white dark:data-[state=indeterminate]:border-emerald-500 dark:data-[state=indeterminate]:bg-emerald-500",
        ].join(" "),
        warning: [
          "border-amber-600/35 text-amber-950 focus-visible:border-amber-600 focus-visible:ring-amber-500/35 dark:border-amber-500/35 dark:text-amber-50",
          "data-[state=checked]:border-amber-600 data-[state=checked]:bg-amber-500 data-[state=checked]:text-amber-950 dark:data-[state=checked]:bg-amber-400 dark:data-[state=checked]:text-amber-950",
          "data-[state=indeterminate]:border-amber-600 data-[state=indeterminate]:bg-amber-500 data-[state=indeterminate]:text-amber-950 dark:data-[state=indeterminate]:bg-amber-400 dark:data-[state=indeterminate]:text-amber-950",
        ].join(" "),
        info: [
          "border-sky-600/35 text-sky-950 focus-visible:border-sky-600 focus-visible:ring-sky-500/35 dark:border-sky-400/35 dark:text-sky-50",
          "data-[state=checked]:border-sky-600 data-[state=checked]:bg-sky-600 data-[state=checked]:text-white dark:data-[state=checked]:border-sky-500 dark:data-[state=checked]:bg-sky-500",
          "data-[state=indeterminate]:border-sky-600 data-[state=indeterminate]:bg-sky-600 data-[state=indeterminate]:text-white dark:data-[state=indeterminate]:border-sky-500 dark:data-[state=indeterminate]:bg-sky-500",
        ].join(" "),
        muted: [
          "border-muted-foreground/30 text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50",
          "data-[state=checked]:border-muted-foreground/45 data-[state=checked]:bg-muted data-[state=checked]:text-a7-text-gray",
          "data-[state=indeterminate]:border-muted-foreground/45 data-[state=indeterminate]:bg-muted data-[state=indeterminate]:text-a7-text-gray",
        ].join(" "),
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export type FieldControlVariant = NonNullable<VariantProps<typeof fieldControlThemeVariants>["variant"]>

/** Inner radio dot — matches {@link fieldControlThemeVariants} variant. */
export const fieldControlRadioIndicatorVariants = cva("block aspect-square w-[42%] shrink-0 rounded-full", {
  variants: {
    variant: {
      default: "bg-primary",
      primary: "bg-primary-foreground",
      secondary: "bg-secondary-foreground",
      destructive: "bg-destructive-foreground",
      success: "bg-white dark:bg-emerald-950",
      warning: "bg-amber-950",
      info: "bg-white dark:bg-sky-950",
      muted: "bg-foreground",
    },
  },
  defaultVariants: { variant: "default" },
})
