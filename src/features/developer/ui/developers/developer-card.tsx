import Image from "next/image"
import Link from "next/link"

import type { DubaiDeveloperProfile } from "@/features/developer/services/content"
import { cn } from "@/shared/lib/cn"

type DeveloperCardProps = {
  developer: DubaiDeveloperProfile
  className?: string
}

export function DeveloperCard({ developer, className }: DeveloperCardProps) {
  return (
    <article
      className={cn(
        "grid overflow-hidden rounded-xl border border-border py-11 px-4 bg-white md:grid-cols-[minmax(0,2fr)_minmax(0,4fr)]",
        className
      )}
    >
      <div className="flex min-h-[140px] items-center justify-center border-r">
        {developer.logoSrc ? (
          <Image
            src={developer.logoSrc}
            alt=""
            width={200}
            height={80}
            className="!h-auto  w-full max-w-full object-contain"
          />
        ) : (
          <span
            className="font-heading text-2xl font-semibold tracking-tight text-a7-black/80 md:text-3xl"
            aria-hidden
          >
            {developer.name}
          </span>
        )}
      </div>

      <div className="flex flex-col justify-center px-2 py-4 sm:px-3 sm:py-6 md:px-4">
        <h2 className=" text-xl font-inter font-bold text-a7-black md:text-2xl">{developer.name}</h2>
        <p className="mt-1 text-sm text-muted-foreground">Founded in {developer.foundedYear}</p>
        <p className="mt-3 text-sm leading-relaxed text-a7-text-gray md:text-base">{developer.description}</p>
        <p className="mt-4">
          <Link
            href={developer.learnMoreHref}
            className="text-sm font-medium text-a7-black underline underline-offset-4 transition-colors hover:text-a7-black/80"
          >
            Learn more
          </Link>
        </p>
      </div>
    </article>
  )
}
