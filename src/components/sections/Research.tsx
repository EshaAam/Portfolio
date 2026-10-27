"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Award, BookOpen } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { fadeUp, revealViewport, stagger } from "@/lib/motion";
import { PUBLICATIONS, SELF_AUTHOR } from "@/data/research";
import type { Publication } from "@/types";

const TINTS = ["168 85 247", "45 212 191"];

export function Research() {
  return (
    <Section id="research">
      <SectionHeading
        eyebrow="Research"
        title="Publications"
        description="Peer-reviewed work on evaluating large language models: where they hallucinate, how to measure it, and how well they answer real medical questions."
      />

      <div className="space-y-6">
        {PUBLICATIONS.map((paper, i) => (
          <PaperCard key={paper.id} paper={paper} tint={TINTS[i % TINTS.length]} />
        ))}
      </div>

      <p className="mt-6 text-center text-xs text-foreground-muted/70">* Equal contribution</p>
    </Section>
  );
}

function PaperCard({ paper, tint }: { paper: Publication; tint: string }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
      variants={stagger(0.06)}
    >
      <SpotlightCard tint={tint} className="p-6 sm:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-12">
          <div className="min-w-0">
            {/* Venue */}
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-2">
              <span
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold"
                style={{ backgroundColor: `rgb(${tint} / 0.12)`, color: `rgb(${tint})`, boxShadow: `inset 0 0 0 1px rgb(${tint} / 0.25)` }}
              >
                <Award className="h-3.5 w-3.5" />
                {paper.venue}
              </span>
              <span className="chip">{paper.venueDetail}</span>
              <span className="chip">{paper.role}</span>
            </motion.div>

            <motion.h3
              variants={fadeUp}
              className="mt-5 text-pretty text-xl font-semibold leading-snug tracking-tight text-foreground sm:text-2xl"
            >
              {paper.title}
            </motion.h3>

            <motion.p variants={fadeUp} className="mt-3 text-sm leading-relaxed text-foreground-muted">
              {paper.authors.map((author, i) => (
                <span key={author}>
                  <span className={author.replace("*", "") === SELF_AUTHOR ? "font-medium text-foreground underline decoration-accent/50 underline-offset-4" : ""}>
                    {author}
                  </span>
                  {i < paper.authors.length - 1 && ", "}
                </span>
              ))}
            </motion.p>

            <motion.p variants={fadeUp} className="mt-5 text-pretty leading-relaxed text-foreground-muted">
              {paper.summary}
            </motion.p>

            <motion.ul variants={stagger(0.05)} className="mt-5 space-y-2.5">
              {paper.contributions.map((c) => (
                <motion.li key={c} variants={fadeUp} className="flex gap-3 text-sm leading-relaxed text-foreground-muted">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full" style={{ backgroundColor: `rgb(${tint})` }} />
                  {c}
                </motion.li>
              ))}
            </motion.ul>

            <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-1.5">
              {paper.tags.map((tag) => (
                <span key={tag} className="chip">
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Side panel: stats + links */}
          <motion.div variants={fadeUp} className="flex flex-col gap-4">
            <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/[0.07] bg-white/[0.07]">
              {paper.stats.map((s) => (
                <div key={s.label} className="bg-[#0b0b10] p-4">
                  <dd className="text-2xl font-semibold tracking-tight text-foreground">{s.value}</dd>
                  <dt className="mt-1 text-[11px] leading-tight text-foreground-muted">{s.label}</dt>
                </div>
              ))}
            </dl>

            <div className="flex flex-col gap-2">
              {paper.links.map((link, i) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    i === 0
                      ? "btn-cosmic group flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-white"
                      : "group flex items-center justify-between rounded-xl border border-white/[0.08] px-4 py-3 text-sm text-foreground-muted transition-colors duration-200 hover:border-white/20 hover:text-foreground"
                  }
                >
                  <span className="inline-flex items-center gap-2">
                    {i === 0 && <BookOpen className="h-4 w-4" />}
                    {i === 0 ? `Read on ${link.label}` : link.label}
                  </span>
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-px group-hover:translate-x-px" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </SpotlightCard>
    </motion.div>
  );
}
