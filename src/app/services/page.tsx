import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { PageHero } from "@/components/ui/page-hero"
import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { FadeIn } from "@/components/ui/fade-in"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore our full menu of aesthetic treatments — Botox, dermal fillers, HydraFacial, microneedling, laser hair removal, and chemical peels. Personalized care in Milwaukee, WI.",
}

const services = [
  {
    id: "botox",
    name: "Botox & Neurotoxins",
    tagline: "Refresh without erasing.",
    description:
      "Botox and neurotoxin treatments soften dynamic wrinkles — the lines caused by repeated muscle movement — while leaving your expressions completely intact. At Lucid, we take a conservative approach: less is more, and the goal is always a rested, natural result that still looks unmistakably like you.",
    details: [
      "Forehead lines, frown lines, crow's feet",
      "Brow lift and lip flip",
      "Masseter slimming (jaw tension relief)",
      "Hyperhidrosis (excessive sweating)",
    ],
    note: "Results appear in 3–7 days, peak at 2 weeks, and last 3–4 months.",
    price: "From $12/unit",
    avgCost: "Avg. treatment $250–$500",
    duration: "30 min",
    image: "https://images.unsplash.com/photo-1552693673-1bf958298935?w=1000&q=85",
    imageAlt: "Close-up of radiant, smooth skin after injectable treatment",
  },
  {
    id: "fillers",
    name: "Dermal Fillers",
    tagline: "Volume, contour, precision.",
    description:
      "Hyaluronic acid fillers restore lost volume and sculpt definition in areas that have softened over time. Whether you're looking to add subtle fullness to your lips, lift the cheeks, or define the jawline — we map every treatment to your anatomy, not a template.",
    details: [
      "Lip augmentation and definition",
      "Cheek and midface volumization",
      "Jawline and chin contouring",
      "Tear trough and under-eye hollows",
      "Nasolabial folds and marionette lines",
    ],
    note: "Results are immediate with minimal swelling. Most fillers last 12–18 months.",
    price: "From $650/syringe",
    avgCost: "Avg. treatment $650–$1,800",
    duration: "45–60 min",
    image: "https://images.unsplash.com/photo-1622972430464-288aec3a19a6?w=1000&q=85",
    imageAlt: "Woman with naturally beautiful, well-defined facial features",
  },
  {
    id: "hydrafacial",
    name: "HydraFacial",
    tagline: "Your best skin in 60 minutes.",
    description:
      "HydraFacial is a medical-grade resurfacing treatment that cleanses pores, removes dead skin cells, and delivers a custom cocktail of hydrating serums in a single session. No redness. No downtime. Just a visible, immediate glow that works for every skin type — including sensitive.",
    details: [
      "Deep cleanse and painless extraction",
      "Antioxidant and peptide infusion",
      "Lymphatic drainage and brightening boosters",
      "Add-ons: LED therapy, DermaBuilder, CTGF",
    ],
    note: "Ideal to schedule 1–2 weeks before a special event.",
    price: "From $175",
    avgCost: "Signature: $175 · Deluxe: $225 · Platinum: $295",
    duration: "60 min",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1000&q=85",
    imageAlt: "Relaxing facial treatment in warm, softly lit spa room",
  },
  {
    id: "laser",
    name: "Laser Hair Removal",
    tagline: "Smooth skin, permanently.",
    description:
      "Our laser hair removal uses advanced diode technology calibrated for all skin tones, including deeper complexions. We approach every treatment with a thorough skin assessment first — because what works safely on one skin type can damage another. No rushing, no assumptions.",
    details: [
      "All skin tones and hair types treated",
      "Face, underarms, legs, bikini, and back",
      "6–8 sessions for most areas",
      "Painless cooling technology",
    ],
    note: "Results are permanent after completing the full series. Maintenance sessions may be needed 1–2× per year.",
    price: "From $99/session",
    avgCost: "Packages available — ask at booking",
    duration: "15–60 min",
    image: "https://images.unsplash.com/photo-1659533882314-963a4523c19b?w=1000&q=85",
    imageAlt: "Close-up of smooth, glowing skin after laser treatment",
  },
  {
    id: "microneedling",
    name: "Microneedling",
    tagline: "Real results, built over time.",
    description:
      "Microneedling uses controlled micro-injuries to trigger your skin's natural collagen and elastin production. The result: gradual, lasting improvement in texture, tone, and firmness. We pair every session with customized serums — and for patients with stubborn scarring or pigmentation, we offer RF Microneedling for deeper remodeling.",
    details: [
      "Acne scars and post-inflammatory pigmentation",
      "Fine lines, enlarged pores, and uneven texture",
      "Stretch marks",
      "RF upgrade available for deeper collagen remodeling",
    ],
    note: "A series of 3–6 sessions (4 weeks apart) delivers the best results.",
    price: "From $350",
    avgCost: "RF Microneedling from $550",
    duration: "75 min",
    image: "https://images.unsplash.com/photo-1581182800629-7d90925ad072?w=1000&q=85",
    imageAlt: "Woman with luminous, even-toned skin after microneedling treatment",
  },
  {
    id: "peels",
    name: "Chemical Peels",
    tagline: "Resurface, refine, reveal.",
    description:
      "Chemical peels use carefully selected acids to remove the outermost layers of skin, prompting faster cell turnover and revealing the brighter, smoother skin underneath. We offer a range of peel depths — from gentle lunchtime peels to deeper resurfacing — matched to your skin concern and downtime tolerance.",
    details: [
      "Hyperpigmentation and sun damage",
      "Acne-prone and congested skin",
      "Fine lines and dullness",
      "VI Peel, TCA, and enzyme peel options",
    ],
    note: "Superficial peels: no downtime. Medium-depth peels: 3–5 days of peeling.",
    price: "From $125",
    avgCost: "VI Peel from $275",
    duration: "45 min",
    image: "https://images.unsplash.com/photo-1630595271375-5073a6c0638b?w=1000&q=85",
    imageAlt: "Skincare products and botanicals arranged on a warm neutral surface",
  },
]

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Treatments"
        title="Every service, explained."
        description="We believe you should understand exactly what you're getting — and why. Browse the full menu below, then book a free consultation to build your personalized plan."
      />

      <Section className="bg-cream">
        <Container>
          <div className="space-y-20 md:space-y-28">
            {services.map((service, i) => (
              <div key={service.id}>
                <div
                  id={service.id}
                  className="grid md:grid-cols-2 gap-10 md:gap-16 items-center scroll-mt-24"
                >
                  {/* Image */}
                  <FadeIn className={i % 2 === 1 ? "md:order-2" : ""}>
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-sand">
                      <Image
                        src={service.image}
                        alt={service.imageAlt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </FadeIn>

                  {/* Content */}
                  <FadeIn
                    delay={0.1}
                    className={i % 2 === 1 ? "md:order-1" : ""}
                  >
                    <div className="flex items-center gap-3 mb-4">
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

                    <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-1">
                      {service.name}
                    </h2>
                    <p className="text-bronze font-serif italic text-lg mb-5">
                      {service.tagline}
                    </p>

                    <p className="text-charcoal/80 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Detail list */}
                    <ul className="space-y-2 mb-6">
                      {service.details.map((d) => (
                        <li
                          key={d}
                          className="flex items-start gap-2.5 text-sm text-muted-foreground"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                          {d}
                        </li>
                      ))}
                    </ul>

                    {/* Note */}
                    <p className="text-xs text-muted-foreground italic border-l-2 border-gold/30 pl-3 mb-7 leading-relaxed">
                      {service.note}
                    </p>

                    <div className="flex flex-wrap items-center gap-4">
                      <Link
                        href="/book"
                        className={cn(
                          buttonVariants({ size: "default" }),
                          "bg-bronze hover:bg-bronze/85 text-cream border-0 px-6"
                        )}
                      >
                        Book this treatment
                      </Link>
                      <span className="text-xs text-muted-foreground">
                        {service.avgCost}
                      </span>
                    </div>
                  </FadeIn>
                </div>

                {/* Separator between services, not after the last */}
                {i < services.length - 1 && (
                  <Separator className="bg-sand mt-20 md:mt-28" />
                )}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Bottom CTA */}
      <section className="bg-sand/40 border-t border-sand py-16">
        <Container>
          <FadeIn className="text-center max-w-xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-4">
              Not sure where to start?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Book a complimentary 20-minute consultation. We&apos;ll assess
              your skin, talk through your goals, and build a plan that makes
              sense for you — no pressure, no upselling.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/book"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "bg-bronze hover:bg-bronze/85 text-cream border-0 px-8"
                )}
              >
                Book a Free Consultation
              </Link>
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ size: "lg", variant: "outline" }),
                  "px-8"
                )}
              >
                Ask a Question
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  )
}
