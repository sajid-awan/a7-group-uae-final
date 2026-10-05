"use client"

import type { TaskTypeRecord } from "../content/task-types-types"
import { TaskTypeStatusBadge } from "./task-type-status-badge"
import { cn } from "@/shared/lib/cn"
import { DashboardEntityCard } from "@/shared/ui/dashboard/dashboard-entity-card"

export type TaskTypesGridProps = {
  taskTypes: TaskTypeRecord[]
  className?: string
}

export function TaskTypesGrid({ taskTypes, className }: TaskTypesGridProps) {
  return (
    <div className={cn("grid grid-cols-1 gap-5 md:grid-cols-2", className)}>
      {taskTypes.map((taskType) => (
        <DashboardEntityCard
          key={taskType.id}
          title={taskType.name}
          description={taskType.description}
          status={<TaskTypeStatusBadge status={taskType.status} />}
        />
      ))}
    </div>
  )
}

TaskTypesGrid.displayName = "TaskTypesGrid"
