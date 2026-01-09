"use client";

import { motion } from "framer-motion";
import { ShieldAlert, Network, Activity, Box, Brain } from "lucide-react";
import { SectionWrapper, SectionHeader } from "@/components/ui/SectionWrapper";
import { cardVariants, staggerContainerSlow, fadeInUp } from "@/lib/motion";
import { LABS } from "@/lib/constants";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";

// Icon mapping for lab categories
const iconMap = {
  "shield-alert": ShieldAlert,
  network: Network,
  activity: Activity,
  box: Box,
  brain: Brain,
};

/**
 * Research section
 * Showcases security labs, networking, and testing experience
 * Treated as engineering credibility markers
 */
export function Labs() {
  return (
    <SectionWrapper id="labs" className="flex items-center">
      <div className="max-w-6xl mx-auto w-full py-20">
        <SectionHeader
          title="Research"
          subtitle="Hands-on experience with security, networking, and performance testing"
        />

        <motion.div
          variants={staggerContainerSlow}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center"
        >
          {LABS.map((lab) => {
            const IconComponent = iconMap[lab.icon as keyof typeof iconMap] || ShieldAlert;
            
            // Category color mapping
            const categoryColors = {
              security: "text-red-400 bg-red-400/10",
              networking: "text-blue-400 bg-blue-400/10",
              testing: "text-green-400 bg-green-400/10",
              devops: "text-orange-400 bg-orange-400/10",
              research: "text-purple-400 bg-purple-400/10",
            };

            const colorClass = categoryColors[lab.category as keyof typeof categoryColors] || "text-accent bg-accent/10";

            return (
              <CardContainer key={lab.id} className="w-full" containerClassName="py-0">
                {/* Glowing border effect on hover */}
                <div className="relative group/glow h-full">
                  <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-transparent via-transparent to-transparent group-hover/glow:from-orange-500 group-hover/glow:via-red-500 group-hover/glow:to-purple-500 opacity-0 group-hover/glow:opacity-100 transition-opacity duration-500 blur-sm" />
                  <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-transparent via-transparent to-transparent group-hover/glow:from-orange-500 group-hover/glow:via-red-500 group-hover/glow:to-purple-500 opacity-0 group-hover/glow:opacity-75 transition-opacity duration-500" />
                  
                  <CardBody className="card group flex flex-col min-h-[320px] w-full h-full relative hover:border-transparent transition-all">
                  <motion.div variants={cardVariants} className="flex flex-col h-full">
                    {/* Icon centered at top */}
                    <CardItem translateZ={60} className="flex justify-center mb-6 w-full">
                      <div className={`p-4 rounded-2xl ${colorClass}`}>
                        <IconComponent className="w-8 h-8" />
                      </div>
                    </CardItem>

                    {/* Title & Category centered */}
                    <CardItem translateZ={40} className="text-center mb-4 w-full">
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors mb-1">
                        {lab.title}
                      </h3>
                      <span className="text-xs text-muted capitalize px-2 py-0.5 rounded-full bg-surface-light">
                        {lab.category}
                      </span>
                    </CardItem>

                    {/* Description */}
                    <CardItem translateZ={30} className="w-full flex-grow">
                      <p className="text-foreground-muted text-sm leading-relaxed text-center">
                        {lab.description}
                      </p>
                    </CardItem>

                    {/* Skills/Tools used - at bottom */}
                    <CardItem translateZ={50} className="w-full mt-auto pt-6">
                      <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-2">
                        {lab.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-1 text-xs rounded-md bg-surface-light text-muted border border-white/5"
                          >
                            {skill}
                          </span>
                        ))}
                      </motion.div>
                    </CardItem>
                  </motion.div>
                </CardBody>
                </div>
              </CardContainer>
            );
          })}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
