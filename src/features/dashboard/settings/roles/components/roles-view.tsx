"use client"

import { LayoutGrid, Plus } from "lucide-react"

import { ROLES_PAGE_COPY } from "../content/roles-content"
import type { RoleRecord } from "../content/roles-types"
import { RolesGrid } from "./roles-grid"
import { PAGE_ROUTES } from "@/shared/lib/constants/routes"
import { cn } from "@/shared/lib/cn"
import { Button } from "@/shared/ui/button"
import { DashboardEmptyState } from "@/shared/ui/dashboard/dashboard-empty-state"
import { DashboardPageHeader } from "@/shared/ui/dashboard/dashboard-page-header"

export type RolesViewProps = {
  roles: RoleRecord[]
  onAddRole?: () => void
  onEditRole?: (role: RoleRecord) => void
  onDeleteRole?: (role: RoleRecord) => void
  className?: string
}

export function RolesView({
  roles,
  onAddRole,
  onEditRole,
  onDeleteRole,
  className,
}: RolesViewProps) {
  return (
    <div className={cn("space-y-6", className)}>
      <DashboardPageHeader
        backHref={PAGE_ROUTES.dashboardSettings}
        backLabel="Back to settings"
        title={ROLES_PAGE_COPY.title}
        subtitle={ROLES_PAGE_COPY.subtitle}
        actions={
          <Button type="button" size="sm" className="shrink-0 gap-2 rounded-lg px-4" onClick={onAddRole}>
            <Plus className="size-4" aria-hidden />
            {ROLES_PAGE_COPY.addButtonLabel}
          </Button>
        }
      />

      {roles.length === 0 ? (
        <DashboardEmptyState
          icon={LayoutGrid}
          title={ROLES_PAGE_COPY.emptyTitle}
          description={ROLES_PAGE_COPY.emptyDescription}
        />
      ) : (
        <RolesGrid roles={roles} onEdit={onEditRole} onDelete={onDeleteRole} />
      )}
    </div>
  )
}

RolesView.displayName = "RolesView"
