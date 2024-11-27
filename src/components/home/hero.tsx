import Link from 'next/link'
import Image from 'next/image'
import HeroIMG from '@/assets/hero.jpg'
import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <div className="container flex flex-col items-center">
      <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight lg:text-5xl">
        Votre voyage commence ici !
      </h1>

      <p className="mt-6 text-center text-muted-foreground">
        Venez passer un agréable moment dans cette suite magnifique suite avec piscine intérieure et
        jacuzzi.
      </p>

      <span className="mt-6 space-x-4">
        <Button asChild>
          <Link href="#espaces">Decouvrir</Link>
        </Button>

        <Button asChild variant="ghost">
          <Link href="#reservation">Réserver</Link>
        </Button>
      </span>

      <Image
        className="mt-16 aspect-video rounded-3xl object-cover object-center"
        src={HeroIMG}
        alt="Aperçu de la suite avec piscine intérieure."
        sizes="(min-width: 1280px) 960px, 100vw"
        priority
      />
    </div>
  )
}
