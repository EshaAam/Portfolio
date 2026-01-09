import {
  NavSection,
  SkillCategory,
  Project,
  Lab,
  SocialLink,
  AboutPoint,
} from "@/types";

// Navigation sections
export const NAV_SECTIONS: NavSection[] = [
  { id: "hero", label: "Home", href: "#hero" },
  { id: "about", label: "About", href: "#about" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "labs", label: "Research", href: "#labs" },
  { id: "resume", label: "Resume", href: "#resume" },
  { id: "contact", label: "Contact", href: "#contact" },
];

// About section points
export const ABOUT_POINTS: AboutPoint[] = [
  {
    icon: "server",
    text: "Backend-first mindset — I design systems before writing code",
  },
  {
    icon: "shield",
    text: "Security-conscious development with RBAC, auth flows, and API protection",
  },
  {
    icon: "database",
    text: "Database design experience with MongoDB and MySQL optimization",
  },
  {
    icon: "code",
    text: "Clean, maintainable code with TypeScript and proper architecture",
  },
  {
    icon: "zap",
    text: "Performance-focused with caching strategies and query optimization",
  },
  {
    icon: "git-branch",
    text: "Version control discipline with meaningful commits and branching",
  },
];

// Skills categorized by responsibility
export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Backend",
    icon: "server",
    skills: [
      { name: "Node.js" },
      { name: "Laravel" },
      { name: "Express.js" },
      { name: "REST APIs" },
      { name: "GraphQL" },
      { name: "PHP" },
    ],
  },
  {
    title: "Frontend",
    icon: "layout",
    skills: [
      { name: "Next.js" },
      { name: "React" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Framer Motion" },
      { name: "HTML/CSS" },
    ],
  },
  {
    title: "Databases",
    icon: "database",
    skills: [
      { name: "MongoDB" },
      { name: "MySQL" },
      { name: "PostgreSQL" },
      { name: "Redis" },
      { name: "Prisma" },
      { name: "Mongoose" },
    ],
  },
  {
    title: "Testing & QA",
    icon: "check-circle",
    skills: [
      { name: "Jest" },
      { name: "Postman" },
      { name: "API Testing" },
      { name: "Load Testing" },
      { name: "Unit Testing" },
      { name: "Integration Tests" },
    ],
  },
  {
    title: "Security",
    icon: "shield",
    skills: [
      { name: "JWT/OAuth" },
      { name: "RBAC" },
      { name: "OWASP" },
      { name: "Encryption" },
      { name: "CORS/CSP" },
      { name: "Penetration Testing" },
    ],
  },
  {
    title: "DevOps & Tools",
    icon: "terminal",
    skills: [
      { name: "Git" },
      { name: "Docker" },
      { name: "Linux" },
      { name: "Nginx" },
      { name: "CI/CD" },
      { name: "VS Code" },
    ],
  },
];

