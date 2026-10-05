"use client"

import { ErrorView } from "@/shared/ui/error-view"

export default function PropertyDetailError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return <ErrorView message="We could not load this property." reset={reset} />
}
