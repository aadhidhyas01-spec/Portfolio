import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Code, Cpu, Flame } from "lucide-react";
import { profile } from "../data/profile";

function AnimatedCounter({
  target,
  suffix,
}: {
  target: number;
  suffix: string;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let rafId = 0;
    const start = performance.now();
    const duration = 1000;

    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {value.toLocaleString()}
      {suffix}
    </span>
  );
}

const cardThemes = {
  electric: "border-aubergine/15 bg-aubergine text-citron",
  coral: "border-papaya/35 bg-softwhite text-papaya",
  teal: "border-lavender/50 bg-blackberry text-lavender",
};

const highlights = [
  {
    icon: Flame,
    title: "AI and innovation hackathon participation",
    desc: "Collaborating to transform experimental AI concepts into rapid working prototypes.",
    badge: "bg-papaya/15 text-papaya",
  },
  {
    icon: Code,
    title: "Continuous programming practice",
    desc: "Consistent algorithmic problem solving across Java, Python, C, and C++.",
    badge: "bg-aubergine text-citron",
  },
  {
    icon: Cpu,
    title: "Hands-on robotics experiments",
    desc: "Testing ESP32 motor controllers, ESP32-CAM capture, and ROS 2 / Gazebo simulations.",
    badge: "bg-lavender/30 text-aubergine",
  },
];

export function Achievements() {
  return (
    <section className="porcelain-grid bg-porcelain py-20 text-aubergine sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-3xl"
        >
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-papaya">
            ACT 05A // SMALL STEPS, BIG PROGRESS
          </span>
          <h2 className="section-display mt-3 font-extrabold text-aubergine">
            Verified Learning Milestones
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {profile.achievements.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              whileHover={{ y: -5 }}
              className={`rounded-[2rem] border p-8 shadow-porcelain ${cardThemes[item.accent]}`}
            >
              <div className="flex items-center justify-between">
                <Award className="h-6 w-6" />
                <span className="font-mono text-[10px] uppercase tracking-widest opacity-65">
                  VERIFIED RECORD
                </span>
              </div>
              <p className="mt-5 font-display text-5xl font-extrabold tracking-tight sm:text-6xl">
                <AnimatedCounter target={item.value} suffix={item.suffix} />
              </p>
              <p
                className={`mt-3 text-base font-medium ${
                  item.accent === "coral" ? "text-aubergine/80" : "text-porcelain/85"
                }`}
              >
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {highlights.map((hl, idx) => {
            const Icon = hl.icon;
            return (
              <motion.div
                key={hl.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="rounded-2xl border border-aubergine/10 bg-softwhite p-6 shadow-sm"
              >
                <div className={`inline-flex rounded-xl p-2.5 ${hl.badge}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-aubergine">{hl.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-aubergine/75">{hl.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
