import { HeroSection } from "@/components/home/hero"
import { ServicesPreview } from "@/components/home/services-preview"
import { AboutTeaser } from "@/components/home/about-teaser"
import { TestimonialsSection } from "@/components/home/testimonials"
import { NewsletterSection } from "@/components/home/newsletter"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesPreview />
      <AboutTeaser />
      <TestimonialsSection />
      <NewsletterSection />
    </>
  )
}
