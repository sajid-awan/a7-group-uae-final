"use client"

import type { LucideIcon } from "lucide-react"
import type { ReactNode } from "react"
import { UserRound } from "lucide-react"

import { cn } from "@/shared/lib/cn"
import { getInitials } from "@/shared/lib/get-initials"
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar"
import { Badge } from "@/shared/ui/badge"

export type DashboardMemberStatus = "active" | "inactive"

export type DashboardMemberCardMeta = {
  label: string
  value: string
  icon?: LucideIcon
  imageUrl?: string
}

export type DashboardMemberCardProps = {
  name: string
  email: string
  avatarUrl: string
  status: DashboardMemberStatus
  meta?: DashboardMemberCardMeta[]
  headerAction?: ReactNode
  className?: string
}

export function DashboardMemberStatusBadge({ status }: { status: DashboardMemberStatus }) {
  const isActive = status === "active"

  return (
    <Badge
      size="sm"
      shape="pill"
      className={cn(
        "border px-2.5 py-0.5 text-[10px] font-medium normal-case",
        isActive
          ? "border-[#B8E6C0] bg-[#E4F7E8] text-[#1B5E3B]"
          : "border-[#F5C2C7] bg-[#FDECEC] text-[#B42318]"
      )}
    >
      {isActive ? "Active" : "Inactive"}
    </Badge>
  )
}

function DashboardMemberMetaItem({
  label,
  value,
  icon: Icon = UserRound,
  imageUrl,
}: DashboardMemberCardMeta) {
  return (
    <div className="min-w-0 space-y-2">
      <p className="text-[11px] font-medium text-muted-foreground">{label}</p>
      <div className="flex min-w-0 items-center gap-2">
        {imageUrl ? (
          <Avatar size="xs" shape="circle" className="size-7 shrink-0">
            <AvatarImage src={imageUrl} alt={value} />
            <AvatarFallback>{getInitials(value, 1)}</AvatarFallback>
          </Avatar>
        ) : (
          <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#FBF4EA] text-primary">
            <Icon className="size-3.5" aria-hidden />
          </span>
        )}
        <p className="truncate text-sm font-semibold text-foreground">{value}</p>
      </div>
    </div>
  )
}

export function DashboardMemberCard({
  name,
  email,
  avatarUrl,
  status,
  meta = [],
  headerAction,
  className,
}: DashboardMemberCardProps) {
  return (
    <article
      className={cn(
        "flex h-full flex-col rounded-3xl border border-neutral-200 bg-white p-4 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.06)]",
        className
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <Avatar size="lg" shape="circle" className="size-12 shrink-0">
            <AvatarImage src={avatarUrl} alt={name} />
            <AvatarFallback>{getInitials(name)}</AvatarFallback>
          </Avatar>
          <div className="min-w-0">
            <h3 className="truncate font-inter text-sm font-bold tracking-wide text-foreground uppercase">
              {name}
            </h3>
            <p className="mt-1 truncate text-xs text-muted-foreground">{email}</p>
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <DashboardMemberStatusBadge status={status} />
          {headerAction}
        </div>
      </div>

      {meta.length > 0 ? (
        <>
          <div className="my-4 border-t border-dashed border-neutral-200" />
          <div className="mt-auto grid grid-cols-2 gap-4">
            {meta.map((item) => (
              <DashboardMemberMetaItem key={`${item.label}-${item.value}`} {...item} />
            ))}
          </div>
        </>
      ) : null}
    </article>
  )
}

DashboardMemberCard.displayName = "DashboardMemberCard"
