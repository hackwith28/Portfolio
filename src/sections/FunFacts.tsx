import { funFacts } from "@/content/data";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Card } from "@/components/ui/card";

export function FunFacts() {
  return (
    <section id="fun" className="container-max py-20 sm:py-24">
      <SectionHeader
        kicker="Fun facts"
        title="Small things that explain the craft."
        description="A few personality signals that show how I think, build, and collaborate."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {funFacts.map((f, idx) => (
          <Reveal key={f.title} as="div" delay={0.03 * idx}>
            <Card className="p-6">
              <div className="flex items-start gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-2xl border border-border/60 bg-bg-elevated/25 shadow-[0_0_0.9rem_hsl(var(--glow)/0.14)]">
                  <f.icon className="h-5 w-5 text-fg" />
                </div>
                <div>
                  <div className="text-base font-extrabold tracking-tight">{f.title}</div>
                  <div className="mt-1 text-sm text-fg-muted">{f.detail}</div>
                </div>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

