const READ_MORE_SINGLE_THRESHOLD = 380
const COLLAPSED_SECOND_PARAGRAPH_CHARS = 140

export function splitListingDescription(description: string): string[] {
  return description
    .split(/\n\n+/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)
}

export function listingDescriptionHasMore(description: string): boolean {
  const paragraphs = splitListingDescription(description)
  if (paragraphs.length > 1) return true
  return (paragraphs[0]?.length ?? 0) > READ_MORE_SINGLE_THRESHOLD
}

export function getVisibleListingDescriptionParagraphs(
  description: string,
  expanded: boolean
): string[] {
  const paragraphs = splitListingDescription(description)
  if (paragraphs.length === 0) return []
  if (expanded) return paragraphs

  if (paragraphs.length === 1) {
    const text = paragraphs[0]!
    if (text.length <= READ_MORE_SINGLE_THRESHOLD) return paragraphs
    return [`${text.slice(0, READ_MORE_SINGLE_THRESHOLD).trim()}…`]
  }

  const [first, second, ...rest] = paragraphs
  if (!second) return [first!]

  const shouldTruncateSecond =
    rest.length > 0 || second.length > COLLAPSED_SECOND_PARAGRAPH_CHARS

  if (!shouldTruncateSecond) return paragraphs

  const truncatedSecond =
    second.length > COLLAPSED_SECOND_PARAGRAPH_CHARS
      ? `${second.slice(0, COLLAPSED_SECOND_PARAGRAPH_CHARS).trim()}....`
      : second

  return [first!, truncatedSecond]
}
