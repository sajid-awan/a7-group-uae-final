"use client"

import Image from "next/image"
import { Building2, MapPin } from "lucide-react"

import type { DatabaseLocation } from "../content/database-types"
import {
  DASHBOARD_TABLE_ROW_CLASSNAME,
  DASHBOARD_TABLE_WRAPPER_CLASSNAME,
} from "@/features/dashboard/content/dashboard-view-mode"
import { cn } from "@/shared/lib/cn"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/ui/table"

export type DatabaseLocationsListViewProps = {
  locations: DatabaseLocation[]
  onLocationClick?: (location: DatabaseLocation) => void
  className?: string
}

export function DatabaseLocationsListView({
  locations,
  onLocationClick,
  className,
}: DatabaseLocationsListViewProps) {
  return (
    <div className={cn(DASHBOARD_TABLE_WRAPPER_CLASSNAME, "overflow-x-auto", className)}>
      <Table>
        <TableHeader>
          <TableRow className={cn(DASHBOARD_TABLE_ROW_CLASSNAME, "hover:bg-transparent")}>
            <TableHead className="min-w-[220px] font-inter text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Location
            </TableHead>
            <TableHead className="min-w-[180px] font-inter text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Community
            </TableHead>
            <TableHead className="min-w-[180px] font-inter text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Building
            </TableHead>
            <TableHead className="font-inter text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Apartments
            </TableHead>
            <TableHead className="font-inter text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Records
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {locations.map((location) => (
            <TableRow
              key={location.id}
              className={cn(DASHBOARD_TABLE_ROW_CLASSNAME, onLocationClick && "cursor-pointer")}
              onClick={onLocationClick ? () => onLocationClick(location) : undefined}
            >
              <TableCell>
                <div className="flex min-w-0 items-center gap-3">
                  <div className="relative size-10 shrink-0 overflow-hidden rounded-lg bg-muted">
                    <Image
                      src={location.imageUrl}
                      alt={location.areaName}
                      fill
                      className="object-cover"
                      sizes="40px"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="flex items-center gap-1 truncate font-inter text-sm font-semibold text-foreground">
                      <MapPin className="size-3.5 shrink-0 text-muted-foreground" aria-hidden />
                      {location.areaName}
                    </p>
                  </div>
                </div>
              </TableCell>
              <TableCell className="text-sm text-muted-foreground">{location.communityName}</TableCell>
              <TableCell>
                <p className="flex items-center gap-1 text-sm font-medium text-foreground">
                  <Building2 className="size-3.5 text-muted-foreground" aria-hidden />
                  {location.buildingName}
                </p>
              </TableCell>
              <TableCell className="text-sm text-foreground">{location.apartmentCount}</TableCell>
              <TableCell className="text-sm text-muted-foreground">{location.recordCount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

DatabaseLocationsListView.displayName = "DatabaseLocationsListView"
