import { BriefcaseBusiness, Cpu, Gauge, Layers3 } from "lucide-react";

import { profile } from "@/content/profile";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Card } from "@/components/ui/card";

const pillars = [
  {
    icon: Gauge,
    title: "Performance-first",
    body: "I care about perceived speed—fast interactions, low latency, and stable UI under pressure."
  },
  {
    icon: Cpu,
    title: "DSA mindset",
    body: "I reason with invariants, complexity, and edge cases before touching code."
  },
  {
    icon: Layers3,
    title: "Design systems",
    body: "Reusable components, spacing hierarchy, and accessibility that scales across features."
  },
  {
    icon: BriefcaseBusiness,
    title: "Product clarity",
    body: "I translate ambiguous requirements into clean UX and pragmatic engineering trade-offs."
  }
] as const;

export function About() {
  return (
    <section id="about" className="container-max py-20 sm:py-24">
      <SectionHeader
        kicker="About"
        title="Engineering with clarity, speed, and intention."
        description="I’m Reetesh Sahu—a full stack developer who blends competitive programming fundamentals with modern UI craftsmanship. My goal is to ship scalable products that feel effortless to use and easy to maintain."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <Reveal as="div">
          <Card className="p-6 sm:p-8">
            <p className="font-mono text-xs text-fg-muted">Career direction</p>
            <h3 className="mt-2 text-xl font-extrabold tracking-tight sm:text-2xl">
              Building high-impact web systems.
            </h3>
            <p className="mt-3 text-sm text-fg-muted">
              I’m aiming for product teams where engineering quality matters—performance budgets,
              clean abstractions, and thoughtful developer experience. I enjoy full-stack work:
              building UI systems in React, designing APIs in Node.js, and modeling data in SQL/NoSQL
              databases.
            </p>
            <div className="mt-6 rounded-2xl border border-border/60 bg-bg-elevated/25 p-4">
              <div className="text-sm font-semibold text-fg-muted">Currently based in</div>
              <div className="mt-1 text-lg font-extrabold tracking-tight">{profile.location}</div>
              <div className="mt-3 text-sm font-semibold text-fg-muted">Contact</div>
              <div className="mt-1 flex flex-wrap gap-3 text-sm">
                <a className="focus-ring rounded-lg px-2 py-1 text-fg-muted hover:text-fg hover:bg-bg-elevated/30" href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
                <a className="focus-ring rounded-lg px-2 py-1 text-fg-muted hover:text-fg hover:bg-bg-elevated/30" href={`tel:${profile.phone}`}>
                  {profile.phone}
                </a>
              </div>
            </div>
          </Card>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2">
          {pillars.map((p, idx) => (
            <Reveal key={p.title} as="div" delay={0.03 * idx}>
              <Card className="p-6">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-2xl border border-border/60 bg-bg-elevated/25 shadow-[0_0_0.9rem_hsl(var(--glow)/0.14)]">
                    <p.icon className="h-5 w-5 text-fg" />
                  </div>
                  <div className="text-sm font-extrabold tracking-tight">{p.title}</div>
                </div>
                <p className="mt-3 text-sm text-fg-muted">{p.body}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

