export const services = [
    {
        title: "AI Solutions",
        slug: "ai-solutions",
        headline: "Technical Leadership & AI Agents for Startups",
        subheadline: "Build autonomous agents, workflows, and chatbots that automate complex business operations.",
        overview: "We architect production-grade AI solutions including Retrieval-Augmented Generation (RAG) pipelines, custom agent states, and semantic search interfaces that connect directly with your databases and workflows.",
        problems: [
            "Support and operations queues bottlenecking scaling velocity.",
            "High costs and errors from manual data transcription and verification.",
            "Siloed company information making document search slow and frustrating."
        ],
        capabilities: [
            "AI Agents & Multi-Agent Orchestration",
            "Intelligent Workflow Automation",
            "Voice Bots & Conversational Systems",
            "Customer Support Chatbots",
            "Internal AI Knowledge Assistants",
            "Automated PDF & Document Processing"
        ],
        techStack: [
            "OpenAI / Anthropic APIs",
            "LangChain / LlamaIndex",
            "Pinecone / Qdrant Vector Databases",
            "Python / FastAPI",
            "Node.js / Express",
            "LangGraph Agent Orchestration"
        ],
        caseStudies: [
            {
                name: "Agentic Support Engine",
                industry: "Healthcare SaaS",
                problem: "Support staff spent hours manually searching clinical manuals to answer compliance tickets.",
                solution: "Designed a secure RAG pipeline using vector embeddings and semantic caches feeding into an LLM support assistant.",
                results: "Reduced ticket resolution time by 92% and achieved 99.1% factual accuracy.",
                technologiesUsed: ["OpenAI GPT-4o", "LangChain", "Pinecone", "Node.js"]
            },
            {
                name: "Intelligent Invoice Parser",
                industry: "Logistics & Supply Chain",
                problem: "Finance teams manually matched thousands of physical invoices with purchase orders weekly.",
                solution: "Built an autonomous vision-based parsing pipeline that extracts data and cross-checks line items.",
                results: "Saved 40+ hours per week of manual data entry with zero human intervention required.",
                technologiesUsed: ["Anthropic Claude", "Python", "AWS Textract", "PostgreSQL"]
            }
        ],
        linkedProject: [
            { name: "AI Interrogation Engine", path: "/projects/ai-interrogation-engine" },
            { name: "PersonalOS — AI Chief of Staff", path: "/projects/personalos-ai-chief-of-staff" },
            { name: "Local Voice-to-RAG Memory System", path: "/projects/voice-to-rag-memory" }
        ]
    },
    {
        title: "Product & SaaS Development",
        slug: "product-saas-development",
        headline: "Scale from Prototype to Production SaaS",
        subheadline: "Engineering end-to-end SaaS products, MVPs, and web applications built for scale and transfer.",
        overview: "We construct reliable, high-performance web products optimized for the pace of startups. Our Build-Operate-Transfer approach ensures everything is fully documented, clean, and ready to handover to your replacement team.",
        problems: [
            "Prototypes built on low-code platforms that can't scale to enterprise customers.",
            "Technical debt slowing product iteration and delaying critical features.",
            "Vague product roadmaps leading to wasted development budget."
        ],
        capabilities: [
            "SaaS Architecture & Development",
            "Minimum Viable Product (MVP) Launches",
            "Full-Stack Web App Engineering",
            "Fractional CTO Technical Leadership",
            "Stripe Subscriptions & Multi-tenancy Integrations"
        ],
        techStack: [
            "React / Next.js (App Router)",
            "Node.js / Express / NestJS",
            "PostgreSQL / MongoDB",
            "Tailwind CSS / CSS Modules",
            "TypeScript",
            "REST APIs & GraphQL"
        ],
        caseStudies: [
            {
                name: "Collaborative Workspace Platform",
                industry: "EdTech & Remote Work",
                problem: "The founder's Bubble prototype couldn't support real-time document collaboration and fast rendering.",
                solution: "Re-engineered the product using Next.js, WebSockets, and a modular PostgreSQL schema for real-time document syncing.",
                results: "Scaled past 50,000 active users with under 150ms latency.",
                technologiesUsed: ["Next.js", "Node.js", "WebSockets", "PostgreSQL"]
            }
        ],
        linkedProject: { name: "Ketpa Veterinary Platform", path: "/projects/ketpa" }
    },
    {
        title: "Custom Software Engineering",
        slug: "custom-software-engineering",
        headline: "Custom Solutions Tailored to Your Business Logic",
        subheadline: "Robust internal tools, business systems, and API integrations that run your startup.",
        overview: "Off-the-shelf software only gets you so far. We engineer tailored business software, API integrations, and developer infrastructure built precisely for your unique operational workflows.",
        problems: [
            "Inefficient operations due to disjointed SaaS tools not talking to each other.",
            "Lack of secure internal systems exposing proprietary data to risk.",
            "Inefficient data routing causing slow load times and API failures."
        ],
        capabilities: [
            "Custom Enterprise Applications",
            "Secure Internal Operations Tools",
            "API Architecture & Development",
            "System Integrations & Middleware",
            "Legacy Application Modernization"
        ],
        techStack: [
            "TypeScript / Node.js",
            "Go / Rust (for performance)",
            "Docker / Containerization",
            "Redis Caching Layers",
            "PostgreSQL / DynamoDB",
            "AWS / GCP Services"
        ],
        caseStudies: [
            {
                name: "Automated Partner CRM",
                industry: "Real Estate & Brokerage",
                problem: "Sales representatives manually duplicated leads across three different tracking spreadsheets and custom CRMs.",
                solution: "Developed an API-driven internal portal that aggregates leads and automates routing rules.",
                results: "Eliminated data duplication errors completely, saving brokers 15 hours a week.",
                technologiesUsed: ["React", "Express", "PostgreSQL", "HubSpot API"]
            }
        ],
        linkedProject: { name: "Yuvaratna NGO Website", path: "/projects/yuvaratna" }
    },
    {
        title: "Data & Analytics",
        slug: "data-analytics",
        headline: "Turn Raw Data into Growth Metrics",
        subheadline: "Implement data pipelines, interactive dashboards, and reporting automations that drive decisions.",
        overview: "Make decisions based on hard evidence, not guesswork. We build clean data pipelines, set up business intelligence dashboards, and configure tracking so you know exactly how your product is growing.",
        problems: [
            "Inability to track key activation and retention metrics accurately.",
            "Scattered database sources making comprehensive reporting impossible.",
            "Wasted time manual-compiling weekly reporting slide decks for board meetings."
        ],
        capabilities: [
            "Unified Business Analytics Dashboards",
            "Product Growth & KPI Tracking",
            "Database Warehousing & Data Pipelines",
            "Automated Reporting Systems",
            "Analytics Tool Integrations (Amplitude, Mixpanel)"
        ],
        techStack: [
            "Next.js Dashboard Interfaces",
            "PostgreSQL / BigQuery / Snowflake",
            "Prisma ORM",
            "Chart.js / Tremor UI / Recharts",
            "dbt (data build tool)",
            "Segment / Mixpanel Integrations"
        ],
        caseStudies: [
            {
                name: "SaaS Retention Tracker",
                industry: "FinTech",
                problem: "The growth team couldn't identify at which stage of the trial onboarding funnel users were dropping off.",
                solution: "Integrated structured event tracking and developed a unified dashboard compiling data from Stripe, Postgres, and Mixpanel.",
                results: "Identified an onboarding bottleneck, helping improve trial conversion by 18%.",
                technologiesUsed: ["Next.js", "Tremor", "BigQuery", "Stripe API"]
            }
        ],
        linkedProject: { name: "Telegram Lead Pipeline", path: "/projects/telegram-lead-pipeline" }
    },
    {
        title: "Infrastructure & Engineering",
        slug: "infrastructure-engineering",
        headline: "Secure, Fast, and Scalable Cloud Architectures",
        subheadline: "Optimize your infrastructure, refactor code debt, and automate deployments.",
        overview: "We optimize your systems for security, cost-efficiency, and lightning-fast load times. Our infrastructure audits and DevOps setups prepare your startup for high-traffic and strict enterprise security checks.",
        problems: [
            "Unpredictable cloud hosting bills eating into startup margins.",
            "Slow page load times affecting SEO rankings and customer conversions.",
            "Failing deployments and lack of automated CI/CD pipelines causing downtime."
        ],
        capabilities: [
            "DevOps Setup & Cloud Architecture (AWS, GCP)",
            "Performance Optimization & Code Auditing",
            "Automated CI/CD Deployment Pipelines",
            "Database Scaling & Query Optimizations",
            "Security Auditing & Compliance Postures (SOC 2, HIPAA)"
        ],
        techStack: [
            "Terraform (Infrastructure as Code)",
            "AWS (ECS, RDS, S3, CloudFront)",
            "Google Cloud Platform (GCP)",
            "GitHub Actions / Vercel CLI",
            "Docker / Kubernetes",
            "PostgreSQL Performance Tuning"
        ],
        caseStudies: [
            {
                name: "Infrastructure Cost Optimization",
                industry: "AI Media Platform",
                problem: "Unoptimized GPU rendering instances and un-cached media files led to a $12k monthly cloud bill.",
                solution: "Refactored processing jobs, implemented Redis caching, and set up Terraform-based auto-scaling.",
                results: "Reduced monthly infrastructure spend by 58% while maintaining server performance.",
                technologiesUsed: ["Terraform", "AWS ECS", "Redis", "CloudFront"]
            }
        ],
        linkedProject: null
    }
]
