"use client"

import { useState, useEffect } from "react"
import { Quote } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { FadeIn } from "@/components/ui/fade-in"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    quote:
      "I was honestly nervous about injectables for the first time. The team walked me through everything before touching my face, and the results were so natural my husband didn't notice anything different — he just kept saying I looked 'rested.' That's exactly what I wanted.",
    name: "Megan T.",
    treatment: "Botox",
  },
  {
    quote:
      "My skin has never looked like this. After two HydraFacials I've stopped wearing foundation on weekends. The esthetician remembered details from my first visit and adjusted the protocol based on how my skin had changed. That level of attention is rare.",
    name: "Dana R.",
    treatment: "HydraFacial",
  },
  {
    quote:
      "Booked online in under two minutes, got a confirmation text immediately, and the front desk was incredibly warm when I arrived. I've been to spas that felt cold and transactional — this was the opposite. Already have my next appointment on the calendar.",
    name: "Priya S.",
    treatment: "First visit",
  },
  {
    quote:
      "Three sessions of microneedling and my acne scars have faded more than they did in years of trying other things. I wasn't expecting results this fast. Worth every penny.",
    name: "Lauren K.",
    treatment: "Microneedling",
  },
  {
    quote:
      "I came in skeptical about laser hair removal — I have darker skin and had been turned away elsewhere. They knew exactly what they were doing and took the time to explain the protocol for my skin tone. Six sessions in and I'm done. Life-changing.",
    name: "Jasmine W.",
    treatment: "Laser Hair Removal",
  },
]

export function TestimonialsSection() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) return
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())
    api.on("select", () => setCurrent(api.selectedScrollSnap()))
  }, [api])

  return (
    <Section className="bg-charcoal overflow-hidden">
      <Container>
        <FadeIn className="text-center mb-14">
          <p className="text-gold text-[11px] tracking-[0.2em] uppercase font-medium mb-3">
            Patient Stories
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-cream leading-tight">
            Real results, real people.
          </h2>
        </FadeIn>

        <FadeIn>
          <Carousel
            opts={{ loop: true, align: "center" }}
            setApi={setApi}
            className="mx-auto max-w-3xl"
          >
            <CarouselContent>
              {testimonials.map((t, i) => (
                <CarouselItem key={i}>
                  <div className="px-4 pb-2 flex flex-col items-center text-center">
                    <Quote className="h-7 w-7 text-gold/40 mb-7" />
                    <blockquote className="font-serif text-xl md:text-2xl text-cream/90 leading-relaxed mb-8 max-w-2xl">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>
                    <p className="text-cream font-medium text-sm">{t.name}</p>
                    <p className="text-gold text-[11px] tracking-[0.15em] uppercase mt-1.5">
                      {t.treatment}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Dot navigation */}
          <div
            className="flex justify-center gap-2 mt-10"
            role="tablist"
            aria-label="Testimonial navigation"
          >
            {Array.from({ length: count }).map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === current}
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => api?.scrollTo(i)}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300 cursor-pointer",
                  i === current
                    ? "w-8 bg-gold"
                    : "w-1.5 bg-cream/20 hover:bg-cream/40"
                )}
              />
            ))}
          </div>
        </FadeIn>
      </Container>
    </Section>
  )
}
