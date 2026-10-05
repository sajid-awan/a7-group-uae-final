"use client"

import Image from "next/image"
import { motion } from "framer-motion"

import type { DeveloperDetail } from "@/features/developer/services/content"
import { cn } from "@/shared/lib/cn"

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

type DeveloperDetailHeroProps = {
  developer: DeveloperDetail
  className?: string
}

export function DeveloperDetailHero({ developer, className }: DeveloperDetailHeroProps) {
  return (
    <section className={cn("relative border-b border-border", className)} aria-label={`${developer.name} brand`}>
      <div className="relative min-h-[11rem] overflow-hidden sm:min-h-[12.5rem] md:min-h-[14rem]">
        <Image
          src={developer.heroBackgroundUrl}
          alt=""
          fill
          priority
          className="object-cover object-center scale-105 blur-[6px]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/25" aria-hidden />

        <div
          className={cn(
            "relative z-10 flex min-h-[inherit] items-center justify-start",
            "container mx-auto px-4 py-10 sm:py-8 md:py-12"
          )}
        >
          <motion.div
            className="bg-white px-10 py-7 shadow-sm sm:px-14 sm:py-9 md:px-16 md:py-10"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: EASE }}
          >
            {developer.logoSrc ? (
              <Image
                src={developer.logoSrc}
                alt={developer.name}
                width={220}
                height={72}
                className="h-10 w-auto object-contain sm:h-12 md:h-14"
                priority
              />
            ) : (
              <span className="font-heading text-2xl font-semibold tracking-tight text-a7-black sm:text-3xl">
                {developer.name}
              </span>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
