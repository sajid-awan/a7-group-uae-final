export function isDashboardNavLinkActive(pathname: string, href: string) {
  if (pathname === href) return true
  if (href === "/dashboard") return false
  return pathname.startsWith(`${href}/`)
}

export function isDashboardNavGroupActive(
  pathname: string,
  href: string,
  childHrefs: readonly string[]
) {
  const childActive = childHrefs.some((childHref) => isDashboardNavLinkActive(pathname, childHref))
  const groupActive = isDashboardNavLinkActive(pathname, href) && !childActive

  return {
    childActive,
    groupActive,
    open: groupActive || childActive,
  }
}
