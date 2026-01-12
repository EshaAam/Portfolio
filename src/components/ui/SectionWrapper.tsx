"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
  /** Full viewport height section */
  fullHeight?: boolean;
  /** Add top padding for navbar */
  withNavPadding?: boolean;
}

/**
 * Wrapper component for each main section
 * Provides consistent animation, padding, and scroll snap behavior
 */
export function SectionWrapper({
  id,
  children,
  className = "",
  fullHeight = true,
  withNavPadding = true,
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
      className={`
        relative w-full
        ${fullHeight ? "min-h-screen" : ""}
        ${withNavPadding ? "pt-20" : ""}
        ${className}
      `}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
        {children}
      </div>
    </motion.section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

/**
 * Consistent section header with title and optional subtitle
 */
export function SectionHeader({
  title,
  subtitle,
  centered = true,
}: SectionHeaderProps) {
  return (
    <motion.div
      variants={fadeInUp}
      className={`mb-12 ${centered ? "text-center" : ""}`}
    >
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle mx-auto">{subtitle}</p>}
    </motion.div>
  );
}
