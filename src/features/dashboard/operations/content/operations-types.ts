export type WorkflowStatus = "progress" | "error" | "finished"

export type WorkflowRecord = {
  id: string
  title: string
  description: string
  status: WorkflowStatus
  steps: number
  progressPercent: number
  approverId: string
}
