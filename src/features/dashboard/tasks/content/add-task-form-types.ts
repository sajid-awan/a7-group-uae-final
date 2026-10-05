import type { TaskPriority, TaskStatus, TaskType } from "./tasks-types"

export type AddTaskFormValues = {
  title: string
  taskType: TaskType | ""
  status: TaskStatus
  assignedAgentId: string
  description: string
  priority: TaskPriority
  dueDate: string
  dueTime: string
}
