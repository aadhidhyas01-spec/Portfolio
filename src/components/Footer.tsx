import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

const footerLinks = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "PROJECTS", href: "#projects" },
  { label: "CONTACT", href: "#contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-lavender/15 bg-aubergine py-12 text-porcelain">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 sm:flex-row sm:items-center sm:px-8">
        <div>
          <p className="font-display text-xl font-extrabold tracking-tight">
            AADHIDHYA<span className="text-citron">.S</span>
          </p>
          <p className="mt-1 text-sm text-porcelain/70">
            &ldquo;Designed with curiosity. Built with code.&rdquo;
          </p>
          <p className="mt-2 font-mono text-xs text-lavender/70">
            &copy; {year} NEO-ORCHID EDITION &middot; THE INNOVATION STUDIO
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6">
          <ul className="flex flex-wrap items-center gap-5">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-mono text-xs font-semibold tracking-widest text-porcelain/75 transition-colors hover:text-citron"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <motion.a
            href="#home"
            whileHover={{ y: -3 }}
            aria-label="Back to top"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-lavender/25 bg-blackberry text-citron transition-colors hover:border-citron"
          >
            <ArrowUp className="h-4 w-4" />
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
