"use client"

import Image from "next/image"
import { CalendarDays, MapPin } from "lucide-react"
import { motion } from "framer-motion"

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]
const VIEWPORT = { once: true, amount: 0.08 as const }

import { HomeDeveloperCtaNewsletter } from "@/shared/ui/marketing/home-developer-cta-newsletter"
import { BreadcrumbList } from "@/shared/ui/breadcrumb"
import { Button } from "@/shared/ui/button"
import { FeatureCard } from "@/shared/ui/feature-card"
import { AgentPortraitCardDetailed } from "@/shared/ui/media-feature-cards"
import { MarketingContactSection, MarketingTestimonialsSection } from "@/shared/ui/marketing"
import { homeDeveloperCtaContent } from "@/features/developer/services/content"
import type { EventDetail } from "@/features/event/services/content"
import { eventsPath } from "@/shared/lib/constants/routes"
import { MARKETING_FEATURE_ICONS } from "@/shared/ui/marketing"

type EventDetailPageProps = {
  event: EventDetail
}

export function EventDetailPage({ event }: EventDetailPageProps) {
  return (
    <main className="bg-[#02060C] text-white">
      <section className="relative">
      <Image src={event.heroImageUrl} alt="" fill className="object-cover object-center" sizes="100vw" />
        <div className="container mx-auto px-4 pt-8 md:pt-10">
         <div className="absolute inset-0 bg-linear-to-r from-black/85 via-black/50 to-black/30" aria-hidden />
          <motion.div
            className="relative z-10 flex min-h-80 flex-col justify-end p-6 md:min-h-115 md:p-10"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE }}
          >
            <p className="font-heading text-[clamp(2rem,4vw,3.6rem)] font-semibold leading-tight">{event.heroTitle}</p>
            <p className="mt-2 text-primary">{event.heroSubtitle}</p>
            <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-white/85">
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays className="size-4" aria-hidden />
                {event.heroDate}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="size-4" aria-hidden />
                {event.heroLocation}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-10 md:py-12">
        <BreadcrumbList
          items={[
            { kind: "home", href: "/" },
            { kind: "link", href: eventsPath(), label: "Events" },
            { kind: "current", label: event.heroTitle },
          ]}
          size="sm"
          separator="chevron"
          className="mb-6"
        />
        <motion.h1
          className="font-heading text-4xl font-semibold text-[#E7B354]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.8, ease: EASE }}
        >
          {event.aboutTitle}
        </motion.h1>
        <motion.div
          className="mt-4 max-w-5xl space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.75, ease: EASE, delay: 0.1 }}
        >
          {event.aboutDescriptionParagraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)} className="text-sm leading-relaxed text-white/80 md:text-base">
              {paragraph}
            </p>
          ))}
        </motion.div>

        <motion.div
          className="relative mt-7 aspect-16/8 overflow-hidden rounded-xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.85, ease: EASE }}
        >
          <Image src={event.featureImageUrl} alt="" fill className="object-cover object-center" sizes="100vw" />
        </motion.div>

        <motion.div
          className="mt-7 max-w-5xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.85, ease: EASE }}
        >
          <h2 className="font-heading text-5xl font-semibold leading-tight text-[#E7B354]">{event.storyTitle}</h2>
          {event.storyParagraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)} className="mt-4 text-sm leading-relaxed text-white/80 md:text-base">
              {paragraph}
            </p>
          ))}
          <Button variant="default" shape="pill" size="sm" className="mt-6 h-11 px-8 text-sm font-semibold">
            {event.storyCtaLabel}
          </Button>
        </motion.div>
      </section>

      <section className="container mx-auto px-4 py-10 md:py-12">
        <motion.h2
          className="text-center font-heading sm:text-5xl text-3xl font-semibold leading-tight text-[#E7B354]bg-white"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.8, ease: EASE }}
        >
          {event.juryTitle}
        </motion.h2>
        <p className="mx-auto mt-3 max-w-4xl text-center text-sm leading-relaxed text-white/70">
          The jury awards shine a light on individuals and organisations whose achievements mirror remarkable growth.
        </p>
        <ul className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {event.juryMembers.map((member, index) => (
            <motion.li
              key={member.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.75, ease: EASE, delay: 0.04 + (index % 4) * 0.07 }}
            >
              <AgentPortraitCardDetailed
                layout="vertical"
                imageUrl={member.avatarUrl}
                roleBadge={member.roleBadge}
                showRankMedal={member.showRankMedal}
                name={member.name}
                subtitle={member.subtitle}
                nationality={member.nationality}
                languages={member.languages}
                whatsAppHref={member.whatsAppHref}
                profileHref={member.profileHref}
                className="h-full"
              />
            </motion.li>
          ))}
        </ul>
      </section>

      <section className="py-10 md:py-12">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-center font-heading sm:text-5xl text-3xl font-semibold leading-tight text-[#E7B354]bg-white"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.8, ease: EASE }}
          >
            {event.categoriesTitle}
          </motion.h2>
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm leading-relaxed text-white/75">
            {event.categoriesSubtitle}
          </p>
          <ul className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[...event.categories, ...event.categories].map((category, idx) => {
              const Icon = MARKETING_FEATURE_ICONS[category.icon]
              return (
                <motion.li
                  key={`${category.id}-${idx}`}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={VIEWPORT}
                  transition={{ duration: 0.75, ease: EASE, delay: 0.04 + (idx % 3) * 0.07 }}
                >
                  <FeatureCard
                    variant="center"
                    icon={Icon}
                    stepLabel=""
                    title={category.title}
                    description={category.description}
                    action={null}
                    className="h-full border-white/20 bg-white/12 text-white backdrop-blur-lg [&_h3]:text-white [&_p]:text-white/90 [&_svg]:text-white"
                  />
                </motion.li>
              )
            })}
          </ul>
        </div>
      </section>

      <section className="container mx-auto px-4 py-10 md:py-12">
        <motion.h2
          className="text-center font-heading sm:text-5xl text-3xl font-semibold leading-tight text-[#E7B354]bg-white"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.8, ease: EASE }}
        >
          {event.winnersTitle}
        </motion.h2>
        <ul className="mx-auto mt-7 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {event.winners.map((winner, index) => (
            <motion.li
              key={winner.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.75, ease: EASE, delay: 0.04 + (index % 3) * 0.07 }}
            >
              <AgentPortraitCardDetailed
                layout="vertical"
                imageUrl={winner.imageUrl}
                roleBadge={winner.agency}
                showRankMedal={winner.showRankMedal}
                name={winner.winner}
                className="h-full"
              />
            </motion.li>
          ))}
        </ul>
      </section>

      <section className="relative h-[500px] w-full overflow-hidden">
        <iframe
          title={`${event.heroLocation} map`}
          src={event.mapEmbedUrl}
          className="h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </section>

      <MarketingTestimonialsSection
        title={event.clientsTitle}
        subtitle={event.clientsSubtitle}
        testimonials={event.clientsTestimonials}
        theme="dark"
      />

      <MarketingContactSection {...event.contactSectionProps} className="bg-[#E7E8E8] py-10 md:py-12" />
      <HomeDeveloperCtaNewsletter {...homeDeveloperCtaContent} />

    </main>
  )
}
