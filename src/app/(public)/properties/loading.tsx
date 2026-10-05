export default function PropertiesLoading() {
  return (
    <main>
      <div className="relative min-h-36 border-b border-border bg-muted/40 md:min-h-40">
        <div className="container mx-auto px-4 py-6 sm:py-8">
          <div className="h-[3.25rem] w-full animate-pulse rounded-full bg-white/80" />
        </div>
      </div>

      <div className="bg-white">
        <div className="container mx-auto space-y-5 px-4 py-5 sm:py-6">
          <div className="h-4 w-72 animate-pulse rounded bg-muted" />
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="h-4 animate-pulse rounded bg-muted" />
            ))}
          </div>
          <div className="flex flex-wrap gap-2 border-t border-border/80 pt-5">
            {Array.from({ length: 7 }).map((_, i) => (
              <div key={i} className="h-9 w-32 animate-pulse rounded-full bg-muted" />
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto space-y-6 px-4 py-10 sm:px-6 md:py-14">
        <div className="h-10 w-96 max-w-full animate-pulse rounded-md bg-muted" />
        <div className="h-4 w-64 animate-pulse rounded-md bg-muted" />
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="h-72 animate-pulse rounded-lg bg-muted md:h-80" />
        ))}
      </div>
    </main>
  )
}
