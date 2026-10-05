"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

import { SiteHeader } from "@/shared/layout/site-header"
import { useProjectTheme } from "@/shared/hooks/use-project-theme"
import { defaultSiteHeaderCta, defaultSiteHeaderNav } from "@/shared/content/navigation/site-header-nav"
import { cn } from "@/shared/lib/cn"

/** Marketing shell header — transparent and fixed on `/` and project pages, turns solid on scroll. */
export function HeaderMain() {
  const pathname = usePathname()
  const { theme, isProjectTheme } = useProjectTheme()
  const isPropertyDetailPage = /^\/properties\/[^/]+$/.test(pathname)
  const isTransparentPage =
    pathname === "/" ||
    pathname.startsWith("/projects/") ||
    pathname.startsWith("/off-plan/") ||
    isPropertyDetailPage
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    if (!isTransparentPage) return
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [isTransparentPage])

  const isTransparent = isTransparentPage && !scrolled

  return (
    <SiteHeader
      variant={isTransparent ? "transparent" : "solid"}
      nav={defaultSiteHeaderNav}
      {...defaultSiteHeaderCta}
      logoSrc={isProjectTheme ? theme.logo.src : undefined}
      logoAlt={isProjectTheme ? theme.logo.alt : undefined}
      className={cn(isTransparentPage && "fixed inset-x-0 top-0 z-50")}
    />
  )
}
