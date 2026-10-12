// All site copy lives here. Add a project by appending to `projects`;
// drop its image/gif in public/images and point `media.src` at it.

export const site = {
  name: "James Hong",
  chineseName: "洪锦树",
  email: "j8hong@uwaterloo.ca",
  linkedin: "https://linkedin.com/in/james-hong-uw",
  github: "https://github.com/jameshjs",
  url: "https://jameshjs.github.io",
}

export type Job = {
  company: string
  role: string
  dates: string
  location: string
  current?: boolean
  points: string[]
  stack: string[]
}

export const experience: Job[] = [
  {
    company: "Wealthsimple",
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

export const stats = [
  { value: "5", label: "software engineering roles", color: "blue" },
  { value: "100M+", label: "records through my pipelines", color: "red" },
  { value: "CFA", label: "Level I passed", color: "yellow" },
  { value: "Prez", label: "Waterloo Fencing Club", color: "green" },
] as const
