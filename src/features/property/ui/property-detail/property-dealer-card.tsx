"use client"

import type { ComponentProps } from "react"
import Image from "next/image"
import { cva, type VariantProps } from "class-variance-authority"

import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar"
import type { PropertyListingDetail } from "@/features/property"
import { CARD_HOVER_GROUP, CARD_HOVER_IMAGE, CARD_HOVER_SURFACE } from "@/shared/lib/card-hover"
import { cn } from "@/shared/lib/cn"
import { SocialLinkButton } from "@/shared/ui/social-link-button"

import { PropertyDealerContactActions } from "@/features/property/ui/property-detail/property-dealer-contact-actions"
export {
  propertyDealerCardVariantsList,
  type PropertyDealerCardVariant,
} from "./property-dealer-card.constants"

const propertyDealerCardVariants = cva(
  "w-full overflow-hidden rounded-2xl border border-border bg-white",
  {
    variants: {
      variant: {
        default: "shadow-[0_8px_30px_rgba(0,0,0,0.08)]",
        elevated: "shadow-lg",
        flat: "shadow-none",
        compact: "shadow-sm",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const headerVariants = cva("relative w-full", {
  variants: {
    variant: {
      default: "h-28 md:h-32",
      elevated: "h-28 md:h-32",
      flat: "h-28 md:h-32",
      compact: "h-20 md:h-24",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

const avatarVariants = cva("border-4 border-white shadow-md", {
  variants: {
    variant: {
      default: "size-20",
      elevated: "size-20",
      flat: "size-20",
      compact: "size-16",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

export type PropertyDealerCardProperty = Pick<
  PropertyListingDetail,
  | "agentName"
  | "agentRole"
  | "agentAvatarUrl"
  | "dealerCardHeaderImageUrl"
  | "galleryImageUrls"
  | "imageUrls"
  | "agentSocialLinks"
  | "agentWhatsAppHref"
  | "agentPhoneHref"
>

export type PropertyDealerCardProps = Omit<ComponentProps<"aside">, "children" | "property"> &
  VariantProps<typeof propertyDealerCardVariants> & {
    property: PropertyDealerCardProperty
    /** Hide skyline header image (always hidden for `compact` when you want avatar-only — use `showHeader={false}`). */
    showHeader?: boolean
    /** Hide social icon row (hidden automatically for `compact`). */
    showSocial?: boolean
    className?: string
  }

function getInitials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase()
}

function resolveHeaderImage(property: PropertyDealerCardProperty) {
  return property.dealerCardHeaderImageUrl ?? property.galleryImageUrls[0] ?? property.imageUrls[0]
}

/**
 * Sticky property-detail dealer card: skyline header, avatar, social links, and contact CTAs.
 * Use `variant` for shadow density; `compact` tightens header/avatar and omits social icons.
 */
export function PropertyDealerCard({
  property,
  variant = "default",
  showHeader = true,
  showSocial,
  className,
  ...props
}: PropertyDealerCardProps) {
  const headerImage = resolveHeaderImage(property)
  const isCompact = variant === "compact"
  const showHeaderImage = showHeader && !isCompact
  const showSocialLinks = showSocial ?? (!isCompact && property.agentSocialLinks.length > 0)

  return (
    <aside
      className={cn(CARD_HOVER_GROUP, CARD_HOVER_SURFACE, propertyDealerCardVariants({ variant }), className)}
      aria-label="Property dealer"
      {...props}
    >
      {showHeaderImage ? (
        <div data-slot="header" className={cn(headerVariants({ variant }), "overflow-hidden")}>
          <Image src={headerImage} alt="" fill sizes="320px" className={cn("object-cover", CARD_HOVER_IMAGE)} />
        </div>
      ) : null}

      <div className={cn("relative px-5 pb-6", showHeaderImage ? "pt-0" : "pt-6")}>
        <div className={cn("flex justify-center", showHeaderImage ? "-mt-10" : null)}>
          <Avatar size="lg" shape="circle" className={avatarVariants({ variant })}>
            {property.agentAvatarUrl ? (
              <AvatarImage src={property.agentAvatarUrl} alt={property.agentName} />
            ) : null}
            <AvatarFallback className={cn("text-lg", isCompact && "text-sm")}>
              {getInitials(property.agentName)}
            </AvatarFallback>
          </Avatar>
        </div>

        <div className="mt-3 text-center">
          <p className={cn("font-heading font-bold text-a7-black", isCompact ? "text-base" : "text-lg")}>
            {property.agentName}
          </p>
          <p className="mt-0.5 text-sm text-muted-foreground">{property.agentRole}</p>
        </div>

        {showSocialLinks ? (
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            {property.agentSocialLinks.map((link) => (
              <SocialLinkButton key={link.platform} link={link} size="md" />
            ))}
          </div>
        ) : null}

        <PropertyDealerContactActions property={property} />
      </div>
    </aside>
  )
}

PropertyDealerCard.displayName = "PropertyDealerCard"

export { propertyDealerCardVariants }
