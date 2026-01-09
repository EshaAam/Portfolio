"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper, SectionHeader } from "@/components/ui/SectionWrapper";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ProjectModal } from "@/components/ui/ProjectModal";
import { staggerContainerSlow } from "@/lib/motion";
import { PROJECTS } from "@/lib/constants";
import { Project } from "@/types";

/**
 * Projects section - Showcases main projects with expandable details
 * Features card grid with modal for full project information
 */
export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Delay clearing project to allow exit animation
    setTimeout(() => setSelectedProject(null), 300);
  };

  // Sort projects: featured first
  const sortedProjects = [...PROJECTS].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return 0;
  });

  return (
    <SectionWrapper id="projects" className="flex items-center">
      <div className="max-w-6xl mx-auto w-full py-20">
        <SectionHeader
          title="Projects"
          subtitle="Real-world applications showcasing system design and engineering practices"
        />

        <motion.div
          variants={staggerContainerSlow}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
        >
          {sortedProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenModal={handleOpenModal}
            />
          ))}
        </motion.div>

        {/* Project detail modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </div>
    </SectionWrapper>
  );
}
