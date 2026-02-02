// Navigation section type
export interface NavSection {
  id: string;
  label: string;
  href: string;
}

// Skill types
export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

// Project types
export interface ProjectHighlight {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  problem: string;
  solution: string;
  architecture?: string;
  challenges: string[];
  technologies: string[];
  highlights: ProjectHighlight[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  featured?: boolean;
}

// Lab/practical work types
export interface Lab {
  id: string;
  title: string;
  description: string;
  category: "security" | "networking" | "testing" | "devops" | "research";
  skills: string[];
  icon: string;
  githubUrl?: string;
  isDemo?: boolean;
}

// Social link types
export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

// About section bullet points
export interface AboutPoint {
  icon: string;
  text: string;
}
