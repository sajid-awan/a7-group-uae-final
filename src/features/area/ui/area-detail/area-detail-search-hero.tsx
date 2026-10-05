import Image from "next/image"

import { AreasSearchBarSimple } from "@/features/search/ui/areas-search-bar"
import { cn } from "@/shared/lib/cn"

type AreaDetailSearchHeroProps = {
  backgroundUrl: string
  placeholder?: string
  className?: string
}

export function AreaDetailSearchHero({
  backgroundUrl,
  placeholder = "Dubai",
  className,
}: AreaDetailSearchHeroProps) {
  return (
    <section className={cn("relative border-b border-border", className)} aria-label="Area search">
      <div className="relative min-h-36 overflow-hidden md:min-h-40">
        <Image
          src={backgroundUrl}
          alt=""
          fill
          priority
          className="object-cover object-center scale-105 blur-[6px]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-white/55" aria-hidden />

        <div className="relative z-10 flex items-center">
          <div className="container mx-auto w-full px-4 py-6 sm:py-8">
            <AreasSearchBarSimple placeholder={placeholder} />
          </div>
        </div>
      </div>
    </section>
  )
}
