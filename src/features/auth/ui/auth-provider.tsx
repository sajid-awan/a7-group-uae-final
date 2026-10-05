"use client"

import { createContext, useContext, useMemo, type ReactNode } from "react"

import type { AuthSession } from "@/features/auth/core/domain/entity"

const AuthContext = createContext<AuthSession | null>(null)

const EMPTY_SESSION: AuthSession = { user: null, isAuthenticated: false }

export function AuthProvider({
  session,
  children,
}: {
  session: AuthSession
  children: ReactNode
}) {
  const value = useMemo(() => session, [session])
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth(): AuthSession {
  const session = useContext(AuthContext)
  return session ?? EMPTY_SESSION
}
