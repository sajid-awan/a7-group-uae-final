"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { motion } from "framer-motion"

import { BreadcrumbList, type BreadcrumbItem } from "@/shared/ui/breadcrumb"
import { ListingPagination } from "@/shared/ui/listing-pagination"
import { cn } from "@/shared/lib/cn"

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]
const VIEWPORT = { once: true, amount: 0.08 as const }

import { EventBannerCard, type EventBannerCardItem } from "./event-banner-card"
import { EventSearchBar } from "./event-search-bar"

export type EventBannerListSectionProps = {
  breadcrumbs: readonly BreadcrumbItem[]
  title: string
  intro: string
  events: readonly EventBannerCardItem[]
  headingId?: string
  className?: string
}

export function EventBannerListSection({
  breadcrumbs,
  title,
  intro,
  events,
  headingId = "events-list-heading",
  className,
}: EventBannerListSectionProps) {
  const PAGE_SIZE = 5
  const [page, setPage] = useState(1)
  const resultsRef = useRef<HTMLDivElement | null>(null)
  const skipScrollRef = useRef(true)

  const pageCount = Math.max(1, Math.ceil(events.length / PAGE_SIZE))
  const safePage = Math.min(page, pageCount)

  const visibleEvents = useMemo(() => {
    const start = (safePage - 1) * PAGE_SIZE
    return events.slice(start, start + PAGE_SIZE)
  }, [events, safePage])

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
    <section className={cn("bg-white py-10 md:py-14", className)} aria-labelledby={headingId}>
      <div ref={resultsRef} className="container mx-auto px-4">
        <BreadcrumbList items={[...breadcrumbs]} size="sm" separator="chevron" />

        <motion.h1
          id={headingId}
          className="mt-4 font-heading text-[clamp(1.8rem,3.6vw,3rem)] font-semibold leading-tight text-a7-black"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          {title}
        </motion.h1>
        <motion.p
          className="mt-3 max-w-5xl text-sm leading-relaxed text-a7-text-gray md:text-base"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: EASE, delay: 0.12 }}
        >
          {intro}
        </motion.p>
        <EventSearchBar />

        <ul className="mt-7 space-y-3">
          {visibleEvents.map((event, index) => (
            <motion.li
              key={event.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.75, ease: EASE, delay: 0.04 + index * 0.08 }}
            >
              <EventBannerCard event={event} />
            </motion.li>
          ))}
        </ul>

        {events.length > PAGE_SIZE ? (
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
