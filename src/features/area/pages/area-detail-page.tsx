import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { AreaDetailPage } from "@/features/area/ui/area-detail/area-detail-page"
import { getAllAreaDetailIds, getAreaDetail } from "@/features/area/content/area-detail-content"

type AreaDetailPageProps = {
  params: Promise<{ id: string }>
}

export async function generateAreaDetailStaticParams() {
  return getAllAreaDetailIds().map((id) => ({ id }))
}

export async function generateAreaDetailMetadata({ params }: AreaDetailPageProps): Promise<Metadata> {
  const { id } = await params
  const area = getAreaDetail(id)

  if (!area) {
    return { title: "Area not found | A Seven Properties" }
  }

  return {
    title: `${area.title} | Areas in Dubai | A Seven Properties`,
    description: `Explore ${area.title} — location, amenities, property trends, schools, and live listings in Dubai.`,
  }
}

export async function AreaDetailRoutePage({ params }: AreaDetailPageProps) {
  const { id } = await params
  const area = getAreaDetail(id)

  if (!area) {
    notFound()
  }

  return (
    <main className="bg-white">
      <AreaDetailPage area={area} />
    </main>
  )
}
