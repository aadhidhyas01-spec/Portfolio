import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, FolderGit2, X } from "lucide-react";
import {
  projectCategories,
  projects,
  type ProjectFilter,
  type ProjectItem,
  type ProjectTheme,
} from "../data/projects";

const themeStyles: Record<
  ProjectTheme,
  {
    card: string;
    title: string;
    desc: string;
    badge: string;
    status: string;
    chip: string;
    button: string;
    diagramBg: string;
  }
> = {
  civiclens: {
    card: "border-citron/35 bg-gradient-to-br from-blackberry via-aubergine to-aubergine text-porcelain",
    title: "text-porcelain",
    desc: "text-porcelain/80",
    badge: "bg-citron text-aubergine",
    status: "border-citron/35 bg-aubergine/80 text-citron",
    chip: "border-lavender/25 bg-blackberry/80 text-porcelain",
    button: "bg-citron text-aubergine hover:bg-porcelain",
    diagramBg: "border-citron/25 bg-aubergine/85",
  },
  dairy: {
    card: "border-lavender/50 bg-gradient-to-br from-porcelain via-porcelain to-lavender/35 text-aubergine",
    title: "text-aubergine",
    desc: "text-aubergine/80",
    badge: "bg-blackberry text-lavender",
    status: "border-aubergine/15 bg-softwhite text-aubergine",
    chip: "border-aubergine/15 bg-softwhite text-aubergine",
    button: "bg-aubergine text-citron hover:bg-blackberry",
    diagramBg: "border-aubergine/15 bg-softwhite",
  },
  campus: {
    card: "border-papaya/40 bg-gradient-to-br from-blackberry via-blackberry to-papaya/20 text-porcelain",
    title: "text-porcelain",
    desc: "text-porcelain/80",
    badge: "bg-papaya text-aubergine",
    status: "border-papaya/35 bg-aubergine/75 text-papaya",
    chip: "border-papaya/25 bg-aubergine/70 text-porcelain",
    button: "bg-papaya text-aubergine hover:bg-porcelain",
    diagramBg: "border-papaya/25 bg-aubergine/80",
  },
  esp32: {
    card: "border-citron/30 bg-aubergine text-porcelain",
    title: "text-citron",
    desc: "text-porcelain/80",
    badge: "bg-citron/15 text-citron border border-citron/40",
    status: "border-citron/30 bg-blackberry text-citron",
    chip: "border-citron/25 bg-blackberry text-citron",
    button: "bg-citron text-aubergine hover:bg-softwhite",
    diagramBg: "border-citron/25 bg-blackberry/80",
  },
  ros2: {
    card: "border-lavender/35 bg-gradient-to-tr from-blackberry via-aubergine to-lavender/20 text-porcelain",
    title: "text-lavender",
    desc: "text-porcelain/80",
    badge: "bg-lavender text-aubergine",
    status: "border-lavender/35 bg-aubergine/75 text-lavender",
    chip: "border-lavender/25 bg-blackberry/85 text-porcelain",
    button: "bg-lavender text-aubergine hover:bg-citron",
    diagramBg: "border-lavender/25 bg-aubergine/80",
  },
  algorithms: {
    card: "border-porcelain/20 bg-porcelain text-aubergine",
    title: "text-aubergine",
    desc: "text-aubergine/80",
    badge: "bg-aubergine text-porcelain",
    status: "border-papaya/40 bg-papaya/15 text-aubergine",
    chip: "border-aubergine/15 bg-softwhite text-aubergine",
    button: "bg-aubergine text-porcelain hover:bg-blackberry",
    diagramBg: "border-aubergine/15 bg-softwhite",
  },
};

