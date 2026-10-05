"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import {
  DASHBOARD_AGENT_DETAIL_NAV_ITEMS,
  getActiveDashboardAgentDetailNavSlug,
  getDashboardAgentDetailNavHref,
} from "../lib/dashboard-agent-detail-nav"
import { cn } from "@/shared/lib/cn"
import { Tabs, TabsList, TabsTrigger } from "@/shared/ui/tabs"

const tabListClassName =
  "h-auto w-full justify-start gap-8 overflow-x-auto rounded-none border-b border-border bg-transparent p-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"

const tabTriggerClassName =
  "-mb-px rounded-none px-0 pt-4 pb-3 text-sm font-medium text-[#71717A] data-[state=active]:border-[#7A5C33] data-[state=active]:text-[#7A5C33]"

type DashboardAgentDetailTabsProps = {
  agentSlug: string
  className?: string
}

export function DashboardAgentDetailTabs({ agentSlug, className }: DashboardAgentDetailTabsProps) {
  const pathname = usePathname() ?? ""
  const activeSlug = getActiveDashboardAgentDetailNavSlug(pathname, agentSlug)

  return (
    <div className={cn("bg-white px-4 sm:px-6", className)}>
      <Tabs value={activeSlug} className="w-full gap-0">
        <TabsList variant="line" className={tabListClassName} aria-label="Agent detail sections">
          {DASHBOARD_AGENT_DETAIL_NAV_ITEMS.map((item) => (
            <TabsTrigger
              key={item.slug}
              variant="line"
              value={item.slug}
              className={tabTriggerClassName}
              asChild
            >
              <Link href={getDashboardAgentDetailNavHref(agentSlug, item.segment)}>{item.label}</Link>
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  )
}

DashboardAgentDetailTabs.displayName = "DashboardAgentDetailTabs"
