import Link from 'next/link'

const URL_LEGAL =
  'https://annuaire-entreprises.data.gouv.fr/etablissement/81255366700021?redirected=1'

export default function Footer() {
  return (
    <footer className="border-t">
      <ul className="container flex flex-col gap-8 py-10 xl:flex-row">
        <li className="min-w-80 text-sm">
          <p className="font-semibold">Plan du site</p>
          <nav className="mt-6 space-y-4">
            {[
              ['Accueil', '/'],
              ['Espaces', '#espaces'],
              ['Services', '#services'],
              ['Réservation', '#reservation'],
            ].map(([title, url], index) => (
              <Link
                key={index}
                className="block w-fit text-muted-foreground hover:text-foreground"
                href={url}
              >
                {title}
              </Link>
            ))}
          </nav>
        </li>

        <li className="min-w-80 text-sm">
          <p className="font-semibold">Légal</p>
          <nav className="mt-6 space-y-4">
            {[
              ['Politique de confidentialité', '/politique-confidentialite'],
              ['Mentions Légales', '/mentions-legales'],
            ].map(([title, url], index) => (
              <Link
                key={index}
                className="block w-fit text-muted-foreground hover:text-foreground"
                href={url}
              >
                {title}
              </Link>
            ))}
          </nav>
        </li>

        <li className="min-w-80 text-sm">
          <p className="font-semibold">Entreprise</p>
          <nav className="mt-6 space-y-4">
            <Link
              className="w-fit text-muted-foreground hover:text-foreground"
              href={URL_LEGAL}
              target="_blank"
            >
              Statut
            </Link>
          </nav>
        </li>
      </ul>
      <div className="flex h-16 border-t">
        <p className="container my-auto text-center text-sm text-muted-foreground xl:text-start">
          Copyright © 2024 - 2025. Tous droits réservés.
        </p>
      </div>
    </footer>
  )
}
