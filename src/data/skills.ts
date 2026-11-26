export interface SkillGroup {
  id: string;
  title: string;
  subtitle: string;
  cardClass: string;
  chipClass: string;
  dotClass: string;
  iconBgClass: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: "programming",
    title: "PROGRAMMING",
    subtitle: "Core problem-solving & systems languages",
    cardClass: "border-citron/30 bg-blackberry/80 text-porcelain",
    chipClass: "border-citron/25 bg-aubergine/75 text-porcelain",
    dotClass: "bg-citron",
    iconBgClass: "bg-citron text-aubergine",
    skills: ["Python", "Java", "C", "C++", "SQL"],
  },
  {
    id: "aiml",
    title: "AI AND MACHINE LEARNING",
    subtitle: "Computer vision & intelligent perception",
    cardClass: "border-papaya/35 bg-blackberry/80 text-porcelain",
    chipClass: "border-papaya/30 bg-aubergine/75 text-porcelain",
    dotClass: "bg-papaya",
    iconBgClass: "bg-papaya text-aubergine",
    skills: [
      "YOLO",
      "OpenCV",
      "Computer Vision",
      "Machine Learning Fundamentals",
    ],
  },
  {
    id: "robotics",
    title: "ROBOTICS AND EMBEDDED SYSTEMS",
    subtitle: "Microcontrollers, simulation & hardware control",
    cardClass: "border-lavender/35 bg-blackberry/80 text-porcelain",
    chipClass: "border-lavender/30 bg-aubergine/75 text-porcelain",
    dotClass: "bg-lavender",
    iconBgClass: "bg-lavender text-aubergine",
    skills: [
      "ESP32",
      "Arduino",
      "ROS 2 Humble",
      "Gazebo",
      "Sensors",
      "Motor Controllers",
    ],
  },
  {
    id: "development",
    title: "DEVELOPMENT",
    subtitle: "Web apps, desktop interfaces & databases",
    cardClass: "border-porcelain/25 bg-porcelain text-aubergine",
    chipClass: "border-aubergine/15 bg-softwhite text-aubergine",
    dotClass: "bg-papaya",
    iconBgClass: "bg-aubergine text-citron",
    skills: ["HTML", "CSS", "JavaScript", "Flask", "JavaFX", "MySQL"],
  },
  {
    id: "tools",
    title: "TOOLS",
    subtitle: "Daily engineering & workflow environment",
    cardClass: "border-lavender/25 bg-blackberry/60 text-porcelain",
    chipClass: "border-lavender/20 bg-aubergine/80 text-porcelain",
    dotClass: "bg-citron",
    iconBgClass: "bg-lavender/20 text-lavender",
    skills: ["Git", "GitHub", "VS Code", "Eclipse", "MySQL Workbench"],
  },
];
