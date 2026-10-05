"use client"

import { useMemo } from "react"
import { useRouter } from "next/navigation"

import { TaskTypesView } from "../components/task-types-view"
import { getTaskTypesMockData } from "../content/task-types-content"
import { PAGE_ROUTES } from "@/shared/lib/constants/routes"
import { cn } from "@/shared/lib/cn"

export type DashboardTaskTypesPageProps = {
  className?: string
}

export function DashboardTaskTypesPage({ className }: DashboardTaskTypesPageProps) {
  const router = useRouter()
  const taskTypes = useMemo(() => getTaskTypesMockData(), [])

  return (
    <div className={cn("p-4 sm:p-6 font-inter", className)}>
      <TaskTypesView
        taskTypes={taskTypes}
        onAddTaskType={() => router.push(PAGE_ROUTES.dashboardTasksNew)}
      />
    </div>
  )
}

DashboardTaskTypesPage.displayName = "DashboardTaskTypesPage"
