import type { UserRecord } from "../content/users-types"

export function filterUsersBySearch(users: UserRecord[], search: string): UserRecord[] {
  const query = search.trim().toLowerCase()
  if (!query) return users

  return users.filter((user) => {
    const haystack = [user.name, user.email, user.mobile, user.role, user.permission, user.teamName]
      .join(" ")
      .toLowerCase()
    return haystack.includes(query)
  })
}

export function paginateUsers<T>(items: T[], page: number, pageSize: number) {
  const pageCount = Math.max(1, Math.ceil(items.length / pageSize))
  const safePage = Math.min(Math.max(page, 1), pageCount)
  const start = (safePage - 1) * pageSize

  return {
    items: items.slice(start, start + pageSize),
    pageCount,
    safePage,
  }
}
