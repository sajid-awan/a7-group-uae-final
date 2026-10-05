import { DashboardDatabaseLocationPage } from "@/features/dashboard"

type DashboardDatabaseLocationRoutePageProps = {
  params: Promise<{ locationSlug: string }>
}

export default async function DashboardDatabaseLocationRoutePage({
  params,
}: DashboardDatabaseLocationRoutePageProps) {
  const { locationSlug } = await params

  return <DashboardDatabaseLocationPage locationSlug={locationSlug} />
}
