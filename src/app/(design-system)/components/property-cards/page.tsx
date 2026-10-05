import type { ReactNode } from "react"
import Link from "next/link"
import { Calendar, MapPin } from "lucide-react"
import { AgentCard } from "@/features/agent/ui/agent-list/agent-card"
import { agentCardTones } from "@/features/agent/ui/agent-list/agent-card.constants"
import { DashboardAgentGridCard, DashboardAgentGridCardShowcase } from "@/features/dashboard"
import { PropertyDealerCard } from "@/features/property/ui/property-detail/property-dealer-card"
import { propertyDealerCardVariantsList } from "@/features/property/ui/property-detail/property-dealer-card.constants"
import {
  AgentPortraitCardDetailed,
  AgentPortraitCardSimple,
  ProjectHighlightCard,
} from "@/shared/ui/media-feature-cards"
import {
  PropertyCard,
  PropertyCardHorizontal,
  PropertyCardListing,
  PropertyCardListingHorizontal,
  PropertyMarketingListingCard,
  TestimonialCard,
} from "@/features/property/ui/property-card"
import { HOME_TESTIMONIALS } from "@/features/home/content/home-testimonials"
import { AwardsBannerCard } from "@/shared/ui/marketing/awards-banner-card"
import { Button } from "@/shared/ui/button"
import { CommunityCompactCard } from "@/features/area/ui/areas/community-compact-card"
import { CommunitySpotlightCard } from "@/features/area/ui/areas/community-spotlight-card"
import { CommunitySummaryCard } from "@/features/area/ui/areas/community-summary-card"
import { FeatureCard } from "@/shared/ui/feature-card"
import { NewsPostCard } from "@/features/home/ui/home/news-post-card"
import { HOME_NEWS_POSTS } from "@/features/home/content/home-news"
import { CodeBlock, DemoBlock } from "@/shared/ui/docs-blocks"
import {
  fetchProperties,
  fetchPropertyListings,
  getDemoSeedListing,
  getDemoSeedProperty,
} from "@/features/property"
import { MARKETING_PORTRAIT_PLACEHOLDER_WIDE, MARKETING_WIDE_BANNER_PLACEHOLDER } from "@/shared/content/marketing/marketing-media"
import { getPropertyListingDetail } from "@/features/property/core/data/mocks/property-listing-details"
import { cn } from "@/shared/lib/cn"

const demoUsageShell = "rounded-lg bg-muted/40 p-4 text-sm overflow-auto"

function PropertyDemoUsage({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn("w-full min-w-0", demoUsageShell, className)}>{children}</div>
}

export const dynamic = "force-dynamic"

