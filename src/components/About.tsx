import { motion } from "framer-motion";
import { GraduationCap, Lightbulb, MapPin, User, Wrench, Zap } from "lucide-react";
import { profile } from "../data/profile";

const pillars = [
  {
    code: "01",
    title: "THINK",
    description: "Exploring algorithms, artificial intelligence, and intelligent systems.",
    icon: Lightbulb,
    style: "border-aubergine/15 bg-softwhite text-aubergine",
    badge: "bg-aubergine text-citron",
  },
  {
    code: "02",
    title: "BUILD",
    description: "Developing applications, experimenting with hardware, and creating prototypes.",
    icon: Wrench,
    style: "border-papaya/30 bg-papaya/10 text-aubergine",
    badge: "bg-papaya text-softwhite",
  },
  {
    code: "03",
    title: "INNOVATE",
    description: "Turning technical knowledge and creative ideas into useful solutions.",
    icon: Zap,
    style: "border-lavender/50 bg-lavender/20 text-aubergine",
    badge: "bg-blackberry text-lavender",
  },
];

export function About() {
  return (
    <section
      id="about"
      className="porcelain-grid relative bg-porcelain py-20 text-aubergine sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="mb-14 max-w-4xl"
        >
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-papaya">
            ACT 02 // THE THINKER
          </span>
          <h2 className="section-display mt-3 font-extrabold text-aubergine">
            More Than Just{" "}
            <span className="underline decoration-papaya decoration-4 underline-offset-8">
              Lines of Code.
            </span>
          </h2>
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Creative Masked Portrait Frame */}
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(12% 0% 12% 0% round 2rem)" }}
            whileInView={{ opacity: 1, clipPath: "inset(0% 0% 0% 0% round 2rem)" }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-3 -rotate-2 rounded-[2.2rem] bg-gradient-to-tr from-lavender via-papaya/60 to-citron" />
              <div className="relative flex aspect-[4/5] flex-col items-center justify-center rounded-[2rem] border border-aubergine/15 bg-aubergine p-8 text-center text-porcelain shadow-porcelain">
                <div className="mb-5 flex h-28 w-28 items-center justify-center rounded-full border-2 border-citron bg-blackberry text-citron">
                  <User className="h-12 w-12" />
                </div>
                <p className="font-display text-2xl font-bold">AADHIDHYA.S</p>
                <p className="mt-1 font-mono text-xs uppercase tracking-widest text-lavender">
                  AI &amp; ML EXPLORER
                </p>
                <p className="mt-4 max-w-xs text-xs leading-relaxed text-porcelain/65">
                  Portrait frame ready &mdash; add your photo in{" "}
                  <code className="rounded bg-blackberry px-1.5 py-0.5 font-mono text-citron">
                    public/images/
                  </code>
                </p>

                <div className="mt-6 w-full rounded-2xl border border-lavender/20 bg-blackberry p-4 text-left">
                  <div className="flex items-start gap-3">
                    <GraduationCap className="mt-0.5 h-5 w-5 shrink-0 text-citron" />
                    <div>
                      <p className="text-sm font-bold text-porcelain">
                        {profile.education.institution}
                      </p>
                      <p className="text-xs text-porcelain/80">{profile.education.degree}</p>
                      <p className="mt-1 font-mono text-[11px] font-medium text-citron">
                        {profile.education.year}
                      </p>
                      <p className="mt-1 flex items-center gap-1 text-[11px] text-lavender/80">
                        <MapPin className="h-3 w-3" />
                        <span>{profile.education.location}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Editorial Bio + Think/Build/Innovate */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="space-y-6 lg:col-span-7"
          >
            <div className="space-y-4 text-base leading-relaxed text-aubergine/85 sm:text-lg">
              <p>
                I&apos;m Aadhidhya, a second-year Artificial Intelligence and Machine Learning
                student at <strong>Sri Eshwar College of Engineering, Coimbatore</strong>.
              </p>
              <p>
                I enjoy exploring how technology can solve real-world problems. From experimenting
                with embedded systems and robotics to developing software applications, I
                continuously challenge myself to learn, build, experiment, and improve.
              </p>
              <p className="font-display text-2xl font-bold text-blackberry">
                &ldquo;I believe every great innovation begins with curiosity.&rdquo;
              </p>
            </div>

            <div className="grid gap-4 pt-3 sm:grid-cols-3">
              {pillars.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.code}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    whileHover={{ y: -5 }}
                    className={`rounded-2xl border p-5 shadow-sm transition-shadow hover:shadow-porcelain ${item.style}`}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className={`rounded-full px-2.5 py-1 font-mono text-[10px] font-bold tracking-wider ${item.badge}`}
                      >
                        {item.code} &mdash; {item.title}
                      </span>
                      <Icon className="h-4 w-4 text-aubergine/75" />
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-aubergine/80">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
