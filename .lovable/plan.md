# Performance & code-quality refactor — Eon Media site

Your brief describes a job-application tracker (dashboards, applications, pagination, database queries, auth). This project is the Eon Media marketing website: four pages (home, about, services, real estate), no user accounts, no database reads, no lists to paginate. So the sections about pagination, query optimisation, search debouncing and user isolation have nothing to act on here.

Everything else in the brief does apply, and the audit found real problems. Below is what I'd actually fix, in priority order. No page will look or behave differently.

## What the audit found

**1. Images are the dominant problem — about 12 MB of media**
- The animated graphics folder alone is 9.9 MB, including a single 4.9 MB file used only on an unfinished "in development" screen that no page links to.
- Five animated graphics on the home page total roughly 2.5 MB and start downloading immediately.
- The logo is a 290 KB PNG; a PR photo is a 661 KB PNG; several photos are 200–280 KB JPGs.
- Only 4 of 16 images defer loading; the rest download even when far below the fold.

**2. Dead code**
- Two unused service components (`servicess/ServicePage`, `servicess/HorizontalScrollTrack`) plus an unused careers section.
- 36 unused interface components (sidebar, charts, calendar, carousel, tables, command palette and more) — the sidebar file alone is 744 lines.
- Around 25 installed libraries nothing imports: charts, carousel, date picker, calendar, resizable panels, OTP input, toast, form/validation libraries.

**3. Duplication**
- The same small "01 — Label" heading is written three separate times.
- The scroll-animation engine is registered seven times across seven files instead of once.
- Two different implementations of the same horizontal-scroll behaviour.
- Service images and copy are duplicated between the shared content file and individual components.

**4. React and animation issues**
- The home hero rebuilds its headline and image arrays on every render and restarts its autoplay timer on every mouse enter/leave.
- One animation helper uses an untyped value; several effects re-run more than needed.
- Smooth scrolling runs on every page unconditionally, including for users who prefer reduced motion.

## What I'll do

**Images (largest win)**
- Delete the unused 4.9 MB graphic and the unused screen that references it.
- Convert the remaining animated graphics and heavy PNGs to modern compressed formats, target roughly 80–90% smaller with no visible quality loss.
- Add deferred loading and explicit dimensions to every below-the-fold image, keep the hero image at high priority.
- Load the home page's animated capability graphics only when they scroll into view.

**Dead code and dependencies**
- Remove the unused components, the unused interface library files, and the packages nothing imports.

**Structure and reuse**
- One shared `SectionLabel`, one shared section wrapper, one shared CTA block, one shared inquiry section — replacing the copies.
- Move remaining hardcoded page copy into the content files so pages are data plus layout.
- Split the two largest page files (home hero, real estate) into focused pieces under their existing folders.
- Add small reusable hooks: `useGsapContext` (register once, clean up properly), `useReducedMotion`, `useThrottledCallback`.

**React performance**
- Hoist constant arrays out of render; memoise only the genuinely expensive derived values.
- Fix the hero autoplay so hovering doesn't tear down and rebuild the timer.
- Correct the effect dependency lists and remove state that can be derived.
- Lazy-load the heavy scroll-driven sections (services horizontal track, capability grid) with lightweight placeholders so they don't sit in the initial bundle.
- Register the animation engine once at the root; skip smooth scroll and pinning when reduced motion is requested.

**Types and safety**
- Remove the untyped values, share the service/content types from one place.
- Add graceful fallbacks so a failed animation or missing image never blanks a page.

## Verification

Production build, then desktop and mobile browser passes over all four pages: hero autoplay and tabs, about reveals, the services horizontal pin-and-release, real-estate blocks, both inquiry forms, all navigation and anchor links. I'll report before/after bundle and image weight.

## Out of scope (nothing to act on)

Pagination, database query tuning, search debouncing, server components, auth flows — this site has none of these. If you later add a backend or a content system, those become relevant.
