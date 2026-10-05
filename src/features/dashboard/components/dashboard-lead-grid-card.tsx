"use client"

import { Clock3, Pencil } from "lucide-react"

import type { DashboardAgentLeadRow } from "../agents/content/dashboard-agent-leads-mock-data"
import { formatLeadLastUpdated } from "../content/dashboard-lead-ui"
import {
  DashboardLeadBudget,
  DashboardLeadChannelBadge,
  DashboardLeadPipelineStageBadge,
  DashboardLeadSource,
  DashboardLeadTypeBadge,
} from "./dashboard-lead-ui"
import { getInitials } from "@/shared/lib/get-initials"
import { cn } from "@/shared/lib/cn"
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar"
import { Button } from "@/shared/ui/button"

const sectionDividerClassName = "border-neutral-300"

export type DashboardLeadGridCardProps = {
  lead: DashboardAgentLeadRow
  className?: string
  onEdit?: (lead: DashboardAgentLeadRow) => void
}

export function DashboardLeadGridCard({ lead, className, onEdit }: DashboardLeadGridCardProps) {
  return (
    <article
      className={cn(
        "flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white",
        className
      )}
    >
      <div className="flex items-start justify-between gap-3 px-4 py-4">
        <div className="flex min-w-0 items-start gap-3">
          <Avatar size="md" shape="circle" className="size-10 shrink-0">
            {lead.avatarUrl ? <AvatarImage src={lead.avatarUrl} alt={lead.name} /> : null}
            <AvatarFallback className="text-xs">{getInitials(lead.name)}</AvatarFallback>
          </Avatar>
          <div className="min-w-0">
            <p className="truncate font-inter text-sm font-semibold text-foreground">{lead.name}</p>
            <p className="mt-0.5 truncate text-xs text-muted-foreground">{lead.phone}</p>
          </div>
        </div>
        <DashboardLeadBudget budget={lead.budget} size="lg" className="shrink-0" />
      </div>

      <div
        className={cn(
          "grid grid-cols-3 gap-2 border-y border-dashed px-4 py-3",
          sectionDividerClassName
        )}
      >
        <DashboardLeadChannelBadge channel={lead.channel} fullWidth />
        <DashboardLeadTypeBadge leadType={lead.leadType} fullWidth />
        <DashboardLeadPipelineStageBadge stage={lead.pipelineStage} fullWidth />
      </div>

      <div className="mt-auto flex items-center justify-between gap-3 px-4 py-3">
        <DashboardLeadSource source={lead.source} sourceLogo={lead.sourceLogo} className="min-w-0 flex-1" />

        <div className="flex shrink-0 items-center gap-3">
          <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Clock3 className="size-3.5 shrink-0" aria-hidden />
            <span className="whitespace-nowrap">{formatLeadLastUpdated(lead.updatedDays)}</span>
          </p>
          <Button
            type="button"
            variant="ghost"
            size="xs"
            shape="pill"
            className="h-8 w-8 shrink-0 p-0 text-muted-foreground hover:text-foreground"
            aria-label={`Edit ${lead.name}`}
            onClick={() => onEdit?.(lead)}
          >
            <Pencil className="size-4" />
          </Button>
        </div>
      </div>
    </article>
  )
}

DashboardLeadGridCard.displayName = "DashboardLeadGridCard"
