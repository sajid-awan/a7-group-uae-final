import { cookies } from "next/headers"

import type { AuthSession, AuthUser } from "../../domain/entity"
import type { IAuthRepository } from "../../domain/i-repository"

export const AUTH_SESSION_COOKIE = "a7_auth_session"

const EMPTY_SESSION: AuthSession = { user: null, isAuthenticated: false }

function parseSessionCookie(value: string | undefined): AuthUser | null {
  if (!value) return null
  try {
    const parsed = JSON.parse(value) as AuthUser
    if (parsed?.id && parsed?.email && parsed?.name) {
      return parsed
    }
  } catch {
    return null
  }
  return null
}

function buildUser(email: string, name: string): AuthUser {
  return {
    id: `user-${email.toLowerCase().replace(/[^a-z0-9]/g, "-")}`,
    email,
    name,
  }
}

class AuthRepository implements IAuthRepository {
  async getSession(): Promise<AuthSession> {
    const cookieStore = await cookies()
    const user = parseSessionCookie(cookieStore.get(AUTH_SESSION_COOKIE)?.value)
    if (!user) return EMPTY_SESSION
    return { user, isAuthenticated: true }
  }

  async signIn(email: string, password: string): Promise<AuthSession> {
    if (!email?.trim() || !password?.trim()) {
      return EMPTY_SESSION
    }

    const user = buildUser(email.trim(), email.split("@")[0] ?? "User")
    const cookieStore = await cookies()
    cookieStore.set(AUTH_SESSION_COOKIE, JSON.stringify(user), {
      httpOnly: true,
      sameSite: "lax",
      path: "/",
      secure: process.env.NODE_ENV === "production",
    })

    return { user, isAuthenticated: true }
  }

  async signOut(): Promise<void> {
    const cookieStore = await cookies()
    cookieStore.delete(AUTH_SESSION_COOKIE)
  }

  async register(email: string, password: string, name: string): Promise<AuthSession> {
    if (!email?.trim() || !password?.trim() || !name?.trim()) {
      return EMPTY_SESSION
    }

    const user = buildUser(email.trim(), name.trim())
    const cookieStore = await cookies()
    cookieStore.set(AUTH_SESSION_COOKIE, JSON.stringify(user), {
      httpOnly: true,
      sameSite: "lax",
      path: "/",
      secure: process.env.NODE_ENV === "production",
    })

    return { user, isAuthenticated: true }
  }
}

export const authRepository: IAuthRepository = new AuthRepository()

export async function getAuthSession(): Promise<AuthSession> {
  return authRepository.getSession()
}
