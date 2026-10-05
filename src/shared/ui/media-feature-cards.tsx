import type { ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"
import { Calendar, MapPin, User, Wrench } from "lucide-react"

import { createIconifyIcon, WhatsAppColorIcon } from "@/shared/ui/iconify-icons"
import { Badge } from "@/shared/ui/badge"
import { Button } from "@/shared/ui/button"

const WhatsAppMonoIcon = createIconifyIcon("ri:whatsapp-fill")
import { CARD_HOVER_GROUP, CARD_HOVER_IMAGE, CARD_HOVER_SURFACE } from "@/shared/lib/card-hover"
import { AedText } from "@/shared/ui/aed-text"
import { cn } from "@/shared/lib/cn"

const layoutSplit = "md:flex-row md:items-stretch md:min-h-[280px]"
/** Portrait hero in horizontal layout: square top-right & bottom-right against the side panel (`md` row). */
const horizontalPortraitMediaClip =
  "rounded-t-xl rounded-b-none rounded-tr-xl md:rounded-tr-none md:rounded-br-none md:rounded-tl-2xl md:rounded-bl-2xl md:rounded-r-none md:rounded-l-2xl"
/** Project highlight hero: same flush seam on horizontal `md`. */
const horizontalProjectHeroClip =
  "rounded-tl-lg rounded-tr-lg rounded-b-none md:rounded-tr-none md:rounded-br-none md:rounded-bl-lg md:rounded-tl-lg md:rounded-r-none md:rounded-l-lg"

function hasText(value?: string) {
  return Boolean(value?.trim())
}

function FirstPlaceMedal({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex size-12 shrink-0 flex-col items-center justify-center rounded-full bg-gradient-to-b from-[#E8C547] to-[#B8892C] text-[10px] font-bold leading-none text-white shadow-md ring-2 ring-white/90",
        className
      )}
      aria-hidden
    >
      <span className="mt-0.5">1st</span>
    </div>
  )
}

export type MediaCardLayout = "vertical" | "horizontal"

// ——— Simple agent portrait card ———

export type AgentPortraitCardSimpleProps = {
  imageUrl?: string
  name?: string
  role?: string
  href?: string
  whatsAppHref?: string
  onWhatsAppClick?: () => void
  layout?: MediaCardLayout
  className?: string
  nameClassName?: string
  roleClassName?: string
}

/**
 * Hero portrait with optional name, role, and WhatsApp action.
 * Omits overlay rows and corner control when the related props are not passed.
 */
