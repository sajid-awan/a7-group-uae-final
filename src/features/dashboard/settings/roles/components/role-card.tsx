"use client"

import { Clock, Pencil, Trash2 } from "lucide-react"

import { formatRoleUpdatedLabel } from "../content/roles-content"
import type { RoleRecord } from "../content/roles-types"
import { cn } from "@/shared/lib/cn"
import { Button } from "@/shared/ui/button"

export type RoleCardProps = {
  role: RoleRecord
  className?: string
  onEdit?: (role: RoleRecord) => void
  onDelete?: (role: RoleRecord) => void
}

export function RoleCard({ role, className, onEdit, onDelete }: RoleCardProps) {
  return (
    <article
      className={cn(
        "rounded-3xl border border-neutral-200 bg-white p-4 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.06)]",
        className
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <h3 className="font-inter text-base font-semibold text-neutral-900 font-inter">{role.name}</h3>
          <p className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
            <Clock className="size-3.5 shrink-0" aria-hidden />
            {formatRoleUpdatedLabel(role.updatedDays)}
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-1">
          <Button
            type="button"
            variant="ghost"
            size="xs"
            shape="pill"
            className="h-8 w-8 p-0 text-muted-foreground hover:text-foreground"
            aria-label={`Delete ${role.name}`}
            onClick={() => onDelete?.(role)}
          >
            <Trash2 className="size-4" />
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="xs"
            shape="pill"
            className="h-8 w-8 p-0 text-muted-foreground hover:text-foreground"
            aria-label={`Edit ${role.name}`}
            onClick={() => onEdit?.(role)}
          >
            <Pencil className="size-4" />
          </Button>
        </div>
      </div>
    </article>
  )
}

RoleCard.displayName = "RoleCard"
