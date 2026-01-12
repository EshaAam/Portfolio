"use client";

import { motion } from "framer-motion";
import { cardVariants, fadeInUp, staggerContainerFast } from "@/lib/motion";
import { SkillCategory } from "@/types";
import * as Icons from "lucide-react";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";

interface SkillGroupProps {
  category: SkillCategory;
  index: number;
}

/**
 * Skill group component displaying a category with its skills
 * Features animated entry, hover effects, and 3D perspective
 */
export function SkillGroup({ category, index }: SkillGroupProps) {
  // Dynamically get icon component
  const iconName = category.icon.charAt(0).toUpperCase() + category.icon.slice(1);
  const IconComponent = (Icons[iconName as keyof typeof Icons] as React.ComponentType<{ className?: string }>) || Icons.Code;

  return (
    <CardContainer className="w-full" containerClassName="py-0">
      {/* Glowing border effect on hover */}
      <div className="relative group/glow">
        <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-transparent via-transparent to-transparent group-hover/glow:from-purple-500 group-hover/glow:via-accent group-hover/glow:to-indigo-500 opacity-0 group-hover/glow:opacity-100 transition-opacity duration-500 blur-sm" />
        <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-transparent via-transparent to-transparent group-hover/glow:from-purple-500 group-hover/glow:via-accent group-hover/glow:to-indigo-500 opacity-0 group-hover/glow:opacity-75 transition-opacity duration-500" />
        
        <CardBody className="card group w-full h-full relative hover:border-transparent transition-all">
        <motion.div
          variants={cardVariants}
          style={{ transitionDelay: `${index * 50}ms` }}
        >
          {/* Category header */}
          <CardItem translateZ={50} className="flex items-center gap-3 mb-4 w-full">
            <div className="p-2 rounded-lg bg-accent/10 text-accent group-hover:bg-accent/20 transition-colors">
              <IconComponent className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">
              {category.title}
            </h3>
          </CardItem>

          {/* Skills list */}
          <CardItem translateZ={30} className="w-full">
            <motion.div
              variants={staggerContainerFast}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap gap-2"
            >
              {category.skills.map((skill) => (
                <motion.span
                  key={skill.name}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-1.5 text-sm rounded-full bg-surface-light text-foreground-muted
                             border border-white/5 hover:border-accent/30 hover:text-accent
                             transition-colors cursor-default"
                >
                  {skill.name}
                </motion.span>
              ))}
            </motion.div>
          </CardItem>
        </motion.div>
      </CardBody>
      </div>
    </CardContainer>
  );
}
