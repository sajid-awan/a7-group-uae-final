"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { Mail, Phone } from "lucide-react"

import { PropertyMarketingListingCard } from "@/features/property/ui/property-card"
import { WhatsAppColorIcon, whatsAppActionToneClassName } from "@/shared/ui/iconify-icons"
import type { PropertyMarketingAction } from "@/features/property/ui/property-card/property-marketing-listing-card"
import { ListingPagination } from "@/shared/ui/listing-pagination"
import type { AgentProfileDetail } from "@/features/agent/core/domain/entity/agent.entity"
import type { AgentOffPlanProject } from "@/features/agent"
import { offPlanProjectPath } from "@/shared/lib/constants/routes"
import { cn } from "@/shared/lib/cn"

const PAGE_SIZE = 6

type AgentOffPlanSectionProps = {
  agent: AgentProfileDetail
  projects: AgentOffPlanProject[]
  className?: string
}

function buildActions(
  agent: AgentProfileDetail,
  whatsAppOnly: boolean
): PropertyMarketingAction[] {
  const whatsApp: PropertyMarketingAction = {
    key: "whatsapp",
    label: "Whatsapp",
    icon: WhatsAppColorIcon,
    href: agent.whatsAppHref,
    toneClassName: whatsAppActionToneClassName,
  }

  if (whatsAppOnly) {
    return [whatsApp]
  }

  return [
    {
      key: "call",
      label: "Call",
      icon: Phone,
      href: agent.phoneHref,
      toneClassName: "border-sky-200/80 bg-sky-100 text-sky-950 hover:bg-sky-200/60",
    },
    {
      key: "email",
      label: "Email",
      icon: Mail,
      href: agent.emailHref,
      toneClassName: "border-rose-200/80 bg-rose-50 text-rose-950 hover:bg-rose-100/80",
    },
    whatsApp,
  ]
}

export function AgentOffPlanSection({ agent, projects, className }: AgentOffPlanSectionProps) {
  const [page, setPage] = useState(1)

  const pageCount = Math.max(1, Math.ceil(projects.length / PAGE_SIZE))
  const safePage = Math.min(page, pageCount)

  const visibleProjects = useMemo(() => {
    const start = (safePage - 1) * PAGE_SIZE
    return projects.slice(start, start + PAGE_SIZE)
  }, [projects, safePage])

  return (
    <section
      className={cn(
        "rounded-2xl border border-border bg-white px-4 py-5 sm:px-6 sm:py-5 md:px-5",
        className
      )}
      aria-labelledby="agent-off-plan-heading"
    >
      <header className="max-w-3xl">
        <h2
          id="agent-off-plan-heading"
          className="font-heading text-2xl font-bold text-a7-black md:text-3xl"
        >
          Off Plan Latest Launches
        </h2>
        <p className="mt-2 text-sm text-a7-text-gray md:text-base">
          Discover the neighborhoods where {agent.name} specialises and has extensive market knowledge.
        </p>
      </header>

      <div className="mt-6 md:mt-8">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
          {visibleProjects.map((project) => (
            <Link
              key={project.id}
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
                actions={buildActions(agent, Boolean(project.whatsAppOnly))}
                className="h-full border border-border bg-white shadow-none"
              />
            </Link>
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
