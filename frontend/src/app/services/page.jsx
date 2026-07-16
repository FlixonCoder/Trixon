import React from 'react';
import MotionSection from '../../components/MotionSection';
import Footer from '../../components/Footer';

export const metadata = {
    title: 'Services | Technical Audit, TTCF & BOT | Trixon',
    description: 'Three engagement types for early-stage founders: Technical Audit, Temporary Technical Co-Founder (TTCF), and Build-Operate-Transfer (BOT). Direct access — no middlemen.',
    alternates: {
        canonical: '/services',
    },
};

const capabilityGroups = [
    {
        label: "Web & Frontend",
        items: ["React / Next.js (App Router)", "Tailwind CSS / CSS Modules", "TypeScript", "Framer Motion"]
    },
    {
        label: "Backend & Data",
        items: ["Node.js / Express / NestJS", "MongoDB / PostgreSQL", "REST APIs & GraphQL", "Redis Caching"]
    },
    {
        label: "AI & LLM",
        items: ["OpenAI / Anthropic / Gemini APIs", "LangChain / LlamaIndex", "RAG Pipelines & Vector DBs", "Agentic Workflow Architecture"]
    },
    {
        label: "Integrations & DevOps",
        items: ["Docker / Vercel / Railway", "GitHub Actions CI/CD", "Stripe / Webhooks", "Telegram / WhatsApp APIs"]
    },
    {
        label: "Data Science & ML",
        items: ["Python / FastAPI", "Pandas / NumPy", "Whisper / Local LLM (Ollama)", "ChromaDB / Pinecone"]
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
                        Three Ways to Engage
                    </MotionSection>

                    <MotionSection>
                        <h1 className="text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl md:text-6xl mb-8 font-sans">
                            Technical Partnership for Early-Stage Founders
                        </h1>
                        <p className="max-w-2xl mx-auto text-xl text-stone-600 leading-relaxed">
                            I work directly on every engagement — no account layers, no junior developers executing while someone else takes the meetings. Every service below is scoped and delivered personally.
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

                    {/* Technical Audit */}
                    <MotionSection id="audit" className="grid md:grid-cols-2 gap-12 items-start">
                        <div>
                            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-accent-light text-accent mb-4">01 — Entry Point</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 font-sans mb-6">Technical Audit</h2>
                            <p className="text-stone-600 leading-relaxed text-lg">
                                An independent, no-obligation look at your codebase — a clear before/after benchmark and a set of prioritized recommendations you can act on immediately, with or without hiring me further.
                            </p>
                            <p className="text-stone-500 mt-4 leading-relaxed">
                                This is the lowest-risk way to see how I work before committing to anything larger.
                            </p>
                            <p className="text-sm text-stone-400 mt-4 italic">
                                Typical turnaround: 1–3 weeks depending on codebase size and scope.
                            </p>
                        </div>
                        <div className="space-y-4">
                            {[
                                { label: "What you get", items: ["Architecture assessment with clear risk ratings", "Prioritized list of technical debt issues", "Recommended next steps — actionable, not generic", "Written report you keep regardless of next steps"] },
                                { label: "Good fit for", items: ["Pre-seed founders validating technical decisions", "Funded startups before hiring a CTO", "Founders who've been burned and want a second opinion"] }
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

                    {/* TTCF */}
                    <MotionSection id="ttcf" className="grid md:grid-cols-2 gap-12 items-start">
                        <div>
                            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-accent-light text-accent mb-4">02 — Partnership</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 font-sans mb-6">TTCF — Temporary Technical Co-Founder</h2>
                            <p className="text-stone-600 leading-relaxed text-lg">
                                I join your company under a partnership arrangement, functioning as a hands-on technical lead — MVP development, architecture decisions, and fundraising-readiness — directly and personally.
                            </p>
                            <p className="text-stone-500 mt-4 leading-relaxed">
                                Tenure is flexible and scoped to your actual needs, not a fixed template.
                            </p>
                            <p className="text-sm text-stone-400 mt-4 italic">
                                Equity discussed for longer-term TTCF arrangements. Typically preceded by a Technical Audit.
                            </p>
                        </div>
                        <div className="space-y-4">
                            {[
                                { label: "What I own during tenure", items: ["Technical architecture and stack decisions", "MVP development and iteration", "Investor technical diligence readiness", "All documentation, written as I build"] },
                                { label: "Good fit for", items: ["Non-technical founders pre-seed or seed stage", "Founders raising and needing tech credibility", "Early startups without a permanent CTO yet"] }
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

                    {/* BOT */}
                    <MotionSection id="bot" className="grid md:grid-cols-2 gap-12 items-start">
                        <div>
                            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-accent-light text-accent mb-4">03 — Full Engagement</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 font-sans mb-6">BOT — Build-Operate-Transfer</h2>
                            <p className="text-stone-600 leading-relaxed text-lg">
                                I take ownership of building or fixing your product within a fixed tenure (typically 6–12 months), working solo and communicating transparently about pace. The engagement concludes with full IP and documentation transfer.
                            </p>
                            <p className="text-stone-500 mt-4 leading-relaxed">
                                Nothing lives only in my head — documentation happens as I build, not retrofitted at the end.
                            </p>
                            <p className="text-sm text-stone-400 mt-4 italic">
                                Typically 6–12 months. Monthly retainer engagement.
                            </p>
                        </div>
                        <div className="space-y-4">
                            {[
                                { label: "What happens at exit", items: ["Full IP transfer — code, credentials, accounts", "Documentation clean enough for your next hire", "I help you think through what that hire needs to walk into", "Defined post-handover window for questions"] },
                                { label: "Good fit for", items: ["Funded startups needing interim technical leadership", "Founders rebuilding after a bad agency experience", "Series A bridge period before a permanent CTO hire"] }
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
                        <h2 className="text-3xl font-bold text-stone-900 font-sans mb-4">Technical Capabilities</h2>
                        <p className="text-stone-600 text-lg leading-relaxed max-w-2xl">
                            A compact reference for technical due diligence. These are the stacks and tools I actually use — not a marketing list.
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

            {/* ─── Solo-Operator Transparency ─── */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <MotionSection className="p-10 bg-stone-900 text-stone-50 rounded-3xl">
                        <h2 className="text-2xl md:text-3xl font-bold font-sans mb-6">How I handle solo-operator risk, upfront</h2>
                        <div className="space-y-4 text-stone-300 leading-relaxed">
                            <p>
                                Documentation is written as I go, not reconstructed at handover. Response-time expectations are set in the engagement scope. Any period of reduced availability is flagged in advance.
                            </p>
                            <p>
                                At the end of an engagement, you get full IP transfer and documentation clean enough that whoever comes next — your first hire or another vendor — can pick it up without needing me on a call.
                            </p>
                            <p>
                                I'll help you structure what that next hire looks like — role definitions, interview structure, technical evaluation criteria — but the hiring and final decisions are yours. I don't run a recruiting pipeline.
                            </p>
                        </div>
                    </MotionSection>
                </div>
            </section>

            <Footer />
        </main>
    );
}
