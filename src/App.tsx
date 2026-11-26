import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { Preloader } from "./components/Preloader";
import { CustomCursor } from "./components/CustomCursor";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { InnovationLab } from "./components/InnovationLab";
import { Achievements } from "./components/Achievements";
import { Journey } from "./components/Journey";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

gsap.registerPlugin(ScrollTrigger);

export function App() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;

    const lenis = new Lenis({
      duration: 1.05,
      smoothWheel: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const onModalToggle = (e: Event) => {
      const open = (e as CustomEvent<boolean>).detail;
      if (open) {
        lenis.stop();
      } else {
        lenis.start();
      }
    };
    window.addEventListener("studio:modal-toggle", onModalToggle);

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".gsap-parallax").forEach((el) => {
        gsap.to(el, {
          y: -24,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    }, rootRef);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("studio:modal-toggle", onModalToggle);
      ctx.revert();
      lenis.destroy();
    };
  }, [shouldReduceMotion]);

  return (
    <div ref={rootRef} className="min-h-screen bg-aubergine text-porcelain">
      <Preloader />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <InnovationLab />
        <Achievements />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
