"use client"

import { useThemeContext } from "@/theme"

/** Active project theme for header, cards, buttons, and sections. */
export function useProjectTheme() {
  const { activeTheme, setActiveTheme } = useThemeContext()

  return {
    theme: activeTheme,
    colors: activeTheme.colors,
    logo: activeTheme.logo,
    isProjectTheme: activeTheme.id !== "site-default",
    setTheme: setActiveTheme,
  }
}
