"use client"

import { useEffect, useMemo, useState } from "react"
import { Check, Clock3, Copy, Search, Shapes, Star } from "lucide-react"

import { iconList } from "@/shared/icons/iconList"

const FAVORITES_STORAGE_KEY = "a7-icons-favorites"
const RECENT_STORAGE_KEY = "a7-icons-recent"

const sizePresets = [16, 20, 24, 32, 40] as const

function normalizeText(value: string) {
  return value.toLowerCase().trim()
}

function getIconCategory(fileName: string) {
  const baseName = fileName.replace(/\.svg$/i, "")
  const [firstSegment] = baseName.split("-")
  return firstSegment?.toLowerCase() || "general"
}

function readStoredArray(key: string) {
  if (typeof window === "undefined") return []
  try {
    const raw = window.localStorage.getItem(key)
    if (!raw) return []
    const parsed: unknown = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed.filter((item): item is string => typeof item === "string") : []
  } catch {
    return []
  }
}

export default function IconsGalleryPage() {
  const [search, setSearch] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")
  const [iconSize, setIconSize] = useState<number>(24)
  const [strokeWidth, setStrokeWidth] = useState<number>(1.5)
  const [color, setColor] = useState("#0f766e")
  const [favorites, setFavorites] = useState<string[]>([])
  const [recentlyCopied, setRecentlyCopied] = useState<string[]>([])

  useEffect(() => {
    setFavorites(readStoredArray(FAVORITES_STORAGE_KEY))
    setRecentlyCopied(readStoredArray(RECENT_STORAGE_KEY))
  }, [])
  const [copiedKey, setCopiedKey] = useState<string | null>(null)

  const categories = useMemo(() => {
    const counts = new Map<string, number>()

    for (const icon of iconList) {
      const category = getIconCategory(icon.fileName)
      counts.set(category, (counts.get(category) ?? 0) + 1)
    }

    const values = Array.from(counts.entries())
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
      .slice(0, 24)
      .map(([name]) => name)

    return ["all", ...values]
  }, [])

  const filteredIcons = useMemo(() => {
    const needle = normalizeText(search)

    return iconList.filter((icon) => {
      const searchable = `${icon.name} ${icon.componentName} ${icon.fileName} ${icon.tags.join(" ")}`.toLowerCase()
      const categoryMatch = activeCategory === "all" || getIconCategory(icon.fileName) === activeCategory
      const searchMatch = needle.length === 0 || searchable.includes(needle)

      return categoryMatch && searchMatch
    })
  }, [activeCategory, search])

  const favoritesSet = useMemo(() => new Set(favorites), [favorites])

  const favoriteIcons = useMemo(() => {
    if (favorites.length === 0) {
      return []
    }

    return iconList.filter((icon) => favoritesSet.has(icon.componentName)).slice(0, 8)
  }, [favorites, favoritesSet])

  const iconByComponentName = useMemo(() => {
    return new Map(iconList.map((icon) => [icon.componentName, icon]))
  }, [])

  async function copyText(key: string, value: string, iconName: string) {
    await navigator.clipboard.writeText(value)
    setCopiedKey(key)
    setTimeout(() => setCopiedKey((prev) => (prev === key ? null : prev)), 1200)

    setRecentlyCopied((current) => {
      const next = [iconName, ...current.filter((item) => item !== iconName)].slice(0, 8)
      localStorage.setItem(RECENT_STORAGE_KEY, JSON.stringify(next))
      return next
    })
  }

  function toggleFavorite(componentName: string) {
    setFavorites((current) => {
      const exists = current.includes(componentName)
      const next = exists ? current.filter((name) => name !== componentName) : [componentName, ...current]
      localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(next))
      return next
    })
  }

  return (
    <div className="mx-auto max-w-[1400px] p-6 md:p-8">
      <header className="rounded-2xl border border-border/70 bg-[linear-gradient(120deg,color-mix(in_srgb,var(--card)_82%,#f6e8cb)_0%,var(--card)_45%,color-mix(in_srgb,var(--primary)_12%,var(--card))_100%)] px-6 py-5 shadow-sm">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Icon Library</p>
            <h1 className="mt-1 flex items-center gap-2 text-2xl font-semibold tracking-tight">
              <Shapes className="size-5 text-primary" />
              General SVG Icons
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
              Search, preview, and copy usage snippets for all generated icons from public/assets/general.
            </p>
          </div>
          <div className="rounded-xl border border-border/70 bg-card/80 px-3 py-2 text-right">
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Showing</p>
            <p className="text-lg font-semibold leading-none">{filteredIcons.length}</p>
          </div>
        </div>
      </header>

      <section className="sticky top-0 z-20 mt-6 rounded-2xl border border-border/70 bg-card/90 p-4 shadow-sm backdrop-blur">
        <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_auto_auto_auto] lg:items-center">
          <label className="relative block">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search by name, tags, or filename"
              className="h-10 w-full rounded-xl border border-input bg-white pl-10 pr-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </label>

          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-muted-foreground">Size</span>
            <div className="flex rounded-lg border border-input bg-white p-1">
              {sizePresets.map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => setIconSize(size)}
                  className={`rounded-md px-2 py-1 text-xs transition ${
                    iconSize === size ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-accent"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <label className="flex items-center gap-2 text-xs text-muted-foreground">
            Stroke
            <input
              type="range"
              min={0.5}
              max={3}
              step={0.25}
              value={strokeWidth}
              onChange={(event) => setStrokeWidth(Number(event.target.value))}
              className="w-24"
            />
            <span className="w-10 text-right font-medium text-a7-text-gray">{strokeWidth.toFixed(2)}</span>
          </label>

          <label className="flex items-center gap-2 text-xs text-muted-foreground">
            Color
            <input
              type="color"
              value={color}
              onChange={(event) => setColor(event.target.value)}
              className="h-9 w-10 cursor-pointer rounded-md border border-input bg-white p-1"
            />
            <input
              value={color}
              onChange={(event) => setColor(event.target.value)}
              className="h-9 w-24 rounded-md border border-input bg-white px-2 text-xs text-a7-text-gray"
            />
          </label>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-3 py-1 text-xs capitalize transition ${
                activeCategory === category
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-white text-muted-foreground hover:border-primary/40"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <section className="mt-6 grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-border/70 bg-card p-4">
          <h2 className="text-sm font-semibold">Favorite Icons</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {favoriteIcons.length > 0 ? (
              favoriteIcons.map((icon) => {
                const FavoriteIcon = icon.component

                return (
                  <span
                    key={icon.componentName}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-3 py-1 text-xs"
                  >
                    <FavoriteIcon size={14} strokeWidth={strokeWidth} color={color} />
                    {icon.componentName}
                  </span>
                )
              })
            ) : (
              <p className="text-xs text-muted-foreground">No favorites yet.</p>
            )}
          </div>
        </div>

        <div className="rounded-2xl border border-border/70 bg-card p-4">
          <h2 className="flex items-center gap-2 text-sm font-semibold">
            <Clock3 className="size-4 text-primary" />
            Recently Copied
          </h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {recentlyCopied.length > 0 ? (
              recentlyCopied.map((name) => {
                const icon = iconByComponentName.get(name)

                if (!icon) {
                  return (
                    <span key={name} className="rounded-full border border-border bg-white px-3 py-1 text-xs">
                      {name}
                    </span>
                  )
                }

                const RecentIcon = icon.component

                return (
                  <span
                    key={name}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-3 py-1 text-xs"
                  >
                    <RecentIcon size={14} strokeWidth={strokeWidth} color={color} />
                    {name}
                  </span>
                )
              })
            ) : (
              <p className="text-xs text-muted-foreground">Copy any icon to build a quick history.</p>
            )}
          </div>
        </div>
      </section>

      <section className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredIcons.map((icon) => {
          const Icon = icon.component
          const isFavorite = favoritesSet.has(icon.componentName)
          const usage = `import { ${icon.componentName} } from "@/shared/icons"\n\n<${icon.componentName} size={24} className="text-primary" />`

          return (
            <article
              key={icon.componentName}
              className="group rounded-2xl border border-border/80 bg-card p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-md"
            >
              <button
                type="button"
                onClick={() => copyText(`${icon.componentName}:usage`, usage, icon.componentName)}
                className="flex h-24 w-full items-center justify-center rounded-xl border border-dashed border-border bg-muted/40 transition group-hover:border-primary/50"
                aria-label={`Copy usage for ${icon.componentName}`}
              >
                <Icon size={iconSize} strokeWidth={strokeWidth} color={color} />
              </button>

              <div className="mt-3">
                <p className="truncate text-sm font-semibold">{icon.componentName}</p>
                <p className="truncate text-xs text-muted-foreground">{icon.fileName}</p>
              </div>

              <div className="mt-3 flex flex-wrap gap-1">
                {icon.tags.slice(0, 4).map((tag) => (
                  <span key={tag} className="rounded-full bg-muted px-2 py-0.5 text-[10px] uppercase tracking-wide text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-4 grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => copyText(`${icon.componentName}:name`, `<${icon.componentName} />`, icon.componentName)}
                  className="flex items-center justify-center gap-1 rounded-lg border border-border bg-white px-2 py-1.5 text-xs transition hover:border-primary/40"
                >
                  {copiedKey === `${icon.componentName}:name` ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
                  Name
                </button>
                <button
                  type="button"
                  onClick={() =>
                    copyText(
                      `${icon.componentName}:import`,
                      `import { ${icon.componentName} } from "@/shared/icons"`,
                      icon.componentName
                    )
                  }
                  className="flex items-center justify-center gap-1 rounded-lg border border-border bg-white px-2 py-1.5 text-xs transition hover:border-primary/40"
                >
                  {copiedKey === `${icon.componentName}:import` ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
                  Import
                </button>
                <button
                  type="button"
                  onClick={() => copyText(`${icon.componentName}:usage`, usage, icon.componentName)}
                  className="col-span-2 flex items-center justify-center gap-1 rounded-lg border border-border bg-white px-2 py-1.5 text-xs transition hover:border-primary/40"
                >
                  {copiedKey === `${icon.componentName}:usage` ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
                  Usage
                </button>
              </div>

              <button
                type="button"
                onClick={() => toggleFavorite(icon.componentName)}
                className={`mt-3 flex w-full items-center justify-center gap-1 rounded-lg border px-2 py-1.5 text-xs transition ${
                  isFavorite
                    ? "border-yellow-400/60 bg-yellow-100/70 text-yellow-900 dark:bg-yellow-900/30 dark:text-yellow-100"
                    : "border-border bg-white hover:border-primary/40"
                }`}
              >
                <Star className={`size-3.5 ${isFavorite ? "fill-current" : ""}`} />
                {isFavorite ? "Favorited" : "Add favorite"}
              </button>
            </article>
          )
        })}
      </section>
    </div>
  )
}