export function AgentPortraitCardSimple({
  imageUrl,
  name,
  role,
  href,
  whatsAppHref,
  onWhatsAppClick,
  layout = "vertical",
  className,
  nameClassName,
  roleClassName,
}: AgentPortraitCardSimpleProps) {
  const showName = hasText(name)
  const showRole = hasText(role)
  const showWhats = Boolean(whatsAppHref || onWhatsAppClick)
  const showTextBlock = showName || showRole
  const showBottomBar = showTextBlock || showWhats

  const mediaInnerRadius = cn(
    "absolute inset-0 overflow-hidden",
    layout === "horizontal" ? horizontalPortraitMediaClip : "rounded-xl"
  )

  const media = (
    <div
      className={cn(
        "relative w-full bg-muted",
        "aspect-[3/4] min-h-[220px]",
        layout === "horizontal" && "aspect-[3/4] min-h-[240px] max-h-none md:aspect-auto md:max-h-none md:min-h-[280px] md:h-full"
      )}
    >
      <div className={mediaInnerRadius}>
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={hasText(name) ? `${name} — portrait` : "Agent portrait"}
            className={cn("absolute inset-0 z-0 size-full object-cover object-top", CARD_HOVER_IMAGE)}
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
          />
        ) : null}
        {/* Dark hover overlay */}
        <div
          className="absolute inset-0 z-1 bg-black/0 transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:bg-black/35"
          aria-hidden
        />
      </div>
      {layout === "vertical" && showBottomBar ? (
        <>
          {/* Subtle gradient that blends the image into the glass panel */}
          <div
            className="pointer-events-none absolute bottom-0 left-0 z-1 h-full w-full bg-gradient-to-t from-black/50 to-transparent"
            aria-hidden
          />
          {/* Glass panel — must sit above the full-card cover Link (z-[2]) */}
          <div
            className={cn(
              "absolute bottom-2 left-2 right-2 z-3 flex items-end justify-between gap-3 rounded-b-xl px-4 py-3 md:bottom-3 md:left-3 md:right-3 md:gap-4 md:px-5 md:py-4",
              "bg-gradient-to-t from-white/20 to-transparent"
            )}
          >
            {showTextBlock ? (
              href ? (
                <Link href={href} className="min-w-0" aria-label={name ? `View ${name}'s profile` : "View agent profile"}>
                  {showName ? (
                    <p className={cn("text-xs font-bold leading-tight text-white drop-shadow-sm", nameClassName)}>
                      {name}
                    </p>
                  ) : null}
                  {showRole ? (
                    <p className={cn("mt-0.5 text-[11px] text-white/75", roleClassName)}>{role}</p>
                  ) : null}
                </Link>
              ) : (
                <div className="min-w-0">
                  {showName ? (
                    <p className={cn("text-xs font-bold leading-tight text-white drop-shadow-sm", nameClassName)}>
                      {name}
                    </p>
                  ) : null}
                  {showRole ? (
                    <p className={cn("mt-0.5 text-[11px] text-white/75", roleClassName)}>{role}</p>
                  ) : null}
                </div>
              )
            ) : (
              <span />
            )}
            {showWhats ? <WhatsAppCornerButton href={whatsAppHref} onClick={onWhatsAppClick} /> : null}
          </div>
        </>
      ) : null}
    </div>
  )

  if (layout === "horizontal") {
    return (
      <div
        className={cn(
          CARD_HOVER_GROUP,
          CARD_HOVER_SURFACE,
          "flex w-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm",
          layoutSplit,
          className
        )}
      >
        <div
          className={cn(
            "relative w-full md:shrink-0",
            showTextBlock || showWhats ? "md:w-[45%] md:max-w-[min(100%,420px)]" : "md:w-full"
          )}
        >
          {media}
        </div>
        {(showTextBlock || showWhats) && (
          <div className="flex flex-1 flex-col justify-end gap-3 bg-zinc-950 px-5 py-5 md:w-[55%] md:min-w-0">
           <div className="w-full flex items-center gap-2">
            {showTextBlock ? (
              <div className="flex-1"> 
                {showName ? <p className="text-lg font-bold text-white">{name}</p> : null}
                {showRole ? <p className="mt-0.5 text-xs text-white/85">{role}</p> : null}
              </div>
            ) : null}
            {showWhats ? (
              <div className="flex justify-end">
                <WhatsAppCornerButton href={whatsAppHref} onClick={onWhatsAppClick} />
              </div>
            ) : null}
            </div>
          </div>
        )}
      </div>
    )
  }

  return (
    <div
      className={cn(
        CARD_HOVER_GROUP,
        CARD_HOVER_SURFACE,
        "relative w-full overflow-hidden rounded-2xl border border-border bg-card shadow-sm",
        className
      )}
    >
      {href ? (
        <Link
          href={href}
          className="absolute inset-0 z-[2]"
          aria-label={name ? `View ${name}'s profile` : "View agent profile"}
        />
      ) : null}
      {media}
    </div>
  )
}

function WhatsAppCornerButton({
  href,
  onClick,
}: {
  href?: string
  onClick?: () => void
}) {
  const cls =
    "relative z-[3] size-[38px] min-h-[38px] min-w-[38px] shrink-0 rounded-xl border-0 bg-[#25D366] p-0 shadow-md hover:bg-[#20c15e] [&_svg]:size-5.5 [&_svg]:text-white"
  const inner = <WhatsAppMonoIcon className="size-5.5 text-white" />

  if (href) {
    return (
      <Button asChild variant="ghost" size="icon-sm" shape="square" className={cls}>
        <Link href={href} target="_blank" rel="noreferrer" aria-label="WhatsApp">
          {inner}
        </Link>
      </Button>
    )
  }

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon-sm"
      shape="square"
      className={cls}
      aria-label="WhatsApp"
      onClick={onClick}
    >
      {inner}
    </Button>
  )
}

// ——— Detailed agent portrait card ———

export type AgentPortraitCardDetailedProps = {
  imageUrl?: string
  roleBadge?: string
  /** Renders the gold “1st” medal; omit for no decoration. */
  showRankMedal?: boolean
  /** Replaces the default medal when set. */
  topRight?: ReactNode
  name?: string
  /** Job title under the name (e.g. Senior Property Consultant). */
  subtitle?: string
  nationality?: string
  languages?: string
  whatsAppHref?: string
  profileHref?: string
  onWhatsAppClick?: () => void
  onProfileClick?: () => void
  layout?: MediaCardLayout
  className?: string
}

