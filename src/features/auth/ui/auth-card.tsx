import Image from "next/image"
import Link from "next/link"
import type { ReactNode } from "react"

import { cn } from "@/shared/lib/cn"

type AuthCardProps = {
  title: string
  subtitle: ReactNode
  children: ReactNode
  className?: string
}

export function AuthCard({ title, subtitle, children, className }: AuthCardProps) {
  return (
    <div className={cn("rounded-2xl bg-white px-8 py-10 shadow-2xl sm:px-10", className)}>
      <div className="mb-6 flex justify-center">
        <Image
          src="/assets/brand/logo.svg"
          alt="A7EVEN"
          className="h-12 w-auto"
          width={90}
          height={50}
          priority
        />
      </div>

      <h1 className="text-center font-heading text-[2rem] font-semibold leading-tight tracking-tight text-a7-black sm:text-[2.25rem]">
        {title}
      </h1>
      <p className="mt-2 text-center text-base text-a7-black">{subtitle}</p>

      {children}
    </div>
  )
}

export function AuthInlineLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="font-semibold text-a7-brand-gold hover:underline">
      {children}
    </Link>
  )
}
