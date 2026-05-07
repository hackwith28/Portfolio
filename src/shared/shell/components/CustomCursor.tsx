import React from "react";
import { motion } from "framer-motion";

import { clamp, prefersReducedMotion } from "@/lib/utils";

function supportsFinePointer() {
  if (typeof window === "undefined") return false;
  return window.matchMedia?.("(pointer:fine)").matches ?? false;
}

export function CustomCursor() {
  const reduced = prefersReducedMotion();
  const [enabled, setEnabled] = React.useState(false);
  const [pos, setPos] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    if (reduced) return;
    if (!supportsFinePointer()) return;
    setEnabled(true);
  }, [reduced]);

  React.useEffect(() => {
    if (!enabled) return;
    const onMove = (e: MouseEvent) => {
      setPos({
        x: clamp(e.clientX, 0, window.innerWidth),
        y: clamp(e.clientY, 0, window.innerHeight)
      });
      document.documentElement.style.setProperty("--mx", `${e.clientX}px`);
      document.documentElement.style.setProperty("--my", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[70] h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-border/60 bg-bg-elevated/20 backdrop-blur-xl"
        animate={{ x: pos.x, y: pos.y }}
        transition={{ type: "spring", stiffness: 420, damping: 36, mass: 0.35 }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[69] h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,hsl(var(--glow)/0.18),transparent_60%)]"
        animate={{ x: pos.x, y: pos.y }}
        transition={{ type: "spring", stiffness: 160, damping: 34, mass: 0.8 }}
      />
    </>
  );
}

