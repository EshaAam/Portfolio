"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, MapPin, Calendar } from "lucide-react";
import { SectionWrapper, SectionHeader } from "@/components/ui/SectionWrapper";
import { EDUCATION_DATA, EXPERIENCE_DATA, JourneyItem } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export function Journey() {
  return (
    <SectionWrapper id="journey">
      <SectionHeader
        title="My Journey"
        subtitle="My academic background and professional experience"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Education Column */}
        <div>
          <motion.div
            variants={fadeInUp}
            className="flex items-center gap-2 mb-6"
          >
            <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold">Education</h3>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {EDUCATION_DATA.map((item) => (
              <JourneyCard key={item.id} item={item} type="education" />
            ))}
          </motion.div>
        </div>

        {/* Experience Column */}
        <div>
          <motion.div
            variants={fadeInUp}
            className="flex items-center gap-2 mb-6"
          >
            <div className="p-2 rounded-lg bg-purple-500/10 text-purple-500">
              <Briefcase className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold">Experience</h3>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {EXPERIENCE_DATA.map((item) => (
              <JourneyCard key={item.id} item={item} type="experience" />
            ))}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}

function JourneyCard({ item, type }: { item: JourneyItem; type: "education" | "experience" }) {
  return (
    <motion.div
      variants={fadeInUp}
      className="group relative bg-surface hover:bg-surface-light border border-white/5 hover:border-white/10 p-6 rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
    >
      <div className="flex gap-4">
        {/* Logo or Icon */}
        <div className="shrink-0">
            {item.logo ? (
              <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-white">
                <Image
                  src={item.logo}
                  alt={item.subtitle}
                  fill
                  className="object-contain p-1"
                />
              </div>
            ) : (
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                type === 'education' ? 'bg-blue-500/10 text-blue-500' : 'bg-purple-500/10 text-purple-500'
              }`}>
                {type === 'education' ? <GraduationCap size={24} /> : <Briefcase size={24} />}
              </div>
            )}
        </div>

        <div className="flex-1 min-w-0">
            <div className="flex flex-wrap justify-between gap-2 mb-1">
                <h4 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors">
                    {item.title}
                </h4>
            </div>
            
            <p className="text-base font-medium text-foreground-muted mb-2">
                {item.subtitle}
            </p>

            <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-500 mb-3">
                <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {item.period}
                </span>
                {item.location && (
                    <span className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" />
                        {item.location}
                    </span>
                )}
            </div>

            {item.description && (
                <p className="text-sm text-slate-400 leading-relaxed">
                    {item.description}
                </p>
            )}
        </div>
      </div>
      
      {/* Decorative timeline line for desktop could go here, but keeping it simple card-based for now to ensure mobile responsiveness and clean look */}
    </motion.div>
  );
}
