import React from 'react';
import MotionSection from '../../components/MotionSection';
import Footer from '../../components/Footer';

export const metadata = {
    title: 'Services | Automation Audit, AI Integration Sprint & Full Automation Build | Trixon',
    description: 'Three ways to work with Trixon: Automation Audit, AI Integration Sprint, and Full Automation Build. Fixed scope. No retainer lock-ins. You own everything.',
    alternates: {
        canonical: '/services',
    },
};

const capabilityGroups = [
    {
        label: "Automation & Workflow",
        items: ["n8n", "Make (Integromat)", "Zapier (custom logic)", "Webhook pipelines", "Custom Python automation scripts"]
    },
    {
        label: "Voice & Calling Agents",
        items: ["Retell AI", "Vapi", "Twilio", "ElevenLabs", "WhatsApp Business API", "Telegram Bot API"]
    },
    {
        label: "AI & LLM Integration",
        items: ["OpenAI", "Anthropic Claude", "Google Gemini", "LangChain", "RAG pipelines", "Agentic workflow architecture", "Custom prompt engineering"]
    },
    {
        label: "Dashboards & Data",
        items: ["React + Recharts custom dashboards", "Google Sheets automation", "Airtable integrations", "PostgreSQL / MongoDB", "Real-time data pipelines"]
    },
    {
        label: "CRM & Business Tool Integrations",
        items: ["HubSpot", "Salesforce", "Notion", "Airtable", "Slack", "Google Workspace", "Any tool with an API"]
    }
];

