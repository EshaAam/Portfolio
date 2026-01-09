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
                a Computer Science student with a strong interest in designing and building scalable software systems.
              </p>
              <p className="text-foreground-muted leading-relaxed mt-4">
                My work focuses on <span className="text-foreground">backend architecture</span>,
                <span className="text-foreground"> frontend</span>,
                <span className="text-foreground"> design</span>,
                <span className="text-foreground"> database design</span>, and developing secure, maintainable APIs. I value understanding system requirements and trade-offs before implementation, aiming to build solutions that are both robust and cleanly structured.
              </p>
              <p className="text-foreground-muted leading-relaxed mt-4">
                I primarily work with <span className="text-foreground">Next.js</span>,
                <span className="text-foreground"> Laravel</span>, and
                <span className="text-foreground"> Node.js</span>, and have hands-on experience with databases such as MongoDB and MySQL.
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
              const IconComponent = (Icons as Record<string, React.ComponentType<{ className?: string }>>)[
                point.icon.split("-").map((w, i) => 
                  i === 0 ? w.charAt(0).toUpperCase() + w.slice(1) : w.charAt(0).toUpperCase() + w.slice(1)
                ).join("")
              ] || Icons.Circle;

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