// Projects data
export const PROJECTS: Project[] = [
  {
    id: "e-blog",
    title: "E-Blog - Personal Blogging Platform",
    subtitle: "Full-Stack MERN Application",
    problem:
      "Content creators need a reliable platform to publish, manage, and organize their blog posts with proper authentication and role-based access control.",
    solution:
      "Built a full-stack blogging platform with user authentication, CRUD operations, and favorite management. Implemented Clerk authentication (email, passkey, Google) with protected user and admin routes. Developed an admin dashboard for role-based content moderation and management.",
    architecture:
      "MERN stack with Clerk Auth integration. React frontend with Tailwind CSS, Express.js backend with MongoDB. Protected routes and role-based access control.",
    challenges: [
      "Implemented multi-provider authentication with Clerk (email, passkey, Google)",
      "Built protected user and admin routes with role verification",
      "Created admin dashboard for content moderation",
      "Designed favorite management system for user engagement",
    ],
    technologies: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Clerk Auth",
      "Tailwind CSS",
    ],
    highlights: [
      { label: "Auth Methods", value: "3" },
      { label: "User Roles", value: "Admin/User" },
      { label: "CRUD", value: "Full" },
      { label: "Stack", value: "MERN" },
    ],
    githubUrl: "https://github.com/EshaAam/Full-Stack-Blog-App",
    featured: true,
  },
  {
    id: "vibe-shopping",
    title: "VibeShopping - E-Commerce Platform",
    subtitle: "Modern Next.js E-Commerce (In Progress)",
    problem:
      "Modern e-commerce requires fast, SEO-friendly platforms with seamless user experience, secure payments, and efficient admin controls.",
    solution:
      "Developing a modern e-commerce platform with product listings, cart management, and admin controls. Implementing search, filtering, authentication, and secure payment workflows. Built with Next.js 15 and ShadCN UI; continuously deployed on Vercel.",
    architecture:
      "Next.js 15 with App Router, TypeScript for type safety, PostgreSQL with Prisma ORM, ShadCN UI components. Server components for optimal performance.",
    challenges: [
      "Building type-safe database queries with Prisma",
      "Implementing secure payment workflow integration",
      "Creating responsive admin dashboard",
      "Optimizing for SEO with Next.js App Router",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "ShadCN UI",
      "Vercel",
    ],
    highlights: [
      { label: "Framework", value: "Next.js 15" },
      { label: "Database", value: "PostgreSQL" },
      { label: "ORM", value: "Prisma" },
      { label: "Deploy", value: "Vercel" },
    ],
    githubUrl: "https://github.com/EshaAam/VibeShopping",
    featured: true,
  },
  {
    id: "gadget-mart",
    title: "GadgetMart - Multi-Vendor E-Commerce",
    subtitle: "Team Project - Marketplace Platform",
    problem:
      "Small vendors need a reliable marketplace to list products and manage orders while customers need secure browsing and purchasing experience.",
    solution:
      "Built a multi-vendor marketplace allowing verified shops to list products and manage orders. Enabled secure browsing, searching, and purchasing for customers. Implemented role-based authentication and password strength validation.",
    architecture:
      "MERN stack architecture with role-based access control. Vendor dashboard for product management, customer-facing storefront, and admin panel for marketplace oversight.",
    challenges: [
      "Designed multi-vendor product listing system",
      "Implemented secure order management workflow",
      "Built role-based authentication for vendors, customers, and admins",
      "Created password strength validation system",
    ],
    technologies: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Tailwind CSS",
    ],
    highlights: [
      { label: "Vendors", value: "Multi" },
      { label: "Roles", value: "3" },
      { label: "Type", value: "Team" },
      { label: "Stack", value: "MERN" },
    ],
    githubUrl: "https://github.com/EshaAam",
    featured: true,
  },
  {
    id: "api-testing-framework",
    title: "API Testing & Load Testing Framework",
    subtitle: "Automated API Quality Assurance",
    problem:
      "Manual API testing is time-consuming and inconsistent. Load testing is often skipped, leading to production performance issues. Teams need automated, repeatable testing pipelines.",
    solution:
      "Created a testing framework integrating unit tests, integration tests, and load tests. Features automated test generation from OpenAPI specs, performance benchmarking, and detailed reporting with trend analysis.",
    architecture:
      "Jest for unit tests, custom integration test runner, k6 for load testing. GitHub Actions integration for CI/CD. MongoDB for test result storage and trend tracking.",
    challenges: [
      "Built dynamic test generation from API documentation",
      "Implemented parallel test execution with isolated environments",
      "Created performance regression detection algorithms",
      "Designed clear visualization for complex test reports",
    ],
    technologies: [
      "Node.js",
      "Jest",
      "k6",
      "Docker",
      "GitHub Actions",
      "TypeScript",
    ],
    highlights: [
      { label: "Test Types", value: "4" },
      { label: "Max RPS", value: "10k+" },
      { label: "Metrics Tracked", value: "20+" },
      { label: "CI Integration", value: "Yes" },
    ],
    githubUrl: "https://github.com/EshaAam",
    featured: false,
  },
];

// Research
export const LABS: Lab[] = [
  {
    id: "llm-evaluation",
    title: "LLM Evaluation Research",
    description:
      "Published research on Large Language Model evaluation methodologies. Analyzed model performance metrics and evaluation frameworks.",
    category: "research",
    skills: ["LLM", "NLP", "Model Evaluation", "Pandas", "NumPy"],
    icon: "brain",
  },
  {
    id: "penetration-testing",
    title: "Web Application Penetration Testing",
    description:
      "Security testing using OWASP methodologies. Identified SQL injection, XSS, CSRF vulnerabilities in controlled environments.",
    category: "security",
    skills: ["Burp Suite", "OWASP ZAP", "SQL Injection", "XSS", "CSRF"],
    icon: "shield-alert",
  },
  {
    id: "network-security",
    title: "Network Security & Analysis",
    description:
      "Configured firewalls, VPNs, and IDS/IPS systems. Performed packet analysis and vulnerability assessments.",
    category: "networking",
    skills: ["Wireshark", "Nmap", "Firewall", "VPN", "IDS/IPS"],
    icon: "network",
  },
  {
    id: "container-security",
    title: "Container Security Practices",
    description:
      "Implemented secure Docker configurations and Kubernetes security policies. Built hardened container images.",
    category: "devops",
    skills: ["Docker", "Kubernetes", "Trivy", "Image Scanning", "RBAC"],
    icon: "box",
  },
];

// Social links
export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/EshaAam",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ekramul-esham-293a2829b/",
    icon: "linkedin",
  },
  {
    name: "Email",
    url: "mailto:ekramul.esham@gmail.com",
    icon: "mail",
  },
];

// Personal info
export const PERSONAL_INFO = {
  name: "Ekramul Esham",
  role: "Full Stack Developer",
  tagline: "Building robust systems with clean architecture",
  email: "ekramul.esham@gmail.com",
  location: "Bangladesh",
  resumeUrl: "/resume.pdf",
};
