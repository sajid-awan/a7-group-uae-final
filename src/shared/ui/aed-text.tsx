/* eslint-disable react-hooks/immutability */
import { cn } from "@/shared/lib/cn"

const AED_TOKEN = /\bAED\b/gi

/** Strips AED labels and normalizes spacing for display beside a leading icon. */
function stripAedLabel(text: string): string {
  return text
    .replace(AED_TOKEN, "")
    .replace(/\(\s*\)/g, "")
    .replace(/\s{2,}/g, " ")
    .trim()
}

export function AedIcon({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "icon-uae-dirham shrink-0 text-inherit leading-none",
        className
      )}
      aria-hidden
    />
  )
}

export type AedTextProps = {
  text: string | null | undefined
  className?: string
  iconClassName?: string
}

export function AedText({ text, className, iconClassName }: AedTextProps) {
  if (text == null || text === "") return null

  if (!AED_TOKEN.test(text)) {
    return <span className={className}>{text}</span>
  }

  const amount = stripAedLabel(text)
  AED_TOKEN.lastIndex = 0

  return (
    <span
      className={cn(
        "inline-flex max-w-full flex-wrap items-center gap-x-[0.2em] leading-none",
        className
      )}
    >
      <AedIcon className={iconClassName} />
      {amount ? <span className="leading-none">{amount}</span> : null}
    </span>
  )
}