function ProjectIllustration({ theme }: { theme: ProjectTheme }) {
  if (theme === "civiclens") {
    return (
      <svg viewBox="0 0 360 155" className="h-full w-full" aria-hidden="true">
        <rect x="14" y="22" width="96" height="110" rx="14" fill="#382941" stroke="#D7F36A" strokeWidth="1.8" />
        <text x="26" y="46" fill="#D7F36A" fontSize="10" fontFamily="IBM Plex Mono, monospace">
          YOLO + OPENCV
        </text>
        <rect x="28" y="60" width="68" height="54" rx="8" fill="#1B1421" stroke="#BDA7F8" strokeDasharray="4 3" />
        <circle cx="62" cy="87" r="14" fill="#D7F36A" fillOpacity="0.25" stroke="#D7F36A" />

        <path d="M114 77 H144" stroke="#FF765E" strokeWidth="2" />
        <rect x="148" y="28" width="84" height="98" rx="14" fill="#382941" stroke="#FF765E" strokeWidth="1.8" />
        <text x="159" y="52" fill="#FF765E" fontSize="10" fontFamily="IBM Plex Mono, monospace">
          4-DOF ARM
        </text>
        <text x="159" y="106" fill="#F5F0E8" fontSize="9" fontFamily="IBM Plex Mono, monospace">
          ESP32 / ROS2
        </text>

        <path d="M236 77 H258" stroke="#BDA7F8" strokeWidth="2" />
        <rect x="262" y="20" width="84" height="114" rx="14" fill="#382941" stroke="#BDA7F8" strokeWidth="1.8" />
        <text x="272" y="44" fill="#BDA7F8" fontSize="9.5" fontFamily="IBM Plex Mono, monospace">
          3-BIN SORT
        </text>
        <rect x="274" y="56" width="60" height="16" rx="5" fill="#D7F36A" />
        <rect x="274" y="79" width="60" height="16" rx="5" fill="#FF765E" />
        <rect x="274" y="102" width="60" height="16" rx="5" fill="#BDA7F8" />
      </svg>
    );
  }

  if (theme === "esp32") {
    return (
      <svg viewBox="0 0 320 120" className="h-full w-full" aria-hidden="true">
        <rect x="20" y="24" width="110" height="72" rx="12" fill="#1B1421" stroke="#D7F36A" strokeWidth="1.8" />
        <text x="34" y="54" fill="#D7F36A" fontSize="11" fontFamily="IBM Plex Mono, monospace">
          ESP32-CAM
        </text>
        <text x="34" y="74" fill="#F5F0E8" fontSize="9" fontFamily="IBM Plex Mono, monospace">
          CAPTURE + LED
        </text>
        <path d="M134 60 H172" stroke="#D7F36A" strokeWidth="2" strokeDasharray="4 3" />
        <rect x="176" y="20" width="124" height="80" rx="12" fill="#1B1421" stroke="#BDA7F8" strokeWidth="1.8" />
        <text x="190" y="52" fill="#BDA7F8" fontSize="10.5" fontFamily="IBM Plex Mono, monospace">
          4-WHEEL CHASSIS
        </text>
        <circle cx="204" cy="82" r="8" fill="#D7F36A" />
        <circle cx="272" cy="82" r="8" fill="#D7F36A" />
      </svg>
    );
  }

  if (theme === "ros2") {
    return (
      <svg viewBox="0 0 320 120" className="h-full w-full" aria-hidden="true">
        <polygon points="85,20 135,48 135,92 85,112 35,92 35,48" fill="#382941" stroke="#BDA7F8" strokeWidth="1.8" />
        <text x="52" y="70" fill="#D7F36A" fontSize="10" fontFamily="IBM Plex Mono, monospace">
          SDF 3D
        </text>
        <path d="M142 64 H182" stroke="#D7F36A" strokeWidth="2" />
        <rect x="186" y="24" width="114" height="76" rx="12" fill="#1B1421" stroke="#FF765E" strokeWidth="1.8" />
        <text x="198" y="56" fill="#FF765E" fontSize="10" fontFamily="IBM Plex Mono, monospace">
          ROS 2 HUMBLE
        </text>
        <text x="198" y="74" fill="#F5F0E8" fontSize="9" fontFamily="IBM Plex Mono, monospace">
          GAZEBO SIM
        </text>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 320 120" className="h-full w-full" aria-hidden="true">
      <rect x="18" y="22" width="126" height="76" rx="12" fill="#382941" stroke="#BDA7F8" strokeWidth="1.5" />
      <rect x="32" y="38" width="84" height="10" rx="4" fill="#D7F36A" />
      <rect x="32" y="56" width="96" height="8" rx="4" fill="#F5F0E8" fillOpacity="0.45" />
      <rect x="32" y="72" width="68" height="8" rx="4" fill="#FF765E" />
      <path d="M148 60 H176" stroke="#FF765E" strokeWidth="2" />
      <rect x="180" y="22" width="120" height="76" rx="12" fill="#1B1421" stroke="#D7F36A" strokeWidth="1.5" />
      <text x="195" y="64" fill="#D7F36A" fontSize="10" fontFamily="IBM Plex Mono, monospace">
        {theme === "dairy" ? "JAVAFX / SQL" : theme === "campus" ? "JAVA / MYSQL" : "DSA / ALGO"}
      </text>
    </svg>
  );
}

function InteractiveProjectCard({
  project,
  index,
  spanTwo,
  onSelect,
}: {
  project: ProjectItem;
  index: number;
  spanTwo: boolean;
  onSelect: (p: ProjectItem) => void;
}) {
  const cardRef = useRef<HTMLElement | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, mx: "50%", my: "50%" });
  const style = themeStyles[project.theme];

  const handleMove = (e: React.PointerEvent<HTMLElement>) => {
    if (shouldReduceMotion || !cardRef.current || e.pointerType === "touch") return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setTilt({
      rx: (y / rect.height - 0.5) * -5,
      ry: (x / rect.width - 0.5) * 5,
      mx: `${x}px`,
      my: `${y}px`,
    });
  };

  return (
    <motion.article
      ref={cardRef}
      layout
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      onPointerMove={handleMove}
      onPointerLeave={() => setTilt({ rx: 0, ry: 0, mx: "50%", my: "50%" })}
      onClick={() => onSelect(project)}
      style={{
        transform: `perspective(900px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
        transition: "transform 0.2s ease",
      }}
      data-cursor="VIEW"
      className={`group relative flex cursor-pointer flex-col justify-between overflow-hidden rounded-[2rem] border p-7 shadow-orchid sm:p-9 ${
        style.card
      } ${spanTwo ? "lg:col-span-2" : ""}`}
    >
      {/* Soft Cursor-Following Spotlight */}
      <div
        aria-hidden="true"
        style={{
          background: `radial-gradient(380px circle at ${tilt.mx} ${tilt.my}, rgba(215, 243, 106, 0.14), transparent 60%)`,
        }}
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />

      <div className={`relative z-10 grid gap-7 ${spanTwo ? "lg:grid-cols-12 lg:items-center" : ""}`}>
        <div className={spanTwo ? "lg:col-span-7" : ""}>
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span
              className={`rounded-full px-3.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-widest ${style.badge}`}
            >
              PROJECT {project.number} &middot; {project.category}
            </span>
            <span
              className={`rounded-full border px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-wider ${style.status}`}
            >
              {project.status}
            </span>
          </div>

          <h3 className={`mt-5 font-display text-2xl font-extrabold sm:text-3xl ${style.title}`}>
            {project.title}
          </h3>

          {project.subtitle && (
            <p className="mt-1.5 font-mono text-xs font-medium text-papaya sm:text-sm">
              {project.subtitle}
            </p>
          )}

          <p className={`mt-3 text-sm leading-relaxed sm:text-base ${style.desc}`}>
            {project.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.technology.map((tech) => (
              <span
                key={tech}
                className={`rounded-full border px-3 py-1 font-mono text-xs font-medium ${style.chip}`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Decorative Conceptual Illustration */}
        <div className={spanTwo ? "lg:col-span-5" : "mt-5"}>
          <div className={`overflow-hidden rounded-2xl border p-2.5 transition-transform duration-300 group-hover:scale-[1.02] ${style.diagramBg}`}>
            <ProjectIllustration theme={project.theme} />
          </div>
          <p className="mt-1.5 text-right font-mono text-[10px] opacity-60">
            Conceptual system illustration
          </p>
        </div>
      </div>

      <div className="relative z-10 mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-current/15 pt-5">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onSelect(project);
          }}
          className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-wider transition-all ${style.button}`}
        >
          <span>Inspect Details</span>
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
        </button>

        <span className="inline-flex items-center gap-1.5 font-mono text-xs opacity-70">
          <FolderGit2 className="h-4 w-4" />
          <span>{project.githubUrl ? "GitHub Repo" : "Repository link editable"}</span>
        </span>
      </div>
    </motion.article>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<ProjectFilter>("ALL PROJECTS");
  const [selected, setSelected] = useState<ProjectItem | null>(null);

  useEffect(() => {
    const isOpen = Boolean(selected);
    window.dispatchEvent(new CustomEvent("studio:modal-toggle", { detail: isOpen }));
    document.body.style.overflow = isOpen ? "hidden" : "";
    document.documentElement.style.overflow = isOpen ? "hidden" : "";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    if (isOpen) {
      window.addEventListener("keydown", onKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      if (isOpen) {
        window.dispatchEvent(new CustomEvent("studio:modal-toggle", { detail: false }));
        document.body.style.overflow = "";
        document.documentElement.style.overflow = "";
      }
    };
  }, [selected]);

  const visibleProjects =
    filter === "ALL PROJECTS"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="orchid-grid bg-aubergine py-20 text-porcelain sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="max-w-2xl"
          >
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-citron">
              ACT 03 // THE BUILDER
            </span>
            <h2 className="section-display mt-3 font-extrabold text-porcelain">
              Digital Invention <span className="text-papaya">Gallery</span>
            </h2>
            <p className="mt-3 text-base text-porcelain/75 sm:text-lg">
              Each build is presented with its genuine current status &mdash; from AI vision &amp;
              ROS 2 prototypes to Java desktop applications and algorithm practice.
            </p>
          </motion.div>

          <div
            className="flex flex-wrap gap-2"
            role="group"
            aria-label="Filter projects by category"
          >
            {projectCategories.map((cat) => {
              const active = filter === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setFilter(cat)}
                  className={`rounded-full px-4 py-2 font-mono text-[11px] font-semibold uppercase tracking-wider transition-all ${
                    active
                      ? "bg-citron text-aubergine"
                      : "border border-lavender/25 bg-blackberry/70 text-porcelain/80 hover:border-citron hover:text-citron"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        <motion.div layout className="grid gap-7 lg:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, idx) => (
              <InteractiveProjectCard
                key={project.id}
                project={project}
                index={idx}
                spanTwo={Boolean(project.featured && filter === "ALL PROJECTS")}
                onSelect={setSelected}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            data-lenis-prevent
            className="fixed inset-0 z-[70] flex items-center justify-center overflow-y-auto overscroll-contain bg-aubergine/80 p-4 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 18 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              data-lenis-prevent
              className="flex max-h-[86vh] w-full max-w-2xl flex-col overflow-hidden rounded-[2rem] border border-lavender/30 bg-blackberry text-porcelain shadow-orchid"
            >
              {/* Fixed Modal Header so the X button never disappears while scrolling */}
              <div className="flex shrink-0 items-start justify-between gap-4 border-b border-lavender/20 bg-blackberry px-7 py-5 sm:px-9 sm:py-6">
                <div>
                  <span className="font-mono text-xs font-semibold uppercase tracking-widest text-citron">
                    PROJECT {selected.number} &middot; {selected.status}
                  </span>
                  <h3
                    id="project-modal-title"
                    className="mt-1.5 font-display text-2xl font-bold text-porcelain sm:text-3xl"
                  >
                    {selected.title}
                  </h3>
                  {selected.subtitle && (
                    <p className="mt-1 font-mono text-xs text-papaya">{selected.subtitle}</p>
                  )}
                </div>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelected(null);
                  }}
                  className="shrink-0 rounded-full border border-lavender/30 bg-aubergine p-2.5 text-porcelain transition-colors hover:border-papaya hover:bg-papaya hover:text-aubergine"
                  aria-label="Close project details"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Scrollable Modal Content */}
              <div
                data-lenis-prevent
                className="flex-1 overflow-y-auto overscroll-contain px-7 py-6 sm:px-9 sm:py-7"
              >
                <div className="overflow-hidden rounded-2xl border border-lavender/20 bg-aubergine p-3">
                  <ProjectIllustration theme={selected.theme} />
                </div>

                <p className="mt-5 text-base leading-relaxed text-porcelain/85">
                  {selected.description}
                </p>

                <div className="mt-6">
                  <h4 className="font-mono text-xs uppercase tracking-widest text-lavender">
                    Key Focus Areas &amp; Architecture
                  </h4>
                  <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                    {selected.features.map((feat) => (
                      <li
                        key={feat}
                        className="flex items-start gap-2 rounded-xl border border-lavender/15 bg-aubergine/80 px-3.5 py-2.5 text-sm text-porcelain"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-citron" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {selected.technology.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-citron/30 bg-aubergine px-3.5 py-1 font-mono text-xs font-medium text-citron"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
