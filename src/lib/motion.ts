import type { Transition, Variants } from "framer-motion";

/** Signature easing curve used across the site (expo-out) */
export const EASE_OUT = [0.22, 1, 0.36, 1] as const;

export const transitions = {
  smooth: { duration: 0.7, ease: EASE_OUT } satisfies Transition,
  fast: { duration: 0.35, ease: EASE_OUT } satisfies Transition,
  spring: { type: "spring", stiffness: 260, damping: 30 } satisfies Transition,
};

/**
 * Shared viewport config for scroll reveals.
 * A small `amount` keeps very tall elements from never triggering.
 */
export const revealViewport = { once: true, amount: 0.15 } as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: transitions.smooth },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: transitions.smooth },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: transitions.smooth },
};

export const stagger = (staggerChildren = 0.08, delayChildren = 0): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren, delayChildren } },
});

/** Word-by-word reveal for large headings */
export const wordReveal: Variants = {
  hidden: { opacity: 0, y: "0.6em", filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: EASE_OUT },
  },
};
