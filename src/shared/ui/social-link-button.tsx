"use client"

import { Icon } from "@iconify/react"
import { cva, type VariantProps } from "class-variance-authority"

import type { PropertyAgentSocialLink } from "@/features/property"
import { cn } from "@/shared/lib/cn"
import { ActionTooltip } from "@/shared/ui/action-tooltip"

const SOCIAL_ICONS: Record<PropertyAgentSocialLink["platform"], string> = {
  facebook: "mdi:facebook",
  linkedin: "mdi:linkedin",
  instagram: "mdi:instagram",
  youtube: "mdi:youtube",
  x: "mdi:twitter",
}

const SOCIAL_LABELS: Record<PropertyAgentSocialLink["platform"], string> = {
  facebook: "Facebook",
  linkedin: "LinkedIn",
  instagram: "Instagram",
  youtube: "YouTube",
  x: "Twitter",
}

const socialLinkButtonVariants = cva(
  "flex items-center justify-center rounded-full border border-border text-a7-text-gray transition hover:border-primary/40 hover:text-primary",
  {
    variants: {
      size: {
        sm: "size-8 [&_svg]:size-3.5",
        md: "size-9 [&_svg]:size-4",
      },
    },
    defaultVariants: {
      size: "sm",
    },
  }
)

export type SocialLinkButtonProps = {
  link: PropertyAgentSocialLink
  className?: string
} & VariantProps<typeof socialLinkButtonVariants>

export function SocialLinkButton({ link, size, className }: SocialLinkButtonProps) {
  const label = SOCIAL_LABELS[link.platform]

  return (
    <ActionTooltip label={label}>
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className={cn(socialLinkButtonVariants({ size }), className)}
      >
        <Icon icon={SOCIAL_ICONS[link.platform]} aria-hidden />
      </a>
    </ActionTooltip>
  )
}

SocialLinkButton.displayName = "SocialLinkButton"
