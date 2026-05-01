import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Separator } from "@/components/ui/separator";
import { MapPin, Phone, Mail } from "lucide-react";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/book", label: "Book" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-charcoal text-cream/70">
      <Container>
        <div className="py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <p className="font-serif text-2xl text-cream mb-3 tracking-wide">
              Lucid Aesthetics
            </p>
            <p className="text-sm leading-relaxed max-w-xs">
              Personalized aesthetic treatments in the heart of Milwaukee.
              Science-backed results with warmth you&apos;ll feel from day one.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-cream text-xs font-medium uppercase tracking-[0.15em] mb-5">
              Navigate
            </p>
            <ul className="space-y-2.5">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm hover:text-gold transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <p className="text-cream text-xs font-medium uppercase tracking-[0.15em] mb-5">
              Visit Us
            </p>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 mt-0.5 text-gold shrink-0" />
                <span>
                  238 N Water St, Suite 400
                  <br />
                  Milwaukee, WI 53202
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-gold shrink-0" />
                <a href="tel:+14145550193" className="hover:text-gold transition-colors">
                  (414) 555-0193
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-gold shrink-0" />
                <a href="mailto:hello@lucidaesthetics.com" className="hover:text-gold transition-colors">
                  hello@lucidaesthetics.com
                </a>
              </li>
            </ul>
            <div className="mt-5 text-sm space-y-1">
              <p>Mon–Fri: 9am – 7pm</p>
              <p>Saturday: 10am – 5pm</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>

        <Separator className="bg-cream/10" />

        <div className="py-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs">
          <p>© 2025 Lucid Aesthetics. Milwaukee, WI. All rights reserved.</p>
          <p>
            Demo build by{" "}
            <Link
              href="https://jakwoun.me"
              className="text-gold hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Jakwoun Reid →
            </Link>
          </p>
        </div>
      </Container>
    </footer>
  );
}
