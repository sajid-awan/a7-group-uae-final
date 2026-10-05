"use client"

import { MoreVertical } from "lucide-react"

import type { DatabaseRecord } from "../content/database-types"
import { DatabaseInteractionStats } from "./database-interaction-stats"
import {
  DASHBOARD_TABLE_ROW_CLASSNAME,
  DASHBOARD_TABLE_WRAPPER_CLASSNAME,
} from "@/features/dashboard/content/dashboard-view-mode"
import { cn } from "@/shared/lib/cn"
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar"
import { Button } from "@/shared/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/ui/table"
import { getInitials } from "@/shared/lib/get-initials"

export type DatabaseRecordsListViewProps = {
  records: DatabaseRecord[]
  onRecordClick?: (record: DatabaseRecord) => void
  onViewRecord?: (record: DatabaseRecord) => void
  className?: string
}

export function DatabaseRecordsListView({
  records,
  onRecordClick,
  onViewRecord,
  className,
}: DatabaseRecordsListViewProps) {
  return (
    <div className={cn(DASHBOARD_TABLE_WRAPPER_CLASSNAME, "overflow-x-auto", className)}>
      <Table>
        <TableHeader>
          <TableRow className={cn(DASHBOARD_TABLE_ROW_CLASSNAME, "hover:bg-transparent")}>
            <TableHead className="min-w-[180px] font-inter text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Location &amp; Community
            </TableHead>
            <TableHead className="min-w-[160px] font-inter text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Building &amp; Number
            </TableHead>
            <TableHead className="min-w-[130px] font-inter text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Rooms &amp; Size
            </TableHead>
            <TableHead className="min-w-[180px] font-inter text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Agent
            </TableHead>
            <TableHead className="min-w-[160px] font-inter text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Contact Number
            </TableHead>
            <TableHead className="min-w-[140px] font-inter text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Created
            </TableHead>
            <TableHead className="min-w-[120px] font-inter text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Created
            </TableHead>
            <TableHead className="min-w-[150px] font-inter text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Interactions
            </TableHead>
            <TableHead className="w-[52px]">
              <span className="sr-only">Actions</span>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {records.map((record) => (
            <TableRow
              key={record.id}
              className={cn(DASHBOARD_TABLE_ROW_CLASSNAME, onRecordClick && "cursor-pointer")}
              onClick={onRecordClick ? () => onRecordClick(record) : undefined}
            >
              <TableCell>
                <div className="min-w-0">
                  <p className="truncate font-inter text-sm font-semibold text-foreground">
                    {record.locationLabel}
                  </p>
                  <p className="truncate text-sm text-muted-foreground">{record.community}</p>
                </div>
              </TableCell>
              <TableCell>
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-foreground">{record.buildingName}</p>
                  <p className="truncate text-sm text-muted-foreground">{record.buildingNumber}</p>
                </div>
              </TableCell>
              <TableCell>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-foreground">{record.rooms}</p>
                  <p className="text-sm text-muted-foreground">{record.sizeSqft}</p>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex min-w-0 items-center gap-2">
                  <Avatar size="sm" shape="circle" className="size-8 shrink-0">
                    <AvatarImage src={record.agentAvatarUrl} alt={record.agentName} />
                    <AvatarFallback className="text-xs">{getInitials(record.agentName)}</AvatarFallback>
                  </Avatar>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-foreground">{record.agentName}</p>
                    <p className="truncate text-sm text-muted-foreground">{record.agentEmail}</p>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-foreground">{record.contactCountry}</p>
                  <p className="truncate text-sm text-muted-foreground">{record.contactNumber}</p>
                </div>
              </TableCell>
              <TableCell>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-foreground">{record.createdDate}</p>
                  <p className="text-sm text-muted-foreground">{record.createdTime}</p>
                </div>
              </TableCell>
              <TableCell className="text-sm text-muted-foreground">{record.createdAgo}</TableCell>
              <TableCell>
                <DatabaseInteractionStats interactions={record.interactions} />
              </TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      type="button"
                      variant="ghost"
                      size="xs"
                      shape="pill"
                      className="h-8 w-8 p-0 text-muted-foreground"
                      aria-label={`Actions for ${record.buildingName}`}
                      onClick={(event) => event.stopPropagation()}
                    >
                      <MoreVertical className="size-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => onViewRecord?.(record)}>View details</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

DatabaseRecordsListView.displayName = "DatabaseRecordsListView"