export default function ServicesPage() {
    return (
        <main className="bg-stone-50 min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-12 pb-20 lg:pt-28 lg:pb-36 bg-stone-50 overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03] text-stone-900"
                    style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)', backgroundSize: '40px 40px' }}>
                </div>

                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
                    <MotionSection className="inline-flex items-center rounded-full px-4 py-1.5 text-xs font-bold text-accent uppercase tracking-widest ring-1 ring-stone-900/10 bg-white/50 backdrop-blur-sm mb-8 shadow-sm">
                        Three Engagement Types
                    </MotionSection>

                    <MotionSection>
                        <h1 className="text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl md:text-6xl mb-8 font-sans">
                            AI Automations, Voice Agents &amp; Dashboards — Built for Your Business.
                        </h1>
                        <p className="max-w-2xl mx-auto text-xl text-stone-600 leading-relaxed">
                            Every engagement is scoped, built, and delivered personally — no account managers, no offshore teams. You talk to the person building it. You own everything at the end.
                        </p>
                    </MotionSection>
                </div>

                <div className="absolute top-0 left-1/2 w-full -translate-x-1/2 h-full overflow-hidden -z-10 pointer-events-none opacity-40">
                    <div className="absolute top-[-20%] left-[-10%] w-[50rem] h-[50rem] bg-orange-100/30 rounded-full blur-3xl mix-blend-multiply filter"></div>
                    <div className="absolute top-[10%] right-[-10%] w-[40rem] h-[40rem] bg-indigo-50/30 rounded-full blur-3xl mix-blend-multiply filter"></div>
                </div>
            </section>

            {/* ─── Engagement Types ─── */}
            <section className="py-24 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

                    {/* Automation Audit */}
                    <MotionSection id="audit" className="grid md:grid-cols-2 gap-12 items-start">
                        <div>
                            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-accent-light text-accent mb-4">01 — Start Here</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 font-sans mb-6">Automation Audit</h2>
                            <p className="text-stone-600 leading-relaxed text-lg">
                                A one-week deep dive into your workflows, tools, and manual processes. We identify the highest-ROI automation targets and deliver a prioritised Automation Roadmap — actionable immediately, with or without hiring us to build it.
                            </p>
                            <p className="text-stone-500 mt-4 leading-relaxed">
                                The lowest-risk way to start. You get a clear picture of what to automate, in what order, and what the ROI looks like — in one week.
                            </p>
                        </div>
                        <div className="space-y-4">
                            {[
                                { label: "What you get", items: ["Workflow map of your current manual processes", "Prioritised Automation Roadmap (ranked by time saved and build complexity)", "Tool and integration recommendations — what to connect and how", "Written report — yours to keep regardless of next steps"] },
                                { label: "Good fit for", items: ["Business owners with repetitive manual workflows they can't get off their plate", "Startups exploring AI integration but unsure where to start", "Teams using 4+ disconnected tools with no automation layer"] }
                            ].map((block, i) => (
                                <div key={i} className="p-6 bg-stone-50 rounded-2xl border border-stone-100">
                                    <h4 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-4">{block.label}</h4>
                                    <ul className="space-y-2">
                                        {block.items.map((item, j) => (
                                            <li key={j} className="flex items-start gap-2.5 text-sm text-stone-600">
                                                <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-1.5"></span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </MotionSection>

                    <div className="h-px bg-gradient-to-r from-transparent via-stone-200 to-transparent"></div>

                    {/* AI Integration Sprint */}
                    <MotionSection id="sprint" className="grid md:grid-cols-2 gap-12 items-start">
                        <div>
                            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-accent-light text-accent mb-4">02 — Scoped Build</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 font-sans mb-6">AI Integration Sprint</h2>
                            <p className="text-stone-600 leading-relaxed text-lg">
                                A focused, fixed-scope build of one specific automation, AI feature, or voice agent. We scope it, build it, and hand it over — typically in two to four weeks.
                            </p>
                            <p className="text-stone-500 mt-4 leading-relaxed">
                                No equity. No retainer. A clear deliverable, a clear timeline, and full ownership at the end. Typically follows an Automation Audit.
                            </p>
                        </div>
                        <div className="space-y-4">
                            {[
                                { label: "What's included", items: ["Full build of one scoped automation or AI feature", "Weekly progress updates and live demos", "Full handover — code, credentials, documentation", "Walkthrough session so your team knows how to use and maintain it"] },
                                { label: "Good fit for", items: ["Businesses that have identified a specific automation they need built", "Startups integrating their first AI feature into a product or workflow", "Teams that need a voice bot, calling agent, or LLM integration built fast"] }
                            ].map((block, i) => (
                                <div key={i} className="p-6 bg-stone-50 rounded-2xl border border-stone-100">
                                    <h4 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-4">{block.label}</h4>
                                    <ul className="space-y-2">
                                        {block.items.map((item, j) => (
                                            <li key={j} className="flex items-start gap-2.5 text-sm text-stone-600">
                                                <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-1.5"></span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </MotionSection>

                    <div className="h-px bg-gradient-to-r from-transparent via-stone-200 to-transparent"></div>

                    {/* Full Automation Build */}
                    <MotionSection id="full-build" className="grid md:grid-cols-2 gap-12 items-start">
                        <div>
                            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-accent-light text-accent mb-4">03 — Complete Build</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 font-sans mb-6">Full Automation Build</h2>
                            <p className="text-stone-600 leading-relaxed text-lg">
                                We design and build your complete automation layer — multi-step workflows, voice agents, AI-powered dashboards, data pipelines, and CRM integrations — delivered as a fully owned, documented system.
                            </p>
                            <p className="text-stone-500 mt-4 leading-relaxed">
                                Typically four to eight weeks for the initial build. Monthly retainer available after handover for ongoing expansion.
                            </p>
                        </div>
                        <div className="space-y-4">
                            {[
                                { label: "What's delivered at handover", items: ["Full ownership — every system, credential, and access point transferred to you", "Clean documentation for every automation built", "Walkthrough training session for your team", "30-day post-handover support window"] },
                                { label: "Good fit for", items: ["Businesses that want to automate their entire ops layer — not just one workflow", "Startups adding AI features, voice agents, and dashboards to their product", "Teams that want an ongoing automation partner as the business grows"] }
                            ].map((block, i) => (
                                <div key={i} className="p-6 bg-stone-50 rounded-2xl border border-stone-100">
                                    <h4 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-4">{block.label}</h4>
                                    <ul className="space-y-2">
                                        {block.items.map((item, j) => (
                                            <li key={j} className="flex items-start gap-2.5 text-sm text-stone-600">
                                                <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-1.5"></span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </MotionSection>
                </div>
            </section>

            {/* ─── Capabilities ─── */}
            <section className="py-24 bg-stone-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <MotionSection className="mb-16">
                        <h2 className="text-3xl font-bold text-stone-900 font-sans mb-4">What We Work With</h2>
                        <p className="text-stone-600 text-lg leading-relaxed max-w-2xl">
                            The tools and platforms we build on — not a marketing list. Every item here is something we've shipped in production.
                        </p>
                    </MotionSection>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {capabilityGroups.map((group, i) => (
                            <MotionSection key={i} delay={i * 0.1} className="p-6 bg-white rounded-2xl border border-stone-100 shadow-sm">
                                <h4 className="text-xs font-bold uppercase tracking-widest text-accent mb-4">{group.label}</h4>
                                <ul className="space-y-2">
                                    {group.items.map((item, j) => (
                                        <li key={j} className="text-sm text-stone-600 flex items-center gap-2">
                                            <span className="w-1 h-1 rounded-full bg-stone-300 shrink-0"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </MotionSection>
                        ))}
                    </div>
                </div>
            </section>

            <Footer 
                headline="Ready to stop doing it manually?" 
                subtext="Book a free 30-minute Automation Audit call. We'll identify exactly what to automate first — no pitch deck, no commitment." 
            />
        </main>
    );
}
