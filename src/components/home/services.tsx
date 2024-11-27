import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

export default function Services() {
  return (
    <div id="services" className="container flex flex-col items-center pt-10 sm:pt-20 xl:pt-32">
      <h2 className="scroll-m-20 text-center text-3xl font-semibold tracking-tight first:mt-0">
        Découvrir nos services
      </h2>

      <p className="mt-6 text-center text-sm text-muted-foreground">
        Explorez une gamme de services personnalisés, conçus pour sublimer votre séjour : massages,
        délices gourmands, et attentions exclusives directement dans le confort de votre suite.
      </p>

      <Carousel className="mt-16 w-full">
        <CarouselContent>
          <CarouselItem>...</CarouselItem>
          <CarouselItem>...</CarouselItem>
          <CarouselItem>...</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
