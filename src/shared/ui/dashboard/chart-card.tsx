"use client"

import type { ReactNode } from "react"
import { Download, RefreshCw } from "lucide-react"

import { Button } from "@/shared/ui/button"
import { Card, CardContent, CardHeader } from "@/shared/ui/card"
import { ActionTooltip } from "@/shared/ui/action-tooltip"
import { InfoTooltip } from "@/shared/ui/info-tooltip"
import { cn } from "@/shared/lib/cn"

export type ChartCardProps = {
  title: string
  description?: string
  titleClassName?: string
  action?: ReactNode
  children: ReactNode
  className?: string
  contentClassName?: string
  showExport?: boolean
  showInfo?: boolean
  infoTooltipContent?: ReactNode
  infoTooltipTitle?: ReactNode
  infoTooltipVariant?: "dark" | "soft"
  showRefresh?: boolean
  onRefresh?: () => void
}

export function ChartCard({
  title,
  description,
  titleClassName,
  action,
  children,
  className,
  contentClassName,
  showExport = true,
  showInfo = false,
  infoTooltipContent,
  infoTooltipTitle,
  infoTooltipVariant = "dark",
  showRefresh = true,
  onRefresh,
}: ChartCardProps) {
  return (
    <Card
      data-slot="chart-card"
      className={cn("rounded-2xl border-0 bg-white shadow-none", className)}
    >
      <CardHeader className="flex-row items-start justify-between gap-3 space-y-0 pb-3">
        <div className="min-w-0">
          <h3 className={cn("font-inter text-base font-semibold text-black", titleClassName)}>
            {title}
          </h3>
          {description ? (
            <p className="mt-0.5 text-sm text-muted-foreground">{description}</p>
          ) : null}
        </div>
        <div className="flex shrink-0 items-center gap-1">
          {action}
          {showInfo ? (
            <InfoTooltip
              title={infoTooltipTitle}
              content={infoTooltipContent}
              variant={infoTooltipVariant}
              trigger="icon-button"
              icon="info"
            />
          ) : null}
          {showRefresh ? (
            <ActionTooltip label="Refresh">
              <Button
                variant="ghost"
                size="icon"
                shape="square"
                className="size-8 min-h-8 min-w-8 text-muted-foreground"
                aria-label="Refresh chart"
                onClick={onRefresh}
              >
                <RefreshCw className="size-4" />
              </Button>
            </ActionTooltip>
          ) : null}
          {showExport ? (
            <ActionTooltip label="Download">
              <Button
                variant="ghost"
                size="icon"
                shape="square"
                className="size-8 min-h-8 min-w-8 text-muted-foreground"
                aria-label="Export chart"
              >
                <Download className="size-4" />
              </Button>
            </ActionTooltip>
          ) : null}
        </div>
      </CardHeader>
      <CardContent className={cn("pt-0", contentClassName)}>{children}</CardContent>
    </Card>
  )
}

ChartCard.displayName = "ChartCard"
