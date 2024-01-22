import Link from 'next/link'

import { FullNav } from '@/app/ui/FullNav'
import { MobileNav } from '@/app/ui/MobileNav'
import { ModeToggle } from '@/app/ui/ModeToggle'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex justify-between items-center h-14 max-w-screen-2xl">
        <FullNav />
        <MobileNav />
        <div className="flex justify-end">
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}
