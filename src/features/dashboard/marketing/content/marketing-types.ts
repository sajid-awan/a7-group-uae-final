import type { LucideIcon } from "lucide-react"

export type MarketingFeatureCard = {
  id: string
  title: string
  description: string
  icon: LucideIcon
  iconClassName: string
  cardClassName: string
  disabled?: boolean
}
