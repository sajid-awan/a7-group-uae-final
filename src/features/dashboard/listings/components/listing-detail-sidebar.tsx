"use client"

import { useState } from "react"
import { Eye, Users } from "lucide-react"

import type { DashboardListingDetail, DashboardListingPortalSetting } from "../content/listing-detail-types"
import { PropertyDealerCard } from "@/features/property/ui/property-detail/property-dealer-card"
import { cn } from "@/shared/lib/cn"
import { Card, CardContent, CardHeader } from "@/shared/ui/card"
import { Switch } from "@/shared/ui/switch"

export type DashboardListingDetailSidebarProps = {
  listing: DashboardListingDetail
  className?: string
}

export function DashboardListingDetailSidebar({ listing, className }: DashboardListingDetailSidebarProps) {
  const [hideListing, setHideListing] = useState(listing.hideListing)
  const [portalSettings, setPortalSettings] = useState(listing.portalSettings)

  const togglePortal = (portalId: string, enabled: boolean) => {
    setPortalSettings((current) =>
      current.map((portal) => (portal.id === portalId ? { ...portal, enabled } : portal))
    )
  }

  return (
    <aside className={cn("space-y-4", className)}>
      <PropertyDealerCard property={listing} variant="flat" className="rounded-3xl border-neutral-200" />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
        <AnalyticsCard
          label="Total Leads"
          value={listing.analytics.totalLeads}
          icon={Users}
        />
        <AnalyticsCard
          label="Total Views"
          value={listing.analytics.totalViews}
          icon={Eye}
        />
      </div>

      <Card className="rounded-3xl border-neutral-200">
        <CardHeader className="pb-0">
          <h2 className="font-inter text-base font-semibold text-black">Settings</h2>
        </CardHeader>
        <CardContent>
          <SettingToggleRow
            label="Hide listing"
            description="Remove this listing from public search results."
            checked={hideListing}
            onCheckedChange={setHideListing}
          />
        </CardContent>
      </Card>

      <Card className="rounded-3xl border-neutral-200 ">
        <CardHeader className="pb-0">
          <h2 className="font-inter text-base font-semibold text-black">Portals</h2>
        </CardHeader>
        <CardContent className="space-y-4">
          {portalSettings.map((portal) => (
            <PortalToggleRow
              key={portal.id}
              portal={portal}
              onCheckedChange={(enabled) => togglePortal(portal.id, enabled)}
            />
          ))}
        </CardContent>
      </Card>
    </aside>
  )
}

function AnalyticsCard({
  label,
  value,
  icon: Icon,
}: {
  label: string
  value: number
  icon: typeof Users
}) {
  return (
    <Card className="rounded-3xl border-neutral-200">
      <CardContent className="flex items-center justify-between p-4">
        <div>
          <p className="text-sm text-muted-foreground">{label}</p>
          <p className="mt-1 font-inter text-2xl font-semibold text-black">{value}</p>
        </div>
        <span className="flex size-10 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
          <Icon className="size-5" aria-hidden />
        </span>
      </CardContent>
    </Card>
  )
}

function SettingToggleRow({
  label,
  description,
  checked,
  onCheckedChange,
}: {
  label: string
  description: string
  checked: boolean
  onCheckedChange: (checked: boolean) => void
}) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div className="min-w-0">
        <p className="text-sm font-semibold text-foreground">{label}</p>
        <p className="mt-1 text-xs text-muted-foreground">{description}</p>
      </div>
      <Switch
        size="sm"
        checked={checked}
        onCheckedChange={onCheckedChange}
        aria-label={label}
      />
    </div>
  )
}

function PortalToggleRow({
  portal,
  onCheckedChange,
}: {
  portal: DashboardListingPortalSetting
  onCheckedChange: (enabled: boolean) => void
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <p className="text-sm font-medium text-foreground">{portal.label}</p>
      <Switch
        size="sm"
        checked={portal.enabled}
        onCheckedChange={onCheckedChange}
        aria-label={`${portal.label} portal`}
      />
    </div>
  )
}

DashboardListingDetailSidebar.displayName = "DashboardListingDetailSidebar"
