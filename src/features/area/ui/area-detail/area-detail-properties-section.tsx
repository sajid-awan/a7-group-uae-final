"use client"

import Image from "next/image"
import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from "react"
import type { Swiper as SwiperInstance } from "swiper"
import { Autoplay, Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { Building2 } from "lucide-react"

import { PropertyCardListingHorizontal } from "@/features/property/ui/property-card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/ui/accordion"
import { AedText } from "@/shared/ui/aed-text"
import { AgentPortraitCardSimple } from "@/shared/ui/media-feature-cards"
import { Badge } from "@/shared/ui/badge"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shared/ui/carousel"
import { ListingPagination } from "@/shared/ui/listing-pagination"
import { SwiperNavButtons } from "@/shared/ui/swiper-nav-buttons"
import { useSwiperNav } from "@/shared/hooks/use-swiper-nav"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/shared/ui/table"
import type { AreaDetailContent } from "@/features/area/services/content"
import type { AreaRecentTransaction, AreaVillaLocation } from "@/features/area/services/content"
import { getAreaDetailSectionId } from "@/features/area"
import { cn } from "@/shared/lib/cn"
import { MapPin } from "react-feather"

import "swiper/css"

type AreaDetailPropertiesSectionProps = {
  area: AreaDetailContent
}

type PriceMode = "sale" | "rent"

const TRANSACTION_PAGE_SIZE = 5

function CarouselSectionHeader({
  title,
  className,
}: {
  title: string
  className?: string
}) {
  return (
    <div className={cn("mb-4 flex items-center justify-between gap-4", className)}>
      <h3 className="font-heading text-lg font-bold text-a7-black md:text-xl">{title}</h3>
      <div className="flex shrink-0 items-center gap-2">
        <CarouselPrevious className="static size-9 translate-x-0 translate-y-0 border-border bg-white shadow-sm" />
        <CarouselNext className="static size-9 translate-x-0 translate-y-0 border-border bg-white shadow-sm" />
      </div>
    </div>
  )
}

function startVillaLocationsAutoplay(swiper: SwiperInstance) {
  swiper.update()
  if (swiper.autoplay) {
    swiper.autoplay.stop()
    swiper.autoplay.start()
  }
}

function AreaPopularVillaLocationsSlider({
  title,
  locations,
}: {
  title: string
  locations: AreaVillaLocation[]
}) {
  const { prevClass, nextClass, swiperNavConfig } = useSwiperNav("area-villa-locations")
  const swiperRef = useRef<SwiperInstance | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)

  /** Duplicate slides so loop + autoplay work when there are few locations. */
  const slides = useMemo(
    () => (locations.length < 6 ? [...locations, ...locations] : locations),
    [locations]
  )

  const onSwiperReady = useCallback((swiper: SwiperInstance) => {
    swiperRef.current = swiper
    startVillaLocationsAutoplay(swiper)
  }, [])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && swiperRef.current) {
          startVillaLocationsAutoplay(swiperRef.current)
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(container)
    return () => observer.disconnect()
  }, [])

  if (locations.length === 0) return null

  return (
    <section aria-label={title}>
      <div className="mb-4 flex items-center justify-between gap-4">
        <h3 className="font-heading text-lg font-bold text-a7-black md:text-xl">{title}</h3>
        <SwiperNavButtons
          prevClass={prevClass}
          nextClass={nextClass}
          theme="light"
          prevLabel="Previous villa locations"
          nextLabel="Next villa locations"
        />
      </div>

      <div ref={containerRef} className="-mx-1 overflow-hidden px-1">
        <Swiper
          modules={[Navigation, Autoplay]}
          {...swiperNavConfig}
          onBeforeInit={swiperNavConfig.onBeforeInit}
          onInit={(swiper) => {
            swiperNavConfig.onInit?.(swiper)
            onSwiperReady(swiper)
          }}
          onSwiper={onSwiperReady}
          onResize={onSwiperReady}
          loop
          loopAdditionalSlides={locations.length}
          grabCursor
          observer
          observeParents
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            waitForTransition: true,
          }}
          speed={700}
          spaceBetween={12}
          slidesPerView={2.2}
          breakpoints={{
            480: { slidesPerView: 2.35, spaceBetween: 12 },
            640: { slidesPerView: 2.15, spaceBetween: 16 },
            1024: { slidesPerView: 3.15, spaceBetween: 16 },
            1280: { slidesPerView: 3.5, spaceBetween: 16 },
          }}
        >
          {slides.map((location, index) => (
            <SwiperSlide key={`${location.id}-${index}`} className="!h-auto">
              <figure className="overflow-hidden rounded-xl">
                <div className="relative aspect-4/3 bg-muted">
                  <Image
                    src={location.imageUrl}
                    alt={location.label}
                    fill
                    className="object-cover"
                    sizes="(max-width: 767px) 42vw, 20vw"
                  />
                </div>
                <figcaption className="mt-2 text-center text-sm font-medium text-a7-black">
                  {location.label}
                </figcaption>
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

function PropertyTypeTags({ tags }: { tags: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2 pt-2">
      {tags.map((tag) => (
        <li
          key={tag}
          className="inline-flex items-center gap-2 rounded-full bg-[#F3F4F6] px-3.5 py-2 text-sm text-a7-black"
        >
          <Building2 className="size-3.5 shrink-0 text-a7-text-gray" aria-hidden />
          {tag}
        </li>
      ))}
    </ul>
  )
}

function AreaRecentTransactionStatusBadge({ status }: { status: string }) {
  return (
    <Badge
      variant="meta"
      shape="pill"
      className="border-0 bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-700"
    >
      {status}
    </Badge>
  )
}

function AreaRecentTransactionMobileStat({
  label,
  value,
}: {
  label: string
  value: ReactNode
}) {
  return (
    <div className="min-w-0 px-1 py-3 text-center">
      <dt className="text-[10px] font-medium tracking-wide text-muted-foreground uppercase">{label}</dt>
      <dd className="mt-1 text-[11px] leading-snug font-semibold text-a7-black">{value}</dd>
    </div>
  )
}

function AreaRecentTransactionsMobileList({ rows }: { rows: AreaRecentTransaction[] }) {
  return (
    <ul className="flex flex-col gap-3 md:hidden">
      {rows.map((row) => (
        <li
          key={row.id}
          className="overflow-hidden rounded-xl border border-border bg-white shadow-sm"
        >
          <div className="p-4 pb-3">
            <div className="flex min-w-0 gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0 text-a7-text-gray" aria-hidden />
              <div className="min-w-0 flex-1">
                <div className="text-sm font-semibold text-a7-black">{row.location}</div>
                <div className="mt-0.5 text-xs text-muted-foreground">{row.locationSubtitle}</div>
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between gap-3 rounded-lg bg-a7-panel-surface px-3 py-2.5">
              <div className="min-w-0">
                <div className="text-sm font-bold text-a7-black">
                  <AedText text={row.soldFor} className="flex-nowrap" />
                </div>
                <div className="mt-0.5 text-xs text-muted-foreground">
                  <AedText text={row.pricePerSqft} className="flex-nowrap" />
                </div>
              </div>
              <AreaRecentTransactionStatusBadge status={row.status} />
            </div>
          </div>

          <dl className="grid grid-cols-4 divide-x divide-border border-t border-border bg-[#FAFAFA]">
            <AreaRecentTransactionMobileStat label="Type" value={row.type} />
            <AreaRecentTransactionMobileStat label="Beds" value={row.bedrooms} />
            <AreaRecentTransactionMobileStat label="Sold" value={row.soldDate} />
            <AreaRecentTransactionMobileStat
              label="Area"
              value={`${row.areaSqft.toLocaleString()} sqft`}
            />
          </dl>
        </li>
      ))}
    </ul>
  )
}

function AreaRecentTransactionsTable({ rows }: { rows: AreaRecentTransaction[] }) {
  return (
    <>
      <AreaRecentTransactionsMobileList rows={rows} />

      <div className="hidden rounded-xl border border-border md:block">
        <Table className="w-full table-fixed">
          <colgroup>
            <col style={{ width: "26%" }} />
            <col style={{ width: "18%" }} />
            <col style={{ width: "11%" }} />
            <col style={{ width: "12%" }} />
            <col style={{ width: "9%" }} />
            <col style={{ width: "24%" }} />
          </colgroup>
          <TableHeader>
            <TableRow className="border-border hover:bg-transparent">
              <TableHead className="text-a7-black">Location</TableHead>
              <TableHead className="whitespace-nowrap px-3 text-center text-a7-black">
                <AedText text="Sold for (AED)" className="flex-nowrap justify-center" />
              </TableHead>
              <TableHead className="whitespace-nowrap px-3 text-center text-a7-black">Type</TableHead>
              <TableHead className="whitespace-nowrap px-3 text-center text-a7-black">Status</TableHead>
              <TableHead className="whitespace-nowrap px-3 text-center text-a7-black">Bedrooms</TableHead>
              <TableHead className="whitespace-nowrap px-4 text-right text-a7-black">Date / Area</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id} className="border-border hover:bg-muted/30">
                <TableCell className="min-w-0 px-4 py-3.5 align-middle">
                  <div className="flex min-w-0 gap-2">
                    <MapPin className="mt-0.5 size-4 shrink-0 text-muted-foreground" aria-hidden />
                    <div className="min-w-0">
                      <div className="truncate text-sm font-semibold text-a7-black">{row.location}</div>
                      <div className="truncate text-xs text-muted-foreground">{row.locationSubtitle}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="whitespace-nowrap px-3 py-3.5 text-center align-middle">
                  <div className="text-sm font-semibold text-a7-black">
                    <AedText text={row.soldFor} className="flex-nowrap justify-center" />
                  </div>
                  <div className="mt-0.5 text-xs text-muted-foreground">
                    <AedText text={row.pricePerSqft} className="flex-nowrap justify-center" />
                  </div>
                </TableCell>
                <TableCell className="whitespace-nowrap px-3 py-3.5 text-center text-sm text-a7-text-gray">
                  {row.type}
                </TableCell>
                <TableCell className="whitespace-nowrap px-3 py-3.5 text-center align-middle">
                  <AreaRecentTransactionStatusBadge status={row.status} />
                </TableCell>
                <TableCell className="whitespace-nowrap px-3 py-3.5 text-center text-sm text-a7-text-gray">
                  {row.bedrooms}
                </TableCell>
                <TableCell className="whitespace-nowrap px-4 py-3.5 text-right align-middle text-xs text-muted-foreground">
                  {row.soldDate} / {row.areaSqft.toLocaleString()} sqft
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  )
}

export function AreaDetailPropertiesSection({ area }: AreaDetailPropertiesSectionProps) {
  const section = area.propertiesSection
  const sectionId = getAreaDetailSectionId("properties")

  const [priceMode, setPriceMode] = useState<PriceMode>("sale")
  const [propertyType, setPropertyType] = useState("villa")
  const [beds, setBeds] = useState("2")
  const [txPage, setTxPage] = useState(1)

  const txPageCount = Math.max(1, Math.ceil(section.transactions.length / TRANSACTION_PAGE_SIZE))
  const safeTxPage = Math.min(txPage, txPageCount)

  const visibleTransactions = useMemo(() => {
    const start = (safeTxPage - 1) * TRANSACTION_PAGE_SIZE
    return section.transactions.slice(start, start + TRANSACTION_PAGE_SIZE)
  }, [section.transactions, safeTxPage])

  return (
    <section id={sectionId} className="scroll-mt-28" aria-labelledby={`${sectionId}-heading`}>
      <article className="rounded-2xl border border-border bg-white px-5 py-6 sm:px-7 sm:py-8 md:px-8 md:py-9">
        <h2
          id={`${sectionId}-heading`}
          className="font-heading text-2xl font-bold text-a7-black md:text-3xl lg:text-[2rem]"
        >
          Properties
        </h2>

        <div className="mt-5 space-y-8 md:mt-6 md:space-y-10">
          <Accordion type="single" collapsible defaultValue="property-types" className="w-full">
            <AccordionItem value="property-types" className="border-b border-border">
              <AccordionTrigger className="py-5 text-base font-semibold text-a7-black hover:no-underline md:text-lg">
                Property Types in {area.title}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-sm leading-relaxed text-a7-text-gray md:text-base">
                <p>{section.propertyTypesDescription}</p>
                <PropertyTypeTags tags={section.propertyTypeTags} />
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="subcommunities" className="border-b border-border">
              <AccordionTrigger className="py-5 text-base font-semibold text-a7-black hover:no-underline md:text-lg">
                Subcommunities and Special Homes
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-sm leading-relaxed text-a7-text-gray md:text-base">
                <p>{section.subcommunitiesDescription}</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="rent-sale" className="border-b border-border last:border-b">
              <AccordionTrigger className="py-5 text-base font-semibold text-a7-black hover:no-underline md:text-lg">
                Properties for Rent and Sale
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-sm leading-relaxed text-a7-text-gray md:text-base">
                <p>{section.rentSaleDescription}</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Carousel opts={{ align: "start", loop: section.experts.length > 2 }} className="relative w-full">
            <CarouselSectionHeader title={`${area.title} Property Experts`} />
            <CarouselContent className="-ml-4">
                {section.experts.map((expert) => (
                  <CarouselItem key={expert.id} className="basis-full pl-4 sm:basis-1/2 lg:basis-1/3">
                    <AgentPortraitCardSimple
                      layout="vertical"
                      imageUrl={expert.imageUrl}
                      name={expert.name}
                      role={expert.role}
                      whatsAppHref={expert.whatsAppHref}
                      className="h-full w-full border border-border shadow-sm"
                    />
                  </CarouselItem>
                ))}
            </CarouselContent>
          </Carousel>

          <AreaPopularVillaLocationsSlider
            title={`Popular villa locations in ${area.title}`}
            locations={section.popularVillaLocations}
          />

          <div>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <div
                role="group"
                aria-label="Price type"
                className="flex w-full overflow-hidden rounded-full border border-border bg-white sm:inline-flex sm:w-auto sm:shrink-0"
              >
                {(["sale", "rent"] as const).map((mode) => {
                  const isActive = priceMode === mode
                  return (
                    <button
                      key={mode}
                      type="button"
                      onClick={() => setPriceMode(mode)}
                      className={cn(
                        "flex-1 px-5 py-2 text-center text-sm font-medium capitalize transition-colors sm:flex-initial",
                        isActive
                          ? "bg-primary text-primary-foreground"
                          : "text-a7-text-gray hover:bg-muted/60"
                      )}
                    >
                      {mode}
                    </button>
                  )
                })}
              </div>

              <Select value={propertyType} onValueChange={setPropertyType}>
                <SelectTrigger
                  aria-label="Property type"
                  className="h-10 w-full min-w-[7rem] rounded-full border-border bg-white sm:w-auto"
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="villa">Villa</SelectItem>
                  <SelectItem value="townhouse">Townhouse</SelectItem>
                  <SelectItem value="apartment">Apartment</SelectItem>
                </SelectContent>
              </Select>

              <Select value={beds} onValueChange={setBeds}>
                <SelectTrigger
                  aria-label="Bedrooms"
                  className="h-10 w-full min-w-[7rem] rounded-full border-border bg-white sm:w-auto"
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {["2", "3", "4", "5", "6"].map((n) => (
                    <SelectItem key={n} value={n}>
                      {n} Beds
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="mt-4">
              <h3 className="font-heading text-lg font-bold text-a7-black">Average prices</h3>
              <p className="mt-1 text-xs text-muted-foreground">* Based on listing prices in last 3 months.</p>
            </div>

            <div className="mt-4 overflow-hidden rounded-xl border border-border">
              <Table>
                <TableHeader>
                  <TableRow className="border-border hover:bg-transparent">
                    <TableHead className="text-a7-black">Type</TableHead>
                    <TableHead className="text-right text-a7-black">
                      <AedText text="Avg. Price (AED)" />
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {section.averagePrices.map((row) => (
                    <TableRow key={row.bedrooms} className="border-border hover:bg-muted/30">
                      <TableCell className="px-4 py-3.5 text-sm text-a7-text-gray">{row.bedrooms}</TableCell>
                      <TableCell className="px-4 py-3.5 text-right text-sm font-semibold text-a7-black">
                        <AedText text={priceMode === "sale" ? row.salePrice : row.rentPrice} />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>

          <div>
            <h3 className="font-heading text-lg font-bold text-a7-black md:text-xl">Recent transactions</h3>
            <div className="mt-4">
              <AreaRecentTransactionsTable rows={visibleTransactions} />
            </div>
            {section.transactions.length > TRANSACTION_PAGE_SIZE ? (
              <ListingPagination
                className="mt-6"
                page={safeTxPage}
                pageCount={txPageCount}
                onPageChange={setTxPage}
              />
            ) : null}
          </div>

          <div>
            <h3 className="font-heading text-lg font-bold text-a7-black md:text-xl">
              Explore properties in {area.title} that match your interest
            </h3>
            <div className="mt-5 flex flex-col gap-5 sm:gap-6">
              {section.listings.map((listing) => (
                <PropertyCardListingHorizontal key={listing.id} listing={listing} />
              ))}
            </div>
          </div>
        </div>
      </article>
    </section>
  )
}
