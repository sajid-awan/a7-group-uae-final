import type { ReactNode } from "react"
import Link from "next/link"

import {
  AgentCardSkeleton,
  AgentPortraitCardDetailedSkeleton,
  AgentPortraitCardSimpleSkeleton,
  AwardsBannerCardSkeleton,
  CommunityCompactCardSkeleton,
  CommunitySpotlightCardSkeleton,
  CommunitySummaryCardSkeleton,
  FeatureCardSkeleton,
  NewsPostCardSkeleton,
  ProjectHighlightCardSkeleton,
  PropertyCardHorizontalSkeleton,
  PropertyCardListingHorizontalSkeleton,
  PropertyCardListingSkeleton,
  PropertyCardSkeleton,
  PropertyDealerCardSkeleton,
  PropertyMarketingListingCardSkeleton,
  SidebarNavSkeleton,
  TestimonialCardSkeleton,
} from "@/shared/ui/skeletons"
import { CodeBlock, DemoBlock } from "@/shared/ui/docs-blocks"
import { cn } from "@/shared/lib/cn"

const demoUsageShell = "rounded-lg bg-muted/40 p-4 text-sm overflow-auto"

function SkeletonDemoUsage({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn("w-full min-w-0", demoUsageShell, className)}>{children}</div>
}

