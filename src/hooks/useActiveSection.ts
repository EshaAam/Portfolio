"use client";

import { useState, useEffect, useCallback } from "react";
import { NAV_SECTIONS } from "@/lib/constants";

/**
 * Hook to track which section is currently active based on scroll position
 * Uses scroll position calculation for accurate detection
 */
export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<string>("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      // Find the section that is currently in view
      let currentSection = "hero";
      
      for (const { id } of NAV_SECTIONS) {
        const element = document.getElementById(id);
        if (!element) continue;
        
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;
        
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          currentSection = id;
          break;
        }
      }
      
      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    // Initial check
    handleScroll();
    
    // Add scroll listener with throttling
    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", scrollListener, { passive: true });

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, [activeSection]);

  return activeSection;
}

/**
 * Hook to provide smooth scrolling to sections
 */
export function useSmoothScroll() {
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // Update URL hash
    window.history.pushState(null, "", `#${sectionId}`);
  }, []);

  return { scrollToSection };
}
