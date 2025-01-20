'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useIsSmallScreen } from '@/hooks/use-is-small-screen'

import { Menu } from 'lucide-react'
import { ArrowRight, X } from 'lucide-react'

import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'

export default function Navigation() {
  const isSmallScreen = useIsSmallScreen()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }

    return () => {
      document.body.classList.remove('overflow-hidden')
    }
  }, [isOpen])

  if (isSmallScreen) {
    return (
      <>
        {/* Trigger Button */}
        <Button variant="ghost" size="icon" onClick={() => setIsOpen(true)}>
          <Menu />
        </Button>

        {/* Menu Popup */}
        {isOpen && (
          <div className="fixed left-0 top-0 z-20 size-full overflow-y-auto backdrop-blur xl:hidden">
            <div className="fixed right-4 top-4 w-80 border bg-white p-4 drop-shadow sm:right-8 sm:top-8">
              <Button
                className="absolute right-4 top-4"
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
              >
                <X />
              </Button>

              <nav>
                {[
                  ['Espaces', '#espaces'],
                  ['Services', '#services'],
                  ['Réservation', '#reservation'],
                ].map(([title, url], index) => (
                  <Link
                    key={index}
                    className="block w-fit text-muted-foreground hover:text-foreground sm:text-base [&:not(:first-child)]:mt-2"
                    href={url}
                    onClick={() => setIsOpen(false)}
                  >
                    {title}
                  </Link>
                ))}
              </nav>

              <Separator className="mt-4" />

              <Button asChild className="mt-2 w-full" variant="secondary">
                <Link
                  target="_blank"
                  href="https://www.airbnb.fr/rooms/45201561?guests=1&adults=1&s=67&unique_share_id=eb46b0c7-5fef-4f88-95d2-4589caae73f6"
                >
                  Disponibilités <ArrowRight className="inline-block" />
                </Link>
              </Button>
            </div>
          </div>
        )}
      </>
    )
  } else {
    return (
      <nav className="flex space-x-4 rounded-full border px-6 py-2">
        {[
          ['Espaces', '#espaces'],
          ['Services', '#services'],
          ['Réservation', '#reservation'],
        ].map(([title, url], index) => (
          <Link key={index} className="text-muted-foreground hover:text-foreground" href={url}>
            {title}
          </Link>
        ))}
      </nav>
    )
  }
}
