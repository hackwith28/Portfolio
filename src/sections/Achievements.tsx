import { achievements, certifications } from "@/content/data";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

export function Achievements() {
  return (
    <section id="achievements" className="container-max py-20 sm:py-24">
      <SectionHeader
        kicker="Achievements"
        title="Signals recruiters care about."
        description="Competitive progress, leadership, and consistent shipping. I like building evidence through outcomes and repeatable habits."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {achievements.map((a, idx) => (
          <Reveal key={a.title} as="div" delay={0.03 * idx}>
            <Card className="p-6">
              <div className="flex items-start gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-2xl border border-border/60 bg-bg-elevated/25 shadow-[0_0_0.9rem_hsl(var(--glow)/0.14)]">
                  <a.icon className="h-5 w-5 text-fg" />
                </div>
                <div>
                  <div className="text-base font-extrabold tracking-tight">{a.title}</div>
                  <div className="mt-1 text-sm text-fg-muted">{a.detail}</div>
                </div>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>

      <div className="mt-10">
        <Reveal as="div">
          <Card className="p-6 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-lg font-extrabold tracking-tight">
                Certifications
              </h3>
              <Badge variant="glow">Verified learning</Badge>
            </div>
            <div className="mt-5 grid gap-2 sm:grid-cols-2">
              {certifications.map((c) => (
                <a
                  key={c.url}
                  href={c.url}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring group rounded-2xl border border-border/60 bg-bg-elevated/25 p-4 text-sm font-semibold text-fg-muted transition hover:bg-bg-elevated/35 hover:text-fg"
                >
                  <div className="flex items-start justify-between gap-3">
                    <span>{c.title}</span>
                    <ExternalLink className="mt-0.5 h-4 w-4 shrink-0 opacity-70 transition group-hover:opacity-100" />
                  </div>
                </a>
              ))}
            </div>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}

