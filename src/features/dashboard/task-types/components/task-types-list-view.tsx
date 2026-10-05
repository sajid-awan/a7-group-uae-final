"use client"

import type { TaskTypeRecord } from "../content/task-types-types"
import { TaskTypeStatusBadge } from "./task-type-status-badge"
import {
  DASHBOARD_TABLE_ROW_CLASSNAME,
  DASHBOARD_TABLE_WRAPPER_CLASSNAME,
} from "@/features/dashboard/content/dashboard-view-mode"
import { cn } from "@/shared/lib/cn"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/ui/table"

export type TaskTypesListViewProps = {
  taskTypes: TaskTypeRecord[]
  className?: string
}

export function TaskTypesListView({ taskTypes, className }: TaskTypesListViewProps) {
  return (
    <div className={cn(DASHBOARD_TABLE_WRAPPER_CLASSNAME, "overflow-x-auto", className)}>
      <Table>
        <TableHeader>
          <TableRow className={cn(DASHBOARD_TABLE_ROW_CLASSNAME, "hover:bg-transparent")}>
            <TableHead className="min-w-[180px] font-inter text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Name
            </TableHead>
            <TableHead className="min-w-[220px] font-inter text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Discription
            </TableHead>
            <TableHead className="font-inter text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Status
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {taskTypes.length === 0 ? (
            <TableRow className={DASHBOARD_TABLE_ROW_CLASSNAME}>
              <TableCell colSpan={3} className="py-10 text-center text-sm text-muted-foreground">
                No task types found.
              </TableCell>
            </TableRow>
          ) : (
            taskTypes.map((taskType) => (
              <TableRow key={taskType.id} className={DASHBOARD_TABLE_ROW_CLASSNAME}>
                <TableCell>
                  <p className="truncate font-inter text-sm font-semibold uppercase text-foreground">
                    {taskType.name}
                  </p>
                </TableCell>
                <TableCell className="whitespace-nowrap text-sm text-muted-foreground">
                  {taskType.descriptionLabel}
                </TableCell>
                <TableCell>
                  <TaskTypeStatusBadge status={taskType.status} />
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  )
}

TaskTypesListView.displayName = "TaskTypesListView"
