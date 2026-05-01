"use client"

import { useState } from "react"
import { CheckCircle2 } from "lucide-react"
import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/ui/fade-in"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email || status !== "idle") return
    setStatus("loading")
    // Phase 4: replace with real server action + Resend welcome email
    await new Promise((r) => setTimeout(r, 900))
    setStatus("success")
    setEmail("")
  }

  return (
    <Section className="bg-sand/40 border-t border-sand">
      <Container>
        <FadeIn className="max-w-xl mx-auto text-center">
          <p className="text-gold text-[11px] tracking-[0.2em] uppercase font-medium mb-3">
            Stay in the Know
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-4">
            Skincare insights, monthly.
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Expert tips, seasonal treatment guides, and the occasional
            members-only offer. No noise — unsubscribe anytime.
          </p>

          {status === "success" ? (
            <div className="flex items-center justify-center gap-2.5 text-bronze">
              <CheckCircle2 className="h-5 w-5" />
              <p className="font-medium">You&apos;re on the list. Welcome in.</p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-cream border-sand focus-visible:border-bronze"
                aria-label="Email address for newsletter"
              />
              <Button
                type="submit"
                disabled={status === "loading"}
                className="shrink-0 bg-bronze hover:bg-bronze/85 text-cream border-0 px-6"
              >
                {status === "loading" ? "Joining…" : "Join the list"}
              </Button>
            </form>
          )}
        </FadeIn>
      </Container>
    </Section>
  )
}
