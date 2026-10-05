export const DUBAI_MAP_LAT = 25.1972
export const DUBAI_MAP_LNG = 55.2719

/** Google embed used on project / property detail pages (may show a center pin). */
export function buildMapEmbedUrl(
  lat: number = DUBAI_MAP_LAT,
  lng: number = DUBAI_MAP_LNG,
  zoom = 12
) {
  return `https://www.google.com/maps?q=${lat},${lng}&hl=en&z=${zoom}&output=embed`
}

/** OpenStreetMap embed for marketing map overlays — no default red pin. */
export function buildDeveloperMapEmbedUrl() {
  const minLon = 55.08
  const minLat = 25.08
  const maxLon = 55.45
  const maxLat = 25.34
  return `https://www.openstreetmap.org/export/embed.html?bbox=${minLon}%2C${minLat}%2C${maxLon}%2C${maxLat}&layer=mapnik`
}
