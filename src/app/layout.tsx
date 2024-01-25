import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'
import { cn } from '@/lib/utils'
import { siteConfig } from '@/config/site'

import { SiteHeader } from '@/app/ui/Siteheader'
// import { SiteFooter } from '@/app/ui/SiteFooter'
import { ThemeProvider } from '@/app/ui/theme-provider'
import { Toaster } from '@/app/ui/toaster'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})
const metadataBase = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'Frederick Tetteh',
    'Software Engineer',
    'Next.js',
    'React',
    'Tailwind',
    'server components',
    'personal portfolio',
  ],
  metadataBase: new URL(metadataBase),
  authors: [{ name: 'Frederick Tetteh', url: 'https://frederick-tetteh.com' }],
  creator: 'Frederick Tetteh',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: './opengraph-image.png',
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: ['./opengraph-image.png'],
    creator: '@Fhred_rick',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  category: 'technology',
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          inter.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col bg-background max-w-screen-lg mx-auto">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <Toaster />
            {/* <SiteFooter /> */}
          </div>
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
