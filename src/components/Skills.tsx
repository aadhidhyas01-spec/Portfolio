import { motion } from "framer-motion";
import { Brain, Code2, Cpu, Layers, Wrench } from "lucide-react";
import { skillGroups } from "../data/skills";

const groupIcons = {
  programming: Code2,
  aiml: Brain,
  robotics: Cpu,
  development: Layers,
  tools: Wrench,
} as const;

export function Skills() {
  return (
    <section id="skills" className="bg-aubergine py-20 text-porcelain sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="mb-12 max-w-3xl"
        >
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-lavender">
            ACT 04 // THE TECHNOLOGIST
          </span>
          <h2 className="section-display mt-3 font-extrabold text-porcelain">
            Technology <span className="text-citron">Universe</span>
          </h2>
          <p className="mt-3 text-base text-porcelain/75 sm:text-lg">
            Core languages, AI vision frameworks, robotics hardware, and software tools I work with.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, idx) => {
            const Icon = groupIcons[group.id as keyof typeof groupIcons] ?? Code2;
            return (
              <motion.article
                key={group.id}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                whileHover={{ y: -5 }}
                className={`rounded-[1.85rem] border p-7 shadow-orchid transition-all ${group.cardClass} ${
                  idx === 4 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="mb-5 flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-mono text-xs font-bold tracking-widest">
                      {group.title}
                    </h3>
                    <p className="mt-1.5 text-sm opacity-75">{group.subtitle}</p>
                  </div>
                  <div className={`rounded-2xl p-2.5 ${group.iconBgClass}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 font-mono text-xs font-medium transition-transform hover:scale-105 ${group.chipClass}`}
                    >
                      <span className={`h-2 w-2 rounded-full ${group.dotClass}`} />
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
