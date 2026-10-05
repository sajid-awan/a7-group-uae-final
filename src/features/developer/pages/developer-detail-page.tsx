import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { DeveloperDetailPage } from "@/features/developer/ui/developers/developer-detail-page"
import { getAllDeveloperIds, getDeveloperById } from "@/features/developer/content/developer-detail-content"

type DeveloperDetailPageProps = {
  params: Promise<{ id: string }>
}

export async function generateDeveloperDetailStaticParams() {
  return getAllDeveloperIds().map((id) => ({ id }))
}

export async function generateDeveloperDetailMetadata({
  params,
}: DeveloperDetailPageProps): Promise<Metadata> {
  const { id } = await params
  const developer = getDeveloperById(id)

  if (!developer) {
    return { title: "Developer not found | A Seven Properties" }
  }

  return {
    title: `${developer.pageTitle} | A Seven Properties`,
    description: developer.intro[0],
  }
}

export async function DeveloperDetailPageRoute({ params }: DeveloperDetailPageProps) {
  const { id } = await params
  const developer = getDeveloperById(id)

  if (!developer) {
    notFound()
  }

  return (
    <main className="bg-white">
      <DeveloperDetailPage developer={developer} />
    </main>
  )
}
