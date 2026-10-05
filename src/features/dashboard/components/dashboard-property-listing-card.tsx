"use client"

import Image from "next/image"
import Link from "next/link"
import { BedDouble, Car, MapPin } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import type { ComponentType } from "react"

import type { DashboardAgentPlatformBadge } from "./dashboard-agent-grid-card"
import { cn } from "@/shared/lib/cn"
import { ActionTooltip } from "@/shared/ui/action-tooltip"
import { Badge } from "@/shared/ui/badge"
import { Button } from "@/shared/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu"
import { AedText } from "@/shared/ui/aed-text"
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar"
import { WhatsAppColorIcon } from "@/shared/ui/iconify-icons"
import { SpacingWidth01Icon, Menu04Icon } from "@/shared/icons"

export type DashboardPropertyListingTransaction = "sale" | "rent"

export type DashboardPropertyListingCardMenuOption = {
  id: string
  label: string
  icon: LucideIcon | ComponentType<{ className?: string }>
  href?: string
  onClick?: () => void
}

export type DashboardPropertyListingCardAgent = {
  name: string
  avatarUrl?: string
  whatsAppHref?: string
  onWhatsAppClick?: () => void
}

export type DashboardPropertyListingCardProps = {
  imageUrl: string
  transaction: DashboardPropertyListingTransaction
  propertyType: string
  referenceId: string
  price: string
  portals?: DashboardAgentPlatformBadge[]
  areaSqft: number
  bedrooms: number
  parking: number
  location: string
  detailHref?: string
  onCardClick?: () => void
  menuOptions?: DashboardPropertyListingCardMenuOption[]
  agent?: DashboardPropertyListingCardAgent
  size?: "default" | "compact"
  className?: string
}

const transactionBadgeClassName: Record<DashboardPropertyListingTransaction, string> = {
  sale: "border-emerald-200 bg-emerald-50 text-emerald-700",
  rent: "border-sky-200 bg-sky-50 text-sky-700",
}

const transactionLabel: Record<DashboardPropertyListingTransaction, string> = {
  sale: "Sale",
  rent: "Rent",
}

const specBadgeClassName =
  "gap-1 border-border/80 bg-muted/60 px-2 py-1 text-[10px] font-normal leading-none text-a7-black normal-case"

const compactSpecBadgeClassName =
  "gap-0.5 border-border/80 bg-muted/60 px-1.5 py-0.5 text-[9px] font-normal leading-none text-a7-black normal-case"

function SpecBadge({
  icon: Icon,
  label,
  compact = false,
}: {
  icon: LucideIcon | ComponentType<{ className?: string }>
  label: string
  compact?: boolean
}) {
  return (
    <Badge
      variant="muted"
      size="xs"
      shape="pill"
      className={compact ? compactSpecBadgeClassName : specBadgeClassName}
    >
      <Icon className={cn("shrink-0", compact ? "size-2.5" : "size-3")} aria-hidden />
      {label}
    </Badge>
  )
}

