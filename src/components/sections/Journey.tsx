"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";
import { Briefcase, Calendar, CheckCircle2, GraduationCap, MapPin } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { EASE_OUT, revealViewport } from "@/lib/motion";
import { EDUCATION, EXPERIENCE } from "@/data/journey";
import type { TimelineItem } from "@/types";

// Most recent first: degree completed Sep 2026, internship Feb 2026, HSC 2021
const TIMELINE: TimelineItem[] = [EDUCATION[0], ...EXPERIENCE, ...EDUCATION.slice(1)];

export function Journey() {
  const listRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 75%", "end 60%"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <Section id="journey">
      <SectionHeading
        eyebrow="My journey"
        title="Education & experience"
        description="Four years of software engineering at IUT, completed in September 2026, alongside industry work and research."
      />

      <ol ref={listRef} className="relative mx-auto max-w-3xl">
        {/* Track + animated progress line */}
        <span aria-hidden className="absolute bottom-2 left-[19px] top-2 w-px bg-white/[0.08] sm:left-[23px]" />
        <motion.span
          aria-hidden
          style={{ scaleY: progress }}
          className="absolute bottom-2 left-[19px] top-2 w-px origin-top bg-gradient-to-b from-accent via-indigo-400 to-accent/0 sm:left-[23px]"
        />

        {TIMELINE.map((item, i) => (
          <TimelineEntry key={item.id} item={item} index={i} />
        ))}
      </ol>
    </Section>
  );
}

function TimelineEntry({ item, index }: { item: TimelineItem; index: number }) {
  const isEducation = item.kind === "education";
  const KindIcon = isEducation ? GraduationCap : Briefcase;
  const tint = isEducation ? "99 102 241" : "168 85 247";

  return (
    <motion.li
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={revealViewport}
      transition={{ duration: 0.7, ease: EASE_OUT, delay: index * 0.05 }}
      className="relative pb-10 pl-14 last:pb-0 sm:pl-20"
    >
      {/* Node */}
      <div className="absolute left-0 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#0e0e14] sm:h-12 sm:w-12">
        <KindIcon className="h-4 w-4 sm:h-5 sm:w-5" style={{ color: `rgb(${tint})` }} />
      </div>

      <SpotlightCard tint={tint} className="p-5 sm:p-7">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
          {item.logo && (
            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl bg-white ring-1 ring-white/10">
              <Image src={item.logo} alt={`${item.organization} logo`} fill sizes="48px" className="object-contain p-1.5" />
            </div>
          )}

          <div className="min-w-0 flex-1">
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <span className="font-mono text-[11px] uppercase tracking-[0.18em]" style={{ color: `rgb(${tint})` }}>
                {isEducation ? "Education" : "Experience"}
              </span>
              {item.status && (
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-400/10 px-2 py-0.5 text-[11px] font-medium text-emerald-300 ring-1 ring-emerald-400/20">
                  <CheckCircle2 className="h-3 w-3" />
                  {item.status}
                </span>
              )}
            </div>

            <h3 className="text-lg font-semibold leading-snug text-foreground sm:text-xl">{item.title}</h3>
            <p className="mt-1 text-sm text-foreground-muted sm:text-base">{item.organization}</p>

            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5 text-sm text-foreground-muted/80">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" />
                {item.period}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" />
                {item.location}
              </span>
            </div>

            {item.points && (
              <ul className="mt-5 space-y-2.5">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-relaxed text-foreground-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full" style={{ backgroundColor: `rgb(${tint})` }} />
                    {point}
                  </li>
                ))}
              </ul>
            )}

            {item.tags && (
              <div className="mt-5 flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span key={tag} className="chip">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </SpotlightCard>
    </motion.li>
  );
}
