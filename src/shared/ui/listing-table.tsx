"use client"

import * as React from "react"
import { MapPin } from "react-feather"

import { Table, TableBody, TableCell, TableFooter, TableHeader, TableRow } from "@/shared/ui/table"
import { TablePaginationBar } from "@/shared/ui/table-pagination"
import { AedText } from "@/shared/ui/aed-text"
import { cn } from "@/shared/lib/cn"

/** One row for the property-style listing table (reusable shape). */
export type ListingRow = {
  id: string
  propertyName: string
  propertySubtitle: string
  status: string
  dateLabel: string
  propertyType: string
  bedsLabel: string
  priceLabel: string
  areaLabel: string
}

const sizeConfig = {
  sm: {
    cell: "py-2 text-xs",
    primary: "text-xs font-semibold",
    secondary: "text-[11px]",
    pin: 14,
  },
  default: {
    cell: "py-3.5 text-sm",
    primary: "text-sm font-semibold",
    secondary: "text-xs",
    pin: 16,
  },
  lg: {
    cell: "py-5 text-base",
    primary: "text-base font-semibold",
    secondary: "text-sm",
    pin: 18,
  },
} as const

export type DataListingTableProps = {
  rows: ListingRow[]
  /** Row density and type scale. */
  size?: keyof typeof sizeConfig
  /**
   * `none` — render every row.
   * `footer` — client-side pages of `rows` with controls under the table.
   */
  pagination?: "none" | "footer"
  /** Rows per page when `pagination="footer"`. Defaults to `5`. */
  pageSize?: number
  /** Controlled current page (1-based). Use with `onPageChange`. */
  page?: number
  onPageChange?: (page: number) => void
  className?: string
  /**
   * Optional `<TableHeader>` content — usually one `<TableRow>` of `<TableHead>` cells (six columns).
   */
  header?: React.ReactNode
  /**
   * Optional `<TableFooter>` content — usually summary `<TableRow>` / `<TableCell>` with `colSpan`.
   */
  footer?: React.ReactNode
}

export function DataListingTable({
  rows,
  size = "default",
  pagination = "none",
  pageSize = 5,
  page: pageProp,
  onPageChange,
  className,
  header,
  footer,
}: DataListingTableProps) {
  const [innerPage, setInnerPage] = React.useState(1)
  const controlled = pageProp !== undefined && onPageChange !== undefined
  const page = controlled ? pageProp : innerPage
  const setPage = controlled ? onPageChange : setInnerPage

  const total = rows.length
  const pageCount = Math.max(1, Math.ceil(total / Math.max(1, pageSize)))
  const safePage = Math.min(Math.max(1, page), pageCount)
  const start = (safePage - 1) * pageSize
  const end = pagination === "footer" ? Math.min(start + pageSize, total) : total
  const visibleRows = pagination === "footer" ? rows.slice(start, start + pageSize) : rows

  const sc = sizeConfig[size]

  const summary =
    pagination === "footer" && total > 0 ? `Showing ${start + 1}–${end} of ${total}` : undefined

  const showPagination = pagination === "footer" && total > 0 && pageCount > 1

  return (
    <div className={cn("overflow-hidden rounded-lg border border-border bg-card", className)}>
      {/*
        table-fixed so td width / padding are respected; without it, max-width on cells is often ignored
        and the first column does not keep a stable share of the row.
      */}
      <Table className="table-fixed">
        <colgroup>
          <col style={{ width: "38%" }} />
          <col style={{ width: "11%" }} />
          <col style={{ width: "13%" }} />
          <col style={{ width: "14%" }} />
          <col style={{ width: "10%" }} />
          <col style={{ width: "14%" }} />
        </colgroup>
        {header ? <TableHeader>{header}</TableHeader> : null}
        <TableBody>
          {visibleRows.length === 0 ? (
            <TableRow className="border-border hover:bg-transparent">
              <TableCell colSpan={6} className={cn("px-4 py-12 text-center text-muted-foreground", sc.cell)}>
                No listings.
              </TableCell>
            </TableRow>
          ) : (
            visibleRows.map((row) => (
              <TableRow key={row.id} className="border-border hover:bg-muted/30">
                <TableCell className={cn("min-w-0 px-4 align-middle", sc.cell)}>
                  <div className="flex min-w-0 gap-2.5">
                    <span className="mt-0.5 shrink-0 text-a7-black" aria-hidden>
                      <MapPin size={sc.pin} strokeWidth={2} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className={cn("truncate text-a7-black", sc.primary)}>{row.propertyName}</div>
                      <div className={cn("mt-0.5 truncate text-muted-foreground", sc.secondary)}>
                        {row.propertySubtitle}
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className={cn("whitespace-nowrap px-3 text-center text-muted-foreground", sc.cell)}>
                  {row.status}
                </TableCell>
                <TableCell className={cn("whitespace-nowrap px-3 text-center text-muted-foreground", sc.cell)}>
                  {row.dateLabel}
                </TableCell>
                <TableCell className={cn("whitespace-nowrap px-3 text-center text-muted-foreground", sc.cell)}>
                  {row.propertyType}
                </TableCell>
                <TableCell className={cn("whitespace-nowrap px-3 text-center text-muted-foreground", sc.cell)}>
                  {row.bedsLabel}
                </TableCell>
                <TableCell className={cn("min-w-0 whitespace-nowrap px-4 text-right align-middle", sc.cell)}>
                  <div className={cn("font-semibold text-a7-black", sc.primary)}>
                    <AedText text={row.priceLabel} />
                  </div>
                  <div className={cn("mt-0.5 text-muted-foreground", sc.secondary)}>{row.areaLabel}</div>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
        {footer ? <TableFooter>{footer}</TableFooter> : null}
      </Table>
      {showPagination ? (
        <TablePaginationBar
          page={safePage}
          pageCount={pageCount}
          onPageChange={(p) => setPage(p)}
          summary={summary}
        />
      ) : null}
    </div>
  )
}
