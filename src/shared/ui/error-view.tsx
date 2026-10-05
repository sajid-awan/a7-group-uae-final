type ErrorViewProps = {
  message?: string
  reset: () => void
}

export function ErrorView({ message = "Please try again.", reset }: ErrorViewProps) {
  return (
    <main className="container mx-auto space-y-4 p-6 md:p-8">
      <h1 className="text-xl font-semibold">Something went wrong</h1>
      <p className="text-sm text-muted-foreground">{message}</p>
      <button
        type="button"
        className="rounded-md border border-border bg-white px-3 py-1.5 text-sm font-medium"
        onClick={() => reset()}
      >
        Retry
      </button>
    </main>
  )
}
