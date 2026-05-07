import React from "react";
import { Command as Cmdk } from "cmdk";
import { toast } from "sonner";
import { Github, Linkedin, Mail, Search } from "lucide-react";
import { SiLeetcode } from "react-icons/si";

import { profile } from "@/content/profile";
import { cn } from "@/lib/utils";

type Item = {
  label: string;
  keywords?: string;
  onSelect: () => void;
  icon?: React.ReactNode;
};

function scrollToHash(hash: string) {
  const id = hash.replace("#", "");
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function CommandPalette() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const isK = e.key.toLowerCase() === "k";
      if ((e.ctrlKey || e.metaKey) && isK) {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "/") {
        if ((e.target as HTMLElement | null)?.tagName?.toLowerCase() === "input") return;
        e.preventDefault();
        setOpen(true);
      }
      if (e.key === "Escape") setOpen(false);
    };
    const onOpen = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener("reetesh:cmdk", onOpen as EventListener);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("reetesh:cmdk", onOpen as EventListener);
    };
  }, []);

  const items = React.useMemo<Item[]>(
    () => [
      { label: "Go to About", keywords: "about me summary", onSelect: () => scrollToHash("#about") },
      { label: "Go to Skills", keywords: "skills tech stack", onSelect: () => scrollToHash("#skills") },
      { label: "Go to Experience", keywords: "timeline work", onSelect: () => scrollToHash("#experience") },
      { label: "Go to Projects", keywords: "featured work", onSelect: () => scrollToHash("#projects") },
      { label: "Go to Competitive Programming", keywords: "leetcode codeforces", onSelect: () => scrollToHash("#cp") },
      { label: "Go to Contact", keywords: "email message", onSelect: () => scrollToHash("#contact") },
      {
        label: "Open GitHub",
        keywords: "code repos",
        icon: <Github className="h-4 w-4" />,
        onSelect: () => window.open(profile.links.github, "_blank", "noreferrer")
      },
      {
        label: "Open LinkedIn",
        keywords: "network",
        icon: <Linkedin className="h-4 w-4" />,
        onSelect: () => window.open(profile.links.linkedin, "_blank", "noreferrer")
      },
      {
        label: "Open LeetCode",
        keywords: "dsa",
        icon: <SiLeetcode className="h-4 w-4" />,
        onSelect: () => window.open(profile.links.leetcode, "_blank", "noreferrer")
      },
      {
        label: "Copy email",
        keywords: "mail",
        icon: <Mail className="h-4 w-4" />,
        onSelect: async () => {
          await navigator.clipboard.writeText(profile.email);
          toast.success("Email copied", { description: profile.email });
        }
      }
    ],
    []
  );

  React.useEffect(() => {
    if (!open) return;
    const t = window.setTimeout(() => {
      const input = document.querySelector<HTMLInputElement>("[data-cmdk-input]");
      input?.focus();
    }, 20);
    return () => window.clearTimeout(t);
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[80] grid place-items-center bg-black/50 p-4 backdrop-blur-sm"
      onMouseDown={() => setOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-label="Command palette"
    >
      <div
        className="glass noise w-full max-w-xl overflow-hidden rounded-2xl"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <Cmdk className="p-2">
          <div className="flex items-center gap-2 rounded-xl border border-border/60 bg-bg-elevated/30 px-3 py-2">
            <Search className="h-4 w-4 text-fg-muted" />
            <Cmdk.Input
              data-cmdk-input
              placeholder="Search sections, actions, links…"
              className={cn(
                "w-full bg-transparent text-sm font-semibold text-fg placeholder:text-fg-muted/70 outline-none"
              )}
            />
            <span className="rounded-md border border-border/60 bg-bg-elevated/30 px-1.5 py-0.5 font-mono text-[10px] text-fg-muted">
              Esc
            </span>
          </div>

          <Cmdk.List className="max-h-[360px] overflow-auto p-2">
            <Cmdk.Empty className="px-3 py-8 text-center text-sm font-semibold text-fg-muted">
              No results.
            </Cmdk.Empty>
            <Cmdk.Group heading="Navigate" className="[&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:pt-4 [&_[cmdk-group-heading]]:pb-2 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-bold [&_[cmdk-group-heading]]:text-fg-muted">
              {items.slice(0, 6).map((it) => (
                <Cmdk.Item
                  key={it.label}
                  value={`${it.label} ${it.keywords ?? ""}`}
                  onSelect={() => {
                    setOpen(false);
                    it.onSelect();
                  }}
                  className="flex cursor-pointer items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-fg-muted outline-none data-[selected=true]:bg-bg-elevated/40 data-[selected=true]:text-fg"
                >
                  <span className="grid h-8 w-8 place-items-center rounded-xl border border-border/60 bg-bg-elevated/20">
                    ↳
                  </span>
                  {it.label}
                </Cmdk.Item>
              ))}
            </Cmdk.Group>

            <Cmdk.Group heading="Links" className="[&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:pt-4 [&_[cmdk-group-heading]]:pb-2 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-bold [&_[cmdk-group-heading]]:text-fg-muted">
              {items.slice(6).map((it) => (
                <Cmdk.Item
                  key={it.label}
                  value={`${it.label} ${it.keywords ?? ""}`}
                  onSelect={() => {
                    setOpen(false);
                    it.onSelect();
                  }}
                  className="flex cursor-pointer items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-fg-muted outline-none data-[selected=true]:bg-bg-elevated/40 data-[selected=true]:text-fg"
                >
                  <span className="grid h-8 w-8 place-items-center rounded-xl border border-border/60 bg-bg-elevated/20">
                    {it.icon ?? "↗"}
                  </span>
                  {it.label}
                </Cmdk.Item>
              ))}
            </Cmdk.Group>
          </Cmdk.List>
        </Cmdk>
      </div>
    </div>
  );
}

