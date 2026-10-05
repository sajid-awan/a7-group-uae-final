"use client"

import { useMemo, useState } from "react"

import { CalendarDateIcon } from "@/shared/icons"
import type { AgentProfileDetail } from "@/features/agent/core/domain/entity/agent.entity"
import {
  AGENT_TRANSACTIONS_DEFAULT_FILTER_DATE,
  agentTransactionToListingRow,
  filterAgentTransactionsByDate,
  formatAgentTransactionFilterDate,
  type AgentPropertyTransaction,
} from "@/features/agent"
import { Button } from "@/shared/ui/button"
import { Calendar } from "@/shared/ui/calendar"
import { DataListingTable } from "@/shared/ui/listing-table"
import { Popover, PopoverContent, PopoverTrigger } from "@/shared/ui/popover"
import { TableHead, TableRow } from "@/shared/ui/table"
import { cn } from "@/shared/lib/cn"

type AgentTransactionsSectionProps = {
  agent: AgentProfileDetail
  transactions: AgentPropertyTransaction[]
  className?: string
}

const TABLE_HEADER = (
  <TableRow className="border-border hover:bg-transparent">
    <TableHead>Property</TableHead>
    <TableHead className="text-center">Type</TableHead>
    <TableHead className="text-center">Date</TableHead>
    <TableHead className="text-center">Category</TableHead>
    <TableHead className="text-center">Beds</TableHead>
    <TableHead className="text-right">Price & area</TableHead>
  </TableRow>
)

export function AgentTransactionsSection({ agent, transactions: allTransactions, className }: AgentTransactionsSectionProps) {
  const [filterDate, setFilterDate] = useState<Date>(AGENT_TRANSACTIONS_DEFAULT_FILTER_DATE)

  const rows = useMemo(() => {
    const filtered = filterAgentTransactionsByDate(allTransactions, filterDate)
    return filtered.map(agentTransactionToListingRow)
  }, [allTransactions, filterDate])

  const agentFirstName = agent.name.split(/\s+/)[0] ?? agent.name

  return (
    <section
      className={cn(
        "rounded-2xl border border-border bg-white px-4 py-5 sm:px-6 sm:py-5 md:px-5",
        className
      )}
      aria-labelledby="agent-transactions-heading"
    >
      <header className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-2xl">
          <h2
            id="agent-transactions-heading"
            className="font-heading text-2xl font-bold text-a7-black md:text-3xl"
          >
            Transactions for Properties
          </h2>
          <p className="mt-2 text-sm text-a7-text-gray md:text-base">
            Transactions submitted by {agentFirstName} to A7 Property.
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-2 self-start">
          <span className="whitespace-nowrap text-sm text-a7-text-gray">Date:</span>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                type="button"
                variant="outline"
                shape="pill"
                size="sm"
                className="h-10 gap-2 border-border bg-white px-4 font-medium text-a7-text-gray shadow-none"
              >
                {formatAgentTransactionFilterDate(filterDate)}
                <CalendarDateIcon className="size-4 shrink-0" aria-hidden />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="end">
              <Calendar
                mode="single"
                selected={filterDate}
                onSelect={(date) => date && setFilterDate(date)}
                defaultMonth={filterDate}
              />
            </PopoverContent>
          </Popover>
        </div>
      </header>

      <div className="mt-6 md:mt-8">
        <DataListingTable
          rows={rows}
          header={TABLE_HEADER}
          pagination="none"
          className="border-border bg-white"
        />
      </div>
    </section>
  )
}
