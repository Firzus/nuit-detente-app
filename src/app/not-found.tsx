import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="min-h-screen-minus-header flex flex-col items-center justify-center">
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Page introuvable</h3>
      <p className="mt-2 leading-7">La ressource demandée est introuvable.</p>
      <Link className="mt-8 text-muted-foreground hover:text-foreground" href="/">
        Retour à la page d&apos;accueil
      </Link>
    </section>
  )
}
