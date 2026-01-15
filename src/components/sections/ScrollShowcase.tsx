"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { StickyPreview } from "@/components/ui/StickyPreview";
import { ProjectSection } from "@/components/ui/ProjectSection";
import { PROJECTS } from "@/lib/constants";
import { fadeInUp } from "@/lib/motion";

/**
 * ScrollShowcase - Main container for the scroll-based project display
 * Features sticky left preview + scrollable right project sections
 * Uses IntersectionObserver to detect active project
 */
export function ScrollShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Sort projects: featured first
  const sortedProjects = [...PROJECTS].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return 0;
  });

  // Set up IntersectionObserver to track which section is in viewport center
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionRefs.current.forEach((section, index) => {
      if (!section) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveIndex(index);
            }
          });
        },
        {
          // Trigger when section is in the center 40% of viewport
          rootMargin: "-30% 0px -30% 0px",
          threshold: 0.1,
        }
      );

      observer.observe(section);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [sortedProjects.length]);

  // Callback ref to store section references
  const setSectionRef = useCallback((index: number) => (el: HTMLDivElement | null) => {
    sectionRefs.current[index] = el;
  }, []);

  const activeProject = sortedProjects[activeIndex] || sortedProjects[0];

  return (
    <div ref={containerRef} className="relative">
      {/* Section Header */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center mb-12 lg:mb-20"
      >
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle mx-auto">
          Real-world applications showcasing system design and engineering practices
        </p>
      </motion.div>

      {/* Two Column Layout */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
        {/* Left: Sticky Preview Panel */}
        <StickyPreview 
          activeProject={activeProject} 
          activeIndex={activeIndex}
        />

        {/* Right: Scrollable Project Sections */}
        <div className="w-full lg:w-[55%] xl:w-[50%]">
          {sortedProjects.map((project, index) => (
            <ProjectSection
              key={project.id}
              ref={setSectionRef(index)}
              project={project}
              isActive={activeIndex === index}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Navigation Dots - Desktop only */}
      <div className="hidden lg:flex fixed right-8 top-1/2 -translate-y-1/2 flex-col gap-3 z-40">
        {sortedProjects.map((project, index) => (
          <button
            key={project.id}
            onClick={() => {
              sectionRefs.current[index]?.scrollIntoView({
                behavior: "smooth",
                block: "center",
              });
            }}
            className={`
              w-3 h-3 rounded-full transition-all duration-300
              ${activeIndex === index
                ? "bg-accent scale-125 shadow-[0_0_12px_rgba(168,85,247,0.5)]"
                : "bg-white/20 hover:bg-white/40"
              }
            `}
            aria-label={`Go to ${project.title}`}
          />
        ))}
      </div>
    </div>
  );
}
