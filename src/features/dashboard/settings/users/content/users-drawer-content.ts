import type { UserFormValues } from "./users-drawer-types"

export const USERS_DRAWER_COPY = {
  createTitle: "Create New User",
  editTitle: "Edit User",
  description: "Team members will be able to edit this post and republish changes.",
  fullNameLabel: "Full Name",
  emailLabel: "Email",
  passwordLabel: "Password",
  roleLabel: "Select Role",
  permissionLabel: "Select Permission",
  teamLabel: "Select Team",
  placeholder: "Enter",
  selectPlaceholder: "Select",
  cancelLabel: "Cancel",
  saveLabel: "Save",
} as const

export const USER_ROLE_OPTIONS = [
  { value: "admin", label: "Admin" },
  { value: "manager", label: "Manager" },
  { value: "developer", label: "Developer" },
  { value: "designer", label: "Designer" },
  { value: "analyst", label: "Analyst" },
  { value: "support", label: "Support" },
] as const

export const USER_PERMISSION_OPTIONS = [
  { value: "admin", label: "Admin" },
  { value: "manager", label: "Manager" },
  { value: "editor", label: "Editor" },
  { value: "viewer", label: "Viewer" },
] as const

export const USER_TEAM_OPTIONS = [
  { value: "royal-home", label: "Royal Home" },
  { value: "rental", label: "Rental Team" },
  { value: "off-plan", label: "Off-Plan Team" },
  { value: "sales", label: "Sales Team" },
] as const

export function createEmptyUserForm(): UserFormValues {
  return {
    fullName: "",
    email: "",
    password: "",
    role: "",
    permission: "",
    team: "",
  }
}

export function getUserOptionLabel(
  options: readonly { value: string; label: string }[],
  value: string
): string {
  return options.find((option) => option.value === value)?.label ?? value
}

export function getUserOptionValue(
  options: readonly { value: string; label: string }[],
  labelOrValue: string
): string {
  const normalized = labelOrValue.trim().toLowerCase()
  const byValue = options.find((option) => option.value === normalized)
  if (byValue) return byValue.value

  const byLabel = options.find((option) => option.label.toLowerCase() === normalized)
  return byLabel?.value ?? ""
}
