import type { DashboardTransaction } from "./transactions-types"

export const dashboardTransactionsPageCopy = {
  title: "Transactions List",
  subtitle:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  addButtonLabel: "Add Transaction",
  dateRangeLabel: "01 Jan 2020 - 18 Apr 2026",
  exportLabel: "Export CSV",
  viewMoreLabel: "View More",
} as const

export const dashboardTransactionsDateRange = {
  from: "2020-01-01",
  to: "2026-04-18",
  label: dashboardTransactionsPageCopy.dateRangeLabel,
} as const

const TRANSACTION_TEMPLATES: Omit<DashboardTransaction, "id" | "referenceId">[] = [
  {
    approvalStatus: "approved",
    dealType: "sale",
    amount: 2_800_000,
    projectStatus: "completed",
    totalCommission: 56_000,
    companyShare: 22_400,
    allAgentsShare: 33_600,
    refNo: "PL-105708",
    unitNo: "0",
    propertyAddress: "Al Furjan",
    propertyAddressHref: "/properties/al-furjan",
    dealDate: "2026-02-17",
    participants: [
      { id: "p1", label: "Amna External", total: 16_800, received: 8_400, balance: 8_400 },
      { id: "p2", label: "Bruce Internal", total: 16_800, received: 12_600, balance: 4_200 },
    ],
  },
  {
    approvalStatus: "approved",
    dealType: "sale",
    amount: 1_950_000,
    projectStatus: "completed",
    totalCommission: 39_000,
    companyShare: 15_600,
    allAgentsShare: 23_400,
    refNo: "PL-105709",
    unitNo: "12",
    propertyAddress: "Dubai Marina",
    propertyAddressHref: "/properties/dubai-marina",
    dealDate: "2026-02-10",
    participants: [
      { id: "p1", label: "Samantha Smith", total: 11_700, received: 5_850, balance: 5_850 },
      { id: "p2", label: "Abduil Qais", total: 11_700, received: 9_360, balance: 2_340 },
    ],
  },
  {
    approvalStatus: "approved",
    dealType: "rent",
    amount: 185_000,
    projectStatus: "in-progress",
    totalCommission: 9_250,
    companyShare: 3_700,
    allAgentsShare: 5_550,
    refNo: "PL-105710",
    unitNo: "4B",
    propertyAddress: "Jumeirah Village Circle",
    dealDate: "2026-01-28",
    participants: [
      { id: "p1", label: "Monica Geroge", total: 2_775, received: 1_387, balance: 1_388 },
      { id: "p2", label: "Bruce Internal", total: 2_775, received: 2_220, balance: 555 },
    ],
  },
  {
    approvalStatus: "pending",
    dealType: "sale",
    amount: 4_200_000,
    projectStatus: "pending",
    totalCommission: 84_000,
    companyShare: 33_600,
    allAgentsShare: 50_400,
    refNo: "PL-105711",
    unitNo: "V-02",
    propertyAddress: "Palm Jumeirah",
    dealDate: "2026-03-05",
    participants: [
      { id: "p1", label: "Amna External", total: 25_200, received: 0, balance: 25_200 },
      { id: "p2", label: "Samantha Smith", total: 25_200, received: 12_600, balance: 12_600 },
    ],
  },
]

function buildTransaction(index: number): DashboardTransaction {
  const template = TRANSACTION_TEMPLATES[index % TRANSACTION_TEMPLATES.length]!
  const sequence = 1_771_318_702 + index

  return {
    ...template,
    id: `transaction-${index + 1}`,
    referenceId: `#TS-${sequence}`,
    amount: template.amount + index * 25_000,
    totalCommission: template.totalCommission + index * 500,
    companyShare: template.companyShare + index * 200,
    allAgentsShare: template.allAgentsShare + index * 300,
    dealDate: new Date(Date.parse(template.dealDate) + index * 86_400_000).toISOString().slice(0, 10),
    participants: template.participants.map((participant, participantIndex) => ({
      ...participant,
      id: `${participant.id}-${index}-${participantIndex}`,
      total: participant.total + index * 100,
      received: participant.received + index * 50,
      balance: participant.balance + index * 50,
    })),
  }
}

export function getDashboardTransactionsMockData(count = 20): DashboardTransaction[] {
  return Array.from({ length: count }, (_, index) => buildTransaction(index))
}
