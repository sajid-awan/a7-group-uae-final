/** Agent card pill background tones — safe to import from Server Components. */
export const agentCardTones = [
  "neutral",
  "rose",
  "pink",
  "peach",
  "amber",
  "yellow",
  "mint",
  "green",
  "sky",
  "blue",
  "indigo",
  "lavender",
] as const

export type AgentCardTone = (typeof agentCardTones)[number]
