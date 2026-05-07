import { motion, type MotionProps } from "framer-motion";
import React from "react";

import { prefersReducedMotion } from "@/lib/utils";

type Props = MotionProps & {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "header" | "main";
  delay?: number;
};

export function Reveal({
  children,
  className,
  as = "div",
  delay = 0,
  ...rest
}: Props) {
  const reduced = prefersReducedMotion();
  const Comp = motion[as];

  return (
    <Comp
      className={className}
      initial={reduced ? false : { opacity: 0, y: 18, filter: "blur(8px)" }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        type: "spring",
        stiffness: 160,
        damping: 22,
        mass: 0.7,
        delay
      }}
      {...rest}
    >
      {children}
    </Comp>
  );
}

