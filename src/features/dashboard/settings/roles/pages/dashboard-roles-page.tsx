"use client"

import { useCallback, useMemo, useState } from "react"

import { RoleDrawer } from "../components/role-drawer"
import type { RoleFormValues } from "../components/role-drawer"
import { RolesView } from "../components/roles-view"
import { getRolesMockData } from "../content/roles-content"
import type { RoleRecord } from "../content/roles-types"
import { cn } from "@/shared/lib/cn"

export type DashboardRolesPageProps = {
  className?: string
}

export function DashboardRolesPage({ className }: DashboardRolesPageProps) {
  const initialRoles = useMemo(() => getRolesMockData(), [])
  const [roles, setRoles] = useState<RoleRecord[]>(initialRoles)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [editingRole, setEditingRole] = useState<RoleRecord | null>(null)

  const handleAddRole = useCallback(() => {
    setEditingRole(null)
    setDrawerOpen(true)
  }, [])

  const handleEditRole = useCallback((role: RoleRecord) => {
    setEditingRole(role)
    setDrawerOpen(true)
  }, [])

  const handleDeleteRole = useCallback((role: RoleRecord) => {
    setRoles((current) => current.filter((item) => item.id !== role.id))
    setEditingRole((current) => (current?.id === role.id ? null : current))
  }, [])

  const handleSaveRole = useCallback((values: RoleFormValues, role?: RoleRecord | null) => {
    const trimmedName = values.name.trim()
    if (!trimmedName) return

    if (role) {
      setRoles((current) =>
        current.map((item) => (item.id === role.id ? { ...item, name: trimmedName } : item))
      )
      return
    }

    setRoles((current) => [
      ...current,
      {
        id: `role-${Date.now()}`,
        name: trimmedName,
        updatedDays: 0,
      },
    ])
  }, [])

  return (
    <div className={cn("p-4 sm:p-6 font-inter", className)}>
      <RolesView
        roles={roles}
        onAddRole={handleAddRole}
        onEditRole={handleEditRole}
        onDeleteRole={handleDeleteRole}
      />
      <RoleDrawer
        open={drawerOpen}
        onOpenChange={setDrawerOpen}
        role={editingRole}
        onSave={handleSaveRole}
      />
    </div>
  )
}

DashboardRolesPage.displayName = "DashboardRolesPage"
