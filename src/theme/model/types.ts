/** Serializable theme contract — safe to pass from Server → Client Components. */
export type ThemeLogo = {
  src: string
  alt: string
  /** When true, logo is not inverted on transparent header (project marks). */
  preserveColorsOnTransparentHeader?: boolean
}

export type ThemeColors = {
  primary: string
  primaryHover: string
  primaryForeground: string
  primarySoft: string
  secondary: string
  secondaryForeground: string
  background: string
  foreground: string
  muted: string
  mutedForeground: string
  card: string
  cardForeground: string
  border: string
  input: string
  accent: string
  accentForeground: string
  ring: string
  destructive: string
}

export type ThemeRadii = {
  sm: string
  md: string
  lg: string
}

export type ProjectTheme = {
  id: string
  name: string
  logo: ThemeLogo
  colors: ThemeColors
  radii?: ThemeRadii
}

export type ThemeId = ProjectTheme["id"] | "site-default"
