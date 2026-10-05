"use client"

import Image from "next/image"

import type { DashboardAgentLeadRow } from "../agents/content/dashboard-agent-leads-mock-data"
import {
  LeadPipelineStageBadge,
  LeadTypeBadge,
  type LeadPipelineStage,
} from "@/shared/ui/dashboard/lead-badges"
import {
  getLeadChannelClassName,
} from "../content/dashboard-lead-ui"
import { cn } from "@/shared/lib/cn"
import { AedIcon } from "@/shared/ui/aed-text"
import { Badge, type BadgeProps } from "@/shared/ui/badge"

const leadGridBadgeClassName = "w-full justify-center py-2.5 text-xs font-semibold normal-case tracking-normal"

export type DashboardLeadChannelBadgeProps = {
  channel: DashboardAgentLeadRow["channel"]
  className?: string
  size?: BadgeProps["size"]
  fullWidth?: boolean
}

export function DashboardLeadChannelBadge({
  channel,
  className,
  size = "xs",
  fullWidth = false,
}: DashboardLeadChannelBadgeProps) {
  return (
    <Badge
      variant="outline"
      size={fullWidth ? "default" : size}
      shape="pill"
      className={cn(
        "gap-1.5 font-medium",
        getLeadChannelClassName(channel),
        fullWidth && leadGridBadgeClassName,
        className
      )}
    >
      <span className={cn("rounded-full bg-current", fullWidth ? "size-2" : "size-1.5")} aria-hidden />
      {channel}
    </Badge>
  )
}

export type DashboardLeadTypeBadgeProps = {
  leadType: string
  className?: string
  size?: BadgeProps["size"]
  fullWidth?: boolean
}

export function DashboardLeadTypeBadge({
  leadType,
  className,
  size = "default",
  fullWidth = false,
}: DashboardLeadTypeBadgeProps) {
  return (
    <LeadTypeBadge
      label={leadType}
      size={size}
      className={cn(fullWidth && leadGridBadgeClassName, className)}
    />
  )
}

export type DashboardLeadPipelineStageBadgeProps = {
  stage: DashboardAgentLeadRow["pipelineStage"]
  className?: string
  size?: BadgeProps["size"]
  fullWidth?: boolean
}

export function DashboardLeadPipelineStageBadge({
  stage,
  className,
  size = "default",
  fullWidth = false,
}: DashboardLeadPipelineStageBadgeProps) {
  return (
    <LeadPipelineStageBadge
      stage={stage as LeadPipelineStage}
      size={size}
      className={cn(fullWidth && leadGridBadgeClassName, className)}
    />
  )
}

export type DashboardLeadBudgetProps = {
  budget: string
  size?: "sm" | "lg"
  className?: string
}

export function DashboardLeadBudget({ budget, size = "sm", className }: DashboardLeadBudgetProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 font-semibold text-foreground",
        size === "lg" ? "text-xl leading-none" : "text-sm",
        className
      )}
    >
      <AedIcon className={size === "lg" ? "text-lg" : "text-sm"} />
      {budget}
    </span>
  )
}

export type DashboardLeadSourceProps = {
  source: string
  sourceLogo?: string
  className?: string
}

export function DashboardLeadSource({ source, sourceLogo, className }: DashboardLeadSourceProps) {
  return (
    <div className={cn("flex min-w-0 items-center gap-2", className)}>
      {sourceLogo ? (
        <span className="relative flex size-6 shrink-0 overflow-hidden rounded-md border border-border bg-white">
          <Image src={sourceLogo} alt={source} fill className="object-contain p-0.5" sizes="24px" />
        </span>
      ) : null}
      <span className="truncate text-sm text-foreground">{source}</span>
    </div>
  )
}
