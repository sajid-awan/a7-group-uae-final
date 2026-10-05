"use client"

import { useMemo } from "react"
import { useRouter } from "next/navigation"

import type { KanbanTask, TaskKanbanColumnId } from "../content/tasks-types"
import { getKanbanTasksMockData } from "../content/tasks-content"
import { TasksStartView } from "../components/tasks-start-view"
import { PAGE_ROUTES } from "@/shared/lib/constants/routes"
import { cn } from "@/shared/lib/cn"

export type DashboardTasksPageProps = {
  className?: string
}

export function DashboardTasksPage({ className }: DashboardTasksPageProps) {
  const router = useRouter()
  const tasks = useMemo(() => getKanbanTasksMockData(), [])

  const openTaskForm = (columnId?: TaskKanbanColumnId) => {
    if (columnId) {
      router.push(`${PAGE_ROUTES.dashboardTasksNew}?status=${encodeURIComponent(columnId)}`)
      return
    }

    router.push(PAGE_ROUTES.dashboardTasksNew)
  }

  const openTaskFormForEdit = (task: KanbanTask) =>
    router.push(`${PAGE_ROUTES.dashboardTasksNew}?id=${encodeURIComponent(task.id)}`)

  return (
    <div className={cn("p-4 sm:p-6 font-inter", className)}>
      <TasksStartView
        tasks={tasks}
        onAddTask={openTaskForm}
        onEditTask={openTaskFormForEdit}
      />
    </div>
  )
}

DashboardTasksPage.displayName = "DashboardTasksPage"
