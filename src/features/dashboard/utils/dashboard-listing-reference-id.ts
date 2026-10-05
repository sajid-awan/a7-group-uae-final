export function getDashboardListingReferenceId(listingId: string): string {
  let hash = 0
  for (let i = 0; i < listingId.length; i += 1) {
    hash = (hash * 31 + listingId.charCodeAt(i)) | 0
  }

  return `PL-${String(Math.abs(hash) % 900000 + 100000)}`
}
