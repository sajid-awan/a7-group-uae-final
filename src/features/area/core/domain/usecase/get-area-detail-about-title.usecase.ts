export function getAreaDetailAboutTitleUseCase(areaTitle: string) {
  const trimmed = areaTitle.trim()
  if (!trimmed) return "About this area"
  return `About ${trimmed}`
}
