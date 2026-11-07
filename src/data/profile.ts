// NOTE: Email and social links are still placeholders — update them when ready.
export const profile = {
  name: "Raksash",
  role: "Senior Full Stack Engineer",
  intro:
    "9+ years building enterprise-grade systems with Java, Spring Boot, React and Next.js. I design scalable microservices, high-volume payment platforms and clean frontends, and in my own time I ship apps and games end to end.",
  email: "hello@raksash.dev",
  /**
   * AdMob publisher ID (AdMob → Settings → Account information), e.g. "pub-1234567890123456".
   * When set, /app-ads.txt is served for the Play Store / App Store listings. Empty means it returns 404.
   */
  admobPublisherId: "",
  socials: [
    { label: "GitHub", href: "https://github.com/" },
    { label: "LinkedIn", href: "https://linkedin.com/" },
    { label: "X / Twitter", href: "https://x.com/" },
  ],
};

export type JourneyStep = {
  period: string;
  title: string;
  text: string;
  highlights?: string[];
  color: string;
};

export const journey: JourneyStep[] = [
  {
    period: "~4 years · Software Engineer",
    title: "Enterprise media advertising platform",
    text: "Worked on a platform that lets buyers and sellers purchase, manage and optimise traditional media campaigns.",
    highlights: [
      "Built Java / Spring Boot services and interactive React UIs",
      "Designed REST APIs for media planning, campaign management and financial workflows",
      "Built a web-forms module for data capture, validation and workflow automation",
      "Improved financial control, auditability and reporting across media transactions",
    ],
    color: "from-pink-500 to-rose-500",
  },
  {
    period: "3 years · Product Development Engineer",
    title: "Product Platform-as-a-Service",
    text: "Helped build a platform that accelerates enterprise product development across the full lifecycle: definition, design, build, deploy and monitor.",
    highlights: [
      "Built secure, scalable Spring Boot microservices and React frontends",
      "Built executive dashboards for real-time business metrics and project health",
      "Integrated CI/CD pipelines and DevSecOps practices",
      "Contributed to AIOps monitoring, release automation and value stream management",
    ],
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    period: "Now · Senior Software Engineer",
    title: "High-scale cross-border payments",
    text: "Own a payments platform handling 2M+ transactions a day across 50+ countries at 99.99% availability.",
    highlights: [
      "Split a legacy monolith into 12+ microservices: 75% faster releases, 5× transaction scalability",
      "Built a real-time PostgreSQL ↔ Oracle sync layer so new and legacy systems could run side by side",
      "Own a transaction status handler processing 1M+ webhook events a day",
      "Lead FMEA sessions and define the modernisation roadmap with architects and stakeholders",
    ],
    color: "from-cyan-400 to-blue-500",
  },
  {
    period: "Side projects",
    title: "Shipping my own apps & games",
    text: "Outside work I design and ship products end to end, across mobile, web, browser extensions and game engines.",
    highlights: [
      "Ghoomyo: store booking platform on Android, iOS and web",
      "ScamMeTwice + ScamSafe: scam reports with in-Google warnings",
      "Rann: a 2.5D fighter with rollback netcode, built in Godot 4",
      "Poof: a 2–12 player phone-to-phone party game",
    ],
    color: "from-amber-400 to-orange-500",
  },
];

export const skills = [
  {
    group: "Backend",
    color: "from-violet-500 to-indigo-500",
    items: ["Java", "Spring Boot", "Microservices", "REST APIs", "Hibernate / JPA", "Kafka", "Node.js", "Fastify", "Golang"],
  },
  {
    group: "Frontend & mobile",
    color: "from-pink-500 to-fuchsia-500",
    items: ["React", "Next.js", "Angular", "TypeScript", "JavaScript", "Tailwind CSS", "React Native / Expo"],
  },
  {
    group: "Data",
    color: "from-cyan-400 to-blue-500",
    items: ["PostgreSQL", "Oracle", "SQL", "Prisma", "ETL"],
  },
  {
    group: "Architecture",
    color: "from-fuchsia-400 to-rose-500",
    items: ["Event-driven", "Design patterns", "SOLID", "Multithreading", "DSA", "FMEA"],
  },
  {
    group: "Game dev",
    color: "from-amber-400 to-orange-500",
    items: ["Godot 4", "GDScript", "Rollback netcode", "WebRTC / ENet", "WebSockets"],
  },
  {
    group: "DevOps & quality",
    color: "from-emerald-400 to-teal-500",
    items: ["Docker", "Kubernetes", "CI/CD", "Git", "Vercel", "TDD", "JUnit / Mockito", "Vitest"],
  },
];

export const homeSections = [
  { id: "journey", label: "Journey" },
  { id: "products", label: "Products" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];
