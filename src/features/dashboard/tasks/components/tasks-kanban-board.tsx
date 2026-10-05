"use client"

import { KANBAN_COLUMNS } from "../content/tasks-content"
import type { KanbanTask, TaskKanbanColumnId } from "../content/tasks-types"
import { KanbanBoard } from "@/shared/ui/dashboard/kanban-board"
import { TaskCard } from "@/shared/ui/dashboard/task-card"

export type TasksKanbanBoardProps = {
  tasks: KanbanTask[]
  className?: string
  onAddTask?: (columnId: TaskKanbanColumnId) => void
  onViewTask?: (task: KanbanTask) => void
  onTaskMove?: (taskId: string, columnId: TaskKanbanColumnId) => void
}

export function TasksKanbanBoard({
  tasks,
  className,
  onAddTask,
  onViewTask,
  onTaskMove,
}: TasksKanbanBoardProps) {
  return (
    <KanbanBoard
      columns={KANBAN_COLUMNS}
      items={tasks}
      ariaLabel="Tasks kanban board"
      emptyColumnMessage="No tasks in this stage"
      getAddAriaLabel={(column) => `Add task to ${column.label}`}
      className={className}
      onItemMove={onTaskMove}
      onAddItem={onAddTask}
      renderCard={(task) => <TaskCard task={task} onView={onViewTask} />}
    />
  )
}

TasksKanbanBoard.displayName = "TasksKanbanBoard"
