"use client"

import { useAuth as useAuthContext } from "@/features/auth/ui/auth-provider"

export function useAuth() {
  return useAuthContext()
}
