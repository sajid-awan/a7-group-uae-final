import Image from "next/image"
import Link from "next/link"

import {
  HOME_FOOTER_EMAIL,
  HOME_FOOTER_MAIN_NAV,
  HOME_FOOTER_OFFICE,
  HOME_FOOTER_PROPERTY_COLUMNS,
  HOME_FOOTER_SOCIAL,
} from "@/features/home/content/home-footer"
import { cn } from "@/shared/lib/cn"

import { FooterLinkColumns } from "./footer-link-columns"

export type FooterMainProps = {
  className?: string
}

export function FooterMain({ className }: FooterMainProps) {
  return (
    <footer className={cn("bg-black text-white", className)}>
      <div className="container mx-auto px-4 py-12 md:py-16">
        <FooterLinkColumns columns={HOME_FOOTER_PROPERTY_COLUMNS} />

        <div className="sm:mt-14 grid  gap-4 border-t border-white/10 pt-12 lg:grid-cols-[1.2fr_1fr] lg:gap-6 xl:gap-10">
       <div>
          <nav className="flex items-start flex-col flex-wrap gap-2">
            {HOME_FOOTER_MAIN_NAV.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="lg:text-lg text-sm inline-flex  uppercase tracking-[0.12em] text-white font-bold transition-colors hover:text-primary "
              >
                {item.label}
              </Link>
            ))}
          </nav>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/60">Follow us</p>
              <ul className="mt-3 space-y-2">
                {HOME_FOOTER_SOCIAL.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="lg:text-base text-sm  text-white hover:text-primary ">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
           
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-white/60">Email</p>
              <p className="mt-3">
                <a
                  href={`mailto:${HOME_FOOTER_EMAIL}`}
                  className="lg:text-base text-sm  text-white transition-colors hover:text-primary"
                >
                  {HOME_FOOTER_EMAIL}
                </a>
              </p>
            </div>
             <div>
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-white/60">Office</p>
              <p className="mt-3 lg:text-base text-sm  leading-relaxed text-white">{HOME_FOOTER_OFFICE}</p>
            </div>
             <div>
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-white/60">Others</p>
              <a
                  href={`mailto:${HOME_FOOTER_EMAIL}`}
                  className="lg:text-base text-sm  text-white transition-colors hover:text-primary"
                >
                 Licenses
                </a>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-10">
          <div className="w-full">
            <Image
              src="/assets/brand/logo.svg"
              alt="A Seven Properties"
              width={1200}
              height={120}
              unoptimized
              className="h-auto w-full brightness-0 invert"
              sizes="100vw"
            />
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 pt-6 text-xs text-white sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 A7Properties™ All rights reserved.</p>
          <p>Design by A7 for Real Estate</p>
        </div>
      </div>
    </footer>
  )
}
