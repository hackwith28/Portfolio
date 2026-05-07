import React from "react";
import { motion } from "framer-motion";
import { Code2, ExternalLink, Github, Sparkles } from "lucide-react";

import { projects, type Project } from "@/content/data";
import { profile } from "@/content/profile";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const filters = [
  { id: "all", label: "All" },
  { id: "fullstack", label: "Full Stack" },
  { id: "ai", label: "Computer Vision" },
  { id: "game", label: "Realtime" },
  { id: "tools", label: "Algorithms" }
] as const;

type FilterId = (typeof filters)[number]["id"];

function accentBg(accent: Project["accent"]) {
  if (accent === "cyan") return "from-[#4FD1FF]/20 via-transparent to-[#B06CFF]/12";
  if (accent === "violet") return "from-[#7C5CFF]/20 via-transparent to-[#4FD1FF]/12";
  return "from-[#B06CFF]/22 via-transparent to-[#7C5CFF]/12";
}

function mailForLink(projectName: string) {
  const subject = encodeURIComponent(`Project link request: ${projectName}`);
  const body = encodeURIComponent(
    `Hi Reetesh,\n\nI'd love to check out ${projectName}. Could you share the live demo / GitHub link?\n\nThanks!`
  );
  return `mailto:${profile.email}?subject=${subject}&body=${body}`;
}

function useTilt() {
  const ref = React.useRef<HTMLDivElement | null>(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      const rx = (py - 0.5) * -8;
      const ry = (px - 0.5) * 10;
      el.style.setProperty("--rx", `${rx}deg`);
      el.style.setProperty("--ry", `${ry}deg`);
      el.style.setProperty("--hx", `${Math.round(px * 100)}%`);
      el.style.setProperty("--hy", `${Math.round(py * 100)}%`);
    };

    const onLeave = () => {
      el.style.setProperty("--rx", "0deg");
      el.style.setProperty("--ry", "0deg");
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);
  return ref;
}

function ProjectCard({ p }: { p: Project }) {
  const ref = useTilt();
  const demoHref = p.links.demo;
  const ghHref = p.links.github ?? mailForLink(p.name);

  return (
    <Card
      ref={ref as any}
      className={cn(
        "group relative overflow-hidden p-6 transition-transform duration-300 will-change-transform",
        "[transform:perspective(1100px)_rotateX(var(--rx,0deg))_rotateY(var(--ry,0deg))]",
        "hover:shadow-[0_0_2.8rem_hsl(var(--glow)/0.16)]"
      )}
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100",
          "bg-[radial-gradient(700px_circle_at_var(--hx,50%)_var(--hy,30%),hsl(var(--glow)/0.18),transparent_55%)]"
        )}
        aria-hidden="true"
      />
      <div className={cn("pointer-events-none absolute inset-0 bg-gradient-to-br", accentBg(p.accent))} aria-hidden="true" />

      <div className="relative">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-fg" />
              <span className="font-mono text-xs text-fg-muted">{p.period}</span>
            </div>
            <h3 className="mt-2 text-xl font-extrabold tracking-tight">{p.name}</h3>
            <p className="mt-2 text-sm text-fg-muted">{p.oneLiner}</p>
          </div>
          <Badge variant="glow" className="capitalize">
            {p.type === "ai" ? "Computer vision" : p.type}
          </Badge>
        </div>

        <div className="mt-5 grid gap-2 text-sm text-fg-muted">
          {p.story.map((s) => (
            <div key={s} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--accent))]" />
              <span>{s}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {p.tech.map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {p.stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-border/60 bg-bg-elevated/25 p-4">
              <div className="text-lg font-extrabold tracking-tight">{s.value}</div>
              <div className="mt-1 text-xs font-semibold text-fg-muted">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {demoHref ? (
            <Button asChild>
              <a href={demoHref} target="_blank" rel="noreferrer">
                Live demo <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          ) : null}
          <Button asChild variant="secondary">
            <a href={ghHref} target="_blank" rel="noreferrer">
              GitHub <Github className="h-4 w-4" />
            </a>
          </Button>
          <Button asChild variant="ghost">
            <a href="#contact">
              Discuss this <Code2 className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </Card>
  );
}

export function Projects() {
  const [filter, setFilter] = React.useState<FilterId>("all");
  const filtered = React.useMemo(() => {
    if (filter === "all") return projects;
    return projects.filter((p) => p.type === filter);
  }, [filter]);

  return (
    <section id="projects" className="container-max py-20 sm:py-24">
      <SectionHeader
        kicker="Projects"
        title="Premium builds with real constraints."
        description="From computer vision to realtime multiplayer—each project is engineered for correctness, performance, and a polished UX. I like systems that make complexity feel simple."
      />

      <div className="mt-10 flex flex-wrap justify-center gap-2">
        {filters.map((f) => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            className={cn(
              "focus-ring rounded-full border px-4 py-2 text-sm font-semibold backdrop-blur-xl transition",
              filter === f.id
                ? "border-border/70 bg-bg-elevated/40 text-fg shadow-[0_0_1.2rem_hsl(var(--glow)/0.12)]"
                : "border-border/60 bg-bg-elevated/15 text-fg-muted hover:bg-bg-elevated/30 hover:text-fg"
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      <motion.div layout className="mt-12 grid gap-6 lg:grid-cols-2">
        {filtered.map((p) => (
          <Reveal key={p.slug} as="div">
            <ProjectCard p={p} />
          </Reveal>
        ))}
      </motion.div>

      <div className="mt-10 text-center text-xs font-semibold text-fg-muted">
        Want to see private demos? Email me at{" "}
        <a className="focus-ring rounded-md px-1.5 py-1 hover:text-fg hover:bg-bg-elevated/30" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
        .
      </div>
    </section>
  );
}

