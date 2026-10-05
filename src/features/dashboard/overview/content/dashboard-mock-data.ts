import {
  CHART_COLORS,
  COMMUNICATION_SERIES_COLORS,
  LEAD_SOURCE_PLATFORM_COLORS,
  LEAD_SOURCE_TREND_COLORS,
} from "@/shared/ui/dashboard"

// ─── Stat cards ───────────────────────────────────────────────────────────────

export const dashboardStatValues = [
  { value: 248, label: "Total Transactions", iconKey: "wallet" as const, iconTone: "gold" as const },
  { value: 156, label: "Total Listings", iconKey: "home" as const, iconTone: "blue" as const },
  { value: 268, label: "Total Leads", iconKey: "users" as const, iconTone: "orange" as const },
  { value: 94, label: "Call Leads", iconKey: "phone" as const, iconTone: "green" as const },
]

// ─── Communication summary ───────────────────────────────────────────────────

export const communicationPerformanceData = [
  { month: "Jan", date: "Wed, Jan 15, 2025", answered: 48, missed: 32, replied: 26, sent: 42, delivered: 38 },
  { month: "Feb", date: "Sat, Feb 8, 2025", answered: 52, missed: 28, replied: 30, sent: 48, delivered: 44 },
  { month: "Mar", date: "Mon, Mar 10, 2025", answered: 55, missed: 35, replied: 34, sent: 52, delivered: 47 },
  { month: "Apr", date: "Thu, Apr 17, 2025", answered: 46, missed: 40, replied: 28, sent: 45, delivered: 41 },
  { month: "May", date: "Tue, May 20, 2025", answered: 60, missed: 38, replied: 42, sent: 58, delivered: 53 },
  { month: "Jun", date: "Fri, Jun 13, 2025", answered: 58, missed: 44, replied: 38, sent: 55, delivered: 50 },
  { month: "Jul", date: "Sun, Jul 6, 2025", answered: 50, missed: 36, replied: 32, sent: 49, delivered: 45 },
  { month: "Aug", date: "Wed, Aug 27, 2025", answered: 64, missed: 42, replied: 46, sent: 62, delivered: 57 },
  { month: "Sep", date: "Thu, Sep 26, 2025", answered: 54, missed: 48, replied: 36, sent: 53, delivered: 48 },
  { month: "Oct", date: "Sat, Oct 11, 2025", answered: 66, missed: 40, replied: 48, sent: 64, delivered: 59 },
  { month: "Nov", date: "Mon, Nov 24, 2025", answered: 56, missed: 46, replied: 38, sent: 54, delivered: 49 },
  { month: "Dec", date: "Tue, Dec 16, 2025", answered: 62, missed: 34, replied: 44, sent: 60, delivered: 55 },
]

export const communicationXAxisTicks = ["Jan", "Mar", "May", "Jul", "Sep", "Nov", "Dec"]

export const communicationSeries = [
  { key: "answered", label: "Answer", color: COMMUNICATION_SERIES_COLORS.answer },
  { key: "missed", label: "Missed", color: COMMUNICATION_SERIES_COLORS.missed },
  { key: "replied", label: "Replied", color: COMMUNICATION_SERIES_COLORS.replied },
  { key: "sent", label: "Sent", color: COMMUNICATION_SERIES_COLORS.sent },
  { key: "delivered", label: "Delivered", color: COMMUNICATION_SERIES_COLORS.delivered },
]

export const communicationChartSeries = [
  communicationSeries[2],
  communicationSeries[3],
  communicationSeries[4],
  communicationSeries[0],
  communicationSeries[1],
]

export const communicationEfficiency = [
  { value: 68, label: "Call Connections", suffix: "%", color: CHART_COLORS.brown },
  { value: 9, label: "Avg Response Time", suffix: " min", max: 30, color: CHART_COLORS.yellow },
]

// ─── Lead source ─────────────────────────────────────────────────────────────

const LEAD_SOURCE_TOTAL = 172

function leadShare(leads: number) {
  return Number(((leads / LEAD_SOURCE_TOTAL) * 100).toFixed(2))
}

function leadBarHeight(leads: number) {
  return Math.round((leads / 104) * 920)
}

