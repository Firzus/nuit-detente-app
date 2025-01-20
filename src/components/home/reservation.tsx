import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Reservation() {
  return (
    <div className="min-h-screen-minus-header relative mt-10 flex bg-secondary sm:mt-20 xl:mt-32">
      <span id="reservation" className="sr-only absolute -top-16" />

      <div className="container flex flex-col items-center justify-center gap-6">
        <h2 className="scroll-m-20 text-center text-3xl font-semibold tracking-tight first:mt-0">
          Réserver mon séjour
        </h2>

        <blockquote className="text-center italic">
          Offrez-vous un moment d&apos;évasion unique en réservant votre séjour dans cette suite
          d&apos;exception, <br className="hidden xl:block" />
          où luxe et relaxation se conjuguent pour créer des souvenirs mémorables.
        </blockquote>

        <Button asChild>
          <Link
            className="plausible-event-name=Reservation"
            target="_blank"
            href="https://www.airbnb.fr/rooms/45201561?guests=1&adults=1&s=67&unique_share_id=eb46b0c7-5fef-4f88-95d2-4589caae73f6"
          >
            Réserver
          </Link>
        </Button>
      </div>
    </div>
  )
}
