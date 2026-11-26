export type ProjectTheme =
  | "civiclens"
  | "dairy"
  | "campus"
  | "esp32"
  | "ros2"
  | "algorithms";

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  subtitle?: string;
  category: "AI & ML" | "ROBOTICS" | "SOFTWARE" | "PROGRAMMING";
  description: string;
  features: string[];
  technology: string[];
  status: string;
  theme: ProjectTheme;
  featured?: boolean;
  githubUrl?: string;
}

export const projectCategories = [
  "ALL PROJECTS",
  "AI & ML",
  "ROBOTICS",
  "SOFTWARE",
  "PROGRAMMING",
] as const;

export type ProjectFilter = (typeof projectCategories)[number];

export const projects: ProjectItem[] = [
  {
    id: "civiclens-ai",
    number: "01",
    title: "CIVICLENS AI",
    subtitle:
      "Smart Automated Waste Management System Using AI Vision and Robotic Manipulation.",
    category: "AI & ML",
    description:
      "An intelligent waste-management concept combining AI vision, autonomous robotics, and automated waste segregation to improve urban cleanliness.",
    features: [
      "AI-based dustbin monitoring.",
      "YOLO and OpenCV object detection.",
      "ESP32-based hardware control.",
      "Autonomous four-wheel collection truck concept.",
      "Four-DOF robotic arm.",
      "Three-category waste segregation.",
      "Solar-powered smart-bin concept.",
      "ROS 2 and Gazebo simulation development.",
    ],
    technology: ["Python", "YOLO", "OpenCV", "ESP32", "ROS 2", "Gazebo"],
    status: "IN DEVELOPMENT / PROTOTYPE",
    theme: "civiclens",
    featured: true,
  },
  {
    id: "smart-dairy-farming",
    number: "02",
    title: "SMART DAIRY FARMING",
    category: "SOFTWARE",
    description:
      "A Java desktop application project exploring digital dairy farm management with a login interface and database connectivity.",
    features: [
      "JavaFX interface.",
      "MySQL integration.",
      "Login functionality.",
      "Maven project structure.",
    ],
    technology: ["Java", "JavaFX", "MySQL", "Maven"],
    status: "DEVELOPMENT / LEARNING PROJECT",
    theme: "dairy",
  },
  {
    id: "campus-event-app",
    number: "03",
    title: "CAMPUS EVENT APPLICATION",
    category: "SOFTWARE",
    description:
      "A Java application exploring campus event management, database connectivity, and authentication-related components.",
    features: [
      "Campus event records and coordination workflow.",
      "Relational database connectivity via MySQL.",
      "Authentication-related software components.",
    ],
    technology: ["Java", "MySQL"],
    status: "LEARNING / DEVELOPMENT",
    theme: "campus",
  },
  {
    id: "esp32-robotics-experiments",
    number: "04",
    title: "ESP32 ROBOTICS EXPERIMENTS",
    category: "ROBOTICS",
    description:
      "Hands-on embedded systems experiments involving motor control, camera capture, and hardware communication.",
    features: [
      "Four-wheel motor experiments.",
      "ESP32 development.",
      "ESP32-CAM image capture.",
      "LED control.",
      "Hardware-software integration.",
    ],
    technology: ["ESP32", "Arduino IDE", "Embedded C/C++"],
    status: "EXPERIMENTAL",
    theme: "esp32",
  },
  {
    id: "ros2-robot-simulation",
    number: "05",
    title: "ROS 2 AND GAZEBO SIMULATION",
    category: "ROBOTICS",
    description:
      "Exploring autonomous waste collection robot modelling and simulation using ROS 2 and Gazebo.",
    features: [
      "SDF robot modelling.",
      "Four-wheel robot concept.",
      "Robotic arm simulation concept.",
      "Autonomous movement workflow.",
    ],
    technology: ["ROS 2 Humble", "Gazebo", "SDF"],
    status: "IN DEVELOPMENT",
    theme: "ros2",
  },
  {
    id: "programming-algorithm-practice",
    number: "06",
    title: "PROGRAMMING AND ALGORITHM PRACTICE",
    category: "PROGRAMMING",
    description:
      "Continuous learning through programming challenges, algorithm implementation, and problem-solving exercises.",
    features: [
      "Data Structures and Algorithms.",
      "Java programming.",
      "Python programming.",
      "Sorting and searching algorithms.",
      "Dynamic programming.",
      "Graph algorithms.",
    ],
    technology: ["Python", "Java", "C", "C++", "DSA"],
    status: "CONTINUOUS LEARNING",
    theme: "algorithms",
  },
];
