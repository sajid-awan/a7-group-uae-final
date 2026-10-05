import type { ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"

import { ArrowLeftIcon } from "@/shared/icons"
import { PAGE_ROUTES } from "@/shared/lib/constants/routes"

const AUTH_BACKGROUND =
  "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2000&auto=format&fit=crop"

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-svh flex-col bg-white font-inter  p-2.5"> 
    <div className="relative flex-1 flex items-center h-full justify-center overflow-hidden rounded-none sm:rounded-2xl sm:p-6">
      <Image src={AUTH_BACKGROUND} alt="" fill className="object-cover" priority sizes="100vw" />
      <div className="absolute inset-0 bg-black/35" aria-hidden />
      <Link
        href={PAGE_ROUTES.home}
        className="absolute left-6 top-6 z-10 flex items-center gap-1.5 text-sm text-white/85 transition-colors hover:text-white"
      >
        <ArrowLeftIcon className="size-4" />
        Back to Website
      </Link>

      <div className="relative z-10 w-full max-w-[800px]">{children}</div>
    </div>
    </div>
  )
}
