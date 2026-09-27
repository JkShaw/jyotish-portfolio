export const profile = {
  name: "Jyotish Kumar",
  role: "Staff Engineer · Senior Python Backend",
  location: "Bengaluru, India",
  email: "shaw.jyotish@gmail.com",
  linkedin: "https://linkedin.com/in/jyotish-kumar",
  phone: "+91-7894280469",
  headline:
    "I design and ship production backend platforms — APIs, event-driven services, retrieval systems, and reliable cloud infrastructure that other teams can operate.",
  availability: "Open to Staff / Senior backend roles",
  focus: ["Platform services", "Event-driven systems", "RAG & retrieval", "AWS / Kubernetes"],
};

export const about = [
  "I am a staff-level backend engineer with 12+ years building production systems across aviation logistics, geospatial AI, and consumer platforms.",
  "My recent work at Unilode is end-to-end ownership: architecture, data models, tests, observability, Kubernetes, and production cutover — not ticket-sized features.",
  "Before that I spent five years as Staff Engineer at AiDash, leading AI-geospatial platforms used by 150+ utilities at million-mile scale.",
  "Most recently I built Corpus, a retrieval-augmented knowledge base, treating hybrid search, access control, and answer quality as backend engineering problems.",
];

export const skills = [
  {
    title: "Languages & frameworks",
    items: ["Python", "FastAPI", "Django", "Flask", "Django REST Framework"],
  },
  {
    title: "Architecture",
    items: [
      "Distributed systems",
      "Microservices",
      "Event-driven design",
      "Clean Architecture",
      "Multi-tenant systems",
      "RBAC / SSO",
    ],
  },
  {
    title: "AI & retrieval",
    items: [
      "RAG pipelines",
      "Hybrid search + MMR",
      "FAISS / Qdrant",
      "sentence-transformers",
      "Groq / Ollama / Gemini",
      "LLM evaluation",
    ],
  },
  {
    title: "Data & messaging",
    items: ["MongoDB", "PostgreSQL / PostGIS", "Redis", "RabbitMQ", "Azure Service Bus", "SOAP / REST integrations"],
  },
  {
    title: "Cloud & delivery",
    items: ["AWS (EKS, Lambda, S3, SQS)", "Docker", "Kubernetes", "Helm", "CI/CD", "Linux"],
  },
  {
    title: "Reliability",
    items: ["Datadog APM", "Structured logging", "pytest", "Runbooks", "Rollback plans", "Production hardening"],
  },
];

export const featuredProject = {
  tag: "Featured build",
  name: "Corpus",
  title: "Knowledge base with retrieval-augmented generation",
  summary:
    "A knowledge base where every page edit is searchable immediately and every answer cites its sources. One hybrid retrieval engine runs seven product features.",
  stack: [
    "Python",
    "Flask",
    "MongoDB",
    "FAISS",
    "Qdrant",
    "sentence-transformers",
    "Groq / Ollama / Gemini",
    "TypeScript",
  ],
  metrics: [
    { stat: "7", label: "product features on one retrieval engine" },
    { stat: "0", label: "separate reindex steps: indexing runs on save" },
    { stat: "384-d", label: "local embeddings, no external embedding API" },
    { stat: "2×", label: "access checks: store filter + fail-closed recheck" },
  ],
  pipeline: [
    { step: "Save", detail: "Sync or queued indexing" },
    { step: "Chunk", detail: "Structure-aware, 160–900 chars" },
    { step: "Embed", detail: "all-MiniLM-L6-v2" },
    { step: "Retrieve", detail: "Vector + full-text" },
    { step: "Rerank", detail: "MMR + keyword guarantee" },
    { step: "Answer", detail: "Strict JSON + citations" },
  ],
  highlights: [
    {
      title: "Hybrid retrieval engine",
      body: "Combines vector search with MongoDB full-text search, reranks with MMR to cut near-duplicates, and guarantees at least one strong keyword match survives.",
    },
    {
      title: "Structure-aware chunking",
      body: "Paragraphs merge under their heading within tunable limits (160–900 chars). Tables and headings are never split, and every chunk gets a deterministic SHA-256 ID.",
    },
    {
      title: "Index-on-save",
      body: "Indexing is part of the page save flow, either synchronously or through a job queue, so edits are searchable right away.",
    },
    {
      title: "Conversational answer engine",
      body: "Rewrites each question into up to 3 search queries, scopes answers to the question's topic, remembers facts within a session, and returns strict-JSON answers with citations and a confidence score.",
    },
    {
      title: "Pluggable vector store",
      body: "FAISS or Qdrant behind one interface with automatic failover. Embeddings run on a local model, so no external embedding API is involved.",
    },
    {
      title: "Access control, enforced twice",
      body: "Permissions apply first as a vector-store filter and again as a fail-closed check on every result. An embeddable cross-origin help widget runs under narrower limits.",
    },
    {
      title: "Quality tooling",
      body: "Admins can run benchmarks over a curated question set, promote a chat message into that set in one click, and trace every answer and search for debugging.",
    },
  ],
};

