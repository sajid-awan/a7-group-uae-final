"use client"

import type { Node, NodeProps } from "@xyflow/react"
import { Handle, Position } from "@xyflow/react"
import { Pencil, Trash2 } from "lucide-react"
import Image from "next/image"

import type { WorkflowStepData } from "../content/workflow-edit-types"
import { cn } from "@/shared/lib/cn"

const actionButtonClassName =
  "nodrag nopan nowheel pointer-events-auto flex size-8 shrink-0 cursor-pointer items-center justify-center rounded-full border-0 bg-transparent p-0 text-muted-foreground transition-colors hover:bg-neutral-100 hover:text-foreground"

export function WorkflowStepNode({ data }: NodeProps<Node<WorkflowStepData>>) {
  return (
    <div className="nowheel pointer-events-auto relative w-[340px] cursor-grab active:cursor-grabbing">
      <Handle
        type="target"
        position={Position.Top}
        className="!pointer-events-auto"
        isConnectable
      />

      <div className="pointer-events-auto flex items-center gap-3 rounded-full border border-neutral-200 bg-white px-4 py-3 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.06)]">
        <span className="relative flex size-10 shrink-0 overflow-hidden rounded-full bg-neutral-100">
          <Image
            src={data.avatarUrl}
            alt={data.name}
            fill
            className="object-cover"
            sizes="40px"
          />
        </span>

        <div className="min-w-0 flex-1">
          <p className="truncate font-inter text-sm font-semibold text-neutral-900 font-inter">{data.name}</p>
          <p className="truncate text-sm text-muted-foreground">{data.email}</p>
        </div>

        <div className="flex shrink-0 items-center gap-1">
          <button
            type="button"
            className={cn(actionButtonClassName)}
            aria-label={`Delete ${data.name}`}
            onPointerDown={(event) => event.stopPropagation()}
            onClick={(event) => {
              event.stopPropagation()
              data.onDelete?.()
            }}
          >
            <Trash2 className="size-4 pointer-events-none" />
          </button>
          <button
            type="button"
            className={cn(actionButtonClassName)}
            aria-label={`Edit ${data.name}`}
            onPointerDown={(event) => event.stopPropagation()}
            onClick={(event) => {
              event.stopPropagation()
              data.onEdit?.()
            }}
          >
            <Pencil className="size-4 pointer-events-none" />
          </button>
        </div>
      </div>

      <Handle
        type="source"
        position={Position.Bottom}
        className="!pointer-events-auto"
        isConnectable
      />
    </div>
  )
}

WorkflowStepNode.displayName = "WorkflowStepNode"
