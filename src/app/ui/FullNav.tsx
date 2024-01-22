'use client'
import { usePathname } from 'next/navigation'
import { NavItem } from '@/lib/types'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export function FullNav() {
  const pathname = usePathname()
  return (
    <div className="mr-4 hidden sm:flex">
      <nav className="flex items-center gap-6 text-sm">
        <Link
          href="/"
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname === '/' ? 'text-foreground' : 'text-foreground/60'
          )}
        >
          Home
        </Link>

        <Link
          href="/projects"
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname.startsWith('/projects')
              ? 'text-foreground'
              : 'text-foreground/60'
          )}
        >
          Projects
        </Link>

        <Link
          href="/work"
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname.startsWith('/work')
              ? 'text-foreground'
              : 'text-foreground/60'
          )}
        >
          Work
        </Link>

        <Link
          href="/contact-me"
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname.startsWith('/contact-me')
              ? 'text-foreground'
              : 'text-foreground/60'
          )}
        >
          Contact Me
        </Link>
      </nav>
    </div>
  )
}
