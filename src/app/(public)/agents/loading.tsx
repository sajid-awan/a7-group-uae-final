export default function AgentsLoading() {
  return (
    <main>
      <div className="relative min-h-36 border-b border-border bg-muted/40 md:min-h-40">
        <div className="container mx-auto px-4 py-6 sm:py-8">
          <div className="h-[3.25rem] w-full animate-pulse rounded-full bg-white/80" />
        </div>
      </div>

      <div className="bg-white">
        <div className="container mx-auto space-y-5 px-4 py-5 sm:py-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
            <div className="h-4 w-80 animate-pulse rounded bg-muted" />
            <div className="h-9 w-36 animate-pulse rounded-full bg-muted" />
          </div>
          <div className="h-10 w-[28rem] max-w-full animate-pulse rounded-md bg-muted" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 sm:px-6 md:py-8">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="aspect-[3/4] min-h-[280px] animate-pulse rounded-2xl bg-muted" />
          ))}
        </div>
      </div>
    </main>
  )
}
