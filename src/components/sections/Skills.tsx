"use client";

import { motion } from "framer-motion";
import { Section, SectionHeading } from "@/components/ui/Section";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { Reveal } from "@/components/ui/Reveal";
import { fadeUp, revealViewport, stagger } from "@/lib/motion";
import { MARQUEE_SKILLS, SKILL_CATEGORIES } from "@/data/skills";

function Marquee() {
  // Rendered twice so the -50% translate loops seamlessly
  const items = [...MARQUEE_SKILLS, ...MARQUEE_SKILLS];
  return (
    <div className="marquee-mask relative mb-14 overflow-hidden py-2">
      <div className="animate-marquee flex w-max gap-3">
        {items.map(({ name, icon: Icon, color }, i) => (
          <div
            key={`${name}-${i}`}
            aria-hidden={i >= MARQUEE_SKILLS.length}
            className="flex items-center gap-2.5 rounded-full border border-white/[0.07] bg-white/[0.02] px-4 py-2.5"
          >
            {Icon && <Icon className="h-4 w-4" style={{ color }} />}
            <span className="whitespace-nowrap text-sm text-foreground-muted">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        eyebrow="My skillset"
        title="The tools behind the work"
        description="Languages, frameworks and practices I use to take an idea from schema design to a monitored deployment."
      />

      <Reveal>
        <Marquee />
      </Reveal>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
        variants={stagger(0.08)}
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {SKILL_CATEGORIES.map((category, i) => (
          <motion.div key={category.id} variants={fadeUp}>
            <SpotlightCard className="h-full p-6">
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-base font-semibold text-foreground">{category.title}</h3>
                  <p className="mt-1 text-sm text-foreground-muted">{category.description}</p>
                </div>
                <span className="font-mono text-xs text-foreground-muted/60">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <ul className="flex flex-wrap gap-2">
                {category.skills.map(({ name, icon: Icon, color }) => (
                  <li
                    key={name}
                    className="group/skill flex items-center gap-2 rounded-lg border border-white/[0.06] bg-white/[0.02] px-2.5 py-1.5 text-sm text-foreground-muted transition-colors duration-200 hover:border-white/15 hover:text-foreground"
                  >
                    {Icon && (
                      <Icon
                        className="h-4 w-4 shrink-0 opacity-80 transition-opacity duration-200 group-hover/skill:opacity-100"
                        style={{ color }}
                      />
                    )}
                    {name}
                  </li>
                ))}
              </ul>
            </SpotlightCard>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
