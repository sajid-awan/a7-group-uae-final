import Link from "next/link"

import { EventBannerCard, type EventBannerCardVariant } from "@/features/event/ui/events"
import { buttonVariants } from "@/shared/ui/button"
import { PropertyDealerCard } from "@/features/property/ui/property-detail/property-dealer-card"
import { propertyDealerCardVariantsList } from "@/features/property/ui/property-detail/property-dealer-card.constants"
import { EVENT_BANNERS } from "@/features/event/content/events-page-content"
import { getPropertyListingDetail } from "@/features/property/core/data/mocks/property-listing-details"

export default function DesignSystemWelcomePage() {
  const listingDetail = getPropertyListingDetail("bugatti-residences-business-bay")
  const eventCardVariants: readonly EventBannerCardVariant[] = ["default", "compact"]
  const demoEvent = EVENT_BANNERS[0]

  return (
    <div className="mx-auto p-6 md:p-8">
      <h1 className="text-xl font-semibold tracking-tight">Welcome</h1>
      <p className="mt-2 text-muted-foreground">
        Browse foundations and components from the sidebar — typography first, then controls like
        the button.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link href="/components/typography" className={buttonVariants({ variant: "default" })}>
          Typography
        </Link>
        <Link href="/components/button" className={buttonVariants({ variant: "outline" })}>
          Button
        </Link>
        <Link href="/components/file-upload" className={buttonVariants({ variant: "outline" })}>
          File upload
        </Link>
        <Link href="/components/property-cards" className={buttonVariants({ variant: "outline" })}>
          Cards
        </Link>
      </div>

      {listingDetail ? (
        <section className="mt-12 space-y-4" aria-labelledby="dealer-card-preview-heading">
          <div className="max-w-2xl">
            <h2 id="dealer-card-preview-heading" className="text-lg font-medium font-heading">
              Property dealer card
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Variants used on the property detail sidebar. See all card demos on the Cards page.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {propertyDealerCardVariantsList.map((variant) => (
              <div key={variant} className="min-w-0 space-y-2">
                <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{variant}</p>
                <PropertyDealerCard property={listingDetail} variant={variant} />
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {demoEvent ? (
        <section className="mt-12 space-y-4" aria-labelledby="event-banner-preview-heading">
          <div className="max-w-2xl">
            <h2 id="event-banner-preview-heading" className="text-lg font-medium font-heading">
              Event banner cards
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Reusable event list card variants used by the Events page.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
            {eventCardVariants.map((variant) => (
              <div key={variant} className="min-w-0 space-y-2">
                <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{variant}</p>
                <EventBannerCard event={demoEvent} variant={variant} />
              </div>
            ))}
          </div>
        </section>
      ) : null}
    </div>
  )
}
