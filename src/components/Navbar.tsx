import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { profile } from "../data/profile";

const navItems = [
  { act: "ACT 01", label: "HOME", href: "#home" },
  { act: "ACT 02", label: "ABOUT", href: "#about" },
  { act: "ACT 03", label: "PROJECTS", href: "#projects" },
  { act: "ACT 04", label: "SKILLS & LAB", href: "#skills" },
  { act: "ACT 05", label: "JOURNEY", href: "#journey" },
  { act: "ACT 06", label: "CONTACT", href: "#contact" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const ids = ["home", "about", "projects", "skills", "journey", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -45% 0px" }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-lavender/15 bg-aubergine/85 backdrop-blur-lg">
        {/* Scroll Progress Bar */}
        <motion.div
          style={{ scaleX, transformOrigin: "0% 50%" }}
          className="h-[2.5px] w-full bg-gradient-to-r from-citron via-papaya to-lavender"
          aria-hidden="true"
        />

        <nav
          className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8"
          aria-label="Primary Navigation"
        >
          <a
            href="#home"
            data-cursor="HOME"
            className="group flex items-center gap-3 font-display text-xl font-extrabold tracking-tight text-porcelain sm:text-2xl"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-citron transition-transform duration-300 group-hover:scale-125" />
            <span>{profile.brandShort}</span>
            <span className="hidden rounded-full border border-lavender/25 bg-blackberry/80 px-2.5 py-0.5 font-mono text-[10px] font-medium uppercase tracking-widest text-lavender lg:inline-block">
              NEO-ORCHID
            </span>
          </a>

          <ul className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => {
              const id = item.href.slice(1);
              const isActive = activeId === id;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`group relative py-1.5 font-mono text-xs font-medium tracking-widest transition-colors ${
                      isActive ? "text-citron" : "text-porcelain/75 hover:text-porcelain"
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 rounded-full bg-citron transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            data-cursor="MENU"
            className="inline-flex items-center gap-2.5 rounded-full border border-lavender/25 bg-blackberry px-4 py-2 font-mono text-xs font-medium tracking-widest text-porcelain transition-colors hover:border-citron hover:text-citron"
            aria-expanded={menuOpen}
            aria-label="Toggle Navigation Drawer"
          >
            <span>MENU</span>
            {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </nav>
      </header>

      {/* Sliding Navigation Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-50 bg-aubergine/75 backdrop-blur-sm"
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 28 }}
              className="fixed bottom-0 right-0 top-0 z-[60] flex w-full max-w-md flex-col justify-between border-l border-lavender/20 bg-aubergine p-8 shadow-orchid"
              aria-label="Slide-out Menu"
            >
              <div>
                <div className="flex items-center justify-between border-b border-lavender/15 pb-5">
                  <span className="font-mono text-xs uppercase tracking-[0.25em] text-lavender">
                    NAVIGATION // 06 ACTS
                  </span>
                  <button
                    type="button"
                    onClick={() => setMenuOpen(false)}
                    className="rounded-full border border-lavender/25 bg-blackberry p-2 text-porcelain hover:border-citron hover:text-citron"
                    aria-label="Close Menu"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                <ul className="mt-8 space-y-2">
                  {navItems.map((item, idx) => (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + idx * 0.04 }}
                    >
                      <a
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className="group flex items-center justify-between rounded-2xl border border-transparent px-4 py-3.5 transition-all hover:border-lavender/20 hover:bg-blackberry"
                      >
                        <div className="flex items-center gap-4">
                          <span className="font-mono text-[11px] text-papaya">
                            {item.act}
                          </span>
                          <span className="font-display text-2xl font-bold text-porcelain group-hover:text-citron">
                            {item.label}
                          </span>
                        </div>
                        <ArrowUpRight className="h-5 w-5 text-lavender transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-citron" />
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-lavender/15 pt-5 font-mono text-xs text-lavender/80">
                <p>AADHIDHYA.S &middot; NEO-ORCHID STUDIO</p>
                <p className="mt-1 text-porcelain/60">AI, Computer Vision &amp; Robotics</p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
