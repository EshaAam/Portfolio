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
  { id: "journey", label: "Journey", href: "#journey" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "labs", label: "Research", href: "#labs" },
  { id: "resume", label: "Resume", href: "#resume" },
  { id: "contact", label: "Contact", href: "#contact" },
];

export interface JourneyItem {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  description?: string;
  logo?: string;
  location?: string;
}

export const EDUCATION_DATA: JourneyItem[] = [
  {
    id: "uni",
    title: "BSc Engineering in Software Engineering",
    subtitle: "Islamic University of Technology (IUT)",
    period: "2022 - Present",
    // description: "CGPA: 3.x/4.00", 
    location: "Gazipur, Bangladesh",
    logo: "/iut-logo.jpg"
  },
  {
    id: "college",
    title: "Higher Secondary Certificate",
    subtitle: "Rajuk Uttara Model College",
    period: "2019 - 2021",
    // description: "GPA: 5.00/5.00",
    location: "Dhaka, Bangladesh",
    logo: "/Rajuk-logo.png"
  },
];

export const EXPERIENCE_DATA: JourneyItem[] = [
  {
    id: "savoy",
    title: "Associate Software Engineer",
    subtitle: "Savoy Ice Cream",
    period: "2024 - Present", // Assuming current year based on user input, or just "Present"
    description: "Working on enterprise software solutions and optimizing internal systems.",
    location: "Dhaka, Bangladesh",
  },
];

// About section points
export const ABOUT_POINTS: AboutPoint[] = [
  {
    icon: "layout",
    text: "Systems-first approach — I focus on design, data flow, and responsibilities before implementation",
  },
  {
    icon: "server",
    text: "Backend-leaning full stack — Comfortable across APIs, auth flows, and frontend integration",
  },
  // {
  //   icon: "shield",
  //   text: "Security-aware development — Experience with RBAC, authentication flows, and protected routes",
  // },
  {
    icon: "database",
    text: "Database-focused thinking — Hands-on with MongoDB, MySQL, PostgreSQL schema design and optimization",
  },
  {
    icon: "code",
    text: "Clean, maintainable code — TypeScript, proper layering, and readable architecture",
  },
  // {
  //   icon: "zap",
  //   text: "Performance-conscious — Care about query efficiency, caching, and avoiding unnecessary complexity",
  // },
  {
    icon: "git-branch",
    text: "Version control discipline — Meaningful commits, clean history, and collaborative workflows",
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

// Projects data - Ordered by priority (Live projects first)
export const PROJECTS: Project[] = [
  {
    id: "vibe-shopping",
    title: "VibeShopping - E-Commerce Platform",
    subtitle: "Modern Next.js E-Commerce",
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
    liveUrl: "https://vibe-shopping-one.vercel.app/",
    image: "/vibeshopping.png",
    featured: true,
  },
  {
    id: "wander-bangladesh",
    title: "Wander Bangladesh - Travel Vlog",
    subtitle: "Cinematic Travel Storytelling Platform",
    problem:
      "Travel content often lacks immersive presentation. Users want to experience destinations visually before visiting, with engaging 3D scroll experiences and atmospheric design.",
    solution:
      "Built a premium, cinematic travel storytelling platform showcasing Bangladesh's breathtaking destinations through immersive 3D scroll experiences. Features spatial 3D cards, atmospheric transitions, and fluid scroll-driven animations with a dark editorial aesthetic.",
    architecture:
      "Next.js 16 with App Router, React 19, TypeScript, Tailwind CSS 4 for styling, Framer Motion for cinematic animations. Smart image fallback system with category-based recovery.",
    challenges: [
      "Implementing cinematic 3D scroll experiences with perspective transforms",
      "Building smart image fallback system with category-based recovery",
      "Creating atmospheric visual design with grain textures and particle systems",
      "Optimizing performance for smooth scroll-driven animations",
    ],
    technologies: [
      "Next.js",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Vercel",
    ],
    highlights: [
      { label: "Framework", value: "Next.js 16" },
      { label: "Animations", value: "3D Scroll" },
      { label: "Design", value: "Cinematic" },
      { label: "Deploy", value: "Vercel" },
    ],
    githubUrl: "https://github.com/EshaAam/wander-bangladesh",
    liveUrl: "https://wander-bangladesh.vercel.app/",
    image: "/wander_bangladesh.png",
    featured: true,
  },
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
];

// Research
export const LABS: Lab[] = [
  {
    id: "llm-evaluation",
    title: "LLM Evaluation Research",
    description:
      "Research on Large Language Model evaluation for Medical QnA using the Icliniq Dataset. Analyzed model performance metrics and evaluation frameworks.",
    category: "research",
    skills: ["LLM", "NLP", "Model Evaluation", "Pandas", "NumPy"],
    icon: "brain",
    githubUrl: "https://github.com/EshaAam/Evaluation_of_LLMs_on_Medical_QNA_based_on_Icliniq_Dataset-",
  },
  {
    id: "penetration-testing",
    title: "Web Application Penetration Testing",
    description:
      "Security testing using OWASP methodologies. Identified SQL injection, XSS, CSRF vulnerabilities in controlled environments.",
    category: "security",
    skills: ["Burp Suite", "OWASP ZAP", "SQL Injection", "XSS", "CSRF"],
    icon: "shield-alert",
    isDemo: true,
  },
  {
    id: "network-security",
    title: "Network Security & Analysis",
    description:
      "Configured firewalls, VPNs, and IDS/IPS systems. Performed packet analysis and vulnerability assessments.",
    category: "networking",
    skills: ["Wireshark", "Nmap", "Firewall", "VPN", "IDS/IPS"],
    icon: "network",
    isDemo: true,
  },
  {
    id: "container-security",
    title: "Container Security Practices",
    description:
      "Implemented secure Docker configurations and Kubernetes security policies. Built hardened container images.",
    category: "devops",
    skills: ["Docker", "Kubernetes", "Trivy", "Image Scanning", "RBAC"],
    icon: "box",
    isDemo: true,
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
