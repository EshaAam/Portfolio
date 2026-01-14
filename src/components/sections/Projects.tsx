"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ScrollShowcase } from "@/components/sections/ScrollShowcase";

/**
 * Projects section - Showcases main projects with scroll-based showcase
 * Features sticky left preview with scrollable right project descriptions
 */
export function Projects() {
  return (
    <SectionWrapper id="projects" fullHeight={false}>
      <div className="max-w-7xl mx-auto w-full py-20">
        <ScrollShowcase />
      </div>
    </SectionWrapper>
  );
}