export const leadSourceData = [
  {
    platform: "Bayut",
    leads: 104,
    share: leadShare(104),
    color: LEAD_SOURCE_PLATFORM_COLORS.Bayut,
    trendTone: "green" as const,
    trendColor: LEAD_SOURCE_TREND_COLORS.green,
    trend: [{ value: 8 }, { value: 14 }, { value: 18 }, { value: 22 }, { value: 28 }],
  },
  {
    platform: "Property Finder",
    leads: 31,
    share: leadShare(31),
    color: LEAD_SOURCE_PLATFORM_COLORS["Property Finder"],
    trendTone: "orange" as const,
    trendColor: LEAD_SOURCE_TREND_COLORS.orange,
    trend: [{ value: 16 }, { value: 12 }, { value: 18 }, { value: 10 }, { value: 14 }],
  },
  {
    platform: "Instagram",
    leads: 17,
    share: leadShare(17),
    color: LEAD_SOURCE_PLATFORM_COLORS.Instagram,
    trendTone: "red" as const,
    trendColor: LEAD_SOURCE_TREND_COLORS.red,
    trend: [{ value: 12 }, { value: 18 }, { value: 10 }, { value: 15 }, { value: 8 }],
  },
  {
    platform: "Facebook",
    leads: 8,
    share: leadShare(8),
    color: LEAD_SOURCE_PLATFORM_COLORS.Facebook,
    trendTone: "green" as const,
    trendColor: LEAD_SOURCE_TREND_COLORS.emerald,
    trend: [{ value: 6 }, { value: 9 }, { value: 11 }, { value: 8 }, { value: 12 }],
  },
  {
    platform: "Dubizzle",
    leads: 12,
    share: leadShare(12),
    color: LEAD_SOURCE_PLATFORM_COLORS.Dubizzle,
    trendTone: "orange" as const,
    trendColor: LEAD_SOURCE_TREND_COLORS.orange,
    trend: [{ value: 5 }, { value: 8 }, { value: 7 }, { value: 10 }, { value: 9 }],
  },
]

export const leadSourceChartData = leadSourceData.map((row) => ({
  platform: row.platform,
  value: leadBarHeight(row.leads),
  labelValue: row.leads,
  share: row.share,
  color: row.color,
}))

// ─── Leads by type ───────────────────────────────────────────────────────────

export const leadsByTypeData = [
  { name: "Rentals", value: 182, color: CHART_COLORS.categoryBlue },
  { name: "Buyer Secondary", value: 47, color: CHART_COLORS.categoryGreen },
  { name: "Seller Secondary", value: 24, color: CHART_COLORS.categoryYellow },
  { name: "Off-Plan", value: 15, color: CHART_COLORS.categoryRed },
]

// ─── Stage distribution ──────────────────────────────────────────────────────

export const stageDistributionData = [
  {
    category: "Pipeline",
    rentals: 180,
    buyerSecondary: 5,
    sellerSecondary: 3,
    offPlan: 2,
  },
]

export const stageCategorySeries = [
  { key: "rentals", label: "Rentals", color: CHART_COLORS.categoryBlue },
  { key: "buyerSecondary", label: "Buyer Secondary", color: CHART_COLORS.categoryGreen },
  { key: "sellerSecondary", label: "Seller Secondary", color: CHART_COLORS.categoryYellow },
  { key: "offPlan", label: "Off-Plan", color: CHART_COLORS.categoryRed },
]

export const stageDistributionTooltips: Record<
  string,
  { title: string; stages: { label: string; value: number }[] }
> = {
  rentals: {
    title: "Rentals",
    stages: [
      { label: "Qualified", value: 180 },
      { label: "View/Booking", value: 0 },
      { label: "Tenancy Contract", value: 0 },
      { label: "Financial Confirmed", value: 0 },
      { label: "Ejari", value: 0 },
    ],
  },
  buyerSecondary: {
    title: "Buyer Secondary",
    stages: [
      { label: "Qualified", value: 5 },
      { label: "View/Booking", value: 0 },
      { label: "Tenancy Contract", value: 0 },
      { label: "Financial Confirmed", value: 0 },
      { label: "Ejari", value: 0 },
    ],
  },
  sellerSecondary: {
    title: "Seller Secondary",
    stages: [
      { label: "Qualified", value: 3 },
      { label: "View/Booking", value: 0 },
      { label: "Tenancy Contract", value: 0 },
      { label: "Financial Confirmed", value: 0 },
      { label: "Ejari", value: 0 },
    ],
  },
  offPlan: {
    title: "Off-Plan",
    stages: [
      { label: "Qualified", value: 2 },
      { label: "View/Booking", value: 0 },
      { label: "Tenancy Contract", value: 0 },
      { label: "Financial Confirmed", value: 0 },
      { label: "Ejari", value: 0 },
    ],
  },
}

// ─── Expected revenue ────────────────────────────────────────────────────────

export const revenueByTypeData = [
  { type: "Rentals", expected: 18_500_000, revenue: 14_200_000 },
  { type: "Buyer Secondary", expected: 21_321_987, revenue: 16_450_000 },
  { type: "Seller Secondary", expected: 9_750_000, revenue: 5_820_000 },
  { type: "Off-Plan", expected: 6_200_000, revenue: 2_340_000 },
]

export const revenueSeries = [
  { key: "expected", label: "Expected", color: CHART_COLORS.categoryBlue },
  { key: "revenue", label: "Revenue", color: CHART_COLORS.categoryGreen },
]

// ─── Conversion rates ────────────────────────────────────────────────────────

export const conversionRatesData = [
  { name: "Rentals", value: 42, color: CHART_COLORS.categoryBlue },
  { name: "Buyer Secondary", value: 38, color: CHART_COLORS.categoryGreen },
  { name: "Seller Secondary", value: 12, color: CHART_COLORS.categoryYellow },
  { name: "Off-Plan", value: 8, color: CHART_COLORS.categoryRed },
]

// ─── Calendar (see dashboard-calendar-data.ts) ───────────────────────────────
