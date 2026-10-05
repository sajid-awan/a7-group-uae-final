"use client"

import { Pencil } from "lucide-react"

import type { DashboardAgentLeadRow } from "../agents/content/dashboard-agent-leads-mock-data"
import { formatLeadUpdatedOn } from "../content/dashboard-lead-ui"
import { DASHBOARD_TABLE_ROW_CLASSNAME, DASHBOARD_TABLE_WRAPPER_CLASSNAME } from "../content/dashboard-view-mode"
import {
  DashboardLeadBudget,
  DashboardLeadChannelBadge,
  DashboardLeadPipelineStageBadge,
  DashboardLeadSource,
  DashboardLeadTypeBadge,
} from "./dashboard-lead-ui"
import { cn } from "@/shared/lib/cn"
import { Button } from "@/shared/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/ui/table"

export type DashboardLeadsListViewProps = {
  leads: DashboardAgentLeadRow[]
  className?: string
  onEdit?: (lead: DashboardAgentLeadRow) => void
}

export function DashboardLeadsListView({ leads, className, onEdit }: DashboardLeadsListViewProps) {
  return (
    <div className={cn(DASHBOARD_TABLE_WRAPPER_CLASSNAME, className)}>
      <Table>
        <TableHeader>
          <TableRow className={cn(DASHBOARD_TABLE_ROW_CLASSNAME, "hover:bg-transparent")}>
            <TableHead className="min-w-[220px] font-inter text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Name
            </TableHead>
            <TableHead className="font-inter text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Type
            </TableHead>
            <TableHead className="font-inter text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Source
            </TableHead>
            <TableHead className="font-inter text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Budget
            </TableHead>
            <TableHead className="font-inter text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Lead Type
            </TableHead>
            <TableHead className="font-inter text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Pipeline Stage
            </TableHead>
            <TableHead className="font-inter text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Updated On
            </TableHead>
            <TableHead className="w-[72px] text-right">
              <span className="sr-only">Actions</span>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {leads.length === 0 ? (
            <TableRow className={DASHBOARD_TABLE_ROW_CLASSNAME}>
              <TableCell colSpan={8} className="py-10 text-center text-sm text-muted-foreground">
                No leads found.
              </TableCell>
            </TableRow>
          ) : (
            leads.map((lead) => (
              <TableRow key={lead.id} className={DASHBOARD_TABLE_ROW_CLASSNAME}>
                <TableCell>
                  <div className="min-w-0">
                    <p className="truncate font-inter text-sm font-semibold text-foreground">{lead.name}</p>
                    <p className="truncate text-xs text-muted-foreground">{lead.phone}</p>
                  </div>
                </TableCell>
                <TableCell>
                  <DashboardLeadChannelBadge channel={lead.channel} />
                </TableCell>
                <TableCell>
                  <DashboardLeadSource source={lead.source} sourceLogo={lead.sourceLogo} />
                </TableCell>
                <TableCell>
                  <DashboardLeadBudget budget={lead.budget} />
                </TableCell>
                <TableCell>
                  <DashboardLeadTypeBadge leadType={lead.leadType} />
                </TableCell>
                <TableCell>
                  <DashboardLeadPipelineStageBadge stage={lead.pipelineStage} />
                </TableCell>
                <TableCell className="whitespace-nowrap text-sm text-muted-foreground">
                  {formatLeadUpdatedOn(lead.updatedDays)}
                </TableCell>
                <TableCell>
                  <div className="flex justify-end">
                    <Button
                      type="button"
                      variant="ghost"
                      size="xs"
                      shape="pill"
                      className="h-8 w-8 p-0 text-muted-foreground hover:text-foreground"
                      aria-label={`Edit ${lead.name}`}
                      onClick={() => onEdit?.(lead)}
                    >
                      <Pencil className="size-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  )
}

DashboardLeadsListView.displayName = "DashboardLeadsListView"
