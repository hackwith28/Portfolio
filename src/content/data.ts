import type { LucideIcon } from "lucide-react";
import {
  BookOpenCheck,
  Brain,
  BriefcaseBusiness,
  Cpu,
  Database,
  Gamepad2,
  Globe,
  GraduationCap,
  Layers3,
  PenTool,
  Rocket,
  Sparkles,
  Swords,
  Wrench
} from "lucide-react";

export type Skill = {
  name: string;
  level: number; // 0-100
  highlight?: boolean;
};

export type SkillGroup = {
  title: string;
  icon: LucideIcon;
  description: string;
  skills: Skill[];
};

export type ExperienceItem = {
  title: string;
  org: string;
  location: string;
  period: string;
  tags: string[];
  bullets: string[];
  certificateUrl?: string;
};

export type Project = {
  slug: string;
  name: string;
  period: string;
  oneLiner: string;
  story: string[];
  tech: string[];
  stats: { label: string; value: string }[];
  links: { demo?: string; github?: string };
  type: "fullstack" | "ai" | "game" | "tools";
  accent: "purple" | "cyan" | "violet";
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend Engineering",
    icon: Layers3,
    description: "Component systems, interaction design, performance, accessibility.",
    skills: [
      { name: "React", level: 86, highlight: true },
      { name: "JavaScript", level: 84, highlight: true },
      { name: "HTML/CSS", level: 82 },
      { name: "Tailwind CSS", level: 84, highlight: true }
    ]
  },
  {
    title: "Backend & APIs",
    icon: Cpu,
    description: "Pragmatic services, clean routes, real-time channels, correctness.",
    skills: [
      { name: "Node.js", level: 80, highlight: true },
      { name: "Express.js", level: 78, highlight: true },
      { name: "Java", level: 76 },
      { name: "WebSockets", level: 74 }
    ]
  },
  {
    title: "Databases",
    icon: Database,
    description: "Relational modeling + query thinking for real-world apps.",
    skills: [
      { name: "PostgreSQL", level: 78, highlight: true },
      { name: "MongoDB", level: 76, highlight: true },
      { name: "MySQL", level: 74 },
      { name: "SQL", level: 80, highlight: true }
    ]
  },
  {
    title: "CS Foundations",
    icon: Brain,
    description: "DSA, OOP, DBMS, OS, Networks — tuned for speed and clarity.",
    skills: [
      { name: "DSA", level: 88, highlight: true },
      { name: "OOP", level: 82 },
      { name: "DBMS", level: 78 },
      { name: "Operating Systems", level: 74 },
      { name: "Computer Networks", level: 72 }
    ]
  },
  {
    title: "Tools & Workflow",
    icon: Wrench,
    description: "Shipping mindset with clean git history and collaborative habits.",
    skills: [
      { name: "Git & GitHub", level: 80, highlight: true },
      { name: "Vite", level: 78 },
      { name: "Postman", level: 74 }
    ]
  },
  {
    title: "Communication",
    icon: PenTool,
    description: "Clear writing, SEO awareness, and technical storytelling.",
    skills: [
      { name: "Technical Writing", level: 82, highlight: true },
      { name: "SEO Fundamentals", level: 74 }
    ]
  }
];

export const experience: ExperienceItem[] = [
  {
    title: "In‑House Training (Mastering DSA)",
    org: "Chandigarh University",
    location: "Mohali, Punjab",
    period: "Jun 2025 — Jul 2025",
    tags: ["DSA", "Algorithms", "Optimization"],
    bullets: [
      "Built a stack-based text editor supporting undo/redo and 100+ operations with modular design.",
      "Implemented a trie-based autocomplete for efficient prefix search and low-latency suggestions.",
      "Measured and optimized operations to reduce response latency for core actions in practice tasks."
    ],
    certificateUrl:
      "https://drive.google.com/file/d/17RhmlR3NgRv1SpbEMKx5-xGQziGUegXw/view?usp=sharing"
  },
  {
    title: "Technical Content Writer",
    org: "Armus Digital",
    location: "Remote",
    period: "May 2024 — Aug 2024",
    tags: ["Technical writing", "SEO", "Content systems"],
    bullets: [
      "Produced 150+ technical content pieces including blog posts, website copy, API guides, and tutorials.",
      "Improved user understanding and engagement through crisp explanations and examples (+25% uplift reported).",
      "Applied SEO strategies across content to increase organic traffic and article visibility (+35%)."
    ],
    certificateUrl:
      "https://drive.google.com/file/d/1-p5N0IzvkXXLZS_rfIY4SQVvh6uuqk3o/view?usp=sharing"
  }
];

