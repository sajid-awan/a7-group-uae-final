import type { Metadata } from "next"

import { EventsPage } from "@/features/event/ui/events"
import { EVENTS_PAGE_DESCRIPTION, EVENTS_PAGE_TITLE, eventsPageProps } from "@/features/event/content/events-page-content"

export const eventsListMetadata: Metadata = {
  title: `${EVENTS_PAGE_TITLE} | A Seven Properties`,
  description: EVENTS_PAGE_DESCRIPTION,
}

export function EventsListPage() {
  return <EventsPage {...eventsPageProps} />
}
