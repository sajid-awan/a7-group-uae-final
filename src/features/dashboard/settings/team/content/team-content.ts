import type { TeamGroup, TeamMember, TeamTab } from "./team-types"

export const TEAM_PAGE_COPY = {
  title: "Team members",
  subtitle: "Manage all team members and their roles",
  addButtonLabel: "Create Team",
  emptyTitle: "No team members found",
  emptyDescription: "Try selecting a different team tab to find members.",
} as const

export const TEAM_TABS: { value: TeamTab; label: string }[] = [
  { value: "all", label: "All Teams" },
  { value: "rental", label: "Rental Team" },
  { value: "off-plan", label: "Off-Plan Team" },
  { value: "sales", label: "Sales Team" },
]

const FIRST_NAMES = [
  "Samantha",
  "Michael",
  "Olivia",
  "James",
  "Emma",
  "Daniel",
  "Sophia",
  "William",
  "Ava",
] as const

const LAST_NAMES = [
  "Smith",
  "Johnson",
  "Williams",
  "Brown",
  "Jones",
  "Garcia",
  "Miller",
  "Davis",
  "Wilson",
] as const

const ROLES = [
  "Sales Specialist",
  "Product Manager",
  "Listing Manager",
  "Operations Lead",
  "Marketing Manager",
  "Account Executive",
  "Team Lead",
  "Support Specialist",
  "Analyst",
] as const

const PERMISSIONS = ["Editor", "Admin", "Viewer", "Manager"] as const

const TEAMS: TeamGroup[] = ["rental", "off-plan", "sales"]

const AVATARS = [
  "https://i.pravatar.cc/96?img=1",
  "https://i.pravatar.cc/96?img=5",
  "https://i.pravatar.cc/96?img=8",
  "https://i.pravatar.cc/96?img=11",
  "https://i.pravatar.cc/96?img=12",
  "https://i.pravatar.cc/96?img=15",
  "https://i.pravatar.cc/96?img=20",
  "https://i.pravatar.cc/96?img=25",
  "https://i.pravatar.cc/96?img=32",
] as const

export const TEAM_MEMBERS_PAGE_SIZE = 9

export function getTeamMembersMockData(count = 90): TeamMember[] {
  return Array.from({ length: count }, (_, index) => {
    const firstName = FIRST_NAMES[index % FIRST_NAMES.length]!
    const lastName = LAST_NAMES[index % LAST_NAMES.length]!
    const name = `${firstName} ${lastName}`
    const emailSlug = `${firstName}.${lastName}`.toLowerCase().replace(/\s+/g, ".")

    return {
      id: `team-member-${index + 1}`,
      name,
      email: `${emailSlug}@a7group.com`,
      avatarUrl: AVATARS[index % AVATARS.length]!,
      status: index % 4 === 0 ? "inactive" : "active",
      role: ROLES[index % ROLES.length]!,
      permission: PERMISSIONS[index % PERMISSIONS.length]!,
      team: TEAMS[index % TEAMS.length]!,
    }
  })
}
