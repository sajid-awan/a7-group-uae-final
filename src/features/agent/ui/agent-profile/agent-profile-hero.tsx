"use client"

import Image from "next/image"
import Link from "next/link"
import { Mail, Phone, Star } from "lucide-react"
import { motion } from "framer-motion"

import { Diamond01Icon, Key01Icon, Percent03Icon, Share07Icon, ThumbsUpIcon } from "@/shared/icons"
import { ListingShareMenu } from "@/shared/ui/shared/listing-share-menu"
import { WhatsAppColorIcon } from "@/shared/ui/iconify-icons"
import { Badge } from "@/shared/ui/badge"
import { Button } from "@/shared/ui/button"
import type { AgentProfileDetail, AgentProfileStatIcon } from "@/features/agent/core/domain/entity/agent.entity"
import { AedText } from "@/shared/ui/aed-text"
import { cn } from "@/shared/lib/cn"

type AgentProfileHeroProps = {
  agent: AgentProfileDetail
  className?: string
}

function StatIcon({ icon }: { icon: AgentProfileStatIcon }) {
  const className = "size-6 text-a7-black"
  switch (icon) {
    case "compass":
      return <Percent03Icon size={24} className={className} aria-hidden />
    case "key":
      return <Key01Icon size={24} className={className} aria-hidden />
    case "thumbs":
      return <ThumbsUpIcon size={24} className={className} aria-hidden />
    case "diamond":
      return <Diamond01Icon className={className} aria-hidden />
    default:
      return null
  }
}

function AgentProfileStatCard({
  value,
  label,
  icon,
}: {
  value: string
  label: string
  icon: AgentProfileStatIcon
}) {
  return (
    <div className="flex h-full min-h-[5.5rem] items-center justify-between gap-3 rounded-2xl bg-white px-5 py-4 shadow-[0_4px_20px_rgba(0,0,0,0.1)] sm:min-h-0">
      <div className="min-w-0">
        <p className="text-2xl font-bold leading-tight text-a7-black sm:text-[1.65rem]">
          <AedText text={value} />
        </p>
        <p className="mt-0.5 text-xs leading-snug text-a7-text-gray sm:text-sm">{label}</p>
      </div>
      <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-a7-brand-gold-soft">
        <StatIcon icon={icon} />
      </div>
    </div>
  )
}

export function AgentProfileHero({ agent, className }: AgentProfileHeroProps) {
  const fullStars = Math.round(agent.rating)
  const roleLabel = agent.subtitle || agent.roleBadge

  return (
    <section className={cn("relative overflow-hidden", className)}>
      <div className="absolute inset-0">
        <Image
          src={agent.heroBackgroundUrl}
          alt=""
          fill
          className="object-cover object-top scale-105 blur-sm"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" aria-hidden />
      </div>

      <div className="relative container mx-auto px-4 py-8 sm:px-6 md:py-10">
        <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-stretch lg:gap-6">
          <motion.div
            className="relative flex h-full space-y-3 flex-col rounded-2xl bg-white p-5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] sm:p-6"
            initial={{ opacity: 0, x: -28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute right-4 top-4 flex items-center gap-1">
              {agent.showRankMedal ? (
                <Image
                  src="/assets/brand/positiontag.svg"
                  alt="Top ranked agent"
                  width={56}
                  height={56}
                  className="h-14 w-14"
                />
              ) : null}
              <ListingShareMenu
                subject={`${agent.name} — Agent Profile`}
                trigger={
                  <button
                    type="button"
                    className="flex size-9 items-center justify-center rounded-full text-a7-text-gray transition hover:bg-muted"
                    aria-label={`Share ${agent.name} profile`}
                  >
                    <Share07Icon className="size-5" />
                  </button>
                }
              />
            </div>

            <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
              <div className="flex w-full shrink-0 flex-col items-center gap-3 sm:w-auto sm:items-start">
                <div className="relative size-28 overflow-hidden rounded-2xl sm:size-32">
                  <Image src={agent.imageUrl} alt={agent.name} fill className="object-cover" sizes="128px" />
                </div>
              
              </div>

              <div className="min-w-0 flex-1 text-center sm:pr-10 sm:text-left">
                <h1 className="font-heading text-2xl font-bold text-a7-black md:text-[1.75rem]">{agent.name}</h1>

                <div className="mt-2 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 sm:justify-start">
                  <div className="flex items-center gap-0.5" aria-label={`${agent.rating} out of 5 stars`}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          "size-4",
                          i < fullStars ? "fill-a7-rating-star text-a7-rating-star" : "text-muted-foreground/40"
                        )}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-a7-text-gray">
                    {agent.activeProperties} Active Properties
                  </span>
                </div>

                {roleLabel ? (
                  <Badge
                    variant="meta"
                    shape="pill"
                    className="mt-3 border-0 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700"
                  >
                    {roleLabel}
                  </Badge>
                ) : null}
              </div>
            </div>
            <p className="flex w-full items-center justify-center gap-2 text-center text-xs leading-snug text-a7-text-gray sm:justify-start sm:text-left sm:text-sm">
                  <span className="size-2 shrink-0 rounded-full bg-emerald-500" aria-hidden />
                  <span>{agent.responseTimeLabel}</span>
                </p>
            <div className="mt-auto grid grid-cols-3 gap-2">
              <Button
                asChild
                variant="outline"
                shape="pill"
                size="sm"
                className="w-full border-transparent bg-sky-100 text-sky-800 hover:bg-sky-200/80"
              >
                <Link href={agent.phoneHref} aria-label="Call agent">
                  <Phone className="size-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                shape="pill"
                size="sm"
                className="w-full border-transparent bg-rose-100 text-rose-900 hover:bg-rose-200/80"
              >
                <Link href={agent.emailHref} aria-label="Email agent">
                  <Mail className="size-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                shape="pill"
                size="sm"
                className="w-full border-transparent bg-emerald-100 text-emerald-900 hover:bg-emerald-200/80"
              >
                <Link href={agent.whatsAppHref} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp agent">
                  <WhatsAppColorIcon className="size-4" />
                </Link>
              </Button>
            </div>
          </motion.div>

          <div className="grid h-full min-h-0 grid-cols-1 gap-3 sm:grid-cols-2 sm:grid-rows-2 sm:gap-4">
            {agent.stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="h-full min-h-0"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.15 + index * 0.08 }}
              >
                <AgentProfileStatCard {...stat} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
