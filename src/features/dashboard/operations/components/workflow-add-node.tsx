"use client"

import type { Node, NodeProps } from "@xyflow/react"
import { Plus } from "lucide-react"

import type { WorkflowAddNodeData } from "../content/workflow-edit-types"
import { cn } from "@/shared/lib/cn"

export function WorkflowAddNode({ data }: NodeProps<Node<WorkflowAddNodeData>>) {
  return (
    <button
      type="button"
      className={cn(
        "nodrag nopan nowheel pointer-events-auto flex size-8 cursor-pointer items-center justify-center rounded-full border border-dashed border-neutral-300 bg-white p-0 text-muted-foreground shadow-none transition-colors hover:bg-white hover:text-foreground"
      )}
      aria-label={data.label ?? "Add workflow step"}
      onPointerDown={(event) => event.stopPropagation()}
      onClick={(event) => {
        event.stopPropagation()
        data.onAdd?.()
      }}
    >
      <Plus className="size-4 pointer-events-none" aria-hidden />
    </button>
  )
}

WorkflowAddNode.displayName = "WorkflowAddNode"
