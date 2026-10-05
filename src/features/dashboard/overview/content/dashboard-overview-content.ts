import { calendarEvents } from "./dashboard-calendar-data"
import type { DashboardOverviewContent } from "@/features/dashboard/content/dashboard-content-types"
import {
  communicationChartSeries,
  communicationEfficiency,
  communicationPerformanceData,
  communicationSeries,
  communicationXAxisTicks,
  conversionRatesData,
  dashboardStatValues,
  leadSourceChartData,
  leadSourceData,
  leadsByTypeData,
  revenueByTypeData,
  revenueSeries,
  stageCategorySeries,
  stageDistributionData,
  stageDistributionTooltips,
} from "./dashboard-mock-data"

export const dashboardOverviewContent: DashboardOverviewContent = {
  stats: dashboardStatValues,
  communication: {
    data: communicationPerformanceData,
    series: communicationChartSeries,
    tooltipSeries: communicationSeries,
    whatsappSeries: communicationSeries.slice(2),
    xAxisTicks: communicationXAxisTicks,
    efficiency: communicationEfficiency,
  },
  leadSource: {
    rows: leadSourceData,
    chartData: leadSourceChartData,
    platforms: leadSourceChartData.map((item) => ({
      label: item.platform,
      color: item.color,
    })),
  },
  leadsByType: leadsByTypeData,
  stageDistribution: {
    data: stageDistributionData,
    series: stageCategorySeries,
    tooltips: stageDistributionTooltips,
  },
  conversionRates: conversionRatesData,
  revenue: {
    data: revenueByTypeData,
    series: revenueSeries,
  },
  calendar: {
    title: "June 2026",
    events: calendarEvents,
  },
}
