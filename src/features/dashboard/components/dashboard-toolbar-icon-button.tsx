"use client"

import type { ComponentProps, ReactNode } from "react"

import { DASHBOARD_TOOLBAR_ICON_BUTTON_CLASSNAME } from "@/features/dashboard/content/dashboard-view-mode"
import { cn } from "@/shared/lib/cn"
import { ActionTooltip } from "@/shared/ui/action-tooltip"
import { Button } from "@/shared/ui/button"

export type DashboardToolbarIconButtonProps = Omit<ComponentProps<typeof Button>, "children"> & {
  label: string
  children: ReactNode
  showTooltip?: boolean
}

export function DashboardToolbarIconButton({
  label,
  children,
  className,
  showTooltip = true,
  type = "button",
  variant = "outline",
  size = "xs",
  shape = "square",
  ...props
}: DashboardToolbarIconButtonProps) {
  const button = (
    <Button
      type={type}
      variant={variant}
      size={size}
      shape={shape}
      className={cn(DASHBOARD_TOOLBAR_ICON_BUTTON_CLASSNAME, className)}
      aria-label={label}
      {...props}
    >
      {children}
    </Button>
  )

  if (!showTooltip) return button

  return <ActionTooltip label={label}>{button}</ActionTooltip>
}

DashboardToolbarIconButton.displayName = "DashboardToolbarIconButton"
