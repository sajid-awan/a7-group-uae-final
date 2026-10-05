"use client"

import {
  DndContext,
  DragOverlay,
  KeyboardSensor,
  PointerSensor,
  closestCorners,
  useSensor,
  useSensors,
  type DragEndEvent,
  type DragStartEvent,
} from "@dnd-kit/core"
import { sortableKeyboardCoordinates } from "@dnd-kit/sortable"
import { useState } from "react"

import { KanbanColumn } from "./kanban-column"
import { KanbanDraggableItem } from "./kanban-draggable-item"
import { cn } from "@/shared/lib/cn"

export type KanbanColumnDefinition<TColumnId extends string = string> = {
  id: TColumnId
  label: string
  headerClassName: string
}

export type KanbanItemBase<TColumnId extends string = string> = {
  id: string
  columnId: TColumnId
}

export type KanbanColumnGroup<
  TItem extends KanbanItemBase<TColumnId>,
  TColumnId extends string = string,
> = {
  columnId: TColumnId
  items: TItem[]
}

export function groupItemsByColumn<
  TItem extends KanbanItemBase<TColumnId>,
  TColumnId extends string,
>(
  columns: KanbanColumnDefinition<TColumnId>[],
  items: TItem[]
): KanbanColumnGroup<TItem, TColumnId>[] {
  return columns.map((column) => ({
    columnId: column.id,
    items: items.filter((item) => item.columnId === column.id),
  }))
}

export function resolveKanbanDropColumnId<
  TItem extends KanbanItemBase<TColumnId>,
  TColumnId extends string,
>(
  overId: string | number,
  columns: KanbanColumnDefinition<TColumnId>[],
  items: TItem[]
): TColumnId | null {
  const overKey = String(overId)

  if (columns.some((column) => column.id === overKey)) {
    return overKey as TColumnId
  }

  const overItem = items.find((item) => item.id === overKey)
  return overItem?.columnId ?? null
}

export type KanbanBoardProps<
  TItem extends KanbanItemBase<TColumnId>,
  TColumnId extends string,
> = {
  columns: KanbanColumnDefinition<TColumnId>[]
  items: TItem[]
  ariaLabel: string
  emptyColumnMessage: string
  getAddAriaLabel?: (column: KanbanColumnDefinition<TColumnId>) => string
  className?: string
  onItemMove?: (itemId: string, columnId: TColumnId) => void
  onAddItem?: (columnId: TColumnId) => void
  renderCard: (item: TItem) => React.ReactNode
}

export function KanbanBoard<TItem extends KanbanItemBase<TColumnId>, TColumnId extends string>({
  columns,
  items,
  ariaLabel,
  emptyColumnMessage,
  getAddAriaLabel,
  className,
  onItemMove,
  onAddItem,
  renderCard,
}: KanbanBoardProps<TItem, TColumnId>) {
  const [activeItem, setActiveItem] = useState<TItem | null>(null)
  const groupedColumns = groupItemsByColumn(columns, items)

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 8 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  )

  const handleDragStart = (event: DragStartEvent) => {
    const item = items.find((entry) => entry.id === event.active.id) ?? null
    setActiveItem(item)
  }

  const handleDragEnd = (event: DragEndEvent) => {
    setActiveItem(null)

    const { active, over } = event
    if (!over) return

    const targetColumnId = resolveKanbanDropColumnId(over.id, columns, items)
    if (!targetColumnId) return

    const itemId = String(active.id)
    const activeItemEntry = items.find((entry) => entry.id === itemId)
    if (!activeItemEntry || activeItemEntry.columnId === targetColumnId) return

    onItemMove?.(itemId, targetColumnId)
  }

  const handleDragCancel = () => {
    setActiveItem(null)
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCorners}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragCancel={handleDragCancel}
    >
      <div role="region" aria-label={ariaLabel} className={cn("overflow-x-auto pb-2", className)}>
        <div className="flex min-w-full gap-3">
          {groupedColumns.map((group) => {
            const column = columns.find((entry) => entry.id === group.columnId)
            if (!column) return null

            return (
              <KanbanColumn
                key={group.columnId}
                column={column}
                itemCount={group.items.length}
                emptyMessage={emptyColumnMessage}
                addAriaLabel={getAddAriaLabel?.(column)}
                onAdd={onAddItem}
              >
                {group.items.map((item) => (
                  <KanbanDraggableItem key={item.id} id={item.id} columnId={item.columnId}>
                    {renderCard(item)}
                  </KanbanDraggableItem>
                ))}
              </KanbanColumn>
            )
          })}
        </div>
      </div>

      <DragOverlay dropAnimation={null}>
        {activeItem ? (
          <div className="w-[17.5rem] rotate-2 cursor-grabbing shadow-lg">{renderCard(activeItem)}</div>
        ) : null}
      </DragOverlay>
    </DndContext>
  )
}

KanbanBoard.displayName = "KanbanBoard"
