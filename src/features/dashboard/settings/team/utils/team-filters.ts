import type { TeamMember, TeamTab } from "../content/team-types"

export function filterTeamMembersByTab(members: TeamMember[], tab: TeamTab): TeamMember[] {
  if (tab === "all") return members
  return members.filter((member) => member.team === tab)
}

export function paginateTeamMembers<T>(items: T[], page: number, pageSize: number) {
  const pageCount = Math.max(1, Math.ceil(items.length / pageSize))
  const safePage = Math.min(Math.max(page, 1), pageCount)
  const start = (safePage - 1) * pageSize

  return {
    items: items.slice(start, start + pageSize),
    pageCount,
    safePage,
  }
}
