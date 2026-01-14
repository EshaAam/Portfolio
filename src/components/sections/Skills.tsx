"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { staggerContainer, fadeInUp } from "@/lib/motion";

// Skills data - excluding Contentful, pnpm, Bun, Zustand per user request
const SKILLS_DATA = [
  // Row 1
  { name: "ReactJS", icon: "/icons/react.svg", color: "#61DAFB" },
  { name: "NextJS", icon: "/icons/nextjs.svg", color: "#ffffff" },
  { name: "TypeScript", icon: "/icons/typescript.svg", color: "#3178C6" },
  { name: "Tailwind CSS", icon: "/icons/tailwind.svg", color: "#06B6D4" },
  { name: "Motion", icon: "/icons/motion.svg", color: "#F7DF1E" },
  { name: "Sanity", icon: "/icons/sanity.svg", color: "#F03E2F" },
  // Row 2
  { name: "NodeJS", icon: "/icons/nodejs.svg", color: "#339933" },
  { name: "ExpressJS", icon: "/icons/express.svg", color: "#ffffff" },
  { name: "PostgreSQL", icon: "/icons/postgresql.svg", color: "#4169E1" },
  { name: "MongoDB", icon: "/icons/mongodb.svg", color: "#47A248" },
  { name: "Prisma", icon: "/icons/prisma.svg", color: "#ffffff" },
  // Row 3
  { name: "Zod", icon: "/icons/zod.svg", color: "#3E67B1" },
  { name: "Git", icon: "/icons/git.svg", color: "#F05032" },
  { name: "GitHub", icon: "/icons/github.svg", color: "#ffffff" },
  { name: "Vercel", icon: "/icons/vercel.svg", color: "#ffffff" },
  // Row 4
  { name: "AWS", icon: "/icons/aws.svg", color: "#FF9900" },
  { name: "Docker", icon: "/icons/docker.svg", color: "#2496ED" },
  { name: "Expo", icon: "/icons/expo.svg", color: "#ffffff" },
  { name: "Clerk", icon: "/icons/clerk.svg", color: "#6C47FF" },
  { name: "Linux", icon: "/icons/linux.svg", color: "#FCC624" },
];

/**
 * Skills section - Displays skill badges with icons
 * Features a decorative 3D element and animated skill pills
 */
export function Skills() {
  return (
    <SectionWrapper id="skills" className="flex items-center">
      <div className="max-w-5xl mx-auto w-full py-20">
        {/* Decorative Element */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-8"
        >
          <div className="relative w-48 h-32">
            {/* Decorative gradient orb */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 via-pink-500/20 to-orange-500/30 rounded-full blur-3xl" />
            <div className="absolute inset-4 bg-gradient-to-tr from-indigo-500/20 via-violet-500/30 to-fuchsia-500/20 rounded-full blur-2xl animate-pulse" />
          </div>
        </motion.div>

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-12"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-foreground-muted mb-4">
            MY SKILLSET
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-foreground">The Magic </span>
            <span className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent italic">
              Behind
            </span>
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-wrap justify-center gap-3 md:gap-4"
        >
          {SKILLS_DATA.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={fadeInUp}
              custom={index}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 4px 20px rgba(255, 255, 255, 0.1)" 
              }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#1a1a1a] border border-white/10 hover:border-white/20 transition-colors cursor-default"
            >
              {/* Icon placeholder - using colored circle as fallback */}
              <div 
                className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold"
                style={{ backgroundColor: skill.color + "20", color: skill.color }}
              >
                {skill.name.charAt(0)}
              </div>
              <span className="text-sm font-medium text-foreground">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
