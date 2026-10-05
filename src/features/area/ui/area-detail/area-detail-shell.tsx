"use client"

import type { AreaDetailContent } from "@/features/area/services/content"
import { useMounted } from "@/shared/hooks/use-mounted"

import { AreaDetailAboutSection } from "./area-detail-about-section"
import { AreaDetailAmenitiesSection } from "./area-detail-amenities-section"
import { AreaDetailFaqSection } from "./area-detail-faq-section"
import { AreaDetailLifestyleSection } from "./area-detail-lifestyle-section"
import { AreaDetailLocationSection } from "./area-detail-location-section"
import { AreaDetailPropertiesSection } from "./area-detail-properties-section"
import { AreaDetailSidebar } from "./area-detail-sidebar"
import { AreaDetailAskExpertsSection } from "./area-detail-ask-experts-section"

type AreaDetailShellProps = {
  area: AreaDetailContent
  sectionIds: readonly string[]
}

function AreaDetailShellSkeleton() {
  return (
    <div
      className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,220px)_minmax(0,1fr)] lg:gap-10 xl:grid-cols-[minmax(0,240px)_minmax(0,1fr)]"
      aria-hidden
    >
      <div className="hidden space-y-2 lg:block">
        {Array.from({ length: 7 }).map((_, i) => (
          <div key={i} className="h-9 animate-pulse rounded-lg bg-muted" />
        ))}
      </div>
      <div className="min-w-0 space-y-6 md:space-y-8">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-48 animate-pulse rounded-2xl border border-border bg-muted/40" />
        ))}
      </div>
    </div>
  )
}

export function AreaDetailShell({ area, sectionIds }: AreaDetailShellProps) {
  const mounted = useMounted()

  if (!mounted) {
    return <AreaDetailShellSkeleton />
  }

  return (
    <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,220px)_minmax(0,1fr)] lg:gap-10 xl:grid-cols-[minmax(0,240px)_minmax(0,1fr)]">
      <AreaDetailSidebar
        sectionIds={sectionIds}
        className="-mx-4 px-4 lg:mx-0 lg:px-0 lg:sticky lg:top-24 lg:self-start"
      />

      <div className="min-w-0 space-y-6 md:space-y-8">
        <AreaDetailAboutSection area={area} />
        <AreaDetailLocationSection area={area} />
        <AreaDetailPropertiesSection area={area} />
        <AreaDetailLifestyleSection area={area} />
        <AreaDetailAmenitiesSection area={area} />
        <AreaDetailAskExpertsSection area={area} />
        <AreaDetailFaqSection area={area} />
      </div>
    </div>
  )
}
