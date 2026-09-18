import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter, SiteHeader } from "@/components/site/site-shell";
import { unlockPages } from "@/content/site-data";
import { InDevelopment } from "@/components/site/InDevelopment";

import AboutPage from "@/components/site/about/AboutPage";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Eon Media | Integrated Events, Marketing & Communications" },
      {
        name: "description",
        content:
          "Eon Media is an integrated partner for events, corporate communications, branding, digital marketing and business growth advisory based in Bangalore, India.",
      },
      {
        property: "og:title",
        content: "About Eon Media | Integrated Events, Marketing & Communications",
      },
      {
        property: "og:description",
        content:
          "An integrated partner for events, corporate communications, branding, digital marketing and business growth advisory based in Bangalore, India.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutRoute,
});

function AboutRoute() {
  if (!unlockPages) return <InDevelopment />;
  return (
    <>
      <SiteHeader />
      <AboutPage />
      <SiteFooter />
    </>
  );
}
