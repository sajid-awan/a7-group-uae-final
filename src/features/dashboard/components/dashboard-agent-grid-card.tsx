"use client"

import { useMemo } from "react"
import Link from "next/link"
import { Eye, List, Mail, MoreVertical, Pencil, Phone } from "lucide-react"
import type { LucideIcon } from "lucide-react"

import { CheckVerified02Icon } from "@/shared/icons"

import { cn } from "@/shared/lib/cn"
import { ActionTooltip } from "@/shared/ui/action-tooltip"
import { Button } from "@/shared/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu"
import { WhatsAppColorIcon } from "@/shared/ui/iconify-icons"

export type DashboardAgentPlatformBadge = {
  id: string
  label: string
  imageSrc?: string
  className?: string
}

export type DashboardAgentGridCardStats = {
  listings: number
  calls: number
  leads: number
  whatsapp: number
}

export type DashboardAgentGridCardMenuOption = {
  id: string
  label: string
  icon: LucideIcon
  href?: string
  onClick?: () => void
}

export type DashboardAgentGridCardProps = {
  name: string
  imageSrc: string
  stats: DashboardAgentGridCardStats
  platformBadges?: DashboardAgentPlatformBadge[]
  isVerified?: boolean
  menuOptions?: DashboardAgentGridCardMenuOption[]
  editHref?: string
  detailHref?: string
  className?: string
  onEmailClick?: () => void
  onCallClick?: () => void
  onWhatsAppClick?: () => void
  onEditClick?: () => void
  onViewDetailClick?: () => void
}

const contactActionClassName =
  "size-8 rounded-full border-0 bg-transparent p-0 text-muted-foreground shadow-none hover:bg-neutral-100"

const menuButtonClassName =
  "absolute top-3 right-3 size-8 border-white/80 bg-white/95 p-0 text-muted-foreground shadow-sm hover:bg-white"

const menuItemClassName = "rounded-lg px-3 py-2"

function AgentStatItem({
  icon: Icon,
  value,
  label,
  iconClassName,
}: {
  icon: typeof List
  value: number
  label: string
  iconClassName?: string
}) {
  return (
    <div className="flex min-w-0 flex-1 items-center justify-center gap-1.5">
      <Icon className={cn("size-3.5 shrink-0 text-muted-foreground", iconClassName)} aria-hidden />
      <span className="font-inter text-xs font-medium text-foreground">{value}</span>
      <span className="sr-only">{label}</span>
    </div>
  )
}

