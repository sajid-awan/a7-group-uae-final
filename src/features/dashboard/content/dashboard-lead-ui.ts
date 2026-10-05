import type { DashboardLeadChannel, DashboardLeadPipelineStage } from "../agents/content/dashboard-agent-leads-mock-data"
import {
  dashboardLeadChannelClassName,
  dashboardLeadPipelineStageClassName,
} from "../agents/content/dashboard-agent-leads-mock-data"

export const DASHBOARD_LEAD_TYPE_BADGE_CLASSNAME =
  "border-[#F5E6D3] bg-[#FBF4EA] text-[#B68E45]"

export function formatLeadUpdatedOn(days: number): string {
  return `${days} days ago`
}

export function formatLeadLastUpdated(days: number): string {
  return `Last updated: ${days}d ago`
}

export function getLeadChannelClassName(channel: DashboardLeadChannel): string {
  return dashboardLeadChannelClassName[channel]
}

export function getLeadPipelineStageClassName(stage: DashboardLeadPipelineStage): string {
  return dashboardLeadPipelineStageClassName[stage]
}

export const DASHBOARD_LEAD_STAGE_FILTER_OPTIONS = [
  { value: "all", label: "Lead Stage" },
  { value: "Start", label: "Start" },
  { value: "Rentals", label: "Rentals" },
  { value: "Buyer Secondary", label: "Buyer Secondary" },
  { value: "Seller Secondary", label: "Seller Secondary" },
  { value: "Off-Plan", label: "Off-Plan" },
] as const

export const DASHBOARD_LEAD_PIPELINE_FILTER_OPTIONS = [
  { value: "all", label: "Lead Pipeline Stage" },
  { value: "New Lead", label: "New Lead" },
  { value: "Not Reach", label: "Not Reach" },
  { value: "Lost Deal", label: "Lost Deal" },
  { value: "Not Respond", label: "Not Respond" },
  { value: "Qualified", label: "Qualified" },
  { value: "Closed", label: "Closed" },
] as const
