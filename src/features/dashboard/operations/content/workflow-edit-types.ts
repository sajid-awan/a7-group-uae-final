export type WorkflowStepData = {
  name: string
  email: string
  avatarUrl: string
  approverId: string
  onEdit?: () => void
  onDelete?: () => void
}

export type WorkflowAddPlacement = "above" | "below"

export type WorkflowAddNodeData = {
  parentStepId: string | null
  placement: WorkflowAddPlacement
  label?: string
  onAdd?: () => void
  /** When set, a new step is inserted at this position instead of default below/above parent. */
  slotPosition?: { x: number; y: number }
}

export type WorkflowStepDrawerMode = "add" | "edit"
