import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronDown, Instagram, Linkedin, Menu, MoveUpRight, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { serviceMenu } from "@/content/site-data";

export function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link to="/" className="group inline-flex items-center gap-3" aria-label="Eon Media home">
      <span className={`grid size-9 place-items-center border ${inverse ? "border-hero-foreground/55" : "border-foreground/35"}`}>
        <span className="font-display text-xl leading-none">E</span>
      </span>
      <span className="font-display text-xl uppercase leading-none tracking-[0.18em]">Eon Media</span>
    </Link>
  );
}

function NavDropdown({ inverse }: { inverse: boolean }) {
  return (
    <div className="group relative">
      <button className="nav-link inline-flex items-center gap-1.5 py-7" aria-haspopup="true">
        Services <ChevronDown className="size-3.5 transition-transform group-hover:rotate-180 group-focus-within:rotate-180" />
      </button>
      <div className="invisible absolute left-1/2 top-full w-[410px] -translate-x-1/2 translate-y-2 border border-border bg-background p-3 text-foreground opacity-0 shadow-2xl transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
        <p className="border-b border-border px-3 pb-3 pt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Integrated Capabilities</p>
        {serviceMenu.map((item, index) => (
          <a key={item} href="#services" className="flex items-center justify-between border-b border-border/70 px-3 py-3 text-sm transition-colors last:border-none hover:bg-secondary focus-visible:bg-secondary focus-visible:outline-none">
            <span>{item}</span><span className="text-xs text-accent-strong">0{index + 1}</span>
          </a>
        ))}
      </div>
      <span className={inverse ? "text-hero-foreground" : "text-foreground"} />
    </div>
  );
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const inverse = !scrolled && !open;
  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${inverse ? "border-hero-foreground/20 bg-transparent text-hero-foreground" : "border-border bg-background/95 text-foreground shadow-sm backdrop-blur-xl"}`}>
      <div className="site-container flex h-20 items-center justify-between lg:h-24">
        <Brand inverse={inverse} />
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          <a className="nav-link" href="#about">About Us</a>
          <NavDropdown inverse={inverse} />
          <a className="nav-link real-estate-nav" href="#real-estate">Real Estate Solutions</a>
          <a className="nav-link" href="#inquiry">Contact Us</a>
          <Button asChild variant={inverse ? "hero" : "premium"} size="lg"><a href="#inquiry">Request a Quote <ArrowRight /></a></Button>
        </nav>
        <Button variant="ghost" size="icon" className="lg:hidden" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      {open && (
        <nav className="border-t border-border bg-background px-6 pb-8 pt-4 text-foreground lg:hidden" aria-label="Mobile navigation">
          <div className="flex flex-col">
            <a onClick={() => setOpen(false)} className="mobile-nav-link" href="#about">About Us</a>
            <a onClick={() => setOpen(false)} className="mobile-nav-link" href="#services">Services</a>
            <a onClick={() => setOpen(false)} className="mobile-nav-link text-accent-strong" href="#real-estate">Real Estate Solutions</a>
            <a onClick={() => setOpen(false)} className="mobile-nav-link" href="#inquiry">Contact Us</a>
            <Button asChild variant="premium" size="lg" className="mt-5 w-full"><a onClick={() => setOpen(false)} href="#inquiry">Request a Quote <ArrowRight /></a></Button>
          </div>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="site-container py-16 lg:py-24">
        <div className="grid gap-12 border-b border-ink-foreground/15 pb-16 md:grid-cols-2 lg:grid-cols-[1.25fr_.75fr_1fr_1.25fr]">
          <div><Brand inverse /><p className="mt-6 max-w-xs text-sm leading-7 text-ink-muted">Strategic thinking, creative distinction and precise execution—from Bangalore to markets across India.</p></div>
          <div><h2 className="footer-title">Navigate</h2><div className="footer-links"><a href="#about">About Us</a><a href="#services">Services</a><a href="#real-estate">Real Estate</a><a href="#inquiry">Contact Us</a></div></div>
          <div><h2 className="footer-title">Contact</h2><div className="footer-links"><a href="mailto:sales@eonmedia.co.in">sales@eonmedia.co.in</a><a href="mailto:marketing@eonmedia.co.in">marketing@eonmedia.co.in</a><a href="tel:+918433857555">+91 84338 57555</a></div></div>
          <div><h2 className="footer-title">Bangalore</h2><address className="not-italic text-sm leading-7 text-ink-muted">No. 235 Binnamangala, 2nd Stage ProWork,<br />Indiranagar, Bangalore North,<br />Karnataka – 560038</address></div>
        </div>
        <div className="grid gap-10 border-b border-ink-foreground/15 py-10 lg:grid-cols-2 lg:items-end">
          <div><p className="eyebrow text-accent">Eon Briefing</p><h2 className="mt-3 font-display text-3xl">Ideas, perspectives and industry signals.</h2></div>
          <form className="flex border-b border-ink-foreground/40" onSubmit={(event) => event.preventDefault()}><label className="sr-only" htmlFor="newsletter">Work email</label><input id="newsletter" type="email" required placeholder="Your work email" className="h-12 min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-ink-muted" /><Button type="submit" variant="ghostOnDark" size="icon" aria-label="Subscribe"><ArrowRight /></Button></form>
        </div>
        <div className="flex flex-col gap-5 pt-8 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between"><p>© 2026 Eon Media. All rights reserved.</p><div className="flex gap-3"><a className="social-link" href="#" aria-label="LinkedIn"><Linkedin /></a><a className="social-link" href="#" aria-label="Instagram"><Instagram /></a><a className="social-link" href="mailto:sales@eonmedia.co.in" aria-label="Email Eon Media"><MoveUpRight /></a></div></div>
      </div>
    </footer>
  );
}
