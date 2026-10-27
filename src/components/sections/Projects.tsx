"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Github } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { buttonClasses } from "@/components/ui/Button";
import { ProjectPreview } from "@/components/projects/ProjectPreview";
import { ProjectDetails } from "@/components/projects/ProjectDetails";
import { PROJECTS } from "@/data/projects";
import { SOCIAL_LINKS } from "@/data/site";

/**
 * Projects showcase.
 * lg+: sticky preview on the left, project write-ups scroll on the right.
 * Below lg: a simple stacked list where each project carries its own screenshot.
 */
export function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef<(HTMLElement | null)[]>([]);

  // Whichever article crosses the vertical center of the viewport is active.
  // A zero-height band avoids ratio thresholds that tall articles can never reach.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveIndex(Number((entry.target as HTMLElement).dataset.index));
          }
        }
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );
    itemRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const setRef = useCallback(
    (index: number) => (el: HTMLElement | null) => {
      itemRefs.current[index] = el;
    },
    []
  );

  const select = (index: number) => {
    itemRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <Section id="projects" className="pb-16 sm:pb-20 lg:pb-24">
      <SectionHeading
        eyebrow="Selected work"
        title="Projects"
        description="Production-minded applications: async pipelines, AI features with real guardrails, and interfaces people enjoy using."
      />

      <div className="lg:grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-16">
        <div className="hidden lg:block">
          <ProjectPreview projects={PROJECTS} activeIndex={activeIndex} onSelect={select} />
        </div>

        <div className="divide-y divide-white/[0.06] lg:divide-y-0">
          {PROJECTS.map((project, index) => (
            <ProjectDetails
              key={project.id}
              ref={setRef(index)}
              project={project}
              index={index}
              isActive={activeIndex === index}
            />
          ))}
        </div>
      </div>

      <Reveal className="mt-12 flex justify-center lg:mt-4">
        <a href={SOCIAL_LINKS[0].url} target="_blank" rel="noopener noreferrer" className={buttonClasses("secondary")}>
          <Github className="h-4 w-4" />
          More on GitHub
        </a>
      </Reveal>
    </Section>
  );
}
