import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronDown, Instagram, Linkedin, Menu, MoveUpRight, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Logo, type LogoSize } from "@/components/ui/logo";
import { serviceMenu } from "@/content/site-data";

type NavLinkType = {
  label: string;
  href?: string;
  to?: string;
  isDropdown?: boolean;
  desktopOnly?: boolean;
  mobileClassName?: string;
};

const NAV_LINKS: NavLinkType[] = [
  { label: "HOME", to: "/", desktopOnly: true },
  { label: "ABOUT US", to: "/about" },
  { label: "SERVICES", to: "/services", isDropdown: true },
  { label: "REAL ESTATE SOLUTIONS", href: "/#real-estate", mobileClassName: "text-accent-strong" },
  { label: "CONTACT US", href: "/#inquiry" },
];

export function Brand({
  inverse = false,
  size = "sm",
  variant,
  className = "",
}: {
  inverse?: boolean;
  size?: LogoSize;
  variant?: LogoSize;
  className?: string;
}) {
  return <Logo size={size || variant} inverse={inverse} asLink href="/" className={className} />;
}

function NavDropdown() {
  return (
    <div className="group relative">
      <button
        className="nav-link text-sm font-medium text-current hover:opacity-70 inline-flex items-center gap-1.5 py-7 uppercase"
        aria-haspopup="true"
      >
        SERVICES{" "}
        <ChevronDown className="size-3.5 transition-transform group-hover:rotate-180 group-focus-within:rotate-180" />
      </button>
      <div className="invisible absolute left-1/2 top-full w-[410px] -translate-x-1/2 translate-y-2 border border-border bg-background p-3 text-foreground opacity-0 shadow-2xl transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 z-50">
        <p className="border-b border-border px-3 pb-3 pt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Integrated Capabilities
        </p>
        {serviceMenu.map((item, index) => (
          <a
            key={item.href}
            href={item.href}
            className="flex items-center justify-between border-b border-border/70 px-3 py-3 text-sm transition-colors last:border-none hover:bg-secondary focus-visible:bg-secondary focus-visible:outline-none"
          >
            <span>{item.label}</span>
            <span className="text-xs text-accent-strong">0{index + 1}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

export function SiteHeader({ theme = "dark" }: { theme?: "light" | "dark" }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border text-foreground shadow-sm py-0 bg-white"
          : `bg-transparent ${theme === "light" ? "text-ink" : "text-white"} py-2`
      }`}
    >
      <div className="w-full px-6 sm:px-12 lg:px-16 flex h-20 items-center justify-between lg:h-24">
        {/* Left Side: Brand and Nav Links */}
        <div className="flex items-center gap-10">
          <Brand size="md" inverse={theme === "dark"} />
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
            {NAV_LINKS.map((link) => {
              if (link.isDropdown) return <NavDropdown key="dropdown" />;

              if (link.to === "/" || link.to === "/about" || link.to === "/services") {
                return (
                  <Link
                    key={link.label}
                    to={link.to}
                    className="nav-link text-sm font-medium text-current hover:opacity-70 uppercase"
                  >
                    {link.label}
                  </Link>
                );
              }

              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="nav-link text-sm font-medium text-current hover:opacity-70 uppercase"
                >
                  {link.label}
                </a>
              );
            })}
          </nav>
        </div>

        <div className="hidden items-center gap-6 lg:flex">
          <Button
            asChild
            variant="outline"
            size="lg"
            className={`font-medium rounded-none px-6 transition-all text-xs tracking-widest uppercase ${
              scrolled || theme === "light"
                ? "border-ink text-ink hover:bg-ink hover:text-white"
                : "border-white text-white bg-black/20 backdrop-blur-sm hover:bg-white hover:text-black"
            }`}
          >
            <a href="/#inquiry" className="inline-flex items-center">
              REQUEST A QUOTE <ArrowRight className="size-4 ml-2" />
            </a>
          </Button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Mobile Drawer Menu */}
      {open && (
        <nav
          className="border-t border-border bg-background px-6 pb-8 pt-4 text-foreground lg:hidden"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-3">
            {NAV_LINKS.filter((link) => !link.desktopOnly).map((link) => {
              if (link.to === "/" || link.to === "/about" || link.to === "/services") {
                return (
                  <div key={link.label}>
                    <Link
                      to={link.to}
                      onClick={() => setOpen(false)}
                      className={`mobile-nav-link block ${link.mobileClassName || ""}`}
                    >
                      {link.label}
                    </Link>
                    {link.isDropdown && (
                      <div className="border-b border-border py-3 pl-4">
                        {serviceMenu.map((item) => (
                          <a
                            key={item.href}
                            href={item.href}
                            onClick={() => setOpen(false)}
                            className="block py-2 text-sm text-muted-foreground"
                          >
                            {item.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`mobile-nav-link ${link.mobileClassName || ""}`}
                >
                  {link.label}
                </a>
              );
            })}
            <Button asChild variant="premium" size="lg" className="mt-5 w-full">
              <a onClick={() => setOpen(false)} href="/#inquiry">
                Request a Quote <ArrowRight />
              </a>
            </Button>
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
          <div>
            <Brand inverse size="md" />
            <p className="mt-6 max-w-xs text-sm leading-7 text-ink-muted">
              Strategic thinking, creative distinction and precise execution—from Bangalore to
              markets across India.
            </p>
            <div className="mt-8 flex gap-3">
              <a className="social-link" href="#" aria-label="LinkedIn">
                <Linkedin />
              </a>
              <a className="social-link" href="#" aria-label="Instagram">
                <Instagram />
              </a>
              <a
                className="social-link"
                href="mailto:sales@eonmedia.co.in"
                aria-label="Email Eon Media"
              >
                <MoveUpRight />
              </a>
            </div>
          </div>
          <div>
            <h2 className="footer-title">Navigate</h2>
            <div className="footer-links">
              <Link to="/about">About Us</Link>
              <Link to="/services">Services</Link>
              <a href="/#real-estate">Real Estate</a>
              <a href="/#inquiry">Contact Us</a>
            </div>
          </div>
          <div>
            <h2 className="footer-title">Contact</h2>
            <div className="footer-links">
              <a href="mailto:sales@eonmedia.co.in">sales@eonmedia.co.in</a>
              <a href="mailto:marketing@eonmedia.co.in">marketing@eonmedia.co.in</a>
              <a href="tel:+918433857555">+91 84338 57555</a>
            </div>
          </div>
          <div>
            <h2 className="footer-title">Bangalore</h2>
            <address className="not-italic text-sm leading-7 text-ink-muted">
              No. 235 Binnamangala, 2nd Stage ProWork,
              <br />
              Indiranagar, Bangalore North,
              <br />
              Karnataka – 560038
            </address>
          </div>
        </div>
        <div className="grid gap-10 border-b border-ink-foreground/15 py-10 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="eyebrow text-accent">Eon Briefing</p>
            <h2 className="mt-3 font-display text-3xl">
              Ideas, perspectives and industry signals.
            </h2>
          </div>
          <form
            className="flex border-b border-ink-foreground/40"
            onSubmit={(event) => event.preventDefault()}
          >
            <label className="sr-only" htmlFor="newsletter">
              Work email
            </label>
            <input
              id="newsletter"
              type="email"
              required
              placeholder="Your work email"
              className="h-12 min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-ink-muted"
            />
            <Button type="submit" variant="ghostOnDark" size="icon" aria-label="Subscribe">
              <ArrowRight />
            </Button>
          </form>
        </div>
        <div className="flex flex-col gap-5 pt-8 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Eon Media. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
