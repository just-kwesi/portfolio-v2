'use client'

import { Menu } from 'lucide-react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Button } from '@/app/ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/app/ui/sheet'

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="ghost" className="sm:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetTitle>Icon</SheetTitle>
      </SheetContent>
    </Sheet>
  )
}
