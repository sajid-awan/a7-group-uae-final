"use client"

import { useDraggable } from "@dnd-kit/core"
import { CSS } from "@dnd-kit/utilities"

import { cn } from "@/shared/lib/cn"

export type KanbanDraggableItemProps = {
  id: string
  columnId: string
  className?: string
  children: React.ReactNode
}

export function KanbanDraggableItem({ id, columnId, className, children }: KanbanDraggableItemProps) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id,
    data: { columnId },
  })

  const style = transform ? { transform: CSS.Translate.toString(transform) } : undefined

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={cn("w-full touch-none", isDragging && "z-10 opacity-60", className)}
      {...listeners}
      {...attributes}
    >
      {children}
    </div>
  )
}

KanbanDraggableItem.displayName = "KanbanDraggableItem"
