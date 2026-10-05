"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"

import { NewsPostCard } from "@/features/home/ui/home/news-post-card"
import { SectionHeader } from "@/features/home/ui/home/section-header"
import { Button } from "@/shared/ui/button"
import { cn } from "@/shared/lib/cn"
import type { HomeNewsPost } from "@/features/home/services/content"

export type RealEstateNewsProps = {
  posts: readonly HomeNewsPost[]
  viewAllHref?: string
  className?: string
}

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]
const VIEWPORT = { once: true, amount: 0.1 as const }

export function RealEstateNews({ posts, viewAllHref = "/blog", className }: RealEstateNewsProps) {
  if (posts.length === 0) return null

  return (
    <section
      className={cn("bg-black py-12 text-white md:py-16 lg:py-20", className)}
      aria-label="Real estate news"
    >
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Real Estate News"
          className="mb-8 sm:mb-10 [&_h2]:text-white"
          action={
            <Link href={viewAllHref} className="shrink-0">
              <Button
                type="button"
                variant="default"
                shape="pill"
                size="sm"
                label="View All Posts"
                iconRight={<ArrowUpRight className="size-4 text-black" strokeWidth={2.25} />}
                className="px-6"
              />
            </Link>
          }
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-6">
          {posts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.85, ease: EASE, delay: i * 0.14 }}
            >
              <NewsPostCard post={post} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
