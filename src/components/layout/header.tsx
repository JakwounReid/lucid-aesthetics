"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-cream/95 backdrop-blur-sm shadow-sm"
          : "bg-cream/90 backdrop-blur-sm"
      )}
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-serif text-2xl text-bronze tracking-wide hover:text-bronze/80 transition-colors"
          onClick={() => setOpen(false)}
        >
          Lucid Aesthetics
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-charcoal/70 hover:text-charcoal text-sm tracking-wide transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/book"
            className={cn(buttonVariants({ size: "sm" }), "ml-2")}
          >
            Book Now
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-charcoal"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
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
  );
}