export default async function PropertyCardsDocsPage() {
  const properties = await fetchProperties()
  const listings = await fetchPropertyListings()
  const first = properties[0] ?? getDemoSeedProperty()
  const firstListing = listings[0] ?? getDemoSeedListing()
  const listingDetail = getPropertyListingDetail("bugatti-residences-business-bay")

  return (
    <div className="mx-auto p-6 md:p-8">
      <header className="mb-10 max-w-2xl">
        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Components</p>
        <h1 className="mt-1 text-2xl font-semibold tracking-tight font-heading">Cards</h1>
        <p className="mt-2 text-muted-foreground">
          Listing card for dynamic API content: hero image, payment-plan ribbon, location metadata, and price CTA.
          Pass each API row directly as the <code className="rounded bg-muted px-1 py-0.5 text-xs">property</code> prop.
        </p>
      </header>

      <div className="space-y-10">
        <section className="space-y-4">
          <h2 className="text-lg font-medium">Import</h2>
          <CodeBlock>{`import { PropertyCard } from "@/features/property/ui/property-card"`}</CodeBlock>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-medium">Usage</h2>
          <CodeBlock>{`const properties = await fetchProperties()

return (
  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
    {properties.map((p) => (
      <PropertyCard key={p.id} property={p} />
    ))}
  </div>
)`}</CodeBlock>
        </section>

        {first ? (
          <DemoBlock
            title="Single card (vertical)"
            description="Stacked image and body — default listing card from the API."
            code={`<PropertyCard property={property} />`}
          >
            <PropertyDemoUsage>
              <div className="max-w-[340px]">
                <PropertyCard property={first} />
              </div>
            </PropertyDemoUsage>
          </DemoBlock>
        ) : null}

        {firstListing ? (
          <DemoBlock
            title="Listing detail card (vertical)"
            description="Resale listing card composed from the same mock/API pattern as the other cards, using existing primitives for each chunk."
            code={`import { PropertyCardListing } from "@/features/property/ui/property-card"
import { fetchPropertyListings } from "@/features/property"

const listings = await fetchPropertyListings()
const firstListing = listings[0]

return <PropertyCardListing listing={firstListing} />`}
          >
            <PropertyDemoUsage>
              <div className="w-full max-w-3xl">
                <PropertyCardListing listing={firstListing} />
              </div>
            </PropertyDemoUsage>
          </DemoBlock>
        ) : null}

        {first || firstListing ? (
          <DemoBlock
            title="Complete vertical"
            description="Listing detail card first, full width in a single column. Below that, the other four cards use a responsive three-column grid (`lg` and up)."
            code={`
<div className="flex flex-col gap-8">
  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
    <PropertyCard property={property} />
    <ProjectHighlightCard layout="vertical" imageUrl={property.imageUrl} ... />
    <AgentPortraitCardSimple layout="vertical" imageUrl={heroPortrait} ... />
    <AgentPortraitCardDetailed layout="vertical" imageUrl={heroPortrait} ... />
  </div>
</div>`}
          >
            <PropertyDemoUsage>
              <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 [&>*]:min-w-0 items-start">
                  {first ? (
                    <ProjectHighlightCard
                      layout="vertical"
                      imageUrl={first.imageUrl}
                      paymentPlan={first.paymentPlan}
                      title={first.title}
                      location={first.location}
                      handover={first.handover}
                      developer={first.developer}
                      price={first.priceFrom}
                    />
                  ) : null}
                  <AgentPortraitCardSimple
                    layout="vertical"
                    imageUrl={MARKETING_PORTRAIT_PLACEHOLDER_WIDE}
                    name="Ronnie Volkman DVM"
                    role="Senior property advisor"
                    whatsAppHref="https://wa.me/"
                  />
                  <AgentPortraitCardDetailed
                    layout="vertical"
                    imageUrl={MARKETING_PORTRAIT_PLACEHOLDER_WIDE}
                    roleBadge="Sales Director"
                    showRankMedal
                    name="Ronnie Volkman DVM"
                    nationality="British"
                    languages="Arabic, English, Hindi"
                    whatsAppHref="https://wa.me/"
                    profileHref="#"
                  />
                </div>
              </div>
            </PropertyDemoUsage>
          </DemoBlock>
        ) : null}

        {listingDetail ? (
          <DemoBlock
            title="Property dealer card variants"
            description="Sticky sidebar dealer card for property detail pages. The `variant` prop controls shadow and density; `compact` uses a shorter header, smaller avatar, and hides social icons."
            code={`import { PropertyDealerCard } from "@/features/property/ui/property-detail/property-dealer-card"

<PropertyDealerCard property={property} variant="default" />
<PropertyDealerCard property={property} variant="elevated" />
<PropertyDealerCard property={property} variant="flat" />
<PropertyDealerCard property={property} variant="compact" />`}
          >
            <PropertyDemoUsage>
              <div className="grid w-full max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {propertyDealerCardVariantsList.map((variant) => (
                  <PropertyDealerCard key={variant} property={listingDetail} variant={variant} />
                ))}
              </div>
            </PropertyDemoUsage>
          </DemoBlock>
        ) : null}

        {firstListing ? (
          <DemoBlock
            title="Agent card variants"
            description="Reusable contact strip used inside the listing detail card. The `tone` prop controls the outer pill background; pass `iconOnlyActions` to drop the button labels for a compact icon-only row."
            code={`import { AgentCard } from "@/features/agent/ui/agent-list/agent-card"

// Compact icon-only row
<AgentCard
  name={listing.agentName}
  avatarUrl={listing.agentAvatarUrl}
  tone="neutral"
  iconOnlyActions
/>

// Labelled variants
<AgentCard
  name={listing.agentName}
  avatarUrl={listing.agentAvatarUrl}
  tone="amber"
/>`}
          >
            <PropertyDemoUsage>
              <div className="flex w-full flex-col gap-2">
                <AgentCard
                  name={firstListing.agentName}
                  avatarUrl={firstListing.agentAvatarUrl}
                  tone="neutral"
                  iconOnlyActions
                />
                {agentCardTones.map((tone) => (
                  <AgentCard
                    key={tone}
                    name={firstListing.agentName}
                    avatarUrl={firstListing.agentAvatarUrl}
                    tone={tone}
                  />
                ))}
              </div>
            </PropertyDemoUsage>
          </DemoBlock>
        ) : null}

        <section className="space-y-2 border-t border-border pt-10">
          <h2 className="text-lg font-medium">Dashboard agent grid card</h2>
          <p className="max-w-2xl text-sm text-muted-foreground">
            Reusable agent tile for dashboard grids. Pass core identity props plus optional{" "}
            <code className="rounded bg-muted px-1 py-0.5 text-xs">platformBadges</code> and{" "}
            <code className="rounded bg-muted px-1 py-0.5 text-xs">stats</code> for the footer row.
          </p>
        </section>

        <DemoBlock
          title="Single card"
          description="Rounded portrait image, verified badge, blue phone action, and optional platform badges."
          code={`import { DashboardAgentGridCard } from "@/features/dashboard"

<DashboardAgentGridCard
  name="Sophie Bennett"
  imageSrc="/agents/sophie-bennett.jpg"
  isVerified
  platformBadges={[
    { id: "platform-1", label: "Property Finder", imageSrc: "/assets/logo/logo1.png" },
    { id: "platform-2", label: "Bayut", imageSrc: "/assets/logo/logo2.png" },
    { id: "platform-3", label: "Platform", imageSrc: "/assets/logo/logo3.png" },
  ]}
  editHref="/dashboard/agents/sophie-bennett/edit"
  detailHref="/dashboard/agents/sophie-bennett"
  stats={{ listings: 312, calls: 145, leads: 284, whatsapp: 174 }}
/>`}
        >
          <PropertyDemoUsage>
            <div className="w-full max-w-[280px]">
              <DashboardAgentGridCard
                name="Sophie Bennett"
                imageSrc="https://i.pravatar.cc/400?img=47"
                isVerified
                platformBadges={[
                  { id: "platform-1", label: "Property Finder", imageSrc: "/assets/logo/logo1.png" },
                  { id: "platform-2", label: "Bayut", imageSrc: "/assets/logo/logo2.png" },
                  { id: "platform-3", label: "Platform", imageSrc: "/assets/logo/logo3.png" },
                ]}
                stats={{ listings: 312, calls: 145, leads: 284, whatsapp: 174 }}
                editHref="/dashboard/agents/sophie-bennett/edit"
                detailHref="/dashboard/agents/sophie-bennett"
              />
            </div>
          </PropertyDemoUsage>
        </DemoBlock>

        <DemoBlock
          title="Grid with optional props"
          description="Platform badges vary per card. Omit `platformBadges` for a compact card without the badge row."
          code={`<div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
  {agents.map((agent, index) => (
    <DashboardAgentGridCard
      key={agent.id}
      name={agent.name}
      imageSrc={agent.imageUrl}
      isVerified={agent.isActive}
      platformBadges={getDashboardAgentPlatformBadges(index)}
      stats={{
        listings: agent.listings,
        calls: agent.calls,
        leads: agent.leads,
        whatsapp: agent.whatsapp,
      }}
    />
  ))}
</div>`}
        >
          <PropertyDemoUsage>
            <DashboardAgentGridCardShowcase />
          </PropertyDemoUsage>
        </DemoBlock>

        {properties.length > 0 ? (
          <DemoBlock
            title="Grid from API data (vertical cards)"
            description="Responsive grid of vertical `PropertyCard` components."
            code={`<div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
  {properties.map((p) => (
    <PropertyCard key={p.id} property={p} />
  ))}
</div>`}
          >
            <PropertyDemoUsage>
              <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {properties.slice(0, 3).map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            </PropertyDemoUsage>
          </DemoBlock>
        ) : null}

        <section className="space-y-2 border-t border-border pt-10">
          <h2 className="text-lg font-medium">Horizontal variants</h2>
          <p className="max-w-2xl text-sm text-muted-foreground">
            Wide layouts for featured rows. These use split columns from the <code className="rounded bg-muted px-1 py-0.5 text-xs">md</code>{" "}
            breakpoint upward unless noted.
          </p>
        </section>

        {first ? (
          <DemoBlock
            title="Horizontal property card"
            description="Featured listing layout with image on the left and copy on the right."
            code={`<PropertyCardHorizontal property={property} />`}
          >
            <PropertyDemoUsage>
              <div className="w-full">
                <PropertyCardHorizontal property={first} />
              </div>
            </PropertyDemoUsage>
          </DemoBlock>
        ) : null}

        {firstListing ? (
          <DemoBlock
            title="Listing detail card (horizontal)"
            description="Gallery on the left, metadata and agent strip on the right."
            code={`import { PropertyCardListingHorizontal } from "@/features/property/ui/property-card"
import { fetchPropertyListings } from "@/features/property"

const listings = await fetchPropertyListings()

return <PropertyCardListingHorizontal listing={listings[0]} />`}
          >
            <PropertyDemoUsage>
              <div className="w-full">
                <PropertyCardListingHorizontal listing={firstListing} />
              </div>
            </PropertyDemoUsage>
          </DemoBlock>
        ) : null}

        <DemoBlock
          title="Agent & project media cards (horizontal)"
          description="All horizontal variants together: property cards, listing detail, and media cards."
          code={`<PropertyCardHorizontal property={property} />
<PropertyCardListingHorizontal listing={listing} />
<AgentPortraitCardSimple layout="horizontal" ... />
<AgentPortraitCardDetailed layout="horizontal" ... />
<ProjectHighlightCard layout="horizontal" ... />`}
        >
          <PropertyDemoUsage>
            <div className="flex w-full flex-col gap-8">
              {first ? <PropertyCardHorizontal property={first} /> : null}
      
              {firstListing ? <PropertyCardListingHorizontal listing={firstListing} /> : null}
            <div className="grid lg:grid-cols-2 gap-6">
              <AgentPortraitCardSimple
                layout="horizontal"
                imageUrl={MARKETING_PORTRAIT_PLACEHOLDER_WIDE}
                name="Ronnie Volkman DVM"
                role="Senior property advisor"
                whatsAppHref="https://wa.me/"
              />
              <AgentPortraitCardDetailed
                layout="horizontal"
                imageUrl={MARKETING_PORTRAIT_PLACEHOLDER_WIDE}
                roleBadge="Sales Director"
                showRankMedal
                name="Ronnie Volkman DVM"
                nationality="British"
                languages="Arabic, English, Hindi"
                whatsAppHref="https://wa.me/"
                profileHref="#"
              />
              {first ? (
                <ProjectHighlightCard
                  layout="horizontal"
                  imageUrl={first.imageUrl}
                  paymentPlan={first.paymentPlan}
                  title={first.title}
                  location={first.location}
                  handover={first.handover}
                  developer={first.developer}
                  price={first.priceFrom}
                />
              ) : null}
              </div>
            </div>
          </PropertyDemoUsage>
        </DemoBlock>

        {/* <DemoBlock
          title="Sparse props (vertical stack)"
          description="Minimal prop sets shown in a three-column grid."
          code={`<AgentPortraitCardSimple layout="vertical" imageUrl={hero} />
<ProjectHighlightCard layout="vertical" title="Damac District" price="AED 1.8M" />
<ProjectHighlightCard
  layout="vertical"
  imageUrl={cover}
  paymentPlan="20 / 40 / 70 Payment Plan"
  title="Off-plan drop"
/>`}
        >
          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AgentPortraitCardSimple layout="vertical" imageUrl={MARKETING_PORTRAIT_PLACEHOLDER_WIDE} />
            {first ? (
              <ProjectHighlightCard layout="vertical" title={first.title} price={first.priceFrom} />
            ) : null}
            {first ? (
              <ProjectHighlightCard
                layout="vertical"
                imageUrl={first.imageUrl}
                paymentPlan="20 / 40 / 70 Payment Plan"
                title="Off-plan drop"
              />
            ) : (
              <ProjectHighlightCard
                layout="vertical"
                paymentPlan="20 / 40 / 70 Payment Plan"
                title="Off-plan drop"
              />
            )}
          </div>
        </DemoBlock> */}
        {first ? (
          <DemoBlock
            title="Community summary card"
            description="Optional `imageTags` (ribbon on hero) and `stats` — omit either prop when not needed. Examples below cover full layout, tags-only, stats-only, and minimal."
            code={`import { CommunitySummaryCard } from "@/features/area/ui/areas/community-summary-card"

<CommunitySummaryCard
  imageUrls={images}
  imageTags={["20 / 40 / 70 Payment Plan"]}
  title="Dubai Marina"
  description="…"
  pricePerSqft="AED 2,635 /sqft"
  stats={[
    { value: "05", label: "For Sale" },
    { value: "08", label: "For rent" },
    { value: "03", label: "Closed Deals" },
  ]}
/>`}
          >
            <PropertyDemoUsage>
              <div className="flex w-full flex-col gap-10">
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Full — image tags + stats + price badge
                </p>
                <CommunitySummaryCard
                  imageUrl={first.imageUrl}
                  imageUrls={firstListing?.imageUrls}
                  imageTags={["20 / 40 / 70 Payment Plan"]}
                  title="Dubai Marina"
                  description="It doesn’t get better than the Dubai Marina if you want to live in one of the city’s most stylish neighborhoods. It is a high-rise district home to residential and serviced apartments and hotel towers offering an array of entertainment venues and restaurants"
                  pricePerSqft="AED 2,635 /sqft"
                  stats={[
                    { value: "05", label: "For Sale" },
                    { value: "08", label: "For rent" },
                    { value: "03", label: "Closed Deals" },
                  ]}
                />
              </div>

              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Multiple image tags (stacked) — no stats
                </p>
                <CommunitySummaryCard
                  imageUrl={first.imageUrl}
                  imageUrls={firstListing?.imageUrls}
                  imageTags={["20 / 40 / 70 Payment Plan", "Handover 2030", "Off-plan"]}
                  title="Dubai Marina"
                  description="It doesn’t get better than the Dubai Marina if you want to live in one of the city’s most stylish neighborhoods. It is a high-rise district home to residential and serviced apartments and hotel towers offering an array of entertainment venues and restaurants"
                  pricePerSqft="AED 2,635 /sqft"
                />
              </div>

              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Stats only — no image tags
                </p>
                <CommunitySummaryCard
                  imageUrl={first.imageUrl}
                  imageUrls={firstListing?.imageUrls}
                  title="Dubai Marina"
                  description="It doesn’t get better than the Dubai Marina if you want to live in one of the city’s most stylish neighborhoods. It is a high-rise district home to residential and serviced apartments and hotel towers offering an array of entertainment venues and restaurants"
                  pricePerSqft="AED 2,635 /sqft"
                  stats={[
                    { value: "05", label: "For Sale" },
                    { value: "08", label: "For rent" },
                    { value: "03", label: "Closed Deals" },
                  ]}
                />
              </div>

              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Minimal — no image tags, no stats, no price badge
                </p>
                <CommunitySummaryCard
                  imageUrl={first.imageUrl}
                  imageUrls={firstListing?.imageUrls}
                  title="Dubai Marina"
                  description="It doesn’t get better than the Dubai Marina if you want to live in one of the city’s most stylish neighborhoods. It is a high-rise district home to residential and serviced apartments and hotel towers offering an array of entertainment venues and restaurants"
                />
              </div>
            </div>
            </PropertyDemoUsage>
          </DemoBlock>
        ) : null}

        {first ? (
          <DemoBlock
            title="Community compact card"
            description="Small vertical tile variant with image slider and price snippet."
            code={`<CommunityCompactCard ... />`}
          >
            <PropertyDemoUsage>
              <div className="grid container gap-4 lg:max-w-none lg:grid-cols-2">
                <CommunityCompactCard
                  imageUrl={first.imageUrl}
                  imageUrls={firstListing?.imageUrls}
                  title="Downtown Dubai"
                  location="Downtown Dubai, situated at heart of the city..."
                  price="25,000,000 AED"
                  projectsTag="56 Projects"
                  description="Downtown Dubai, situated at the heart of the city, is a pulsating district that epitomizes modern urban living with high-rise towers, luxury retail, and waterfront attractions."
                />
              </div>
            </PropertyDemoUsage>
          </DemoBlock>
        ) : null}

        {first ? (
          <DemoBlock
            title="Community spotlight card"
            description="Main slick slider with optional thumbnail strip, sqft badge, stat tiles, and footer CTAs. Toggle sections with `showThumbnails`, `showPricePerSqftBadge`, `showPropertyTypeStats`, `showLearnMoreButton`, and `showDiscoverButton` (all default to true)."
            code={`import { CommunitySpotlightCard } from "@/features/area/ui/areas/community-spotlight-card"

<CommunitySpotlightCard imageUrls={images} title="…" pricePerSqft="AED … /sqft" thumbnails={thumbs} />

<CommunitySpotlightCard
  imageUrls={images}
  title="…"
  showThumbnails={false}
  showPricePerSqftBadge={false}
  showPropertyTypeStats={false}
  showLearnMoreButton={false}
/>`}
          >
            <PropertyDemoUsage>
              <div className="flex w-full flex-col gap-10">
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Full — thumbnails, badge, stats, both footer buttons
                  </p>
                  <CommunitySpotlightCard
                    imageUrl={firstListing?.imageUrls?.[0] ?? first.imageUrl}
                    imageUrls={firstListing?.imageUrls}
                    title="Palm Jumeirah"
                    description="It doesn't get better than Dubai Marina if you want to live in one of the city's most stylish neighborhoods. It is a high-rise district home."
                    pricePerSqft="AED 2,635 /sqft"
                    thumbnails={firstListing?.imageUrls?.slice(0, 4)}
                  />
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Media-focused — no thumbnails, no sqft badge, no stat tiles; primary CTA only
                  </p>
                  <CommunitySpotlightCard
                    imageUrl={firstListing?.imageUrls?.[0] ?? first.imageUrl}
                    imageUrls={firstListing?.imageUrls}
                    title="Palm Jumeirah"
                    description="It doesn't get better than Dubai Marina if you want to live in one of the city's most stylish neighborhoods. It is a high-rise district home."
                    pricePerSqft="AED 2,635 /sqft"
                    thumbnails={firstListing?.imageUrls?.slice(0, 4)}
                    showThumbnails={false}
                    showPricePerSqftBadge={false}
                    showPropertyTypeStats={false}
                    showLearnMoreButton={false}
                  />
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Outline CTA only — stats on, no discover button
                  </p>
                  <CommunitySpotlightCard
                    imageUrl={firstListing?.imageUrls?.[0] ?? first.imageUrl}
                    imageUrls={firstListing?.imageUrls}
                    title="Palm Jumeirah"
                    description="It doesn't get better than Dubai Marina if you want to live in one of the city's most stylish neighborhoods. It is a high-rise district home."
                    pricePerSqft="AED 2,635 /sqft"
                    thumbnails={firstListing?.imageUrls?.slice(0, 4)}
                    showDiscoverButton={false}
                  />
                </div>
              </div>
            </PropertyDemoUsage>
          </DemoBlock>
        ) : null}

        {first ? (
          <DemoBlock
            title="Awards banner card"
            description="Wide hero with gradient overlay. Use built-in `date` + `location`, or pass `metaItems` for any number of icon rows; add `children` for CTAs or other optional content."
            code={`import { AwardsBannerCard } from "@/shared/ui/marketing/awards-banner-card"
import { Calendar, MapPin } from "lucide-react"

<AwardsBannerCard imageUrl={hero} title="…" subtitle="…" date="…" location="…" />

<AwardsBannerCard
  imageUrl={hero}
  title="…"
  metaItems={[
    { icon: Calendar, text: "This weekend" },
    { icon: MapPin, text: "Dubai Marina" },
  ]}
>
  <Button variant="outline" size="sm">View listings</Button>
</AwardsBannerCard>`}
          >
            <PropertyDemoUsage>
              <div className="flex w-full flex-col gap-6">
                <AwardsBannerCard
                  imageUrl={MARKETING_WIDE_BANNER_PLACEHOLDER}
                  title="Welcome to the Bayut Awards 2025"
                  subtitle="Reflection of Success"
                  date="5th February 2026"
                  location="Atlantis The Royal"
                />
                <AwardsBannerCard
                  imageUrl={first.imageUrl}
                  title={first.title}
                  subtitle="Featured on property cards"
                  metaItems={[
                    { icon: Calendar, text: first.handover },
                    { icon: MapPin, text: first.location },
                    { text: `From ${first.priceFrom}` },
                  ]}
                >
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="border-white/50 bg-white/10 text-white hover:bg-white/20"
                    asChild
                  >
                    <Link href="#property-cards">Explore listings</Link>
                  </Button>
                </AwardsBannerCard>
              </div>
            </PropertyDemoUsage>
          </DemoBlock>
        ) : null}

        <DemoBlock
          title="Feature cards"
          description="Step-style feature blocks: centered, left-aligned, dark header row with icon tile, and checklist. Pass your own icon and action slot when wiring to product content."
          code={`import { FeatureCard } from "@/shared/ui/feature-card"

<FeatureCard
  variant="center"
  title="Trusted Network"
  description="Direct access to verified landowners…"
/>

<FeatureCard variant="left" … />

<FeatureCard variant="header" … />

<FeatureCard variant="checklist" lead="…" checklistItems={[…]} />`}
        >
          <PropertyDemoUsage>
            <div className="grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Center — icon, step, title, body, CTA
                </p>
                <FeatureCard
                  variant="center"
                  title="Trusted Network"
                  description="Direct access to verified landowners and full compliance with DLD and RERA ensure safe, risk-free transactions."
                />
              </div>
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Left — same content, start-aligned
                </p>
                <FeatureCard
                  variant="left"
                  title="Trusted Network"
                  description="Direct access to verified landowners and full compliance with DLD and RERA ensure safe, risk-free transactions."
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Header — icon tile + title row, step, short body on dark surface
                </p>
                <div className="max-w-xl">
                  <FeatureCard
                    variant="header"
                    title="Trusted Network"
                    description="More off-plan plots in Dubai with flexible payment plans."
                  />
                </div>
              </div>
              <div className="space-y-2 md:col-span-2">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Checklist — lead line + checked list + CTA
                </p>
                <div className="max-w-xl">
                  <FeatureCard
                    variant="checklist"
                    title="Trusted Network"
                    lead="Direct access to verified landowners and full."
                    checklistItems={[
                      "Services for Developers",
                      "Developer Services",
                      "Tailored for Developers",
                      "Custom Developer Solutions",
                    ]}
                  />
                </div>
              </div>
            </div>
          </PropertyDemoUsage>
        </DemoBlock>

        {first && firstListing ? (
          <DemoBlock
            title="Marketing listing cards"
            description="Three dynamic layouts for off-plan style listings: vertical carousel card, horizontal card with stat tiles, and full-hero overlay. Drive copy, gallery, ribbons, stats, and CTAs from props (or map from your API row)."
            code={`import { PropertyMarketingListingCard } from "@/features/property/ui/property-card"

<PropertyMarketingListingCard layout="vertical" imageUrls={images} title="…" price="…" location="…" />

<PropertyMarketingListingCard layout="horizontal" imageUrls={images} statTiles={customStats} />

<PropertyMarketingListingCard layout="hero" ribbonLabels={["…"]} />`}
          >
            <PropertyDemoUsage>
              <div className="mx-auto flex w-full flex-col gap-10">
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Vertical — carousel, ribbons, meta, description, CTAs
                  </p>
                  <PropertyMarketingListingCard
                    layout="vertical"
                    imageUrls={firstListing.imageUrls}
                    propertyTypes={firstListing.propertyType}
                    title="Golf Vale at Emaar South"
                    price={firstListing.price}
                    pricePrefix="From:"
                    location={firstListing.location}
                    bedroomSummary="1, 2, 3"
                    description={
                      firstListing.description ??
                      first.description ??
                      "Premium residences with curated amenities and strong rental demand in a master-planned community."
                    }
                    paymentPlan={first.paymentPlan}
                    handover="Handover 2030"
                  />
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Horizontal — image column, stats row, CTAs
                  </p>
                  <PropertyMarketingListingCard
                    layout="horizontal"
                    imageUrls={firstListing.imageUrls}
                    propertyTypes={firstListing.propertyType}
                    title="Golf Vale at Emaar South"
                    price={firstListing.price}
                    pricePrefix="From:"
                    location={firstListing.location}
                    bedroomSummary="1, 2, 3"
                    description={
                      firstListing.description ??
                      first.description ??
                      "Premium residences with curated amenities and strong rental demand in a master-planned community."
                    }
                    paymentPlan={first.paymentPlan}
                    handover="Handover 2030"
                  />
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Hero — full-bleed image, stacked ribbons, overlay copy
                  </p>
                  <PropertyMarketingListingCard
                    layout="hero"
                    imageUrls={firstListing.imageUrls}
                    propertyTypes={firstListing.propertyType}
                    title="Golf Vale at Emaar South"
                    price={firstListing.price}
                    pricePrefix="From:"
                    location={firstListing.location}
                    bedroomSummary="1, 2, 3"
                    description={
                      firstListing.description ??
                      first.description ??
                      "Premium residences with curated amenities and strong rental demand in a master-planned community."
                    }
                    paymentPlan={first.paymentPlan}
                    handover="Handover 2030"
                    ribbonLabels={["20 / 40 / 70 Payment Plan", "20 / 40 / 70 Payment Plan"]}
                  />
                </div>
              </div>
            </PropertyDemoUsage>
          </DemoBlock>
        ) : null}

        <section className="space-y-2 border-t border-border pt-10">
          <h2 className="text-lg font-medium">Testimonial card</h2>
          <p className="max-w-2xl text-sm text-muted-foreground">
            Reusable quote card with four visual variants. Supports optional star rating (1–5) and falls back to an initial avatar when no image URL is supplied.
          </p>
        </section>

        <DemoBlock
          title="default"
          description="Cream off-white background — used in the Happy Home Owners section on dark backgrounds."
          code={`<TestimonialCard
  name="Daniel Kardashian"
  role="Los Angeles, CA"
  quote="Monolith made the home-buying process so smooth…"
  avatarUrl="…"
  variant="default"
/>`}
        >
          <PropertyDemoUsage>
            <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {HOME_TESTIMONIALS.slice(0, 3).map((t) => (
                <TestimonialCard
                  key={t.id}
                  name={t.name}
                  role={t.role}
                  quote={t.quote}
                  avatarUrl={t.avatarUrl}
                  variant="default"
                />
              ))}
            </div>
          </PropertyDemoUsage>
        </DemoBlock>

        <DemoBlock
          title="dark"
          description="Dark zinc background — suited for embedding inside dark-themed sections."
          code={`<TestimonialCard variant="dark" name="…" role="…" quote="…" avatarUrl="…" />`}
        >
          <PropertyDemoUsage className="bg-zinc-950">
            <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {HOME_TESTIMONIALS.slice(0, 3).map((t) => (
                <TestimonialCard
                  key={t.id}
                  name={t.name}
                  role={t.role}
                  quote={t.quote}
                  avatarUrl={t.avatarUrl}
                  variant="dark"
                />
              ))}
            </div>
          </PropertyDemoUsage>
        </DemoBlock>

        <DemoBlock
          title="outlined"
          description="White card with a visible border — ideal on light page backgrounds."
          code={`<TestimonialCard variant="outlined" name="…" role="…" quote="…" avatarUrl="…" />`}
        >
          <PropertyDemoUsage>
            <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {HOME_TESTIMONIALS.slice(0, 3).map((t) => (
                <TestimonialCard
                  key={t.id}
                  name={t.name}
                  role={t.role}
                  quote={t.quote}
                  avatarUrl={t.avatarUrl}
                  variant="outlined"
                />
              ))}
            </div>
          </PropertyDemoUsage>
        </DemoBlock>

        <DemoBlock
          title="featured"
          description="Primary gold background — use for highlighted or hero testimonials. Supports an optional star rating."
          code={`<TestimonialCard variant="featured" rating={5} name="…" role="…" quote="…" avatarUrl="…" />`}
        >
          <PropertyDemoUsage>
            <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {HOME_TESTIMONIALS.slice(0, 3).map((t, i) => (
                <TestimonialCard
                  key={t.id}
                  name={t.name}
                  role={t.role}
                  quote={t.quote}
                  avatarUrl={t.avatarUrl}
                  variant="featured"
                  rating={5 - (i % 2)}
                />
              ))}
            </div>
          </PropertyDemoUsage>
        </DemoBlock>

        <DemoBlock
          title="With star ratings"
          description="Any variant accepts an optional `rating` prop (1–5). Stars are hidden when the prop is omitted."
          code={`<TestimonialCard variant="outlined" rating={5} name="…" role="…" quote="…" />
<TestimonialCard variant="default"  rating={4} name="…" role="…" quote="…" />
<TestimonialCard variant="dark"     rating={3} name="…" role="…" quote="…" />`}
        >
          <PropertyDemoUsage>
            <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
              {(["outlined", "default", "dark"] as const).map((variant, i) => {
                const t = HOME_TESTIMONIALS[i]
                return (
                  <TestimonialCard
                    key={variant}
                    name={t.name}
                    role={t.role}
                    quote={t.quote}
                    avatarUrl={t.avatarUrl}
                    variant={variant}
                    rating={5 - i}
                  />
                )
              })}
            </div>
          </PropertyDemoUsage>
        </DemoBlock>

        <section className="space-y-2 border-t border-border pt-10">
          <h2 className="text-lg font-medium">News post card</h2>
          <p className="max-w-2xl text-sm text-muted-foreground">
            Editorial card with hero image, date, view count, title, and excerpt. Three visual variants: <code className="rounded bg-muted px-1 py-0.5 text-xs">dark</code> for dark-background sections, <code className="rounded bg-muted px-1 py-0.5 text-xs">light</code> for light pages, and <code className="rounded bg-muted px-1 py-0.5 text-xs">card</code> for a self-contained bordered tile.
          </p>
        </section>

        <DemoBlock
          title="dark (default)"
          description="White text — designed for use inside dark/black section backgrounds."
          code={`import { NewsPostCard } from "@/features/home/ui/home/news-post-card"
import { HOME_NEWS_POSTS } from "@/features/home/content/home-news"

<div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
  {HOME_NEWS_POSTS.map((post) => (
    <NewsPostCard key={post.id} post={post} variant="dark" />
  ))}
</div>`}
        >
          <PropertyDemoUsage className="bg-zinc-950">
            <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-3">
              {HOME_NEWS_POSTS.map((post) => (
                <NewsPostCard key={post.id} post={post} variant="dark" />
              ))}
            </div>
          </PropertyDemoUsage>
        </DemoBlock>

        <DemoBlock
          title="light"
          description="Dark text on a transparent background — drop directly onto light page surfaces."
          code={`<NewsPostCard post={post} variant="light" />`}
        >
          <PropertyDemoUsage>
            <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-3">
              {HOME_NEWS_POSTS.map((post) => (
                <NewsPostCard key={post.id} post={post} variant="light" />
              ))}
            </div>
          </PropertyDemoUsage>
        </DemoBlock>

        <DemoBlock
          title="card"
          description="Self-contained bordered tile with padding and shadow — use anywhere without a surrounding section colour."
          code={`<NewsPostCard post={post} variant="card" />`}
        >
          <PropertyDemoUsage>
            <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-3">
              {HOME_NEWS_POSTS.map((post) => (
                <NewsPostCard key={post.id} post={post} variant="card" />
              ))}
            </div>
          </PropertyDemoUsage>
        </DemoBlock>

      </div>
    </div>
  )
}
