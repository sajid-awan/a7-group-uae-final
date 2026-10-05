"use client"

import { CommunitySummaryCard } from "@/features/area/ui/areas/community-summary-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/tabs"
import type { AgentProfileDetail } from "@/features/agent/core/domain/entity/agent.entity"
import type { AgentExpertiseArea } from "@/features/agent"
import { areaDetailPath } from "@/shared/lib/constants/routes"
import { cn } from "@/shared/lib/cn"

type AgentAreaExpertiseSectionProps = {
  agent: AgentProfileDetail
  areas: AgentExpertiseArea[]
  className?: string
}

export function AgentAreaExpertiseSection({ agent, areas, className }: AgentAreaExpertiseSectionProps) {
  const defaultTab = areas[0]?.id ?? "dubai-marina"

  return (
    <section
      className={cn(className)}
      aria-labelledby="agent-area-expertise-heading"
    >
      <header className="max-w-3xl">
        <h2
          id="agent-area-expertise-heading"
          className="font-heading text-2xl font-bold text-a7-black md:text-3xl"
        >
          {agent.name} Areas of Expertise
        </h2>
        <p className="mt-2 text-sm text-a7-text-gray md:text-base">
          Discover the neighborhoods where {agent.name} specialises and has extensive market knowledge.
        </p>
      </header>

      <div className="mt-6 rounded-2xl border border-border bg-white px-4 py-5 sm:px-6 sm:py-6 md:mt-8 md:px-8 md:py-7">
        <Tabs defaultValue={defaultTab} className="w-full gap-0">
          <TabsList
            variant="line"
            className={cn(
              "h-auto w-full flex-nowrap justify-start gap-x-6 overflow-x-auto border-b border-border pb-0",
              "-mx-4 px-4 sm:-mx-6 sm:px-6 md:mx-0 md:gap-0 md:overflow-visible md:px-0",
              "[-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            )}
          >
            {areas.map((area) => (
              <TabsTrigger
                key={area.id}
                value={area.id}
                variant="line"
                size="md"
                className="shrink-0 pb-3 font-medium whitespace-nowrap md:flex-1 md:shrink md:whitespace-normal"
              >
                {area.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {areas.map((area) => (
            <TabsContent key={area.id} value={area.id} className="mt-5 space-y-4 focus-visible:outline-none md:mt-6">
              {area.communities.map((community) => (
                <CommunitySummaryCard
                  key={community.id}
                  title={community.title}
                  description={community.description}
                  imageUrls={community.imageUrls}
                  stats={community.stats}
                  learnMoreHref={areaDetailPath(area.detailAreaId ?? area.id)}
                />
              ))}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
