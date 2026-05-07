import { Outlet } from "react-router-dom";

import { BackToTop } from "@/shared/shell/components/BackToTop";
import { CommandPalette } from "@/shared/shell/components/CommandPalette";
import { CustomCursor } from "@/shared/shell/components/CustomCursor";
import { Footer } from "@/shared/shell/components/Footer";
import { Navbar } from "@/shared/shell/components/Navbar";
import { ScrollProgress } from "@/shared/shell/components/ScrollProgress";
import { useKonami } from "@/shared/easterEggs/useKonami";

export function SiteShell() {
  useKonami();
  return (
    <div className="min-h-dvh">
      <a
        href="#content"
        className="focus-ring sr-only fixed left-4 top-4 z-[90] rounded-xl bg-bg-elevated/80 px-4 py-2 text-sm font-semibold text-fg backdrop-blur-xl focus:not-sr-only"
      >
        Skip to content
      </a>
      <ScrollProgress />
      <Navbar />
      <CustomCursor />
      <CommandPalette />

      <main id="content">
        <Outlet />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}

