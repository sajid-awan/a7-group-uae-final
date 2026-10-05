"use client"

import { useState } from "react"

import { MARKETING_FEATURE_CARDS, MARKETING_PAGE_COPY } from "../content/marketing-content"
import { MarketingFeatureCard } from "./marketing-feature-card"
import { MarketingButton } from "./marketing-button"
import { MarketingVideoUpload } from "./marketing-video-upload"
import { cn } from "@/shared/lib/cn"

export type MarketingViewProps = {
  className?: string
  onTryItNow?: () => void
  onFeatureSelect?: (featureId: string) => void
  onVideosUpload?: (featureId: string, files: File[]) => void
}

export function MarketingView({
  className,
  onTryItNow,
  onFeatureSelect,
  onVideosUpload,
}: MarketingViewProps) {
  const copy = MARKETING_PAGE_COPY
  const [activeFeatureId, setActiveFeatureId] = useState<string | null>(null)

  const openUpload = (featureId: string) => {
    onFeatureSelect?.(featureId)
    if (featureId === "scene-by-scene") return
    setActiveFeatureId(featureId)
  }

  const handleFilesSelected = (files: File[]) => {
    if (!activeFeatureId || !files.length) return
    onVideosUpload?.(activeFeatureId, files)
  }

  const handleTryItNow = () => {
    onTryItNow?.()
  }

  return (
    <div className={cn("mx-auto flex w-full max-w-5xl flex-col items-center", className)}>
      <div className="w-full text-center">
        <h1 className="font-inter text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
          {copy.title}
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground md:text-base">
          {copy.subtitle}
        </p>
        {!activeFeatureId ? (
          <MarketingButton
            tone="outline"
            shape="pill"
            className="mt-6 gap-2"
            onClick={handleTryItNow}
          >
            <span className="size-2 rounded-full bg-[#22C55E]" aria-hidden />
            {copy.tryItNowLabel}
          </MarketingButton>
        ) : null}
      </div>

      {activeFeatureId ? (
        <div className="mt-10 w-full min-w-0">
          <MarketingVideoUpload
            className="mx-auto w-full max-w-2xl"
            onFilesSelected={handleFilesSelected}
          />
        </div>
      ) : (
        <div className="mt-10 grid w-full grid-cols-1 gap-5 md:grid-cols-2">
          {MARKETING_FEATURE_CARDS.map((feature) => (
            <MarketingFeatureCard key={feature.id} feature={feature} onClick={() => openUpload(feature.id)} />
          ))}
        </div>
      )}
    </div>
  )
}

MarketingView.displayName = "MarketingView"
