import type { ListingRow } from "@/shared/ui/listing-table"
import { findRealEstateAgentById } from "@/features/agent/content/agent-profile-content"

export type AgentPropertyTransaction = {
  id: string
  propertyName: string
  propertySubtitle: string
  transactionType: string
  date: string
  dateValue: Date
  category: string
  bedrooms: number
  price: string
  areaSqft: number
}

const TRANSACTION_TEMPLATES: Omit<AgentPropertyTransaction, "id" | "dateValue">[] = [
  {
    propertyName: "DAMAC Hills",
    propertySubtitle: "Belair Damac Hills - By Trump Estates",
    transactionType: "Sold",
    date: "16 Nov 2025",
    category: "Townhouse",
    bedrooms: 4,
    price: "25,000,000 AED",
    areaSqft: 7324,
  },
  {
    propertyName: "Santorini",
    propertySubtitle: "Akoya Oxygen - Damac Hills 2",
    transactionType: "Rent",
    date: "12 Nov 2025",
    category: "Apartment",
    bedrooms: 4,
    price: "18,000 AED/Year",
    areaSqft: 2100,
  },
  {
    propertyName: "Marina Gate",
    propertySubtitle: "Dubai Marina - Full Sea View",
    transactionType: "Sold",
    date: "08 Nov 2025",
    category: "Apartment",
    bedrooms: 3,
    price: "4,850,000 AED",
    areaSqft: 1850,
  },
  {
    propertyName: "Arabian Ranches III",
    propertySubtitle: "Spring - Blanca Community",
    transactionType: "Lease",
    date: "02 Nov 2025",
    category: "Villa",
    bedrooms: 5,
    price: "420,000 AED/Year",
    areaSqft: 4120,
  },
  {
    propertyName: "Bugatti Residences",
    propertySubtitle: "Business Bay - Branded Residence",
    transactionType: "Sold",
    date: "28 Oct 2025",
    category: "Apartment",
    bedrooms: 4,
    price: "19,200,000 AED",
    areaSqft: 9000,
  },
  {
    propertyName: "Palm Jumeirah Villa",
    propertySubtitle: "Frond M - Private Beach",
    transactionType: "Mortgage",
    date: "22 Oct 2025",
    category: "Villa",
    bedrooms: 6,
    price: "72,000,000 AED",
    areaSqft: 11800,
  },
  {
    propertyName: "Downtown Views II",
    propertySubtitle: "Burj Khalifa District",
    transactionType: "Sold",
    date: "18 Oct 2025",
    category: "Apartment",
    bedrooms: 2,
    price: "2,450,000 AED",
    areaSqft: 1120,
  },
  {
    propertyName: "JVC District 12",
    propertySubtitle: "Binghatti Corner - Handover Ready",
    transactionType: "Rent",
    date: "14 Oct 2025",
    category: "Apartment",
    bedrooms: 1,
    price: "95,000 AED/Year",
    areaSqft: 780,
  },
  {
    propertyName: "Emirates Hills",
    propertySubtitle: "Montgomery - Golf Course Plot",
    transactionType: "Auction",
    date: "10 Oct 2025",
    category: "Mansion",
    bedrooms: 7,
    price: "98,500,000 AED",
    areaSqft: 14500,
  },
  {
    propertyName: "Creek Harbour",
    propertySubtitle: "The Grand - Creek Tower Views",
    transactionType: "Sold",
    date: "05 Oct 2025",
    category: "Penthouse",
    bedrooms: 4,
    price: "12,800,000 AED",
    areaSqft: 4200,
  },
  {
    propertyName: "Jumeirah Bay Island",
    propertySubtitle: "Bulgari Residences - Marina",
    transactionType: "Investment",
    date: "01 Oct 2025",
    category: "Apartment",
    bedrooms: 3,
    price: "31,500,000 AED",
    areaSqft: 3680,
  },
  {
    propertyName: "Dubai Hills Estate",
    propertySubtitle: "Parkways - Vida Residences",
    transactionType: "Sold",
    date: "26 Sep 2025",
    category: "Townhouse",
    bedrooms: 4,
    price: "6,200,000 AED",
    areaSqft: 2890,
  },
  {
    propertyName: "Bluewaters Island",
    propertySubtitle: "Boutique Building - Ain Dubai View",
    transactionType: "Rent",
    date: "20 Sep 2025",
    category: "Apartment",
    bedrooms: 2,
    price: "240,000 AED/Year",
    areaSqft: 1340,
  },
  {
    propertyName: "Meydan District One",
    propertySubtitle: "Mohammed Bin Rashid Al Maktoum City",
    transactionType: "Sold",
    date: "15 Sep 2025",
    category: "Villa",
    bedrooms: 5,
    price: "18,750,000 AED",
    areaSqft: 6200,
  },
  {
    propertyName: "City Walk",
    propertySubtitle: "Building 16 - Central Park Access",
    transactionType: "Lease",
    date: "10 Sep 2025",
    category: "Apartment",
    bedrooms: 3,
    price: "310,000 AED/Year",
    areaSqft: 1980,
  },
]

function parseDisplayDate(value: string): Date {
  return new Date(value)
}

function hashAgentId(id: string): number {
  let hash = 0
  for (let i = 0; i < id.length; i += 1) {
    hash = (hash * 31 + id.charCodeAt(i)) | 0
  }
  return Math.abs(hash)
}

export function getAgentTransactions(agentId: string): AgentPropertyTransaction[] {
  const agent = findRealEstateAgentById(agentId)
  if (!agent) return []

  const offset = hashAgentId(agentId) % 4

  return TRANSACTION_TEMPLATES.map((template, index) => {
    const shiftedIndex = (index + offset) % TRANSACTION_TEMPLATES.length
    const row = TRANSACTION_TEMPLATES[shiftedIndex]!

    return {
      ...row,
      id: `${agentId}-tx-${index}`,
      dateValue: parseDisplayDate(row.date),
    }
  }).sort((a, b) => b.dateValue.getTime() - a.dateValue.getTime())
}

export const AGENT_TRANSACTIONS_DEFAULT_FILTER_DATE = new Date(2024, 10, 10)

export function filterAgentTransactionsByDate(
  transactions: AgentPropertyTransaction[],
  fromDate: Date
): AgentPropertyTransaction[] {
  const start = new Date(fromDate.getFullYear(), fromDate.getMonth(), fromDate.getDate())
  return transactions.filter((tx) => tx.dateValue >= start)
}

export function formatAgentTransactionFilterDate(date: Date): string {
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })
}

export function agentTransactionToListingRow(transaction: AgentPropertyTransaction): ListingRow {
  return {
    id: transaction.id,
    propertyName: transaction.propertyName,
    propertySubtitle: transaction.propertySubtitle,
    status: transaction.transactionType,
    dateLabel: transaction.date,
    propertyType: transaction.category,
    bedsLabel: `${transaction.bedrooms} Beds`,
    priceLabel: transaction.price,
    areaLabel: `${transaction.areaSqft.toLocaleString()} sqft`,
  }
}
