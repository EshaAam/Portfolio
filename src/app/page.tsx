import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { ParticleBackground } from "@/components/ui/ParticleBackground";
import { Preloader } from "@/components/ui/Preloader";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Journey } from "@/components/sections/Journey";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Research } from "@/components/sections/Research";
import { Resume } from "@/components/sections/Resume";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Preloader />
      <ParticleBackground />
      <Navbar />

      <main className="relative">
        <Hero />
        <About />
        <Journey />
        <Projects />
        <Skills />
        <Research />
        <Resume />
        <Contact />
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}
