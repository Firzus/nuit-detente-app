import { spacesCardData } from '@/data/spaces-card-data'

export default function Spaces() {
  return (
    <div className="container relative flex flex-col items-center pt-10 sm:pt-20 xl:pt-32">
      <span id="espaces" className="sr-only absolute -top-12" />

      <h2 className="scroll-m-20 text-center text-3xl font-semibold tracking-tight first:mt-0">
        Explorer vos espaces
      </h2>

      <p className="mt-6 text-center text-sm text-muted-foreground">
        Découvrez des espaces élégants et privatifs alliant détente, bien-être et prestations haut
        de gamme, <br className="hidden xl:block" />
        pour une expérience inoubliable au cœur de votre suite.
      </p>

      <ul className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {spacesCardData.map((space, index) => (
          <li className="rounded-lg border bg-white p-6 drop-shadow-xl" key={index}>
            <h3 className="text-lg font-semibold">{space.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{space.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
