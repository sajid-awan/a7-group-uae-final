"use client"

import { Check } from "lucide-react"
import { motion } from "framer-motion"

import { AedText } from "@/shared/ui/aed-text"
import type { PropertyTransaction } from "@/features/property"
import { cn } from "@/shared/lib/cn"

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]
const VIEWPORT = { once: true, amount: 0.1 as const }

type PropertyTransactionsSectionProps = {
  transactions: PropertyTransaction[]
  subtitle?: string
  className?: string
}

function TransactionRow({ transaction }: { transaction: PropertyTransaction }) {
  const showAreaLine = Boolean(transaction.areaSqft && transaction.pricePerSqft)

  return (
    <li className="flex items-start gap-3 border-b border-border py-4 last:border-b-0">
      <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground">
        <Check className="size-3.5 stroke-[2.5]" aria-hidden />
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-bold text-a7-black md:text-base">
          <AedText text={transaction.price} />
        </p>
        {showAreaLine ? (
          <p className="mt-1 text-xs text-muted-foreground md:text-sm">
            Area (sqft): {transaction.areaSqft!.toLocaleString()} -{" "}
            <AedText text={`AED ${transaction.pricePerSqft}/sqft`} />
          </p>
        ) : null}
      </div>
      <p className="shrink-0 text-xs text-muted-foreground md:text-sm">{transaction.date}</p>
    </li>
  )
}

function TransactionColumn({ title, items }: { title: string; items: PropertyTransaction[] }) {
  if (items.length === 0) return null

  return (
    <div className="min-w-0">
      <h3 className="font-heading text-lg font-semibold text-a7-black md:text-xl">{title}</h3>
      <ul className="mt-4">{items.map((tx) => <TransactionRow key={tx.id} transaction={tx} />)}</ul>
    </div>
  )
}

export function PropertyTransactionsSection({ transactions, subtitle, className }: PropertyTransactionsSectionProps) {
  const sold = transactions.filter((tx) => tx.kind === "sold")
  const rented = transactions.filter((tx) => tx.kind === "rented")

  if (sold.length === 0 && rented.length === 0) return null

  return (
    <section className={cn(className)} aria-labelledby="property-transactions-heading">
      <motion.h2
        id="property-transactions-heading"
        className="font-heading text-2xl font-bold text-a7-black md:text-3xl"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.8, ease: EASE }}
      >
        Transactions for Similar Properties
      </motion.h2>
      {subtitle ? (
        <motion.p
          className="mt-2 text-sm text-muted-foreground md:text-base"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.75, ease: EASE, delay: 0.1 }}
        >
          {subtitle}
        </motion.p>
      ) : null}

      <div className="mt-8 grid gap-10 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
        >
          <TransactionColumn title="Sold for" items={sold} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.8, ease: EASE, delay: 0.25 }}
        >
          <TransactionColumn title="Rented for" items={rented} />
        </motion.div>
      </div>
    </section>
  )
}
