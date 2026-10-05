"use client"

import type { LucideIcon } from "lucide-react"
import { Inbox } from "lucide-react"

import { cn } from "@/shared/lib/cn"

export type DashboardEmptyStateProps = {
  icon?: LucideIcon
  title: string
  description?: string
  className?: string
}

export function DashboardEmptyState({
  icon: Icon = Inbox,
  title,
  description,
  className,
}: DashboardEmptyStateProps) {
  return (
    <div
      role="status"
      className={cn(
        "flex flex-col items-center justify-center rounded-2xl border border-border bg-white px-6 py-16 text-center shadow-sm",
        className
      )}
    >
      <div className="mb-4 flex size-14 items-center justify-center rounded-full bg-muted/60 text-muted-foreground">
        <Icon className="size-7" aria-hidden />
      </div>
      <h2 className="font-inter text-lg font-semibold text-foreground">{title}</h2>
      {description ? (
        <p className="mt-2 max-w-md text-sm text-muted-foreground">{description}</p>
      ) : null}
    </div>
  )
}

DashboardEmptyState.displayName = "DashboardEmptyState"
