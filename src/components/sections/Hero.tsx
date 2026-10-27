"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowRight, FileText, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { EASE_OUT, fadeUp, stagger, wordReveal } from "@/lib/motion";
import { SITE, SOCIAL_LINKS } from "@/data/site";
import { scrollToSection } from "@/hooks/useActiveSection";

/** Cycles through role titles with a soft vertical slide */
function RoleRotator({ roles }: { roles: string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % roles.length), 2800);
    return () => clearInterval(id);
  }, [roles.length]);

  return (
    <span className="relative inline-flex h-[1.4em] overflow-hidden align-bottom">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={roles[index]}
          initial={{ y: "100%", opacity: 0, filter: "blur(4px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ y: "-100%", opacity: 0, filter: "blur(4px)" }}
          transition={{ duration: 0.6, ease: EASE_OUT }}
          className="whitespace-nowrap text-foreground"
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export function Hero() {
  const { scrollY } = useScroll();
  const artY = useTransform(scrollY, [0, 600], [0, 80]);
  const contentY = useTransform(scrollY, [0, 600], [0, 40]);

  const [first, last] = SITE.name.split(" ");

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] w-full items-center overflow-hidden pb-20 pt-28 sm:pt-32 lg:pb-16"
    >
      {/* Ambient background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid absolute inset-0" />
        <div className="absolute left-1/2 top-[-10%] h-[520px] w-[820px] max-w-[140vw] -translate-x-1/2 rounded-full bg-accent/[0.12] blur-[120px]" />
        <div className="absolute bottom-0 right-[-10%] h-[380px] w-[380px] rounded-full bg-indigo-500/10 blur-[110px]" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 lg:px-8">
        {/* Copy */}
        <motion.div
          style={{ y: contentY }}
          initial="hidden"
          animate="visible"
          variants={stagger(0.1, 0.2)}
          className="flex flex-col items-center text-center lg:items-start lg:text-left"
        >
          <motion.div variants={fadeUp} className="mb-6 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
            <span className="chip">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              B.Sc. Software Engineering · IUT
            </span>
            <span className="chip">
              <MapPin className="h-3 w-3" />
              {SITE.location}
            </span>
          </motion.div>

          <motion.p variants={fadeUp} className="mb-3 font-mono text-sm text-foreground-muted sm:text-base">
            Hi there <span className="inline-block origin-[70%_70%] animate-[wave_2.4s_ease-in-out_infinite]">👋</span> I&apos;m
          </motion.p>

          <h1 className="text-[clamp(2.75rem,9vw,5.25rem)] font-semibold leading-[0.95] tracking-[-0.04em]">
            <motion.span variants={wordReveal} className="gradient-text inline-block pb-1">
              {first}
            </motion.span>{" "}
            <motion.span variants={wordReveal} className="gradient-text inline-block pb-1">
              {last}
            </motion.span>
          </h1>

          <motion.p
            variants={fadeUp}
            className="mt-5 text-lg font-medium text-foreground-muted sm:text-xl md:text-2xl"
          >
            <RoleRotator roles={SITE.roles} />
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-foreground-muted sm:text-lg"
          >
            {SITE.tagline}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
          >
            <Button onClick={() => scrollToSection("projects")}>
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Button>
            <Button variant="secondary" onClick={() => scrollToSection("resume")}>
              <FileText className="h-4 w-4" />
              Resume
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("contact")}>
              Connect
            </Button>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-8 flex items-center gap-1">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target={link.icon === "mail" ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={link.name}
                className="flex h-10 w-10 items-center justify-center rounded-full text-foreground-muted transition-colors duration-200 hover:bg-white/[0.05] hover:text-foreground"
              >
                <SocialIcon icon={link.icon} className="h-[18px] w-[18px]" />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Illustration (plain <img> so the SVG's own CSS animations keep playing) */}
        <motion.div
          style={{ y: artY }}
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35, ease: EASE_OUT }}
          className="relative mx-auto w-full max-w-[420px] sm:max-w-[500px] lg:max-w-none"
        >
          <div aria-hidden className="absolute inset-[12%] -z-10 rounded-full bg-accent/20 blur-[80px]" />
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/portfolio-hero.svg"
              alt="Illustration of a developer coding at a desk with a cup of coffee"
              width={600}
              height={460}
              className="h-auto w-full select-none"
              draggable={false}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.button
        onClick={() => scrollToSection("about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-foreground-muted transition-colors hover:text-foreground sm:flex"
        aria-label="Scroll to about section"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
          <ArrowDown className="h-4 w-4" />
        </motion.span>
      </motion.button>
    </section>
  );
}
