import type { LucideIcon } from "lucide-react"
import {
  Database,
  Layers,
  LayoutDashboard,
  Users,
} from "lucide-react"

export type PermissionAccessScope = "self" | "team" | "everyone"
export type PermissionActionScope = "edit" | "delete" | "enable" | "disable"

export type PermissionScopeColumn = PermissionAccessScope | PermissionActionScope

export type PermissionScopeItem = {
  id: string
  label: string
  icon?: LucideIcon
  columns: PermissionScopeColumn[]
  children?: PermissionScopeItem[]
  defaultExpanded?: boolean
}

export type PermissionScopeSection = {
  id: string
  label: string
  items: PermissionScopeItem[]
  defaultOpen?: boolean
}

export type PermissionScopeState = {
  enabled: boolean
  accessScope: PermissionAccessScope | ""
  actionScopes: PermissionActionScope[]
}

export type PermissionScopesFormValues = {
  items: Record<string, PermissionScopeState>
}

export const PERMISSION_SCOPE_ACCESS_COLUMNS: PermissionAccessScope[] = ["self", "team", "everyone"]

export const PERMISSION_SCOPE_COLUMN_LABELS: Record<PermissionScopeColumn, string> = {
  self: "Self",
  team: "Team",
  everyone: "Everyone",
  edit: "Edit",
  delete: "Delete",
  enable: "Enable",
  disable: "Disable",
}

export const PERMISSION_SCOPE_SECTIONS: PermissionScopeSection[] = [
  {
    id: "top-level",
    label: "",
    items: [
      { id: "dashboard", label: "Dashboard", icon: LayoutDashboard, columns: PERMISSION_SCOPE_ACCESS_COLUMNS },
      { id: "agents", label: "Agents", icon: Users, columns: PERMISSION_SCOPE_ACCESS_COLUMNS },
      {
        id: "leads",
        label: "Leads",
        icon: Layers,
        columns: PERMISSION_SCOPE_ACCESS_COLUMNS,
        defaultExpanded: true,
        children: [
          { id: "leads-view", label: "Leads View", columns: ["edit", "delete"] },
          { id: "leads-actions", label: "Actions", columns: ["edit", "delete"] },
        ],
      },
    ],
  },
  {
    id: "listings",
    label: "Listings",
    defaultOpen: true,
    items: [
      { id: "add-new-listing", label: "Add New Listing", columns: PERMISSION_SCOPE_ACCESS_COLUMNS },
      { id: "sell-listings", label: "Sell Listings", columns: PERMISSION_SCOPE_ACCESS_COLUMNS },
      { id: "rental-listings", label: "Rental Listings", columns: PERMISSION_SCOPE_ACCESS_COLUMNS },
    ],
  },
  {
    id: "deals-transactions",
    label: "Deals & Transactions",
    defaultOpen: true,
    items: [
      { id: "add-new-deal", label: "Add New Deal", columns: PERMISSION_SCOPE_ACCESS_COLUMNS },
      { id: "view-all-deals", label: "View All Deals", columns: PERMISSION_SCOPE_ACCESS_COLUMNS },
    ],
  },
  {
    id: "tasks-activity",
    label: "Tasks & Activity",
    defaultOpen: true,
    items: [
      {
        id: "task-types",
        label: "Task Types",
        columns: PERMISSION_SCOPE_ACCESS_COLUMNS,
        children: [{ id: "task-types-toggle", label: "", columns: ["enable", "disable"] }],
      },
      { id: "add-new-task", label: "Add new Task", columns: PERMISSION_SCOPE_ACCESS_COLUMNS },
      { id: "view-all-task", label: "View All Task", columns: PERMISSION_SCOPE_ACCESS_COLUMNS },
    ],
  },
  {
    id: "operations",
    label: "Operations",
    defaultOpen: true,
    items: [
      { id: "workflow-list", label: "Workflow List", columns: PERMISSION_SCOPE_ACCESS_COLUMNS },
      { id: "approval-transactions", label: "Approval Transactions", columns: PERMISSION_SCOPE_ACCESS_COLUMNS },
      { id: "database", label: "Database", icon: Database, columns: PERMISSION_SCOPE_ACCESS_COLUMNS },
    ],
  },
]

export function createInitialPermissionScopesForm(): PermissionScopesFormValues {
  const items: Record<string, PermissionScopeState> = {}

  const registerItem = (item: PermissionScopeItem) => {
    items[item.id] = { enabled: false, accessScope: "", actionScopes: [] }
    item.children?.forEach(registerItem)
  }

  PERMISSION_SCOPE_SECTIONS.forEach((section) => {
    section.items.forEach(registerItem)
  })

  return { items }
}

export function isPermissionAccessItem(columns: PermissionScopeColumn[]): columns is PermissionAccessScope[] {
  return columns.every((column) => column === "self" || column === "team" || column === "everyone")
}

export function collectPermissionScopeItems(
  sections: PermissionScopeSection[] = PERMISSION_SCOPE_SECTIONS
): PermissionScopeItem[] {
  return sections.flatMap((section) => {
    const nested = section.items.flatMap((item) => [item, ...(item.children ?? [])])
    return nested
  })
}
