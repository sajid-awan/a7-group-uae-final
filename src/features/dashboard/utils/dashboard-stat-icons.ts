import type { ComponentType } from "react"

import type { DashboardStatIconKey } from "@/features/dashboard/content/dashboard-content-types"
import Wallet02Icon from "@/shared/icons/generated/Wallet02Icon"
import Home04Icon from "@/shared/icons/generated/Home04Icon"
import UserCheck02Icon from "@/shared/icons/generated/UserCheck02Icon"
import { PhoneCall01Icon } from "@/shared/icons"

export const DASHBOARD_STAT_ICONS: Record<DashboardStatIconKey, ComponentType<{ className?: string; size?: number | string }>> = {
  wallet: Wallet02Icon,
  home: Home04Icon,
  users: UserCheck02Icon,
  phone: PhoneCall01Icon,
}