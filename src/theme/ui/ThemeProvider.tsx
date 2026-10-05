"use client"

import type { ReactNode } from "react"

import { ThemeContextProvider } from "@/theme/model/theme-context"

export function ThemeProvider({ children }: { children: ReactNode }) {
  return <ThemeContextProvider>{children}</ThemeContextProvider>
}
