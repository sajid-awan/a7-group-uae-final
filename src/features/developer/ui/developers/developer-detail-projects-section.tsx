"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"

import { PropertyMarketingListingCard } from "@/features/property/ui/property-card"
import { WhatsAppColorIcon, whatsAppActionToneClassName } from "@/shared/ui/iconify-icons"
import type { PropertyMarketingAction } from "@/features/property/ui/property-card/property-marketing-listing-card"
import { ListingPagination } from "@/shared/ui/listing-pagination"
import type { DeveloperOffPlanProject } from "@/features/developer/services/content"
import { offPlanProjectPath } from "@/shared/lib/constants/routes"
import { cn } from "@/shared/lib/cn"

const PAGE_SIZE = 9

const WHATSAPP_ACTION: PropertyMarketingAction = {
  key: "whatsapp",
  label: "Whatsapp",
  icon: WhatsAppColorIcon,
  href: "https://wa.me/971500000000",
  toneClassName: whatsAppActionToneClassName,
}

type DeveloperDetailProjectsSectionProps = {
  projects: DeveloperOffPlanProject[]
  className?: string
}

export function DeveloperDetailProjectsSection({
  projects,
  className,
}: DeveloperDetailProjectsSectionProps) {
  const [page, setPage] = useState(1)
  const resultsRef = useRef<HTMLDivElement | null>(null)
  const skipScrollRef = useRef(true)

  const pageCount = Math.max(1, Math.ceil(projects.length / PAGE_SIZE))
  const safePage = Math.min(page, pageCount)

  const visibleProjects = useMemo(() => {
    const start = (safePage - 1) * PAGE_SIZE
    return projects.slice(start, start + PAGE_SIZE)
  }, [projects, safePage])

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
    <section className={cn("bg-white pb-10 pt-6 md:pb-14 md:pt-8", className)} aria-label="Developer projects">
      <div ref={resultsRef} className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.08 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.04 + index * 0.07 }}
            >
              <Link
                href={offPlanProjectPath(project.id)}
                className="block rounded-lg outline-none transition-shadow hover:shadow-md focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <PropertyMarketingListingCard
                  layout="vertical"
                  imageUrls={project.imageUrls}
                  propertyTypes={project.propertyTypes}
                  title={project.title}
                  price={project.price}
                  pricePrefix="From:"
                  location={project.location}
                  bedroomSummary={project.bedroomSummary}
                  description={project.description}
                  paymentPlan={project.paymentPlan}
                  handover={project.handover}
                  actions={[WHATSAPP_ACTION]}
                  className="h-full"
                />
              </Link>
            </motion.div>
          ))}
        </div>

        {projects.length > PAGE_SIZE ? (
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
