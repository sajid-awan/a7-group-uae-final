"use client"

import { useMemo } from "react"
import { useRouter, useSearchParams } from "next/navigation"

import type { AddTaskFormValues } from "../content/add-task-form-types"
import { getKanbanTasksMockData } from "../content/tasks-content"
import { AddTaskForm } from "../components/add-task-form"
import { isTaskStatus, mapKanbanTaskToFormValues } from "../utils/task-form-utils"
import { PAGE_ROUTES } from "@/shared/lib/constants/routes"
import { cn } from "@/shared/lib/cn"

export type DashboardAddTaskPageProps = {
  className?: string
}

export function DashboardAddTaskPage({ className }: DashboardAddTaskPageProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const taskId = searchParams.get("id")
  const statusParam = searchParams.get("status")
  const tasks = useMemo(() => getKanbanTasksMockData(), [])
  const editingTask = useMemo(() => tasks.find((task) => task.id === taskId), [taskId, tasks])

  const initialValues = useMemo<Partial<AddTaskFormValues> | undefined>(() => {
    if (editingTask) {
      return mapKanbanTaskToFormValues(editingTask)
    }

    if (statusParam && isTaskStatus(statusParam)) {
      return { status: statusParam }
    }

    return undefined
  }, [editingTask, statusParam])

  const handleCancel = () => {
    router.push(PAGE_ROUTES.dashboardTasks)
  }

  const handleSubmit = (_values: AddTaskFormValues) => {
    router.push(PAGE_ROUTES.dashboardTasks)
  }

  return (
    <div className={cn("p-4 sm:p-6 font-inter", className)}>
      <AddTaskForm initialValues={initialValues} onCancel={handleCancel} onSubmit={handleSubmit} />
    </div>
  )
}

DashboardAddTaskPage.displayName = "DashboardAddTaskPage"
