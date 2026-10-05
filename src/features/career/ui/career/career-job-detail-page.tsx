"use client"

import { Phone } from "lucide-react"
import { motion } from "framer-motion"

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]
const VIEWPORT = { once: true, amount: 0.08 as const }

import { HomeDeveloperCtaNewsletter } from "@/shared/ui/marketing/home-developer-cta-newsletter"
import { BreadcrumbList } from "@/shared/ui/breadcrumb"
import type { CareerJobDetail } from "@/features/career/services/content"
import { homeDeveloperCtaContent } from "@/features/developer/services/content"
import { careerPath } from "@/shared/lib/constants/routes"

import { CareerJobApplicationCard } from "./career-job-application-card"

type CareerJobDetailPageProps = {
  job: CareerJobDetail
}

export function CareerJobDetailPage({ job }: CareerJobDetailPageProps) {
  return (
    <main>
      <section className="container mx-auto px-4 py-4 md:py-6">
          <BreadcrumbList
            items={[
              { kind: "home", href: "/" },
              { kind: "link", href: careerPath(), label: "Career" },
              { kind: "current", label: job.breadcrumbsLabel },
            ]}
            size="sm"
            separator="slash"
            className="mb-6 text-[11px]"
          />

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_330px]">
            <article>
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, ease: EASE }}
              >
                <p className="inline-flex items-center gap-1.5 text-xs text-a7-text-gray">
                  <Phone className="size-3" aria-hidden />
                  {job.location}
                </p>
                <h1 className="mt-2 font-heading text-3xl font-semibold leading-tight text-a7-black md:text-5xl">{job.title}</h1>

                <div className="mt-4 space-y-3 text-xs leading-5 text-[#555] md:text-[13px]">
                  {job.introParagraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                  ))}
                </div>
              </motion.div>

              <motion.section
                className="mt-7"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT}
                transition={{ duration: 0.8, ease: EASE }}
              >
                <h2 className="font-inter text-2xl font-semibold text-a7-black md:text-[24px]">Summary</h2>
                <div className="mt-3 space-y-3 text-xs leading-5 text-[#555] md:text-[13px]">
                  {job.summaryParagraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                  ))}
                </div>
              </motion.section>

              {job.sections.map((section, index) => (
                <motion.section
                  key={section.id}
                  className="mt-7"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={VIEWPORT}
                  transition={{ duration: 0.75, ease: EASE, delay: 0.04 + index * 0.06 }}
                >
                  <h2 className="font-inter text-2xl font-semibold text-a7-black md:text-[24px]">{section.title}</h2>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-xs leading-5 text-[#555] md:text-[13px]">
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </motion.section>
              ))}
            </article>

            <aside className="lg:sticky lg:top-24 lg:self-start">
              <CareerJobApplicationCard manager={job.manager} />
            </aside>
          </div>
      </section>
      <HomeDeveloperCtaNewsletter {...homeDeveloperCtaContent} />
    </main>
  )
}
