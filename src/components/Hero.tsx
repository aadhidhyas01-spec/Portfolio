import { lazy, Suspense, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Github, Linkedin } from "lucide-react";
import { profile } from "../data/profile";
import { MagneticButton } from "./MagneticButton";

const HeroSculpture3D = lazy(() => import("./HeroSculpture3D"));

const headlineLines = [
  { prefix: "I", word: "CREATE.", accent: "text-citron" },
  { prefix: "I", word: "EXPLORE.", accent: "text-papaya" },
  { prefix: "I", word: "INNOVATE.", accent: "text-lavender" },
];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [githubNote, setGithubNote] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const timer = window.setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % profile.cyclingRoles.length);
    }, 2600);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="orchid-grid relative min-h-[calc(100vh-5rem)] overflow-hidden bg-aubergine py-14 sm:py-20"
    >
      {/* Composed Neo-Orchid Ambient Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-12 h-96 w-96 rounded-full bg-lavender/15 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-12 h-96 w-96 rounded-full bg-papaya/15 blur-[120px]"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-12">
        {/* Left Editorial Kinetic Typography */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mb-5 inline-flex items-center gap-3 rounded-full border border-lavender/25 bg-blackberry/80 px-4 py-1.5"
          >
            <span className="h-2 w-2 rounded-full bg-citron" />
            <span className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-lavender">
              ACT 01 // THE INTRODUCTION
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: -14 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="font-mono text-sm font-semibold uppercase tracking-[0.22em] text-papaya sm:text-base"
          >
            HELLO, I&apos;M AADHIDHYA.S
          </motion.p>

          {/* Line-by-line Kinetic Clip-Mask Reveal */}
          <h1 className="hero-display mt-4 font-bold">
            {headlineLines.map((line, idx) => (
              <span key={line.word} className="block overflow-hidden py-0.5">
                <motion.span
                  initial={shouldReduceMotion ? { y: 0, opacity: 1 } : { y: "105%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.55,
                    delay: 0.16 + idx * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="inline-block"
                >
                  <span className="text-porcelain">{line.prefix} </span>
                  <span className={line.accent}>{line.word}</span>
                </motion.span>
              </span>
            ))}
          </h1>

          {/* Cycling Role Tag */}
          <div className="mt-6 flex h-9 items-center gap-3">
            <span className="font-mono text-xs text-lavender/65">STATUS //</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={profile.cyclingRoles[roleIndex]}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="rounded-full border border-citron/35 bg-blackberry px-3.5 py-1 font-mono text-xs font-medium tracking-wider text-citron"
              >
                {profile.cyclingRoles[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-porcelain/80 sm:text-lg"
          >
            Artificial Intelligence and Machine Learning student exploring the intersection of
            intelligent software, computer vision, robotics, and creative engineering.
          </motion.p>

          {/* Magnetic Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <MagneticButton>
              <a
                href="#projects"
                data-cursor="EXPLORE"
                className="group inline-flex items-center gap-2.5 rounded-full bg-citron px-7 py-4 font-mono text-xs font-semibold uppercase tracking-widest text-aubergine shadow-orchid transition-transform hover:scale-[1.03]"
              >
                <span>EXPLORE PROJECTS</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </MagneticButton>

            <MagneticButton>
              <a
                href="#contact"
                data-cursor="CONNECT"
                className="inline-flex items-center gap-2 rounded-full border border-lavender/35 bg-blackberry/80 px-7 py-4 font-mono text-xs font-semibold uppercase tracking-widest text-porcelain transition-colors hover:border-papaya hover:text-papaya"
              >
                <span>LET&apos;S CONNECT</span>
              </a>
            </MagneticButton>
          </motion.div>

          {/* Social Chips */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-lavender/20 bg-blackberry/60 px-4 py-2 font-mono text-xs text-porcelain/85 transition-colors hover:border-citron hover:text-citron"
            >
              <Linkedin className="h-3.5 w-3.5 text-lavender" />
              <span>LinkedIn</span>
            </a>

            <button
              type="button"
              onClick={() => setGithubNote((prev) => !prev)}
              className="inline-flex items-center gap-2 rounded-full border border-lavender/20 bg-blackberry/60 px-4 py-2 font-mono text-xs text-porcelain/85 transition-colors hover:border-papaya hover:text-papaya"
            >
              <Github className="h-3.5 w-3.5 text-papaya" />
              <span>{githubNote ? "Set URL in profile.ts" : "GitHub (Editable)"}</span>
            </button>
          </div>
        </div>

        {/* Right Interactive 3D Abstract Neo-Orchid Sculpture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="relative lg:col-span-5"
        >
          <div
            data-cursor="3D ORB"
            className="relative mx-auto aspect-square max-w-[460px] overflow-hidden rounded-[2.5rem] border border-lavender/25 bg-gradient-to-br from-blackberry/90 via-aubergine to-blackberry/70 p-4 shadow-orchid"
          >
            {/* Glassmorphic Ambient Rings */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-6 rounded-full border border-lavender/15"
            />
            <Suspense
              fallback={
                <div className="flex h-full w-full items-center justify-center font-mono text-xs text-lavender">
                  LOADING 3D SCULPTURE...
                </div>
              }
            >
              <HeroSculpture3D />
            </Suspense>

            {/* Floating Technical Labels */}
            <span className="pointer-events-none absolute left-5 top-5 rounded-full border border-citron/35 bg-aubergine/80 px-3 py-1 font-mono text-[10px] tracking-widest text-citron backdrop-blur-md">
              NEURAL CORE // 3D
            </span>
            <span className="pointer-events-none absolute bottom-5 right-5 rounded-full border border-papaya/35 bg-aubergine/80 px-3 py-1 font-mono text-[10px] tracking-widest text-papaya backdrop-blur-md">
              MOVE CURSOR TO ORBIT
            </span>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="mt-12 flex justify-center">
        <a
          href="#about"
          className="inline-flex flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-lavender/70 transition-colors hover:text-citron"
        >
          <span>SCROLL INTO ACT 02</span>
          <motion.span
            animate={shouldReduceMotion ? undefined : { y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
          >
            <ArrowDown className="h-4 w-4" />
          </motion.span>
        </a>
      </div>
    </section>
  );
}
