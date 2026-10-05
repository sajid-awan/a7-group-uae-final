export const CHART_COLORS = {
  primary: "var(--chart-1)",
  secondary: "var(--chart-2)",
  tertiary: "var(--chart-3)",
  quaternary: "var(--chart-4)",
  quinary: "var(--chart-5)",
  blue: "#3b82f6",
  green: "#4CAF50",
  purple: "#9C27B0",
  orange: "#f59e0b",
  red: "#E53935",
  pink: "#D81B60",
  teal: "#14b8a6",
  gray: "#4B4B4B",
  brown: "#8D6E63",
  yellow: "#FACC15",
  categoryBlue: "#3B82F6",
  categoryGreen: "#22C55E",
  categoryYellow: "#FACC15",
  categoryRed: "#EF4444",
} as const

export const LEAD_CATEGORY_COLORS = {
  rentals: CHART_COLORS.categoryBlue,
  buyerSecondary: CHART_COLORS.categoryGreen,
  sellerSecondary: CHART_COLORS.categoryYellow,
  offPlan: CHART_COLORS.categoryRed,
} as const

export const CHART_PALETTE = [
  CHART_COLORS.gray,
  CHART_COLORS.red,
  CHART_COLORS.purple,
  CHART_COLORS.green,
  CHART_COLORS.pink,
  CHART_COLORS.blue,
  CHART_COLORS.orange,
  CHART_COLORS.teal,
] as const

export const LEAD_SOURCE_PLATFORM_COLORS: Record<string, string> = {
  Bayut: "#4B5563",
  "Property Finder": "#EF4444",
  Instagram: "#8B5CF6",
  Facebook: "#22C55E",
  Dubizzle: "#EC4899",
}

export const LEAD_SOURCE_TREND_COLORS = {
  green: "#22C55E",
  orange: "#F59E0B",
  red: "#EF4444",
  emerald: "#4ADE80",
} as const

export const COMMUNICATION_SERIES_COLORS = {
  answer: CHART_COLORS.gray,
  missed: CHART_COLORS.red,
  replied: CHART_COLORS.purple,
  sent: CHART_COLORS.green,
  delivered: CHART_COLORS.pink,
} as const

export const SPARKLINE_GRADIENT = {
  topOpacity: 0.28,
  bottomOpacity: 0,
} as const

export const LINE_CHART_SERIES_GRADIENT = {
  topOpacity: 0.05,
  bottomOpacity: 0,
} as const

export type ChartSeries = {
  key: string
  label: string
  color: string
}

export type ChartTooltipPayloadItem = {
  name?: string
  value?: number | string
  color?: string
  dataKey?: string
}

export type ChartLegendItem = {
  label: string
  color: string
}
