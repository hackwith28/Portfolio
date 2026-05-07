import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Command, Menu, Moon, Sun, X } from "lucide-react";

import { profile } from "@/content/profile";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTheme } from "@/shared/theme/ThemeProvider";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "CP", href: "#cp" },
  { label: "Contact", href: "#contact" }
] as const;

export function Navbar() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="sticky top-0 z-50">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-14 bg-[linear-gradient(to_bottom,hsl(var(--bg)),transparent)]" />
      <div className="container-max py-3">
        <nav className="glass noise pointer-events-auto flex items-center justify-between rounded-2xl px-3 py-2">
          <a
            href="#top"
            className="focus-ring inline-flex items-center gap-2 rounded-xl px-2 py-2"
          >
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-[linear-gradient(135deg,hsl(var(--accent)/0.95),hsl(205_95%_62%/0.85))] text-white shadow-glow">
              R
            </span>
            <span className="hidden sm:block">
              <span className="block text-sm font-extrabold tracking-tight">
                {profile.name}
              </span>
              <span className="block text-xs font-semibold text-fg-muted">
                Full Stack Developer
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((i) => (
              <a
                key={i.href}
                href={i.href}
                className="focus-ring rounded-xl px-3 py-2 text-sm font-semibold text-fg-muted hover:bg-bg-elevated/40 hover:text-fg"
              >
                {i.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggle}
              className="focus-ring inline-flex h-10 items-center justify-center rounded-xl border border-border/60 bg-bg-elevated/20 px-3 text-fg-muted backdrop-blur-xl hover:text-fg"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>

            <a
              href="#"
              data-cmdk-open
              className="focus-ring hidden h-10 items-center gap-2 rounded-xl border border-border/60 bg-bg-elevated/20 px-3 text-xs font-semibold text-fg-muted backdrop-blur-xl hover:text-fg md:inline-flex"
              onClick={(e) => {
                e.preventDefault();
                window.dispatchEvent(new CustomEvent("reetesh:cmdk"));
              }}
            >
              <Command className="h-4 w-4" />
              <span>Command</span>
              <span className="ml-1 rounded-md border border-border/60 bg-bg-elevated/30 px-1.5 py-0.5 font-mono text-[10px]">
                Ctrl K
              </span>
            </a>

            <Button asChild className="hidden md:inline-flex" size="sm">
              <a href="#projects">View work</a>
            </Button>

            <button
              className={cn(
                "focus-ring inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border/60 bg-bg-elevated/20 text-fg-muted backdrop-blur-xl hover:text-fg lg:hidden"
              )}
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -10, filter: "blur(8px)" }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="glass noise mt-3 overflow-hidden rounded-2xl p-2 lg:hidden"
            >
              <div className="grid gap-1">
                {navItems.map((i) => (
                  <a
                    key={i.href}
                    href={i.href}
                    className="focus-ring rounded-xl px-3 py-3 text-sm font-semibold text-fg-muted hover:bg-bg-elevated/40 hover:text-fg"
                    onClick={() => setOpen(false)}
                  >
                    {i.label}
                  </a>
                ))}
                <div className="mt-1 grid gap-2 p-1 sm:grid-cols-2">
                  <Button asChild variant="secondary">
                    <a href={profile.resumeUrl} download>
                      Resume
                    </a>
                  </Button>
                  <Button asChild>
                    <a href="#contact">Hire me</a>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

