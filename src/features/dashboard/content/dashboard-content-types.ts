import type { ChartSeries, DonutChartItem, SparklineTone } from "@/shared/ui/dashboard"

export type DashboardStatIconTone = "gold" | "blue" | "orange" | "green" | "purple" | "pink"

export type DashboardStatIconKey = "wallet" | "home" | "users" | "phone"

export type DashboardStat = {
  value: number
  label: string
  iconKey: DashboardStatIconKey
  iconTone: DashboardStatIconTone
}

export type CommunicationDataPoint = {
  month: string
  date: string
  answered: number
  missed: number
  replied: number
  sent: number
  delivered: number
}

export type LeadSourceRow = {
  platform: string
  leads: number
  share: number
  color: string
  trendTone: SparklineTone
  trendColor?: string
  trend: { value: number }[]
}

export type LeadSourceChartPoint = {
  platform: string
  value: number
  labelValue?: number
  share: number
  color: string
}

export type StageDistributionPoint = {
  category: string
  rentals: number
  buyerSecondary: number
  sellerSecondary: number
  offPlan: number
}

export type StageTooltipDetail = {
  title: string
  stages: { label: string; value: number }[]
}

export type RevenueByTypePoint = {
  type: string
  expected: number
  revenue: number
}

export type EfficiencyMetric = {
  value: number
  label: string
  suffix?: string
  max?: number
  color?: string
}

export type CalendarEvent = {
  id: string
  title: string
  start: string
  end: string
  color: string
  taskType?: string
  priority?: string
  status?: string
  description?: string
  assignedTo?: string
}

export type DashboardCalendarContent = {
  title: string
  events: CalendarEvent[]
}

export type DashboardOverviewContent = {
  stats: DashboardStat[]
  communication: {
    data: CommunicationDataPoint[]
    series: ChartSeries[]
    tooltipSeries: ChartSeries[]
    whatsappSeries: ChartSeries[]
    xAxisTicks: string[]
    efficiency: EfficiencyMetric[]
  }
  leadSource: {
    rows: LeadSourceRow[]
    chartData: LeadSourceChartPoint[]
    platforms: { label: string; color: string }[]
  }
  leadsByType: DonutChartItem[]
  stageDistribution: {
    data: StageDistributionPoint[]
    series: ChartSeries[]
    tooltips: Record<string, StageTooltipDetail>
  }
  conversionRates: DonutChartItem[]
  revenue: {
    data: RevenueByTypePoint[]
    series: ChartSeries[]
  }
  calendar: DashboardCalendarContent
}
