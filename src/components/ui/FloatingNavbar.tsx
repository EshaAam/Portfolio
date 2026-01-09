"use client";

import { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Github } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  link: string;
  icon?: React.ReactNode;
}

interface FloatingNavbarProps {
  navItems: NavItem[];
  className?: string;
  activeSection?: string;
  onNavClick?: (sectionId: string) => void;
}

/**
 * Floating Navbar Component
 * A modern navbar that:
 * - Floats with glass morphism effect
 * - Hides when scrolling down
 * - Reveals when scrolling up
 * - Has smooth Framer Motion animations
 */
export function FloatingNavbar({
  navItems,
  className,
  activeSection,
  onNavClick,
}: FloatingNavbarProps) {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [atTop, setAtTop] = useState(true);

  useMotionValueEvent(scrollY, "change", (current) => {
    // Check if at top of page
    if (current < 50) {
      setVisible(true);
      setAtTop(true);
      setLastScrollY(current);
      return;
    }

    setAtTop(false);

    // Determine scroll direction
    const direction = current - lastScrollY;

    if (direction < -5) {
      // Scrolling up - show navbar
      setVisible(true);
    } else if (direction > 5) {
      // Scrolling down - hide navbar
      setVisible(false);
    }

    setLastScrollY(current);
  });

  const handleClick = (link: string) => {
    const sectionId = link.replace("#", "");
    if (onNavClick) {
      onNavClick(sectionId);
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.nav
        initial={{ opacity: 1, y: 0 }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className={cn(
          "fixed top-4 inset-x-0 mx-auto z-50 flex items-center justify-between px-4 md:px-8",
          className
        )}
      >
        {/* Left side - Esham logo */}
        <motion.button
          onClick={() => handleClick("#hero")}
          className={cn(
            "text-xl font-bold transition-all duration-300",
            atTop ? "opacity-100" : "opacity-80 backdrop-blur-sm"
          )}
          whileTap={{ scale: 0.97 }}
        >
          <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">
            Esham
          </span>
          <span className="text-purple-400">.</span>
        </motion.button>

        {/* Center - Navigation */}
        <motion.div
          className={cn(
            "flex items-center gap-1 px-2 py-2 rounded-full",
            "border border-white/10",
            "shadow-lg shadow-black/10",
            atTop
              ? "bg-transparent border-transparent"
              : "bg-surface/70 backdrop-blur-xl"
          )}
          layout
        >
          {/* Nav Items */}
          <div className="flex items-center gap-1">
            {navItems.map((item) => {
              const sectionId = item.link.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <motion.button
                  key={item.name}
                  onClick={() => handleClick(item.link)}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200",
                    isActive
                      ? "text-purple-400"
                      : "text-foreground-muted hover:text-foreground"
                  )}
                  whileTap={{ scale: 0.97 }}
                >
                  {/* Active indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavBg"
                      className="absolute inset-0 rounded-full bg-purple-500/10 border border-purple-500/30"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    {item.icon}
                    {item.name}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Right side - GitHub icon */}
        <motion.a
          href="https://github.com/EshaAam"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "p-2 rounded-full transition-all duration-300",
            atTop ? "opacity-100" : "opacity-80 backdrop-blur-sm",
            "text-foreground-muted hover:text-purple-400"
          )}
          whileTap={{ scale: 0.97 }}
          aria-label="GitHub Profile"
        >
          <Github className="w-6 h-6" />
        </motion.a>
      </motion.nav>
    </AnimatePresence>
  );
}
