import type { KanbanColumnDefinition } from "@/shared/ui/dashboard/kanban-board"

import type {
  KanbanTask,
  TaskKanbanColumnId,
  TaskPriority,
  TaskStatus,
  TaskType,
} from "./tasks-types"

export const TASKS_PAGE_COPY = {
  title: "All Tasks",
  subtitle: "Manage and track all your scheduled tasks and events",
  emptyTitle: "No tasks found",
  emptyDescription: "There are no tasks matching your filters yet. Try adjusting your filters.",
  errorMessage: "Unable to load tasks. Please try again.",
  addButtonLabel: "Add New Task",
  fixTimesLabel: "Fix Times",
  applyLabel: "Apply",
} as const

export const KANBAN_COLUMNS: KanbanColumnDefinition<TaskKanbanColumnId>[] = [
  {
    id: "pending",
    label: "Pending",
    headerClassName: "bg-[#FFB800] text-white",
  },
  {
    id: "on-hold",
    label: "On Hold",
    headerClassName: "bg-[#F97316] text-white",
  },
  {
    id: "scheduled",
    label: "Scheduled",
    headerClassName: "bg-[#8B5CF6] text-white",
  },
  {
    id: "in-progress",
    label: "In Progress",
    headerClassName: "bg-[#00AEEF] text-white",
  },
  {
    id: "delayed",
    label: "Delayed",
    headerClassName: "bg-[#0284C7] text-white",
  },
  {
    id: "success",
    label: "Success",
    headerClassName: "bg-[#10B981] text-white",
  },
  {
    id: "completed",
    label: "Completed",
    headerClassName: "bg-[#27AE60] text-white",
  },
  {
    id: "canceled",
    label: "Canceled",
    headerClassName: "bg-[#EA580C] text-white",
  },
  {
    id: "failed",
    label: "Failed",
    headerClassName: "bg-[#EF4444] text-white",
  },
]

export const TASK_PRIORITY_OPTIONS = [
  { value: "all", label: "Priority" },
  { value: "low", label: "Low" },
  { value: "medium", label: "Medium" },
  { value: "high", label: "High" },
] as const

export const TASK_STATUS_OPTIONS = [
  { value: "all", label: "Status" },
  { value: "pending", label: "Pending" },
  { value: "on-hold", label: "On Hold" },
  { value: "scheduled", label: "Scheduled" },
  { value: "completed", label: "Completed" },
  { value: "canceled", label: "Canceled" },
  { value: "success", label: "Success" },
  { value: "in-progress", label: "In Progress" },
  { value: "delayed", label: "Delayed" },
  { value: "failed", label: "Failed" },
] as const

export const TASK_TYPE_LABELS: Record<TaskType, string> = {
  "cold-calling": "Cold Calling",
  meeting: "Meeting",
  "email-campaign": "Email Campaign",
  "product-demo": "Product Demo",
  webinar: "Webinar",
  "follow-up-call": "Follow-up Call",
  "trade-show": "Trade Show",
  referral: "Referral",
}

export const ADD_TASK_FORM_COPY = {
  title: "Add New Task",
  descriptionLabel: "Discription",
  descriptionPlaceholder: "Discription...",
  submitLabel: "Save Task",
  cancelLabel: "Cancel",
} as const

export const ADD_TASK_AGENT_OPTIONS = [
  { value: "john-wick", label: "john Wick" },
  { value: "rashad", label: "Rashad" },
  { value: "blanche", label: "Blanche" },
  { value: "logan", label: "Logan" },
  { value: "mercedes-huels", label: "Mercedes Huels" },
] as const

export const ADD_TASK_TYPE_OPTIONS = Object.entries(TASK_TYPE_LABELS).map(([value, label]) => ({
  value,
  label,
}))

export const ADD_TASK_STATUS_OPTIONS = TASK_STATUS_OPTIONS.filter((option) => option.value !== "all")

export const ADD_TASK_PRIORITY_OPTIONS = TASK_PRIORITY_OPTIONS.filter((option) => option.value !== "all")

export function createDefaultAddTaskFormValues() {
  return {
    title: "",
    taskType: "" as const,
    status: "pending" as const,
    assignedAgentId: "",
    description: "",
    priority: "low" as const,
    dueDate: "2026-04-20",
    dueTime: "13:15",
  }
}

const COLUMN_IDS = KANBAN_COLUMNS.map((column) => column.id)

const ASSIGNEES = [
  { name: "john Wick", avatarUrl: "https://i.pravatar.cc/96?img=11" },
  { name: "Rashad", avatarUrl: "https://i.pravatar.cc/96?img=12" },
  { name: "Blanche", avatarUrl: "https://i.pravatar.cc/96?img=32" },
  { name: "Logan", avatarUrl: "https://i.pravatar.cc/96?img=15" },
  { name: "Mercedes Huels", avatarUrl: "https://i.pravatar.cc/96?img=47" },
] as const

const TASK_TITLES = [
  "AAPL HOLD",
  "Mercedes Huels",
  "Follow-up with buyer",
  "Site visit prep",
  "Investor outreach",
  "Listing refresh",
  "Client onboarding",
  "Quarterly review",
] as const

const PRIORITIES: TaskPriority[] = ["low", "medium", "high"]
const TASK_TYPES = Object.keys(TASK_TYPE_LABELS) as TaskType[]

const TASKS_PER_COLUMN: Record<TaskKanbanColumnId, number> = {
  pending: 3,
  "on-hold": 2,
  scheduled: 2,
  "in-progress": 3,
  delayed: 2,
  success: 2,
  completed: 2,
  canceled: 1,
  failed: 1,
}

function formatDueDateLabel(index: number): string {
  const day = 8 + (index % 20)
  const hour = 9 + (index % 8)
  const minute = index % 2 === 0 ? "15" : "45"
  const period = hour >= 12 ? "PM" : "AM"
  const displayHour = hour > 12 ? hour - 12 : hour
  return `Wed, Apr ${day}, 2026 ${displayHour}:${minute} ${period}`
}

function buildKanbanTask(columnId: TaskKanbanColumnId, index: number): KanbanTask {
  const assignee = ASSIGNEES[index % ASSIGNEES.length]!
  const dueDay = String(8 + (index % 20)).padStart(2, "0")

  return {
    id: `task-${columnId}-${index}`,
    title: TASK_TITLES[index % TASK_TITLES.length]!,
    columnId,
    priority: PRIORITIES[index % PRIORITIES.length]!,
    status: columnId,
    taskType: TASK_TYPES[index % TASK_TYPES.length]!,
    assigneeName: assignee.name,
    assigneeAvatarUrl: assignee.avatarUrl,
    dueDate: `2026-04-${dueDay}`,
    dueDateLabel: formatDueDateLabel(index),
    updatedDays: 3 + (index % 15),
  }
}

export function getKanbanTasksMockData(): KanbanTask[] {
  const tasks: KanbanTask[] = []
  let globalIndex = 0

  for (const columnId of COLUMN_IDS) {
    for (let index = 0; index < TASKS_PER_COLUMN[columnId]; index += 1) {
      tasks.push(buildKanbanTask(columnId, globalIndex))
      globalIndex += 1
    }
  }

  return tasks
}

export function createDefaultTasksFilters() {
  return {
    priority: "all",
    status: "all",
  }
}
