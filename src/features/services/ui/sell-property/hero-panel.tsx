"use client"

import { Banknote, CalendarDays, Home } from "lucide-react"

import { MarketingSideHeroPanel } from "@/shared/ui/marketing"

const HERO_STATS = [
  { value: "AED 6M", label: "Saved for our customers", icon: Banknote },
  { value: "9,271", label: "Days saved for our customers", icon: CalendarDays },
  { value: "AED 3B", label: "Total sales volume", icon: Home },
] as const

const HERO_BACKGROUND_IMAGE =
  "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=80"

export function SellPropertyHeroPanel() {
  return (
    <MarketingSideHeroPanel
      backgroundImageUrl={HERO_BACKGROUND_IMAGE}
      eyebrow="Sell Your Property in Dubai"
      titleLines={["Sell Faster,", "Save Thousands"]}
      description="Reach more buyers and sellers with A7 Properties unmatched innovation."
      stats={HERO_STATS}
    />
  )
}
