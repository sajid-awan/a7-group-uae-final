"use client"

import { usePathname } from "next/navigation"

import { FooterMain } from "@/shared/layout/footer-main"

/** Renders the main site footer; omitted on focused flows (e.g. sell-property). */
export function LayoutFooter() {
  const pathname = usePathname() || ""

  if (pathname.startsWith("/sell-property")) {
    return null
  }

  return <FooterMain />
}
