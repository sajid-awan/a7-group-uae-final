"use client"

import { Clock, Pencil, Trash2 } from "lucide-react"

import { formatPermissionUpdatedLabel } from "../content/permissions-content"
import type { PermissionRecord } from "../content/permissions-types"
import { cn } from "@/shared/lib/cn"
import { Button } from "@/shared/ui/button"

export type PermissionCardProps = {
  permission: PermissionRecord
  className?: string
  onEdit?: (permission: PermissionRecord) => void
  onDelete?: (permission: PermissionRecord) => void
}

export function PermissionCard({
  permission,
  className,
  onEdit,
  onDelete,
}: PermissionCardProps) {
  return (
    <article
      className={cn(
        "rounded-3xl border border-neutral-200 bg-white p-4 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.06)]",
        className
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <h3 className="font-inter text-base font-semibold text-neutral-900 font-inter">{permission.name}</h3>
          <p className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
            <Clock className="size-3.5 shrink-0" aria-hidden />
            {formatPermissionUpdatedLabel(permission.updatedDays)}
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-1">
          <Button
            type="button"
            variant="ghost"
            size="xs"
            shape="pill"
            className="h-8 w-8 p-0 text-muted-foreground hover:text-foreground"
            aria-label={`Delete ${permission.name}`}
            onClick={() => onDelete?.(permission)}
          >
            <Trash2 className="size-4" />
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="xs"
            shape="pill"
            className="h-8 w-8 p-0 text-muted-foreground hover:text-foreground"
            aria-label={`Edit ${permission.name}`}
            onClick={() => onEdit?.(permission)}
          >
            <Pencil className="size-4" />
          </Button>
        </div>
      </div>
    </article>
  )
}

PermissionCard.displayName = "PermissionCard"
