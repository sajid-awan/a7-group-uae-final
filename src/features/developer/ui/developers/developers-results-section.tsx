"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { motion } from "framer-motion"

import { ListingPagination } from "@/shared/ui/listing-pagination"
import type { DubaiDeveloperProfile } from "@/features/developer/services/content"
import { cn } from "@/shared/lib/cn"

import { DeveloperCard } from "./developer-card"

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]
const VIEWPORT = { once: true, amount: 0.08 as const }

const DEFAULT_PAGE_SIZE = 5

export type DevelopersResultsSectionProps = {
  developers: DubaiDeveloperProfile[]
  pageSize?: number
  className?: string
}

export function DevelopersResultsSection({
  developers,
  pageSize = DEFAULT_PAGE_SIZE,
  className,
}: DevelopersResultsSectionProps) {
  const [page, setPage] = useState(1)
  const resultsRef = useRef<HTMLDivElement | null>(null)
  const skipScrollRef = useRef(true)

  const pageCount = Math.max(1, Math.ceil(developers.length / pageSize))
  const safePage = Math.min(page, pageCount)

  const visibleDevelopers = useMemo(() => {
    const start = (safePage - 1) * pageSize
    return developers.slice(start, start + pageSize)
  }, [developers, pageSize, safePage])

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
    <section className={cn("bg-white pb-10 pt-6 md:pb-14 md:pt-8", className)} aria-label="Developer listings">
      <div ref={resultsRef} className="container mx-auto px-4">
        <ul className="flex flex-col gap-5 md:gap-6">
          {visibleDevelopers.map((developer, index) => (
            <motion.li
              key={developer.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.8, ease: EASE, delay: 0.04 + index * 0.07 }}
            >
              <DeveloperCard developer={developer} />
            </motion.li>
          ))}
        </ul>

        {developers.length > pageSize ? (
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
