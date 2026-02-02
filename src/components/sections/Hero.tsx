"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, FolderOpen } from "lucide-react";
import Typewriter from "typewriter-effect";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SpaceButton } from "@/components/ui/SpaceButton";
import { GlowButton } from "@/components/ui/GlowButton";
import { fadeInUp, fadeInDown, staggerContainer } from "@/lib/motion";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { PERSONAL_INFO } from "@/lib/constants";

/**
 * Hero section - First viewport, introduces the developer
 * Features typewriter effect, CTA buttons, and scroll indicator
 */
export function Hero() {
  const { scrollToSection } = useSmoothScroll();
  const { scrollY } = useScroll();
  const [mounted, setMounted] = useState(false);

  // Parallax effects for hero content
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <SectionWrapper id="hero" className="flex items-center justify-center" withNavPadding={false}>
      <motion.div
        style={{ y, opacity }}
        className="flex flex-col items-center text-center max-w-4xl mx-auto py-20"
      >
        <motion.div variants={staggerContainer} initial="hidden" animate="visible">
          {/* Greeting */}
          <motion.p
            variants={fadeInDown}
            className="text-accent font-mono text-base sm:text-lg md:text-xl mb-4"
          >
            Hi there!{" "}
            <motion.span
              className="inline-block"
              animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 1,
                ease: "easeInOut",
              }}
            >
              👋
            </motion.span>{" "}
            I&apos;m
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4"
          >
            <span className="gradient-text">{PERSONAL_INFO.name}</span>
          </motion.h1>

          {/* Role with typewriter effect */}
          <motion.div
            variants={fadeInUp}
            className="text-xl sm:text-2xl md:text-3xl text-foreground-muted mb-6 h-12"
          >
            {mounted && (
              <Typewriter
                options={{
                  strings: [
                    PERSONAL_INFO.role,
                    "Frontend Specialist",
                    "Security-Conscious",
                    "Scalable Solutions Builder",
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 30,
                  delay: 50,
                }}
              />
            )}
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={fadeInUp}
            className="text-muted text-lg max-w-2xl mx-auto mb-10"
          >
            {PERSONAL_INFO.tagline}. I build robust, scalable backend systems
            and craft clean frontend experiences with modern technologies.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <SpaceButton onClick={() => scrollToSection("projects")}>
              <FolderOpen className="w-4 h-4" />
              View Projects
            </SpaceButton>

            <GlowButton onClick={() => scrollToSection("resume")}>
              Resume
            </GlowButton>

            <GlowButton onClick={() => scrollToSection("contact")}>
              Connect
            </GlowButton>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.button
            onClick={() => scrollToSection("about")}
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="p-2 text-muted hover:text-accent transition-colors"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
