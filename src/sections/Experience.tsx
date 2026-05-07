import { motion } from "framer-motion";
import { CalendarDays, ExternalLink, MapPin } from "lucide-react";

import { experience } from "@/content/data";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function Experience() {
  return (
    <section id="experience" className="container-max py-20 sm:py-24">
      <SectionHeader
        kicker="Experience"
        title="Impact, metrics, and lessons shipped."
        description="I value measurable outcomes—latency reductions, reliability, and clarity. Here’s where I built real systems and sharpened my foundations."
      />

      <div className="mt-12 grid gap-6">
        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-px bg-border/70 sm:left-6" aria-hidden="true" />

          <div className="grid gap-6">
            {experience.map((e, idx) => (
              <Reveal key={e.title} as="div" delay={0.03 * idx}>
                <div className="relative pl-12 sm:pl-16">
                  <motion.div
                    aria-hidden="true"
                    className="absolute left-[10px] top-7 h-3 w-3 rounded-full bg-[linear-gradient(135deg,hsl(var(--accent)),hsl(205_95%_62%))] shadow-glow sm:left-[18px]"
                    initial={{ scale: 0.7, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                  />
                  <Card className="p-6 sm:p-8">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="text-xl font-extrabold tracking-tight">
                          {e.title}
                        </h3>
                        <p className="mt-1 text-sm font-semibold text-fg-muted">
                          {e.org}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2 sm:justify-end">
                        {e.tags.map((t) => (
                          <Badge key={t}>{t}</Badge>
                        ))}
                      </div>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-3 text-xs font-semibold text-fg-muted">
                      <span className="inline-flex items-center gap-2">
                        <CalendarDays className="h-4 w-4" /> {e.period}
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <MapPin className="h-4 w-4" /> {e.location}
                      </span>
                      {e.certificateUrl ? (
                        <Button asChild variant="ghost" size="sm" className="h-7 px-2">
                          <a href={e.certificateUrl} target="_blank" rel="noreferrer">
                            Certificate <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      ) : null}
                    </div>

                    <ul className="mt-5 grid gap-2 text-sm text-fg-muted">
                      {e.bullets.map((b) => (
                        <li key={b} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--accent))]" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

