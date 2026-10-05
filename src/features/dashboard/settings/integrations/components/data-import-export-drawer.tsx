"use client"

import { ArrowDownToLine, ArrowUpFromLine, Copy, ExternalLink, Link2, X } from "lucide-react"
import { useState } from "react"

import {
  DATA_IMPORT_EXPORT_BAYUT_FEED_URL,
  DATA_IMPORT_EXPORT_BAYUT_TABS,
  DATA_IMPORT_EXPORT_DEFAULT_FEED_URL,
  DATA_IMPORT_EXPORT_DRAWER_COPY,
  DATA_IMPORT_EXPORT_GENERIC_FEED_URL,
  DATA_IMPORT_EXPORT_GENERIC_TABS,
} from "../content/data-import-export-content"
import { cn } from "@/shared/lib/cn"
import { Badge } from "@/shared/ui/badge"
import { Button } from "@/shared/ui/button"
import {
  SideDrawer,
  SideDrawerBody,
  SideDrawerContent,
  SideDrawerFooter,
  SideDrawerHeader,
} from "@/shared/ui/drawer"
import { InfoTooltip } from "@/shared/ui/info-tooltip"
import { Input } from "@/shared/ui/input"

const drawerFooterButtonClassName = "h-11 rounded-xl shadow-none"

type FeedTabsProps = {
  tabs: readonly { id: string; label: string }[]
  value: string
  onChange: (value: string) => void
}

function FeedTabs({ tabs, value, onChange }: FeedTabsProps) {
  return (
    <div className="flex flex-wrap gap-4 border-b border-neutral-100">
      {tabs.map((tab) => {
        const active = tab.id === value

        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onChange(tab.id)}
            className={cn(
              "border-b-2 px-0 pb-2 text-sm font-medium transition-colors",
              active
                ? "border-[#8B6E4E] text-[#8B6E4E]"
                : "border-transparent text-neutral-500 hover:text-neutral-700"
            )}
          >
            {tab.label}
          </button>
        )
      })}
    </div>
  )
}

function CopyableFeedField({ value }: { value: string }) {
  return (
    <div className="relative">
      <ExternalLink className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-neutral-400" />
      <Input
        readOnly
        value={value}
        className="h-11 rounded-xl border-neutral-200 bg-[#FAFAFA] pr-11 pl-10 text-sm shadow-none"
      />
      <button
        type="button"
        className="absolute top-1/2 right-2 -translate-y-1/2 text-neutral-500"
        aria-label="Copy feed URL"
        onClick={() => {
          void navigator.clipboard?.writeText(value)
        }}
      >
        <Copy className="size-4" aria-hidden />
      </button>
    </div>
  )
}

export type DataImportExportDrawerProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  className?: string
}

export function DataImportExportDrawer({ open, onOpenChange, className }: DataImportExportDrawerProps) {
  const copy = DATA_IMPORT_EXPORT_DRAWER_COPY
  const [feedUrl, setFeedUrl] = useState(DATA_IMPORT_EXPORT_DEFAULT_FEED_URL)
  const [genericTab, setGenericTab] = useState("xml")
  const [bayutTab, setBayutTab] = useState("all-xml")

  const handleClose = () => onOpenChange(false)

  return (
    <SideDrawer open={open} onOpenChange={onOpenChange}>
      <SideDrawerContent size="lg" className={className}>
        <SideDrawerHeader
          title={
            <div className="flex items-center gap-3">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#FFF7ED] text-[#C2410C]">
                <ArrowDownToLine className="size-4" aria-hidden />
              </span>
              <span>{copy.dataImportTitle}</span>
            </div>
          }
          description={copy.dataImportSubtitle}
          onClose={handleClose}
          closeLabel="Close data import and export drawer"
        />

        <SideDrawerBody className="space-y-6">
          <section className="space-y-4">
            <div className="rounded-2xl border border-neutral-200 bg-white p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-sm font-semibold text-neutral-900 font-inter">{copy.xmlFeedImportTitle}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {copy.xmlFeedImportDescription}
                  </p>
                </div>
                <Badge className="shrink-0 border-[#FDE68A] bg-[#FFFBEB] text-[#B45309] hover:bg-[#FFFBEB]">
                  <X className="mr-1 size-3" aria-hidden />
                  {copy.notConfiguredLabel}
                </Badge>
              </div>

              <div className="relative mt-4">
                <Link2 className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-neutral-400" />
                <Input
                  value={feedUrl}
                  onChange={(event) => setFeedUrl(event.target.value)}
                  className="h-11 rounded-xl border-neutral-200 bg-white pl-10 text-sm shadow-none"
                />
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#EFF6FF] text-[#1D4ED8]">
                <ArrowUpFromLine className="size-4" aria-hidden />
              </span>
              <div>
                <h2 className="text-base font-semibold text-neutral-900 font-inter">{copy.dataExportTitle}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{copy.dataExportSubtitle}</p>
              </div>
            </div>

            <div className="space-y-4 rounded-2xl border border-neutral-200 bg-white p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-sm font-semibold text-neutral-900 font-inter">{copy.genericFeedTitle}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{copy.genericFeedDescription}</p>
                </div>
                <InfoTooltip trigger="compact" className="text-neutral-400" />
              </div>

              <FeedTabs
                tabs={DATA_IMPORT_EXPORT_GENERIC_TABS}
                value={genericTab}
                onChange={setGenericTab}
              />
              <CopyableFeedField value={DATA_IMPORT_EXPORT_GENERIC_FEED_URL} />
            </div>

            <div className="space-y-4 rounded-2xl border border-neutral-200 bg-white p-4">
              <div>
                <h3 className="text-sm font-semibold text-neutral-900 font-inter">{copy.bayutFeedTitle}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{copy.bayutFeedDescription}</p>
              </div>

              <FeedTabs tabs={DATA_IMPORT_EXPORT_BAYUT_TABS} value={bayutTab} onChange={setBayutTab} />
              <CopyableFeedField value={DATA_IMPORT_EXPORT_BAYUT_FEED_URL} />
            </div>
          </section>
        </SideDrawerBody>

        <SideDrawerFooter>
          <Button
            type="button"
            variant="outline"
            size="sm"
            className={cn(drawerFooterButtonClassName, "border-neutral-200 bg-white hover:bg-neutral-50")}
            onClick={handleClose}
          >
            {copy.cancelLabel}
          </Button>
          <Button
            type="button"
            size="sm"
            className={cn(drawerFooterButtonClassName, "bg-[#8B6E4E] text-white hover:bg-[#7A6044]")}
            onClick={handleClose}
          >
            {copy.saveLabel}
          </Button>
        </SideDrawerFooter>
      </SideDrawerContent>
    </SideDrawer>
  )
}

DataImportExportDrawer.displayName = "DataImportExportDrawer"
