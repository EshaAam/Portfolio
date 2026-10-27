"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Github } from "lucide-react";
import { cn } from "@/lib/utils";
import { fadeUp, revealViewport, stagger } from "@/lib/motion";
import { buttonClasses } from "@/components/ui/Button";
import type { Project } from "@/types";
import { ProjectMedia } from "./ProjectMedia";
import { LiveBadge } from "./LiveBadge";

interface ProjectDetailsProps {
  project: Project;
  index: number;
  isActive: boolean;
}

/** One project's write-up. On small screens it carries its own screenshot. */
export const ProjectDetails = forwardRef<HTMLElement, ProjectDetailsProps>(function ProjectDetails(
  { project, index, isActive },
  ref
) {
  return (
    <article
      ref={ref}
      data-index={index}
      className={cn(
        "flex flex-col justify-center py-10 transition-opacity duration-500 first:pt-0 last:pb-0",
        "lg:min-h-screen lg:py-24 lg:first:pt-24 lg:last:pb-24",
        isActive ? "lg:opacity-100" : "lg:opacity-40"
      )}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
        variants={stagger(0.07)}
      >
        {/* Mobile / tablet screenshot */}
        <motion.div variants={fadeUp} className="relative mb-8 lg:hidden">
          <div
            aria-hidden
            className="absolute inset-[10%] -z-10 rounded-full blur-[70px]"
            style={{ backgroundColor: `rgb(${project.accent} / 0.25)` }}
          />
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-[#0c0c12]">
            <ProjectMedia project={project} priority={index === 0} sizes="(min-width: 768px) 720px, 100vw" />
            {project.liveUrl && <LiveBadge href={project.liveUrl} className="absolute bottom-3 right-3" />}
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="flex items-center gap-3">
          <span className="font-mono text-sm" style={{ color: `rgb(${project.accent})` }}>
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="h-px w-10 bg-white/15" />
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground-muted">
            {project.tagline}
          </span>
        </motion.div>

        <motion.h3
          variants={fadeUp}
          className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
        >
          {project.title}
        </motion.h3>

        <motion.p variants={fadeUp} className="mt-4 text-pretty leading-relaxed text-foreground-muted sm:text-lg">
          {project.description}
        </motion.p>

        <motion.ul variants={stagger(0.06)} className="mt-6 space-y-3">
          {project.features.map((feature) => (
            <motion.li key={feature} variants={fadeUp} className="flex gap-3 text-sm leading-relaxed text-foreground-muted">
              <span
                className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                style={{ backgroundColor: `rgb(${project.accent} / 0.12)`, color: `rgb(${project.accent})` }}
              >
                <Check className="h-3 w-3" />
              </span>
              {feature}
            </motion.li>
          ))}
        </motion.ul>

        <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span key={tech} className="chip">
              {tech}
            </span>
          ))}
        </motion.div>

        <motion.dl
          variants={fadeUp}
          className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/[0.07] bg-white/[0.07] sm:grid-cols-4"
        >
          {project.highlights.map((h) => (
            <div key={h.label} className="bg-[#0b0b10] px-4 py-3">
              <dt className="text-[10px] uppercase tracking-[0.18em] text-foreground-muted">{h.label}</dt>
              <dd className="mt-1 truncate text-sm font-semibold text-foreground">{h.value}</dd>
            </div>
          ))}
        </motion.dl>

        <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={buttonClasses("primary")}>
              Live demo
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-px group-hover:translate-x-px" />
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={buttonClasses("secondary")}>
              <Github className="h-4 w-4" />
              Source code
            </a>
          )}
        </motion.div>
      </motion.div>
    </article>
  );
});
