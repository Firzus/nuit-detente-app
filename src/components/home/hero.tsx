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
        jacuzzi à Rodez.
      </p>

      <span className="mt-6 space-x-4">
        <Button asChild>
          <Link href="#espaces">Decouvrir</Link>
        </Button>

        <Button asChild variant="ghost">
          <Link href="#reservation">Réserver</Link>
        </Button>
      </span>

      <div className="relative mt-16 aspect-video size-full overflow-hidden rounded-3xl">
        <Image
          className="object-cover object-center"
          src={HeroIMG.src}
          alt="Aperçu de la suite avec piscine intérieure."
          priority
          fill
          sizes="(min-width: 1280px) 960px, 100vw"
          placeholder="blur"
          blurDataURL={HeroIMG.src}
        />
      </div>
    </div>
  )
}
