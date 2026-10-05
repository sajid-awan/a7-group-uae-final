import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { EventDetailPage } from "@/features/event/ui/events"
import { getAllEventIds, getEventDetailById } from "@/features/event/content/events-page-content"

type EventDetailPageProps = {
  params: Promise<{ id: string }>
}

export async function generateEventDetailStaticParams() {
  return getAllEventIds().map((id) => ({ id }))
}

export async function generateEventDetailMetadata({ params }: EventDetailPageProps): Promise<Metadata> {
  const { id } = await params
  const event = getEventDetailById(id)

  if (!event) return { title: "Event not found | A Seven Properties" }

  return {
    title: `${event.heroTitle} | A Seven Properties`,
    description: event.aboutDescriptionParagraphs[0],
  }
}

export async function EventDetailPageRoute({ params }: EventDetailPageProps) {
  const { id } = await params
  const event = getEventDetailById(id)
  if (!event) notFound()

  return <EventDetailPage event={event} />
}
