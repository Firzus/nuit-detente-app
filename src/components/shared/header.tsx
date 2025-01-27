import Navigation from '@/components/shared/navigation'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
export default function Header() {
  return (
    <header className="sticky top-0 z-10 h-16 bg-background">
      <div className="container flex size-full items-center justify-between">
        <Link href="/" scroll className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Nuit Détente
        </Link>

        <Navigation />

        <Button asChild variant="ghost" className="hidden text-sm text-muted-foreground xl:flex">
          <Link
            className="plausible-event-name=Disponibilite"
            target="_blank"
            href="https://www.airbnb.fr/rooms/45201561?guests=1&adults=1&s=67&unique_share_id=eb46b0c7-5fef-4f88-95d2-4589caae73f6"
          >
            Disponibilités
            <ArrowRight />
          </Link>
        </Button>
      </div>
    </header>
  )
}
