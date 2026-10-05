import { notFound } from "next/navigation"

import { HomeDeveloperCtaNewsletter } from "@/shared/ui/marketing/home-developer-cta-newsletter"
import { TrustedDeveloperPartners } from "@/features/home/ui/home/trusted-developer-partners"
import { ProjectAmenitiesSection } from "@/features/project/ui/projects/project-amenities-section"
import { ProjectExpertsSection } from "@/features/project/ui/projects/project-experts-section"
import { ProjectStorySection } from "@/features/project/ui/projects/project-story-section"
import { ProjectFloorPlansSection } from "@/features/project/ui/projects/project-floor-plans-section"
import { ProjectGalleryHero } from "@/features/project/ui/projects/project-gallery-hero"
import { ProjectHighlightsSection } from "@/features/project/ui/projects/project-highlights-section"
import { ProjectLocationSection } from "@/features/project/ui/projects/project-location-section"
import { ProjectOverviewSection } from "@/features/project/ui/projects/project-overview-section"
import { ProjectPaymentPlansSection } from "@/features/project/ui/projects/project-payment-plans-section"
import { ProjectPropertiesForSaleSection } from "@/features/project/ui/projects/project-properties-for-sale-section"
import { ProjectSimilarProjectsSection } from "@/features/project/ui/projects/project-similar-projects-section"
import { ProjectTimelineSection } from "@/features/project/ui/projects/project-timeline-section"
import { detailDeveloperCtaContent } from "@/features/developer/content/developer-cta-content"
import { getOffPlanProjectDetail } from "@/features/project"

type OffPlanDetailPageProps = {
  params: Promise<{ id: string }>
}

export async function OffPlanDetailPage({ params }: OffPlanDetailPageProps) {
  const { id } = await params
  const project = getOffPlanProjectDetail(id)

  if (!project) {
    notFound()
  }

  return (
    <main>
      <ProjectGalleryHero images={project.galleryImageUrls} project={project} />
      <ProjectOverviewSection sections={project.overviewSections} />
      <ProjectHighlightsSection projectTitle={project.title} highlights={project.highlights} />
      <ProjectTimelineSection timeline={project.timeline} />
      <ProjectFloorPlansSection floorPlans={project.floorPlans} />
      <ProjectPaymentPlansSection plans={project.paymentPlans} />
      <ProjectExpertsSection projectTitle={project.title} experts={project.experts} />
      <ProjectLocationSection location={project.locationMap} />
      <ProjectAmenitiesSection amenities={project.amenities} />
      <ProjectPropertiesForSaleSection projectTitle={project.title} properties={project.propertiesForSale} />
      <TrustedDeveloperPartners className="bg-white! py-7.5!" />
      <ProjectStorySection sections={project.storySections} asideImage={project.storyAsideImage} />
      <ProjectSimilarProjectsSection
        properties={project.similarProjects}
        detailRoute="off-plan"
        title="Similar Off Plan Launches"
      />
      <HomeDeveloperCtaNewsletter {...detailDeveloperCtaContent} />
    </main>
  )
}
