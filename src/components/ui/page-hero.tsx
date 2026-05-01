import { Container } from "@/components/ui/container"
import { FadeIn } from "@/components/ui/fade-in"

interface PageHeroProps {
  label?: string
  title: string
  description?: string
}

export function PageHero({ label, title, description }: PageHeroProps) {
  return (
    <div className="pt-16 bg-sand/30 border-b border-sand">
      <Container className="py-16 md:py-20">
        <FadeIn>
          {label && (
            <p className="text-gold text-[11px] tracking-[0.2em] uppercase font-medium mb-4">
              {label}
            </p>
          )}
          <h1 className="font-serif text-5xl md:text-6xl text-charcoal leading-tight">
            {title}
          </h1>
          {description && (
            <p className="text-muted-foreground mt-5 max-w-xl leading-relaxed text-lg">
              {description}
            </p>
          )}
        </FadeIn>
      </Container>
    </div>
  )
}
