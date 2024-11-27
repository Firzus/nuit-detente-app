import Navigation from '@/components/shared/navigation'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
export default function Header() {
  return (
    <header className="container sticky top-0 z-10 flex h-16 items-center justify-between bg-background">
      <Link href="/" scroll className="scroll-m-20 text-2xl font-semibold tracking-tight">
        Nuit Détente
      </Link>

      <Navigation />

      <Button asChild variant="ghost" className="hidden text-sm text-muted-foreground xl:flex">
        <Link href="#reservation">
          Disponibilités
          <ArrowRight />
        </Link>
      </Button>
    </header>
  )
}
