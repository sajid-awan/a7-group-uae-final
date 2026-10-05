import localFont from "next/font/local"
import { Inter, Playfair_Display, Poppins } from "next/font/google"

import "../styles/globals.css"
import "../styles/icomoon.css"
import { ThemeProvider } from "@/shared/ui/theme-provider"

/**  marketing sans — optional `font-satoshi`. */
const satoshi = localFont({
  src: [
    { path: "../../public/fonts/satoshi-400.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/satoshi-500.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/satoshi-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-satoshi-internal",
  display: "swap",
})

/** Icon font — `icon-*` classes in src/styles/icomoon.css (e.g. `icon-uae-dirham`). */
const icomoon = localFont({
  src: "../../public/fonts/icomoon.woff",
  variable: "--font-icomoon-internal",
  display: "block",
})

/** Body sans — `font-inter`. Variable font so 400–900 weights render correctly (static weight list reused one file per weight). */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter-family",
  display: "swap",
})

/** Heading display — `font-heading`, `h1–h6`, `.typo-*` (only heading style vs  Satoshi titles). */
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-family",
  display: "swap",
})

const poppinsMarketing = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins-marketing",
  display: "swap",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`antialiased ${satoshi.variable} ${icomoon.variable} ${inter.variable} ${playfair.variable} ${poppinsMarketing.variable} font-inter`}
    >
      <body suppressHydrationWarning>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
