import { DashboardWorkflowEditPage } from "@/features/dashboard/operations/pages/dashboard-workflow-edit-page"

type OperationsWorkflowEditPageProps = {
  params: Promise<{ workflowId: string }>
}

export default async function OperationsWorkflowEditPage({ params }: OperationsWorkflowEditPageProps) {
  const { workflowId } = await params

  return <DashboardWorkflowEditPage workflowId={workflowId} />
}
