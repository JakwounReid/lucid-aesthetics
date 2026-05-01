"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === "/"

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // On home page: transparent until scrolled. On all other pages: always opaque.
  const transparent = isHome && !scrolled && !open

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        transparent
          ? "bg-transparent"
          : "bg-cream/95 backdrop-blur-sm shadow-sm"
      )}
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10 h-16 flex items-center justify-between">
        <Link
          href="/"
          className={cn(
            "font-serif text-2xl tracking-wide transition-colors",
            transparent
              ? "text-cream hover:text-cream/80"
              : "text-bronze hover:text-bronze/80"
          )}
          onClick={() => setOpen(false)}
        >
          Lucid Aesthetics
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden md:flex items-center gap-8"
          aria-label="Primary navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm tracking-wide transition-colors",
                transparent
                  ? "text-cream/75 hover:text-cream"
                  : "text-charcoal/70 hover:text-charcoal"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/book"
            className={cn(
              buttonVariants({ size: "sm" }),
              "ml-2",
              transparent
                ? "bg-cream/15 hover:bg-cream/25 text-cream border border-cream/30 backdrop-blur-sm"
                : ""
            )}
          >
            Book Now
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className={cn(
            "md:hidden transition-colors",
            transparent ? "text-cream" : "text-charcoal"
          )}
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu — always opaque */}
      {open && (
        <nav
          className="md:hidden bg-cream border-t border-sand px-6 py-5 flex flex-col gap-4"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-charcoal text-sm tracking-wide py-1"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/book"
            className={cn(buttonVariants({ size: "sm" }), "w-fit mt-1")}
            onClick={() => setOpen(false)}
          >
            Book Now
          </Link>
        </nav>
      )}
    </header>
  )
}
