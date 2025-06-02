import type { Metadata } from "next"
import { Inter as FontSans } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

import { getBasePath } from "@/lib/path"

const baseUrl = process.env.NODE_ENV === 'production' 
  ? 'https://volanalytics.github.io'
  : 'http://localhost:8000'

export const metadata: Metadata = {
  title: "SkillBit - AI-Powered Micro-Learning Platform",
  description: "Master new skills in bite-sized, AI-generated lessons",
  keywords: ["learning", "education", "micro-courses", "AI", "skills", "online learning"],
  authors: [{ name: "SkillBit" }],
  creator: "SkillBit",
  publisher: "SkillBit",
  robots: "index, follow",
  metadataBase: new URL(baseUrl + getBasePath())
}

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" }
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <div className="relative flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
