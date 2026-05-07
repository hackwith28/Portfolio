import { Quote } from "lucide-react";

import { testimonials } from "@/content/data";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Card } from "@/components/ui/card";

export function Testimonials() {
  return (
    <section id="testimonials" className="container-max py-20 sm:py-24">
      <SectionHeader
        kicker="Testimonials"
        title="What collaborators notice."
        description="A lightweight space for feedback. If you’d like, I can replace these with real quotes from mentors/teammates later."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {testimonials.map((t, idx) => (
          <Reveal key={t.quote} as="div" delay={0.03 * idx}>
            <Card className="p-6 sm:p-8">
              <div className="flex items-start gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-2xl border border-border/60 bg-bg-elevated/25 shadow-[0_0_0.9rem_hsl(var(--glow)/0.14)]">
                  <Quote className="h-5 w-5 text-fg" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-fg-muted">“{t.quote}”</p>
                  <div className="mt-4">
                    <div className="text-sm font-extrabold tracking-tight">{t.author}</div>
                    <div className="mt-1 text-xs font-semibold text-fg-muted">{t.role}</div>
                  </div>
                </div>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

