"use client"

import { usePathname } from "next/navigation"

import { HeaderMain } from "@/shared/layout/header-main"

/** Renders the main site header; omitted on focused flows (e.g. sell-property). */
export function LayoutHeader() {
  const pathname = usePathname() || ""

  if (pathname.startsWith("/sell-property")) {
    return null
  }

  return <HeaderMain />
}
