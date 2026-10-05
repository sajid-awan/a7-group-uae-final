"use client"

import { motion } from "framer-motion"

import { BreadcrumbList, type BreadcrumbItem } from "@/shared/ui/breadcrumb"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select"
import { AGENTS_PAGE_TITLE } from "@/features/agent/services/agent-profile"
import { cn } from "@/shared/lib/cn"

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

const SORT_OPTIONS = [
  { value: "featured", label: "Featured" },
  { value: "name-asc", label: "Name (A–Z)" },
  { value: "name-desc", label: "Name (Z–A)" },
] as const

export type AgentsPageHeaderSectionProps = {
  breadcrumbs: BreadcrumbItem[]
  title?: string
  sortValue?: string
  onSortChange?: (value: string) => void
  className?: string
}

/** White strip below the search hero — breadcrumbs, sort, and page title (matches listing discover layout). */
export function AgentsPageHeaderSection({
  breadcrumbs,
  title = AGENTS_PAGE_TITLE,
  sortValue = "featured",
  onSortChange,
  className,
}: AgentsPageHeaderSectionProps) {
  return (
    <section className={cn("bg-white relative ", className)} aria-labelledby="agents-page-heading">
      <div className="container mx-auto px-4 py-5 sm:py-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          <BreadcrumbList
            items={breadcrumbs}
            size="sm"
            separator="chevron"
            wrap={false}
            className="min-w-0 flex-1 sm:max-w-none"
          />

          <div className="flex w-full shrink-0 items-center justify-between gap-2 sm:w-auto sm:justify-end">
            <span className="text-sm whitespace-nowrap  text-muted-foreground">Sort by:</span>
            <Select value={sortValue} onValueChange={onSortChange}>
              <SelectTrigger
                aria-label="Sort agents"
                inputSize="sm"
                radius="full"
                className="h-9 min-w-[8.5rem] border-border bg-white px-4 font-medium text-a7-text-gray shadow-none"
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent align="end">
                {SORT_OPTIONS.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <motion.h1
          id="agents-page-heading"
          className="mt-4 font-heading text-[clamp(1.5rem,5.5vw,2.75rem)] font-semibold leading-tight tracking-tight text-a7-black sm:mt-5 md:mt-6 md:text-[40px]"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          {title}
        </motion.h1>
      </div>
    </section>
  )
}
