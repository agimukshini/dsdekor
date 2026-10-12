import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { MobileContactBar } from "./MobileContactBar";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-paper focus:px-4 focus:py-2"
      >
        Aller au contenu
      </a>
      <Header />
      <main id="contenu" className="pb-[calc(4.75rem+env(safe-area-inset-bottom))] lg:pb-0">
        {children}
      </main>
      <Footer />
      <MobileContactBar />
    </>
  );
}
