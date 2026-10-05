"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowNarrowRightIcon } from "@/shared/icons"
import { AGENT_PROFILE_NAV_ITEMS, getActiveAgentProfileNavSlug, getAgentProfileNavHref } from "@/features/agent"
import { cn } from "@/shared/lib/cn"

type AgentProfileSidebarProps = {
  agentId: string
  className?: string
}

export function AgentProfileSidebar({ agentId, className }: AgentProfileSidebarProps) {
  const pathname = usePathname() ?? ""
  const activeSlug = getActiveAgentProfileNavSlug(pathname, agentId)

  return (
    <nav
      className={cn(
        "flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] lg:flex-col lg:overflow-visible lg:pb-0 [&::-webkit-scrollbar]:hidden",
        className
      )}
      aria-label="Agent profile sections"
    >
      {AGENT_PROFILE_NAV_ITEMS.map((item) => {
        const isActive = item.slug === activeSlug
        const href = getAgentProfileNavHref(agentId, item.segment)

        return (
          <Link
            key={item.slug}
            href={href}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "flex shrink-0 items-center justify-between gap-3 rounded-xl px-4 py-3.5 text-sm font-bold whitespace-nowrap transition-colors lg:w-full lg:shrink",
              isActive
                ? "bg-a7-black text-white"
                : "bg-[#F3F4F6] text-a7-black hover:bg-[#E8E8E8]"
            )}
          >
            {item.label}
            <ArrowNarrowRightIcon size={24} className="shrink-0 text-current" aria-hidden />
          </Link>
        )
      })}
    </nav>
  )
}
