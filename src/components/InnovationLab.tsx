import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Bot, Code2, Cpu, Eye, Microchip, Settings } from "lucide-react";

type LabDomain =
  | "AI AND MACHINE LEARNING"
  | "ROBOTICS"
  | "COMPUTER VISION"
  | "SOFTWARE DEVELOPMENT"
  | "EMBEDDED SYSTEMS";

const labExhibits: Record<
  LabDomain,
  {
    code: string;
    headline: string;
    description: string;
    tools: string[];
    projects: string[];
    accent: string;
    icon: typeof Bot;
  }
> = {
  "AI AND MACHINE LEARNING": {
    code: "OBJ-01",
    headline: "Intelligent Pattern Learning & Models",
    description:
      "Studying machine learning fundamentals and applying AI detection pipelines to turn raw data into actionable automated decisions.",
    tools: ["Python", "YOLO", "ML Fundamentals"],
    projects: ["CivicLens AI", "Algorithm & AI Study"],
    accent: "text-citron border-citron/40 bg-citron/10",
    icon: Bot,
  },
  ROBOTICS: {
    code: "OBJ-02",
    headline: "Autonomous Mobility & Manipulation",
    description:
      "Designing four-wheel collection vehicle concepts, 4-DOF robotic arm workflows, and physics-based simulations using ROS 2 Humble and Gazebo.",
    tools: ["ROS 2 Humble", "Gazebo", "SDF", "Motor Controllers"],
    projects: ["CivicLens AI", "ROS 2 and Gazebo Simulation"],
    accent: "text-papaya border-papaya/40 bg-papaya/10",
    icon: Settings,
  },
  "COMPUTER VISION": {
    code: "OBJ-03",
    headline: "Visual Perception & Object Detection",
    description:
      "Combining YOLO object detection with OpenCV frame processing for dustbin monitoring, target recognition, and multi-category waste sorting.",
    tools: ["YOLO", "OpenCV", "ESP32-CAM"],
    projects: ["CivicLens AI", "ESP32 Robotics Experiments"],
    accent: "text-lavender border-lavender/40 bg-lavender/10",
    icon: Eye,
  },
  "SOFTWARE DEVELOPMENT": {
    code: "OBJ-04",
    headline: "Structured Desktop & Web Applications",
    description:
      "Building database-connected JavaFX desktop apps, Flask web applications, and algorithmic problem-solving habits across Java, Python, C, and C++.",
    tools: ["Java", "JavaFX", "MySQL", "Flask", "HTML/CSS/JS"],
    projects: ["Smart Dairy Farming", "Campus Event Application"],
    accent: "text-citron border-citron/40 bg-citron/10",
    icon: Code2,
  },
  "EMBEDDED SYSTEMS": {
    code: "OBJ-05",
    headline: "Microcontroller Firmware & Hardware Control",
    description:
      "Bridging software and hardware through ESP32 and Arduino experiments, camera modules, motor drivers, LED control, and sensor integration.",
    tools: ["ESP32", "Arduino IDE", "Embedded C/C++", "Sensors"],
    projects: ["ESP32 Robotics Experiments", "CivicLens AI Hardware"],
    accent: "text-papaya border-papaya/40 bg-papaya/10",
    icon: Microchip,
  },
};

const domainOrder: LabDomain[] = [
  "AI AND MACHINE LEARNING",
  "ROBOTICS",
  "COMPUTER VISION",
  "SOFTWARE DEVELOPMENT",
  "EMBEDDED SYSTEMS",
];

const floatingSymbols = [
  { text: "{ }", x: "10%", y: "18%" },
  { text: "def infer():", x: "66%", y: "14%" },
  { text: "0xFF", x: "78%", y: "74%" },
  { text: "ROS2::Node", x: "12%", y: "78%" },
];

