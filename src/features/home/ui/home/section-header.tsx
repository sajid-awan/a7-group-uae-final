"use client"

import { motion } from "framer-motion"
import { cn } from "@/shared/lib/cn"
import type { SectionHeaderProps } from "@/shared/types/home"

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]
const VIEWPORT = { once: true, amount: 0.3 as const }

export function SectionHeader({ kicker, title, action, className }: SectionHeaderProps) {
  return (
    <div className={cn("mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between", className)}>
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.85, ease: EASE }}
      >
        {kicker ? (
          <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">{kicker}</p>
        ) : null}
        <h2 className="font-heading text-[clamp(1.75rem,4.2vw,3rem)] font-semibold tracking-tight text-black md:text-[48px] md:leading-[1.08]">
          {title}
        </h2>
      </motion.div>

      {action ? (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.85, ease: EASE, delay: 0.22 }}
        >
          {action}
        </motion.div>
      ) : null}
    </div>
  )
}
