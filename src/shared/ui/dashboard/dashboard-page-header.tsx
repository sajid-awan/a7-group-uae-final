"use client"

import type { ReactNode } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { DASHBOARD_TOOLBAR_ICON_BUTTON_CLASSNAME } from "@/features/dashboard/content/dashboard-view-mode"
import { cn } from "@/shared/lib/cn"
import { Button } from "@/shared/ui/button"

export type DashboardPageHeaderProps = {
  title: ReactNode
  subtitle?: string
  actions?: ReactNode
  tabs?: ReactNode
  backHref?: string
  onBack?: () => void
  backLabel?: string
  className?: string
}

export function DashboardPageHeader({
  title,
  subtitle,
  actions,
  tabs,
  backHref,
  onBack,
  backLabel = "Go back",
  className,
}: DashboardPageHeaderProps) {
  const backButton =
    backHref || onBack ? (
      <BackButton href={backHref} onClick={onBack} label={backLabel} />
    ) : null

  return (
    <header className={cn("space-y-6", className)}>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex min-w-0 items-start gap-3">
          {backButton}
          <div className="min-w-0 space-y-1">
            <h1 className="font-inter text-2xl font-semibold text-black">{title}</h1>
            {subtitle ? (
              <p className="max-w-3xl text-sm text-muted-foreground">{subtitle}</p>
            ) : null}
          </div>
        </div>
        {actions}
      </div>
      {tabs}
    </header>
  )
}

DashboardPageHeader.displayName = "DashboardPageHeader"

type BackButtonProps = {
  href?: string
  onClick?: () => void
  label: string
}

function BackButton({ href, onClick, label }: BackButtonProps) {
  const className = cn(DASHBOARD_TOOLBAR_ICON_BUTTON_CLASSNAME, "mt-1 shrink-0")

  if (href) {
    return (
      <Button asChild variant="outline" size="xs" shape="square" className={className} aria-label={label}>
        <Link href={href}>
          <ArrowLeft className="size-4" aria-hidden />
        </Link>
      </Button>
    )
  }

  return (
    <Button
      type="button"
      variant="outline"
      size="xs"
      shape="square"
      className={className}
      aria-label={label}
      onClick={onClick}
    >
      <ArrowLeft className="size-4" aria-hidden />
    </Button>
  )
}
