import type { UserRecord } from "./users-types"

export const USERS_PAGE_COPY = {
  title: "Users",
  subtitle: "Manage all users and their access",
  addButtonLabel: "Add New User",
  searchPlaceholder: "Search for agents",
  emptyTitle: "No users found",
  emptyDescription: "Try adjusting your search to find matching users.",
} as const

export const USERS_TABLE_PAGE_SIZE = 10
export const USERS_GRID_PAGE_SIZE = 9

const USER_NAMES = [
  "AAPL HOLD",
  "GOOGL CALL",
  "TSLA BUY",
  "MSFT WATCH",
  "AMZN FOLLOW",
  "META DEMO",
  "NFLX REVIEW",
  "NVDA CALL",
  "ORCL MEET",
  "IBM SYNC",
] as const

const ROLES = ["Admin", "Manager", "Developer", "Designer", "Analyst", "Support"] as const
const PERMISSIONS = ["Admin", "Manager", "Editor", "Viewer"] as const

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
  "https://i.pravatar.cc/96?img=47",
] as const

const TEAM_LOGO_URL = "https://i.pravatar.cc/96?img=60"

export function getUsersMockData(count = 100): UserRecord[] {
  return Array.from({ length: count }, (_, index) => {
    const name = USER_NAMES[index % USER_NAMES.length]!
    const emailSlug = name.toLowerCase().replace(/\s+/g, ".")

    return {
      id: `user-${index + 1}`,
      name,
      email: `${emailSlug}@a7group.com`,
      avatarUrl: AVATARS[index % AVATARS.length]!,
      mobile: `+971 55 ${String(1000000 + index).slice(1, 4)} ${String(1000000 + index).slice(4, 7)}`,
      role: ROLES[index % ROLES.length]!,
      permission: PERMISSIONS[index % PERMISSIONS.length]!,
      teamName: "Royal Home",
      teamLogoUrl: TEAM_LOGO_URL,
      status: index % 5 === 0 ? "inactive" : "active",
    }
  })
}
