export default function ProjectDetailLoading() {
  return (
    <main>
      <div className="h-[480px] animate-pulse bg-muted" />
      <div className="container mx-auto space-y-6 px-4 py-10 md:py-14">
        <div className="h-8 w-64 animate-pulse rounded-md bg-muted" />
        <div className="space-y-3">
          <div className="h-4 w-full animate-pulse rounded-md bg-muted" />
          <div className="h-4 w-3/4 animate-pulse rounded-md bg-muted" />
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-24 animate-pulse rounded-lg bg-muted" />
          ))}
        </div>
      </div>
    </main>
  )
}
