import type { ComponentType, SVGProps } from "react"
import Link from "next/link"
import { cva, type VariantProps } from "class-variance-authority"
import { Mail } from "lucide-react"

import { PhoneCall01Icon } from "@/shared/icons"

import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar"
import { Button } from "@/shared/ui/button"
import { WhatsAppColorIcon } from "@/shared/ui/iconify-icons"
import { CARD_HOVER_AVATAR, CARD_HOVER_GROUP, CARD_HOVER_SURFACE } from "@/shared/lib/card-hover"
import { cn } from "@/shared/lib/cn"

export { agentCardTones, type AgentCardTone } from "./agent-card.constants"

type IconComponent = ComponentType<SVGProps<SVGSVGElement> & { className?: string }>

const agentCardVariants = cva(
  cn(
    CARD_HOVER_GROUP,
    CARD_HOVER_SURFACE,
    "flex w-full min-w-0 flex-row items-center gap-1.5 rounded-2xl px-2 py-1.5 sm:gap-2 sm:rounded-full sm:px-0 sm:py-0"
  ),
  {
    variants: {
      tone: {
        neutral: "bg-muted/60",
        rose: "bg-rose-50",
        pink: "bg-pink-100",
        peach: "bg-orange-50",
        amber: "bg-[#FFF4DC]",
        yellow: "bg-amber-100",
        mint: "bg-emerald-50",
        green: "bg-emerald-100",
        sky: "bg-sky-50",
        blue: "bg-sky-100",
        indigo: "bg-indigo-100",
        lavender: "bg-violet-100",
      },
    },
    defaultVariants: {
      tone: "amber",
    },
  }
)

export type AgentAction = {
  key: string
  label: string
  Icon: IconComponent
  className?: string
  onClick?: () => void
  href?: string
  ariaLabel?: string
}

export const defaultAgentActions: AgentAction[] = [
  {
    key: "call",
    label: "Call",
    Icon: PhoneCall01Icon,
    className: "bg-sky-100 text-sky-700 hover:bg-sky-200/80",
  },
  {
    key: "email",
    label: "Email",
    Icon: Mail,
    className: "bg-rose-100 text-rose-900 hover:bg-rose-200/80",
  },
  {
    key: "whatsapp",
    label: "Whatsapp",
    Icon: WhatsAppColorIcon,
    className: "bg-emerald-100 text-emerald-600 hover:bg-emerald-200/80 hover:text-emerald-700",
  },
]

function getInitials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase()
}

export type AgentCardProps = Omit<React.ComponentProps<"div">, "children"> &
  VariantProps<typeof agentCardVariants> & {
    name: string
    avatarUrl?: string
    href?: string
    actions?: AgentAction[]
    hideAvatar?: boolean
    hideName?: boolean
    iconOnlyActions?: boolean
    actionClassName?: string
  }


export function AgentCard({
  name,
  avatarUrl,
  tone,
  href,
  actions = defaultAgentActions,
  hideAvatar = false,
  hideName = false,
  iconOnlyActions = false,
  actionClassName,
  className,
  ...props
}: AgentCardProps) {
  const initials = getInitials(name)

  const hasIdentity = !hideAvatar || !hideName
  const noActions = actions.length === 0

  const cardClassName = cn(agentCardVariants({ tone }), className)

  const avatar = !hideAvatar ? (
    <Avatar size="sm" shape="circle" className="size-8 shrink-0 overflow-hidden text-[10px] sm:size-12 sm:text-base">
      {avatarUrl ? <AvatarImage src={avatarUrl} alt={name} className={CARD_HOVER_AVATAR} /> : null}
      <AvatarFallback>{initials}</AvatarFallback>
    </Avatar>
  ) : null

  const nameText = !hideName ? (
    <span className="min-w-0 flex-1 truncate text-[11px] font-semibold leading-tight text-a7-black sm:text-sm">
      {name}
    </span>
  ) : null

  const identity = hasIdentity ? (
    <div className="flex min-w-0 flex-1 flex-row items-center gap-1.5 sm:gap-2 sm:pr-1">
      {href && !hideAvatar ? (
        <Link href={href} aria-label={`View ${name}'s profile`} tabIndex={-1}>
          {avatar}
        </Link>
      ) : avatar}
      {href && !hideName ? (
        <Link href={href} className="min-w-0 flex-1 hover:underline underline-offset-2">
          {nameText}
        </Link>
      ) : nameText}
    </div>
  ) : null

  const actionButtons = !noActions ? (
    <div
      className={cn(
        "flex shrink-0 items-center gap-1 p-0.5 sm:ml-auto sm:gap-1.5 sm:p-1.5",
        iconOnlyActions ? "justify-end" : "min-w-0 flex-1 justify-end sm:flex-none"
      )}
    >
      {actions.map(({ key, label, Icon, className: perActionClassName, onClick, href: actionHref, ariaLabel }) => {
        const sharedClassName = cn(
          "border-transparent shadow-none",
          iconOnlyActions
            ? "aspect-square !size-8 !min-h-8 !max-h-8 !min-w-8 !max-w-8 shrink-0 !p-0 [&_svg]:size-3 [&_[data-icon]]:size-3 sm:!size-8 sm:!min-h-8 sm:!max-h-8 sm:!min-w-8 sm:!max-w-8 sm:[&_svg]:size-3.5 sm:[&_[data-icon]]:size-3.5"
            : "!h-8 min-w-0 !w-auto shrink-0 !px-2 !text-[10px] sm:!h-8 sm:!px-2.5 sm:!text-[11px]",
          perActionClassName,
          actionClassName
        )

        const buttonSize = iconOnlyActions ? "icon-xs" : "sm"
        const iconNode = <Icon className="size-3 shrink-0 sm:size-3.5" aria-hidden />

        if (actionHref) {
          return (
            <Button
              key={key}
              asChild
              variant="outline"
              size={buttonSize}
              shape="pill"
              className={sharedClassName}
            >
              <Link href={actionHref} aria-label={ariaLabel ?? label}>
                {iconOnlyActions ? iconNode : (
                  <>
                    {iconNode}
                    {label}
                  </>
                )}
              </Link>
            </Button>
          )
        }

        return (
          <Button
            key={key}
            type="button"
            variant="outline"
            size={buttonSize}
            shape="pill"
            onClick={onClick}
            aria-label={iconOnlyActions ? (ariaLabel ?? label) : ariaLabel}
            iconLeft={iconOnlyActions ? undefined : <Icon className="size-3 shrink-0 sm:size-3.5" aria-hidden />}
            className={sharedClassName}
          >
            {iconOnlyActions ? iconNode : label}
          </Button>
        )
      })}
    </div>
  ) : null

  return (
    <div className={cardClassName} {...props}>
      {identity}
      {actionButtons}
    </div>
  )
}

AgentCard.displayName = "AgentCard"

export { agentCardVariants }
