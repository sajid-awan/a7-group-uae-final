"use client"

import { cn } from "@/shared/lib/cn"
import { Badge, type BadgeProps } from "@/shared/ui/badge"

export type LeadPipelineStage =
  | "New Lead"
  | "Not Reach"
  | "Lost Deal"
  | "Not Respond"
  | "Qualified"
  | "Closed"

export const LEAD_TYPE_BADGE_CLASSNAME = "border-[#F5E6D3] bg-[#FBF4EA] text-[#B68E45]"

export const LEAD_PIPELINE_STAGE_BADGE_CLASSNAME: Record<LeadPipelineStage, string> = {
  "New Lead": "border-sky-200 bg-sky-50 text-sky-700",
  "Not Reach": "border-rose-200 bg-rose-50 text-rose-700",
  "Lost Deal": "border-amber-200 bg-amber-50 text-amber-700",
  "Not Respond": "border-neutral-200 bg-neutral-100 text-neutral-600",
  Qualified: "border-emerald-200 bg-emerald-50 text-emerald-700",
  Closed: "border-emerald-200 bg-emerald-50 text-emerald-800",
}

export type LeadTypeBadgeProps = {
  label?: string
  className?: string
  size?: BadgeProps["size"]
}

export function LeadTypeBadge({ label = "Lead", className, size = "default" }: LeadTypeBadgeProps) {
  return (
    <Badge
      variant="outline"
      size={size}
      shape="pill"
      className={cn("font-medium normal-case tracking-normal", LEAD_TYPE_BADGE_CLASSNAME, className)}
    >
      {label}
    </Badge>
  )
}

export type LeadPipelineStageBadgeProps = {
  stage: LeadPipelineStage
  className?: string
  size?: BadgeProps["size"]
}

export function LeadPipelineStageBadge({
  stage,
  className,
  size = "default",
}: LeadPipelineStageBadgeProps) {
  return (
    <Badge
      variant="outline"
      size={size}
      shape="pill"
      className={cn(
        "font-medium normal-case tracking-normal",
        LEAD_PIPELINE_STAGE_BADGE_CLASSNAME[stage],
        className
      )}
    >
      {stage}
    </Badge>
  )
}

LeadTypeBadge.displayName = "LeadTypeBadge"
LeadPipelineStageBadge.displayName = "LeadPipelineStageBadge"
