import type { WorkflowRecord } from "../content/operations-types"

export function filterWorkflowsBySearch(workflows: WorkflowRecord[], search: string): WorkflowRecord[] {
  const query = search.trim().toLowerCase()
  if (!query) return workflows

  return workflows.filter((workflow) => {
    const haystack = [workflow.title, workflow.description, workflow.status].join(" ").toLowerCase()
    return haystack.includes(query)
  })
}

export function paginateWorkflows<T>(items: T[], page: number, pageSize: number) {
  const pageCount = Math.max(1, Math.ceil(items.length / pageSize))
  const safePage = Math.min(Math.max(page, 1), pageCount)
  const start = (safePage - 1) * pageSize

  return {
    items: items.slice(start, start + pageSize),
    pageCount,
    safePage,
  }
}
