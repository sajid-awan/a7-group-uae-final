"use client"

import { Pencil, Trash2 } from "lucide-react"

import type { WorkflowRecord, WorkflowStatus } from "../content/operations-types"
import { WorkflowStatusBadge } from "./workflow-status-badge"
import { cn } from "@/shared/lib/cn"
import { Button } from "@/shared/ui/button"
import { ProgressBar } from "@/shared/ui/progress-indicator"

const progressVariantByStatus: Record<WorkflowStatus, "default" | "destructive" | "success"> = {
  progress: "default",
  error: "destructive",
  finished: "success",
}

export type WorkflowCardProps = {
  workflow: WorkflowRecord
  onEdit?: (workflow: WorkflowRecord) => void
  onDelete?: (workflow: WorkflowRecord) => void
  className?: string
}

export function WorkflowCard({ workflow, onEdit, onDelete, className }: WorkflowCardProps) {
  return (
    <article
      className={cn(
        "rounded-2xl border border-neutral-200 bg-white p-3.5 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.06)]",
        className
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <WorkflowStatusBadge status={workflow.status} />
          <h3 className="mt-2.5 font-inter text-sm font-semibold text-neutral-900 font-inter">{workflow.title}</h3>
          <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{workflow.description}</p>
        </div>

        <div className="flex shrink-0 items-center gap-1">
          <Button
            type="button"
            variant="ghost"
            size="xs"
            shape="pill"
            className="h-8 w-8 p-0 text-muted-foreground hover:text-foreground"
            aria-label={`Delete ${workflow.title}`}
            onClick={() => onDelete?.(workflow)}
          >
            <Trash2 className="size-4" />
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="xs"
            shape="pill"
            className="h-8 w-8 p-0 text-muted-foreground hover:text-foreground"
            aria-label={`Edit ${workflow.title}`}
            onClick={() => onEdit?.(workflow)}
          >
            <Pencil className="size-4" />
          </Button>
        </div>
      </div>

      <div className="mt-3.5 space-y-1.5">
        <div className="flex items-center justify-between gap-3 text-xs">
          <span className="font-medium text-foreground">Progress: {workflow.steps} Steps</span>
          <span className="font-medium text-muted-foreground">{workflow.progressPercent}%</span>
        </div>
        <ProgressBar
          value={workflow.progressPercent}
          variant={progressVariantByStatus[workflow.status]}
          size="lg"
        />
      </div>
    </article>
  )
}

WorkflowCard.displayName = "WorkflowCard"
