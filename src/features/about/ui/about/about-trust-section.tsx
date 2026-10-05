import { EyeIcon } from "@/shared/icons"
import { BreadcrumbList, type BreadcrumbItem } from "@/shared/ui/breadcrumb"
import { cn } from "@/shared/lib/cn"

export type AboutTrustPoint = {
  id: string
  title: string
  description: string
}

export type AboutTrustSectionProps = {
  breadcrumbs?: readonly BreadcrumbItem[]
  title: string
  intro: string
  points: readonly AboutTrustPoint[]
  headingId?: string
  className?: string
}

export function AboutTrustSection({
  breadcrumbs,
  title,
  intro,
  points,
  headingId = "about-trust-heading",
  className,
}: AboutTrustSectionProps) {
  return (
    <section className={cn("bg-white py-10 md:py-14", className)} aria-labelledby={headingId}>
      <div className="container mx-auto px-4">
        {breadcrumbs ? (
          <BreadcrumbList items={[...breadcrumbs]} size="sm" separator="chevron" className="mb-7" />
        ) : null}

        <div className="rounded-3xl bg-a7-panel-surface px-6 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12">
          <div className="max-w-3xl">
            <h2
              id={headingId}
              className="font-heading text-[clamp(1.5rem,3vw,2.25rem)] font-semibold leading-tight tracking-tight text-a7-black"
            >
              {title}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-a7-text-gray md:text-base">{intro}</p>
          </div>

          <ul className="mt-8 flex max-w-3xl flex-col gap-6 md:mt-10 md:gap-7" role="list">
            {points.map((point) => (
              <li key={point.id} className="flex gap-4">
                <span
                  className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white shadow-sm"
                  aria-hidden
                >
                  <EyeIcon size={22} className="text-a7-black" strokeWidth={1.5} />
                </span>
                <div className="min-w-0 pt-0.5">
                  <h3 className="text-sm font-bold text-a7-black md:text-base">{point.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-a7-text-gray">{point.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
