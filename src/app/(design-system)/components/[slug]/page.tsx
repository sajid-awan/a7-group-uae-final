import Link from "next/link"
import { notFound } from "next/navigation"

import { getPlaceholderNavItem, placeholderComponentSlugs } from "@/shared/content/navigation/component-sidebar-nav"

type PageProps = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return placeholderComponentSlugs.map((slug) => ({ slug }))
}

export default async function PlaceholderComponentPage({ params }: PageProps) {
  const { slug } = await params
  const item = getPlaceholderNavItem(slug)
  if (!item) notFound()

  return (
    <div className="mx-auto p-6 md:p-8">
      <header className="mb-8 max-w-2xl">
        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Components</p>
        <h1 className="mt-1 text-2xl font-semibold tracking-tight">{item.label}</h1>
        <p className="mt-2 text-muted-foreground">
          This component is not implemented yet. Docs and examples will be added here when the UI is ready.
        </p>
      </header>
      <p className="text-sm text-muted-foreground">
        <Link href="/components/button" className="text-primary underline-offset-4 hover:underline">
          Button
        </Link>{" "}
        and{" "}
        <Link href="/components/typography" className="text-primary underline-offset-4 hover:underline">
          Typography
        </Link>{" "}
        already have documentation.
      </p>
    </div>
  )
}
