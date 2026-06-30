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
            { metric: "MVP", label: "Shipped in 4 weeks", desc: "From idea to production-ready" },
            { metric: "100%", label: "IP transferred", desc: "Full ownership to founder" }
        ]
    },
    {
        title: "AI Suspect Interrogation Chatbot",
        slug: "ai-suspect-interrogation-chatbot",
        description: "A Gemini-powered AI suspect built for a live crime investigation event, enabling participants to interrogate virtual suspects through natural conversations while preserving game integrity with custom personalities, memory, and guardrails.",
        tag: "AI Solutions",
        tagSecondary: "Live Deployment",
        challenge: "A live theft investigation game needed an immersive way for participants to interrogate suspects without requiring volunteers to roleplay continuously. The solution had to answer naturally, stay true to each suspect's personality, avoid revealing hidden clues, and remain reliable throughout the event—all within a 24-hour development window.",
        solution: "Developed and deployed a full-stack AI interrogation chatbot powered by Gemini 2.5 Flash. Each suspect was configured with a unique personality and trained on custom case files, allowing participants to conduct realistic interrogations. Session-based memory maintained conversational context while carefully engineered prompt guardrails prevented accidental clue leakage. A built-in Jammer System gave organizers the ability to instantly disable interactions whenever required during gameplay.",
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
                label: "Rapid Development",
                desc: "Designed, built, and deployed for a live college event within a single day."
            },
            {
                metric: "AI",
                label: "Custom Personas",
                desc: "Multiple AI suspects with distinct personalities, case knowledge, and conversational memory."
            },
            {
                metric: "Live",
                label: "Event Gameplay",
                desc: "Served as a core gameplay mechanic with organizer-controlled guardrails and a built-in Jammer System."
            }
        ]
    },

    {
        title: "AI-Powered Lead Manager Chatbot",
        slug: "ai-powered-lead-manager-chatbot",
        description: "An AI-driven lead management platform that captures unstructured leads from Telegram, intelligently extracts and validates data using Google Gemini, and manages everything through a modern MERN dashboard.",
        tag: "AI Automation",
        tagSecondary: "CRM & Lead Management",
        challenge: "Lead collection was a manual, inconsistent process spread across Telegram conversations. Sales teams received unstructured messages containing links, deadlines, and notes that required manual formatting, validation, and duplicate checking before they could be tracked, resulting in wasted time and missed opportunities.",
        solution: "Built a hybrid AI-powered lead management system combining a Telegram Bot, Google Gemini AI, Python automation, and a MERN dashboard. Users simply send natural language messages to the bot, which automatically extracts structured lead information, validates URLs, detects duplicates, stores everything in MongoDB, and instantly syncs it to a responsive React dashboard for seamless lead management.",
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
                desc: "Transforms natural language into structured lead data using Gemini AI."
            },
            {
                metric: "100%",
                label: "Automated Validation",
                desc: "Checks URLs, prevents duplicates, and validates data before storage."
            },
            {
                metric: "Real-Time",
                label: "Telegram → Dashboard",
                desc: "New leads appear instantly in a searchable and responsive MERN dashboard."
            }
        ]
    },
    {
        title: "Trixon — AI Codebase Intelligence",
        slug: "trixon",
        description: "AI-powered engineering intelligence platform that analyzes GitHub repositories, generates comprehensive technical reports, enables natural-language codebase conversations, and helps founders understand, improve, and scale their software.",
        tag: "Products",
        tagSecondary: "Beta",
        challenge: "Founders and engineering teams often inherit unfamiliar codebases with little documentation, making it difficult to evaluate architecture, security, maintainability, scalability, and technical debt. Existing tools focus on isolated metrics, leaving teams without a unified understanding of their software.",
        solution: "Trixon connects directly to GitHub repositories and performs AI-driven codebase analysis to generate detailed engineering reports covering architecture, code quality, security, documentation, scalability, onboarding, and business insights. It also includes an interactive AI assistant that lets users query their entire codebase in natural language, making complex software understandable for both technical and non-technical stakeholders.",
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
        title: "PersonalOS — AI Chief of Staff",
        slug: "personalos-ai-chief-of-staff",
        description: "A self-hosted AI productivity platform that combines long-term memory, browser automation, Discord interaction, voice processing, scheduling, and intelligent task management into a single personal operating system.",
        tag: "AI Solutions",
        tagSecondary: "R&D Project",
        challenge: "Managing tasks, notes, calendars, habits, web research, and personal knowledge across multiple disconnected applications creates constant context switching and fragmented productivity. The goal was to build a single AI assistant capable of understanding long-term context while proactively managing everyday workflows.",
        solution: "Developed a self-hosted AI Chief of Staff powered by a dual-brain architecture that intelligently switches between cloud and local LLMs. The system combines long-term memory with RAG, browser automation, Discord-based interaction, voice transcription, proactive scheduling, and intelligent task management, allowing users to interact naturally while the agent manages information, performs web actions, and maintains persistent context across sessions.",
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
                desc: "Automatically switches between Groq cloud models and local Ollama inference."
            },
            {
                metric: "Persistent",
                label: "Long-Term Memory",
                desc: "Combines SQLite and ChromaDB to retain structured and semantic knowledge across sessions."
            },
            {
                metric: "Unified",
                label: "AI Personal Operating System",
                desc: "Integrates browser automation, scheduling, voice processing, task management, notes, goals, and Discord into one intelligent assistant."
            }
        ]
    },
    {
        title: "Local Voice-to-RAG Memory System",
        slug: "voice-to-rag-memory",
        description: "A local-first system that converts voice recordings into text in real time and caches them into a RAG-based memory store, enabling natural-language Q&A over entire meetings or seminars.",
        tag: "AI Solutions | R&D Project",
        challenge: "Meeting and seminar notes get lost or never get reviewed. The goal was passive capture with active recall — ask questions later instead of re-reading transcripts.",
        solution: "A local bot continuously transcribes voice input and stores it in a RAG-indexed memory layer, allowing the user to query any past meeting or seminar conversationally.",
        stack: ["Whisper", "Vector Database", "RAG Pipeline", "Python"],
        outcomes: [
            {
                metric: "Local",
                label: "Data Privacy",
                desc: "Fully local offline execution keeping transcripts secure."
            },
            {
                metric: "Session",
                label: "Continuous Memory",
                desc: "Queryable vector-cached seminar and meeting records."
            }
        ]
    },
    {
        title: "Yuvaratna — Public Website",
        slug: "yuvaratna",
        description: "Designed and built the public website for Yuvaratna, a regional NGO focused on social work and community development.",
        tag: "Web Development | Client Work",
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
                desc: "Optimized load times and responsive design to accommodate users on mobile networks."
            }
        ]
    }
]
