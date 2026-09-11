import * as React from "react";
import { Loader } from "@/components/ui/loader";

export function MainLoaderPage() {
  return (
    <div id="main-loader-page" className="fixed inset-0 z-[100] flex h-[100dvh] w-full flex-col items-center justify-center bg-background px-4 text-center">
      {/* Loader Graphic Wrapper */}
      <div className="relative mb-12 flex h-24 w-24 items-center justify-center text-accent">
        <Loader />
      </div>
      
      {/* Text Content */}
      <div className="flex flex-col items-center space-y-4 mt-8">
        <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Loading amazing experiences...
        </h1>
        <p className="max-w-[280px] sm:max-w-xs text-sm leading-relaxed text-muted-foreground sm:text-base">
          We're just a moment away. Hang tight while we get everything ready for you.
        </p>
      </div>
    </div>
  );
}
