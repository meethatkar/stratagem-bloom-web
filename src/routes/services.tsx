import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter, SiteHeader } from "@/components/site/site-shell";
import ServicesPage from "@/components/site/servicess/ServicePage";
import { unlockPages } from "@/content/site-data";
import { InDevelopment } from "@/components/site/InDevelopment";

export const Route = createFileRoute("/services")({
  component: ServicesRoute,
});

function ServicesRoute() {
  if (!unlockPages) return <InDevelopment />;
  return (
    <>
      <SiteHeader theme="light" />
      <ServicesPage />
      <SiteFooter />
    </>
  );
}