export default function SkeletonsDocsPage() {
  return (
    <div className="mx-auto p-6 md:p-8">
      <header className="mb-10 max-w-2xl">
        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Components</p>
        <h1 className="mt-1 font-heading text-2xl font-semibold tracking-tight">Skeletons</h1>
        <p className="mt-2 text-muted-foreground">
          Loading placeholders that mirror card layouts from the{" "}
          <Link href="/components/property-cards" className="font-medium text-a7-text-gray underline-offset-4 hover:underline">
            Cards
          </Link>{" "}
          page. Use while data loads or during client hydration.
        </p>
      </header>

      <div className="space-y-10">
        <section className="space-y-4">
          <h2 className="text-lg font-medium">Import</h2>
          <CodeBlock>{`import {
  PropertyCardSkeleton,
  SidebarNavSkeleton,
  // …see @/shared/ui/skeletons
} from "@/shared/ui/skeletons"`}</CodeBlock>
        </section>

        <DemoBlock
          title="Sidebar nav links"
          description="Shown in the component library sidebar until the client has mounted."
          code={`import { SidebarNavSkeleton } from "@/shared/ui/skeletons"

<SidebarNavSkeleton count={navItems.length} />`}
        >
          <SkeletonDemoUsage className="max-w-xs">
            <SidebarNavSkeleton count={8} />
          </SkeletonDemoUsage>
        </DemoBlock>

        <DemoBlock
          title="Property & listing cards"
          description="Vertical and horizontal property, listing, and media highlight skeletons."
          code={`import {
  PropertyCardSkeleton,
  PropertyCardListingSkeleton,
  PropertyCardHorizontalSkeleton,
  PropertyCardListingHorizontalSkeleton,
  ProjectHighlightCardSkeleton,
  AgentPortraitCardSimpleSkeleton,
  AgentPortraitCardDetailedSkeleton,
} from "@/shared/ui/skeletons"`}
        >
          <SkeletonDemoUsage>
            <div className="flex w-full flex-col gap-8">
              <div className="grid max-w-[340px] grid-cols-1">
                <PropertyCardSkeleton />
              </div>
              <PropertyCardListingSkeleton />
              <PropertyCardHorizontalSkeleton />
              <PropertyCardListingHorizontalSkeleton />
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 [&>*]:min-w-0">
                <ProjectHighlightCardSkeleton layout="vertical" />
                <AgentPortraitCardSimpleSkeleton layout="vertical" />
                <AgentPortraitCardDetailedSkeleton layout="vertical" />
              </div>
            </div>
          </SkeletonDemoUsage>
        </DemoBlock>

        <DemoBlock
          title="Dealer & agent strip"
          description="Sticky sidebar dealer card and inline agent contact skeletons."
          code={`import { PropertyDealerCardSkeleton, AgentCardSkeleton } from "@/shared/ui/skeletons"`}
        >
          <SkeletonDemoUsage>
            <div className="grid w-full max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <PropertyDealerCardSkeleton />
              <PropertyDealerCardSkeleton />
              <PropertyDealerCardSkeleton />
            </div>
            <div className="mt-6 flex w-full max-w-2xl flex-col gap-2">
              <AgentCardSkeleton />
              <AgentCardSkeleton />
            </div>
          </SkeletonDemoUsage>
        </DemoBlock>

        <DemoBlock
          title="Horizontal media cards"
          description="Skeletons for horizontal agent portrait and project highlight layouts."
          code={`<AgentPortraitCardSimpleSkeleton layout="horizontal" />
<AgentPortraitCardDetailedSkeleton layout="horizontal" />
<ProjectHighlightCardSkeleton layout="horizontal" />`}
        >
          <SkeletonDemoUsage>
            <div className="grid w-full gap-6 lg:grid-cols-2">
              <AgentPortraitCardSimpleSkeleton layout="horizontal" />
              <AgentPortraitCardDetailedSkeleton layout="horizontal" />
              <ProjectHighlightCardSkeleton layout="horizontal" className="lg:col-span-2" />
            </div>
          </SkeletonDemoUsage>
        </DemoBlock>

        <DemoBlock
          title="Community cards"
          description="Summary, compact, and spotlight community skeletons."
          code={`import {
  CommunitySummaryCardSkeleton,
  CommunityCompactCardSkeleton,
  CommunitySpotlightCardSkeleton,
} from "@/shared/ui/skeletons"`}
        >
          <SkeletonDemoUsage>
            <div className="flex w-full flex-col gap-8">
              <CommunitySummaryCardSkeleton />
              <div className="grid gap-4 lg:grid-cols-2">
                <CommunityCompactCardSkeleton />
              </div>
              <CommunitySpotlightCardSkeleton />
            </div>
          </SkeletonDemoUsage>
        </DemoBlock>

        <DemoBlock
          title="Awards, feature & marketing cards"
          description="Banner, feature variants, and marketing listing layouts."
          code={`import {
  AwardsBannerCardSkeleton,
  FeatureCardSkeleton,
  PropertyMarketingListingCardSkeleton,
} from "@/shared/ui/skeletons"

<FeatureCardSkeleton variant="center" />
<PropertyMarketingListingCardSkeleton layout="hero" />`}
        >
          <SkeletonDemoUsage>
            <div className="flex w-full flex-col gap-8">
              <AwardsBannerCardSkeleton />
              <div className="grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
                <FeatureCardSkeleton variant="center" />
                <FeatureCardSkeleton variant="left" />
                <FeatureCardSkeleton variant="header" className="md:col-span-2 max-w-xl" />
                <FeatureCardSkeleton variant="checklist" className="md:col-span-2 max-w-xl" />
              </div>
              <PropertyMarketingListingCardSkeleton layout="vertical" />
              <PropertyMarketingListingCardSkeleton layout="horizontal" />
              <PropertyMarketingListingCardSkeleton layout="hero" />
            </div>
          </SkeletonDemoUsage>
        </DemoBlock>

        <DemoBlock
          title="Testimonial & news skeletons"
          description="Matches testimonial and news post card shapes across variants."
          code={`import { TestimonialCardSkeleton, NewsPostCardSkeleton } from "@/shared/ui/skeletons"

<TestimonialCardSkeleton variant="outlined" />
<NewsPostCardSkeleton variant="card" />`}
        >
          <SkeletonDemoUsage>
            <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <TestimonialCardSkeleton variant="default" />
              <TestimonialCardSkeleton variant="dark" />
              <TestimonialCardSkeleton variant="outlined" />
            </div>
          </SkeletonDemoUsage>
          <SkeletonDemoUsage className="mt-6 bg-zinc-950">
            <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-3">
              <NewsPostCardSkeleton variant="dark" />
              <NewsPostCardSkeleton variant="dark" />
              <NewsPostCardSkeleton variant="dark" />
            </div>
          </SkeletonDemoUsage>
          <SkeletonDemoUsage className="mt-6">
            <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-3">
              <NewsPostCardSkeleton variant="light" />
              <NewsPostCardSkeleton variant="card" />
              <NewsPostCardSkeleton variant="card" />
            </div>
          </SkeletonDemoUsage>
        </DemoBlock>
      </div>
    </div>
  )
}
