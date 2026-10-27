"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Github, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { EASE_OUT } from "@/lib/motion";
import { NAV_SECTIONS, SITE, SOCIAL_LINKS } from "@/data/site";
import { scrollToSection, useActiveSection } from "@/hooks/useActiveSection";
import { buttonClasses } from "@/components/ui/Button";

const SECTION_IDS = NAV_SECTIONS.map((s) => s.id);

/**
 * Floating navigation.
 * Desktop (lg+): glass pill with a sliding active indicator, hides on scroll down.
 * Mobile/tablet: compact bar with a full-screen sheet menu.
 */
export function Navbar() {
  const active = useActiveSection(SECTION_IDS);
  const { scrollY, scrollYProgress } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setAtTop(y < 40);
    setHidden(y > 400 && y > prev + 4 && !open);
    if (y < prev - 4) setHidden(false);
  });

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onResize = () => window.innerWidth >= 1024 && setOpen(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    // Let the sheet close before scrolling so the layout is stable
    requestAnimationFrame(() => scrollToSection(id));
  };

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed inset-x-0 top-0 z-[60] h-px origin-left bg-gradient-to-r from-accent via-indigo-400 to-accent"
      />

      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: hidden ? -96 : 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: EASE_OUT }}
        className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4"
      >
        <nav
          className={cn(
            "mx-auto flex h-14 max-w-6xl items-center justify-between rounded-full pl-5 pr-2 transition-[background-color,border-color,box-shadow] duration-500",
            atTop && !open
              ? "border border-transparent"
              : "glass border-white/[0.08] bg-[#0b0b10]/70 shadow-[0_8px_32px_-12px_rgba(0,0,0,0.6)]"
          )}
        >
          {/* Logo */}
          <button
            onClick={() => go("hero")}
            className="text-lg font-semibold tracking-tight"
            aria-label="Back to top"
          >
            <span className="gradient-text">{SITE.shortName}</span>
            <span className="text-accent">.</span>
          </button>

          {/* Desktop links */}
          <ul className="hidden items-center gap-0.5 lg:flex">
            {NAV_SECTIONS.map((section) => {
              const isActive = active === section.id;
              return (
                <li key={section.id}>
                  <button
                    onClick={() => go(section.id)}
                    className={cn(
                      "relative rounded-full px-3.5 py-2 text-sm transition-colors duration-200 xl:px-4",
                      isActive ? "text-foreground" : "text-foreground-muted hover:text-foreground"
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-full bg-white/[0.07] ring-1 ring-white/10"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span className="relative">{section.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-1">
            <a
              href={SOCIAL_LINKS[0].url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="hidden h-10 w-10 items-center justify-center rounded-full text-foreground-muted transition-colors hover:text-foreground sm:flex"
            >
              <Github className="h-5 w-5" />
            </a>
            <button
              onClick={() => go("contact")}
              className={buttonClasses("accent", "sm", "hidden lg:inline-flex")}
            >
              Let&apos;s talk
            </button>
            <button
              onClick={() => setOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center rounded-full text-foreground lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={open ? "x" : "menu"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile sheet */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl lg:hidden"
          >
            <motion.ul
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } } }}
              className="flex h-full flex-col justify-center gap-1 px-8 pb-10 pt-24"
            >
              {NAV_SECTIONS.map((section, i) => (
                <motion.li
                  key={section.id}
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_OUT } },
                  }}
                >
                  <button
                    onClick={() => go(section.id)}
                    className={cn(
                      "flex w-full items-baseline gap-4 py-2.5 text-left text-3xl font-semibold tracking-tight transition-colors xs:text-4xl",
                      active === section.id ? "text-foreground" : "text-foreground/50 hover:text-foreground"
                    )}
                  >
                    <span className="font-mono text-xs text-accent">0{i + 1}</span>
                    {section.label}
                  </button>
                </motion.li>
              ))}
              <motion.li
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                className="mt-8 flex flex-wrap gap-3"
              >
                <a href={SITE.resumeUrl} target="_blank" rel="noopener noreferrer" className={buttonClasses("primary")}>
                  Download CV
                </a>
                <a href={SOCIAL_LINKS[0].url} target="_blank" rel="noopener noreferrer" className={buttonClasses("secondary")}>
                  <Github className="h-4 w-4" /> GitHub
                </a>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
