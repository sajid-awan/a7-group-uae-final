import type { ReactNode } from "react"

import { cn } from "@/shared/lib/cn"

type AreaDetailSectionProps = {
  id?: string
  title: string
  children: ReactNode
  className?: string
}

export function AreaDetailSection({ id, title, children, className }: AreaDetailSectionProps) {
  return (
    <section id={id} className={cn(id && "scroll-mt-28", className)} aria-labelledby={`${id ?? title}-heading`}>
      <article className="rounded-2xl border border-border bg-white px-5 py-6 sm:px-7 sm:py-8 md:px-8 md:py-9">
        <h2
          id={`${id ?? title}-heading`}
          className="border-b border-border pb-5 font-heading text-2xl font-bold text-a7-black md:text-3xl"
        >
          {title}
        </h2>
        <div className="mt-6 space-y-8">{children}</div>
      </article>
    </section>
  )
}
