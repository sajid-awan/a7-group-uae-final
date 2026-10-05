"use client"

import { useSyncExternalStore } from "react"

const subscribe = () => () => {}

/** True after the first client commit — use to skip SSR for client-only UI (e.g. Radix). */
export function useMounted() {
  return useSyncExternalStore(subscribe, () => true, () => false)
}
