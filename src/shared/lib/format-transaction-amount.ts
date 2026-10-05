export function formatTransactionAmount(value: number): string {
  return value.toLocaleString("en-US")
}

export function formatCompactTransactionAmount(value: number): string {
  if (value >= 1_000_000) {
    const millions = value / 1_000_000
    return Number.isInteger(millions) ? `${millions}m` : `${millions.toFixed(1)}m`
  }
  if (value >= 1_000) {
    const thousands = value / 1_000
    return Number.isInteger(thousands) ? `${thousands}k` : `${thousands.toFixed(1)}k`
  }
  return formatTransactionAmount(value)
}

export function formatTransactionAedText(value: number, compact = false): string {
  const amount = compact ? formatCompactTransactionAmount(value) : formatTransactionAmount(value)
  return `AED ${amount}`
}