export const projects = [
  {
    tag: "Unilode · 2025",
    title: "Notification platform",
    stack: ["FastAPI", "Queues", "Datadog APM", "Multi-tenant"],
    problem:
      "Product teams needed a shared transactional email and push path. There was no reusable, observable service they could integrate without pairing.",
    responsibility:
      "Owned the service from empty repository to production: architecture, multi-tenant model, tests, Datadog, cutover, and integrator guides.",
    architecture:
      "Clean-architecture FastAPI service with queue-backed workers, PII-redacted structured logs, Datadog APM, and documented API contracts / ADRs.",
    decisions:
      "Shipped runbook, rollback, and monitoring with the code. Caught a profile-guard defect that would have silently blocked production email before launch.",
    outcome:
      "Consuming teams can integrate independently. The service is the template for later Unilode platforms.",
  },
  {
    tag: "Unilode · 2025",
    title: "Audit logging platform",
    stack: ["RabbitMQ", "MongoDB", "Event-driven", "Load testing"],
    problem:
      "Business-critical mutations needed durable, searchable audit history across service boundaries — not ad-hoc logs.",
    responsibility:
      "Designed a three-service platform: API ingest, async consumers, and background diff processing, including search/export APIs.",
    architecture:
      "Event-driven pipeline on RabbitMQ with TLS, query-oriented denormalized fields (actor, changed fields), and backward-compatible APIs.",
    decisions:
      "Load-tested to ~1,000 events/sec and wrote index, backfill, pagination, and rollback runbooks before first production release.",
    outcome:
      "Support and compliance can investigate mutations with trustworthy actor context and exportable history.",
  },
  {
    tag: "Unilode · 2025",
    title: "Short-term leasing (OMT)",
    stack: ["Azure Service Bus", "Azure AD SSO", "RBAC", "Outbox"],
    problem:
      "Airline ULD leasing needed a governed quote-to-booking flow with auditability, notifications, and access control.",
    responsibility:
      "Owned quote, booking, contract, AWB, and status workflows across backend and frontend, plus first production release.",
    architecture:
      "Event-driven audit-outbox, Azure Service Bus / Microsoft Graph notifications, Azure AD SSO, and stack-wide RBAC.",
    decisions:
      "Treated deployment, rollback, Datadog dashboards, and permission docs as part of the product, not afterthoughts.",
    outcome:
      "Customer-facing leasing workflows shipped with production observability and independent operator runbooks.",
  },
  {
    tag: "Unilode · 2025",
    title: "DBWatcher & airline integrations",
    stack: ["MongoDB change tracking", "SOAP", "Clean Architecture"],
    problem:
      "Partners needed reliable change capture and correct cargo weight/config data flowing into Unilode systems.",
    responsibility:
      "Delivered DBWatcher end-to-end and owned the American Airlines / iCargo SOAP integration through production hardening.",
    architecture:
      "Clean-architecture MongoDB change-tracking service (~50 events/sec) plus correctness work on tare weight, maxload, flags, and parent/child config parity.",
    decisions:
      "Paired observability (PID correlation, visit-record caching) with partner-facing correctness rather than treating them as separate tracks.",
    outcome:
      "Eliminated invalid-weight rejections from a key partner and cut hot-path response times by ~20%.",
  },
  {
    tag: "AiDash · 2020–2024",
    title: "Forecast System · EC2 to EKS",
    stack: ["AWS EKS", "SQS", "Lambda", "S3"],
    problem:
      "Weather ingestion and outage inference ran on a single EC2 host — a scaling and reliability bottleneck as clients grew.",
    responsibility:
      "Led the redesign to AWS EKS with event-driven job launch for parallel 72-hour outage inferences.",
    architecture:
      "Ingestion writes to S3, events fan out through SQS / Lambda into Kubernetes Jobs so client analysis can run in parallel.",
    decisions:
      "Moved from cron-on-a-box to managed jobs with monitoring so failures are visible and work is no longer a single point of failure.",
    outcome:
      "Scalable inferences for 10+ clients with parallel, real-time delivery instead of a single machine.",
  },
  {
    tag: "AiDash · 2020–2024",
    title: "IVMS / AIMS geospatial platforms",
    stack: ["Django", "PostGIS", "Satellite AI", "Geospatial"],
    problem:
      "Utilities needed vegetation-risk and asset-inspection systems that could run at continental scale, not as research pilots.",
    responsibility:
      "Staff Engineer leading IVMS and AIMS: satellite-AI monitoring, survey pipelines, onboarding, and field delivery services.",
    architecture:
      "Python/Django + PostGIS platforms processing satellite and survey data, with HD geospatial PDF output for offline field use.",
    decisions:
      "Invested in automated onboarding and an AI-driven job launcher for data correction so customer rollout did not stay manual.",
    outcome:
      "1M+ miles monitored at 97% detection accuracy; 10M+ points processed; ~70% faster digital twins; used by 150+ utilities.",
  },
];

