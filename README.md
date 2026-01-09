# Portfolio - Next.js TypeScript

A modern, premium portfolio built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Particles**: tsParticles

## Features

- 🎨 Dark-mode first design
- ✨ Premium Framer Motion animations
- 📱 Fully responsive
- 🚀 Optimized performance
- ♿ Accessible navigation
- 🎯 Scroll-based section navigation
- 💫 Particle background effects

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Navigate to the project directory
cd portfolio-next

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout with fonts & metadata
│   ├── page.tsx         # Main portfolio page
│   └── globals.css      # Global styles & Tailwind
├── components/
│   ├── layout/          # Navbar, Footer, ScrollToTop
│   ├── sections/        # Hero, About, Skills, Projects, Labs, Contact
│   └── ui/              # Reusable UI components
├── hooks/               # Custom React hooks
├── lib/
│   ├── constants.ts     # Data & configuration
│   └── motion.ts        # Framer Motion variants
└── types/               # TypeScript type definitions
```

## Customization

### Personal Information

Edit `src/lib/constants.ts` to update:
- Name, role, tagline
- About section points
- Skills categories
- Project details
- Lab/practical work
- Social links

### Styling

- Colors: Modify `tailwind.config.ts`
- Animations: Adjust variants in `src/lib/motion.ts`
- Global styles: Edit `src/app/globals.css`

### Adding Projects

Add new projects to the `PROJECTS` array in `src/lib/constants.ts`:

```typescript
{
  id: "unique-id",
  title: "Project Title",
  subtitle: "Short description",
  problem: "The problem being solved",
  solution: "How you solved it",
  technologies: ["Tech1", "Tech2"],
  highlights: [{ label: "Metric", value: "100" }],
  githubUrl: "https://github.com/...",
  featured: true
}
```

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Other Platforms

The build output in `.next/` can be deployed to any Node.js hosting platform.

## License

MIT
