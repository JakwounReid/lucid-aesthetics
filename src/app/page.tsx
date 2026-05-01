import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

const palette = [
  { name: "Cream", cls: "bg-cream", hex: "#FAF7F2" },
  { name: "Sand", cls: "bg-sand", hex: "#E8DFD3" },
  { name: "Bronze", cls: "bg-bronze", hex: "#8B5E3C" },
  { name: "Charcoal", cls: "bg-charcoal", hex: "#2C2825" },
  { name: "Gold", cls: "bg-gold", hex: "#C9A961" },
];

const services = [
  {
    name: "Botox & Neurotoxins",
    description:
      "Smooth fine lines and restore a refreshed, natural-looking expression. Results visible in 3–7 days, lasting 3–4 months.",
    duration: "30 min",
    price: "From $12/unit",
  },
  {
    name: "Dermal Fillers",
    description:
      "Restore volume and contour with precision. Lips, cheeks, jawline — subtly, expertly enhanced to complement your features.",
    duration: "45–60 min",
    price: "From $650",
  },
  {
    name: "HydraFacial",
    description:
      "A deeply hydrating facial that cleanses, exfoliates, and infuses your skin with nourishing serums. Zero downtime.",
    duration: "60 min",
    price: "From $175",
  },
];

export default function DesignPreview() {
  return (
    <>
      {/* ── Hero ───────────────────────────────────────── */}
      <section
        className="relative min-h-[88vh] bg-charcoal flex items-end overflow-hidden"
        aria-label="Hero"
      >
        {/* Layered warm gradient */}
        <div className="absolute inset-0 bg-gradient-to-tr from-charcoal via-charcoal/95 to-bronze/25 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent pointer-events-none" />

        {/* Decorative vertical accent */}
        <div className="absolute top-1/4 right-14 hidden lg:flex flex-col items-center gap-3 opacity-20">
          <div className="h-24 w-px bg-gold" />
          <p
            className="font-serif text-gold text-xs tracking-[0.3em] origin-center"
            style={{ writingMode: "vertical-rl" }}
          >
            Milwaukee
          </p>
        </div>

        <Container className="relative z-10 pb-24 pt-8">
          <Badge className="mb-7 bg-gold/15 text-gold border-gold/25 text-[11px] tracking-[0.18em] uppercase font-sans font-medium px-3 py-1">
            Milwaukee, WI · Est. 2019
          </Badge>

          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl text-cream leading-[1.06] tracking-tight mb-6 max-w-3xl">
            Skin that feels like you,{" "}
            <em className="text-gold/90">only better.</em>
          </h1>

          <p className="text-cream/65 text-lg md:text-xl max-w-lg mb-10 leading-relaxed">
            Personalized aesthetic treatments in the heart of Milwaukee.
            Science-backed results, warmth you&apos;ll feel from the moment you
            walk in.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="bg-bronze hover:bg-bronze/85 text-cream border-0 px-8 shadow-lg"
            >
              Book a Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-cream/40 text-cream hover:bg-cream/10 hover:text-cream hover:border-cream/60 px-8"
            >
              Explore Treatments
            </Button>
          </div>
        </Container>

        {/* Brand mark */}
        <div className="absolute bottom-8 right-8 flex items-center gap-3 text-cream/25 text-[11px] tracking-[0.2em] uppercase select-none">
          <span>Lucid Aesthetics</span>
          <div className="h-px w-10 bg-cream/25" />
        </div>
      </section>

      {/* ── Phase 1 label ──────────────────────────────── */}
      <div className="bg-sand/50 border-y border-sand py-3">
        <Container>
          <p className="text-[11px] text-muted-foreground text-center tracking-wider uppercase">
            Phase 1 · Design System Preview — Typography · Colors · Components
          </p>
        </Container>
      </div>

      {/* ── Color Palette ──────────────────────────────── */}
      <Section className="bg-cream">
        <Container>
          <div className="mb-10">
            <p className="text-gold text-[11px] tracking-[0.2em] uppercase font-medium mb-2">
              Design Tokens
            </p>
            <h2 className="font-serif text-4xl text-charcoal">Brand Colors</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
            {palette.map((c) => (
              <div key={c.name}>
                <div
                  className={`h-20 rounded-lg ${c.cls} shadow-sm border border-black/5 mb-3`}
                />
                <p className="text-sm font-medium text-charcoal">{c.name}</p>
                <p className="text-xs text-muted-foreground font-mono mt-0.5">
                  {c.hex}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Separator className="bg-sand" />

      {/* ── Typography ─────────────────────────────────── */}
      <Section className="bg-cream">
        <Container>
          <div className="mb-10">
            <p className="text-gold text-[11px] tracking-[0.2em] uppercase font-medium mb-2">
              Design Tokens
            </p>
            <h2 className="font-serif text-4xl text-charcoal">Typography</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Serif display */}
            <div className="space-y-6">
              <div>
                <p className="text-[11px] text-muted-foreground tracking-[0.15em] uppercase mb-3">
                  Display — Cormorant Garamond
                </p>
                <p className="font-serif text-7xl text-charcoal leading-none tracking-tight">
                  Aa
                </p>
                <p className="font-serif text-3xl text-charcoal mt-4 leading-snug">
                  Beautiful skin begins here.
                </p>
                <p className="font-serif text-xl text-bronze italic mt-1">
                  Confidence, elevated.
                </p>
              </div>
              <div className="space-y-1">
                {[
                  ["text-6xl", "XL"],
                  ["text-5xl", "L"],
                  ["text-4xl", "M"],
                  ["text-3xl", "S"],
                  ["text-2xl", "XS"],
                  ["text-xl", "2XS"],
                ].map(([size, label]) => (
                  <div key={size} className="flex items-baseline gap-4">
                    <p
                      className={`font-serif ${size} text-charcoal leading-tight`}
                    >
                      Lucid Aesthetics
                    </p>
                    <span className="text-[10px] text-muted-foreground hidden sm:block shrink-0">
                      H{label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sans body */}
            <div className="space-y-6">
              <div>
                <p className="text-[11px] text-muted-foreground tracking-[0.15em] uppercase mb-3">
                  Body — Inter
                </p>
                <p className="font-sans text-7xl font-extralight text-charcoal leading-none">
                  Aa
                </p>
                <p className="font-sans text-base text-charcoal/80 mt-4 leading-relaxed max-w-sm">
                  We believe great skin is earned with intention — not just
                  products. Every treatment at Lucid is tailored to your unique
                  skin story.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  {
                    label: "Body Regular",
                    cls: "text-base font-normal",
                    sample: "Personalized care in Milwaukee",
                  },
                  {
                    label: "Body Medium",
                    cls: "text-base font-medium",
                    sample: "Personalized care in Milwaukee",
                  },
                  {
                    label: "Small / Caption",
                    cls: "text-sm font-normal",
                    sample: "Personalized care in Milwaukee",
                  },
                  {
                    label: "Label Uppercase",
                    cls: "text-xs font-medium tracking-[0.15em] uppercase",
                    sample: "Book a treatment",
                  },
                ].map(({ label, cls, sample }) => (
                  <div key={label}>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-0.5">
                      {label}
                    </p>
                    <p className={`font-sans text-charcoal ${cls}`}>{sample}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Separator className="bg-sand" />

      {/* ── Components ─────────────────────────────────── */}
      <Section className="bg-cream">
        <Container>
          <div className="mb-10">
            <p className="text-gold text-[11px] tracking-[0.2em] uppercase font-medium mb-2">
              Design Tokens
            </p>
            <h2 className="font-serif text-4xl text-charcoal">Components</h2>
          </div>

          {/* Buttons */}
          <div className="mb-12">
            <p className="text-[11px] text-muted-foreground tracking-[0.15em] uppercase mb-5">
              Buttons
            </p>
            <div className="flex flex-wrap gap-3 items-center">
              <Button>Book Now</Button>
              <Button variant="outline">Learn More</Button>
              <Button variant="secondary">View Services</Button>
              <Button variant="ghost">← Back</Button>
              <Button size="sm">Small</Button>
              <Button size="lg">Large CTA</Button>
              <Button disabled>Unavailable</Button>
            </div>
          </div>

          {/* Badges */}
          <div className="mb-12">
            <p className="text-[11px] text-muted-foreground tracking-[0.15em] uppercase mb-5">
              Badges
            </p>
            <div className="flex flex-wrap gap-2 items-center">
              <Badge>Featured</Badge>
              <Badge variant="secondary">New Treatment</Badge>
              <Badge variant="outline">60 min</Badge>
              <Badge className="bg-gold/15 text-bronze border-gold/30 hover:bg-gold/20">
                Popular
              </Badge>
            </div>
          </div>

          {/* Form elements */}
          <div className="mb-12">
            <p className="text-[11px] text-muted-foreground tracking-[0.15em] uppercase mb-5">
              Form Elements
            </p>
            <div className="grid sm:grid-cols-2 gap-4 max-w-md">
              <div className="space-y-1.5">
                <Label htmlFor="demo-name">Full Name</Label>
                <Input id="demo-name" placeholder="Jane Smith" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="demo-email">Email</Label>
                <Input id="demo-email" type="email" placeholder="jane@example.com" />
              </div>
              <div className="space-y-1.5 sm:col-span-2">
                <Label htmlFor="demo-phone">Phone</Label>
                <Input id="demo-phone" type="tel" placeholder="(414) 555-0000" />
              </div>
            </div>
          </div>

          {/* Service cards */}
          <div>
            <p className="text-[11px] text-muted-foreground tracking-[0.15em] uppercase mb-5">
              Service Cards
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              {services.map((s) => (
                <Card
                  key={s.name}
                  className="border-sand shadow-sm hover:shadow-md transition-shadow duration-200 bg-cream"
                >
                  <CardHeader className="pb-1">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <CardTitle className="font-serif text-xl font-normal text-charcoal leading-snug">
                        {s.name}
                      </CardTitle>
                      <Badge
                        variant="outline"
                        className="shrink-0 text-[11px] border-sand text-muted-foreground"
                      >
                        {s.duration}
                      </Badge>
                    </div>
                    <p className="text-gold text-sm font-medium">{s.price}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {s.description}
                    </p>
                    <button className="mt-4 text-bronze hover:text-bronze/75 font-medium text-sm transition-colors cursor-pointer">
                      Book this treatment →
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
