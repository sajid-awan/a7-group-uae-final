import type { KanbanTask, TaskKanbanColumnId, TasksFilters } from "../content/tasks-types"

export function filterKanbanTasksByPriority(tasks: KanbanTask[], priority: string): KanbanTask[] {
  if (!priority || priority === "all") return tasks
  return tasks.filter((task) => task.priority === priority)
}

export function filterKanbanTasksByStatus(tasks: KanbanTask[], status: string): KanbanTask[] {
  if (!status || status === "all") return tasks
  return tasks.filter((task) => task.status === status)
}

export function filterKanbanTasksByFilters(tasks: KanbanTask[], filters: TasksFilters): KanbanTask[] {
  let result = tasks
  result = filterKanbanTasksByPriority(result, filters.priority)
  result = filterKanbanTasksByStatus(result, filters.status)
  return result
}

export function moveKanbanTaskToColumn(
  tasks: KanbanTask[],
  taskId: string,
  columnId: TaskKanbanColumnId
): KanbanTask[] {
  return tasks.map((task) =>
    task.id === taskId ? { ...task, columnId, status: columnId } : task
  )
}
