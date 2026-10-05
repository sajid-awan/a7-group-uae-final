"use client"

import { CommunityCompactCard } from "@/features/area/ui/areas/community-compact-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/tabs"
import { cn } from "@/shared/lib/cn"
import type { FurnishedCardProps } from "@/shared/types/home"

export function FurnishedLuxuryTabs({
  villas,
  apartments,
  className,
}: {
  villas: FurnishedCardProps[]
  apartments: FurnishedCardProps[]
  className?: string
}) {
  return (
    <Tabs defaultValue="villas" className={cn("w-full", className)}>
      <TabsList
        variant="line"
        activeVariant="primary"
        className="mb-8 w-full justify-start gap-8 border-b border-border bg-transparent p-0"
      >
        <TabsTrigger value="villas" variant="line" activeVariant="primary" size="lg" className="text-2xl font-semibold">
          Villas
        </TabsTrigger>
        <TabsTrigger
          value="apartments"
          variant="line"
          activeVariant="primary"
          size="lg"
          className="text-2xl font-semibold"
        >
          Apartments
        </TabsTrigger>
      </TabsList>
      <TabsContent value="villas" className="mt-0">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {villas.map((c, i) => (
            <CommunityCompactCard key={`v-${i}`} {...c} />
          ))}
        </div>
      </TabsContent>
      <TabsContent value="apartments" className="mt-0">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {apartments.map((c, i) => (
            <CommunityCompactCard key={`a-${i}`} {...c} />
          ))}
        </div>
      </TabsContent>
    </Tabs>
  )
}
