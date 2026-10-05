"use client"

import { Download, Plus, RefreshCw, Users } from "lucide-react"
import { useEffect, useMemo, useState } from "react"

import { USERS_GRID_PAGE_SIZE, USERS_PAGE_COPY, USERS_TABLE_PAGE_SIZE } from "../content/users-content"
import type { UserRecord } from "../content/users-types"
import { filterUsersBySearch, paginateUsers } from "../utils/users-filters"
import { UsersGridView } from "./users-grid-view"
import { UsersListView } from "./users-list-view"
import { DashboardToolbarIconButton } from "@/features/dashboard/components/dashboard-toolbar-icon-button"
import { DashboardViewModeToolbar } from "@/features/dashboard/components/dashboard-view-mode-toolbar"
import type { DashboardViewMode } from "@/features/dashboard/content/dashboard-view-mode"
import { PAGE_ROUTES } from "@/shared/lib/constants/routes"
import { cn } from "@/shared/lib/cn"
import { Button } from "@/shared/ui/button"
import { DashboardEmptyState } from "@/shared/ui/dashboard/dashboard-empty-state"
import { DashboardPageHeader } from "@/shared/ui/dashboard/dashboard-page-header"
import { ListingPagination } from "@/shared/ui/listing-pagination"

export type UsersViewProps = {
  users: UserRecord[]
  onAddUser?: () => void
  onEditUser?: (user: UserRecord) => void
  onRefresh?: () => void
  onDownload?: () => void
  className?: string
}

export function UsersView({
  users,
  onAddUser,
  onEditUser,
  onRefresh,
  onDownload,
  className,
}: UsersViewProps) {
  const [search, setSearch] = useState("")
  const [page, setPage] = useState(1)
  const [viewMode, setViewMode] = useState<DashboardViewMode>("table")

  useEffect(() => {
    setPage(1)
  }, [search, viewMode])

  const pageSize = viewMode === "table" ? USERS_TABLE_PAGE_SIZE : USERS_GRID_PAGE_SIZE

  const filteredUsers = useMemo(() => filterUsersBySearch(users, search), [search, users])

  const { items: visibleUsers, pageCount, safePage } = useMemo(
    () => paginateUsers(filteredUsers, page, pageSize),
    [filteredUsers, page, pageSize]
  )

  return (
    <div className={cn("space-y-6", className)}>
      <DashboardPageHeader
        backHref={PAGE_ROUTES.dashboardSettings}
        backLabel="Back to settings"
        title={USERS_PAGE_COPY.title}
        subtitle={USERS_PAGE_COPY.subtitle}
        actions={
          <Button type="button" size="sm" className="shrink-0 gap-2 rounded-lg px-4" onClick={onAddUser}>
            <Plus className="size-4" aria-hidden />
            {USERS_PAGE_COPY.addButtonLabel}
          </Button>
        }
      />

      <DashboardViewModeToolbar
        searchValue={search}
        onSearchChange={setSearch}
        searchPlaceholder={USERS_PAGE_COPY.searchPlaceholder}
        searchAriaLabel="Search for users"
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        trailingActions={
          <>
            <DashboardToolbarIconButton label="Download" onClick={onDownload}>
              <Download className="size-3.5" />
            </DashboardToolbarIconButton>
            <DashboardToolbarIconButton label="Refresh" onClick={onRefresh}>
              <RefreshCw className="size-3.5" />
            </DashboardToolbarIconButton>
          </>
        }
      />

      {filteredUsers.length === 0 ? (
        <DashboardEmptyState
          icon={Users}
          title={USERS_PAGE_COPY.emptyTitle}
          description={USERS_PAGE_COPY.emptyDescription}
        />
      ) : (
        <>
          {viewMode === "table" ? (
            <UsersListView users={visibleUsers} onEditUser={onEditUser} />
          ) : (
            <UsersGridView users={visibleUsers} onEditUser={onEditUser} />
          )}
          {pageCount > 1 ? (
            <ListingPagination page={safePage} pageCount={pageCount} onPageChange={setPage} />
          ) : null}
        </>
      )}
    </div>
  )
}

UsersView.displayName = "UsersView"