export const projects: Project[] = [
  {
    slug: "virtual-try-on",
    name: "Virtual Try‑On",
    period: "Mar 2026 — Apr 2026",
    oneLiner: "Realtime 2D outfit overlay using webcam + MediaPipe Holistic landmarks.",
    story: [
      "Built a live virtual try-on platform that overlays outfits on a user’s webcam stream with smooth alignment.",
      "Used MediaPipe Holistic to detect 540 full-body landmarks and derived stable anchor points for placement.",
      "Optimized the rendering loop to reduce jitter and improve perceived responsiveness."
    ],
    tech: ["React", "Tailwind", "MediaPipe Holistic", "Canvas"],
    stats: [
      { label: "Landmarks", value: "540" },
      { label: "Accuracy", value: "≈80%" },
      { label: "Mode", value: "Realtime" }
    ],
    links: { github: "https://github.com/hackwith28/Virtual_try_on" },
    type: "ai",
    accent: "cyan"
  },
  {
    slug: "rubiks-cube-solver",
    name: "Rubik’s Cube Solver",
    period: "Nov 2025 — Dec 2025",
    oneLiner: "Camera-based cube scanning + Kociemba solver with step-by-step visualization.",
    story: [
      "Created a real-time cube scanner to capture faces precisely and validate cube state before solving.",
      "Implemented Kociemba’s Two‑Phase algorithm with transparent step-by-step execution for learning.",
      "Delivered robust validation to ensure solvable states and improved reliability of the solver pipeline."
    ],
    tech: ["Node.js", "Express", "Cube.js", "HTML/CSS", "JavaScript"],
    stats: [
      { label: "Algorithm", value: "Kociemba" },
      { label: "Flow", value: "Scan → Solve" },
      { label: "UX", value: "Step visualizer" }
    ],
    links: {
      github: "https://github.com/hackwith28/Rubic_Cube_Solver",
      demo: "https://rubic-cube-solver.netlify.app/"
    },
    type: "tools",
    accent: "violet"
  },
  {
    slug: "doodle-duel",
    name: "Doodle Duel",
    period: "May 2025 — Jun 2025",
    oneLiner: "Realtime multiplayer sketch game with rooms, leaderboards, and collaboration.",
    story: [
      "Architected a realtime multiplayer sketch-and-guess game with user-generated rooms and host controls.",
      "Designed socket synchronization with time-based scoring + dynamic leaderboard updates.",
      "Supported 100+ players with ~90–120ms latency using optimized message delivery patterns."
    ],
    tech: ["React", "Tailwind", "Node.js", "Express", "WebSockets"],
    stats: [
      { label: "Players", value: "100+" },
      { label: "Latency", value: "90–120ms" },
      { label: "Reliability", value: "99%+" }
    ],
    links: {
      github: "https://github.com/hackwith28/doodle-duel",
      demo: "https://doddle-duel.netlify.app/"
    },
    type: "game",
    accent: "purple"
  }
];

export const competitive = {
  problemsSolved: 900,
  leetcodeRating: 1812,
  codeforcesTitle: "Pupil",
  codeforcesMaxRating: 1323,
  highlights: [
    "Solved 900+ DSA problems across multiple platforms with consistent upskilling.",
    "Comfortable under time pressure: patterns, complexity thinking, and clean implementations.",
    "Strong fundamentals in DS&A, OOP, DBMS, OS, and Computer Networks."
  ]
} as const;

export const achievements = [
  { icon: Rocket, title: "900+ DSA problems solved", detail: "Consistency-driven problem solving across core patterns." },
  { icon: Swords, title: "LeetCode rating 1812", detail: "Competitive performance with strong algorithmic fundamentals." },
  { icon: Sparkles, title: "2nd place — Algo Arena (DSA/OOP)", detail: "University-level competition performance." },
  { icon: Globe, title: "Hack-Tech core member", detail: "Promoted technical culture and awareness on campus." },
  { icon: BookOpenCheck, title: "Internal Hackathon — Round 2", detail: "Collaborated with a team to build an innovative solution." }
] as const;

export const certifications = [
  {
    title:
      "Secured 2nd place in Algo Arena – a DSA- and OOP-based university-level coding competition.",
    url: "https://drive.google.com/drive/folders/1b7Gt36lde7g_MBvhhbI9hRLdIu5ry4c5"
  },
  {
    title: "Microsoft-certified in Front‑End Development (Coursera)",
    url: "https://drive.google.com/file/d/1vitE9_8KSNd4y5_9FZrcaahFjkzxtHHz/view"
  },
  {
    title: "Certified in Data Structures and Algorithms (Infosys Springboard)",
    url: "https://drive.google.com/file/d/1PWrtK8W3sdze3FHRAyqOSexNtvvQft64/view?usp=sharing"
  },
  {
    title: "Completed certification in Blockchain and Its Applications (NPTEL)",
    url: "https://drive.google.com/file/d/1z0VW3W_A1mLqxIiq3kS10KpodBTh6Nhd/view?usp=sharing"
  }
] as const;

export const education = {
  school: "Chandigarh University",
  degree: "Bachelor of Engineering in Computer Science",
  cgpa: "8.11",
  location: "Mohali, Punjab",
  period: "Aug 2023 — Jun 2027",
  coursework: ["DSA", "DBMS", "Operating Systems", "Computer Networks", "OOP", "SQL"]
} as const;

export const currentlyLearning = [
  { icon: Database, title: "PostgreSQL performance", detail: "Indexes, query plans, and practical data modeling." },
  { icon: BriefcaseBusiness, title: "System design", detail: "Trade-offs, caching strategies, and scaling patterns." },
  { icon: Gamepad2, title: "Realtime architecture", detail: "Socket reliability and state sync patterns." }
] as const;

export const funFacts = [
  { icon: Brain, title: "DSA-first mindset", detail: "I reach for invariants and complexity before code." },
  { icon: PenTool, title: "Writer energy", detail: "I like code that reads like a good explanation." },
  { icon: GraduationCap, title: "Always learning", detail: "I iterate in small experiments with measurable outcomes." }
] as const;

export const testimonials = [
  {
    quote:
      "Reetesh combines algorithmic clarity with product thinking—he makes complex ideas feel approachable.",
    author: "Peer feedback",
    role: "Team collaborator"
  },
  {
    quote:
      "Strong ownership and communication. The way he breaks problems down is extremely effective.",
    author: "Workshop mentor",
    role: "Engineering mentor"
  }
] as const;

