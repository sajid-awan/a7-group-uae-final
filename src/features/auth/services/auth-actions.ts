"use server"

import { redirect } from "next/navigation"

import { authRepository } from "@/features/auth/core/data/repository/auth.repository"
import { signInUseCase, registerUseCase, signOutUseCase } from "@/features/auth"
import { PAGE_ROUTES } from "@/shared/lib/constants/routes"

export type AuthActionState = {
  error?: string
}

export async function signInAction(
  _prevState: AuthActionState,
  formData: FormData,
): Promise<AuthActionState> {
  const email = String(formData.get("email") ?? "")
  const password = String(formData.get("password") ?? "")
  const from = String(formData.get("from") ?? "")

  const session = await signInUseCase(authRepository, email, password)
  if (!session.isAuthenticated) {
    return { error: "Please enter a valid email and password." }
  }

  redirect(from.startsWith("/dashboard") ? from : PAGE_ROUTES.dashboard)
}

export async function registerAction(
  _prevState: AuthActionState,
  formData: FormData,
): Promise<AuthActionState> {
  const name = String(formData.get("fullName") ?? "")
  const email = String(formData.get("email") ?? "")
  const password = String(formData.get("password") ?? "")

  const session = await registerUseCase(authRepository, email, password, name)
  if (!session.isAuthenticated) {
    return { error: "Please complete all fields to create your account." }
  }

  redirect(PAGE_ROUTES.dashboard)
}

export async function signOutAction() {
  await signOutUseCase(authRepository)
  redirect(PAGE_ROUTES.login)
}
