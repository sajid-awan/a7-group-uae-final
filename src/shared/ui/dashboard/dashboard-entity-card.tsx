"use client"

import { Pencil, Trash2 } from "lucide-react"

import { cn } from "@/shared/lib/cn"
import { Button } from "@/shared/ui/button"

export type DashboardEntityCardProps = {
  title: string
  description: string
  status?: React.ReactNode
  onEdit?: () => void
  onDelete?: () => void
  className?: string
}

export function DashboardEntityCard({
  title,
  description,
  status,
  onEdit,
  onDelete,
  className,
}: DashboardEntityCardProps) {
  const showActions = Boolean(onEdit || onDelete)

  return (
    <article
      className={cn(
        "flex h-full rounded-3xl border border-neutral-200 bg-white p-4 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.06)]",
        className
      )}
    >
      <div className="flex min-w-0 flex-1 items-center gap-4">
        <div className="min-w-0 flex-1">
          {status ? <div className="shrink-0">{status}</div> : null}
          <h3 className={cn("font-inter text-base font-semibold text-neutral-900 font-inter", status ? "mt-3" : undefined)}>
            {title}
          </h3>
          <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
        </div>

        {showActions ? (
          <div className="flex shrink-0 items-center gap-1 self-center">
            {onDelete ? (
              <Button
                type="button"
                variant="ghost"
                size="xs"
                shape="pill"
                className="h-8 w-8 p-0 text-muted-foreground hover:text-foreground"
                aria-label={`Delete ${title}`}
                onClick={onDelete}
              >
                <Trash2 className="size-4" />
              </Button>
            ) : null}
            {onEdit ? (
              <Button
                type="button"
                variant="ghost"
                size="xs"
                shape="pill"
                className="h-8 w-8 p-0 text-muted-foreground hover:text-foreground"
                aria-label={`Edit ${title}`}
                onClick={onEdit}
              >
                <Pencil className="size-4" />
              </Button>
            ) : null}
          </div>
        ) : null}
      </div>
    </article>
  )
}

DashboardEntityCard.displayName = "DashboardEntityCard"
