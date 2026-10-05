import {
  BarChartSquare02Icon,
  EyeIcon,
  SearchLgIcon,
  ShieldTickIcon,
} from "@/shared/icons"
import { Award, Building2, FileSignature, FileText, Globe2, HandCoins, Home, TrendingUp, Users, Zap } from "lucide-react"

export const MARKETING_FEATURE_ICONS = {
  award: Award,
  barChart: BarChartSquare02Icon,
  building: Building2,
  eye: EyeIcon,
  file: FileText,
  signature: FileSignature,
  globe: Globe2,
  home: Home,
  search: SearchLgIcon,
  shieldTick: ShieldTickIcon,
  trending: TrendingUp,
  handcoins: HandCoins,
  users: Users,
  zap: Zap,
} as const

export type MarketingFeatureIconKey = keyof typeof MARKETING_FEATURE_ICONS

/** @deprecated Use MARKETING_FEATURE_ICONS */
export const MARKETING_BENEFIT_ICONS = MARKETING_FEATURE_ICONS

/** @deprecated Use MarketingFeatureIconKey */
export type MarketingBenefitIconKey = MarketingFeatureIconKey
