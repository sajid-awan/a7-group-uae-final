"use client"

import type { PropertyDealerContactProperty } from "@/features/property/ui/property-detail/property-dealer-contact-actions"
import { PropertyDealerContactActions } from "@/features/property/ui/property-detail/property-dealer-contact-actions"
import { cn } from "@/shared/lib/cn"

type PropertyDetailMobileCtaBarProps = {
  property: PropertyDealerContactProperty
  className?: string
}

/** Fixed contact actions for property detail pages on mobile viewports. */
export function PropertyDetailMobileCtaBar({ property, className }: PropertyDetailMobileCtaBarProps) {
  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t border-border bg-white/95 px-4 py-3 shadow-[0_-4px_24px_rgba(0,0,0,0.08)] backdrop-blur-sm pb-[max(0.75rem,env(safe-area-inset-bottom))] lg:hidden",
        className
      )}
      aria-label="Contact agent"
    >
      <PropertyDealerContactActions property={property} layout="bar" />
    </div>
  )
}
