import type { TaskTypeRecord, TaskTypeRecordStatus } from "./task-types-types"

export const TASK_TYPES_PAGE_COPY = {
  title: "Task Types",
  subtitle: "Manage all task types for tasks",
  searchPlaceholder: "Search for tasks",
  addButtonLabel: "Add New Task",
  emptyTitle: "No task types found",
  emptyDescription: "Try adjusting your search to find matching task types.",
} as const

export const TASK_TYPE_STATUS_LABELS: Record<TaskTypeRecordStatus, string> = {
  active: "Active",
  pending: "Pending",
  expired: "Expired",
}

const TASK_TYPE_NAMES = [
  "AAPL HOLD",
  "GOOGL CALL",
  "Mercedes Huels",
  "TSLA BUY",
  "MSFT WATCH",
  "AMZN FOLLOW",
  "META DEMO",
  "NFLX REVIEW",
  "NVDA CALL",
  "ORCL MEET",
  "IBM SYNC",
  "INTC HOLD",
  "BABA TASK",
  "UBER FIELD",
  "LYFT CHECK",
  "SNAP PING",
  "COIN TRADE",
  "SQ AUDIT",
  "SHOP PLAN",
  "PLTR NOTE",
] as const

const DESCRIPTION_LABELS = [
  "Wed, Apr 8, 2026",
  "Thu, Apr 9, 2026",
  "Fri, Apr 10, 2026",
  "Mon, Apr 13, 2026",
  "Tue, Apr 14, 2026",
] as const

const GRID_DESCRIPTION =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."

const STATUSES: TaskTypeRecordStatus[] = ["active", "pending", "expired"]

export function getTaskTypesMockData(count = 20): TaskTypeRecord[] {
  return Array.from({ length: count }, (_, index) => {
    const status = STATUSES[index % STATUSES.length]!
    return {
      id: `task-type-${index + 1}`,
      name: TASK_TYPE_NAMES[index % TASK_TYPE_NAMES.length]!,
      description: GRID_DESCRIPTION,
      descriptionLabel: DESCRIPTION_LABELS[index % DESCRIPTION_LABELS.length]!,
      status,
    }
  })
}
