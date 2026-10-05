import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { CareerJobDetailPage } from "@/features/career/ui/career"
import { getAllCareerJobIds, getCareerJobById } from "@/features/career/content/career-page-content"

type CareerJobDetailPageProps = {
  params: Promise<{ id: string }>
}

export async function generateCareerJobDetailStaticParams() {
  return getAllCareerJobIds().map((id) => ({ id }))
}

export async function generateCareerJobDetailMetadata({
  params,
}: CareerJobDetailPageProps): Promise<Metadata> {
  const { id } = await params
  const job = getCareerJobById(id)

  if (!job) return { title: "Job not found | A Seven Properties" }

  return {
    title: `${job.title} | A Seven Properties`,
    description: job.introParagraphs[0],
  }
}

export async function CareerJobDetailPageRoute({ params }: CareerJobDetailPageProps) {
  const { id } = await params
  const job = getCareerJobById(id)
  if (!job) notFound()

  return <CareerJobDetailPage job={job} />
}
