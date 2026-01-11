"use client";

import { useRef, Suspense, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Float } from "@react-three/drei";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { staggerContainerSlow, fadeInUp } from "@/lib/motion";
import * as THREE from "three";

// Import react-icons
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiGit,
  SiGithub,
  SiVercel,
  SiDocker,
  SiLinux,
  SiLaravel,
  SiNginx,
  SiRedis,
  SiJest,
  SiPostman,
} from "react-icons/si";

// Skills data with icons
const SKILLS = [
  { name: "ReactJS", icon: SiReact, color: "#61DAFB" },
  { name: "NextJS", icon: SiNextdotjs, color: "#ffffff" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Motion", icon: SiFramer, color: "#FF0055" },
  { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
  { name: "NodeJS", icon: SiNodedotjs, color: "#339933" },
  { name: "ExpressJS", icon: SiExpress, color: "#ffffff" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
  { name: "Redis", icon: SiRedis, color: "#DC382D" },
  { name: "Jest", icon: SiJest, color: "#C21325" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#ffffff" },
  { name: "Vercel", icon: SiVercel, color: "#ffffff" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Nginx", icon: SiNginx, color: "#009639" },
  { name: "Linux", icon: SiLinux, color: "#FCC624" },
];

// Rows for display
const ROW_1 = SKILLS.slice(0, 6);
const ROW_2 = SKILLS.slice(6, 12);
const ROW_3 = SKILLS.slice(12, 17);
const ROW_4 = SKILLS.slice(17, 20);

// 3D Rotating Abstract Shape
function RotatingShape({ scrollProgress }: { scrollProgress: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const targetRotation = useRef({ x: 0, y: 0, z: 0 });

  useEffect(() => {
    targetRotation.current = {
      x: scrollProgress * Math.PI * 2,
      y: scrollProgress * Math.PI * 3,
      z: scrollProgress * Math.PI,
    };
  }, [scrollProgress]);

  useFrame(() => {
    if (meshRef.current) {
      // Smooth interpolation towards target rotation
      meshRef.current.rotation.x += (targetRotation.current.x - meshRef.current.rotation.x) * 0.1;
      meshRef.current.rotation.y += (targetRotation.current.y - meshRef.current.rotation.y) * 0.1;
      meshRef.current.rotation.z += (targetRotation.current.z - meshRef.current.rotation.z) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={meshRef} scale={2.2}>
        <torusKnotGeometry args={[1, 0.35, 200, 40, 2, 3]} />
        <MeshDistortMaterial
          color="#0a0a15"
          roughness={0.15}
          metalness={0.95}
          distort={0.25}
          speed={1.5}
        />
      </mesh>
    </Float>
  );
}

// Skill Badge Component
function SkillBadge({ skill, index }: { skill: typeof SKILLS[0]; index: number }) {
  const Icon = skill.icon;
  
  return (
    <motion.div
      variants={fadeInUp}
      custom={index}
      whileHover={{ scale: 1.05, y: -2 }}
      className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#1a1a2e]/80 border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all cursor-default"
    >
      <Icon className="w-5 h-5" style={{ color: skill.color }} />
      <span className="text-sm font-medium text-foreground">{skill.name}</span>
    </motion.div>
  );
}

/**
 * Skills section - Displays technical skills with 3D rotating element
 * Features scroll-based rotation and skill badges
 */
export function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setProgress(latest);
  });

  return (
    <SectionWrapper id="skills" className="flex items-center">
      <div ref={containerRef} className="max-w-6xl mx-auto w-full py-20">
        {/* 3D Canvas */}
        <div className="relative h-[300px] mb-8">
          <Suspense fallback={<div className="w-full h-full flex items-center justify-center"><div className="loader" /></div>}>
            <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
              <ambientLight intensity={0.4} />
              <directionalLight position={[10, 10, 5]} intensity={1.2} />
              <pointLight position={[-10, -10, -5]} intensity={0.4} color="#8b5cf6" />
              <pointLight position={[10, -10, 5]} intensity={0.3} color="#3b82f6" />
              <RotatingShape scrollProgress={progress} />
            </Canvas>
          </Suspense>
        </div>

        {/* Title */}
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-muted mb-4">MY SKILLSET</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-foreground">The Magic </span>
            <span className="italic bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Behind
            </span>
          </h2>
        </div>

        {/* Skill Badges */}
        <motion.div
          variants={staggerContainerSlow}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col items-center gap-4"
        >
          {/* Row 1 */}
          <div className="flex flex-wrap justify-center gap-3">
            {ROW_1.map((skill, index) => (
              <SkillBadge key={skill.name} skill={skill} index={index} />
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex flex-wrap justify-center gap-3">
            {ROW_2.map((skill, index) => (
              <SkillBadge key={skill.name} skill={skill} index={index + 6} />
            ))}
          </div>

          {/* Row 3 */}
          <div className="flex flex-wrap justify-center gap-3">
            {ROW_3.map((skill, index) => (
              <SkillBadge key={skill.name} skill={skill} index={index + 12} />
            ))}
          </div>

          {/* Row 4 */}
          <div className="flex flex-wrap justify-center gap-3">
            {ROW_4.map((skill, index) => (
              <SkillBadge key={skill.name} skill={skill} index={index + 17} />
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