export function InnovationLab() {
  const [selected, setSelected] = useState<LabDomain>("AI AND MACHINE LEARNING");
  const shouldReduceMotion = useReducedMotion();
  const active = labExhibits[selected];
  const ActiveIcon = active.icon;

  return (
    <section
      id="lab"
      className="orchid-grid relative overflow-hidden border-y border-lavender/15 bg-blackberry/55 py-20 text-porcelain sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="mb-12 max-w-4xl"
        >
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-papaya">
            EXPERIMENTAL EXHIBITION // INNOVATION UNIVERSE
          </span>
          <h2 className="section-display mt-3 font-extrabold text-porcelain">
            MY MIND IS A <span className="text-citron">LABORATORY.</span>
          </h2>
          <p className="mt-3 text-base text-porcelain/75 sm:text-lg">
            Click any interactive object inside the exhibition to inspect how AI, vision, robotics,
            embedded hardware, and software connect.
          </p>
        </motion.div>

        <div className="grid items-center gap-10 lg:grid-cols-12">
          {/* Interactive Exhibition Canvas / Orbit Stage */}
          <div className="relative lg:col-span-6">
            <div className="relative mx-auto aspect-square max-w-[490px] overflow-hidden rounded-[2.5rem] border border-lavender/25 bg-aubergine p-6 shadow-orchid">
              {/* Animated SVG Circuits + Neural Links */}
              <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full" aria-hidden="true">
                <g stroke="#BDA7F8" strokeOpacity="0.18" strokeWidth="1.4" fill="none">
                  <circle cx="200" cy="200" r="148" strokeDasharray="6 6" />
                  <circle cx="200" cy="200" r="95" />
                  <path d="M40 90 H125 L155 120 H200" />
                  <path d="M360 310 H275 L245 280 H200" />
                  <path d="M45 305 H125 L155 270" />
                  <path d="M355 95 H275 L245 130" />
                </g>
                <circle cx="200" cy="200" r="32" fill="#382941" stroke="#D7F36A" strokeWidth="2" />
              </svg>

              {/* Floating Programming Symbols */}
              {floatingSymbols.map((sym, idx) => (
                <motion.span
                  key={sym.text}
                  style={{ left: sym.x, top: sym.y }}
                  animate={
                    shouldReduceMotion
                      ? undefined
                      : { y: [0, idx % 2 === 0 ? -6 : 6, 0] }
                  }
                  transition={{ duration: 3 + idx * 0.5, repeat: Infinity, ease: "easeInOut" }}
                  className="pointer-events-none absolute font-mono text-[11px] text-lavender/55"
                >
                  {sym.text}
                </motion.span>
              ))}

              {/* Center Rotating Mechanical / Core Icon */}
              <motion.div
                animate={shouldReduceMotion ? undefined : { rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-citron"
              >
                <Cpu className="h-8 w-8" />
              </motion.div>

              {/* Clickable Interactive Technology Nodes */}
              <div className="relative z-10 flex h-full w-full flex-col justify-between py-2">
                <div className="flex justify-between">
                  <button
                    type="button"
                    data-cursor="OPEN"
                    onClick={() => setSelected("AI AND MACHINE LEARNING")}
                    className={`rounded-2xl border px-3.5 py-2.5 text-left font-mono text-[11px] font-semibold transition-all ${
                      selected === "AI AND MACHINE LEARNING"
                        ? "border-citron bg-citron text-aubergine shadow-orchid"
                        : "border-lavender/25 bg-blackberry/90 text-porcelain hover:border-citron"
                    }`}
                  >
                    <span className="block text-[9px] opacity-70">01 // NODE</span>
                    AI &amp; ML
                  </button>

                  <button
                    type="button"
                    data-cursor="OPEN"
                    onClick={() => setSelected("COMPUTER VISION")}
                    className={`rounded-2xl border px-3.5 py-2.5 text-left font-mono text-[11px] font-semibold transition-all ${
                      selected === "COMPUTER VISION"
                        ? "border-lavender bg-lavender text-aubergine shadow-orchid"
                        : "border-lavender/25 bg-blackberry/90 text-porcelain hover:border-lavender"
                    }`}
                  >
                    <span className="block text-[9px] opacity-70">03 // NODE</span>
                    COMPUTER VISION
                  </button>
                </div>

                <div className="flex justify-center">
                  <button
                    type="button"
                    data-cursor="OPEN"
                    onClick={() => setSelected("ROBOTICS")}
                    className={`rounded-2xl border px-4 py-2.5 text-center font-mono text-[11px] font-semibold transition-all ${
                      selected === "ROBOTICS"
                        ? "border-papaya bg-papaya text-aubergine shadow-orchid"
                        : "border-papaya/35 bg-blackberry/90 text-porcelain hover:border-papaya"
                    }`}
                  >
                    <span className="block text-[9px] opacity-70">02 // ROBOTIC ARM</span>
                    ROBOTICS
                  </button>
                </div>

                <div className="flex justify-between">
                  <button
                    type="button"
                    data-cursor="OPEN"
                    onClick={() => setSelected("SOFTWARE DEVELOPMENT")}
                    className={`rounded-2xl border px-3.5 py-2.5 text-left font-mono text-[11px] font-semibold transition-all ${
                      selected === "SOFTWARE DEVELOPMENT"
                        ? "border-citron bg-citron text-aubergine shadow-orchid"
                        : "border-lavender/25 bg-blackberry/90 text-porcelain hover:border-citron"
                    }`}
                  >
                    <span className="block text-[9px] opacity-70">04 // NODE</span>
                    SOFTWARE DEV
                  </button>

                  <button
                    type="button"
                    data-cursor="OPEN"
                    onClick={() => setSelected("EMBEDDED SYSTEMS")}
                    className={`rounded-2xl border px-3.5 py-2.5 text-left font-mono text-[11px] font-semibold transition-all ${
                      selected === "EMBEDDED SYSTEMS"
                        ? "border-papaya bg-papaya text-aubergine shadow-orchid"
                        : "border-papaya/35 bg-blackberry/90 text-porcelain hover:border-papaya"
                    }`}
                  >
                    <span className="block text-[9px] opacity-70">05 // NODE</span>
                    EMBEDDED
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Exhibition Details Panel */}
          <div className="lg:col-span-6">
            <div className="mb-4 flex flex-wrap gap-2">
              {domainOrder.map((domain) => (
                <button
                  key={domain}
                  type="button"
                  onClick={() => setSelected(domain)}
                  className={`rounded-full px-3.5 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-wider transition-all ${
                    selected === domain
                      ? "bg-citron text-aubergine"
                      : "border border-lavender/20 bg-aubergine/75 text-porcelain/75 hover:border-citron"
                  }`}
                >
                  {domain}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={selected}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="rounded-[2rem] border border-lavender/25 bg-aubergine p-7 shadow-orchid sm:p-9"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="font-mono text-xs uppercase tracking-widest text-lavender">
                    EXHIBIT {active.code}
                  </span>
                  <span className={`rounded-2xl border p-2.5 ${active.accent}`}>
                    <ActiveIcon className="h-5 w-5" />
                  </span>
                </div>

                <h3 className="mt-4 font-display text-2xl font-extrabold text-porcelain sm:text-3xl">
                  {selected}
                </h3>
                <p className="mt-1 font-mono text-xs text-papaya">{active.headline}</p>

                <p className="mt-4 text-sm leading-relaxed text-porcelain/80 sm:text-base">
                  {active.description}
                </p>

                <div className="mt-6">
                  <p className="font-mono text-[11px] uppercase tracking-widest text-lavender/70">
                    Active Technologies
                  </p>
                  <div className="mt-2.5 flex flex-wrap gap-2">
                    {active.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full border border-lavender/25 bg-blackberry px-3 py-1 font-mono text-xs text-porcelain"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 border-t border-lavender/15 pt-5">
                  <p className="font-mono text-[11px] uppercase tracking-widest text-citron/80">
                    Connected Portfolio Work
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {active.projects.map((p) => (
                      <span
                        key={p}
                        className="rounded-full bg-citron/15 px-3 py-1 font-mono text-xs font-medium text-citron"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
