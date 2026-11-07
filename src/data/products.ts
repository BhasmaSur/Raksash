export type Category = "app" | "game";

export type Product = {
  slug: string;
  name: string;
  category: Category;
  emoji: string;
  /** Real app icon in /public/icons. `contain` for transparent icons that need padding; default `cover`. */
  icon?: { src: string; fit?: "cover" | "contain" };
  tagline: string;
  /** Short 1–2 sentence summary shown on cards */
  description: string;
  /** Full "what it does" paragraph shown on the detail page */
  overview?: string;
  /** Short highlight bullets */
  features: string[];
  /** "How it works" bullets shown on the detail page */
  howItWorks?: string[];
  /** "Why it's useful" paragraph shown on the detail page */
  why?: string;
  platforms?: string[];
  tech: string[];
  status: "Live" | "Beta" | "In development";
  /** Tailwind gradient stops, e.g. "from-pink-500 via-fuchsia-500 to-violet-500" */
  gradient: string;
  /** Accent text colour used on detail pages */
  accent: string;
  links?: { label: string; href: string }[];
};

export const products: Product[] = [
  {
    slug: "ghoomyo",
    icon: { src: "/icons/ghoomyo.png" },
    name: "Ghoomyo",
    category: "app",
    emoji: "🏪",
    tagline: "Book local stores in your own language.",
    description:
      "A booking and appointments platform that connects customers with local stores like tailors and salons, with a dashboard for store owners and an admin console.",
    overview:
      "Ghoomyo connects customers with local stores such as tailors and salons. Customers browse and search stores, look at their products, services, gallery and reviews, and book time slots, pickups, home visits and other order types. Store owners get a dashboard where they accept or reject bookings, set opening days and hours, manage their catalogue and gallery, and can approve some order types automatically. An admin console manages stores, categories, uploads and ads.",
    features: [
      "Time-slot, pickup and home-visit bookings",
      "Store dashboard with auto-approval per order type",
      "English, Hindi and Marathi",
      "Android, iOS and web from one backend",
    ],
    howItWorks: [
      "A single Next.js app serves the website and the /apis backend that the mobile app also uses.",
      "Every API request must be signed with an app-specific HMAC key, so only Ghoomyo's own apps can call the API. Customers, stores and admins get separate login tokens.",
      "Sign-up requires a verified email (6-digit codes with rate limits), and forgotten passwords are reset the same way.",
      "Bookings are tied to the store's calendar and time slots. Stores get push notifications and review each booking, or approve it automatically per order type.",
      "Admins can switch picture uploads, image links and the gallery on or off for each store, suspend accounts, and toggle ads site-wide.",
      "For development, the mobile app can switch between the live API, a local stand-in server and an in-memory fake backend.",
    ],
    why:
      "Small local businesses get online booking without building their own app. Customers stop calling or queueing and book in their own language. The hard parts, like time slots, approvals, notifications and reviews, are handled for both sides.",
    platforms: ["Android", "iOS", "Web"],
    tech: [
      "Expo SDK 57",
      "React Native 0.86",
      "React 19",
      "TypeScript",
      "Expo Router",
      "TanStack Query",
      "Expo Maps",
      "Expo Notifications",
      "Next.js 15",
      "Tailwind CSS 4",
      "PostgreSQL (raw SQL)",
      "JWT (jose)",
      "Cloudinary",
      "Brevo",
      "AdMob / AdSense",
      "Vercel",
    ],
    status: "Live",
    gradient: "from-orange-400 via-pink-500 to-rose-500",
    accent: "text-orange-300",
    links: [{ label: "Visit ghoomyo.in", href: "https://ghoomyo.in" }],
  },
  {
    slug: "scammetwice",
    icon: { src: "/icons/scammetwice.png", fit: "contain" },
    name: "ScamMeTwice",
    category: "app",
    emoji: "🛡️",
    tagline: "Report scams. Check before you pay.",
    description:
      "A community site for reporting and searching scams, plus the ScamSafe browser extension that flags reported businesses right inside Google Search and Maps.",
    overview:
      "ScamMeTwice is a community website where people report scams, such as fake taxis, fraudulent shops or tourist traps, and anyone can search them by description, place, tag or nearby location. The companion ScamSafe browser extension (Chrome and Safari) shows the warnings right inside Google Search and Google Maps: reported businesses get a red outline and a ! badge, and clicking the badge opens their latest reports.",
    features: [
      "Search by text, tag or nearby location",
      "ScamSafe warnings inside Google Search & Maps",
      "Moderation with a fair dispute process",
      "Public, rate-limited search API",
    ],
    howItWorks: [
      "Users verify their email, then post scams with photos, location and tags.",
      "Search uses PostgreSQL full-text search, matches the start of words (\"airp\" finds \"airport\"), filters by tags and ranks scams near the user higher. With no search text, it shows scams trending nearby.",
      "Admins moderate but don't post. New posts can wait for review before going public, and a notification bell keeps authors, reporters and admins up to date.",
      "Logged-in users can dispute a published scam with their side of the story. Admins accept or reject it with a reason, and accepting hides the scam.",
      "A public, rate-limited search API (/api/scams/search, /api/tags) lets other apps use the data.",
      "ScamSafe reads business names, phones, addresses and websites from Google pages, looks them up in batches, caches results (24h on a match, 6h on a miss) and never sends what the user searched for.",
    ],
    why:
      "Victims can warn others, and travellers and shoppers can check a business before paying. The extension puts that warning exactly where people decide, in Google Search and Maps, while the dispute process protects honest businesses from false reports.",
    platforms: ["Web", "Chrome", "Edge", "Safari"],
    tech: [
      "Next.js 16",
      "TypeScript",
      "Tailwind CSS 4",
      "Prisma 7",
      "PostgreSQL full-text search",
      "NextAuth v5",
      "Zod",
      "Cloudinary",
      "Brevo",
      "Recharts",
      "WXT (Manifest V3)",
      "Vitest",
    ],
    status: "Live",
    gradient: "from-emerald-400 via-teal-500 to-cyan-500",
    accent: "text-emerald-300",
  },
  {
    slug: "rann",
    icon: { src: "/icons/rann.png" },
    name: "Rann",
    category: "game",
    emoji: "⚔️",
    tagline: "Mythology meets Bollywood in a 2.5D fighter.",
    description:
      "An online 2.5D fighting game for Android, iOS and the browser with cross-play, rollback netcode and six characters drawn from Indian mythology and Bollywood.",
    overview:
      "Rann is a 2.5D fighting game for Android, iOS and the browser, and players on all three can fight each other online. It has six characters, each with its own mechanic: Kael has a rage meter, Mira switches between Tiger and Crane stances, Ravan the demon king has a Dashanan meter, Aswashthama is a fast rushdown fighter, and Tulbul Pandey and Bogembo are Bollywood-style characters. Play locally, against the CPU, in training mode, or in ranked matches online.",
    features: [
      "Cross-play between mobile and browser",
      "Rollback netcode that holds up on mobile",
      "Glicko-2 ranked matchmaking",
      "Training mode with frame data & hitboxes",
    ],
    howItWorks: [
      "All fight logic is a separate, deterministic, integer-only simulation with no state in 3D nodes, animations or physics. Online, the game predicts the opponent's input and, when the real input arrives, rewinds and replays frames in a few milliseconds.",
      "Netcode runs over ENet (UDP) on mobile and desktop and WebRTC in the browser.",
      "Each character's special mechanic is a pluggable StyleComponent, so adding a fighter doesn't mean rewriting the combat system.",
      "A Fastify + PostgreSQL server handles sign-up, email confirmation, password reset, profiles and ratings. Ranked matches update each player's Glicko-2 rating, and guests can play everything unranked.",
      "Training mode has frame-data and hitbox panels, and the dummy can record and play back inputs.",
    ],
    why:
      "It brings a fighting game with Indian-mythology and Bollywood characters to phones and browsers, with netcode that holds up on mobile connections, fair skill-based matchmaking and real training tools for serious players.",
    platforms: ["Android", "iOS", "Browser"],
    tech: [
      "Godot 4",
      "GDScript",
      "Rollback netcode",
      "ENet (UDP)",
      "WebRTC",
      "Node.js",
      "TypeScript",
      "Fastify",
      "PostgreSQL",
      "JWT + Argon2",
      "Zod",
      "Glicko-2",
      "Vitest",
    ],
    status: "Beta",
    gradient: "from-yellow-300 via-amber-500 to-red-500",
    accent: "text-amber-300",
  },
  {
    slug: "poof",
    icon: { src: "/icons/poof.png" },
    name: "Poof",
    category: "game",
    emoji: "💣",
    tagline: "Fling the bomb before the fuse runs out.",
    description:
      "A 2–12 player party game where you fling a bomb off your phone's screen onto a friend's. The swipe direction decides who gets it, and the fuse is hidden.",
    overview:
      "Poof is a party game for 2 to 12 players on Android and iOS. One player has a bomb on their screen. They tap it to add time to a hidden fuse, then fling it off the edge of their screen. Each phone's screen edge is secretly split into slices, one per other player, so the direction of your swipe decides who gets the bomb, and it flies onto their screen at the speed you threw it. When the fuse runs out, whoever has the bomb is out.",
    features: [
      "2–12 players, phones as a shared board",
      "Hidden fuse keeps the tension up",
      "Server-authoritative, so no cheating",
      "Fully offline vs 1–11 CPU bots",
    ],
    howItWorks: [
      "The server owns everything that matters: rooms with 4-letter join codes, the fuse timer, which slice leads to whom, and who is out. Phones only send taps and throws.",
      "Each tap adds a hidden 0.5–1.5 seconds to the fuse, which wraps back to 0 after 15 seconds, so nobody knows how long is left.",
      "Slices are reshuffled every round, and when someone is eliminated everyone sees which slice led to whom.",
      "The app runs the exact same rule code as the server, so Play vs CPU (1–11 bots, with difficulty) works fully offline.",
      "Tests check slice assignment for every group size from 2 to 12 over 300 random seeds, plus fuse logic, a full WebSocket round and CPU games.",
    ],
    why:
      "It's a quick, physical party game for groups in the same room. It turns phones into a shared game board with no extra hardware, works offline against bots, and earns money through ads.",
    platforms: ["Android", "iOS"],
    tech: [
      "Expo",
      "React Native",
      "Reanimated",
      "Gesture Handler",
      "React Native SVG",
      "Node.js",
      "TypeScript",
      "WebSockets (ws)",
      "Render",
      "AdMob",
    ],
    status: "Beta",
    gradient: "from-sky-400 via-violet-500 to-fuchsia-500",
    accent: "text-violet-300",
  },
];

export const getApps = () => products.filter((p) => p.category === "app");
export const getGames = () => products.filter((p) => p.category === "game");
export const getProduct = (category: Category, slug: string) =>
  products.find((p) => p.category === category && p.slug === slug);

export const productHref = (p: Product) =>
  `/${p.category === "app" ? "apps" : "games"}/${p.slug}`;
