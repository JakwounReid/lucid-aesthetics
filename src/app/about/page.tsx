import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Heart, Microscope, MessageCircle } from "lucide-react"
import { PageHero } from "@/components/ui/page-hero"
import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { Separator } from "@/components/ui/separator"
import { FadeIn } from "@/components/ui/fade-in"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface TeamMember {
  name: string
  role: string
  bio: string
  image: string | null
  imageAlt: string | null
  initials: string | null
}

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Amara Osei, NP-C — founder of Lucid Aesthetics. A decade of clinical experience, a philosophy built on honesty, and a practice designed around you.",
}

const philosophy = [
  {
    icon: Microscope,
    title: "Evidence over trends.",
    body: "We only offer treatments backed by clinical research. If something is generating buzz but hasn't earned the data, you won't find it on our menu.",
  },
  {
    icon: Heart,
    title: "Your face, your pace.",
    body: "We don't have a \"new patient package\" or a treatment quota. Some clients come in twice a year for maintenance. Others start slow. Both are right.",
  },
  {
    icon: MessageCircle,
    title: "Transparency, always.",
    body: "You'll leave every appointment knowing exactly what was done, why we chose it, and what to expect. No mystery ingredients, no vague timelines.",
  },
]

const team: TeamMember[] = [
  {
    name: "Amara Osei, NP-C",
    role: "Founder & Lead Injector",
    bio: "Board-certified nurse practitioner with 10+ years in aesthetic medicine. Trained in New York, relocated to Milwaukee to build something more personal.",
    image: "https://images.unsplash.com/photo-1687685337997-7f4e29d80aeb?w=700&q=85",
    imageAlt: "Amara Osei, founder of Lucid Aesthetics",
    initials: null,
  },
  {
    name: "Sofia Chen",
    role: "Master Esthetician",
    bio: "Specializes in HydraFacial, chemical peels, and corrective skincare. Certified in advanced facial techniques and skin analysis.",
    image: null,
    imageAlt: null,
    initials: "SC",
  },
  {
    name: "Kezia Williams",
    role: "Patient Coordinator",
    bio: "Your first point of contact and biggest advocate. Kezia manages scheduling, follow-ups, and makes sure every visit feels like coming home.",
    image: null,
    imageAlt: null,
    initials: "KW",
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="Our Story"
        title="Built on one belief."
        description="That results and warmth aren't a trade-off. You deserve both — and you shouldn't have to choose."
      />

      {/* ── Founder Story ─────────────────────────────── */}
      <Section className="bg-cream">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Image */}
            <FadeIn>
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
                <div className="absolute -bottom-5 -left-5 w-2/3 h-2/3 border border-sand rounded-lg -z-10" />
              </div>
            </FadeIn>

            {/* Text */}
            <FadeIn delay={0.12}>
              <p className="text-gold text-[11px] tracking-[0.2em] uppercase font-medium mb-5">
                Meet the Founder
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-charcoal leading-tight mb-2">
                Amara Osei, NP-C
              </h2>
              <p className="text-bronze font-serif italic text-xl mb-6">
                Founder &amp; Lead Injector
              </p>

              <Separator className="bg-sand mb-7" />

              <div className="space-y-5 text-charcoal/80 leading-relaxed">
                <p>
                  Amara spent a decade working in high-volume aesthetic clinics
                  in New York — places where the results were good but the
                  experience felt transactional. Patients were rushed. Follow-up
                  was an afterthought. The relationship ended at checkout.
                </p>
                <p>
                  She moved to Milwaukee in 2017 with a different vision: a
                  practice small enough to know every patient by name, and
                  intentional enough to never compromise on outcomes. Lucid
                  Aesthetics opened in 2019 with three treatment chairs and a
                  waitlist within six months.
                </p>
                <p>
                  Today, Amara trains every injector personally and reviews
                  every new patient intake herself. The detail she built her
                  reputation on isn&apos;t something she&apos;s willing to
                  delegate.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/book"
                  className={cn(
                    buttonVariants({ size: "default" }),
                    "bg-bronze hover:bg-bronze/85 text-cream border-0 px-6"
                  )}
                >
                  Book with Amara
                </Link>
                <Link
                  href="/contact"
                  className={cn(
                    buttonVariants({ size: "default", variant: "outline" }),
                    "px-6"
                  )}
                >
                  Send a question
                </Link>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* ── Philosophy ────────────────────────────────── */}
      <Section className="bg-sand/30">
        <Container>
          <FadeIn className="text-center mb-14 max-w-lg mx-auto">
            <p className="text-gold text-[11px] tracking-[0.2em] uppercase font-medium mb-3">
              Our Philosophy
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal leading-tight">
              What we believe.
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {philosophy.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div className="flex flex-col h-full">
                  <div className="h-10 w-10 rounded-full bg-bronze/10 flex items-center justify-center mb-5">
                    <item.icon className="h-5 w-5 text-bronze" />
                  </div>
                  <h3 className="font-serif text-xl text-charcoal mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Team ──────────────────────────────────────── */}
      <Section className="bg-cream">
        <Container>
          <FadeIn className="mb-12">
            <p className="text-gold text-[11px] tracking-[0.2em] uppercase font-medium mb-3">
              The Team
            </p>
            <h2 className="font-serif text-4xl text-charcoal">
              The people behind Lucid.
            </h2>
          </FadeIn>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <FadeIn key={member.name} delay={i * 0.1}>
                <div className="flex flex-col">
                  {/* Avatar */}
                  <div className="relative aspect-square rounded-lg overflow-hidden bg-sand mb-5">
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={member.imageAlt ?? member.name}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="h-full w-full flex items-center justify-center bg-sand/80">
                        <span className="font-serif text-4xl text-bronze/50">
                          {member.initials}
                        </span>
                      </div>
                    )}
                  </div>

                  <h3 className="font-serif text-xl text-charcoal mb-0.5">
                    {member.name}
                  </h3>
                  <p className="text-bronze text-sm font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Bottom CTA ────────────────────────────────── */}
      <section className="bg-charcoal py-16">
        <Container>
          <FadeIn className="text-center max-w-xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-cream mb-4">
              Ready to start your skin story?
            </h2>
            <p className="text-cream/65 leading-relaxed mb-8">
              Every journey at Lucid begins with a conversation. Book a
              complimentary consultation and let&apos;s figure out what your
              skin actually needs.
            </p>
            <Link
              href="/book"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-bronze hover:bg-bronze/85 text-cream border-0 px-10"
              )}
            >
              Book a Free Consultation
            </Link>
          </FadeIn>
        </Container>
      </section>
    </>
  )
}
