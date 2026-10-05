import { AccordionList } from "@/shared/ui/accordion"
import type { ProjectFaqItem } from "@/features/property"

import { cn } from "@/shared/lib/cn"

type ProjectFaqSectionProps = {
  projectTitle: string
  items: ProjectFaqItem[]
  className?: string
}

export function ProjectFaqSection({ projectTitle, items, className }: ProjectFaqSectionProps) {
  if (items.length === 0) return null

  const accordionItems = items.map((item, index) => ({
    title: item.title,
    content: item.content,
    value: `project-faq-${index + 1}`,
  }))

  return (
    <section
      className={cn("mx-auto container bg-white px-6 py-[30px] md:px-10", className)}
      aria-labelledby="project-faq-heading"
    >
      <h2 id="project-faq-heading" className="font-heading text-2xl font-bold text-a7-black md:text-3xl">
        {projectTitle} FAQ&apos;s
      </h2>

      <AccordionList
        items={accordionItems}
        className={cn(
          "mt-6",
          "[&_[data-slot=accordion-trigger]]:py-5",
          "[&_[data-slot=accordion-trigger]]:text-base [&_[data-slot=accordion-trigger]]:font-medium [&_[data-slot=accordion-trigger]]:text-a7-black",
          "md:[&_[data-slot=accordion-trigger]]:text-lg",
          "[&_[data-slot=accordion-content]]:text-sm [&_[data-slot=accordion-content]]:text-muted-foreground"
        )}
      />
    </section>
  )
}
