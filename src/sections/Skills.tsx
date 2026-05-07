import { motion } from "framer-motion";

import { skillGroups } from "@/content/data";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export function Skills() {
  return (
    <section id="skills" className="container-max py-20 sm:py-24">
      <SectionHeader
        kicker="Skills"
        title="A stack built for modern product engineering."
        description="Strong fundamentals, modern frontend craft, and pragmatic backend/data work. I optimize for reliability, maintainability, and speed—both runtime and developer time."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {skillGroups.map((g, idx) => (
          <Reveal key={g.title} as="div" delay={0.03 * idx}>
            <Card className="group relative overflow-hidden p-6">
              <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 [background:radial-gradient(520px_circle_at_30%_15%,hsl(var(--glow)/0.16),transparent_60%)]" />
              <div className="relative">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <g.icon className="h-5 w-5 text-fg" />
                      <h3 className="text-base font-extrabold tracking-tight">
                        {g.title}
                      </h3>
                    </div>
                    <p className="mt-2 text-sm text-fg-muted">{g.description}</p>
                  </div>
                  <Badge className="shrink-0">Pro</Badge>
                </div>

                <div className="mt-6 grid gap-3">
                  {g.skills.map((s) => (
                    <div key={s.name} className="rounded-2xl border border-border/60 bg-bg-elevated/25 p-3">
                      <div className="flex items-center justify-between gap-2">
                        <div className="text-sm font-semibold text-fg">
                          {s.name}{" "}
                          {s.highlight ? (
                            <span className="ml-1 font-mono text-[10px] text-fg-muted">
                              highlight
                            </span>
                          ) : null}
                        </div>
                        <div className="font-mono text-xs text-fg-muted">{s.level}%</div>
                      </div>
                      <div className="mt-2 h-2 overflow-hidden rounded-full bg-border/40">
                        <motion.div
                          className="h-full rounded-full bg-[linear-gradient(90deg,hsl(var(--accent)),hsl(205_95%_62%))] shadow-glow"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${s.level}%` }}
                          viewport={{ once: true, amount: 0.4 }}
                          transition={{ duration: 0.9, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

