import type { DashboardTransaction, DashboardTransactionStat } from "../content/transactions-types"
import { formatCompactTransactionAmount } from "@/shared/lib/format-transaction-amount"

export function paginateDashboardTransactions<T>(
  items: T[],
  page: number,
  pageSize: number
): { items: T[]; pageCount: number } {
  const pageCount = Math.max(1, Math.ceil(items.length / pageSize))
  const safePage = Math.min(Math.max(page, 1), pageCount)
  const start = (safePage - 1) * pageSize
  return {
    items: items.slice(start, start + pageSize),
    pageCount,
  }
}

export function filterDashboardTransactionsByDateRange(
  transactions: DashboardTransaction[],
  dateFrom: string,
  dateTo: string
): DashboardTransaction[] {
  if (!dateFrom && !dateTo) return transactions

  return transactions.filter((transaction) => {
    const dealDate = transaction.dealDate
    if (!dealDate) return true
    if (dateFrom && dealDate < dateFrom) return false
    if (dateTo && dealDate > dateTo) return false
    return true
  })
}

export function getDashboardTransactionsStats(
  transactions: DashboardTransaction[]
): DashboardTransactionStat[] {
  const totals = transactions.reduce(
    (accumulator, transaction) => {
      accumulator.totalCommission += transaction.totalCommission
      accumulator.companyShare += transaction.companyShare
      accumulator.allAgentsShare += transaction.allAgentsShare
      accumulator.received += transaction.participants.reduce(
        (sum, participant) => sum + participant.received,
        0
      )
      accumulator.balance += transaction.participants.reduce(
        (sum, participant) => sum + participant.balance,
        0
      )
      return accumulator
    },
    {
      totalCommission: 0,
      companyShare: 0,
      allAgentsShare: 0,
      received: 0,
      balance: 0,
    }
  )

  return [
    {
      label: "Total Commission",
      value: formatCompactTransactionAmount(totals.totalCommission),
      iconTone: "green",
    },
    {
      label: "Company Share",
      value: formatCompactTransactionAmount(totals.companyShare),
      iconTone: "gold",
    },
    {
      label: "All Agents Share",
      value: formatCompactTransactionAmount(totals.allAgentsShare),
      iconTone: "blue",
    },
    {
      label: "Received",
      value: formatCompactTransactionAmount(totals.received),
      iconTone: "purple",
    },
    {
      label: "Balance",
      value: formatCompactTransactionAmount(totals.balance),
      iconTone: "pink",
    },
  ]
}
