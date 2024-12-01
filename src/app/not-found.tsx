import Link from 'next/link'

import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <section className="min-h-screen-minus-header flex flex-col items-center justify-center">
      <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Page introuvable</h2>
      <p className="mt-2 leading-7 text-muted-foreground">La ressource demandée est introuvable.</p>
      <Button asChild className="mt-8">
        <Link href="/">Accueil</Link>
      </Button>
    </section>
  )
}
