'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import logo from '@/assets/logo.png'

export function FullNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 hidden sm:flex">
      <Link href="/" className="mr-10 flex items-center space-x-2">
        <Image src={logo} width={24} height={24} alt="logo" />
        <span className="hidden font-semibold sm:inline-block">kwesi</span>
      </Link>
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
          Experience
        </Link>

        <Link
          href="/contact"
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname.startsWith('/contact-me')
              ? 'text-foreground'
              : 'text-foreground/60'
          )}
        >
          Contact
        </Link>
      </nav>
    </div>
  )
}
