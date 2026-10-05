import type { TaskTypeRecord } from "../content/task-types-types"

export function filterTaskTypesBySearch(taskTypes: TaskTypeRecord[], query: string): TaskTypeRecord[] {
  const normalizedQuery = query.trim().toLowerCase()
  if (!normalizedQuery) return taskTypes

  return taskTypes.filter(
    (taskType) =>
      taskType.name.toLowerCase().includes(normalizedQuery) ||
      taskType.description.toLowerCase().includes(normalizedQuery) ||
      taskType.descriptionLabel.toLowerCase().includes(normalizedQuery)
  )
}

export function paginateTaskTypes<T>(items: T[], page: number, pageSize: number) {
  const pageCount = Math.max(1, Math.ceil(items.length / pageSize))
  const safePage = Math.min(Math.max(1, page), pageCount)
  const start = (safePage - 1) * pageSize

  return {
    items: items.slice(start, start + pageSize),
    pageCount,
    safePage,
  }
}
