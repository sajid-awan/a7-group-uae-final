/* eslint-disable react-hooks/set-state-in-effect */
"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ExternalLink, Hash } from "lucide-react"

import { getDashboardListingDrawerData } from "../content/listing-drawer-content"
import type { DashboardListingDrawerPortal } from "../content/listing-drawer-types"
import type { DashboardListing } from "../content/listings-types"
import { Button } from "@/shared/ui/button"
import {
  SideDrawer,
  SideDrawerAccessibility,
  SideDrawerBody,
  SideDrawerCloseButton,
  SideDrawerContent,
  SideDrawerHero,
} from "@/shared/ui/drawer"
import { FormSelectField } from "@/shared/ui/form-field"
import { PortalStatusCard } from "@/shared/ui/portal-status-card"

export type DashboardListingDrawerProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  listing: DashboardListing | null
  className?: string
}

function PermitInfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="w-full rounded-xl border border-neutral-200 bg-white px-3 py-3">
      <div className="flex flex-col items-center justify-center gap-2.5">
        <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-orange-50 text-orange-500">
          <Hash className="size-4" aria-hidden />
        </span>
        <div className="min-w-full text-center">
          <p className="text-xs font-semibold text-black">{label}</p>
          <p className="mt-1 truncate text-sm text-muted-foreground">{value}</p>
        </div>
      </div>
    </div>
  )
}

export function DashboardListingDrawer({
  open,
  onOpenChange,
  listing,
  className,
}: DashboardListingDrawerProps) {
  const drawerData = listing ? getDashboardListingDrawerData(listing) : null
  const [portals, setPortals] = useState<DashboardListingDrawerPortal[]>([])
  const [substituteAgent, setSubstituteAgent] = useState("")

  useEffect(() => {
    if (!listing) return
    const data = getDashboardListingDrawerData(listing)
    setPortals(data.portals.map((portal) => ({ ...portal })))
    setSubstituteAgent("")
  }, [listing])

  const togglePortal = (portalId: string, active: boolean) => {
    setPortals((current) =>
      current.map((portal) => (portal.id === portalId ? { ...portal, active } : portal))
    )
  }

  return (
    <SideDrawer open={open} onOpenChange={onOpenChange}>
      <SideDrawerContent size="sm" className={className}>
        <SideDrawerAccessibility
          title={listing ? `${listing.referenceId} listing details` : "Listing details"}
          description="Permit information, portal status, and substitute agent settings."
        />

        {listing && drawerData ? (
          <>
            <SideDrawerHero>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
                {drawerData.imageUrl ? (
                  <Image
                    src={drawerData.imageUrl}
                    alt={listing.title}
                    fill
                    className="object-cover"
                    sizes="384px"
                    priority
                  />
                ) : null}
              </div>
              <SideDrawerCloseButton
                variant="overlay"
                label="Close listing drawer"
                onClose={() => onOpenChange(false)}
              />
            </SideDrawerHero>

            <SideDrawerBody className="space-y-6">
              <section className="space-y-3" aria-labelledby="listing-permit-heading">
                <h2 id="listing-permit-heading" className="font-inter text-base font-semibold text-black">
                  Permit Information
                </h2>
                <div className="flex w-full gap-3">
                  <PermitInfoCard label="Permit Number" value={drawerData.permitNumber} />
                  <PermitInfoCard label="Unit No" value={drawerData.unitNo} />
                </div>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="h-9 w-full rounded-lg border-neutral-200 bg-white px-4 text-sm font-medium text-foreground shadow-none"
                >
                  <a href={drawerData.permitHref} target="_blank" rel="noopener noreferrer">
                    View Permit
                    <ExternalLink className="size-3.5" aria-hidden />
                  </a>
                </Button>
              </section>

              <section className="space-y-3" aria-labelledby="listing-portal-heading">
                <h2 id="listing-portal-heading" className="font-inter text-base font-semibold text-black">
                  Portal Status
                </h2>
                <div className="grid grid-cols-2 gap-3">
                  {portals.map((portal) => (
                    <PortalStatusCard
                      key={portal.id}
                      label={portal.label}
                      imageSrc={portal.imageSrc}
                      active={portal.active}
                      onActiveChange={(checked) => togglePortal(portal.id, checked)}
                      layout="inline"
                    />
                  ))}
                </div>
              </section>

              <section aria-labelledby="listing-substitute-agent-heading">
                <FormSelectField
                  id="listing-substitute-agent"
                  label="Substitute Agent"
                  value={substituteAgent}
                  onValueChange={setSubstituteAgent}
                  options={drawerData.substituteAgentOptions}
                  placeholder="Select"
                />
              </section>
            </SideDrawerBody>
          </>
        ) : null}
      </SideDrawerContent>
    </SideDrawer>
  )
}

DashboardListingDrawer.displayName = "DashboardListingDrawer"
