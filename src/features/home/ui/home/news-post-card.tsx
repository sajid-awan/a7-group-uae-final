import Image from "next/image"
import Link from "next/link"
import { Calendar, Eye } from "lucide-react"

import { CARD_HOVER_GROUP, CARD_HOVER_IMAGE, CARD_HOVER_SURFACE } from "@/shared/lib/card-hover"
import { cn } from "@/shared/lib/cn"
import type { HomeNewsPost } from "@/features/home/services/content"

export type NewsPostCardVariant = "dark" | "light" | "card"

export type NewsPostCardProps = {
  post: HomeNewsPost
  variant?: NewsPostCardVariant
  className?: string
}

const variantStyles = {
  dark: {
    meta: "text-white/55",
    title: "text-white",
    titleHover: "hover:text-white/90",
    excerpt: "text-white/55",
    wrapper: "",
  },
  light: {
    meta: "text-muted-foreground",
    title: "text-a7-text-gray",
    titleHover: "hover:text-a7-text-gray/80",
    excerpt: "text-muted-foreground",
    wrapper: "",
  },
  card: {
    meta: "text-muted-foreground",
    title: "text-a7-text-gray",
    titleHover: "hover:text-a7-text-gray/80",
    excerpt: "text-muted-foreground",
    wrapper: "rounded-2xl border border-border bg-card p-4 shadow-sm",
  },
} satisfies Record<NewsPostCardVariant, Record<string, string>>

export function NewsPostCard({ post, variant = "dark", className }: NewsPostCardProps) {
  const styles = variantStyles[variant]

  return (
    <article className={cn(CARD_HOVER_GROUP, CARD_HOVER_SURFACE, "flex flex-col", styles.wrapper, className)}>
      <Link
        href={post.href}
        className={cn(
          "relative block aspect-[16/10] overflow-hidden rounded-xl",
          post.featured && "ring-offset-black"
        )}
      >
        <Image
          src={post.imageUrl}
          alt=""
          fill
          className={cn("object-cover", CARD_HOVER_IMAGE)}
          sizes="(max-width: 1024px) 100vw, 33vw"
        />
      </Link>

      <div className={cn("mt-3 flex flex-wrap items-center justify-between gap-3 text-xs", styles.meta)}>
        <span className="inline-flex items-center gap-1">
          <Calendar className="size-3 shrink-0" aria-hidden />
          {post.date}
        </span>
        <span className="inline-flex items-center gap-1">
          <Eye className="size-3 shrink-0" aria-hidden />
          {post.views} Views
        </span>
      </div>

      <h3 className={cn("mt-2 line-clamp-2 font-inter text-xs font-black uppercase leading-snug tracking-wide sm:text-sm", styles.title)}>
        <Link href={post.href} className={styles.titleHover}>
          {post.title}
        </Link>
      </h3>

      <p className={cn("mt-1.5 line-clamp-3 text-xs leading-relaxed sm:text-sm", styles.excerpt)}>{post.excerpt}</p>
    </article>
  )
}
