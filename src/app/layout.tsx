import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'
import { cn } from '@/lib/utils'
import { siteConfig } from '@/config/site'

import { SiteHeader } from '@/app/ui/Siteheader'
// import { SiteFooter } from '@/app/ui/SiteFooter'
import { ThemeProvider } from '@/app/ui/theme-provider'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

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
  authors: [{ name: 'Frederick Tetteh', url: 'https://frederick-tetteh.com' }],
  creator: 'Frederick Tetteh',
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
            {/* <SiteFooter /> */}
          </div>
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  )
}
