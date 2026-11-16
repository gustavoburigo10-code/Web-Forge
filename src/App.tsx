import { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import ProjectShowcase from "./components/ProjectShowcase";
import CourseModules from "./components/CourseModules";
import Tools from "./components/Tools";
import Methodology from "./components/Methodology";
import Materials from "./components/Materials";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import { initScrollAnimations } from "./lib/anim";
import { initRevealSafety } from "./lib/revealSafety";

export default function App() {
  useEffect(() => {
    const cleanupReveals = initRevealSafety();
    const cleanup = initScrollAnimations();
    return () => {
      cleanup?.();
      cleanupReveals?.();
    };
  }, []);

  return (
    <div className="min-h-screen bg-ink text-chalk antialiased">
      <a
        href="#curso"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:border focus:border-silver focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-chalk"
      >
        Pular para o conteúdo
      </a>

      <Header />

      <main>
        <Hero />
        <About />
        <ProjectShowcase />
        <CourseModules />
        <Tools />
        <Methodology />
        <Materials />
        <Pricing />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}
