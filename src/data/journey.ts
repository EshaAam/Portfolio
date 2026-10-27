import type { TimelineItem } from "@/types";

export const EXPERIENCE: TimelineItem[] = [
  {
    id: "data-limited",
    kind: "experience",
    title: "Software Engineering Intern",
    organization: "DATA Limited (IT Company of Savoy)",
    period: "Oct 2025 – Feb 2026",
    location: "Dhaka, Bangladesh",
    status: "Completed",
    points: [
      "Developed full-stack ERP modules with Laravel, Next.js and MySQL, including secure REST APIs, authentication workflows and features for inventory, sales and transaction management.",
      "Gathered requirements through field visits with product stakeholders and produced SRS documents, ERD database models and interactive Figma prototypes.",
      "Integrated backend APIs with frontend components, implemented role-based access control and delivered an MVP through stakeholder demos and iterative feedback.",
    ],
    tags: ["Laravel", "Next.js", "MySQL", "REST APIs", "RBAC", "Figma"],
  },
];

export const EDUCATION: TimelineItem[] = [
  {
    id: "iut",
    kind: "education",
    title: "B.Sc. in Software Engineering",
    organization: "Islamic University of Technology (IUT)",
    period: "Aug 2022 – Sep 2026",
    location: "Gazipur, Bangladesh",
    status: "First Class · Graduated",
    logo: "/images/logos/iut.jpg",
    points: [
      "Co-authored two peer-reviewed papers on LLM evaluation (AACL-IJCNLP 2026, IEEE ICCIT 2025).",
      "Organized CodeRush Fest, an inter-university programming contest held at IUT.",
    ],
  },
  {
    id: "rajuk",
    kind: "education",
    title: "Higher Secondary Certificate (HSC)",
    organization: "Rajuk Uttara Model College",
    period: "2019 – 2021",
    location: "Dhaka, Bangladesh",
    status: "Completed",
    logo: "/images/logos/rajuk.png",
  },
];

export const ACHIEVEMENTS = [
  "Co-first author of BenHalluEval (AACL-IJCNLP 2026, Main Conference); co-author of an LLM evaluation study for medical QA (IEEE ICCIT 2025).",
  "Organized CodeRush Fest, an inter-university programming contest held at IUT.",
  "Solved 200+ programming problems on Codeforces and LeetCode.",
];
