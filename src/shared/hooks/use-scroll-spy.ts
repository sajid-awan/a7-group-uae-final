"use client"

import { useCallback, useEffect, useState } from "react"

type UseScrollSpyOptions = {
  /** IntersectionObserver rootMargin. */
  rootMargin?: string
  /** Minimum intersection ratio to consider a section active. */
  threshold?: number | number[]
}

export function useScrollSpy(sectionIds: readonly string[], options: UseScrollSpyOptions = {}) {
  const { rootMargin = "-20% 0px -55% 0px", threshold = 0 } = options
  const [activeId, setActiveId] = useState(sectionIds[0] ?? "")

  useEffect(() => {
    if (sectionIds.length === 0) return

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id)
        }
      },
      { rootMargin, threshold }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [rootMargin, sectionIds, threshold])

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    el.scrollIntoView({ behavior: "smooth", block: "start" })
    setActiveId(id)
  }, [])

  return { activeId, scrollToSection }
}
