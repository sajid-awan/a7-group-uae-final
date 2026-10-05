import { format, isValid, parse } from "date-fns"

import type { AddTaskFormValues } from "../content/add-task-form-types"
import { ADD_TASK_AGENT_OPTIONS } from "../content/tasks-content"
import type { KanbanTask, TaskStatus } from "../content/tasks-types"

const DUE_DATE_LABEL_FORMAT = "EEE, MMM d, yyyy h:mm a"

const TASK_STATUSES: TaskStatus[] = [
  "pending",
  "on-hold",
  "scheduled",
  "completed",
  "canceled",
  "success",
  "in-progress",
  "delayed",
  "failed",
]

export function isTaskStatus(value: string): value is TaskStatus {
  return TASK_STATUSES.includes(value as TaskStatus)
}

function getAssignedAgentId(assigneeName: string) {
  const matchedAgent = ADD_TASK_AGENT_OPTIONS.find(
    (option) => option.label.toLowerCase() === assigneeName.toLowerCase()
  )
  return matchedAgent?.value ?? ""
}

function getDueTimeFromLabel(dueDateLabel: string) {
  const parsed = parse(dueDateLabel, DUE_DATE_LABEL_FORMAT, new Date())
  return isValid(parsed) ? format(parsed, "HH:mm") : ""
}

export function mapKanbanTaskToFormValues(task: KanbanTask): Partial<AddTaskFormValues> {
  return {
    title: task.title,
    taskType: task.taskType,
    status: task.status,
    priority: task.priority,
    assignedAgentId: getAssignedAgentId(task.assigneeName),
    dueDate: task.dueDate,
    dueTime: getDueTimeFromLabel(task.dueDateLabel),
  }
}
