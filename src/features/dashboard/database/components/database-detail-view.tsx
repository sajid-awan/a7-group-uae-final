"use client"

import { Database } from "lucide-react"
import { useEffect, useMemo, useState } from "react"

import type { DatabaseLocation, DatabaseRecord } from "../content/database-types"
import { DatabaseDetailToolbar } from "./database-detail-toolbar"
import { DatabaseHeaderActions } from "./database-toolbar"
import { DatabaseRecordDrawer } from "./database-record-drawer"
import { DatabaseRecordsListView } from "./database-records-list-view"
import {
  filterDatabaseRecords,
  paginateDatabaseItems,
} from "../utils/database-filters"
import { cn } from "@/shared/lib/cn"
import { Badge } from "@/shared/ui/badge"
import { DashboardEmptyState } from "@/shared/ui/dashboard/dashboard-empty-state"
import { DashboardPageHeader } from "@/shared/ui/dashboard/dashboard-page-header"
import { ListingPagination } from "@/shared/ui/listing-pagination"
import { PAGE_ROUTES } from "@/shared/lib/constants/routes"

const PAGE_SIZE = 10

export type DatabaseDetailViewProps = {
  location: DatabaseLocation
  records: DatabaseRecord[]
  onUpload?: () => void
  className?: string
}

export function DatabaseDetailView({
  location,
  records,
  onUpload,
  className,
}: DatabaseDetailViewProps) {
  const [search, setSearch] = useState("")
  const [rooms, setRooms] = useState("all")
  const [date, setDate] = useState("")
  const [page, setPage] = useState(1)
  const [selectedRecord, setSelectedRecord] = useState<DatabaseRecord | null>(null)
  const [drawerOpen, setDrawerOpen] = useState(false)

  useEffect(() => {
    setPage(1)
  }, [search, rooms, date])

  const filteredRecords = useMemo(
    () => filterDatabaseRecords(records, { search, rooms, date }),
    [records, search, rooms, date]
  )

  const { items: visibleRecords, pageCount, safePage } = useMemo(
    () => paginateDatabaseItems(filteredRecords, page, PAGE_SIZE),
    [filteredRecords, page]
  )

  const openRecordDrawer = (record: DatabaseRecord) => {
    setSelectedRecord(record)
    setDrawerOpen(true)
  }

  return (
    <div className={cn("space-y-6", className)}>
      <DashboardPageHeader
        backHref={PAGE_ROUTES.dashboardDatabase}
        backLabel="Back to database"
        title={
          <span className="inline-flex items-center gap-3">
            <span>{location.areaName}</span>
            <Badge variant="meta" className="rounded-full px-2.5 py-1 text-xs font-medium">
              {location.recordCount}
            </Badge>
          </span>
        }
        subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        actions={<DatabaseHeaderActions onUpload={onUpload} />}
      />

      <DatabaseDetailToolbar
        searchValue={search}
        onSearchChange={setSearch}
        roomsValue={rooms}
        onRoomsChange={setRooms}
        dateValue={date}
        onDateChange={setDate}
      />

      {filteredRecords.length === 0 ? (
        <DashboardEmptyState
          icon={Database}
          title="No records found"
          description="Try adjusting your search, room, or date filters."
        />
      ) : (
        <DatabaseRecordsListView
          records={visibleRecords}
          onRecordClick={openRecordDrawer}
          onViewRecord={openRecordDrawer}
        />
      )}

      {filteredRecords.length > PAGE_SIZE ? (
        <ListingPagination page={safePage} pageCount={pageCount} onPageChange={setPage} />
      ) : null}

      <DatabaseRecordDrawer
        open={drawerOpen}
        onOpenChange={setDrawerOpen}
        record={selectedRecord}
      />
    </div>
  )
}

DatabaseDetailView.displayName = "DatabaseDetailView"
