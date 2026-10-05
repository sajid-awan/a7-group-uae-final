"use client"

import { Search } from "lucide-react"

import { Button } from "@/shared/ui/button"
import { Input } from "@/shared/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select"
import { cn } from "@/shared/lib/cn"

export type EventSearchBarProps = {
  className?: string
}

const selectTriggerClass =
  "h-11 w-full min-w-0 gap-2 self-stretch border-transparent bg-transparent px-3 shadow-none !outline-none focus-visible:border-transparent focus-visible:ring-0 focus-visible:ring-transparent md:h-10 md:w-auto md:shrink-0 [&_svg]:size-4 [&_svg]:shrink-0"

const selectFieldClass =
  "w-full min-w-0 shrink-0 md:w-auto [&_[data-slot=select-trigger]]:w-full md:[&_[data-slot=select-trigger]]:w-auto"

export function EventSearchBar({ className }: EventSearchBarProps) {
  return (
    <div className={cn("mt-6 w-full min-w-0", className)}>
      <form
        className={cn(
          "flex w-full min-w-0 flex-col items-stretch gap-3 rounded-2xl border border-black/10 bg-white p-3 shadow-xs",
          "md:flex-row md:items-center md:gap-2 md:rounded-full md:p-1.5"
        )}
        role="search"
        aria-label="Search events"
      >
        <Input
          radius="full"
          inputSize="lg"
          icon={<Search className="size-4 shrink-0" />}
          placeholder="Event name, location"
          className="h-11 min-w-0 w-full border-transparent shadow-none !outline-none focus-visible:border-transparent focus-visible:ring-0 focus-visible:ring-transparent md:h-10 md:flex-1"
        />

        <div className={selectFieldClass}>
          <Select defaultValue="all-dates">
            <SelectTrigger radius="full" inputSize="lg" className={cn(selectTriggerClass, "md:min-w-[9.5rem]")}>
              <span className="min-w-0 flex-1 truncate text-left">
                <SelectValue placeholder="Date" />
              </span>
            </SelectTrigger>
            <SelectContent className="min-w-[160px]">
              <SelectItem value="all-dates" className="whitespace-nowrap">
                Date
              </SelectItem>
              <SelectItem value="this-month" className="whitespace-nowrap">
                This month
              </SelectItem>
              <SelectItem value="next-month" className="whitespace-nowrap">
                Next month
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className={selectFieldClass}>
          <Select defaultValue="all-locations">
            <SelectTrigger radius="full" inputSize="lg" className={cn(selectTriggerClass, "md:min-w-[8.75rem]")}>
              <span className="min-w-0 flex-1 truncate pr-1 text-left">
                <SelectValue placeholder="Location" />
              </span>
            </SelectTrigger>
            <SelectContent className="min-w-[190px]">
              <SelectItem value="all-locations" className="whitespace-nowrap">
                Location
              </SelectItem>
              <SelectItem value="downtown" className="whitespace-nowrap">
                Downtown Dubai
              </SelectItem>
              <SelectItem value="marina" className="whitespace-nowrap">
                Dubai Marina
              </SelectItem>
              <SelectItem value="wtc" className="whitespace-nowrap">
                World Trade Centre
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button
          type="submit"
          variant="default"
          shape="pill"
          size="sm"
          className="h-11 w-full shrink-0 bg-black px-8 text-white hover:bg-black/90 md:h-10 md:w-auto"
        >
          <Search className="mr-2 size-4" aria-hidden />
          Search
        </Button>
      </form>
    </div>
  )
}
