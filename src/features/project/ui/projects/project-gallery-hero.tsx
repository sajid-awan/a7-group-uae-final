"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { Building2, ChevronLeft, ChevronRight } from "lucide-react"
import { Autoplay, Thumbs } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import type { Swiper as SwiperType } from "swiper"

import { AedText } from "@/shared/ui/aed-text"
import { BreadcrumbList, type BreadcrumbItem } from "@/shared/ui/breadcrumb"
import { ProjectHeroSearch } from "@/features/project/ui/projects/project-hero-search"
import type { Property } from "@/features/property"

import "swiper/css"
import "swiper/css/thumbs"

type ProjectGalleryHeroProps = {
  images: string[]
  project: Property
}

export function ProjectGalleryHero({ images, project }: ProjectGalleryHeroProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null)
  const mainSwiperRef = useRef<SwiperType | null>(null)

  return (
    <div className="w-full">
      {/* Main hero slider */}
      <div className="relative h-[580px] w-full bg-black">
        <Swiper
          modules={[Autoplay, Thumbs]}
          onSwiper={(swiper) => { mainSwiperRef.current = swiper }}
          thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
          autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          speed={700}
          loop
          className="absolute inset-0 h-full w-full"
        >
          {images.map((src, i) => (
            <SwiperSlide key={i} className="relative overflow-hidden">
              <Image
                src={src}
                alt={`${project.title} — image ${i + 1}`}
                fill
                priority={i === 0}
                sizes="100vw"
                className="object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          type="button"
          onClick={() => mainSwiperRef.current?.slidePrev()}
          aria-label="Previous image"
          className="absolute left-4 top-1/2 z-30 hidden h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full border border-white bg-white text-a7-black transition hover:bg-black/60 md:flex"
        >
          <ChevronLeft className="size-5" />
        </button>

        <button
          type="button"
          onClick={() => mainSwiperRef.current?.slideNext()}
          aria-label="Next image"
          className="absolute right-4 top-1/2 z-30 hidden h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full border border-white bg-white text-a7-black transition hover:bg-black/60 md:flex"
        >
          <ChevronRight className="size-5" />
        </button>

        {/* Gradient overlays */}
        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-67.5 bg-linear-to-b from-black to-transparent" aria-hidden />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[80%] bg-linear-to-t from-black to-transparent" aria-hidden />

        {/* Hero content */}
        <div className="absolute inset-x-0 bottom-0 z-20">
          <div className="mx-auto container px-4 pb-5 sm:pt-32 pt-4 md:px-10">
            <BreadcrumbList
              variant="inverted"
              size="sm"
              className="mb-3"
              items={[
                { kind: "home", href: "/" },
                { kind: "link", href: "#", label: "Offplan Project" },
                { kind: "link", href: "#", label: project.location.split(",")[0] },
                { kind: "current", label: project.title },
              ] satisfies BreadcrumbItem[]}
            />

            <div className="flex flex-wrap sm:flex-row flex-col sm:items-end justify-between gap-4">
              <div>
                <h1 className="font-heading text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
                  {project.title}
                </h1>
                <div className="mt-1.5 flex items-center gap-1.5 text-sm text-white">
                  <Building2 className="size-4 shrink-0" />
                  <span>{project.location}</span>
                </div>
              </div>
              <div className="sm:text-right">
                <p className="text-xs font-medium uppercase tracking-widest text-white/60">Starting Price</p>
                <p className="font-heading text-3xl font-bold text-white md:text-4xl">
                  <AedText text={project.priceFrom} />
                </p>
              </div>
            </div>

            <div className="mt-5">
              <ProjectHeroSearch />
            </div>
          </div>
        </div>
      </div>

      {/* Thumbnail strip */}
      <Swiper
        modules={[Thumbs]}
        onSwiper={setThumbsSwiper}
        slidesPerView={images.length}
        watchSlidesProgress
        className="h-30 w-full md:h-35 [&_.swiper-slide]:cursor-pointer [&_.swiper-slide]:overflow-hidden [&_.swiper-slide]:opacity-60 [&_.swiper-slide]:transition-opacity [&_.swiper-slide]:duration-200 [&_.swiper-slide:hover]:opacity-90 [&_.swiper-slide-thumb-active]:opacity-100 [&_.swiper-slide-thumb-active]:ring-2 [&_.swiper-slide-thumb-active]:ring-inset [&_.swiper-slide-thumb-active]:ring-(--project-primary,#C19A5B)"
      >
        {images.map((src, i) => (
          <SwiperSlide key={i} className="relative">
            <Image src={src} alt="" fill sizes="20vw" className="object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
