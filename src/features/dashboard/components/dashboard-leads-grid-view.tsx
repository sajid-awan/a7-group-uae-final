"use client"

import type { DashboardAgentLeadRow } from "../agents/content/dashboard-agent-leads-mock-data"
import { DashboardLeadGridCard } from "./dashboard-lead-grid-card"
import { cn } from "@/shared/lib/cn"
import { ListingPagination } from "@/shared/ui/listing-pagination"

export type DashboardLeadsGridViewProps = {
  leads: DashboardAgentLeadRow[]
  page: number
  pageCount: number
  onPageChange: (page: number) => void
  className?: string
  onEdit?: (lead: DashboardAgentLeadRow) => void
}

export function DashboardLeadsGridView({
  leads,
  page,
  pageCount,
  onPageChange,
  className,
  onEdit,
}: DashboardLeadsGridViewProps) {
  return (
    <div className={cn("space-y-6", className)}>
      {leads.length === 0 ? (
        <div className="rounded-2xl border border-border bg-white px-6 py-16 text-center text-sm text-muted-foreground shadow-sm">
          No leads found.
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {leads.map((lead) => (
            <DashboardLeadGridCard key={lead.id} lead={lead} onEdit={onEdit} />
          ))}
        </div>
      )}

      {pageCount > 1 ? (
        <ListingPagination page={page} pageCount={pageCount} onPageChange={onPageChange} />
      ) : null}
    </div>
  )
}

DashboardLeadsGridView.displayName = "DashboardLeadsGridView"
