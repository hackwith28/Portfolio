import { BookOpen, GraduationCap } from "lucide-react";

import { education } from "@/content/data";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export function Education() {
  return (
    <section id="education" className="container-max py-20 sm:py-24">
      <SectionHeader
        kicker="Education"
        title="Strong fundamentals with consistent progress."
        description="Computer Science engineering with a focus on algorithms, systems, and data. I like connecting theory to production-grade implementation."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal as="div">
          <Card className="p-6 sm:p-8">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-2 text-sm font-semibold text-fg-muted">
                  <GraduationCap className="h-4 w-4" />
                  {education.period}
                </div>
                <h3 className="mt-2 text-xl font-extrabold tracking-tight sm:text-2xl">
                  {education.degree}
                </h3>
                <p className="mt-1 text-sm font-semibold text-fg-muted">
                  {education.school} • {education.location}
                </p>
              </div>
              <Badge variant="glow" className="shrink-0">
                CGPA {education.cgpa}
              </Badge>
            </div>

            <div className="mt-6 rounded-2xl border border-border/60 bg-bg-elevated/25 p-5">
              <div className="flex items-center gap-2 text-sm font-extrabold tracking-tight">
                <BookOpen className="h-4 w-4" />
                Relevant coursework
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {education.coursework.map((c) => (
                  <Badge key={c}>{c}</Badge>
                ))}
              </div>
            </div>
          </Card>
        </Reveal>

        <Reveal as="div" delay={0.05}>
          <Card className="p-6 sm:p-8">
            <p className="font-mono text-xs text-fg-muted">Focus areas</p>
            <h3 className="mt-2 text-xl font-extrabold tracking-tight">
              Systems + problem solving.
            </h3>
            <p className="mt-3 text-sm text-fg-muted">
              I’m particularly interested in building scalable backend flows, performant UI systems,
              and robust realtime experiences—grounded in strong CS fundamentals.
            </p>
            <div className="mt-6 grid gap-3">
              {[
                { k: "DSA", v: "Patterns, complexity, correctness" },
                { k: "DBMS", v: "Modeling, SQL, constraints" },
                { k: "Systems", v: "OS & networks mental models" }
              ].map((x) => (
                <div key={x.k} className="rounded-2xl border border-border/60 bg-bg-elevated/25 p-4">
                  <div className="text-sm font-extrabold tracking-tight">{x.k}</div>
                  <div className="mt-1 text-sm text-fg-muted">{x.v}</div>
                </div>
              ))}
            </div>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}

