"use client"

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react"

import { SITE_DEFAULT_THEME } from "@/theme/model/themes"
import type { ProjectTheme } from "@/theme/model/types"

type ThemeContextValue = {
  activeTheme: ProjectTheme
  setActiveTheme: (theme: ProjectTheme | null) => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

export function ThemeContextProvider({ children }: { children: ReactNode }) {
  const [activeTheme, setActiveThemeState] = useState<ProjectTheme>(SITE_DEFAULT_THEME)

  const setActiveTheme = useCallback((theme: ProjectTheme | null) => {
    setActiveThemeState(theme ?? SITE_DEFAULT_THEME)
  }, [])

  const value = useMemo(
    () => ({ activeTheme, setActiveTheme }),
    [activeTheme, setActiveTheme]
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useThemeContext() {
  const ctx = useContext(ThemeContext)
  if (!ctx) {
    throw new Error("useThemeContext must be used within ThemeContextProvider")
  }
  return ctx
}
