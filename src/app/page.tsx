import Hero from '@/components/home/hero'
import Reservations from '@/components/home/reservations'
import Services from '@/components/home/services'
import Spaces from '@/components/home/spaces'

export default function Home() {
  return (
    <section className="my-10 md:my-20 xl:my-32">
      <Hero />
      <Spaces />
      <Services />
      <Reservations />
    </section>
  )
}
