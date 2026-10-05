"use client"

import { WorkflowEditCanvas } from "../components/workflow-edit-canvas"
import { WORKFLOW_EDIT_PAGE_COPY } from "../content/workflow-edit-content"
import { PAGE_ROUTES } from "@/shared/lib/constants/routes"
import { cn } from "@/shared/lib/cn"
import { DashboardPageHeader } from "@/shared/ui/dashboard/dashboard-page-header"

export type DashboardWorkflowEditPageProps = {
  workflowId: string
  className?: string
}

export function DashboardWorkflowEditPage({ workflowId, className }: DashboardWorkflowEditPageProps) {
  return (
    <div className={cn("space-y-6 p-4 sm:p-6 font-inter", className)}>
      <DashboardPageHeader
        backHref={PAGE_ROUTES.dashboardOperations}
        backLabel="Back to operations"
        title={WORKFLOW_EDIT_PAGE_COPY.title}
        subtitle={WORKFLOW_EDIT_PAGE_COPY.subtitle}
      />
      <WorkflowEditCanvas key={workflowId} />
    </div>
  )
}

DashboardWorkflowEditPage.displayName = "DashboardWorkflowEditPage"
