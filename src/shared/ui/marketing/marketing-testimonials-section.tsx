"use client"

import { motion } from "framer-motion"

import { TestimonialCard } from "@/features/property/ui/property-card"
import type { HomeTestimonial } from "@/features/home/content/home-testimonials"
import { cn } from "@/shared/lib/cn"

export type MarketingTestimonialsSectionProps = {
  title: string
  subtitle?: string
  testimonials: readonly HomeTestimonial[]
  theme?: "light" | "dark"
  className?: string
}

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]
const VIEWPORT = { once: true, amount: 0.12 as const }

export function MarketingTestimonialsSection({
  title,
  subtitle,
  testimonials,
  theme = "light",
  className,
}: MarketingTestimonialsSectionProps) {
  if (testimonials.length === 0) return null

  return (
    <section
      className={cn(
        "border-t py-12 md:py-16",
        theme === "dark" ? "border-white/10 bg-[#02060C]" : "border-border bg-white",
        className
      )}
      aria-labelledby="marketing-testimonials-heading"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <h2
            id="marketing-testimonials-heading"
            className={cn(
              "font-heading text-[clamp(1.5rem,3.5vw,2.25rem)] font-semibold tracking-tight",
              theme === "dark" ? "text-white" : "text-a7-black"
            )}
          >
            {title}
          </h2>
          {subtitle ? (
            <p className={cn("mt-3 text-sm leading-relaxed md:text-base", theme === "dark" ? "text-white/70" : "text-a7-text-gray")}>
              {subtitle}
            </p>
          ) : null}
        </motion.div>

        <ul className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.li
              key={testimonial.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.8, ease: EASE, delay: 0.1 + index * 0.1 }}
            >
              <TestimonialCard
                name={testimonial.name}
                role={testimonial.role}
                quote={testimonial.quote}
                avatarUrl={testimonial.avatarUrl}
                rating={4}
                variant="centered"
                className="h-full"
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
