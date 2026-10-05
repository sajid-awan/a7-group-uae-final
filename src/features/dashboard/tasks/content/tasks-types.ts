export type TasksViewMode = "table" | "kanban"

export type TaskPriority = "low" | "medium" | "high"

export type TaskStatus =
  | "pending"
  | "on-hold"
  | "scheduled"
  | "completed"
  | "canceled"
  | "success"
  | "in-progress"
  | "delayed"
  | "failed"

export type TaskKanbanColumnId = TaskStatus

export type TaskType =
  | "cold-calling"
  | "meeting"
  | "email-campaign"
  | "product-demo"
  | "webinar"
  | "follow-up-call"
  | "trade-show"
  | "referral"

export type KanbanTask = {
  id: string
  title: string
  columnId: TaskKanbanColumnId
  priority: TaskPriority
  status: TaskStatus
  taskType: TaskType
  assigneeName: string
  assigneeAvatarUrl: string
  dueDate: string
  dueDateLabel: string
  updatedDays: number
}

export type TasksFilters = {
  priority: string
  status: string
}
