"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

import type { ServicesPageContent } from "@/features/services/services/content"
import { cn } from "@/shared/lib/cn"

type ServicesGridSectionProps = {
  offerings: ServicesPageContent["offerings"]
  className?: string
}

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]
const VIEWPORT = { once: true, amount: 0.12 as const }

export function ServicesGridSection({ offerings, className }: ServicesGridSectionProps) {
  return (
    <section className={cn("bg-white py-10 md:py-14", className)} aria-labelledby="services-grid-heading">
      <div className="container mx-auto px-4">
        <h2 id="services-grid-heading" className="sr-only">
          Our services
        </h2>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {offerings.map((service, index) => (
            <li
              key={service.id}
              className={service.id === "plots" ? "sm:col-span-1 lg:col-span-1" : undefined}
            >
              <motion.div
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT}
                transition={{ duration: 0.8, ease: EASE, delay: 0.05 + index * 0.07 }}
              >
                <Link
                  href={service.href}
                  className="group relative block aspect-square sm:aspect-3/4 overflow-hidden rounded-xl outline-none transition-shadow hover:shadow-lg focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <Image
                    src={service.imageUrl}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div
                    className="absolute inset-0 bg-linear-to-t from-black/75 via-black/20 to-transparent"
                    aria-hidden
                  />
                  <span className="absolute bottom-4 left-4 right-4 text-base font-semibold leading-snug text-white md:text-lg">
                    {service.title}
                  </span>
                </Link>
              </motion.div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
