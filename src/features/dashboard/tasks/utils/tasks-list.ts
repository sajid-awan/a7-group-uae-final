import type { KanbanTask } from "../content/tasks-types"

export function paginateTasksList<T>(
  items: T[],
  page: number,
  pageSize: number
): { items: T[]; pageCount: number; safePage: number } {
  const pageCount = Math.max(1, Math.ceil(items.length / pageSize))
  const safePage = Math.min(Math.max(page, 1), pageCount)
  const start = (safePage - 1) * pageSize
  return {
    items: items.slice(start, start + pageSize),
    pageCount,
    safePage,
  }
}

export function mapKanbanTasksToListTasks(tasks: KanbanTask[]): KanbanTask[] {
  return tasks
}
