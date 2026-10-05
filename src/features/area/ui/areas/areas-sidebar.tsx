"use client"

import { Flame } from "lucide-react"
import { motion } from "framer-motion"
import type { ComponentType } from "react"

import {
  Briefcase01Icon,
  CheckVerified01Icon,
  Globe04Icon,
  PieChart02Icon,
  ShoppingBag01Icon,
  Star01Icon,
  SunriseIcon,
  Users01Icon,
} from "@/shared/icons"
import type { IconProps } from "@/shared/icons/types"
import { AREA_CATEGORIES, type AreaCategorySlug } from "@/features/area/services/content"
import { cn } from "@/shared/lib/cn"

type CategoryIcon = ComponentType<IconProps>

const CATEGORY_ICONS: Record<AreaCategorySlug, CategoryIcon | "flame"> = {
  popular: "flame",
  "budget-friendly": CheckVerified01Icon,
  "business-friendly": Briefcase01Icon,
  "eco-sustainability": Globe04Icon,
  expats: ShoppingBag01Icon,
  "family-friendly": Users01Icon,
  "beach-areas": SunriseIcon,
  investment: PieChart02Icon,
  luxury: Star01Icon,
}

type AreasSidebarProps = {
  className?: string
}

function renderCategoryIcon(slug: AreaCategorySlug, isActive: boolean) {
  const iconClass = cn("shrink-0", isActive ? "text-white" : "text-a7-black")
  const icon = CATEGORY_ICONS[slug]

  if (icon === "flame") {
    return <Flame className={cn("size-6", iconClass)} strokeWidth={1.5} aria-hidden />
  }

  const Icon = icon
  return <Icon size={24} className={iconClass} aria-hidden />
}

const ACTIVE_CATEGORY: AreaCategorySlug = "popular"

/** Static category list (display only — categories don't filter). */
export function AreasSidebar({ className }: AreasSidebarProps) {

  return (
    <nav className={cn("flex flex-col gap-2", className)} aria-label="Area categories">
      {AREA_CATEGORIES.map((category, index) => {
        const isActive = category.slug === ACTIVE_CATEGORY

        return (
          <motion.div
            key={category.slug}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.05 + index * 0.06 }}
          >
            <div
              className={cn(
                "flex items-center justify-between gap-3 rounded-xl px-4 py-3.5 text-sm font-medium",
                isActive ? "bg-a7-black text-white" : "bg-a7-panel-surface text-a7-black"
              )}
            >
              <span className="min-w-0 flex-1">{category.label}</span>
              {renderCategoryIcon(category.slug, isActive)}
            </div>
          </motion.div>
        )
      })}
    </nav>
  )
}
