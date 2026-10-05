"use client"

import { useCallback, useMemo, useState } from "react"

import { UserDrawer } from "../components/user-drawer"
import {
  getUserOptionLabel,
  USER_PERMISSION_OPTIONS,
  USER_ROLE_OPTIONS,
  USER_TEAM_OPTIONS,
} from "../content/users-drawer-content"
import type { UserFormValues } from "../content/users-drawer-types"
import { UsersView } from "../components/users-view"
import { getUsersMockData } from "../content/users-content"
import type { UserRecord } from "../content/users-types"
import { cn } from "@/shared/lib/cn"

export type DashboardSettingsUsersPageProps = {
  className?: string
}

export function DashboardSettingsUsersPage({ className }: DashboardSettingsUsersPageProps) {
  const initialUsers = useMemo(() => getUsersMockData(), [])
  const [users, setUsers] = useState<UserRecord[]>(initialUsers)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [editingUser, setEditingUser] = useState<UserRecord | null>(null)

  const handleAddUser = useCallback(() => {
    setEditingUser(null)
    setDrawerOpen(true)
  }, [])

  const handleEditUser = useCallback((user: UserRecord) => {
    setEditingUser(user)
    setDrawerOpen(true)
  }, [])

  const handleSaveUser = useCallback((values: UserFormValues, user?: UserRecord | null) => {
    const fullName = values.fullName.trim()
    const email = values.email.trim()
    if (!fullName || !email) return

    const role = getUserOptionLabel(USER_ROLE_OPTIONS, values.role)
    const permission = getUserOptionLabel(USER_PERMISSION_OPTIONS, values.permission)
    const teamName = getUserOptionLabel(USER_TEAM_OPTIONS, values.team)

    if (user) {
      setUsers((current) =>
        current.map((item) =>
          item.id === user.id
            ? {
                ...item,
                name: fullName,
                email,
                role: role || item.role,
                permission: permission || item.permission,
                teamName: teamName || item.teamName,
              }
            : item
        )
      )
      return
    }

    setUsers((current) => [
      {
        id: `user-${Date.now()}`,
        name: fullName,
        email,
        avatarUrl: "https://i.pravatar.cc/96?img=1",
        mobile: "+971 55 000 0000",
        role: role || "Admin",
        permission: permission || "Viewer",
        teamName: teamName || "Royal Home",
        teamLogoUrl: "https://i.pravatar.cc/96?img=60",
        status: "active",
      },
      ...current,
    ])
  }, [])

  return (
    <div className={cn("p-4 sm:p-6 font-inter", className)}>
      <UsersView users={users} onAddUser={handleAddUser} onEditUser={handleEditUser} />
      <UserDrawer
        open={drawerOpen}
        onOpenChange={setDrawerOpen}
        user={editingUser}
        onSave={handleSaveUser}
      />
    </div>
  )
}

DashboardSettingsUsersPage.displayName = "DashboardSettingsUsersPage"
