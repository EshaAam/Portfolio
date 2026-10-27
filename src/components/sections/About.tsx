"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Layers, Server, GraduationCap, Sparkles } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { Counter } from "@/components/ui/Counter";
import { fadeUp, revealViewport, stagger } from "@/lib/motion";
import { SKILL_CATEGORIES } from "@/data/skills";

const STATS = [
  { value: 4, suffix: "", label: "Full-stack projects" },
  { value: 2, suffix: "", label: "Research papers" },
  { value: 200, suffix: "+", label: "Problems solved" },
  { value: 1, suffix: "", label: "Industry internship" },
];

const FOCUS = [
  {
    icon: Server,
    title: "Backend & Systems",
    text: "Async pipelines, queues and idempotent jobs. I care about data flow, failure modes and APIs that stay predictable under load.",
    tint: "168 85 247",
  },
  {
    icon: Layers,
    title: "Full-Stack Product",
    text: "From ERD and Figma prototype to a deployed Next.js app, with auth, RBAC and admin tooling handled properly.",
    tint: "99 102 241",
  },
  {
    icon: BrainCircuit,
    title: "AI / LLM Engineering",
    text: "RAG, embeddings and LLM-as-a-Judge, plus the research side: measuring when models hallucinate and why.",
    tint: "45 212 191",
  },
];

const STACK = ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "Redis", "Docker"];
const STACK_SKILLS = SKILL_CATEGORIES.flatMap((c) => c.skills).filter((s) => STACK.includes(s.name));

export function About() {
  return (
    <Section id="about">
      <SectionHeading
        eyebrow="About me"
        title="I design the system before I write the code."
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
        variants={stagger(0.08)}
        className="grid grid-cols-1 gap-4 md:grid-cols-6"
      >
        {/* Intro */}
        <motion.div variants={fadeUp} className="md:col-span-4 md:row-span-2">
          <SpotlightCard className="flex h-full flex-col justify-between gap-8 p-6 sm:p-8">
            <div className="space-y-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent ring-1 ring-accent/20">
                <Sparkles className="h-5 w-5" />
              </div>
              <p className="text-pretty text-xl font-medium leading-snug text-foreground sm:text-2xl">
                I&apos;m Ekramul, a software engineer who likes breaking a problem down, weighing the
                trade-offs, and building something that stays clean as it grows.
              </p>
              <p className="text-pretty leading-relaxed text-foreground-muted">
                I&apos;m a recent Software Engineering graduate of the Islamic University of Technology. My
                work sits at the meeting point of <span className="text-foreground">backend architecture</span>,{" "}
                <span className="text-foreground">product-quality frontends</span> and{" "}
                <span className="text-foreground">applied AI</span>. At DATA Limited I shipped ERP modules
                end to end, and on my own I&apos;ve built an AI interview platform with dual-pass grading and
                hybrid RAG.
              </p>
              <p className="text-pretty leading-relaxed text-foreground-muted">
                I value clarity over cleverness: clear responsibilities, honest failure handling, and code
                that&apos;s easy to reason about, test and extend.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="mr-1 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground-muted">
                Daily stack
              </span>
              {STACK_SKILLS.map(({ name, icon: Icon, color }) => (
                <span key={name} className="chip">
                  {Icon && <Icon className="h-3.5 w-3.5" style={{ color }} />}
                  {name}
                </span>
              ))}
            </div>
          </SpotlightCard>
        </motion.div>

        {/* Stats */}
        <motion.div variants={fadeUp} className="md:col-span-2">
          <SpotlightCard className="grid h-full grid-cols-2 gap-px bg-white/[0.06] p-0">
            {STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col justify-center bg-[#0e0e14] p-5">
                <span className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </span>
                <span className="mt-1 text-xs text-foreground-muted">{stat.label}</span>
              </div>
            ))}
          </SpotlightCard>
        </motion.div>

        {/* Education highlight */}
        <motion.div variants={fadeUp} className="md:col-span-2">
          <SpotlightCard className="flex h-full flex-col justify-between gap-6 p-6" tint="99 102 241">
            <div className="flex items-center justify-between">
              <GraduationCap className="h-5 w-5 text-indigo-300" />
              <span className="chip">Sep 2026</span>
            </div>
            <div>
              <p className="text-lg font-semibold text-foreground">B.Sc. in Software Engineering</p>
              <p className="mt-1 text-sm text-foreground-muted">
                Islamic University of Technology · First Class
              </p>
            </div>
          </SpotlightCard>
        </motion.div>

        {/* Focus areas */}
        {FOCUS.map(({ icon: Icon, title, text, tint }) => (
          <motion.div key={title} variants={fadeUp} className="md:col-span-2">
            <SpotlightCard className="h-full p-6" tint={tint}>
              <div
                className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl ring-1"
                style={{
                  backgroundColor: `rgb(${tint} / 0.1)`,
                  color: `rgb(${tint})`,
                  boxShadow: `inset 0 0 0 1px rgb(${tint} / 0.2)`,
                }}
              >
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{text}</p>
            </SpotlightCard>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
