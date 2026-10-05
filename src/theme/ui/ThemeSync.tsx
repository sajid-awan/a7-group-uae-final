"use client"

import { useLayoutEffect } from "react"

import { applyTheme, clearTheme } from "@/theme/lib/apply-theme"
import { useThemeContext } from "@/theme/model/theme-context"
import type { ProjectTheme } from "@/theme/model/types"

type ThemeSyncProps = {
  theme: ProjectTheme | null
}


export function ThemeSync({ theme }: ThemeSyncProps) {
  const { setActiveTheme } = useThemeContext()

  useLayoutEffect(() => {
    const root = document.documentElement

    if (theme) {
      applyTheme(root, theme)
    } else {
      clearTheme(root)
    }

    setActiveTheme(theme)

    return () => {
      clearTheme(root)
      setActiveTheme(null)
    }
  }, [theme, setActiveTheme])

  return null
}
