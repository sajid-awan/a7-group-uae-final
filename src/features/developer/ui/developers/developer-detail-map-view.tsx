"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { ArrowLeft } from "lucide-react"

import { PropertySearchBar } from "@/features/search/ui/global-search-bar"
import type { DeveloperOffPlanProject } from "@/features/developer/services/content"
import { buildDeveloperMapEmbedUrl } from "@/shared/lib/maps"
import { cn } from "@/shared/lib/cn"

import { DeveloperMapMarkerHost } from "./developer-map-marker-host"

type DeveloperDetailMapViewProps = {
  projects: DeveloperOffPlanProject[]
  placeholder?: string
  onExitMap: () => void
  className?: string
}

export function DeveloperDetailMapView({
  projects,
  placeholder = "Area, Developer, Project",
  onExitMap,
  className,
}: DeveloperDetailMapViewProps) {
  const mapRef = useRef<HTMLDivElement | null>(null)
  const [selectedId, setSelectedId] = useState<string | null>(null)

  const mapProjects = useMemo(
    () => projects.filter((p) => p.mapPosition),
    [projects]
  )

  const clearSelected = useCallback(() => setSelectedId(null), [])

  const handleSelect = useCallback((id: string) => {
    setSelectedId((current) => (current === id ? null : id))
  }, [])

  useEffect(() => {
    function onPointerDown(event: MouseEvent) {
      const target = event.target as Node
      if (!mapRef.current?.contains(target)) return
      const markerHost = (target as HTMLElement).closest("[data-map-marker-host]")
      const popup = (target as HTMLElement).closest("[data-map-popup]")
      if (!markerHost && !popup) clearSelected()
    }
    document.addEventListener("mousedown", onPointerDown)
    return () => document.removeEventListener("mousedown", onPointerDown)
  }, [clearSelected])

  return (
    <section className={cn("relative bg-white", className)} aria-label="Map view">
      <div
        ref={mapRef}
        className="relative w-full min-h-[min(104rem,98dvh)] h-[min(104rem,calc(100dvh-3rem))]"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 grayscale contrast-[0.92] saturate-[0.15]">
            <iframe
              title="Developer projects map"
              src={buildDeveloperMapEmbedUrl()}
              className="pointer-events-none absolute inset-0 h-full w-full scale-[1.02] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="absolute inset-0 z-[1] bg-white/25" aria-hidden />
        </div>

        <div className="absolute inset-x-0 top-0 z-20 pt-4 sm:pt-5">
          <div className="container mx-auto px-4">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
              <button
                type="button"
                onClick={onExitMap}
                className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-border/90 bg-white px-4 py-2.5 text-sm font-medium text-a7-black shadow-sm transition-colors hover:bg-muted/40"
              >
                <ArrowLeft className="size-4" aria-hidden />
                Exit Map View
              </button>
              <div className="min-w-0 flex-1">
                <PropertySearchBar placeholder={placeholder} />
              </div>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 z-10">
          {mapProjects.map((project) => (
            <DeveloperMapMarkerHost
              key={project.id}
              project={project}
              mapRootRef={mapRef}
              isActive={project.id === selectedId}
              onSelect={handleSelect}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