export const experience = [
  {
    company: "Unilode",
    title: "Senior Python Developer",
    dates: "Jan 2025 – Present",
    summary:
      "Owns backend architecture and greenfield platform services for aviation ULD and cargo management.",
    points: [
      "Shipped notification, audit, DBWatcher, and short-term leasing platforms from design through production operations.",
      "Hardened AA/iCargo SOAP integration and improved Business Engine observability and hot-path latency (~20%).",
      "Established ADRs, integrator guides, Datadog dashboards, and rollback plans so other engineers can run what shipped.",
    ],
  },
  {
    company: "AiDash",
    title: "Staff Engineer",
    dates: "Jan 2020 – Dec 2024",
    summary: "Led AI-geospatial platforms for utilities across 150+ customers.",
    points: [
      "Migrated Forecast System from EC2 to EKS for parallel 72-hour outage inferences.",
      "Led IVMS satellite-AI monitoring across 1M+ miles at 97% detection accuracy (~20% lower inspection costs).",
      "Built AIMS / Road Survey systems processing 10M+ points with ~70% faster digital twins; mentored 10+ engineers.",
    ],
  },
  {
    company: "Paytm",
    title: "Software Engineer",
    dates: "Mar 2017 – Jan 2020",
    summary: "Consumer support automation and marketplace operations tooling.",
    points: [
      "Built a support automation bot that reduced ticket volume by 30%.",
      "Integrated fulfilment partners and operational admin/MIS tooling; consolidated reverse-logistics RPC panels.",
    ],
  },
];

export const achievements = [
  { stat: "1M+", label: "miles of T&D lines monitored on IVMS" },
  { stat: "97%", label: "vegetation-risk detection accuracy" },
  { stat: "10M+", label: "geospatial points processed on AIMS" },
  { stat: "~70%", label: "faster digital-twin turnaround" },
  { stat: "~1,000/s", label: "audit platform load-test throughput" },
  { stat: "~20%", label: "hot-path response-time reduction" },
];

export const practices = [
  "Own the path from architecture to runbook — services ship with tests, dashboards, and rollback.",
  "Prefer event-driven boundaries (RabbitMQ, Service Bus, outbox) when work must survive process failure.",
  "Treat partner integrations as correctness problems, not just adapters.",
  "Write ADRs and integrator guides so the next engineer does not need the author in the room.",
  "Mentor through reviews and shared standards rather than ticket-only delivery.",
];

export const aiScope =
  "I build the production side of AI systems: geospatial inference pipelines and job launchers at AiDash, and retrieval, chunking, access control, and evaluation tooling in Corpus. I work with models as an engineer integrating them into a product, not as a research scientist training them.";
