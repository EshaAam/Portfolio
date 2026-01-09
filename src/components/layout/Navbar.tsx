"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { FloatingNavbar } from "@/components/ui/FloatingNavbar";
import { fadeInDown } from "@/lib/motion";
import { NAV_SECTIONS, PERSONAL_INFO } from "@/lib/constants";
import { useActiveSection, useSmoothScroll } from "@/hooks/useActiveSection";

/**
 * Main navigation component
 * Uses FloatingNavbar for desktop
 * Mobile menu for smaller screens
 */
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const activeSection = useActiveSection();
  const { scrollToSection } = useSmoothScroll();

  // Prepare nav items for FloatingNavbar (exclude hero - it has special treatment via Esham logo)
  const navItems = NAV_SECTIONS.filter((s) => s.id !== "hero").map((section) => ({
    name: section.label,
    link: section.href,
  }));

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close mobile menu on navigation
  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Floating Navbar */}
      <div className="hidden md:block">
        <FloatingNavbar
          navItems={navItems}
          activeSection={activeSection}
          onNavClick={handleNavClick}
        />
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        {/* Mobile Header */}
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="fixed top-0 left-0 right-0 z-50 glass"
        >
          <nav className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <motion.button
                onClick={() => handleNavClick("hero")}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="text-xl font-bold"
              >
                <span className="bg-gradient-to-r from-accent to-indigo-400 bg-clip-text text-transparent">
                  {PERSONAL_INFO.name.split(" ")[0]}
                </span>
                <span className="text-foreground">.</span>
              </motion.button>

              {/* Mobile menu button */}
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 text-foreground"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.button>
            </div>
          </nav>
        </motion.header>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm"
              />

              {/* Menu Panel */}
              <motion.div
                initial={{ opacity: 0, x: "100%" }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed top-16 right-0 bottom-0 z-50 w-64 bg-surface border-l border-white/10"
              >
                <div className="flex flex-col p-6 gap-2">
                  {NAV_SECTIONS.filter((s) => s.id !== "hero").map((section, index) => (
                    <motion.button
                      key={section.id}
                      variants={fadeInDown}
                      initial="hidden"
                      animate="visible"
                      custom={index}
                      onClick={() => handleNavClick(section.id)}
                      className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all ${
                        activeSection === section.id
                          ? "bg-accent/10 text-accent border border-accent/20"
                          : "text-foreground-muted hover:bg-surface-light hover:text-foreground"
                      }`}
                    >
                      {section.label}
                    </motion.button>
                  ))}

                  {/* Resume button mobile */}
                  <motion.a
                    variants={fadeInDown}
                    initial="hidden"
                    animate="visible"
                    href={PERSONAL_INFO.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center mt-4 px-4 py-3 rounded-xl text-base font-medium bg-gradient-to-r from-accent to-indigo-500 text-white"
                  >
                    Resume
                  </motion.a>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
