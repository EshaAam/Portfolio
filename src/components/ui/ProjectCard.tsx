"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Layers } from "lucide-react";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { buttonVariants } from "@/lib/motion";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
}

/**
 * Project card component with 3D hover effect
 * Features image placeholder, title, description, and action buttons
 * Uses Aceternity-style 3D card perspective with glowing border on hover
 */
export function ProjectCard({ project, onOpenModal }: ProjectCardProps) {
  return (
    <CardContainer className="w-full">
      {/* Glowing border effect on hover */}
      <div className="relative group/glow">
        {/* Animated gradient border */}
        <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-transparent via-transparent to-transparent group-hover/glow:from-orange-500 group-hover/glow:via-red-500 group-hover/glow:to-purple-500 opacity-0 group-hover/glow:opacity-100 transition-opacity duration-500 blur-sm" />
        <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-transparent via-transparent to-transparent group-hover/glow:from-orange-500 group-hover/glow:via-red-500 group-hover/glow:to-purple-500 opacity-0 group-hover/glow:opacity-75 transition-opacity duration-500" />
        
        <CardBody
          className="relative group/card w-full h-auto rounded-2xl p-0 border border-white/10 bg-surface hover:border-transparent hover:shadow-2xl hover:shadow-accent/10 transition-all cursor-pointer overflow-hidden"
          onClick={() => onOpenModal(project)}
        >
        {/* Project Image/Preview Placeholder */}
        <CardItem
          translateZ="100"
          rotateX={5}
          className="w-full"
        >
          <div className="relative w-full aspect-[16/10] bg-gradient-to-br from-surface-light to-background overflow-hidden">
            {/* Decorative elements to simulate a project preview */}
            <div className="absolute inset-0 flex items-center justify-center p-4">
              <div className="relative w-full h-full rounded-lg bg-background/90 border border-white/10 shadow-2xl overflow-hidden group-hover/card:shadow-accent/20 transition-shadow">
                {/* Mock window header */}
                <div className="h-7 bg-surface-light/80 border-b border-white/10 flex items-center px-3 gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="px-3 py-0.5 rounded bg-surface/80 text-[10px] text-muted font-mono truncate max-w-[70%]">
                      {project.title.toLowerCase().replace(/\s+/g, '-')}
                    </div>
                  </div>
                </div>
                {/* Mock content */}
                <div className="p-3 space-y-2">
                  <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-accent" />
                    <div className="h-2.5 bg-accent/20 rounded w-24" />
                  </div>
                  <div className="space-y-1.5">
                    <div className="h-2 bg-white/5 rounded w-full" />
                    <div className="h-2 bg-white/5 rounded w-4/5" />
                    <div className="h-2 bg-white/5 rounded w-3/5" />
                  </div>
                  <div className="flex gap-2 pt-1">
                    <div className="h-5 bg-accent/10 rounded w-14" />
                    <div className="h-5 bg-indigo-500/10 rounded w-16" />
                  </div>
                </div>
              </div>
            </div>

            {/* Featured badge */}
            {project.featured && (
              <div className="absolute top-3 right-3 px-3 py-1 text-xs font-semibold rounded-full bg-accent text-white shadow-lg z-10">
                Featured
              </div>
            )}
          </div>
        </CardItem>

        {/* Content */}
        <div className="flex flex-col flex-grow p-5">
          {/* Title */}
          <CardItem
            translateZ="50"
            className="w-full"
          >
            <h3 className="text-lg font-bold text-foreground group-hover/card:text-accent transition-colors text-center mb-2">
              {project.title}
            </h3>
          </CardItem>

          {/* Description */}
          <CardItem
            translateZ="40"
            className="w-full"
          >
            <p className="text-foreground-muted text-sm leading-relaxed text-center mb-5 line-clamp-3">
              {project.problem}
            </p>
          </CardItem>

          {/* Action Buttons */}
          <CardItem
            translateZ="60"
            className="w-full"
          >
            <div className="flex items-center justify-center gap-3">
              {project.githubUrl && (
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-light border border-white/10 text-foreground-muted hover:text-accent hover:border-accent/30 transition-all text-sm"
                >
                  <Github className="w-4 h-4" />
                  <span className="font-medium">GitHub</span>
                </motion.a>
              )}
              <motion.a
                href={project.liveUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                onClick={(e) => {
                  e.stopPropagation();
                  if (!project.liveUrl) e.preventDefault();
                }}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-white hover:bg-accent-light transition-all text-sm ${!project.liveUrl ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                <ExternalLink className="w-4 h-4" />
                <span className="font-medium">Live</span>
              </motion.a>
            </div>
          </CardItem>
        </div>
      </CardBody>
      </div>
    </CardContainer>
  );
}
