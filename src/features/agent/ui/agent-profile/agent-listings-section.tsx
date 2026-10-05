"use client"

import { useMemo, useState } from "react"

import { CheckCircleIcon, Share07Icon } from "@/shared/icons"
import { PropertyCardListingHorizontal } from "@/features/property/ui/property-card"
import { ListingShareMenu } from "@/shared/ui/shared/listing-share-menu"
import { ListingPagination } from "@/shared/ui/listing-pagination"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select"
import type { AgentProfileDetail } from "@/features/agent/core/domain/entity/agent.entity"
import {
  filterAgentListingsByTransaction,
  sortAgentListings,
  type AgentListing,
} from "@/features/agent"
import { cn } from "@/shared/lib/cn"

const PAGE_SIZE = 5

const TRANSACTION_FILTERS = [
  { value: "both", label: "Both" },
  { value: "buy", label: "Buy" },
  { value: "rent", label: "Rent" },
] as const

type TransactionFilter = (typeof TRANSACTION_FILTERS)[number]["value"]

const SORT_OPTIONS = [
  { value: "popular", label: "Popular" },
  { value: "price-asc", label: "Price (low to high)" },
  { value: "price-desc", label: "Price (high to low)" },
] as const

type SortValue = (typeof SORT_OPTIONS)[number]["value"]

type AgentListingsSectionProps = {
  agent: AgentProfileDetail
  listings: AgentListing[]
  className?: string
}

export function AgentListingsSection({ agent, listings: allListings, className }: AgentListingsSectionProps) {

  const [transactionFilter, setTransactionFilter] = useState<TransactionFilter>("both")
  const [sort, setSort] = useState<SortValue>("popular")
  const [page, setPage] = useState(1)

  const filteredListings = useMemo(() => {
    const filtered = filterAgentListingsByTransaction(allListings, transactionFilter)
    return sortAgentListings(filtered, sort)
  }, [allListings, transactionFilter, sort])

  const pageCount = Math.max(1, Math.ceil(filteredListings.length / PAGE_SIZE))
  const safePage = Math.min(page, pageCount)

  const visibleListings = useMemo(() => {
    const start = (safePage - 1) * PAGE_SIZE
    return filteredListings.slice(start, start + PAGE_SIZE)
  }, [filteredListings, safePage])

  const handleFilterChange = (value: TransactionFilter) => {
    setTransactionFilter(value)
    setPage(1)
  }

  const handleSortChange = (value: string) => {
    setSort(value as SortValue)
    setPage(1)
  }

  return (
    <section
      className={cn(
        "rounded-2xl border border-border bg-white px-4 py-5 sm:px-6 sm:py-5 md:px-5",
        className
      )}
      aria-labelledby="agent-active-properties-heading"
    >
      <header className="flex min-w-0 flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
        <h2
          id="agent-active-properties-heading"
          className="font-heading text-2xl font-bold text-a7-black md:text-3xl"
        >
          Active Properties
        </h2>

        <div className="flex w-full flex-1 min-w-0 flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-end xl:flex-nowrap">
          <div
            role="group"
            aria-label="Filter by transaction type"
            className="inline-flex w-full min-w-0 overflow-hidden rounded-full border border-border bg-white sm:w-auto"
          >
            {TRANSACTION_FILTERS.map(({ value, label }, index) => {
              const isActive = transactionFilter === value
              const isLast = index === TRANSACTION_FILTERS.length - 1

              return (
                <button
                  key={value}
                  type="button"
                  className={cn(
                    "inline-flex h-10 flex-1 items-center justify-center gap-1.5 px-3 text-sm font-medium transition-colors sm:min-w-[5.25rem] sm:flex-none sm:gap-2 sm:px-5",
                    !isLast && "border-r border-border",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "bg-white text-a7-text-gray hover:bg-muted/40"
                  )}
                  onClick={() => handleFilterChange(value)}
                  aria-pressed={isActive}
                >
                  <CheckCircleIcon
                    className={cn(
                      "size-4 shrink-0",
                      isActive ? "text-primary-foreground" : "text-a7-text-gray"
                    )}
                    strokeWidth={1.5}
                    aria-hidden
                  />
                  {label}
                </button>
              )
            })}
          </div>

          <div className="flex w-full min-w-0 items-center justify-between gap-3 sm:w-auto sm:justify-end">
            <ListingShareMenu
              subject="Agent Listings"
              trigger={
                <button
                  type="button"
                  className="flex size-9 shrink-0 items-center justify-center rounded-full border border-border bg-white text-a7-text-gray transition hover:bg-muted/50"
                  aria-label="Share listings"
                >
                  <Share07Icon className="size-5" />
                </button>
              }
            />

            <div className="flex min-w-0 flex-1 items-center justify-end gap-2 sm:flex-initial">
              <span className="shrink-0 whitespace-nowrap text-sm text-muted-foreground">Sort by:</span>
              <div className="min-w-0 flex-1 sm:w-[8.5rem] sm:flex-none">
                <Select value={sort} onValueChange={handleSortChange}>
                  <SelectTrigger
                    aria-label="Sort listings"
                    inputSize="sm"
                    radius="full"
                    className="h-10 min-h-10 w-full border-border bg-white px-4 font-medium text-a7-text-gray shadow-none"
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
          </div>
        </div>
      </header>

      <div className="mt-6 flex flex-col gap-5 md:mt-8 md:gap-6">
        {visibleListings.length > 0 ? (
          visibleListings.map((listing) => (
            <PropertyCardListingHorizontal
              key={listing.id}
              listing={listing}
              agentPhoneHref={agent.phoneHref}
              agentEmailHref={agent.emailHref}
              agentWhatsAppHref={agent.whatsAppHref}
            />
          ))
        ) : (
          <p className="py-12 text-center text-sm text-a7-text-gray md:text-base">
            No {transactionFilter === "both" ? "" : transactionFilter} listings match this filter. Try another view.
          </p>
        )}
      </div>

      {filteredListings.length > PAGE_SIZE ? (
        <ListingPagination
          className="mt-8 md:mt-10"
          page={safePage}
          pageCount={pageCount}
          onPageChange={setPage}
        />
      ) : null}
    </section>
  )
}
