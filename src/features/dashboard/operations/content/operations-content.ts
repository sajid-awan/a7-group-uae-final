import type { WorkflowRecord, WorkflowStatus } from "./operations-types"

export const OPERATIONS_PAGE_COPY = {
  title: "Workflow List",
  subtitle: "Manage all task types for tasks",
  searchPlaceholder: "Search for workflow",
  emptyTitle: "No workflows found",
  emptyDescription: "Try adjusting your search to find matching workflows.",
} as const

export const OPERATIONS_APPROVER_DRAWER_COPY = {
  title: "Approver Settings",
  selectLabel: "Select Approver",
  cancelLabel: "Cancel",
  confirmLabel: "Sure",
} as const

export const OPERATIONS_APPROVER_OPTIONS = [
  { value: "italian", label: "Italian" },
  { value: "dilshod-mansurov", label: "Dilshod Mansurov" },
  { value: "muhammad-talal", label: "Muhammad Talal Khan" },
  { value: "john-wick", label: "john Wick" },
  { value: "rashad", label: "Rashad" },
] as const

export const WORKFLOW_STATUS_LABELS: Record<WorkflowStatus, string> = {
  progress: "Progress",
  error: "Error",
  finished: "Finished",
}

const WORKFLOW_DESCRIPTION =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry."

const WORKFLOW_SEEDS: Array<Pick<WorkflowRecord, "status" | "steps" | "progressPercent">> = [
  { status: "progress", steps: 3, progressPercent: 60 },
  { status: "finished", steps: 3, progressPercent: 100 },
  { status: "error", steps: 3, progressPercent: 40 },
  { status: "progress", steps: 3, progressPercent: 60 },
  { status: "progress", steps: 3, progressPercent: 60 },
  { status: "finished", steps: 4, progressPercent: 100 },
  { status: "error", steps: 5, progressPercent: 25 },
  { status: "progress", steps: 2, progressPercent: 50 },
  { status: "finished", steps: 3, progressPercent: 100 },
  { status: "progress", steps: 6, progressPercent: 35 },
]

export function getWorkflowsMockData(count = 10): WorkflowRecord[] {
  return Array.from({ length: count }, (_, index) => {
    const seed = WORKFLOW_SEEDS[index % WORKFLOW_SEEDS.length]!

    return {
      id: `workflow-${index + 1}`,
      title: "Transactions",
      description: WORKFLOW_DESCRIPTION,
      status: seed.status,
      steps: seed.steps,
      progressPercent: seed.progressPercent,
      approverId: OPERATIONS_APPROVER_OPTIONS[index % OPERATIONS_APPROVER_OPTIONS.length]!.value,
    }
  })
}
