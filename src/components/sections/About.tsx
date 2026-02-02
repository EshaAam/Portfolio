"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { SectionWrapper, SectionHeader } from "@/components/ui/SectionWrapper";
import { fadeInUp, staggerContainer, listItemVariants } from "@/lib/motion";
import { ABOUT_POINTS, PERSONAL_INFO } from "@/lib/constants";

/**
 * About section - Brief, engineering-focused introduction
 * Uses bullet points for quick scanning
 */
export function About() {
  return (
    <SectionWrapper id="about" className="flex items-center">
      <div className="max-w-4xl mx-auto w-full py-20">
        <SectionHeader
          title="About Me"
          subtitle="A full stack developer with a systems-first mindset"
        />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left column - Brief intro */}
          <motion.div variants={fadeInUp}>
            <div className="prose prose-invert max-w-none">
              <p className="text-foreground-muted leading-relaxed text-lg">
                I&apos;m <span className="text-accent font-medium">{PERSONAL_INFO.name}</span>,
                a Software Engineering undergraduate who enjoys thinking about how systems should work before writing code. I&apos;m most comfortable when I can break a problem down, understand the trade-offs, and design something that stays clean as it grows.
              </p>
              <p className="text-foreground-muted leading-relaxed mt-4">
                My work spans <span className="text-foreground">backend architecture</span>,
                <span className="text-foreground"> frontend development</span>, and
                <span className="text-foreground"> database design</span>, with a strong focus on writing maintainable, secure APIs. I care about structure, clear responsibilities, and choosing simple solutions that don&apos;t fall apart later.
              </p>
              {/* <p className="text-foreground-muted leading-relaxed mt-4">
                I primarily work with <span className="text-foreground">Next.js</span>,
                <span className="text-foreground"> Laravel</span>, and
                <span className="text-foreground"> Node.js</span>, and I&apos;ve built real projects using MongoDB and MySQL, where I&apos;ve had hands-on experience with schema design, query optimization, and authentication flows. I value clarity over cleverness and prefer code that&apos;s easy to reason about, test, and extend.
              </p> */}
              <p className="text-foreground-muted leading-relaxed mt-4 italic text-sm">
                I&apos;m still learning — but I learn by building, breaking things, and refining them until they make sense.
              </p>
            </div>
          </motion.div>

          {/* Right column - Bullet points */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {ABOUT_POINTS.map((point, index) => {
              // Convert icon name from kebab-case to PascalCase (e.g., "git-branch" -> "GitBranch")
              const iconName = point.icon
                .split("-")
                .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                .join("");
              const IconComponent = (Icons[iconName as keyof typeof Icons] as React.ComponentType<{ className?: string }>) || Icons.Circle;

              return (
                <motion.div
                  key={index}
                  variants={listItemVariants}
                  className="flex items-start gap-4 p-4 rounded-lg bg-surface/50 border border-white/5 hover:border-accent/20 transition-colors"
                >
                  <div className="p-2 rounded-lg bg-accent/10 text-accent shrink-0">
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <p className="text-foreground-muted text-sm leading-relaxed">
                    {point.text}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
