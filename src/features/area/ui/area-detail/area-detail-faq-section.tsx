import { AccordionList } from "@/shared/ui/accordion"
import type { AreaDetailContent } from "@/features/area/services/content"
import { getAreaDetailSectionId } from "@/features/area"
import { cn } from "@/shared/lib/cn"

type AreaDetailFaqSectionProps = {
  area: AreaDetailContent
}

export function AreaDetailFaqSection({ area }: AreaDetailFaqSectionProps) {
  if (area.faq.length === 0) return null

  const sectionId = getAreaDetailSectionId("faq")

  const accordionItems = area.faq.map((item, index) => ({
    title: item.title,
    content: item.content,
    value: `area-faq-${index + 1}`,
  }))

  return (
    <section id={sectionId} className="scroll-mt-28" aria-labelledby={`${sectionId}-heading`}>
      <article className="rounded-2xl border border-border bg-white px-5 py-6 sm:px-7 sm:py-8 md:px-8 md:py-9">
        <h2
          id={`${sectionId}-heading`}
          className="font-heading text-2xl font-bold text-a7-black md:text-3xl lg:text-[2rem]"
        >
          Frequently asked questions
        </h2>

        <AccordionList
          items={accordionItems}
          className={cn(
            "mt-5 md:mt-6",
            "[&_[data-slot=accordion-item]]:border-border/70",
            "[&_[data-slot=accordion-trigger]]:py-5",
            "[&_[data-slot=accordion-trigger]]:text-base [&_[data-slot=accordion-trigger]]:font-medium [&_[data-slot=accordion-trigger]]:text-a7-black",
            "md:[&_[data-slot=accordion-trigger]]:text-lg",
            "[&_[data-slot=accordion-content]]:pb-5 [&_[data-slot=accordion-content]]:text-sm [&_[data-slot=accordion-content]]:leading-relaxed [&_[data-slot=accordion-content]]:text-a7-text-gray",
            "md:[&_[data-slot=accordion-content]]:text-base"
          )}
        />
      </article>
    </section>
  )
}
