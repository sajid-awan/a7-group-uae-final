import { NextResponse, type NextRequest } from "next/server"

import { PAGE_ROUTES } from "@/shared/lib/constants/routes"

const SESSION_COOKIE = "a7_auth_session"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname.startsWith("/dashboard")) {
    const session = request.cookies.get(SESSION_COOKIE)?.value
    if (!session) {
      const loginUrl = new URL(PAGE_ROUTES.login, request.url)
      loginUrl.searchParams.set("from", pathname)
      return NextResponse.redirect(loginUrl)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/dashboard/:path*"],
}
