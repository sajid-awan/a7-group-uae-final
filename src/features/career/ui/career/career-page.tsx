"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Phone } from "lucide-react"
import { motion } from "framer-motion"

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]
const VIEWPORT = { once: true, amount: 0.08 as const }

import { HomeDeveloperCtaNewsletter } from "@/shared/ui/marketing/home-developer-cta-newsletter"
import {
  MarketingBenefitsGridSection,
  MarketingCtaBannerSection,
  MarketingHeroSection,
  MarketingImageTextSection,
} from "@/shared/ui/marketing"
import { Button } from "@/shared/ui/button"
import {
  CAREER_GALLERY_IMAGES,
  CAREER_OPENINGS,
  careerGrowthSectionProps,
  careerHeroProps,
  careerIntroSectionProps,
  careerMidCtaBannerProps,
  careerNewsletterProps,
  careerTeamSectionProps,
  careerWhyChooseSectionProps,
} from "@/features/career/services/content"

function CareerGallerySection() {
  return (
    <section className="bg-white pb-10 md:pb-14" aria-label="Career highlights gallery">
      <div className="container mx-auto px-4">
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          {CAREER_GALLERY_IMAGES.map((imageUrl, idx) => (
            <motion.li
              key={imageUrl}
              className="relative aspect-4/3 overflow-hidden rounded-xl"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.75, ease: EASE, delay: 0.04 + idx * 0.06 }}
            >
              <Image
                src={imageUrl}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 768px) 45vw, 30vw"
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function CareerOpeningsSection() {
  return (
    <section id="open-roles" className="bg-white pb-12 md:pb-16" aria-labelledby="career-openings-heading">
      <div className="container mx-auto px-4">
        <motion.h2
          id="career-openings-heading"
          className="font-heading text-xl font-semibold tracking-tight text-a7-black md:text-4xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.8, ease: EASE }}
        >
          Find the right job for you
        </motion.h2>
        <ul className="mt-6 border-t border-border">
          {CAREER_OPENINGS.map((opening, index) => (
            <motion.li
              key={opening.id}
              className="grid grid-cols-1 items-center gap-3 border-b border-border py-3 md:grid-cols-[minmax(0,1fr)_auto_auto] md:gap-6 md:py-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.65, ease: EASE, delay: 0.05 + index * 0.06 }}
            >
              <p className="text-base text-a7-black md:text-lg md:leading-tight">{opening.title}</p>
              <span className="inline-flex items-center gap-2 text-sm text-a7-black md:justify-self-start md:text-base">
                <Phone className="size-4" aria-hidden />
                {opening.location}
              </span>
              <Button
                asChild
                variant="outline"
                shape="pill"
                size="sm"
                className="h-10 w-fit px-5 text-xs font-semibold text-a7-black md:justify-self-end md:text-sm"
              >
                <Link href={opening.href} className="inline-flex items-center gap-1.5">
                  View Job Details
                  <ArrowUpRight className="size-3.5" aria-hidden />
                </Link>
              </Button>
            </motion.li>
          ))}
        </ul>
        <p className="mt-4 text-center text-xs text-a7-text-gray md:text-sm">
          <span className="font-semibold text-a7-black">Nothing quite right for you?</span>{" "}
          Experience stress-free property management with confidence. Our experienced team handles everything.
        </p>
      </div>
    </section>
  )
}

export function CareerPage() {
  return (
    <main className="bg-white">
      <MarketingHeroSection {...careerHeroProps} className="min-h-[min(24rem,64svh)]" />
      <MarketingImageTextSection {...careerIntroSectionProps} />
      <CareerGallerySection />
      <MarketingBenefitsGridSection {...careerWhyChooseSectionProps} />
      <MarketingImageTextSection {...careerTeamSectionProps} />
      <MarketingCtaBannerSection {...careerMidCtaBannerProps} />
      <MarketingImageTextSection {...careerGrowthSectionProps} />
      <CareerOpeningsSection />
      <HomeDeveloperCtaNewsletter {...careerNewsletterProps} />
    </main>
  )
}
