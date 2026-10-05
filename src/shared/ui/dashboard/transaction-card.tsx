"use client"

import { ArrowUpRight, CalendarDays } from "lucide-react"
import type { ReactNode } from "react"

import { formatTransactionAedText } from "@/shared/lib/format-transaction-amount"
import { cn } from "@/shared/lib/cn"
import { AedText } from "@/shared/ui/aed-text"
import { Badge } from "@/shared/ui/badge"
import { Button } from "@/shared/ui/button"

export type TransactionApprovalStatus = "approved" | "pending" | "rejected"

export type TransactionDealType = "sale" | "rent"

export type TransactionProjectStatus = "completed" | "in-progress" | "pending"

export type TransactionParticipantBreakdown = {
  id: string
  label: string
  total: number
  received: number
  balance: number
}

export type TransactionCardData = {
  id: string
  referenceId: string
  approvalStatus: TransactionApprovalStatus
  dealType: TransactionDealType
  amount: number
  projectStatus: TransactionProjectStatus
  totalCommission: number
  companyShare: number
  allAgentsShare: number
  refNo: string
  unitNo: string
  propertyAddress: string
  propertyAddressHref?: string
  dealDate: string
  participants: TransactionParticipantBreakdown[]
}

const APPROVAL_STATUS_LABEL: Record<TransactionApprovalStatus, string> = {
  approved: "Approved",
  pending: "Pending",
  rejected: "Rejected",
}

const DEAL_TYPE_LABEL: Record<TransactionDealType, string> = {
  sale: "Sale",
  rent: "Rent",
}

const PROJECT_STATUS_LABEL: Record<TransactionProjectStatus, string> = {
  completed: "Completed",
  "in-progress": "In Progress",
  pending: "Pending",
}

function formatDealDateLabel(dealDate: string) {
  const parsed = new Date(`${dealDate}T00:00:00`)
  if (Number.isNaN(parsed.getTime())) return dealDate
  return parsed.toLocaleDateString("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  })
}

function TransactionDetailItem({
  label,
  children,
  className,
}: {
  label: string
  children: ReactNode
  className?: string
}) {
  return (
    <div className={cn("space-y-0.5", className)}>
      <p className="text-[11px] text-muted-foreground">{label}</p>
      <div className="text-xs font-medium text-neutral-900">{children}</div>
    </div>
  )
}

function ParticipantAmountCard({
  label,
  value,
  tone,
}: {
  label: string
  value: number
  tone: "green" | "purple" | "pink"
}) {
  const toneClassName = {
    green: "bg-emerald-50",
    purple: "bg-violet-50",
    pink: "bg-rose-50",
  }[tone]

  return (
    <div className={cn("rounded-lg px-2.5 py-1.5", toneClassName)}>
      <p className="text-[9px] font-medium uppercase tracking-wide text-muted-foreground">{label}</p>
      <AedText
        text={formatTransactionAedText(value)}
        className="mt-0.5 text-xs font-semibold text-neutral-900 font-inter"
        iconClassName="text-xs"
      />
    </div>
  )
}

function TransactionParticipantRow({ participant }: { participant: TransactionParticipantBreakdown }) {
  return (
    <div className="space-y-1.5">
      <p className="text-xs font-medium text-neutral-900">{participant.label}</p>
      <div className="grid grid-cols-3 gap-1.5">
        <ParticipantAmountCard label="Total" value={participant.total} tone="green" />
        <ParticipantAmountCard label="Received" value={participant.received} tone="purple" />
        <ParticipantAmountCard label="Balance" value={participant.balance} tone="pink" />
      </div>
    </div>
  )
}

export type TransactionCardProps = {
  transaction: TransactionCardData
  onViewMore?: (transaction: TransactionCardData) => void
  viewMoreLabel?: string
  className?: string
}

export function TransactionCard({
  transaction,
  onViewMore,
  viewMoreLabel = "View More",
  className,
}: TransactionCardProps) {
  return (
    <article
      className={cn(
        "flex flex-col rounded-2xl border border-neutral-200 bg-white p-3.5 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.06)]",
        className
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <p className="text-sm font-medium text-primary">{transaction.referenceId}</p>
        <div className="flex flex-wrap items-center justify-end gap-2">
          <Badge
            variant={
              transaction.approvalStatus === "approved"
                ? "success"
                : transaction.approvalStatus === "pending"
                  ? "warning"
                  : "destructive"
            }
            size="sm"
            shape="pill"
          >
            {APPROVAL_STATUS_LABEL[transaction.approvalStatus]}
          </Badge>
          <Badge variant="warning" size="sm" shape="pill">
            {DEAL_TYPE_LABEL[transaction.dealType]}
          </Badge>
        </div>
      </div>

      <AedText
        text={formatTransactionAedText(transaction.amount)}
        className="mt-2 text-2xl font-semibold text-neutral-900"
        iconClassName="text-xl"
      />

      <div className="mt-3 rounded-xl bg-neutral-50 p-3">
        <div className="grid gap-3 sm:grid-cols-2">
          <TransactionDetailItem label="Project Status">
            <Badge variant="success" size="sm" shape="pill">
              {PROJECT_STATUS_LABEL[transaction.projectStatus]}
            </Badge>
          </TransactionDetailItem>
          <TransactionDetailItem label="Total Commission">
            <AedText text={formatTransactionAedText(transaction.totalCommission)} iconClassName="text-sm" />
          </TransactionDetailItem>
          <TransactionDetailItem label="Company Share">
            <AedText text={formatTransactionAedText(transaction.companyShare)} iconClassName="text-sm" />
          </TransactionDetailItem>
          <TransactionDetailItem label="All Agents Share">
            <AedText text={formatTransactionAedText(transaction.allAgentsShare)} iconClassName="text-sm" />
          </TransactionDetailItem>
          <TransactionDetailItem label="Ref No">
            <span className="text-primary">{transaction.refNo}</span>
          </TransactionDetailItem>
          <TransactionDetailItem label="Unit No">{transaction.unitNo}</TransactionDetailItem>
          <TransactionDetailItem label="Property Address">
            {transaction.propertyAddressHref ? (
              <a href={transaction.propertyAddressHref} className="text-sky-700 hover:underline">
                {transaction.propertyAddress}
              </a>
            ) : (
              transaction.propertyAddress
            )}
          </TransactionDetailItem>
          <TransactionDetailItem label="Deal Date">
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="size-3.5 text-muted-foreground" aria-hidden />
              {formatDealDateLabel(transaction.dealDate)}
            </span>
          </TransactionDetailItem>
        </div>
      </div>

      <div className="mt-3 space-y-3">
        {transaction.participants.map((participant) => (
          <TransactionParticipantRow key={participant.id} participant={participant} />
        ))}
      </div>

      <Button
        type="button"
        variant="outline"
        size="sm"
        className="mt-3 h-10 w-full rounded-xl border-neutral-200 bg-white text-sm text-neutral-900 shadow-none"
        onClick={() => onViewMore?.(transaction)}
      >
        {viewMoreLabel}
        <ArrowUpRight className="size-4" aria-hidden />
      </Button>
    </article>
  )
}

TransactionCard.displayName = "TransactionCard"
