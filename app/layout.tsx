import type { Metadata } from "next"
import { Figtree } from "next/font/google"

import { site } from "@/lib/content"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { EasterEgg } from "@/components/easter-egg"
import "./globals.css"

const sans = Figtree({ subsets: ["latin"], variable: "--font-sans" })

const description = "Software engineer building data and AI infrastructure for fintech. CS & Finance at Waterloo."

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "James Hong", template: "%s · James Hong" },
  description,
  openGraph: {
    title: "James Hong",
    description,
    url: site.url,
    siteName: "James Hong",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "James Hong", description, images: ["/og.png"] },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={sans.variable}>
      <body className="flex min-h-screen flex-col">
        <EasterEgg />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}
