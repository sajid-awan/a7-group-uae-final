"use client"

import Image from "next/image"
import { motion } from "framer-motion"

import { Card, CardContent } from "@/shared/ui/card"
import type { PropertyManagementPageContent } from "@/features/services/services/content"
import { cn } from "@/shared/lib/cn"

type PropertyManagementFeaturesSectionProps = {
  features: PropertyManagementPageContent["features"]
  className?: string
}

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]
const VIEWPORT = { once: true, amount: 0.12 as const }

export function PropertyManagementFeaturesSection({
  features,
  className,
}: PropertyManagementFeaturesSectionProps) {
  return (
    <section className={cn("bg-a7-panel-surface py-10 md:py-14", className)} aria-labelledby="property-management-features-heading">
      <div className="container mx-auto px-4">
        <h2 id="property-management-features-heading" className="sr-only">
          Property management services
        </h2>
        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {features.items.map((feature, index) => (
            <li key={feature.id}>
              <motion.div
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT}
                transition={{ duration: 0.8, ease: EASE, delay: 0.05 + index * 0.08 }}
              >
                <Card className="h-full overflow-hidden border border-border/80 bg-white shadow-sm">
                  <div className="relative aspect-4/3 w-full">
                    <Image
                      src={feature.imageUrl}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <CardContent className="p-5">
                    <h3 className="font-inter text-base font-semibold leading-snug text-a7-black md:text-lg">{feature.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-a7-text-gray">{features.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
