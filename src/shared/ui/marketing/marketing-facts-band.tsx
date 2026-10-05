import type { LucideIcon } from "lucide-react"

import { CommunityStatTile } from "@/features/area/ui/areas/community-stat-tile"
import { cn } from "@/shared/lib/cn"

export type MarketingFactsBandStat = {
  icon: LucideIcon
  value: string
  label: string
}

export type MarketingFactsBandHighlight = {
  kicker: string
  value: string
}

export type MarketingFactsBandProps = {
  intro: string
  stats: MarketingFactsBandStat[]
  highlights: MarketingFactsBandHighlight[]
  className?: string
}

/**
 * Dark facts / credibility band (stats grid + headline metrics).
 * Parity target: [A7 Main Website — node 155-570](https://www.figma.com/design/No2MyeyUAwc2OAWrnSrgas/A7-Main-Website--Copy-?node-id=155-570).
 */
export function MarketingFactsBand({ intro, stats, highlights, className }: MarketingFactsBandProps) {
  return (
    <section
      className={cn(
        "relative border-b border-black/80 bg-gradient-to-b from-black via-zinc-950 to-zinc-900 py-14 text-white md:min-h-[510px] md:py-20",
        className
      )}
    >
      <div className="container mx-auto px-4">
        <p className="mx-auto max-w-[820px] text-center text-[15px] leading-relaxed text-white/80 md:text-base">{intro}</p>
        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {stats.map((s) => (
            <CommunityStatTile key={s.label} theme="dark" icon={s.icon} value={s.value} label={s.label} />
          ))}
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-12 text-center text-sm text-white/70">
          {highlights.map((h) => (
            <div key={h.kicker}>
              <p className="text-[13px] font-medium uppercase tracking-wide text-white/60">{h.kicker}</p>
              <p className="mt-1 font-heading text-[36px] font-semibold leading-none text-white">{h.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
