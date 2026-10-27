"use client";

import { motion, type HTMLMotionProps, type Variants } from "framer-motion";
import { fadeUp, revealViewport } from "@/lib/motion";

interface RevealProps extends HTMLMotionProps<"div"> {
  variants?: Variants;
  delay?: number;
}

/**
 * Animates its children into view once, when scrolled into the viewport.
 * Each Reveal owns its own trigger, so a tall parent never hides content.
 */
export function Reveal({ variants = fadeUp, delay = 0, children, ...props }: RevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
      variants={variants}
      transition={delay ? { delay } : undefined}
      {...props}
    >
      {children}
    </motion.div>
  );
}
