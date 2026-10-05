"use client"

import type { ComponentType, SVGProps } from "react"
import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/shared/ui/button"
import { HeroStatCard } from "@/shared/ui/marketing/hero-stat-card"
import { cn } from "@/shared/lib/cn"

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

type IconType = ComponentType<SVGProps<SVGSVGElement> & { className?: string }>

export type MarketingSideHeroStat = {
  value: string
  label: string
  icon: LucideIcon | IconType
}

export type MarketingSideHeroPanelProps = {
  backgroundImageUrl: string
  eyebrow?: string
  /** One or more display lines (large heading). */
  titleLines: string[]
  description?: string
  stats?: readonly MarketingSideHeroStat[]
  cta?: {
    label: string
    href: string
  }
  className?: string
}

function HeroBackdrop({ backgroundImageUrl }: { backgroundImageUrl: string }) {
  return (
    <>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url("${backgroundImageUrl}")` }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_28%,rgba(80,132,255,0.2),transparent_52%),radial-gradient(circle_at_14%_86%,rgba(255,188,70,0.18),transparent_47%),linear-gradient(160deg,#1A2454_0%,#121C48_55%,#0D1738_100%)] opacity-70" />
      <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:60px_60px]" />
    </>
  )
}

type HeroBodyProps = Pick<
  MarketingSideHeroPanelProps,
  "eyebrow" | "titleLines" | "description" | "stats" | "cta"
> & {
  compact?: boolean
}

function HeroBody({ eyebrow, titleLines, description, stats, cta, compact = false }: HeroBodyProps) {
  return (
    <>
      {eyebrow ? (
        <motion.div
          className={cn("flex items-center gap-2 sm:gap-3", compact ? "mb-4" : "mb-auto")}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <p
            className={cn(
              "font-light tracking-wide text-white/80",
              compact ? "text-xs sm:text-sm" : "text-base"
            )}
          >
            {eyebrow}
          </p>
          <span
            className={cn("inline-flex h-px bg-white/80", compact ? "w-12 sm:w-16" : "w-[100px]")}
            aria-hidden
          />
        </motion.div>
      ) : null}

      <div className={compact ? "space-y-0.5" : "space-y-3"}>
        {titleLines.map((line, index) => (
          <motion.p
            key={line}
            className={cn(
              "font-heading font-semibold leading-none tracking-tight text-white",
              compact
                ? "text-[clamp(1.75rem,7vw,2.5rem)] leading-none"
                : "text-[clamp(2.5rem,5vw,4.5rem)] leading-none "
            )}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: EASE, delay: 0.1 + index * 0.1 }}
          >
            {line}
          </motion.p>
        ))}
        {description ? (
          <motion.p
            className={cn(
              "max-w-xl text-white/80",
              compact ? "mt-2 text-sm leading-none" : "my-4 text-base"
            )}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: EASE, delay: 0.1 + titleLines.length * 0.1 }}
          >
            {description}
          </motion.p>
        ) : null}
      </div>

      {stats && stats.length > 0 ? (
        <div
          className={cn(
            compact
              ? "mt-4 flex gap-2.5 sm:flex-row flex-col overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              : "mt-6 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3"
          )}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.value}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.25 + titleLines.length * 0.1 + index * 0.08 }}
            >
              <HeroStatCard
                value={stat.value}
                label={stat.label}
                icon={stat.icon as LucideIcon}
                iconTone="gold"
                className={compact ? "min-w-[min(85vw,15rem)] shrink-0 snap-start py-3" : undefined}
                valueClassName={compact ? "text-lg" : undefined}
                labelClassName={compact ? "text-[11px]" : undefined}
              />
            </motion.div>
          ))}
        </div>
      ) : null}

      {cta ? (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.35 + titleLines.length * 0.1 + (stats?.length ?? 0) * 0.08 }}
        >
          <Button
            asChild
            variant="default"
            shape="pill"
            size="sm"
            className={cn(
              "h-10 px-6 text-sm font-semibold sm:h-11 sm:px-8",
              compact ? "mt-4 w-full sm:mt-5 sm:w-fit" : "mt-8 w-fit"
            )}
          >
            <Link href={cta.href}>{cta.label}</Link>
          </Button>
        </motion.div>
      ) : null}
    </>
  )
}

export function MarketingSideHeroPanel({
  backgroundImageUrl,
  eyebrow,
  titleLines,
  description,
  stats,
  cta,
  className,
}: MarketingSideHeroPanelProps) {
  const bodyProps = { eyebrow, titleLines, description, stats, cta }

  return (
    <>
      <div
        className={cn(
          "relative isolate overflow-hidden bg-[#0E1A37] px-4 py-8 text-white sm:px-6 sm:py-10 lg:hidden",
          className
        )}
      >
        <HeroBackdrop backgroundImageUrl={backgroundImageUrl} />
        <div className="relative z-10">
          <HeroBody {...bodyProps} compact />
        </div>
      </div>

      <div
        className={cn(
          "relative isolate hidden h-[calc(100svh-20px)] min-h-[calc(100svh-20px)] overflow-hidden bg-[#0E1A37] p-7 text-white lg:sticky lg:top-2.5 lg:block lg:rounded-[24px]",
          className
        )}
      >
        <HeroBackdrop backgroundImageUrl={backgroundImageUrl} />
        <div className="relative z-10 flex h-full flex-col justify-end">
          <HeroBody {...bodyProps} />
        </div>
      </div>
    </>
  )
}
