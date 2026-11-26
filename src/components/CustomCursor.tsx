import { useEffect, useState } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

export function CustomCursor() {
  const shouldReduceMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [cursorLabel, setCursorLabel] = useState("");
  const [isPressed, setIsPressed] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const ringX = useSpring(mouseX, { stiffness: 320, damping: 28, mass: 0.4 });
  const ringY = useSpring(mouseY, { stiffness: 320, damping: 28, mass: 0.4 });

  useEffect(() => {
    if (shouldReduceMotion) return;
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (!finePointer) return;

    setEnabled(true);
    document.documentElement.classList.add("has-custom-cursor");

    const onMove = (e: PointerEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const target = e.target as HTMLElement | null;
      const interactive = target?.closest("[data-cursor], a, button");
      const customText = interactive?.getAttribute("data-cursor") ?? "";
      setCursorLabel(customText || (interactive ? "•" : ""));
    };

    const onDown = () => setIsPressed(true);
    const onUp = () => setIsPressed(false);

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
    };
  }, [mouseX, mouseY, shouldReduceMotion]);

  if (!enabled) return null;

  const isExpanded = Boolean(cursorLabel && cursorLabel !== "•");

  return (
    <>
      <motion.div
        style={{ x: ringX, y: ringY }}
        animate={{
          width: isExpanded ? 68 : cursorLabel === "•" ? 40 : 28,
          height: isExpanded ? 68 : cursorLabel === "•" ? 40 : 28,
          scale: isPressed ? 0.85 : 1,
        }}
        transition={{ duration: 0.18 }}
        className="pointer-events-none fixed left-0 top-0 z-[90] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-citron/80 bg-citron/10 backdrop-blur-[1px] hidden md:flex"
        aria-hidden="true"
      >
        {isExpanded && (
          <span className="font-mono text-[10px] font-semibold tracking-wider text-citron">
            {cursorLabel}
          </span>
        )}
      </motion.div>

      <motion.div
        style={{ x: mouseX, y: mouseY }}
        className="pointer-events-none fixed left-0 top-0 z-[91] hidden h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-papaya md:block"
        aria-hidden="true"
      />
    </>
  );
}
