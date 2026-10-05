"use client"

import { LayoutGrid, Plus } from "lucide-react"

import { PERMISSIONS_PAGE_COPY } from "../content/permissions-content"
import type { PermissionRecord } from "../content/permissions-types"
import { PermissionsGrid } from "./permissions-grid"
import { PAGE_ROUTES } from "@/shared/lib/constants/routes"
import { cn } from "@/shared/lib/cn"
import { Button } from "@/shared/ui/button"
import { DashboardEmptyState } from "@/shared/ui/dashboard/dashboard-empty-state"
import { DashboardPageHeader } from "@/shared/ui/dashboard/dashboard-page-header"

export type PermissionsViewProps = {
  permissions: PermissionRecord[]
  onAddPermission?: () => void
  onEditPermission?: (permission: PermissionRecord) => void
  onDeletePermission?: (permission: PermissionRecord) => void
  className?: string
}

export function PermissionsView({
  permissions,
  onAddPermission,
  onEditPermission,
  onDeletePermission,
  className,
}: PermissionsViewProps) {
  return (
    <div className={cn("space-y-6", className)}>
      <DashboardPageHeader
        backHref={PAGE_ROUTES.dashboardSettings}
        backLabel="Back to settings"
        title={PERMISSIONS_PAGE_COPY.title}
        subtitle={PERMISSIONS_PAGE_COPY.subtitle}
        actions={
          <Button
            type="button"
            size="sm"
            className="shrink-0 gap-2 rounded-lg px-4"
            onClick={onAddPermission}
          >
            <Plus className="size-4" aria-hidden />
            {PERMISSIONS_PAGE_COPY.addButtonLabel}
          </Button>
        }
      />

      {permissions.length === 0 ? (
        <DashboardEmptyState
          icon={LayoutGrid}
          title={PERMISSIONS_PAGE_COPY.emptyTitle}
          description={PERMISSIONS_PAGE_COPY.emptyDescription}
        />
      ) : (
        <PermissionsGrid
          permissions={permissions}
          onEdit={onEditPermission}
          onDelete={onDeletePermission}
        />
      )}
    </div>
  )
}

PermissionsView.displayName = "PermissionsView"
