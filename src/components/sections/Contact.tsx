"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { SectionWrapper, SectionHeader } from "@/components/ui/SectionWrapper";
import { GitHubActivity } from "@/components/ui/GitHubActivity";
import { fadeInUp, buttonVariants, staggerContainer } from "@/lib/motion";
import { SOCIAL_LINKS, PERSONAL_INFO } from "@/lib/constants";

// Icon mapping for social links
const iconMap = {
  mail: Mail,
  github: Github,
  linkedin: Linkedin,
};

/**
 * Contact section - Minimal contact information with animated CTA
 * Clean, professional appearance with GitHub activity calendar
 */
export function Contact() {
  return (
    <SectionWrapper id="contact" className="flex items-center">
      <div className="max-w-4xl mx-auto w-full py-20 text-center">
        <SectionHeader
          title="Get In Touch"
          subtitle="Interested in working together? Feel free to reach out."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Main CTA */}
          <motion.div variants={fadeInUp}>
            <motion.a
              href={`mailto:${PERSONAL_INFO.email}`}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4"
            >
              <Mail className="w-5 h-5" />
              Say Hello
              <ArrowUpRight className="w-4 h-4" />
            </motion.a>
          </motion.div>

          {/* Email display */}
          <motion.p variants={fadeInUp} className="text-foreground-muted">
            or drop me an email at{" "}
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="text-accent hover:text-accent-light transition-colors font-mono"
            >
              {PERSONAL_INFO.email}
            </a>
          </motion.p>

          {/* Social links */}
          <motion.div
            variants={fadeInUp}
            className="flex items-center justify-center gap-4 pt-8"
          >
            {SOCIAL_LINKS.map((link) => {
              const IconComponent = iconMap[link.icon as keyof typeof iconMap] || Mail;
              
              return (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="p-4 rounded-xl bg-surface border border-white/5 text-foreground-muted
                             hover:text-accent hover:border-accent/30 transition-colors"
                  aria-label={link.name}
                >
                  <IconComponent className="w-6 h-6" />
                </motion.a>
              );
            })}
          </motion.div>

          {/* Location */}
          <motion.p variants={fadeInUp} className="text-muted text-sm pt-4">
            Based in {PERSONAL_INFO.location}
          </motion.p>
        </motion.div>

        {/* GitHub Activity Calendar */}
        <GitHubActivity />
      </div>
    </SectionWrapper>
  );
}
