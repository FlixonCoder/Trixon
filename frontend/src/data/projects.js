export const projects = [
    {
        title: "Ketpa — Veterinary Platform",
        slug: "ketpa",
        description: "Full-stack MVP with patient, doctor, and admin dashboards. Calendar-integrated appointment booking, email verification, and emergency booking pipeline.",
        tag: "Product & SaaS Development",
        tagSecondary: "Client Work",
        challenge: "Veterinary clinics were managing patient records, appointments, and emergency bookings across disconnected spreadsheets and phone calls. Doctors had no centralized view of patient history, and clinic admins lacked oversight into daily operations — leading to missed appointments, duplicated records, and delayed emergency responses.",
        solution: "We designed and built a full-stack platform with three role-based dashboards (patient, doctor, admin), an integrated calendar for appointment scheduling, automated email verification flows, and a priority-routed emergency booking pipeline. The system was built for handover-readiness with clean documentation and modular architecture.",
        stack: ["React", "Node.js", "MongoDB", "Tailwind CSS", "JWT Auth", "Nodemailer", "Express", "Google Calendar Integration"],
        outcomes: [
            { metric: "3", label: "Role-based dashboards", desc: "Patient, doctor, and admin views" },
            { metric: "MVP", label: "Production-ready build", desc: "From idea to deployable platform" },
            { metric: "100%", label: "IP transferred", desc: "Full ownership to founder" }
        ]
    },
    {
        title: "AI Interrogation Engine — Multi-Persona Conversational System",
        slug: "ai-interrogation-engine",
        description: "A Gemini-powered conversational AI system with custom personas, session memory, and prompt-level guardrails — built and deployed end-to-end in under 24 hours for a live event.",
        tag: "AI Solutions",
        tagSecondary: "Live Deployment",
        challenge: "A live event needed multiple AI characters that could hold consistent personalities, retain conversational memory, and stay strictly within defined information boundaries — all under a 24-hour build-to-deploy window with zero room for error during live use.",
        solution: "Built a full-stack multi-persona AI system powered by Gemini 2.5 Flash. Each persona was configured with a distinct personality and constrained knowledge base, with session-based memory maintaining context across conversations. Prompt-level guardrails prevented information leakage outside defined boundaries, and a built-in kill-switch ('Jammer System') gave operators real-time control to disable any persona instantly.",
        stack: [
            "React",
            "Vite",
            "Tailwind CSS",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Mongoose",
            "Google Gemini 2.5 Flash",
            "Google GenAI SDK",
            "Axios"
        ],
        outcomes: [
            {
                metric: "24hr",
                label: "Build-to-Deploy",
                desc: "Designed, built, and shipped a production conversational AI system in under a day."
            },
            {
                metric: "Multi",
                label: "Persona Architecture",
                desc: "Multiple AI personas with distinct personalities, scoped knowledge, and isolated memory."
            },
            {
                metric: "Live",
                label: "Real-Time Control",
                desc: "Operator-controlled guardrails with an instant kill-switch for live deployment safety."
            }
        ]
    },
    {
        title: "AI Lead Pipeline — Telegram to MERN Dashboard",
        slug: "telegram-lead-pipeline",
        description: "An AI-driven lead management pipeline that captures unstructured leads from Telegram, extracts and validates data with Google Gemini, and surfaces everything in a real-time MERN dashboard.",
        tag: "Data & Analytics",
        tagSecondary: "Client Work",
        challenge: "Lead collection was a manual, inconsistent process spread across Telegram conversations. Unstructured messages containing links, deadlines, and notes required manual formatting, validation, and duplicate-checking before they could be tracked — costing time and causing missed follow-ups.",
        solution: "Built a hybrid AI-powered lead pipeline combining a Telegram bot, Google Gemini for extraction, Python automation, and a MERN dashboard. Natural-language messages sent to the bot are automatically parsed into structured lead records, validated, checked for duplicates, stored in MongoDB, and synced instantly to a searchable React dashboard.",
        stack: [
            "React",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Python",
            "Google Gemini 2.5 Flash",
            "Telegram Bot API",
            "BeautifulSoup",
            "Requests",
            "Tailwind CSS"
        ],
        outcomes: [
            {
                metric: "AI",
                label: "Intelligent Lead Parsing",
                desc: "Converts natural language into structured lead data using Gemini AI."
            },
            {
                metric: "Automated",
                label: "Validation Layer",
                desc: "Checks URLs and prevents duplicates before storage."
            },
            {
                metric: "Real-Time",
                label: "Telegram → Dashboard",
                desc: "New leads appear instantly in a searchable, responsive MERN dashboard."
            }
        ]
    },
    {
        title: "Supremo — AI Codebase Intelligence",
        slug: "supremo",
        description: "AI-powered engineering intelligence platform that analyzes GitHub repositories, generates comprehensive technical reports, enables natural-language codebase conversations, and helps founders understand, improve, and scale their software.",
        tag: "Products",
        tagSecondary: "Beta",
        challenge: "Founders and engineering teams often inherit unfamiliar codebases with little documentation, making it difficult to evaluate architecture, security, maintainability, scalability, and technical debt. Existing tools focus on isolated metrics, leaving teams without a unified understanding of their software.",
        solution: "Supremo connects directly to GitHub repositories and performs AI-driven codebase analysis to generate detailed engineering reports covering architecture, code quality, security, documentation, scalability, onboarding, and business insights. It also includes an interactive AI assistant that lets users query their entire codebase in natural language, making complex software understandable for both technical and non-technical stakeholders.",
        stack: [
            "Next.js",
            "FastAPI",
            "Python",
            "MongoDB",
            "Supabase",
            "GitHub API",
            "Anthropic Claude",
            "Groq",
            "React",
            "Tailwind CSS"
        ],
        outcomes: [
            {
                metric: "AI",
                label: "Codebase Intelligence",
                desc: "Transforms repositories into actionable engineering insights."
            },
            {
                metric: "Multi",
                label: "Comprehensive Analysis",
                desc: "Evaluates architecture, security, quality, scalability, and documentation."
            },
            {
                metric: "Beta",
                label: "Early Access",
                desc: "Currently available for beta users and early adopters."
            }
        ]
    },
    {
        title: "PersonalOS — Self-Hosted AI Agent Architecture",
        slug: "personalos-ai-chief-of-staff",
        description: "A personal R&D build: a self-hosted AI agent platform combining long-term memory, browser automation, voice processing, and proactive task management into a single system — built to stress-test agentic architecture patterns, not as client work.",
        tag: "AI Solutions",
        tagSecondary: "R&D Project",
        challenge: "Built independently to explore a hard architectural question: can a single agent maintain long-term context, take real actions (browser automation, scheduling), and run across a hybrid cloud/local inference setup without falling apart under everyday use.",
        solution: "Developed a self-hosted AI agent powered by a dual-brain architecture that switches between cloud and local LLMs depending on task sensitivity and latency needs. Combines long-term memory via RAG, browser automation, voice transcription, and proactive scheduling, demonstrating patterns directly applicable to client-facing agentic systems.",
        stack: [
            "Python",
            "Discord.py",
            "Groq API",
            "Ollama",
            "SQLite",
            "ChromaDB",
            "Playwright",
            "Faster Whisper",
            "Browser-Use",
            "Trafilatura",
            "APScheduler"
        ],
        outcomes: [
            {
                metric: "Dual",
                label: "Hybrid AI Architecture",
                desc: "Automatically switches between cloud (Groq) and local (Ollama) inference."
            },
            {
                metric: "Persistent",
                label: "Long-Term Memory",
                desc: "Combines SQLite and ChromaDB for structured and semantic recall across sessions."
            },
            {
                metric: "R&D",
                label: "Architecture Proving Ground",
                desc: "Patterns from this build inform agentic systems delivered to clients."
            }
        ]
    },
    {
        title: "Local Voice-to-RAG Memory System",
        slug: "voice-to-rag-memory",
        description: "A personal R&D build: a local-first system converting voice recordings into a queryable RAG-indexed memory store, exploring fully offline retrieval-augmented architecture.",
        tag: "AI Solutions",
        tagSecondary: "R&D Project",
        challenge: "Explored whether a fully local, privacy-preserving RAG pipeline could reliably capture and surface meeting or seminar content on natural-language query, with zero cloud dependency.",
        solution: "Built a local bot that continuously transcribes voice input and indexes it into a RAG-based memory layer, allowing conversational query over any past session — entirely offline.",
        stack: ["Whisper", "Vector Database", "RAG Pipeline", "Python"],
        outcomes: [
            {
                metric: "Local",
                label: "Zero Cloud Dependency",
                desc: "Fully offline execution — no data leaves the device."
            },
            {
                metric: "R&D",
                label: "Offline RAG Proving Ground",
                desc: "Validates architecture used in privacy-sensitive client engagements."
            }
        ]
    },
    {
        title: "Yuvaratna — Public Website",
        slug: "yuvaratna",
        description: "Designed and built the public website for Yuvaratna, a regional NGO focused on social work and community development.",
        tag: "Web Development",
        tagSecondary: "Client Work",
        challenge: "Yuvaratna, a regional NGO, lacked a modern online presence to display their initiatives, events, and community updates, making it difficult to reach local volunteers and share program updates.",
        solution: "Designed and developed a responsive, fast, and modern website using Next.js and Tailwind CSS, giving the organization a professional platform to showcase their social impact.",
        stack: ["Next.js", "Tailwind CSS", "React", "Framer Motion"],
        outcomes: [
            {
                metric: "NGO",
                label: "Regional Presence",
                desc: "Established a clean, professional public-facing portal for the organization."
            },
            {
                metric: "Fast",
                label: "Next.js Performance",
                desc: "Optimized load times and responsive design for mobile-first audiences."
            }
        ]
    }
]