import { HomeDeveloperCtaNewsletter } from "@/shared/ui/marketing/home-developer-cta-newsletter"
import { BreadcrumbList } from "@/shared/ui/breadcrumb"
import { homeDeveloperCtaContent } from "@/features/developer/services/content"
import type { AreaDetailContent } from "@/features/area/services/content"
import { getAreaDetailSectionIds } from "@/features/area"
import { areasPath } from "@/shared/lib/constants/routes"

import { AreaDetailSearchHero } from "./area-detail-search-hero"
import { AreaDetailShell } from "./area-detail-shell"

type AreaDetailPageProps = {
  area: AreaDetailContent
}

export function AreaDetailPage({ area }: AreaDetailPageProps) {
  const sectionIds = getAreaDetailSectionIds()

  return (
    <>
      <AreaDetailSearchHero
        backgroundUrl={area.heroBackgroundUrl}
        placeholder={area.searchPlaceholder}
      />

      <div className="container mx-auto px-4 py-6 sm:px-6 md:py-8">
        <BreadcrumbList
          size="sm"
          items={[
            { kind: "home", href: "/" },
            { kind: "link", href: areasPath(), label: "Areas" },
            { kind: "current", label: area.title },
          ]}
        />

        <AreaDetailShell area={area} sectionIds={sectionIds} />
      </div>

      <HomeDeveloperCtaNewsletter {...homeDeveloperCtaContent} />
    </>
  )
}
