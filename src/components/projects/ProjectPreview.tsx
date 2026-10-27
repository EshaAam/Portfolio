"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { EASE_OUT } from "@/lib/motion";
import type { Project } from "@/types";
import { ProjectMedia } from "./ProjectMedia";
import { LiveBadge } from "./LiveBadge";

interface ProjectPreviewProps {
  projects: Project[];
  activeIndex: number;
  onSelect: (index: number) => void;
}

/**
 * Sticky browser-frame preview for the desktop showcase.
 * All screenshots stay mounted and cross-fade, so switching projects
 * never shows an empty frame or waits on a fresh image download.
 */
export function ProjectPreview({ projects, activeIndex, onSelect }: ProjectPreviewProps) {
  const active = projects[activeIndex];

  return (
    <div className="sticky top-0 flex h-screen flex-col justify-center py-24">
      <div className="relative">
        {/* Accent glow that follows the active project */}
        <motion.div
          aria-hidden
          animate={{ backgroundColor: `rgb(${active.accent} / 0.22)` }}
          transition={{ duration: 0.8 }}
          className="absolute inset-[8%] -z-10 rounded-full blur-[90px]"
        />

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0c0c12] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)]">
          {/* Browser chrome */}
          <div className="flex items-center gap-3 border-b border-white/[0.06] px-4 py-3">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            </div>
            <div className="min-w-0 flex-1 truncate rounded-md bg-white/[0.04] px-3 py-1 text-center font-mono text-[11px] text-foreground-muted">
              {(active.liveUrl ?? active.githubUrl ?? "").replace(/^https?:\/\//, "").replace(/\/$/, "")}
            </div>
          </div>

          {/* Screens */}
          <div className="relative aspect-[16/10]">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={false}
                animate={{
                  opacity: i === activeIndex ? 1 : 0,
                  scale: i === activeIndex ? 1 : 1.04,
                }}
                transition={{ duration: 0.7, ease: EASE_OUT }}
                className="absolute inset-0"
                aria-hidden={i !== activeIndex}
              >
                <ProjectMedia
                  project={project}
                  priority={i === 0}
                  sizes="(min-width: 1280px) 600px, 50vw"
                />
              </motion.div>
            ))}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/70 to-transparent" />
            {active.liveUrl && <LiveBadge href={active.liveUrl} className="absolute bottom-4 right-4" />}
          </div>
        </div>
      </div>

      {/* Progress / selector */}
      <div className="mt-8 flex items-center gap-4">
        <span className="font-mono text-sm tabular-nums text-foreground">
          {String(activeIndex + 1).padStart(2, "0")}
          <span className="text-foreground-muted"> / {String(projects.length).padStart(2, "0")}</span>
        </span>
        <div className="flex flex-1 gap-2">
          {projects.map((project, i) => (
            <button
              key={project.id}
              onClick={() => onSelect(i)}
              aria-label={`Show ${project.title}`}
              className="group h-6 flex-1"
            >
              <span
                className={cn(
                  "block h-0.5 w-full rounded-full transition-colors duration-500",
                  i === activeIndex ? "bg-foreground" : "bg-white/15 group-hover:bg-white/30"
                )}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
