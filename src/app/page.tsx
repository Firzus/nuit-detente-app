import Hero from '@/components/home/hero'
import Reservation from '@/components/home/reservation'
import Services from '@/components/home/services'
import Spaces from '@/components/home/spaces'

export default function Home() {
  return (
    <section className="my-10 sm:my-20 xl:my-32">
      <Hero />
      <Spaces />
      <Services />
      <Reservation />
    </section>
  )
}
