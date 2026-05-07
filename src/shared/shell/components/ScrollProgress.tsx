import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 240, damping: 40, mass: 0.6 });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed left-0 top-0 z-[60] h-[3px] w-full origin-left bg-[linear-gradient(90deg,hsl(var(--accent)),hsl(205_95%_62%))] shadow-glow"
      style={{ scaleX }}
    />
  );
}

