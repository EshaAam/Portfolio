import type { NavSection, SocialLink } from "@/types";

export const SITE = {
  name: "Ekramul Esham",
  fullName: "Ekramul Alam Esham",
  shortName: "Esham",
  role: "Full Stack Software Engineer",
  roles: [
    "Full Stack Software Engineer",
    "Backend & Systems Builder",
    "AI / LLM Engineer",
    "NLP Researcher",
  ],
  tagline:
    "I build reliable, scalable backends and clean, fast frontends, and I publish research on evaluating large language models.",
  email: "ekramul.esham@gmail.com",
  phone: "+8801638802972",
  phoneDisplay: "+880 1638 802972",
  location: "Dhaka, Bangladesh",
  url: "https://ekramulesham.vercel.app",
  resumeUrl: "/resume.pdf",
  githubUsername: "EshaAam",
};

export const NAV_SECTIONS: NavSection[] = [
  { id: "about", label: "About" },
  { id: "journey", label: "Journey" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "research", label: "Research" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/EshaAam", icon: "github" },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ekramul-esham",
    icon: "linkedin",
  },
  { name: "Email", url: `mailto:${SITE.email}`, icon: "mail" },
];
