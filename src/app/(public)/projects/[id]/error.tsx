"use client"

import { ErrorView } from "@/shared/ui/error-view"

export default function ProjectDetailError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return <ErrorView message="We could not load this project." reset={reset} />
}
