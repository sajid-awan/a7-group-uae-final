"use client"

import { ErrorView } from "@/shared/ui/error-view"

export default function PropertiesError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return <ErrorView message="We could not load properties." reset={reset} />
}
