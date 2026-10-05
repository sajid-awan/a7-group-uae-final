import Image from "next/image"

import { AgentsSearchBar } from "@/features/search/ui/agents-search-bar"
import { PROPERTY_LISTING_SEARCH_HERO_IMAGE } from "@/features/property/services/content"
import { cn } from "@/shared/lib/cn"

export type AgentsSearchHeroProps = {
  className?: string
}

/** Same hero shell as the property listing page, with agent-specific search filters. */
export function AgentsSearchHero({ className }: AgentsSearchHeroProps) {
  return (
    <section
      className={cn("relative z-10 border-b border-border", className)}
      aria-label="Agent search"
    >
      <div className="relative flex min-h-[10.5rem] items-center py-6 sm:min-h-40 sm:py-8">
        <Image
          src={PROPERTY_LISTING_SEARCH_HERO_IMAGE}
          alt=""
          fill
          priority
          className="object-cover object-center blur-[6px]"
          sizes="100vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-white/55" aria-hidden />

        <div className="relative z-10 w-full overflow-visible">
          <div className="container mx-auto w-full px-4">
            <AgentsSearchBar />
          </div>
        </div>
      </div>
    </section>
  )
}
