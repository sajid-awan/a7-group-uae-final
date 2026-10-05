import type { TeamFormValues, TeamSelectableUser } from "./team-drawer-types"

export const TEAM_DRAWER_COPY = {
  createTitle: "Create Team",
  editTitle: "Edit Team",
  description: "Team members will be able to edit this post and republish changes.",
  teamNameLabel: "Team Name",
  emailLabel: "Email",
  teamHeadLabel: "Select Team Head",
  addUsersLabel: "Add Users",
  roleLabel: "Select Role",
  permissionLabel: "Select Permission",
  statusLabel: "Status",
  placeholder: "Enter",
  selectPlaceholder: "Select",
  cancelLabel: "Cancel",
  saveLabel: "Save",
} as const

export const TEAM_ROLE_OPTIONS = [
  { value: "owner", label: "Owner" },
  { value: "listing-manager", label: "Listing Manager" },
  { value: "general-manager", label: "General Manager" },
  { value: "admin", label: "Admin" },
  { value: "manager", label: "Manager" },
  { value: "seo-expert", label: "Seo Expert" },
] as const

export const TEAM_PERMISSION_OPTIONS = [
  { value: "editor", label: "Editor" },
  { value: "admin", label: "Admin" },
  { value: "viewer", label: "Viewer" },
  { value: "manager", label: "Manager" },
] as const

export const TEAM_STATUS_OPTIONS = [
  { value: "active", label: "Active" },
  { value: "inactive", label: "Inactive" },
] as const

const SELECTABLE_USERS: TeamSelectableUser[] = [
  { id: "user-enrico", name: "Enrico", jobTitle: "Marketing Manager", avatarUrl: "https://i.pravatar.cc/96?img=12" },
  { id: "user-else", name: "Else", jobTitle: "Designer", avatarUrl: "https://i.pravatar.cc/96?img=5" },
  { id: "user-hiram", name: "Hiram", jobTitle: "Sales Manager", avatarUrl: "https://i.pravatar.cc/96?img=8" },
  { id: "user-tabitha", name: "Tabitha", jobTitle: "Sales Agent", avatarUrl: "https://i.pravatar.cc/96?img=20" },
  { id: "user-amelia", name: "Amelia", jobTitle: "Account Executive", avatarUrl: "https://i.pravatar.cc/96?img=1" },
  { id: "user-benjamin", name: "Benjamin", jobTitle: "Operations Lead", avatarUrl: "https://i.pravatar.cc/96?img=11" },
  { id: "user-charlotte", name: "Charlotte", jobTitle: "Support Specialist", avatarUrl: "https://i.pravatar.cc/96?img=15" },
  { id: "user-daniel", name: "Daniel", jobTitle: "Analyst", avatarUrl: "https://i.pravatar.cc/96?img=25" },
  { id: "user-elena", name: "Elena", jobTitle: "Team Lead", avatarUrl: "https://i.pravatar.cc/96?img=32" },
  { id: "user-felix", name: "Felix", jobTitle: "Product Manager", avatarUrl: "https://i.pravatar.cc/96?img=3" },
  { id: "user-grace", name: "Grace", jobTitle: "Listing Manager", avatarUrl: "https://i.pravatar.cc/96?img=9" },
  { id: "user-henry", name: "Henry", jobTitle: "Sales Specialist", avatarUrl: "https://i.pravatar.cc/96?img=14" },
  { id: "user-isla", name: "Isla", jobTitle: "Marketing Manager", avatarUrl: "https://i.pravatar.cc/96?img=16" },
  { id: "user-james", name: "James", jobTitle: "Designer", avatarUrl: "https://i.pravatar.cc/96?img=18" },
]

export function getTeamSelectableUsers(): TeamSelectableUser[] {
  return SELECTABLE_USERS
}

export function getTeamHeadOptions() {
  return SELECTABLE_USERS.map((user) => ({
    value: user.id,
    label: user.name,
  }))
}

export function createEmptyTeamForm(): TeamFormValues {
  return {
    teamName: "",
    email: "",
    teamHeadId: "",
    userIds: [],
    role: "",
    permission: "",
    status: "",
  }
}
