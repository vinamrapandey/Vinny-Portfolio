export interface Project {
  slug: string;
  name: string;
  tagline: string;
  category: "AI" | "Web" | "Mobile";
  problem: string;
  approach: string;
  stack: string[];
  metric: string;
  liveUrl?: string;
  repoUrl?: string;
  status: "Live" | "In development";
  // TODO: replace with real version tags / ship dates from each project's actual release history.
  shipped: string;
}

export const projects: Project[] = [
  {
    slug: "blog-assist",
    name: "Blog Assist",
    tagline:
      "An autonomous agent that researches, writes, and publishes blog content on a schedule",
    category: "AI",
    problem: "Content teams burn hours per post on research and drafting.",
    approach:
      "Multi-threaded scheduler running independently of Streamlit's rerun cycle; dual LLM support (Gemini + OpenAI); WordPress publishing integration.",
    stack: ["Python", "Streamlit", "Gemini API", "OpenAI API", "WordPress REST API"],
    metric: "100+ daily active users",
    liveUrl: "https://blogassist.streamlit.app",
    status: "Live",
    shipped: "v1.0 — 2024",
  },
  {
    slug: "hireultra",
    name: "HireUltra",
    tagline:
      "AI-powered candidate sourcing and match scoring across LinkedIn and the open web",
    category: "AI",
    problem: "Manual resume screening doesn't scale past a handful of roles.",
    approach:
      "Tiered sourcing (free DuckDuckGo → Serper X-Ray search → LinkedIn API), JD parsing, match scoring with visual tags.",
    stack: ["Python", "Streamlit", "Serper API", "PyPDF", "Pandas"],
    metric: "87% match accuracy",
    liveUrl: "https://hireultra.streamlit.app",
    status: "Live",
    shipped: "v1.0 — 2024",
  },
  {
    slug: "transpent",
    name: "Transpent",
    tagline:
      "Offline-first ledger app for small shop owners tracking customer credit and supplier bills",
    category: "Mobile",
    problem:
      "Small, often women-led, shops in low-connectivity areas have no reliable way to track credit without internet access.",
    approach:
      "Local-first storage via Room/SQLite, MVVM architecture, CSV export.",
    stack: ["Kotlin", "Jetpack Compose", "Room/SQLite"],
    metric: "Distributed via GitHub releases, active development",
    // TODO: add the real repo URL once confirmed.
    status: "In development",
    shipped: "v0.x — In development",
  },
  {
    slug: "mimries",
    name: "Mimries",
    tagline:
      "An edge-native platform for instant, branded guest galleries at live events — no app download required",
    category: "Web",
    problem:
      "Event hosts want a shared, curated photo experience without forcing guests through app installs.",
    approach:
      "Guests submit via WhatsApp or direct upload; admin curates; gallery updates live. Built on Cloudflare's edge (Workers/Hono.js, D1, R2), Supabase auth, Next.js admin portal, vanilla JS guest app. English and Hindi supported.",
    stack: ["Cloudflare Workers", "Hono.js", "D1", "R2", "Supabase", "Next.js"],
    metric: "Validated through a live production deployment for a real event",
    liveUrl: "https://mimries.com",
    status: "Live",
    shipped: "v1.0 — 2025",
  },
];
