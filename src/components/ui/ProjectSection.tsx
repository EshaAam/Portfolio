"use client";

import { forwardRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Github, ChevronRight } from "lucide-react";
import { Project } from "@/types";
import { staggerContainerFast, fadeInUp, listItemVariants } from "@/lib/motion";

interface ProjectSectionProps {
  project: Project;
  isActive: boolean;
  index: number;
}

/**
 * Individual project section in the scrollable right panel
 * Uses forwardRef for IntersectionObserver tracking
 */
export const ProjectSection = forwardRef<HTMLDivElement, ProjectSectionProps>(
  function ProjectSection({ project, isActive, index }, ref) {
    return (
      <div
        ref={ref}
        data-project-index={index}
        className="min-h-[80vh] py-16 lg:py-24 flex flex-col justify-center"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainerFast}
          className="space-y-6"
        >
          {/* Mobile Preview - Show on small screens */}
          <motion.div 
            variants={fadeInUp}
            className="lg:hidden mb-8"
          >
            <div className="relative aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-accent/20 via-indigo-500/20 to-purple-600/20 border border-white/10">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2 opacity-60">🚀</div>
                    <p className="text-sm text-muted">{project.subtitle}</p>
                  </div>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              
              {/* Mobile Live Button */}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-3 right-3 group/live inline-flex items-center gap-2 px-4 py-2 rounded-full overflow-hidden text-sm font-semibold"
                >
                  {/* Button background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 opacity-90" />
                  <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 blur-md opacity-40" />
                  
                  {/* Content */}
                  <span className="relative flex items-center gap-2 text-white">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                    </span>
                    Live
                    <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </a>
              )}
            </div>
          </motion.div>

          {/* Project Number + Title */}
          <motion.div variants={fadeInUp} className="flex items-start gap-4">
            <span className={`
              text-sm font-mono transition-colors duration-300
              ${isActive ? "text-accent" : "text-muted"}
            `}>
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className={`
                text-2xl lg:text-3xl font-bold transition-colors duration-300
                ${isActive ? "text-foreground" : "text-foreground/70"}
              `}>
                {project.title.split(" - ")[0]}
              </h3>
              <p className={`
                text-sm mt-1 transition-colors duration-300
                ${isActive ? "text-accent" : "text-muted"}
              `}>
                {project.subtitle}
              </p>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            className="text-foreground-muted text-base lg:text-lg leading-relaxed max-w-xl"
          >
            {project.solution}
          </motion.p>

          {/* Key Features */}
          <motion.div variants={fadeInUp} className="space-y-3">
            <h4 className="text-sm font-semibold text-accent uppercase tracking-wider">
              Key Features
            </h4>
            <motion.ul
              variants={staggerContainerFast}
              className="space-y-2"
            >
              {project.challenges.slice(0, 3).map((challenge, i) => (
                <motion.li
                  key={i}
                  variants={listItemVariants}
                  className="flex items-start gap-3 text-sm text-foreground-muted"
                >
                  <ChevronRight className={`
                    w-4 h-4 mt-0.5 flex-shrink-0 transition-colors duration-300
                    ${isActive ? "text-accent" : "text-muted"}
                  `} />
                  <span>{challenge}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Tech Stack */}
          <motion.div variants={fadeInUp} className="space-y-3">
            <h4 className="text-sm font-semibold text-accent uppercase tracking-wider">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{ scale: 1.05 }}
                  className={`
                    px-3 py-1.5 text-xs font-medium rounded-full
                    border transition-all duration-300
                    ${isActive 
                      ? "bg-accent/10 border-accent/30 text-accent" 
                      : "bg-white/5 border-white/10 text-muted"
                    }
                  `}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Metrics/Highlights */}
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-6 pt-2">
            {project.highlights.map((highlight) => (
              <div key={highlight.label} className="text-center">
                <div className={`
                  text-xl font-bold transition-colors duration-300
                  ${isActive ? "text-accent" : "text-muted"}
                `}>
                  {highlight.value}
                </div>
                <div className="text-xs text-muted uppercase tracking-wider">
                  {highlight.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Action Links */}
          <motion.div variants={fadeInUp} className="flex gap-4 pt-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  inline-flex items-center gap-2 px-4 py-2 rounded-lg
                  text-sm font-medium transition-all duration-300
                  border hover:scale-[1.02] active:scale-[0.98]
                  ${isActive
                    ? "border-accent/50 text-accent hover:bg-accent/10"
                    : "border-white/20 text-muted hover:border-white/40"
                  }
                `}
              >
                <Github className="w-4 h-4" />
                View Code
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group/live inline-flex items-center gap-2 px-5 py-2.5 rounded-full overflow-hidden text-sm font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                {/* Button background with animated gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 opacity-0 group-hover/live:opacity-100 transition-opacity duration-300" />
                
                {/* Animated shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover/live:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/live:translate-x-full transition-transform duration-700" />
                </div>
                
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 blur-lg opacity-30 group-hover/live:opacity-50 transition-opacity" />
                
                {/* Content */}
                <span className="relative flex items-center gap-2 text-white">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                  </span>
                  Live Demo
                  <ExternalLink className="w-4 h-4" />
                </span>
              </a>
            )}
          </motion.div>
        </motion.div>
      </div>
    );
  }
);
