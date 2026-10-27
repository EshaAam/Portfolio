// Mirrors assets/Esham_cv.tex. Keep in sync when the CV changes.

export const RESUME_PROJECTS = [
  {
    name: "InterviewIQ",
    subtitle: "AI-Powered Technical Interview Platform",
    githubUrl: "https://github.com/EshaAam/InterviewIQ",
    liveUrl: "https://interview-iq-blush-phi.vercel.app/",
    points: [
      "Built an AI interview platform using FastAPI, Next.js, PostgreSQL, Alembic, Redis and Celery, with an asynchronous, idempotent pipeline for résumé parsing, job-description gap analysis, question generation and report generation.",
      "Designed dual-pass grading that combines embedding similarity with LLM-as-a-Judge and sends disagreements to recruiter review, plus hybrid RAG (pgvector + full-text search, RRF) that grounds questions in cited sources.",
      "Made LLM calls more reliable with caching, circuit breakers and retries; added token budgets and cost tracking; shipped with Docker, GitHub Actions CI and automated tests, and reduced API latency.",
    ],
  },
  {
    name: "VibeShopping",
    subtitle: "Full-Stack E-Commerce Platform",
    githubUrl: "https://github.com/EshaAam/VibeShopping",
    liveUrl: "https://vibe-shopping-one.vercel.app/",
    points: [
      "Built and deployed an e-commerce platform using Next.js 15, TypeScript, Prisma and PostgreSQL, featuring Auth.js authentication with role-based access control.",
      "Integrated a stock-aware AI shopping assistant and a multi-provider checkout system with secure payment processing and order tracking.",
      "Developed an admin dashboard for product and order management with sales analytics, optimizing performance using React Server Components and granular cache revalidation.",
    ],
  },
  {
    name: "Wander Bangladesh",
    subtitle: "Interactive Travel Experience Platform",
    githubUrl: "https://github.com/EshaAam/wander-bangladesh",
    liveUrl: "https://wander-bangladesh.vercel.app/",
    points: [
      "Developed a modern travel platform using Next.js 16, React 19, TypeScript and Tailwind CSS.",
      "Designed a responsive, immersive user experience using reusable components, dynamic routing, optimized media rendering and smooth scroll-based interactions.",
    ],
  },
  {
    name: "E-Blog",
    subtitle: "Full-Stack Blogging Platform",
    githubUrl: "https://github.com/EshaAam/Full-Stack-Blog-App",
    points: [
      "Developed a MERN blogging platform with Clerk authentication, RESTful APIs, CRUD operations, React infinite scroll and role-based admin content management.",
    ],
  },
];

export const RESUME_SKILLS: { label: string; value: string }[] = [
  { label: "Languages", value: "C++, Java, JavaScript, Python, TypeScript, PHP" },
  {
    label: "Frameworks",
    value: "React.js, Next.js, Node.js, Express.js, FastAPI, Laravel, Tailwind CSS",
  },
  { label: "Databases", value: "PostgreSQL, MySQL, MongoDB, Redis" },
  {
    label: "Tools / Libraries",
    value: "Git, GitHub, GitHub Actions, Docker, Pytest, Vercel, Celery, Prisma, Alembic, Eloquent",
  },
  { label: "Concepts", value: "OOP, SOLID Principles, Design Patterns, REST APIs, WebSocket" },
  {
    label: "AI / LLM",
    value: "LLM Integration, RAG, Embeddings, LLM-as-a-Judge, Prompt Engineering",
  },
];
