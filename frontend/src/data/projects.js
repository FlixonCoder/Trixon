export const projects = [
    {
        title: "Ketpa — Veterinary Platform",
        slug: "ketpa",
        description: "Full-stack MVP with patient, doctor, and admin dashboards. Calendar-integrated appointment booking, email verification, and emergency booking pipeline.",
        tag: "SaaS Development · Workflow Automation",
        tagSecondary: "Client Work",
        challenge: "Veterinary clinics were managing patient records, appointments, and emergency bookings across disconnected spreadsheets and phone calls. Doctors had no centralized view of patient history, and clinic admins lacked oversight into daily operations — leading to missed appointments, duplicated records, and delayed emergency responses.",
        solution: "I designed and built a full-stack platform with three role-based dashboards (patient, doctor, admin), an integrated calendar for appointment scheduling, automated email verification flows, and a priority-routed emergency booking pipeline. The system was built for handover-readiness with clean documentation and modular architecture.",
        stack: ["React", "Node.js", "MongoDB", "Tailwind CSS", "JWT Auth", "Nodemailer", "Express", "Google Calendar Integration"],
        outcomes: [
            { metric: "3", label: "Role-based dashboards", desc: "Patient, doctor, and admin views" },
            { metric: "MVP", label: "Production-ready build", desc: "From idea to deployable platform" },
            { metric: "100%", label: "IP transferred", desc: "Full ownership to founder" }
        ]
    },
    {
        title: "Yuvaratna — Full Web Build",
        slug: "yuvaratna",
        description: "Sole technical lead for a regional NGO for 8 months — designed, built, and maintained their full web presence end-to-end from zero. One person. Full ownership. Clean exit.",
        tag: "Web Development · Technical Build",
        tagSecondary: "Client Work · 8 months",
        duration: "8 months",
        challenge: "When I joined, the organization had no website, no online presence, and no technical credibility with the communities they were trying to reach. Everything needed to be built from scratch.",
        solution: "I designed, built, and maintained the organization's full website end-to-end as sole technical lead — handling all architecture, development, and ongoing maintenance for the duration of the engagement. The organization later wound down due to a change in government NGO regulations, unrelated to the technical work.",
        stack: ["MongoDB", "Express.js", "React", "Node.js"],
        outcomes: [
            { metric: "8mo", label: "Sole technical lead", desc: "End-to-end ownership of all technical work" },
            { metric: "0→Live", label: "Built from scratch", desc: "From no online presence to a production-ready website" },
            { metric: "Full", label: "IP transferred", desc: "Complete handover at engagement close" }
        ]
    },
    {
        title: "AI Interrogation Engine — Multi-Persona Conversational System",
        slug: "ai-interrogation-engine",
        description: "A Gemini-powered conversational AI system with custom personas, session memory, and prompt-level guardrails. Built and deployed end-to-end in under 24 hours — a demonstration of what rapid AI integration looks like in practice.",
        tag: "AI Integration · Conversational AI",
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
        tag: "Workflow Automation · Data Pipeline",
        tagSecondary: "AI Integration",
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
    }
]