export function DashboardAgentGridCard({
  name,
  imageSrc,
  stats,
  platformBadges = [],
  isVerified = true,
  menuOptions: menuOptionsProp,
  editHref,
  detailHref,
  className,
  onEmailClick,
  onCallClick,
  onWhatsAppClick,
  onEditClick,
  onViewDetailClick,
}: DashboardAgentGridCardProps) {
  const menuOptions = useMemo(() => {
    if (menuOptionsProp?.length) {
      return menuOptionsProp
    }

    const options: DashboardAgentGridCardMenuOption[] = []

    if (editHref) {
      options.push({ id: "edit", label: "Edit", icon: Pencil, href: editHref })
    } else if (onEditClick) {
      options.push({ id: "edit", label: "Edit", icon: Pencil, onClick: onEditClick })
    }

    if (detailHref) {
      options.push({ id: "detail", label: "View detail", icon: Eye, href: detailHref })
    } else if (onViewDetailClick) {
      options.push({ id: "detail", label: "View detail", icon: Eye, onClick: onViewDetailClick })
    }

    return options
  }, [detailHref, editHref, menuOptionsProp, onEditClick, onViewDetailClick])

  const hasMenuActions = menuOptions.length > 0

  return (
    <article
      data-slot="dashboard-agent-grid-card"
      className={cn(
        "flex w-full flex-col overflow-hidden rounded-[28px] border border-neutral-200 bg-white transition-shadow",
        detailHref && "hover:shadow-md",
        className
      )}
    >
      <div className="relative">
        {detailHref ? (
          <Link href={detailHref} className="block" aria-label={`View ${name} profile`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imageSrc}
              alt=""
              className="aspect-square w-full rounded-t-[28px] object-cover object-top"
            />
          </Link>
        ) : (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={imageSrc}
            alt={`${name} portrait`}
            className="aspect-square w-full rounded-t-[28px] object-cover object-top"
          />
        )}
        {hasMenuActions ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                type="button"
                variant="outline"
                size="xs"
                shape="pill"
                className={menuButtonClassName}
                aria-label={`Open actions for ${name}`}
              >
                <MoreVertical className="size-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-40 rounded-xl p-1.5">
              {menuOptions.map((option) => {
                const Icon = option.icon

                if (option.href) {
                  return (
                    <DropdownMenuItem key={option.id} asChild className={menuItemClassName}>
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
                    className={menuItemClassName}
                    onClick={option.onClick}
                  >
                    <Icon className="size-4" />
                    {option.label}
                  </DropdownMenuItem>
                )
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button
            type="button"
            variant="outline"
            size="xs"
            shape="pill"
            className={menuButtonClassName}
            aria-label={`Open actions for ${name}`}
            disabled
          >
            <MoreVertical className="size-4" />
          </Button>
        )}
      </div>

      <div className="flex flex-1 flex-col space-y-3 px-4 pt-3 pb-4">
        <div className="flex min-w-0 items-center gap-1.5">
          {detailHref ? (
            <Link
              href={detailHref}
              className="truncate font-inter text-sm font-semibold text-neutral-900 font-inter hover:text-primary"
            >
              {name}
            </Link>
          ) : (
            <h3 className="truncate font-inter text-sm font-semibold text-neutral-900 font-inter">{name}</h3>
          )}
          {isVerified ? (
            <CheckVerified02Icon
              size={24}
              className="shrink-0 text-emerald-500"
              aria-label="Verified agent"
              aria-hidden={false}
            />
          ) : null}
        </div>

        <div className="flex items-center gap-1.5">
          <ActionTooltip label="Email">
            <Button
              type="button"
              variant="ghost"
              size="xs"
              shape="pill"
              className={contactActionClassName}
              aria-label={`Email ${name}`}
              onClick={onEmailClick}
            >
              <Mail className="size-4" />
            </Button>
          </ActionTooltip>
          <ActionTooltip label="Call">
            <Button
              type="button"
              variant="ghost"
              size="xs"
              shape="pill"
              className={cn(contactActionClassName, "text-[#2563eb] hover:bg-blue-50 hover:text-[#2563eb]")}
              aria-label={`Call ${name}`}
              onClick={onCallClick}
            >
              <Phone className="size-4" />
            </Button>
          </ActionTooltip>
          <ActionTooltip label="WhatsApp">
            <Button
              type="button"
              variant="ghost"
              size="xs"
              shape="pill"
              className={cn(contactActionClassName, "hover:bg-emerald-50")}
              aria-label={`WhatsApp ${name}`}
              onClick={onWhatsAppClick}
            >
              <WhatsAppColorIcon className="size-4" />
            </Button>
          </ActionTooltip>
        </div>

        {platformBadges.length > 0 ? (
          <div className="flex items-center gap-2.5">
            <span className="h-6 w-px shrink-0 bg-neutral-200" aria-hidden />
            <div className="flex flex-wrap items-center gap-1.5">
              {platformBadges.map((badge) => (
                <span
                  key={badge.id}
                  className={cn(
                    "inline-flex size-7 items-center justify-center overflow-hidden rounded-md",
                    badge.imageSrc ? "bg-white" : "text-[10px] font-semibold uppercase",
                    badge.className
                  )}
                >
                  {badge.imageSrc ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={badge.imageSrc}
                      alt={badge.label}
                      className="size-full object-contain"
                    />
                  ) : (
                    badge.label
                  )}
                </span>
              ))}
            </div>
          </div>
        ) : null}

        <div className="flex items-center justify-between border-t border-neutral-200 py-3">
          <AgentStatItem icon={List} value={stats.listings} label="Listings" />
          <AgentStatItem icon={Phone} value={stats.calls} label="Calls" />
          <AgentStatItem icon={Eye} value={stats.leads} label="Leads" />
          <div className="flex min-w-0 flex-1 items-center justify-center gap-1.5">
            <WhatsAppColorIcon className="size-3.5 shrink-0" aria-hidden />
            <span className="font-inter text-xs font-medium text-foreground">{stats.whatsapp}</span>
            <span className="sr-only">Whatsapp messages</span>
          </div>
        </div>
      </div>
    </article>
  )
}

DashboardAgentGridCard.displayName = "DashboardAgentGridCard"