export function DashboardPropertyListingCard({
  imageUrl,
  transaction,
  propertyType,
  referenceId,
  price,
  portals = [],
  areaSqft,
  bedrooms,
  parking,
  location,
  detailHref,
  onCardClick,
  menuOptions = [],
  agent,
  size = "default",
  className,
}: DashboardPropertyListingCardProps) {
  const isCompact = size === "compact"
  const hasMenu = menuOptions.length > 0

  const image = (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-2xl bg-muted">
      <Image
        src={imageUrl}
        alt=""
        fill
        className="object-cover"
        sizes={isCompact ? "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw" : "(max-width: 768px) 100vw, 33vw"}
      />
      <Badge
        variant="outline"
        size="default"
        shape="pill"
        className={cn(
          "absolute border font-semibold normal-case tracking-normal",
          isCompact
            ? "top-2 left-2 px-2 py-0.5 text-[10px]"
            : "top-3 left-3 px-3 py-1 text-xs",
          transactionBadgeClassName[transaction]
        )}
      >
        {transactionLabel[transaction]}
      </Badge>
    </div>
  )

  const imageContent = onCardClick ? (
    <button
      type="button"
      className="block w-full text-left"
      onClick={onCardClick}
      aria-label={`View listing ${referenceId}`}
    >
      {image}
    </button>
  ) : detailHref ? (
    <Link href={detailHref} className="block">
      {image}
    </Link>
  ) : (
    image
  )

  return (
    <article
      className={cn(
        "overflow-hidden rounded-2xl border border-neutral-200 bg-white",
        className
      )}
      data-listing-card={referenceId}
    >
      {imageContent}

      <div className={cn(isCompact ? "space-y-2.5 p-3" : "space-y-3 p-4")}>
        <div className="mb-1 flex items-start justify-between gap-2">
          <div className="inline-flex min-w-0 items-center gap-1.5">
            <p className={cn("text-muted-foreground", isCompact ? "text-[11px]" : "text-xs")}>{propertyType}</p>
            <span className="h-4 w-px shrink-0 bg-border" aria-hidden />
            <p className={cn("font-inter font-semibold text-primary", isCompact ? "text-xs" : "text-sm")}>
              {referenceId}
            </p>
          </div>

          {hasMenu ? (
            <DropdownMenu>
              <ActionTooltip label="Actions">
                <DropdownMenuTrigger asChild>
                  <Button
                    type="button"
                    variant="outline"
                    size="icon-xs"
                    shape="pill"
                    className={cn(
                      "border-border bg-white p-0 shadow-none hover:bg-muted/30",
                      isCompact ? "!size-7 !min-h-7 !min-w-7" : "!size-8 !min-h-8 !min-w-8"
                    )}
                    aria-label={`Open actions for ${referenceId}`}
                  >
                    <Menu04Icon size={isCompact ? 16 : 20} className="text-primary" aria-hidden />
                  </Button>
                </DropdownMenuTrigger>
              </ActionTooltip>
              <DropdownMenuContent align="end" className="w-40 rounded-xl p-1.5">
                {menuOptions.map((option) => {
                  const Icon = option.icon

                  if (option.href) {
                    return (
                      <DropdownMenuItem key={option.id} asChild className="rounded-lg px-3 py-2">
                        <Link href={option.href}>
                          <Icon className="size-4" />
                          {option.label}
                        </Link>
                      </DropdownMenuItem>
                    )
                  }

                  return (
                    <DropdownMenuItem
                      key={option.id}
                      className="rounded-lg px-3 py-2"
                      onClick={option.onClick}
                    >
                      <Icon className="size-4" />
                      {option.label}
                    </DropdownMenuItem>
                  )
                })}
              </DropdownMenuContent>
            </DropdownMenu>
          ) : null}
        </div>

        <h3
          className={cn(
            "font-inter font-bold leading-tight text-a7-black",
            isCompact ? "text-lg" : "text-xl"
          )}
        >
          <AedText text={price} />
        </h3>

        {portals.length > 0 ? (
          <div className="flex flex-wrap items-center gap-1.5">
            <span className={cn("text-muted-foreground", isCompact ? "text-[10px]" : "text-xs")}>Portals:</span>
            <div className="flex items-center gap-1">
              {portals.map((portal) => (
                <span
                  key={portal.id}
                  className={cn(
                    "relative flex overflow-hidden rounded-md bg-white",
                    isCompact ? "size-5" : "size-6"
                  )}
                  title={portal.label}
                >
                  {portal.imageSrc ? (
                    <Image
                      src={portal.imageSrc}
                      alt={portal.label}
                      fill
                      className="object-contain"
                      sizes={isCompact ? "20px" : "24px"}
                    />
                  ) : (
                    <span className="flex size-full items-center justify-center text-[8px] font-semibold text-muted-foreground">
                      {portal.label.slice(0, 1)}
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>
        ) : null}

        <div className="flex flex-wrap items-center gap-1.5">
          <SpecBadge icon={SpacingWidth01Icon} label={`${areaSqft.toLocaleString()} sqft`} compact={isCompact} />
          <SpecBadge icon={BedDouble} label={`${bedrooms} Bed`} compact={isCompact} />
          <SpecBadge icon={Car} label={`${parking} Parking`} compact={isCompact} />
        </div>

        <div
          className={cn(
            "flex items-start gap-1.5 text-muted-foreground",
            isCompact ? "text-[11px]" : "text-xs"
          )}
        >
          <MapPin className={cn("mt-0.5 shrink-0", isCompact ? "size-3" : "size-3.5")} aria-hidden />
          <span className="line-clamp-2">{location}</span>
        </div>

        {agent ? (
          <div
            className={cn(
              "flex items-center justify-between gap-3 border-t border-neutral-200",
              isCompact ? "pt-2.5" : "pt-3"
            )}
          >
            <div className="flex min-w-0 items-center gap-2">
              <Avatar className={cn("shrink-0", isCompact ? "size-8" : "size-9")}>
                {agent.avatarUrl ? <AvatarImage src={agent.avatarUrl} alt={agent.name} /> : null}
                <AvatarFallback>{agent.name.slice(0, 1)}</AvatarFallback>
              </Avatar>
              <p
                className={cn(
                  "truncate font-inter font-semibold text-a7-black",
                  isCompact ? "text-xs" : "text-sm"
                )}
              >
                {agent.name}
              </p>
            </div>

            {agent.whatsAppHref ? (
              <ActionTooltip label="WhatsApp">
                <Button
                  asChild
                  variant="ghost"
                  size="icon-xs"
                  shape="pill"
                  className={cn(
                    "shrink-0 bg-emerald-500 text-white hover:bg-emerald-600 hover:text-white",
                    isCompact ? "!size-8" : "!size-9"
                  )}
                >
                  <a href={agent.whatsAppHref} target="_blank" rel="noopener noreferrer" aria-label={`WhatsApp ${agent.name}`}>
                    <WhatsAppColorIcon className={cn("text-white", isCompact ? "size-3.5" : "size-4")} />
                  </a>
                </Button>
              </ActionTooltip>
            ) : (
              <ActionTooltip label="WhatsApp">
                <Button
                  type="button"
                  variant="ghost"
                  size="icon-xs"
                  shape="pill"
                  className={cn(
                    "shrink-0 bg-emerald-500 text-white hover:bg-emerald-600 hover:text-white",
                    isCompact ? "!size-8" : "!size-9"
                  )}
                  aria-label={`WhatsApp ${agent.name}`}
                  onClick={agent.onWhatsAppClick}
                >
                  <WhatsAppColorIcon className={cn("text-white", isCompact ? "size-3.5" : "size-4")} />
                </Button>
              </ActionTooltip>
            )}
          </div>
        ) : null}
      </div>
    </article>
  )
}

DashboardPropertyListingCard.displayName = "DashboardPropertyListingCard"
