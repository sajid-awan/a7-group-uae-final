import { Building2, Globe2, HandCoins, Home } from "lucide-react"

export const MARKETING_SERVICE_ICONS = {
  home: Home,
  building: Building2,
  globe: Globe2,
  handcoins: HandCoins,
} as const

export type MarketingServiceIconKey = keyof typeof MARKETING_SERVICE_ICONS
