"use client"

import type { RoleRecord } from "../content/roles-types"
import { RoleCard } from "./role-card"
import { cn } from "@/shared/lib/cn"

export type RolesGridProps = {
  roles: RoleRecord[]
  className?: string
  onEdit?: (role: RoleRecord) => void
  onDelete?: (role: RoleRecord) => void
}

export function RolesGrid({ roles, className, onEdit, onDelete }: RolesGridProps) {
  return (
    <div className={cn("grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3", className)}>
      {roles.map((role) => (
        <RoleCard key={role.id} role={role} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  )
}

RolesGrid.displayName = "RolesGrid"
