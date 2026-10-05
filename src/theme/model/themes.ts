import { generatePaletteFromColor } from "@/theme/lib/generate-palette-from-color"
import type { ProjectTheme, ThemeColors } from "@/theme/model/types"

const SITE_COLORS: ThemeColors = {
  primary: "#b68c40",
  primaryHover: "#a67d38",
  primaryForeground: "#ffffff",
  primarySoft: "#f8f1e1",
  secondary: "#042938",
  secondaryForeground: "#f4f4f5",
  background: "#f4f4f5",
  foreground: "#042938",
  muted: "#e8e9ea",
  mutedForeground: "#3d5661",
  card: "#ffffff",
  cardForeground: "#042938",
  border: "color-mix(in srgb, #042938 12%, #f4f4f5)",
  input: "color-mix(in srgb, #042938 14%, #f4f4f5)",
  accent: "#dde6e3",
  accentForeground: "#042938",
  ring: "#b68c40",
  destructive: "#b42318",
}

type ProjectPalette = Pick<
  ThemeColors,
  "primary" | "primaryHover" | "primarySoft" | "secondary" | "secondaryForeground"
> &
  Partial<ThemeColors>

function buildTheme(
  id: string,
  name: string,
  logoSrc: string,
  logoAlt: string,
  palette: ProjectPalette,
  options?: { preserveLogoColors?: boolean }
): ProjectTheme {
  return {
    id,
    name,
    logo: {
      src: logoSrc,
      alt: logoAlt,
      preserveColorsOnTransparentHeader: options?.preserveLogoColors ?? true,
    },
    colors: {
      ...SITE_COLORS,
      ...palette,
      primaryForeground: palette.primaryForeground ?? "#ffffff",
      ring: palette.ring ?? palette.primary,
      accent: palette.accent ?? palette.primarySoft,
      accentForeground: palette.accentForeground ?? palette.secondary,
      muted: palette.muted ?? palette.primarySoft,
      // Structural borders stay site-neutral; brand color applies to primary/actions only.
      border: SITE_COLORS.border,
      input: SITE_COLORS.input,
    },
    radii: {
      sm: "0.375rem",
      md: "0.625rem",
      lg: "1rem",
    },
  }
}

/** Pick one brand color — all tokens below are generated automatically. */
function projectThemeFromColor(
  id: string,
  name: string,
  logoSrc: string,
  logoAlt: string,
  brandColor: string,
  options?: { secondary?: string; preserveLogoColors?: boolean }
) {
  return buildTheme(id, name, logoSrc, logoAlt, generatePaletteFromColor(brandColor, options), {
    preserveLogoColors: options?.preserveLogoColors,
  })
}

/** Default A7 marketing theme (restored when leaving a project page). */
export const SITE_DEFAULT_THEME: ProjectTheme = buildTheme(
  "site-default",
  "A Seven Properties",
  "/assets/brand/logo.svg",
  "A Seven Properties",
  {
    primary: SITE_COLORS.primary,
    primaryHover: SITE_COLORS.primaryHover,
    primarySoft: SITE_COLORS.primarySoft,
    secondary: SITE_COLORS.secondary,
    secondaryForeground: SITE_COLORS.secondaryForeground,
    background: SITE_COLORS.background,
    foreground: SITE_COLORS.foreground,
    muted: SITE_COLORS.muted,
    mutedForeground: SITE_COLORS.mutedForeground,
    card: SITE_COLORS.card,
    cardForeground: SITE_COLORS.cardForeground,
    accent: SITE_COLORS.accent,
    accentForeground: SITE_COLORS.accentForeground,
    border: SITE_COLORS.border,
    input: SITE_COLORS.input,
    ring: SITE_COLORS.ring,
  },
  { preserveLogoColors: false }
)

/**
 * Off-plan themes — change only `brandColor` (and optional `secondary`) per project.
 * Example: projectThemeFromColor(..., "#E07A5F", { secondary: "#1A3A4A" })
 */
export const PROJECT_THEMES: Record<string, ProjectTheme> = {
  "damac-district": projectThemeFromColor(
    "damac-district",
    "Damac District",
    "/assets/developers/azizi.png",
    "Damac District",
    "#C9A227"
  ),

  "the-hillgate": projectThemeFromColor(
    "the-hillgate",
    "The Hillgate",
    "/assets/developers/binghatti.png",
    "The Hillgate",
    "#3B82C4"
  ),

  "baystar-by-vida": projectThemeFromColor(
    "baystar-by-vida",
    "Baystar by Vida",
    "/assets/developers/dubai-properties.png",
    "Baystar by Vida",
    "#1A9B88"
  ),

  "silva-at-dubai-creek": projectThemeFromColor(
    "silva-at-dubai-creek",
    "Silva at Dubai Creek",
    "/assets/developers/azizi.png",
    "Silva at Dubai Creek",
    "#C45C3E"
  ),

  "waldorf-astoria-residences": projectThemeFromColor(
    "waldorf-astoria-residences",
    "Waldorf Astoria Residences",
    "/assets/developers/dubai-properties.png",
    "Waldorf Astoria Residences",
    "#1B3A6B"
  ),

  "palm-jumeirah-villas": projectThemeFromColor(
    "palm-jumeirah-villas",
    "Palm Jumeirah Signature Villas",
    "/assets/developers/azizi.png",
    "Palm Jumeirah Signature Villas",
    "#E07A5F",
    { secondary: "#1A3A4A" }
  ),

  "bvlgari-beachfront": projectThemeFromColor(
    "bvlgari-beachfront",
    "Bvlgari Beachfront",
    "/assets/developers/dubai-properties.png",
    "Bvlgari Beachfront",
    "#1B2C5E",
    { secondary: "#0D1A36" }
  ),

  "bugatti-residences-business-bay": projectThemeFromColor(
    "bugatti-residences-business-bay",
    "Bugatti Residences",
    "/assets/developers/binghatti.png",
    "Bugatti Residences",
    "#C0A050",
    { secondary: "#1A1A1A" }
  ),
}

export function getProjectTheme(projectId: string): ProjectTheme | null {
  return PROJECT_THEMES[projectId] ?? null
}
