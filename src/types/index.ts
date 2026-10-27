import type { IconType } from "react-icons";

// Navigation section
export interface NavSection {
  id: string;
  label: string;
}

// Social link
export interface SocialLink {
  name: string;
  url: string;
  icon: "github" | "linkedin" | "mail";
}

// Education / experience timeline entry
export interface TimelineItem {
  id: string;
  kind: "education" | "experience";
  title: string;
  organization: string;
  period: string;
  location: string;
  status?: string;
  logo?: string;
  points?: string[];
  tags?: string[];
}

// Project
export interface ProjectHighlight {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  technologies: string[];
  highlights: ProjectHighlight[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  /** Accent color used for glows and badges, as an RGB triplet ("16 185 129") */
  accent: string;
}

// Skills
export interface Skill {
  name: string;
  icon?: IconType;
  color?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: Skill[];
}

// Research publication
export interface Publication {
  id: string;
  title: string;
  shortTitle: string;
  venue: string;
  venueDetail: string;
  year: string;
  role: string;
  authors: string[];
  summary: string;
  contributions: string[];
  stats: ProjectHighlight[];
  tags: string[];
  links: { label: string; url: string }[];
}
