"use client";

import { motion } from "framer-motion";
import { Heart, Github, Linkedin, Mail } from "lucide-react";
import { fadeInUp } from "@/lib/motion";
import { SOCIAL_LINKS, PERSONAL_INFO } from "@/lib/constants";

// Icon mapping
const iconMap = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
};

/**
 * Footer component
 * Minimal design with social links and copyright
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="py-8 border-t border-white/5"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="flex items-center gap-2 text-sm text-muted">
            <span>© {currentYear}</span>
            <span className="text-foreground font-medium">{PERSONAL_INFO.name}</span>
            <span className="hidden sm:inline">•</span>
            {/* <span className="hidden sm:flex items-center gap-1">
              Built with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> using Next.js
            </span> */}
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map((link) => {
              const IconComponent = iconMap[link.icon as keyof typeof iconMap] || Mail;
              
              return (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2, color: "#a855f7" }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 text-muted hover:text-accent transition-colors"
                  aria-label={link.name}
                >
                  <IconComponent className="w-5 h-5" />
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
