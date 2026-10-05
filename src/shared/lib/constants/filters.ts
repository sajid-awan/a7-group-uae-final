/** Shared filter option shape for property search UIs. */
export type FilterOption = { value: string; label: string }

export const DEFAULT_TRANSACTION_OPTIONS: readonly FilterOption[] = [
  { value: "buy", label: "Buy" },
  { value: "rent", label: "Rent" },
] as const
