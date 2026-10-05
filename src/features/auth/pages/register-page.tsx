"use client"

import { useActionState } from "react"

import { registerAction, type AuthActionState } from "@/features/auth/services/auth-actions"
import { AuthCard, AuthInlineLink, PasswordInput } from "@/features/auth/ui"
import { Button } from "@/shared/ui/button"
import { Input } from "@/shared/ui/input"
import { Field, FieldContent, FieldGroup, FieldLabel } from "@/shared/ui/field"
import { PAGE_ROUTES } from "@/shared/lib/constants/routes"

const initialState: AuthActionState = {}

export function RegisterPage() {
  const [state, formAction, pending] = useActionState(registerAction, initialState)

  return (
    <AuthCard
      title="Welcome! Create Your Account!"
      subtitle={
        <>
          Already have an account? <AuthInlineLink href={PAGE_ROUTES.login}>Login</AuthInlineLink>
        </>
      }
    >
      <form action={formAction} className="mt-8 space-y-5">
        <FieldGroup>
          <Field orientation="vertical">
            <FieldContent>
              <FieldLabel htmlFor="fullName">Full Name</FieldLabel>
              <Input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="John Doe"
                inputSize="lg"
                radius="md"
                autoComplete="name"
                required
              />
            </FieldContent>
          </Field>

          <Field orientation="vertical">
            <FieldContent>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="johndoe@email.com"
                inputSize="lg"
                radius="md"
                autoComplete="email"
                required
              />
            </FieldContent>
          </Field>

          <PasswordInput id="password" name="password" label="Password" required />
          <PasswordInput id="confirmPassword" label="Confirm Password" />
        </FieldGroup>

        {state.error ? <p className="text-sm text-destructive">{state.error}</p> : null}

        <Button type="submit" variant="default" shape="pill" size="lg" className="mt-2 w-full" disabled={pending}>
          Create account
        </Button>
      </form>
    </AuthCard>
  )
}
