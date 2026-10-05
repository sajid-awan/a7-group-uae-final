import { HomeDeveloperCtaNewsletter } from "@/shared/ui/marketing/home-developer-cta-newsletter"
import { ProjectOverviewSection } from "@/features/project/ui/projects/project-overview-section"
import { AccordionList } from "@/shared/ui/accordion"
import { homeDeveloperCtaContent } from "@/features/developer/services/content"
import {
  getDeveloperDetailBreadcrumbs,
  getDeveloperOffPlanProjects,
  type DeveloperDetail,
} from "@/features/developer/services/content"
import { cn } from "@/shared/lib/cn"

import { DeveloperDetailHeaderSection } from "./developer-detail-header-section"
import { DeveloperDetailHero } from "./developer-detail-hero"
import { DeveloperDetailListingsShell } from "./developer-detail-listings-shell"

type DeveloperDetailPageProps = {
  developer: DeveloperDetail
}

export function DeveloperDetailPage({ developer }: DeveloperDetailPageProps) {
  const breadcrumbs = getDeveloperDetailBreadcrumbs(developer)
  const projects = getDeveloperOffPlanProjects(developer.id)

  const faqItems = developer.faq.map((item, index) => ({
    title: item.title,
    content: item.content,
    value: `developer-faq-${index + 1}`,
  }))

  return (
    <>
      <DeveloperDetailHero developer={developer} />
      <DeveloperDetailHeaderSection developer={developer} breadcrumbs={breadcrumbs} />
      <DeveloperDetailListingsShell projects={projects} placeholder={developer.searchPlaceholder} />

      <ProjectOverviewSection sections={developer.seoSections} className="border-t border-border" />

      <section className="border-t border-border bg-white" aria-labelledby="developer-detail-faq-heading">
        <div className="container mx-auto px-4 py-10 sm:px-6 md:py-14">
          <h2
            id="developer-detail-faq-heading"
            className="font-heading text-2xl font-bold text-a7-black md:text-3xl lg:text-[2rem]"
          >
            {developer.faqTitle}
          </h2>

          <AccordionList
            items={faqItems}
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

      <HomeDeveloperCtaNewsletter {...homeDeveloperCtaContent} />
    </>
  )
}
