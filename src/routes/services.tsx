import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter, SiteHeader } from "@/components/site/site-shell";
import ServicesPage from "@/components/site/servicess/ServicePage";

export const Route = createFileRoute("/services")({
  component: ServicesRoute,
});

function ServicesRoute() {
  return (
    <>
      <SiteHeader theme="light" />
      <ServicesPage />
      <SiteFooter />
    </>
  );
}
