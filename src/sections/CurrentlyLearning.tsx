import { currentlyLearning } from "@/content/data";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Card } from "@/components/ui/card";

export function CurrentlyLearning() {
  return (
    <section id="learning" className="container-max py-20 sm:py-24">
      <SectionHeader
        kicker="Currently Learning"
        title="Always upgrading the toolkit."
        description="I like improving skills that directly move product impact: better performance, better architecture, and stronger realtime reliability."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {currentlyLearning.map((l, idx) => (
          <Reveal key={l.title} as="div" delay={0.03 * idx}>
            <Card className="p-6">
              <div className="flex items-start gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-2xl border border-border/60 bg-bg-elevated/25 shadow-[0_0_0.9rem_hsl(var(--glow)/0.14)]">
                  <l.icon className="h-5 w-5 text-fg" />
                </div>
                <div>
                  <div className="text-base font-extrabold tracking-tight">{l.title}</div>
                  <div className="mt-1 text-sm text-fg-muted">{l.detail}</div>
                </div>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

