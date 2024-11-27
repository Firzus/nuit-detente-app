'use client'

import React from 'react'

import Image from 'next/image'
import Autoplay from 'embla-carousel-autoplay'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'

import { servicesCarouselData } from '@/data/services-carousel-data'

export default function Services() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true }),
  )

  return (
    <div className="container relative flex flex-col items-center pt-10 sm:pt-20 xl:pt-32">
      <span id="services" className="sr-only absolute -top-12" />

      <h2 className="scroll-m-20 text-center text-3xl font-semibold tracking-tight first:mt-0">
        Découvrir nos services
      </h2>

      <p className="mt-6 text-center text-sm text-muted-foreground">
        Explorez une gamme de services personnalisés, conçus pour sublimer votre séjour : massages,
        délices gourmands, <br className="hidden xl:block" />
        et attentions exclusives directement dans le confort de votre suite.
      </p>

      <Carousel
        className="mt-16 w-full max-w-[600px]"
        opts={{
          loop: true,
        }}
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {servicesCarouselData.map((service, index) => (
            <CarouselItem key={index}>
              <div className="flex flex-col items-center">
                <div className="relative aspect-video w-full">
                  <Image
                    className="rounded-xl object-cover object-center"
                    src={service.image.src}
                    alt={service.description}
                    sizes="(min-width: 1280px) 960px, 100vw"
                    fill
                    placeholder="blur"
                    blurDataURL={service.image.src}
                  />
                </div>
                <p className="mt-2 text-sm text-muted-foreground xl:mt-4">{service.description}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
