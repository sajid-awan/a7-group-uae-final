"use client"

import { useLayoutEffect, useRef, useState } from "react"

import type { DeveloperOffPlanProject } from "@/features/developer/services/content"
import { cn } from "@/shared/lib/cn"

import { DeveloperDetailMapPropertyCard } from "./developer-detail-map-property-card"
import { DeveloperMapMarker } from "./developer-map-marker"

const MAP_SEARCH_CLEARANCE = 120
const MAP_BOTTOM_CLEARANCE = 36
const CARD_GAP = 12
const CARD_FALLBACK_HEIGHT = 300

type CardPlacement = "above" | "below"

type DeveloperMapMarkerHostProps = {
  project: DeveloperOffPlanProject
  mapRootRef: React.RefObject<HTMLDivElement | null>
  isActive: boolean
  onSelect: (id: string) => void
}

function getMapInsets(mapEl: HTMLDivElement) {
  const mapRect = mapEl.getBoundingClientRect()
  return {
    mapRect,
    top: mapRect.top + MAP_SEARCH_CLEARANCE,
    bottom: mapRect.bottom - MAP_BOTTOM_CLEARANCE,
  }
}

function resolvePlacement(
  pinTipY: number,
  cardHeight: number,
  insets: ReturnType<typeof getMapInsets>
): CardPlacement {
  const required = cardHeight + CARD_GAP
  const spaceAbove = pinTipY - insets.top
  const spaceBelow = insets.bottom - pinTipY

  const fitsAbove = spaceAbove >= required
  const fitsBelow = spaceBelow >= required

  if (fitsAbove && fitsBelow) return spaceAbove >= spaceBelow ? "above" : "below"
  if (fitsAbove) return "above"
  if (fitsBelow) return "below"
  return spaceAbove >= spaceBelow ? "above" : "below"
}

function clampCardOffset(
  cardEl: HTMLElement,
  insets: ReturnType<typeof getMapInsets>
): number {
  const cardRect = cardEl.getBoundingClientRect()
  let offset = 0

  if (cardRect.bottom > insets.bottom) {
    offset -= cardRect.bottom - insets.bottom
  }
  if (cardRect.top < insets.top) {
    offset += insets.top - cardRect.top
  }

  return offset
}

export function DeveloperMapMarkerHost({
  project,
  mapRootRef,
  isActive,
  onSelect,
}: DeveloperMapMarkerHostProps) {
  const hostRef = useRef<HTMLDivElement | null>(null)
  const cardRef = useRef<HTMLDivElement | null>(null)
  const pos = project.mapPosition!

  const [placement, setPlacement] = useState<CardPlacement>("above")
  const [cardOffsetY, setCardOffsetY] = useState(0)

  useLayoutEffect(() => {
    if (!isActive) {
      return
    }

    const mapEl = mapRootRef.current
    const hostEl = hostRef.current
    if (!mapEl || !hostEl) return

    function updateLayout() {
      if (!mapEl || !hostEl) return

      const insets = getMapInsets(mapEl)
      const pinTipY = hostEl.getBoundingClientRect().bottom
      const cardHeight = cardRef.current?.offsetHeight ?? CARD_FALLBACK_HEIGHT
      const next = resolvePlacement(pinTipY, cardHeight, insets)

      setPlacement((prev) => (prev === next ? prev : next))

      requestAnimationFrame(() => {
        if (!cardRef.current || !mapEl || !hostEl) return

        const liveInsets = getMapInsets(mapEl)
        const livePinTipY = hostEl.getBoundingClientRect().bottom
        const liveHeight = cardRef.current.offsetHeight
        const cardRect = cardRef.current.getBoundingClientRect()
        const isBelow = cardRect.top >= livePinTipY - 2

        if (isBelow && cardRect.bottom > liveInsets.bottom + 1) {
          const spaceAbove = livePinTipY - liveInsets.top
          if (spaceAbove >= liveHeight + CARD_GAP) {
            setPlacement("above")
          }
        } else if (!isBelow && cardRect.top < liveInsets.top - 1) {
          const spaceBelow = liveInsets.bottom - livePinTipY
          if (spaceBelow >= liveHeight + CARD_GAP) {
            setPlacement("below")
          }
        }

        requestAnimationFrame(() => {
          if (!cardRef.current || !mapEl) return
          const offset = clampCardOffset(cardRef.current, getMapInsets(mapEl))
          setCardOffsetY((prev) => (prev === offset ? prev : offset))
        })
      })
    }

    updateLayout()

    const observer = new ResizeObserver(updateLayout)
    observer.observe(mapEl)
    if (cardRef.current) observer.observe(cardRef.current)

    window.addEventListener("resize", updateLayout)
    return () => {
      observer.disconnect()
      window.removeEventListener("resize", updateLayout)
    }
  }, [isActive, mapRootRef, project.id])

  const renderedPlacement = isActive ? placement : "above"
  const renderedCardOffsetY = isActive ? cardOffsetY : 0

  return (
    <div
      ref={hostRef}
      data-map-marker-host
      className={cn(
        "group/marker pointer-events-auto absolute",
        isActive ? "z-50" : "z-20"
      )}
      style={{
        left: `${pos.left}%`,
        top: `${pos.top}%`,
        transform: "translate(-50%, -100%)",
      }}
    >
      <div data-map-pin className="relative z-10 shrink-0">
        <DeveloperMapMarker
          active={isActive}
          aria-label={`${project.title} — ${isActive ? "selected" : "show details"}`}
          aria-pressed={isActive}
          onClick={() => onSelect(project.id)}
        />
      </div>

      {isActive ? (
        <div
          ref={cardRef}
          data-map-popup
          style={{ transform: `translate(-50%, ${renderedCardOffsetY}px)` }}
          className={cn(
            "absolute left-1/2 z-[60] w-max",
            renderedPlacement === "above" ? "bottom-full mb-3" : "top-full mt-3"
          )}
        >
          <DeveloperDetailMapPropertyCard project={project} />
        </div>
      ) : null}
    </div>
  )
}
