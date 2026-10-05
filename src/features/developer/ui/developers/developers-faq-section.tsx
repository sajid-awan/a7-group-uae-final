import { AccordionList } from "@/shared/ui/accordion"
import {
  DEVELOPERS_PAGE_FAQ_ITEMS,
  DEVELOPERS_PAGE_FAQ_TITLE,
} from "@/features/developer/services/content"
import { cn } from "@/shared/lib/cn"

type DevelopersFaqSectionProps = {
  className?: string
}

export function DevelopersFaqSection({ className }: DevelopersFaqSectionProps) {
  const accordionItems = DEVELOPERS_PAGE_FAQ_ITEMS.map((item, index) => ({
    title: item.title,
    content: item.content,
    value: `developers-faq-${index + 1}`,
  }))

  return (
    <section
      className={cn("border-t border-border bg-white", className)}
      aria-labelledby="developers-faq-heading"
    >
      <div className="container mx-auto px-4 py-10 sm:px-6 md:py-14">
        <h2
          id="developers-faq-heading"
          className="font-heading text-2xl font-bold text-a7-black md:text-3xl lg:text-[2rem]"
        >
          {DEVELOPERS_PAGE_FAQ_TITLE}
        </h2>

        <AccordionList
          items={accordionItems}
          className={cn(
            "mt-6 md:mt-8",
            "[&_[data-slot=accordion-item]]:border-border/70",
            "[&_[data-slot=accordion-trigger]]:py-5",
            "[&_[data-slot=accordion-trigger]]:text-base [&_[data-slot=accordion-trigger]]:font-medium [&_[data-slot=accordion-trigger]]:text-a7-black",
            "md:[&_[data-slot=accordion-trigger]]:text-lg",
            "[&_[data-slot=accordion-content]]:pb-5 [&_[data-slot=accordion-content]]:text-sm [&_[data-slot=accordion-content]]:leading-relaxed [&_[data-slot=accordion-content]]:text-a7-text-gray",
            "md:[&_[data-slot=accordion-content]]:text-base"
          )}
        />
      </div>
    </section>
  )
}
