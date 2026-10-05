"use client"

import { useDroppable } from "@dnd-kit/core"
import { Plus } from "lucide-react"

import type { KanbanColumnDefinition } from "./kanban-board"
import { cn } from "@/shared/lib/cn"
import { Button } from "@/shared/ui/button"

export type KanbanColumnProps<TColumnId extends string> = {
  column: KanbanColumnDefinition<TColumnId>
  itemCount: number
  emptyMessage: string
  addAriaLabel?: string
  onAdd?: (columnId: TColumnId) => void
  className?: string
  children: React.ReactNode
}

export function KanbanColumn<TColumnId extends string>({
  column,
  itemCount,
  emptyMessage,
  addAriaLabel,
  onAdd,
  className,
  children,
}: KanbanColumnProps<TColumnId>) {
  const { setNodeRef, isOver } = useDroppable({
    id: column.id,
    data: { columnId: column.id },
  })

  return (
    <section
      aria-label={`${column.label} column`}
      className={cn(
        "flex min-w-[317px] flex-1 flex-col rounded-2xl border border-neutral-200 bg-white pb-3",
        className
      )}
    >
      <header
        className={cn(
          "mx-3 mt-3 flex items-center justify-between gap-2 rounded-full px-3 py-2.5",
          column.headerClassName
        )}
      >
        <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white font-inter text-sm font-bold text-black">
          {itemCount}
        </span>

        <p className="min-w-0 flex-1 truncate text-center font-inter text-sm font-semibold text-white">
          {column.label}
        </p>

        <Button
          type="button"
          variant="ghost"
          size="xs"
          shape="pill"
          className="size-8 shrink-0 p-0 text-white hover:bg-white/20 hover:text-white"
          aria-label={addAriaLabel ?? `Add item to ${column.label}`}
          onClick={() => onAdd?.(column.id)}
        >
          <Plus className="size-4" aria-hidden />
        </Button>
      </header>

      <div
        ref={setNodeRef}
        className={cn(
          "flex flex-1 flex-col gap-3 overflow-y-auto p-3 transition-colors",
          isOver && "bg-primary/5"
        )}
      >
        {itemCount === 0 ? (
          <p
            role="status"
            className="rounded-2xl border border-dashed border-neutral-200 bg-neutral-50 px-3 py-6 text-center text-xs text-muted-foreground"
          >
            {emptyMessage}
          </p>
        ) : (
          children
        )}
      </div>
    </section>
  )
}

KanbanColumn.displayName = "KanbanColumn"
