import Image from "next/image"

import type { ProjectOverviewBlock, ProjectStoryAsideImage } from "@/features/property"

import { cn } from "@/shared/lib/cn"

type ProjectStorySectionProps = {
  sections: ProjectOverviewBlock[]
  asideImage?: ProjectStoryAsideImage
  className?: string
}

/** Static copy blocks with optional right-side square image (brochure / QR). */
export function ProjectStorySection({ sections, asideImage, className }: ProjectStorySectionProps) {
  if (sections.length === 0) return null

  return (
    <section className={cn("mx-auto container bg-white px-6 py-7.5 md:px-10", className)} aria-label="Project story">
      <div
        className={cn(
          "gap-10 lg:gap-14",
          asideImage ? "grid grid-cols-1 items-start lg:grid-cols-[minmax(0,1fr)_min(280px,32%)]" : "block"
        )}
      >
        <div className="min-w-0 space-y-10 md:space-y-12">
          {sections.map((block) => (
            <article key={block.title}>
              <h2 className="font-heading text-2xl font-bold leading-tight text-a7-black md:text-3xl">{block.title}</h2>
              <p className="mt-3 max-w-none sm:text-base text-sm leading-relaxed text-muted-foreground md:mt-4">{block.description}</p>
            </article>
          ))}
        </div>

        {asideImage ? (
          <aside className="mx-auto w-full max-w-50 shrink-0 lg:sticky lg:top-28 lg:mx-0 lg:max-w-none">
            <div className="relative aspect-square w-full overflow-hidden rounded-sm border border-border bg-white ">
              <Image
                src="/assets/projects/project-qr.png"
                alt={asideImage.alt}
                fill
                sizes="(max-width: 1024px) 280px, 32vw"
                className="object-contain object-center"
              />
            </div>
          </aside>
        ) : null}
      </div>
    </section>
  )
}
