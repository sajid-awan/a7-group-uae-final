"use client"

import { useActionState } from "react"
import Link from "next/link"

import { signInAction, type AuthActionState } from "@/features/auth/services/auth-actions"
import { AuthCard, AuthInlineLink, PasswordInput } from "@/features/auth/ui"
import { Button } from "@/shared/ui/button"
import { Input } from "@/shared/ui/input"
import { Field, FieldContent, FieldGroup, FieldLabel } from "@/shared/ui/field"
import { PAGE_ROUTES } from "@/shared/lib/constants/routes"

const initialState: AuthActionState = {}

type LoginPageProps = {
  redirectFrom?: string
}

export function LoginPage({ redirectFrom }: LoginPageProps) {
  const [state, formAction, pending] = useActionState(signInAction, initialState)

  return (
    <AuthCard
      title="Sign In to Your Account!"
      subtitle={
        <>
          Don&apos;t have an account yet? <AuthInlineLink href={PAGE_ROUTES.register}>Register</AuthInlineLink>
        </>
      }
    >
      <form action={formAction} className="mt-8 space-y-5">
        {redirectFrom ? <input type="hidden" name="from" value={redirectFrom} /> : null}
        <FieldGroup>
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

          <PasswordInput id="password" name="password" label="Password" placeholder="password@site.com" required />

          <div className="-mt-1 flex justify-end">
            <Link href="#" className="text-xs text-a7-text-gray/80 hover:text-a7-text-gray hover:underline">
              Forgot password?
            </Link>
          </div>
        </FieldGroup>

        {state.error ? <p className="text-sm text-destructive">{state.error}</p> : null}

        <Button type="submit" variant="default" shape="pill" size="lg" className="mt-2 w-full" disabled={pending}>
          Sign in
        </Button>
      </form>
    </AuthCard>
  )
}
