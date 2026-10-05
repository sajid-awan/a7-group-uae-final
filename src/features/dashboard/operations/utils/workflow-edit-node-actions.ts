import type { MutableRefObject } from "react"
import type { Node } from "@xyflow/react"

import { isWorkflowAddNode, isWorkflowStepNode } from "../content/workflow-edit-content"

export type WorkflowNodeActions = {
  onEditStep: (stepId: string) => void
  onDeleteStep: (stepId: string) => void
  onAddStep: (addNodeId: string) => void
}

export function attachWorkflowNodeActions(
  nodes: Node[],
  actionsRef: MutableRefObject<WorkflowNodeActions>
): Node[] {
  return nodes.map((node) => {
    if (isWorkflowStepNode(node)) {
      return {
        ...node,
        data: {
          ...node.data,
          onEdit: () => actionsRef.current.onEditStep(node.id),
          onDelete: () => actionsRef.current.onDeleteStep(node.id),
        },
      }
    }

    if (isWorkflowAddNode(node)) {
      return {
        ...node,
        data: {
          ...node.data,
          onAdd: () => actionsRef.current.onAddStep(node.id),
        },
      }
    }

    return node
  })
}
