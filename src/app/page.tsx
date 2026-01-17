"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { ParticleBackground } from "@/components/ui/Particles";
import { Preloader } from "@/components/ui/Preloader";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Labs } from "@/components/sections/Labs";
import { Journey } from "@/components/sections/Journey";
import { Contact } from "@/components/sections/Contact";
import { Resume } from "@/components/sections/Resume";

/**
 * Main portfolio page
 * Single-page layout with all sections
 */
export default function Home() {
  return (
    <>
      {/* Preloader shown on initial load */}
      <Preloader />

      {/* Particle background effect */}
      <ParticleBackground />

      {/* Fixed navigation */}
      <Navbar />

      {/* Main content */}
      <main className="relative">
        <Hero />
        <About />
        <Journey />
        <Projects />
        <Skills />
        <Labs />
        <Resume />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Scroll to top button */}
      <ScrollToTop />
    </>
  );
}
