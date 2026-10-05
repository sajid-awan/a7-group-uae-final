"use client"

import type { PermissionRecord } from "../content/permissions-types"
import { PermissionCard } from "./permission-card"
import { cn } from "@/shared/lib/cn"

export type PermissionsGridProps = {
  permissions: PermissionRecord[]
  className?: string
  onEdit?: (permission: PermissionRecord) => void
  onDelete?: (permission: PermissionRecord) => void
}

export function PermissionsGrid({
  permissions,
  className,
  onEdit,
  onDelete,
}: PermissionsGridProps) {
  return (
    <div className={cn("grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3", className)}>
      {permissions.map((permission) => (
        <PermissionCard
          key={permission.id}
          permission={permission}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  )
}

PermissionsGrid.displayName = "PermissionsGrid"
