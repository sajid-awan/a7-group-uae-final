import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Bath, BedDouble, Maximize2, Play } from "lucide-react"

import { Button } from "@/shared/ui/button"
import { cn } from "@/shared/lib/cn"

export type AboutShowcaseStat = {
  label: string
  value: string
}

type AboutShowcaseProperty = {
  title: string
  location: string
  beds: number
  baths: number
  areaSqft: number
  href: string
}

export type AboutStatsShowcaseSectionProps = {
  primaryImageUrl: string
  secondaryImageUrl: string
  titleLines: readonly [string, string]
  intro: string
  stats: readonly AboutShowcaseStat[]
  featuredProperty: AboutShowcaseProperty
  videoLabel?: string
  cta: {
    label: string
    href: string
  }
  className?: string
}

export function AboutStatsShowcaseSection({
  primaryImageUrl,
  secondaryImageUrl,
  titleLines,
  intro,
  stats,
  featuredProperty,
  videoLabel = "Watch Video",
  cta,
  className,
}: AboutStatsShowcaseSectionProps) {
  return (
    <section className={cn("bg-white py-10 md:py-16", className)} aria-label="About company performance stats">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-14 xl:gap-20">
          <div className="relative mx-auto min-h-[19rem] w-full max-w-[20rem] min-[400px]:max-w-[22rem] sm:min-h-[24rem] sm:max-w-[26rem] md:max-w-[28rem] lg:mx-0 lg:min-h-[26rem] lg:max-w-none">
            <div
              className="pointer-events-none absolute bottom-4 left-0 z-0 h-24 w-28 opacity-60 sm:h-32 sm:w-40"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(-45deg, transparent, transparent 7px, rgba(0,0,0,0.07) 7px, rgba(0,0,0,0.07) 8px)",
              }}
              aria-hidden
            />

            <div className="relative z-10 sm:w-[80%] w-[90%] sm:pb-20 pb-10 max-w-full overflow-hidden ">
              <div className="relative aspect-[3/4] rounded-2xl shadow-sm">
                <Image
                  src={primaryImageUrl}
                  alt=""
                  fill
                  className="object-cover  rounded-2xl"
                  sizes="(max-width: 1024px) 55vw, 28vw"
                />
              </div>
            </div>

            <div className="absolute bottom-0 right-0 z-20 sm:w-[48%] w-[70%]  max-w-full overflow-hidden rounded-2xl shadow-md sm:w-[54%]">
              <div className="relative aspect-square">
                <Image
                  src={secondaryImageUrl}
                  alt=""
                  fill
                  className="object-cover rounded-2xl border-4 border-white"
                  sizes="(max-width: 1024px) 50vw, 26vw"
                />
              </div>
            </div>

            <div className="absolute right-[4%] top-[4%] z-30 flex items-center gap-1.5 rounded-full border border-border/60 bg-white px-2.5 py-1.5 shadow-sm min-[400px]:gap-2 min-[400px]:px-3 min-[400px]:py-2 sm:right-[10%] sm:top-[6%] sm:px-4">
              <span className="inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-a7-black text-white sm:size-7">
                <Play className="ml-0.5 size-2.5 fill-current sm:size-3" aria-hidden />
              </span>
              <span className="hidden text-xs font-medium text-a7-black min-[400px]:inline sm:text-sm">{videoLabel}</span>
            </div>

            <div className="absolute bottom-[8%] left-0 z-30 w-[min(calc(100%-0.5rem),17.5rem)] rounded-xl border border-border/50 bg-white p-3 shadow-md min-[400px]:w-[min(100%,17.5rem)] sm:bottom-[12%] sm:left-4 sm:p-4 md:bottom-[14%] md:left-10">
              <p className="text-sm font-semibold text-a7-black">{featuredProperty.title}</p>
              <p className="mt-0.5 text-xs text-a7-text-gray">{featuredProperty.location}</p>
              <ul className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-a7-text-gray">
                <li className="inline-flex items-center gap-1">
                  <BedDouble className="size-3.5 shrink-0" aria-hidden />
                  {featuredProperty.beds} bed
                </li>
                <li className="inline-flex items-center gap-1">
                  <Bath className="size-3.5 shrink-0" aria-hidden />
                  {featuredProperty.baths} bath
                </li>
                <li className="inline-flex items-center gap-1">
                  <Maximize2 className="size-3.5 shrink-0" aria-hidden />
                  {featuredProperty.areaSqft.toLocaleString()} sqft
                </li>
              </ul>
              <Link
                href={featuredProperty.href}
                className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-a7-black hover:underline"
              >
                View House
                <ArrowUpRight className="size-3" aria-hidden />
              </Link>
            </div>
          </div>

          <div className="min-w-0">
            <h2 className="font-heading text-[clamp(1.5rem,5vw,2.75rem)] font-semibold leading-[1.15] tracking-tight text-a7-black sm:text-[clamp(1.75rem,3.2vw,2.75rem)]">
              <span className="block sm:inline">{titleLines[0]}</span>{" "}
              <span className="block sm:inline">{titleLines[1]}</span>
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-a7-text-gray md:text-base">{intro}</p>

            <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-5 sm:mt-8 sm:gap-x-6 sm:gap-y-6 md:gap-x-10 md:gap-y-8">
              {stats.map((stat) => (
                <li key={stat.label} className="min-w-0">
                  <p className="text-[clamp(1.5rem,6vw,2.5rem)] font-semibold leading-none text-a7-black sm:text-[clamp(1.75rem,3vw,2.5rem)]">
                    {stat.value}
                  </p>
                  <p className="mt-1.5 text-xs text-a7-text-gray sm:text-sm">{stat.label}</p>
                </li>
              ))}
            </ul>

            <Button
              asChild
              variant="outline"
              shape="pill"
              size="sm"
              className="mt-6 h-10  border-black/30 bg-white px-5 text-a7-black min-[400px]:w-auto sm:mt-8"
            >
              <Link href={cta.href} className="inline-flex items-center gap-1.5">
                {cta.label}
                <ArrowUpRight className="size-3.5" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
