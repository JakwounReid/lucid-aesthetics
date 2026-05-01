import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { Badge } from "@/components/ui/badge"
import { FadeIn } from "@/components/ui/fade-in"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const services = [
  {
    slug: "botox",
    name: "Botox & Neurotoxins",
    tagline: "Refresh without erasing.",
    description:
      "Smooth fine lines and restore a naturally rested appearance. Our injectors take a conservative, face-first approach — never frozen, always you.",
    price: "From $12/unit",
    duration: "30 min",
    image: "https://images.unsplash.com/photo-1552693673-1bf958298935?w=900&q=80",
    imageAlt: "Close-up of glowing, radiant skin after injectable treatment",
  },
  {
    slug: "hydrafacial",
    name: "HydraFacial",
    tagline: "Your best skin in 60 minutes.",
    description:
      "A deeply hydrating treatment that cleanses, exfoliates, and infuses skin with nourishing serums. Zero downtime, immediate glow — for every skin type.",
    price: "From $175",
    duration: "60 min",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=900&q=80",
    imageAlt: "Relaxing spa facial treatment in a warm, softly lit room",
  },
  {
    slug: "microneedling",
    name: "Microneedling",
    tagline: "Real results, built over time.",
    description:
      "Stimulate your skin's natural collagen production to fade scars, fine lines, and uneven texture. The kind of glow that only comes from within.",
    price: "From $350",
    duration: "75 min",
    image: "https://images.unsplash.com/photo-1581182800629-7d90925ad072?w=900&q=80",
    imageAlt: "Woman with luminous, healthy skin after skincare treatment",
  },
]

export function ServicesPreview() {
  return (
    <Section className="bg-cream">
      <Container>
        <FadeIn className="mb-14 max-w-xl">
          <p className="text-gold text-[11px] tracking-[0.2em] uppercase font-medium mb-3">
            What We Offer
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal leading-tight">
            Treatments tailored to you.
          </h2>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            Every service at Lucid starts with a conversation. We build a plan
            around your skin, your timeline, and your goals — nothing more,
            nothing less.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <FadeIn key={service.slug} delay={i * 0.1}>
              <article className="group flex flex-col h-full">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-5 bg-sand">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge
                      variant="outline"
                      className="text-[11px] border-sand text-muted-foreground"
                    >
                      {service.duration}
                    </Badge>
                    <span className="text-gold text-sm font-medium">
                      {service.price}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl text-charcoal mb-1">
                    {service.name}
                  </h3>
                  <p className="text-bronze italic font-serif text-base mb-3">
                    {service.tagline}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                    {service.description}
                  </p>

                  <Link
                    href={`/services#${service.slug}`}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-bronze hover:text-bronze/70 transition-colors group/link"
                  >
                    Learn more
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-0.5" />
                  </Link>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-14 text-center">
          <Link
            href="/services"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }), "px-10")}
          >
            View All Treatments
          </Link>
        </FadeIn>
      </Container>
    </Section>
  )
}
