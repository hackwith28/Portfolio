import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin } from "lucide-react";
import { SiLeetcode, SiMongodb, SiNodedotjs, SiPostgresql, SiReact, SiTailwindcss } from "react-icons/si";

import { profile } from "@/content/profile";
import { ParticleField } from "@/components/fx/ParticleField";
import { Reveal } from "@/components/motion/Reveal";
import { Typewriter } from "@/components/text/Typewriter";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const floats = [
  { Icon: SiReact, label: "React", x: "8%", y: "22%", d: 0.0 },
  { Icon: SiNodedotjs, label: "Node.js", x: "88%", y: "28%", d: 0.1 },
  { Icon: SiPostgresql, label: "PostgreSQL", x: "72%", y: "78%", d: 0.18 },
  { Icon: SiMongodb, label: "MongoDB", x: "20%", y: "74%", d: 0.26 },
  { Icon: SiTailwindcss, label: "Tailwind", x: "54%", y: "16%", d: 0.32 }
] as const;

export function Hero() {
  return (
    <header className="relative overflow-hidden pt-20 sm:pt-24">
      <div className="pointer-events-none absolute inset-0 bg-grid-fade [background-size:1px_1px,36px_36px,36px_36px]" />
      <ParticleField className="pointer-events-none absolute inset-0 opacity-70" />

      {floats.map(({ Icon, label, x, y, d }) => (
        <motion.div
          key={label}
          className={cn(
            "pointer-events-none absolute hidden rounded-2xl border border-border/60 bg-bg-elevated/30 p-3 backdrop-blur-xl lg:block",
            "shadow-[0_0_0.5rem_hsl(var(--glow)/0.18)]"
          )}
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.25 + d, ease: "easeOut" }}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut", delay: d }}
            className="flex items-center gap-2 text-fg-muted"
          >
            <Icon className="h-5 w-5 text-fg" />
            <span className="text-xs font-semibold tracking-wide">{label}</span>
          </motion.div>
        </motion.div>
      ))}

      <div className="container-max relative">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="py-10 sm:py-14">
            <Reveal as="div">
              <p className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-bg-elevated/30 px-3 py-1.5 text-xs font-semibold text-fg-muted backdrop-blur-xl">
                <span className="h-2 w-2 rounded-full bg-[hsl(var(--accent))] shadow-glow" />
                Mohali, Punjab • Open to high-impact engineering roles
              </p>
            </Reveal>

            <Reveal as="div" delay={0.04} className="mt-5">
              <h1 className="text-balance text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                Hi, I’m{" "}
                <span className="bg-[linear-gradient(135deg,hsl(var(--accent)),hsl(205_95%_62%))] bg-clip-text text-transparent">
                  Reetesh
                </span>
                .
              </h1>
            </Reveal>

            <Reveal as="div" delay={0.07} className="mt-4">
              <div className="text-lg font-semibold text-fg-muted sm:text-xl">
                I build{" "}
                <Typewriter
                  phrases={[
                    "scalable full‑stack products",
                    "realtime collaborative apps",
                    "low‑latency systems",
                    "DSA-powered solutions"
                  ]}
                  className="text-fg"
                />
              </div>
            </Reveal>

            <Reveal as="div" delay={0.1} className="mt-5">
              <p className="max-w-prose text-pretty text-fg-muted">
                Full Stack Developer with a competitive programming mindset. I love turning complex
                problems into clean, high-performance experiences—pairing solid DSA fundamentals
                with modern UI engineering (React, Node.js, PostgreSQL/MongoDB).
              </p>
            </Reveal>

            <Reveal as="div" delay={0.13} className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <a href="#projects">
                  Explore projects <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <a href="#contact">Let’s build something</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={profile.resumeUrl} download>
                  Resume <Download className="h-4 w-4" />
                </a>
              </Button>
            </Reveal>

            <Reveal as="div" delay={0.16} className="mt-8 flex flex-wrap items-center gap-3">
              <a
                className="focus-ring inline-flex items-center gap-2 rounded-xl border border-border/60 bg-bg-elevated/20 px-3 py-2 text-sm font-semibold text-fg-muted backdrop-blur-xl hover:text-fg"
                href={profile.links.github}
                target="_blank"
                rel="noreferrer"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a
                className="focus-ring inline-flex items-center gap-2 rounded-xl border border-border/60 bg-bg-elevated/20 px-3 py-2 text-sm font-semibold text-fg-muted backdrop-blur-xl hover:text-fg"
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                className="focus-ring inline-flex items-center gap-2 rounded-xl border border-border/60 bg-bg-elevated/20 px-3 py-2 text-sm font-semibold text-fg-muted backdrop-blur-xl hover:text-fg"
                href={profile.links.leetcode}
                target="_blank"
                rel="noreferrer"
              >
                <SiLeetcode className="h-4 w-4" />
                LeetCode
              </a>
            </Reveal>
          </div>

          <div className="pb-12 lg:pb-0">
            <Reveal as="div" delay={0.08}>
              <div className="glass noise relative overflow-hidden rounded-3xl p-6 sm:p-7">
                <div className="absolute inset-0 opacity-70 [background:radial-gradient(520px_circle_at_25%_20%,hsl(var(--glow)/0.18),transparent_55%),radial-gradient(520px_circle_at_85%_20%,hsl(205_95%_62%/0.14),transparent_55%)]" />

                <div className="relative">
                  <p className="font-mono text-xs text-fg-muted">Now shipping</p>
                  <h2 className="mt-2 text-xl font-bold tracking-tight sm:text-2xl">
                    Performance-first engineering.
                  </h2>
                  <p className="mt-3 text-sm text-fg-muted">
                    From trie-based autocomplete to realtime multiplayer sync—my work stays focused
                    on latency, reliability, and delightful UX.
                  </p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    {[
                      { k: "900+", v: "DSA problems solved" },
                      { k: "150+", v: "Technical articles shipped" },
                      { k: "100+", v: "Realtime players supported" }
                    ].map((s) => (
                      <div
                        key={s.v}
                        className="rounded-2xl border border-border/60 bg-bg-elevated/25 p-4 backdrop-blur-xl"
                      >
                        <div className="text-2xl font-extrabold tracking-tight">{s.k}</div>
                        <div className="mt-1 text-xs font-semibold text-fg-muted">{s.v}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-2xl border border-border/60 bg-bg-elevated/25 p-4">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-sm font-semibold text-fg-muted">Primary stack</span>
                      <span className="font-mono text-xs text-fg-muted">React • Node • SQL</span>
                    </div>
                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-border/40">
                      <motion.div
                        className="h-full w-[72%] rounded-full bg-[linear-gradient(90deg,hsl(var(--accent)),hsl(205_95%_62%))] shadow-glow"
                        initial={{ x: "-40%" }}
                        animate={{ x: "0%" }}
                        transition={{ duration: 1.2, ease: "easeOut", delay: 0.35 }}
                      />
                    </div>
                    <div className="mt-3 grid grid-cols-3 gap-2 text-xs text-fg-muted">
                      <span>UI systems</span>
                      <span className="text-center">APIs</span>
                      <span className="text-right">Optimization</span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <div className="h-12 sm:h-16" />
    </header>
  );
}

