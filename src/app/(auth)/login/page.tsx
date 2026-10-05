import { LoginPage } from "@/features/auth/pages/login-page"

type LoginRouteProps = {
  searchParams: Promise<{ from?: string }>
}

export default async function LoginRoute({ searchParams }: LoginRouteProps) {
  const { from } = await searchParams
  return <LoginPage redirectFrom={from} />
}
