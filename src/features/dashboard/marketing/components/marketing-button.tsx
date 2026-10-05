import type { ComponentProps } from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/shared/lib/cn"
import { Button } from "@/shared/ui/button"

const marketingButtonToneVariants = cva("", {
  variants: {
    tone: {
      brand: "",
      primary: "bg-[#8B6E4E] text-white hover:bg-[#7A6044]",
      accent: "border-[#DDD6FE] text-[#7C3AED] hover:bg-[#F5F3FF]",
      outline: "border-neutral-200 bg-white shadow-none hover:bg-neutral-50",
      ghost: "",
      dark: "bg-neutral-900 text-white hover:bg-neutral-800",
    },
  },
  defaultVariants: {
    tone: "outline",
  },
})

export type MarketingButtonTone = NonNullable<VariantProps<typeof marketingButtonToneVariants>["tone"]>

function resolveMarketingButtonVariant(
  tone: MarketingButtonTone,
  variant?: ComponentProps<typeof Button>["variant"]
) {
  if (variant) return variant
  if (tone === "brand" || tone === "primary" || tone === "dark") return "default"
  if (tone === "ghost") return "ghost"
  return "outline"
}

export type MarketingButtonProps = ComponentProps<typeof Button> &
  VariantProps<typeof marketingButtonToneVariants> & {
    tone?: MarketingButtonTone
  }

export function MarketingButton({
  tone = "outline",
  variant,
  size = "sm",
  shape = "rounded",
  className,
  ...props
}: MarketingButtonProps) {
  return (
    <Button
      variant={resolveMarketingButtonVariant(tone, variant)}
      size={size}
      shape={shape}
      className={cn(marketingButtonToneVariants({ tone }), className)}
      {...props}
    />
  )
}

MarketingButton.displayName = "MarketingButton"

export type MarketingIconButtonProps = ComponentProps<typeof Button> &
  VariantProps<typeof marketingButtonToneVariants> & {
    tone?: MarketingButtonTone
  }

export function MarketingIconButton({
  tone = "ghost",
  variant,
  size = "icon-sm",
  shape = "pill",
  className,
  ...props
}: MarketingIconButtonProps) {
  return (
    <Button
      variant={resolveMarketingButtonVariant(tone, variant)}
      size={size}
      shape={shape}
      className={cn(marketingButtonToneVariants({ tone }), className)}
      {...props}
    />
  )
}

MarketingIconButton.displayName = "MarketingIconButton"
