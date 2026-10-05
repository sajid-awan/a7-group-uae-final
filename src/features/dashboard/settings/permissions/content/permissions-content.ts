import type { PermissionRecord } from "./permissions-types"

export const PERMISSIONS_PAGE_COPY = {
  title: "Permissions List",
  subtitle: "Manage all permissions for your team",
  addButtonLabel: "Add New Permission",
  emptyTitle: "No permissions found",
  emptyDescription: "Create a permission to define access for your team members.",
} as const

export const PERMISSIONS_DRAWER_COPY = {
  createTitle: "Create Permissions - Permission Scopes",
  editTitle: "Edit Permissions - Permission Scopes",
  cancelLabel: "Cancel",
  saveLabel: "Save",
} as const

const PERMISSION_NAMES = [
  "Owner",
  "Listing Manager",
  "General Manager",
  "Admin",
  "Manager",
  "Seo Expert",
] as const

export function formatPermissionUpdatedLabel(days: number): string {
  return days === 1 ? "1 day ago" : `${days} days ago`
}

export function getPermissionsMockData(): PermissionRecord[] {
  return PERMISSION_NAMES.map((name, index) => ({
    id: `permission-${index + 1}`,
    name,
    updatedDays: 226,
  }))
}
