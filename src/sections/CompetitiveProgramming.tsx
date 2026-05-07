import React from "react";
import { motion, useInView } from "framer-motion";
import { Award, Code, Flame, Trophy } from "lucide-react";

import { competitive } from "@/content/data";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Card } from "@/components/ui/card";

function AnimatedNumber({ value }: { value: number }) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { amount: 0.4, once: true });
  const [n, setN] = React.useState(0);

  React.useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const duration = 900;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(value * eased));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <div ref={ref} className="tabular-nums">
      {n.toLocaleString()}
    </div>
  );
}

export function CompetitiveProgramming() {
  return (
    <section id="cp" className="container-max py-20 sm:py-24">
      <SectionHeader
        kicker="Competitive Programming"
        title="DSA discipline that shows up in production code."
        description="Competitive programming sharpened my speed and correctness. I bring that same discipline to building user-facing systems—clean edge cases, stable performance, and reliable behavior."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        <Reveal as="div">
          <Card className="p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-2xl border border-border/60 bg-bg-elevated/25 shadow-[0_0_0.9rem_hsl(var(--glow)/0.14)]">
                <Flame className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs font-semibold text-fg-muted">Problems solved</div>
                <div className="text-3xl font-extrabold tracking-tight">
                  <AnimatedNumber value={competitive.problemsSolved} />+
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-fg-muted">
              Pattern fluency across arrays, strings, DP, graphs, trees, and greedy—focused on clean
              implementations.
            </p>
          </Card>
        </Reveal>

        <Reveal as="div" delay={0.04}>
          <Card className="p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-2xl border border-border/60 bg-bg-elevated/25 shadow-[0_0_0.9rem_hsl(var(--glow)/0.14)]">
                <Trophy className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs font-semibold text-fg-muted">LeetCode rating</div>
                <div className="text-3xl font-extrabold tracking-tight">
                  <AnimatedNumber value={competitive.leetcodeRating} />
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-fg-muted">
              Strong on timed problem-solving with correctness, edge-case handling, and complexity
              reasoning.
            </p>
          </Card>
        </Reveal>

        <Reveal as="div" delay={0.08}>
          <Card className="p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-2xl border border-border/60 bg-bg-elevated/25 shadow-[0_0_0.9rem_hsl(var(--glow)/0.14)]">
                <Code className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs font-semibold text-fg-muted">Codeforces</div>
                <div className="text-3xl font-extrabold tracking-tight">
                  {competitive.codeforcesTitle}
                </div>
                <div className="mt-1 text-xs font-semibold text-fg-muted">
                  Max {competitive.codeforcesMaxRating}
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-fg-muted">
              Calm under pressure: iterate quickly, validate assumptions, and refine solutions.
            </p>
          </Card>
        </Reveal>
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {competitive.highlights.map((h, idx) => (
          <Reveal key={h} as="div" delay={0.02 * idx}>
            <motion.div
              className="glass noise rounded-2xl p-5"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <div className="flex items-start gap-3">
                <Award className="mt-0.5 h-4 w-4 text-fg" />
                <p className="text-sm font-semibold text-fg-muted">{h}</p>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

