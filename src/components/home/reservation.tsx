import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Reservation() {
  return (
    <div id="reservation" className="mt-10 h-[600px] bg-secondary sm:mt-20 xl:mt-32 xl:h-[800px]">
      <div className="container flex size-full flex-col items-center justify-center gap-6">
        <h2 className="scroll-m-20 text-center text-3xl font-semibold tracking-tight first:mt-0">
          Réserver mon séjour
        </h2>

        <p className="text-center text-sm text-muted-foreground">
          Offrez-vous un moment d&apos;évasion unique en réservant votre séjour dans cette suite
          d&apos;exception, où luxe et relaxation se conjuguent pour créer des souvenirs mémorables.
        </p>

        <Button asChild>
          <Link
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