/**
 * Full-bleed portrait with optional role badge, rank decoration, bio lines, and CTAs.
 * Each region is omitted when its props are absent.
 */
export function AgentPortraitCardDetailed({
  imageUrl,
  roleBadge,
  showRankMedal,
  topRight,
  name,
  subtitle,
  nationality,
  languages,
  whatsAppHref,
  profileHref,
  onWhatsAppClick,
  onProfileClick,
  layout = "vertical",
  className,
}: AgentPortraitCardDetailedProps) {
  const showRoleBadge = hasText(roleBadge)
  const medal = topRight ?? (showRankMedal ? <FirstPlaceMedal /> : null)
  const showName = hasText(name)
  const showSubtitle = hasText(subtitle)
  const showNat = hasText(nationality)
  const showLang = hasText(languages)
  const showWhatsapp = Boolean(whatsAppHref || onWhatsAppClick)
  const showProfile = Boolean(profileHref || onProfileClick)
  const showActions = showWhatsapp || showProfile
  const showOverlayCopy = showName || showSubtitle || showNat || showLang
  const topRow = showRoleBadge || medal

  const floatingChrome = (
    <>
      {topRow ? (
        <>
          <span className="pointer-events-auto absolute top-3 left-3">
            {showRoleBadge ? (
              <Badge variant="meta" shape="pill" className="border-0 bg-white/95 px-3 py-1 text-xs font-semibold text-emerald-700 shadow-sm">
                {roleBadge}
              </Badge>
            ) : null}
          </span>
          <span className="pointer-events-auto absolute top-3 right-0">
            {topRight
              ? medal
              : showRankMedal
                ? <Image src="/assets/brand/positiontag.svg" alt="Position tag" width={80} height={80} className="h-20 w-20" />
                : null}
          </span>
        </>
      ) : null}
    </>
  )

  const copyInner = (
    <>
      {showName ? <p className="text-lg font-bold text-white md:text-xl">{name}</p> : null}
      {showSubtitle ? <p className="text-sm font-medium text-white/90">{subtitle}</p> : null}
      {showNat ? (
        <p className="text-sm text-white/90">
          Nationality: <span className="font-semibold text-white">{nationality}</span>
        </p>
      ) : null}
      {showLang ? (
        <p className="text-sm text-white/90">
          Languages: <span className="font-semibold text-white">{languages}</span>
        </p>
      ) : null}
    </>
  )

  const copyBlock = (
    <div className="relative z-1 space-y-1.5 text-center">{copyInner}</div>
  )

  const actionsRow = showActions ? (
    <div className="relative z-1 mt-4 flex flex-wrap justify-center gap-2">
      {showWhatsapp ? (
        <AgentPillButton
          href={whatsAppHref}
          onClick={onWhatsAppClick}
          label="Whatsapp"
          tone="whatsapp"
          icon={<WhatsAppColorIcon className="size-4 shrink-0" aria-hidden />}
        />
      ) : null}
      {showProfile ? (
        <AgentPillButton
          href={profileHref}
          onClick={onProfileClick}
          label="Profile"
          icon={<User className="size-4" aria-hidden />}
        />
      ) : null}
    </div>
  ) : null

  const bottomOverlay =
    showOverlayCopy || showActions ? (
      <div
        className={cn(
          "absolute bottom-0 z-3 w-full rounded-b-xl bg-linear-to-t from-black/90 via-black/55 to-transparent px-3 pb-3 md:px-4 md:pb-4",
          showOverlayCopy ? "pt-16" : "pt-8"
        )}
      >
        {profileHref ? (
          <Link
            href={profileHref}
            className="absolute inset-0 z-0 rounded-b-xl"
            aria-label={name ? `View ${name}'s profile` : "View agent profile"}
          />
        ) : null}
        {showOverlayCopy ? copyBlock : null}
        {actionsRow}
      </div>
    ) : null

  const mediaInnerRadius = cn(
    "absolute inset-0 overflow-hidden",
    layout === "horizontal" ? horizontalPortraitMediaClip : "rounded-xl"
  )

  const mediaColumn = (
    <div
      className={cn(
        "relative w-full overflow-hidden bg-muted",
        "aspect-[3/4] min-h-[280px]",
        layout === "horizontal" && "max-h-none md:aspect-auto md:max-h-none md:min-h-[280px] md:h-full"
      )}
    >
      <div className={mediaInnerRadius}>
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={showName ? `${name} — portrait` : "Agent profile"}
            className={cn("absolute inset-0 z-0 size-full object-cover object-top", CARD_HOVER_IMAGE)}
            fill
          />
        ) : null}
      </div>
      {profileHref && layout === "vertical" ? (
        <Link
          href={profileHref}
          className="absolute inset-0 z-2"
          aria-label={name ? `View ${name}'s profile` : "View agent profile"}
        />
      ) : null}
      {floatingChrome}
      {layout === "vertical" ? bottomOverlay : null}
    </div>
  )

  if (layout === "horizontal") {
    const sidePanel = showOverlayCopy || showActions

    return (
      <div
        className={cn(
          CARD_HOVER_GROUP,
          CARD_HOVER_SURFACE,
          "flex w-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm",
          layoutSplit,
          className
        )}
      >
        <div className={cn("relative w-full md:shrink-0", sidePanel ? "md:w-[45%]" : "md:w-full")}>{mediaColumn}</div>
        {sidePanel ? (
          <div className="flex flex-1 flex-col justify-center gap-2 bg-zinc-950 px-5 py-6 md:w-[55%] md:min-w-0">
            <div className="space-y-1.5 text-left">
              {showName ? <p className="text-xl font-bold text-white">{name}</p> : null}
              {showSubtitle ? <p className="text-sm font-medium text-white/90">{subtitle}</p> : null}
              {showNat ? (
                <p className="text-sm text-white/90">
                  Nationality: <span className="font-semibold text-white">{nationality}</span>
                </p>
              ) : null}
              {showLang ? (
                <p className="text-sm text-white/90">
                  Languages: <span className="font-semibold text-white">{languages}</span>
                </p>
              ) : null}
            </div>
            {showActions ? (
              <div className="mt-2 flex flex-wrap gap-2 md:mt-4">
                {showWhatsapp ? (
                  <AgentPillButton
                    href={whatsAppHref}
                    onClick={onWhatsAppClick}
                    label="Whatsapp"
                    tone="whatsapp"
                    icon={<WhatsAppColorIcon className="size-4 shrink-0" aria-hidden />}
                  />
                ) : null}
                {showProfile ? (
                  <AgentPillButton
                    href={profileHref}
                    onClick={onProfileClick}
                    label="Profile"
                    icon={<User className="size-4" aria-hidden />}
                  />
                ) : null}
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    )
  }

  return (
    <div
      className={cn(
        CARD_HOVER_GROUP,
        CARD_HOVER_SURFACE,
        "relative w-full overflow-hidden rounded-2xl border border-border bg-card shadow-sm",
        className
      )}
    >
      {mediaColumn}
    </div>
  )
}

function AgentPillButton({
  label,
  icon,
  href,
  onClick,
  tone = "default",
}: {
  label: string
  icon: ReactNode
  href?: string
  onClick?: () => void
  tone?: "default" | "whatsapp"
}) {
  const className = cn(
    "h-10 gap-2 rounded-full border border-white/20 bg-white px-4 text-sm font-medium text-a7-text-gray shadow-sm hover:bg-white/95",
    tone === "whatsapp" && "[&_svg]:!text-[#25D366] [&_.iconify]:!text-[#25D366]"
  )

  if (href) {
    return (
      <Button asChild variant="outline" size="sm" shape="pill" className={className}>
        <Link href={href} className="inline-flex items-center gap-2">
          {icon}
          {label}
        </Link>
      </Button>
    )
  }

  return (
    <Button type="button" variant="outline" size="sm" shape="pill" className={className} onClick={onClick} iconLeft={icon}>
      {label}
    </Button>
  )
}


export type ProjectHighlightCardProps = {
  imageUrl?: string
  paymentPlan?: string
  title?: string
  location?: string
  handover?: string
  developer?: string
  pricePrefix?: string
  price?: string
  layout?: MediaCardLayout
  className?: string
}

export function ProjectHighlightCard({
  imageUrl,
  paymentPlan,
  title,
  location,
  handover,
  developer,
  pricePrefix = "From",
  price,
  layout = "vertical",
  className,
}: ProjectHighlightCardProps) {
  const showPlan = hasText(paymentPlan)
  const showImage = Boolean(imageUrl)
  const showTitle = hasText(title)
  const showLoc = hasText(location)
  const showHandover = hasText(handover)
  const showDev = hasText(developer)
  const showMeta = showLoc || showHandover || showDev
  const showPrice = hasText(price)
  const showHero = showImage || showPlan

  const hero = showHero ? (
    <div
      className={cn(
        "relative w-full",
        layout === "vertical"
          ? "aspect-[5/3] min-h-[200px] "
          : "min-h-[220px]  md:min-h-0 md:h-full ",
        layout === "horizontal" && "md:aspect-auto"
      )}
    >
      {showImage ? (
        <div
          className={cn(
            "absolute inset-0 overflow-hidden",
            layout === "horizontal" ? horizontalProjectHeroClip : null
          )}
        >
          <Image
            src={imageUrl!}
            alt={showTitle ? `${title} — project image` : "Project image"}
            className={cn(
              "absolute inset-0 z-0 size-full object-cover object-top",
              CARD_HOVER_IMAGE,
              layout === "vertical" && "rounded-tl-lg rounded-tr-lg"
            )}
            fill
          />
          <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-black/35 via-transparent to-transparent" />
        </div>
      ) : null}
      {showPlan ? (
        <div
          className={cn(
            "absolute z-[2]",
            showImage ? "-left-[17px] top-3" : "left-4 top-4"
          )}
        >
          <Badge variant="paymentPlan" size="lg">
            {paymentPlan}
          </Badge>
        </div>
      ) : null}
    </div>
  ) : null

  const metaRows = (
    <div className={cn("flex items-center flex-wrap gap-2 text-[13px] text-muted-foreground", !showTitle && showMeta ? "pt-0" : null)}>
      {showLoc ? (
        <div className="flex items-center gap-2">
          <MapPin className="size-4 shrink-0 text-a7-text-gray/60" aria-hidden />
          <span className="line-clamp-2">{location}</span>
        </div>
      ) : null}
      {showHandover ? (
        <div className="flex items-center gap-2">
          <Calendar className="size-4 shrink-0 text-a7-text-gray/60" aria-hidden />
          <span className="line-clamp-2">{handover}</span>
        </div>
      ) : null}
      {showDev ? (
        <div className="flex items-center gap-2">
          <Wrench className="size-4 shrink-0 text-a7-text-gray/60" aria-hidden />
          <span className="line-clamp-2">{developer}</span>
        </div>
      ) : null}
    </div>
  )

  const body = (
    <div
      className={cn(
        "flex flex-1 flex-col gap-3 p-4 md:p-5",
        layout === "vertical" && showHero && "rounded-b-2xl",
        layout === "vertical" && !showHero && "rounded-2xl",
        layout === "horizontal" && "rounded-b-2xl md:rounded-r-2xl md:rounded-bl-none md:justify-center"
      )}
    >
      {showTitle ? <h3 className="font-inter text-xl font-bold  text-a7-text-gray md:text-[22px]">{title}</h3> : null}
      {showMeta ? metaRows : null}
      {showPrice ? (
        <Button variant="property" shape="default" className="mt-1 w-full  text-base font-semibold">
          {hasText(pricePrefix) ? <span className="font-normal text-primary">{pricePrefix}</span> : null}
          {hasText(pricePrefix) ? (
            <span className="ml-2 text-white">
              <AedText text={price} />
            </span>
          ) : (
            <span className="text-white">
              <AedText text={price} />
            </span>
          )}
        </Button>
      ) : null}
    </div>
  )

  if (layout === "horizontal") {
    return (
      <div
        className={cn(
          CARD_HOVER_GROUP,
          CARD_HOVER_SURFACE,
          "flex w-full flex-col rounded-lg border border-border bg-card shadow-sm md:flex-row md:items-stretch",
          className
        )}
      >
        {showHero ? (
          <div className="relative w-full aspect-[16/10] overflow-hidden md:aspect-auto md:w-[46%] md:max-w-[min(100%,400px)] md:shrink-0">
            {hero}
          </div>
        ) : null}
        {body}
      </div>
    )
  }

  return (
    <div className={cn(CARD_HOVER_GROUP, CARD_HOVER_SURFACE, "w-full rounded-lg bg-card", className)}>
      {hero}
      {body}
    </div>
  )
}

AgentPortraitCardSimple.displayName = "AgentPortraitCardSimple"
AgentPortraitCardDetailed.displayName = "AgentPortraitCardDetailed"
ProjectHighlightCard.displayName = "ProjectHighlightCard"
