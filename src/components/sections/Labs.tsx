"use client";

import { motion } from "framer-motion";
import { ShieldAlert, Network, Activity, Box, Brain, Github, ExternalLink, Lock } from "lucide-react";
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
          subtitle=""
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
            const isDemo = lab.isDemo;
            
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
                {/* Glowing border effect on hover - only for non-demo */}
                <div className={`relative group/glow h-full ${isDemo ? 'pointer-events-none' : ''}`}>
                  {!isDemo && (
                    <>
                      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-transparent via-transparent to-transparent group-hover/glow:from-orange-500 group-hover/glow:via-red-500 group-hover/glow:to-purple-500 opacity-0 group-hover/glow:opacity-100 transition-opacity duration-500 blur-sm" />
                      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-transparent via-transparent to-transparent group-hover/glow:from-orange-500 group-hover/glow:via-red-500 group-hover/glow:to-purple-500 opacity-0 group-hover/glow:opacity-75 transition-opacity duration-500" />
                    </>
                  )}
                  
                  <CardBody className={`card group flex flex-col min-h-[320px] w-full h-full relative transition-all ${isDemo ? 'opacity-40 blur-[1px] grayscale-[30%]' : 'hover:border-transparent'}`}>
                    {/* Demo overlay badge */}
                    {isDemo && (
                      <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5 px-2 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/10">
                        <Lock className="w-3 h-3 text-muted" />
                        <span className="text-[10px] text-muted font-medium uppercase tracking-wider">Coming Soon</span>
                      </div>
                    )}
                    
                    <motion.div variants={cardVariants} className="flex flex-col h-full">
                      {/* Icon centered at top */}
                      <CardItem translateZ={isDemo ? 0 : 60} className="flex justify-center mb-6 w-full">
                        <div className={`p-4 rounded-2xl ${colorClass}`}>
                          <IconComponent className="w-8 h-8" />
                        </div>
                      </CardItem>

                      {/* Title & Category centered */}
                      <CardItem translateZ={isDemo ? 0 : 40} className="text-center mb-4 w-full">
                        <h3 className={`text-lg font-semibold transition-colors mb-1 ${isDemo ? 'text-foreground/70' : 'text-foreground group-hover:text-accent'}`}>
                          {lab.title}
                        </h3>
                        <span className="text-xs text-muted capitalize px-2 py-0.5 rounded-full bg-surface-light">
                          {lab.category}
                        </span>
                      </CardItem>

                      {/* Description */}
                      <CardItem translateZ={isDemo ? 0 : 30} className="w-full flex-grow">
                        <p className="text-foreground-muted text-sm leading-relaxed text-center">
                          {lab.description}
                        </p>
                      </CardItem>

                      {/* Skills/Tools used */}
                      <CardItem translateZ={isDemo ? 0 : 50} className="w-full mt-auto pt-4">
                        <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-2">
                          {lab.skills.slice(0, 4).map((skill) => (
                            <span
                              key={skill}
                              className="px-2 py-1 text-xs rounded-md bg-surface-light text-muted border border-white/5"
                            >
                              {skill}
                            </span>
                          ))}
                        </motion.div>
                      </CardItem>

                      {/* GitHub Link - only for non-demo with githubUrl */}
                      {lab.githubUrl && !isDemo && (
                        <CardItem translateZ={60} className="w-full pt-4">
                          <motion.a
                            href={lab.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-accent/10 border border-accent/20 text-accent text-sm font-medium hover:bg-accent hover:text-white transition-all group/btn"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Github className="w-4 h-4" />
                            View Research
                            <ExternalLink className="w-3 h-3 opacity-0 -ml-1 group-hover/btn:opacity-100 group-hover/btn:ml-0 transition-all" />
                          </motion.a>
                        </CardItem>
                      )}
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
