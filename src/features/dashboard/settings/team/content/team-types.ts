export type TeamMemberStatus = "active" | "inactive"

export type TeamGroup = "rental" | "off-plan" | "sales"

export type TeamTab = "all" | TeamGroup

export type TeamMember = {
  id: string
  name: string
  email: string
  avatarUrl: string
  status: TeamMemberStatus
  role: string
  permission: string
  team: TeamGroup
}
