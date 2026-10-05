export type SellPropertyStepKey = "details" | "media" | "submit"

export const SELL_PROPERTY_STEP_ORDER: SellPropertyStepKey[] = ["details", "media", "submit"]

export const SELL_PROPERTY_WIZARD_STEPS: { key: SellPropertyStepKey; lines: [string, string] }[] = [
  { key: "details", lines: ["Personal", "Information"] },
  { key: "media", lines: ["Property", "Specifications"] },
  { key: "submit", lines: ["Verification &", "Media"] },
]
