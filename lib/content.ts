// All site copy lives here. Add a project by appending to `projects`;
// drop its image/gif in public/images and point `media.src` at it.
// Add a life photo by appending to a group's `photos` in `lifeGroups`.

import { Dumbbell, type LucideIcon, MapPin, Plane, Spade, Swords } from "lucide-react"

export const site = {
  name: "James Hong",
  email: "j8hong@uwaterloo.ca",
  linkedin: "https://linkedin.com/in/james-hong-uw",
  github: "https://github.com/jameshjs",
  url: "https://jameshjs.github.io",
  booking: "https://cal.com/james-hong-anxaak/15min",
}

export type Job = {
  company: string
  role: string
  dates: string
  location: string
  current?: boolean
  // square-ish logo in public/images/logos; jobs without one show their initial
  logo?: string
  points: string[]
  stack: string[]
}

export const experience: Job[] = [
  {
    company: "Wealthsimple",
    logo: "/images/logos/wealthsimple.svg",
    role: "Software Engineer",
    dates: "Sept – Dec 2026",
    location: "Toronto",
    current: true,
    points: [
      "Developing promotion payout pipelines supporting 1M+ participants.",
      "Building a Claude context layer with Google ADK and MCP to speed up new promotion features.",
    ],
    stack: ["Python", "dbt", "Redshift", "Airflow", "MCP"],
  },
  {
    company: "Manulife",
    logo: "/images/logos/manulife.png",
    role: "Software Engineer",
    dates: "Jan – Apr 2026",
    location: "Toronto",
    points: [
      "Built PySpark + Databricks pipelines on Azure processing 500K+ records daily for LLM-driven email and lead-generation tools.",
      "Added intent detection and structured retrieval to an MCP-based multi-agent system, raising output accuracy by 60%.",
      "Refined a weighted lead allocation engine, lifting advisor conversion rates by 30% across 1,000+ leads.",
    ],
    stack: ["PySpark", "Databricks", "Azure OpenAI", "SQL"],
  },
  {
    company: "WatStreet",
    logo: "/images/logos/watstreet.png",
    role: "Software Engineer",
    dates: "Sept – Dec 2025",
    location: "Toronto",
    points: [
      "Built a Go API aggregator unifying third-party data sources into one endpoint, cutting response latency ~40%.",
      "Led a full production server migration: Nginx, PM2, backups, DNS and SSL/TLS on Linux.",
    ],
    stack: ["Go", "Nginx", "Linux", "MySQL"],
  },
  {
    company: "Food For Good",
    logo: "/images/logos/food-for-good.png",
    role: "Software Engineer",
    dates: "May – Aug 2025",
    location: "Toronto",
    points: [
      "Built Node.js/PostgreSQL features for a multilingual platform and tax reporting system serving 5,000+ users.",
      "Set up GitHub Actions CI/CD, cutting release times by 30%.",
    ],
    stack: ["Node.js", "PostgreSQL", "GitHub Actions", "Salesforce"],
  },
  {
    company: "Canadian Institute for Health Information",
    logo: "/images/logos/cihi.svg",
    role: "Software Engineer",
    dates: "Aug – Dec 2024",
    location: "Toronto",
    points: [
      "Built a PySpark/SQL pipeline over 100M+ records with 99.9% validation accuracy.",
      "Tuned distributed Spark jobs with partitioning and predicate pushdown, cutting query latency by 70%.",
    ],
    stack: ["PySpark", "SQL", "Spark"],
  },
]

export type Status = "Building" | "Shipped" | "Live" | "Concept"

export type Project = {
  slug: string
  name: string
  blurb: string
  status: Status
  stack: string[]
  featured?: boolean
  links?: { label: string; href: string }[]
  // image or gif in public/images, or a video link (YouTube, Loom, ...)
  media?: { type: "image" | "gif"; src: string; alt: string } | { type: "video"; href: string; poster?: string }
}

