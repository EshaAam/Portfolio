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
public/
├── images/
│   ├── logos/           # Institution logos
│   └── projects/        # Project screenshots
├── portfolio-hero.svg   # Animated hero illustration (served as a plain <img>)
└── resume.pdf           # Downloadable CV
src/
├── app/                 # Root layout, page, global styles
├── components/
│   ├── layout/          # Navbar, Footer, ScrollToTop, MotionProvider
│   ├── projects/        # Project showcase pieces (preview, details, media)
│   ├── sections/        # Hero, About, Journey, Projects, Skills, Research, Resume, Contact
│   └── ui/              # Reusable primitives (Button, Section, Reveal, SpotlightCard, ...)
├── data/                # All portfolio content
├── hooks/               # useActiveSection + scroll helpers
├── lib/                 # motion presets, cn() utility
└── types/               # Shared TypeScript types
```

## Updating Content

All content lives in `src/data/`, so sections never need editing to change text:

| File | Contents |
|---|---|
| `site.ts` | Name, roles, tagline, contact info, nav sections, social links |
| `journey.ts` | Education, experience, achievements |
| `projects.ts` | Project showcase (order = display order) |
| `skills.ts` | Skill categories and logos |
| `research.ts` | Publications |
| `resume.ts` | Resume-specific project bullets and skill rows (mirrors `assets/Esham_cv.tex`) |

To update the downloadable CV, replace `public/resume.pdf`.

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
