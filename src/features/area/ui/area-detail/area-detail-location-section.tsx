import { MapPin } from "lucide-react"

import type { AreaDetailContent, AreaNearbyPlace } from "@/features/area/services/content"
import { getAreaDetailSectionId } from "@/features/area"

type AreaDetailLocationSectionProps = {
  area: AreaDetailContent
}

function NearbyPlaceGrid({ title, places }: { title: string; places: AreaNearbyPlace[] }) {
  if (places.length === 0) return null

  return (
    <div>
      <h3 className="font-heading text-lg font-bold text-a7-black md:text-xl">{title}</h3>
      <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {places.map((place) => (
          <li
            key={`${title}-${place.name}`}
            className="flex items-center gap-3 rounded-full bg-[#F3F4F6] px-4 py-3.5 text-sm text-a7-black md:text-[15px]"
          >
            <MapPin className="size-4 shrink-0 text-a7-black" aria-hidden />
            <span>
              {place.name}: {place.minutes}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function AreaDetailLocationSection({ area }: AreaDetailLocationSectionProps) {
  const sectionId = getAreaDetailSectionId("location")

  return (
    <section id={sectionId} className="scroll-mt-28" aria-labelledby={`${sectionId}-heading`}>
      <article className="rounded-2xl border border-border bg-white px-5 py-6 sm:px-7 sm:py-8 md:px-8 md:py-9">
        <h2
          id={`${sectionId}-heading`}
          className="font-heading text-2xl font-bold text-a7-black md:text-3xl lg:text-[2rem]"
        >
          Location
        </h2>

        <div className="mt-5 space-y-5 md:mt-6 md:space-y-6">
          <div className="overflow-hidden rounded-2xl border border-border">
            <iframe
              title={`${area.title} location map`}
              src={area.location.mapEmbedUrl}
              className="h-72 w-full border-0 md:h-[26rem]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          {area.location.description ? (
            <p className="text-sm leading-relaxed text-a7-text-gray md:text-base">{area.location.description}</p>
          ) : null}

          <NearbyPlaceGrid title="Nearby Areas" places={area.location.nearbyAreas} />
          <NearbyPlaceGrid title="Nearby Attractions" places={area.location.nearbyAttractions} />
        </div>
      </article>
    </section>
  )
}
