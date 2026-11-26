import { motion } from "framer-motion";
import { profile } from "../data/profile";

const markerColors: Record<string, string> = {
  electric: "bg-citron ring-aubergine/15 border-2 border-aubergine",
  coral: "bg-papaya ring-papaya/25",
  teal: "bg-lavender ring-lavender/35",
  gold: "bg-aubergine ring-aubergine/15",
};

export function Journey() {
  return (
    <section id="journey" className="bg-porcelain pb-24 pt-8 text-aubergine sm:pb-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-14 max-w-3xl"
        >
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-blackberry">
            ACT 05B // THE JOURNEY
          </span>
          <h2 className="section-display mt-3 font-extrabold text-aubergine">
            Evolution of a Technology Enthusiast
          </h2>
        </motion.div>

        <div className="relative pl-8 sm:pl-12">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            style={{ originY: 0 }}
            className="absolute bottom-2 left-3 top-2 w-0.5 bg-gradient-to-b from-aubergine via-papaya to-blackberry sm:left-5"
          />

          <div className="space-y-5">
            {profile.journey.map((milestone, idx) => (
              <motion.div
                key={milestone.step}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: idx * 0.04 }}
                className="relative"
              >
                <span
                  className={`absolute -left-[26px] top-6 h-4 w-4 rounded-full ring-8 sm:-left-[34px] ${
                    markerColors[milestone.accent] ?? markerColors.electric
                  }`}
                />
                <div className="rounded-2xl border border-aubergine/12 bg-softwhite p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-porcelain">
                  <span className="font-mono text-xs font-semibold uppercase tracking-widest text-papaya">
                    MILESTONE {milestone.step}
                  </span>
                  <h3 className="mt-1.5 font-display text-xl font-bold text-aubergine">
                    {milestone.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-aubergine/75">
                    {milestone.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
