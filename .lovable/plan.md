# Single Services Page

## Goal
Build one premium editorial `/services` page containing all five service verticals as anchored sections. No individual service routes will be created.

## Page structure
- Create a full-width services hero using the existing event imagery, typography, spacing, colors, header, footer, and reveal motion.
- Add five substantial service sections driven from the existing structured service content.
- Vary the section compositions through alternating image/text layouts, asymmetric blocks, and one immersive full-width treatment without changing the design system.
- Each section will include its service number, title, focused description, complete capability list, supporting image, and a relevant inquiry link.
- Finish with the requested dual-action closing section: “Let’s create something that moves people and business.”

## Navigation
- Change the global Services link to `/services`.
- Change every desktop dropdown item to its matching `/services#…` anchor.
- Expose the same five anchored service links in the mobile menu.
- Update the footer Services link and homepage service links to the new page or section anchors.
- Preserve smooth scrolling and add stable scroll offsets so anchored headings are not hidden by the fixed header.

## Technical details
- Create one reusable service-section component, configured by structured data; no duplicated page markup.
- Reuse local optimized service imagery and existing `Reveal` animation.
- Add unique `/services` metadata: title, description, Open Graph title/description, type, Twitter card, and canonical URL.
- Remove the unused individual-service template so the codebase no longer implies separate detail pages.
- Resolve current pre-existing type errors in touched shared files, then verify the build plus desktop/mobile anchors and navigation in the live preview.
