import { SiteFooter, SiteHeader } from "@/components/site/site-shell";
import inDevelopmentGif from "@/assets/Gifs/InDevelopment.gif";

export function InDevelopment() {
  return (
    <>
      <SiteHeader theme="light" />
      <main className="flex min-h-[80svh] items-center justify-center bg-background px-4">
        <div className="max-w-md text-center flex flex-col items-center">
          <img src={inDevelopmentGif} alt="In Development" className="w-64 h-auto mb-6" />
          <h1 className="text-4xl font-bold text-foreground">Coming Soon</h1>
          <p className="mt-4 text-muted-foreground">
            This page is currently in development. Please check back later.
          </p>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
