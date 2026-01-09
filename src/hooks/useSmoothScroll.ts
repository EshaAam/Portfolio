"use client";

import { useEffect, useCallback, useRef } from "react";
import { NAV_SECTIONS } from "@/lib/constants";

interface UseSmoothScrollOptions {
  /** Enable section snapping on scroll */
  enableSnapping?: boolean;
  /** Debounce delay for scroll events in ms */
  debounceDelay?: number;
}

/**
 * Hook for smooth section-to-section scrolling
 * Provides Apple-style section snapping behavior
 */
export function useSmoothScroll(options: UseSmoothScrollOptions = {}) {
  const { enableSnapping = true, debounceDelay = 100 } = options;
  
  const isScrolling = useRef(false);
  const scrollTimeout = useRef<NodeJS.Timeout>();
  const lastScrollTime = useRef(0);

  // Scroll to specific section
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element || isScrolling.current) return;

    isScrolling.current = true;

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // Reset scrolling flag after animation completes
    setTimeout(() => {
      isScrolling.current = false;
    }, 800);

    // Update URL hash
    window.history.pushState(null, "", `#${sectionId}`);
  }, []);

  // Get next/previous section
  const getAdjacentSection = useCallback(
    (direction: "next" | "prev"): string | null => {
      const currentIndex = NAV_SECTIONS.findIndex(
        (s) => s.id === window.location.hash.slice(1) || s.id === "hero"
      );

      if (direction === "next" && currentIndex < NAV_SECTIONS.length - 1) {
        return NAV_SECTIONS[currentIndex + 1].id;
      }
      if (direction === "prev" && currentIndex > 0) {
        return NAV_SECTIONS[currentIndex - 1].id;
      }
      return null;
    },
    []
  );

  // Handle wheel events for section snapping
  useEffect(() => {
    if (!enableSnapping) return;

    const handleWheel = (e: WheelEvent) => {
      const now = Date.now();
      
      // Debounce wheel events
      if (now - lastScrollTime.current < debounceDelay) return;
      if (isScrolling.current) return;

      lastScrollTime.current = now;

      // Clear existing timeout
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      // Determine scroll direction
      const direction = e.deltaY > 0 ? "next" : "prev";
      
      scrollTimeout.current = setTimeout(() => {
        const targetSection = getAdjacentSection(direction);
        if (targetSection) {
          scrollToSection(targetSection);
        }
      }, 50);
    };

    // Only add listener if we want snapping behavior
    // Commented out for now - can enable for stricter snapping
    // window.addEventListener("wheel", handleWheel, { passive: true });

    return () => {
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      // window.removeEventListener("wheel", handleWheel);
    };
  }, [enableSnapping, debounceDelay, scrollToSection, getAdjacentSection]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isScrolling.current) return;

      if (e.key === "ArrowDown" || e.key === "PageDown") {
        e.preventDefault();
        const nextSection = getAdjacentSection("next");
        if (nextSection) scrollToSection(nextSection);
      }

      if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        const prevSection = getAdjacentSection("prev");
        if (prevSection) scrollToSection(prevSection);
      }

      if (e.key === "Home") {
        e.preventDefault();
        scrollToSection("hero");
      }

      if (e.key === "End") {
        e.preventDefault();
        scrollToSection("contact");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [scrollToSection, getAdjacentSection]);

  return {
    scrollToSection,
    getAdjacentSection,
    isScrolling: isScrolling.current,
  };
}
