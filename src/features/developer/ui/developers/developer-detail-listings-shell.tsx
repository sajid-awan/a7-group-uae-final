"use client"

import { useEffect, useRef, useState } from "react"

import type { DeveloperOffPlanProject } from "@/features/developer/services/content"

import { DeveloperDetailMapView } from "./developer-detail-map-view"
import { DeveloperDetailProjectsSection } from "./developer-detail-projects-section"
import { DeveloperDetailSearchSection } from "./developer-detail-search-section"

type DeveloperDetailListingsShellProps = {
  projects: DeveloperOffPlanProject[]
  placeholder?: string
}

export function DeveloperDetailListingsShell({
  projects,
  placeholder,
}: DeveloperDetailListingsShellProps) {
  const [view, setView] = useState<"list" | "map">("list")
  const mapAnchorRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (view !== "map" || !mapAnchorRef.current) return
    const header = document.querySelector("header") as HTMLElement | null
    const headerHeight = header ? header.getBoundingClientRect().height : 0
    const top = mapAnchorRef.current.getBoundingClientRect().top + window.scrollY - headerHeight
    window.scrollTo({ top: Math.max(0, top), behavior: "smooth" })
  }, [view])

  if (view === "map") {
    return (
      <div ref={mapAnchorRef}>
        <DeveloperDetailMapView
          projects={projects}
          placeholder={placeholder}
          onExitMap={() => setView("list")}
        />
      </div>
    )
  }

  return (
    <>
      <DeveloperDetailSearchSection
        view={view}
        onViewChange={setView}
        placeholder={placeholder}
      />
      <DeveloperDetailProjectsSection projects={projects} />
    </>
  )
}
