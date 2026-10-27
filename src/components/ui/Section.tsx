"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { fadeUp, revealViewport, stagger } from "@/lib/motion";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}

/**
 * Page section with consistent spacing and container width.
 * Animation is left to children so tall sections always render.
 */
export function Section({ id, children, className, containerClassName }: SectionProps) {
  return (
    <section id={id} className={cn("relative w-full py-24 sm:py-28 lg:py-32", className)}>
      <div className={cn("mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8", containerClassName)}>
        {children}
      </div>
    </section>
  );
}

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
      variants={stagger(0.1)}
      className={cn(
        "mb-14 flex flex-col gap-4 sm:mb-16",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      <motion.span variants={fadeUp} className="eyebrow">
        {eyebrow}
      </motion.span>
      <motion.h2
        variants={fadeUp}
        className="gradient-text text-balance pb-1 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          variants={fadeUp}
          className="max-w-2xl text-pretty text-base leading-relaxed text-foreground-muted sm:text-lg"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
