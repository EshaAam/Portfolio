"use client";

import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, CheckCircle } from "lucide-react";
import { backdropVariants, modalVariants, staggerContainer, fadeInUp } from "@/lib/motion";
import { Project } from "@/types";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Full project details modal with animated entry/exit
 * Displays complete project information including problem, solution, architecture
 */
export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  // Handle escape key
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          />

          {/* Modal content */}
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-2xl bg-surface border border-white/10 shadow-glow-lg"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-lg bg-surface-light hover:bg-accent/20 hover:text-accent transition-colors z-10"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Content */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="p-6 sm:p-8"
            >
              {/* Header */}
              <motion.div variants={fadeInUp} className="mb-6 pr-10">
                {project.featured && (
                  <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-accent text-white mb-3">
                    Featured Project
                  </span>
                )}
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                  {project.title}
                </h2>
                <p className="text-accent-light">{project.subtitle}</p>
              </motion.div>

              {/* Problem */}
              <motion.div variants={fadeInUp} className="mb-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  The Problem
                </h3>
                <p className="text-foreground-muted leading-relaxed">
                  {project.problem}
                </p>
              </motion.div>

              {/* Solution */}
              <motion.div variants={fadeInUp} className="mb-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  The Solution
                </h3>
                <p className="text-foreground-muted leading-relaxed">
                  {project.solution}
                </p>
              </motion.div>

              {/* Architecture (if available) */}
              {project.architecture && (
                <motion.div variants={fadeInUp} className="mb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Architecture
                  </h3>
                  <p className="text-foreground-muted leading-relaxed">
                    {project.architecture}
                  </p>
                </motion.div>
              )}

              {/* Challenges */}
              <motion.div variants={fadeInUp} className="mb-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Key Challenges Solved
                </h3>
                <ul className="space-y-2">
                  {project.challenges.map((challenge, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-foreground-muted">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Technologies */}
              <motion.div variants={fadeInUp} className="mb-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-sm rounded-lg bg-surface-light text-foreground-muted border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Highlights */}
              <motion.div variants={fadeInUp} className="mb-8">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Project Metrics
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {project.highlights.map((highlight) => (
                    <div
                      key={highlight.label}
                      className="text-center p-4 rounded-xl bg-surface-light border border-white/5"
                    >
                      <div className="text-2xl font-bold text-accent">
                        {highlight.value}
                      </div>
                      <div className="text-sm text-muted mt-1">
                        {highlight.label}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Actions */}
              <motion.div variants={fadeInUp} className="flex gap-4">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary flex items-center gap-2"
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
                    className="btn-primary flex items-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                )}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