export const projects: Project[] = [
  {
    slug: "alloydb-gitops",
    name: "AlloyDB Omni GitOps",
    blurb:
      "Open-source GitOps architecture for declarative database lifecycle management on Kubernetes, with Argo CD workflows and multi-persona RBAC for platform engineers, DBAs and app developers.",
    status: "Building",
    stack: ["Kubernetes", "Argo CD", "PostgreSQL"],
    featured: true,
    links: [{ label: "GitHub", href: "https://github.com/jameshjs" }],
  },
  {
    slug: "algo-trading",
    name: "Algorithmic Trading System",
    blurb:
      "Modular trading system with a strategy engine, live market data over WebSockets, FastAPI REST + WS APIs, and Redis for real-time position caching.",
    status: "Shipped",
    stack: ["Python", "FastAPI", "Redis", "Docker"],
    featured: true,
    links: [{ label: "GitHub", href: "https://github.com/jameshjs" }],
  },
  {
    slug: "devops-agent",
    name: "DevOps AI Agent",
    blurb:
      "Multi-agent debugging CLI that inspects logs, diffs code and surfaces root causes, built on an MCP-style tool-use architecture.",
    status: "Shipped",
    stack: ["Python", "MCP", "Docker"],
    featured: true,
    links: [{ label: "GitHub", href: "https://github.com/jameshjs" }],
  },
  {
    slug: "factor-strategies",
    name: "Factor-Based Trading Strategies",
    blurb:
      "CAPM and Fama-French models to evaluate portfolio performance; the best strategies beat the market by ~3.5% a year.",
    status: "Shipped",
    stack: ["Python", "Pandas", "Statistics"],
    links: [{ label: "GitHub", href: "https://github.com/jameshjs/Factor-Based-Trading-Strategies" }],
  },
  {
    slug: "portfolio-generator",
    name: "Safest Portfolio Generator",
    blurb:
      "Portfolio optimizer that minimizes risk using regression on historical prices. 1st place out of 100+ in a course competition.",
    status: "Shipped",
    stack: ["Python", "Pandas", "yfinance"],
    links: [{ label: "GitHub", href: "https://github.com/jameshjs/Safest-Portfolio-Generator" }],
  },
]

export type LifeGroup = {
  id: string
  label: string
  title: string
  note: string
  icon: LucideIcon
  color: string
  photos: { src: string; alt: string }[]
}

// Shown under the intro on the home page and in the travel group on /life.
export const heroPhotos: LifeGroup["photos"] = [
  { src: "/images/venice-gondolas.webp", alt: "James by the gondolas in Venice" },
  { src: "/images/me-la-tee.webp", alt: "James leaning against a brick wall in a Los Angeles t-shirt" },
  { src: "/images/venice-san-marco.webp", alt: "James in front of St Mark's Basilica" },
]

export const lifeGroups: LifeGroup[] = [
  {
    id: "fencing",
    label: "fencing",
    title: "the fencers!",
    note: "Épée is the heaviest of the three blades: the whole body is target, there's no right-of-way, and whoever lands first scores. I'm president of the Waterloo Fencing Club, which mostly means practices, tournament trips, and making sure everyone fits in the elevator.",
    icon: Swords,
    color: "text-blue",
    photos: [
      { src: "/images/fencing-action-1.webp", alt: "James lunging in an épée bout" },
      { src: "/images/fencing-team.webp", alt: "The Waterloo fencing team squeezed into an elevator with their gear" },
      { src: "/images/fencing-action-2.webp", alt: "Two fencers mid-bout" },
      { src: "/images/fencing-awards.webp", alt: "Fencing club members holding Waterloo plaques at an awards night" },
    ],
  },
  {
    id: "gym",
    label: "gym & sports",
    title: "the gym & other sports",
    note: "My reset button between deploys and bouts, plus whatever gets a group together outside.",
    icon: Dumbbell,
    color: "text-green",
    photos: [],
  },
  {
    id: "poker",
    label: "poker",
    title: "the poker table",
    note: "Expected value, but with friends and snacks. Yes, I'll fold the 5-2.",
    icon: Spade,
    color: "text-red",
    photos: [],
  },
  {
    id: "places",
    label: "places",
    title: "oakville → waterloo",
    note: "Grew up in Oakville and learned to build in Waterloo.",
    icon: MapPin,
    color: "text-yellow",
    photos: [
      { src: "/images/waterloo-e7.webp", alt: "Banners hanging in the E7 building at Waterloo" },
    ],
  },
  {
    id: "travel",
    label: "travel",
    title: "...and sometimes, i travel",
    note: "Gondolas, San Marco, and a lot of walking.",
    icon: Plane,
    color: "text-blue",
    photos: heroPhotos,
  },
]
