import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export function Preloader() {
  const shouldReduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(!shouldReduceMotion);

  useEffect(() => {
    if (shouldReduceMotion) {
      setVisible(false);
      return;
    }
    const timer = window.setTimeout(() => setVisible(false), 850);
    return () => window.clearTimeout(timer);
  }, [shouldReduceMotion]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -18 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-aubergine px-6"
          aria-hidden="true"
        >
          <div className="relative flex items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
              className="h-24 w-24 rounded-full border border-dashed border-lavender/50"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
              className="absolute h-16 w-16 rounded-full border-2 border-t-citron border-r-papaya border-b-transparent border-l-transparent"
            />
            <span className="absolute h-3 w-3 rounded-full bg-citron" />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="mt-6 font-display text-2xl font-extrabold tracking-tight text-porcelain"
          >
            AADHIDHYA<span className="text-citron">.S</span>
          </motion.p>

          <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.26em] text-lavender/80">
            NEO-ORCHID STUDIO
          </p>

          <div className="mt-5 h-0.5 w-48 overflow-hidden rounded-full bg-blackberry">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 0.78, ease: "easeInOut" }}
              className="h-full w-full bg-gradient-to-r from-citron via-papaya to-lavender"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
