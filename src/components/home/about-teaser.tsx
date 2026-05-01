import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { Separator } from "@/components/ui/separator"
import { FadeIn } from "@/components/ui/fade-in"

export function AboutTeaser() {
  return (
    <Section className="bg-sand/30">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">

          {/* Image — first on mobile, second on desktop */}
          <FadeIn className="order-2 md:order-1">
            <div className="relative">
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1687685337997-7f4e29d80aeb?w=900&q=85"
                  alt="Amara Osei, founder and lead injector at Lucid Aesthetics"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              {/* Decorative offset accent */}
              <div className="absolute -bottom-5 -right-5 w-2/3 h-2/3 border border-sand rounded-lg -z-10" />
            </div>
          </FadeIn>

          {/* Text */}
          <FadeIn delay={0.12} className="order-1 md:order-2">
            <p className="text-gold text-[11px] tracking-[0.2em] uppercase font-medium mb-5">
              Meet Your Practitioner
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal leading-tight mb-2">
              Amara Osei, NP-C
            </h2>
            <p className="text-bronze font-serif italic text-xl mb-6">
              Founder &amp; Lead Injector
            </p>

            <Separator className="bg-sand mb-7" />

            <div className="space-y-4 text-charcoal/80 leading-relaxed">
              <p>
                After a decade in clinical aesthetics, Amara founded Lucid on
                one core belief: that results and warmth aren&apos;t a
                trade-off.
              </p>
              <p>
                Every treatment plan starts with a conversation, not a menu.
                Whether you&apos;re new to injectables or a longtime skincare
                enthusiast, you&apos;ll leave knowing exactly what was done —
                and why.
              </p>
            </div>

            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-bronze hover:text-bronze/70 transition-colors group"
            >
              Read Amara&apos;s full story
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </FadeIn>
        </div>
      </Container>
    </Section>
  )
}
