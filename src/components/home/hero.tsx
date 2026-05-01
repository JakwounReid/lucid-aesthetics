import Image from "next/image"
import Link from "next/link"
import { Container } from "@/components/ui/container"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function HeroSection() {
  return (
    <section
      className="relative h-screen min-h-[640px] flex items-end overflow-hidden"
      aria-label="Welcome to Lucid Aesthetics"
    >
      <Image
        src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=2400&q=85"
        alt="Peaceful facial treatment at Lucid Aesthetics Milwaukee"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Gradient overlays — warm fade from left + bottom */}
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/85 via-charcoal/55 to-charcoal/10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/65 via-transparent to-transparent pointer-events-none" />

      <Container className="relative z-10 pb-20 pt-8">
        <span className="text-gold text-[11px] tracking-[0.25em] uppercase font-medium block mb-6">
          Milwaukee, WI
        </span>

        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl text-cream leading-[1.06] tracking-tight max-w-2xl mb-6">
          Skin that feels like you,{" "}
          <em className="text-gold/90">only better.</em>
        </h1>

        <p className="text-cream/70 text-lg md:text-xl max-w-md mb-10 leading-relaxed">
          Personalized aesthetic treatments in the heart of Milwaukee.
          Science-backed results, warmth you&apos;ll feel from the moment you
          walk in.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            href="/book"
            className={cn(
              buttonVariants({ size: "lg" }),
              "bg-bronze hover:bg-bronze/85 text-cream border-0 px-8 shadow-lg"
            )}
          >
            Book a Consultation
          </Link>
          <Link
            href="/services"
            className={cn(
              buttonVariants({ size: "lg", variant: "outline" }),
              "bg-transparent border-cream/30 text-cream hover:bg-cream/10 hover:text-cream hover:border-cream/50 px-8"
            )}
          >
            Explore Treatments
          </Link>
        </div>
      </Container>

      <div className="absolute bottom-8 right-8 flex items-center gap-3 text-cream/30 text-[11px] tracking-[0.2em] uppercase select-none">
        <span>Scroll</span>
        <div className="h-px w-10 bg-cream/30" />
      </div>
    </section>
  )
}
