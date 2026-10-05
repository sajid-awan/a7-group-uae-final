import { format, isValid, parse } from "date-fns"

import type { DatabaseLocation, DatabaseRecord } from "../content/database-types"

const RECORD_CREATED_DATE_FORMAT = "EEE, MMM d, yyyy"
const FILTER_DATE_FORMAT = "yyyy-MM-dd"

function normalizeRecordCreatedDate(createdDate: string): string | undefined {
  const parsed = parse(createdDate, RECORD_CREATED_DATE_FORMAT, new Date())
  if (!isValid(parsed)) return undefined
  return format(parsed, FILTER_DATE_FORMAT)
}

export function filterDatabaseLocationsBySearch(
  locations: DatabaseLocation[],
  search: string
): DatabaseLocation[] {
  const query = search.trim().toLowerCase()
  if (!query) return locations

  return locations.filter((location) => {
    const haystack = [
      location.areaName,
      location.communityName,
      location.buildingName,
    ]
      .join(" ")
      .toLowerCase()

    return haystack.includes(query)
  })
}

export function filterDatabaseRecords(
  records: DatabaseRecord[],
  {
    search,
    rooms,
    date,
  }: {
    search: string
    rooms: string
    date?: string
  }
): DatabaseRecord[] {
  const query = search.trim().toLowerCase()
  const dateFilter = date?.trim() ?? ""

  return records.filter((record) => {
    const matchesRooms = rooms === "all" || record.rooms === rooms
    if (!matchesRooms) return false

    if (dateFilter) {
      const recordDate = normalizeRecordCreatedDate(record.createdDate)
      if (recordDate !== dateFilter) return false
    }

    if (!query) return true

    const haystack = [
      record.community,
      record.locationLabel,
      record.buildingName,
      record.agentName,
      record.agentEmail,
      record.contactNumber,
    ]
      .join(" ")
      .toLowerCase()

    return haystack.includes(query)
  })
}

export function paginateDatabaseItems<T>(items: T[], page: number, pageSize: number) {
  const pageCount = Math.max(1, Math.ceil(items.length / pageSize))
  const safePage = Math.min(Math.max(page, 1), pageCount)
  const start = (safePage - 1) * pageSize

  return {
    items: items.slice(start, start + pageSize),
    pageCount,
    safePage,
  }
}
