import type { RoleRecord } from "./roles-types"

export const ROLES_PAGE_COPY = {
  title: "Roles List",
  subtitle: "Manage all roles for your team",
  addButtonLabel: "Add New Role",
  emptyTitle: "No roles found",
  emptyDescription: "Create a role to define access for your team members.",
} as const

export const ROLES_DRAWER_COPY = {
  createTitle: "Create Role",
  editTitle: "Edit Role",
  roleNameLabel: "Role Name",
  roleNamePlaceholder: "Enter",
  cancelLabel: "Cancel",
  saveLabel: "Save",
} as const

const ROLE_NAMES = [
  "Owner",
  "Listing Manager",
  "General Manager",
  "Admin",
  "Manager",
  "Seo Expert",
] as const

export function formatRoleUpdatedLabel(days: number): string {
  return days === 1 ? "1 day ago" : `${days} days ago`
}

export function getRolesMockData(): RoleRecord[] {
  return ROLE_NAMES.map((name, index) => ({
    id: `role-${index + 1}`,
    name,
    updatedDays: 226,
  }))
}
