"use client"

import { Search } from "lucide-react"

import { DATABASE_PAGE_COPY, DATABASE_ROOMS_FILTER_OPTIONS } from "../content/database-content"
import { cn } from "@/shared/lib/cn"
import { DatePicker } from "@/shared/ui/date-picker"
import { formControlClassName } from "@/shared/ui/form-field"
import { Input } from "@/shared/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select"

export type DatabaseDetailToolbarProps = {
  searchValue: string
  onSearchChange: (value: string) => void
  roomsValue: string
  onRoomsChange: (value: string) => void
  dateValue: string
  onDateChange: (value: string) => void
  className?: string
}

export function DatabaseDetailToolbar({
  searchValue,
  onSearchChange,
  roomsValue,
  onRoomsChange,
  dateValue,
  onDateChange,
  className,
}: DatabaseDetailToolbarProps) {
  return (
    <div className={cn("flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between", className)}>
      <div className="relative w-full max-w-md">
        <Search
          className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
          aria-hidden
        />
        <Input
          value={searchValue}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder={DATABASE_PAGE_COPY.detailSearchPlaceholder}
          inputSize="sm"
          radius="lg"
          className="h-10 pl-9"
          aria-label="Search database records"
        />
      </div>

      <div className="flex shrink-0 flex-nowrap items-center gap-2 self-end sm:self-auto">
        <Select value={roomsValue} onValueChange={onRoomsChange}>
          <SelectTrigger className={cn(formControlClassName, "h-10 min-h-10 w-auto min-w-[9rem]")}>
            <SelectValue placeholder={DATABASE_PAGE_COPY.roomsFilterLabel} />
          </SelectTrigger>
          <SelectContent>
            {DATABASE_ROOMS_FILTER_OPTIONS.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <DatePicker
          value={dateValue}
          onChange={onDateChange}
          placeholder={DATABASE_PAGE_COPY.dateFilterLabel}
          modal={false}
          className={cn(formControlClassName, "h-10 min-h-10 w-auto min-w-[10rem]")}
        />
      </div>
    </div>
  )
}

DatabaseDetailToolbar.displayName = "DatabaseDetailToolbar"
