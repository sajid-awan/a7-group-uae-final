"use client"

import { useCallback, useMemo, useState } from "react"

import { PermissionDrawer } from "../components/permission-drawer"
import type { PermissionFormValues } from "../components/permission-drawer"
import { PermissionsView } from "../components/permissions-view"
import { getPermissionsMockData } from "../content/permissions-content"
import type { PermissionRecord } from "../content/permissions-types"
import { cn } from "@/shared/lib/cn"

export type DashboardPermissionsPageProps = {
  className?: string
}

export function DashboardPermissionsPage({ className }: DashboardPermissionsPageProps) {
  const initialPermissions = useMemo(() => getPermissionsMockData(), [])
  const [permissions, setPermissions] = useState<PermissionRecord[]>(initialPermissions)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [editingPermission, setEditingPermission] = useState<PermissionRecord | null>(null)

  const handleAddPermission = useCallback(() => {
    setEditingPermission(null)
    setDrawerOpen(true)
  }, [])

  const handleEditPermission = useCallback((permission: PermissionRecord) => {
    setEditingPermission(permission)
    setDrawerOpen(true)
  }, [])

  const handleSavePermission = useCallback(
    (_values: PermissionFormValues, permission?: PermissionRecord | null) => {
      if (permission) {
        setPermissions((current) =>
          current.map((item) => (item.id === permission.id ? { ...item, updatedDays: 0 } : item))
        )
        return
      }

      setPermissions((current) => [
        ...current,
        {
          id: `permission-${Date.now()}`,
          name: `Permission ${current.length + 1}`,
          updatedDays: 0,
        },
      ])
    },
    []
  )

  return (
    <div className={cn("p-4 sm:p-6 font-inter", className)}>
      <PermissionsView
        permissions={permissions}
        onAddPermission={handleAddPermission}
        onEditPermission={handleEditPermission}
      />
      <PermissionDrawer
        open={drawerOpen}
        onOpenChange={setDrawerOpen}
        permission={editingPermission}
        onSave={handleSavePermission}
      />
    </div>
  )
}

DashboardPermissionsPage.displayName = "DashboardPermissionsPage"
