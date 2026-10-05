import type { DashboardStatIconTone } from "@/features/dashboard/content/dashboard-content-types"
import type {
  TransactionApprovalStatus,
  TransactionCardData,
  TransactionDealType,
  TransactionParticipantBreakdown,
  TransactionProjectStatus,
} from "@/shared/ui/dashboard/transaction-card"

export type {
  TransactionApprovalStatus,
  TransactionDealType,
  TransactionParticipantBreakdown,
  TransactionProjectStatus,
}

export type DashboardTransaction = TransactionCardData

export type DashboardTransactionStat = {
  label: string
  value: string
  iconTone: DashboardStatIconTone
}
