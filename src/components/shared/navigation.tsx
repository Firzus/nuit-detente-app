'use client'

import { useIsSmallScreen } from '@/hooks/use-is-small-screen'
import { Button } from '@/ui/button'
import { Menu } from 'lucide-react'
import Link from 'next/link'

export default function Navigation() {
  const isSmallScreen = useIsSmallScreen()

  if (isSmallScreen) {
    return (
      <Button variant="ghost" size="icon">
        <Menu />
      </Button>
    )
  } else {
    return (
      <nav className="flex space-x-4 rounded-full border px-6 py-2">
        <Link className="text-muted-foreground hover:text-foreground" href="#espaces">
          Espaces
        </Link>
        <Link className="text-muted-foreground hover:text-foreground" href="#services">
          Services
        </Link>
        <Link className="text-muted-foreground hover:text-foreground" href="#reservation">
          Réservation
        </Link>
      </nav>
    )
  }
}
