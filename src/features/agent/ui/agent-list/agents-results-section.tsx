"use client"

import React, { useEffect, useMemo, useState } from "react"
import { motion } from "framer-motion"

import { AgentPortraitCardDetailed } from "@/shared/ui/media-feature-cards"
import { ListingPagination } from "@/shared/ui/listing-pagination"
import type { RealEstateAgentProfile } from "@/features/agent/services/agent-profile"
import { cn } from "@/shared/lib/cn"

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]
const VIEWPORT = { once: true, amount: 0.08 as const }

const DEFAULT_PAGE_SIZE = 12

export type AgentsResultsSectionProps = {
  agents: RealEstateAgentProfile[]
  sort?: string
  pageSize?: number
  className?: string
}

function sortAgents(agents: RealEstateAgentProfile[], sort: string): RealEstateAgentProfile[] {
  const copy = [...agents]
  if (sort === "name-asc") {
    return copy.sort((a, b) => a.name.localeCompare(b.name))
  }
  if (sort === "name-desc") {
    return copy.sort((a, b) => b.name.localeCompare(a.name))
  }
  if (sort === "featured") {
    return copy.sort((a, b) => Number(Boolean(b.showRankMedal)) - Number(Boolean(a.showRankMedal)))
  }
  return copy
}

export function AgentsResultsSection({
  agents,
  sort = "featured",
  pageSize = DEFAULT_PAGE_SIZE,
  className,
}: AgentsResultsSectionProps) {
  const [page, setPage] = useState(1)
  const resultsRef = React.useRef<HTMLDivElement | null>(null)
  const skipScrollRef = React.useRef(true)

  useEffect(() => {
    skipScrollRef.current = true
  }, [sort, agents])

  const sortedAgents = useMemo(() => sortAgents(agents, sort), [agents, sort])
  const pageCount = Math.max(1, Math.ceil(sortedAgents.length / pageSize))
  const safePage = Math.min(page, pageCount)

  const visibleAgents = useMemo(() => {
    const start = (safePage - 1) * pageSize
    return sortedAgents.slice(start, start + pageSize)
  }, [sortedAgents, pageSize, safePage])

  useEffect(() => {
    if (skipScrollRef.current) {
      skipScrollRef.current = false
      return
    }
    if (!resultsRef.current) return

    const header = document.querySelector("header") as HTMLElement | null
    const headerHeight = header ? header.getBoundingClientRect().height : 0
    const rect = resultsRef.current.getBoundingClientRect()
    const target = window.scrollY + rect.top - headerHeight - 8
    window.scrollTo({ top: Math.max(0, target), behavior: "smooth" })
  }, [safePage])

  return (
    <section className={cn("bg-white pb-10 pt-6 md:pb-14 md:pt-8 lg:pb-16", className)} aria-label="Agent results">
      <div ref={resultsRef} className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-6">
          {visibleAgents.map((agent, index) => (
            <motion.div
              key={agent.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.75, ease: EASE, delay: 0.04 + (index % 4) * 0.07 }}
            >
              <AgentPortraitCardDetailed
                layout="vertical"
                imageUrl={agent.imageUrl}
                name={agent.name}
                subtitle={agent.subtitle}
                languages={agent.languages}
                roleBadge={agent.roleBadge}
                showRankMedal={agent.showRankMedal}
                whatsAppHref={agent.whatsAppHref}
                profileHref={agent.profileHref}
                className="h-full border-0 shadow-md"
              />
            </motion.div>
          ))}
        </div>

        {sortedAgents.length > pageSize ? (
          <ListingPagination
            className="mt-8 md:mt-10"
            page={safePage}
            pageCount={pageCount}
            onPageChange={setPage}
          />
        ) : null}
      </div>
    </section>
  )
}
