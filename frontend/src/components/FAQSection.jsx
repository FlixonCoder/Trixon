"use client";
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import MotionSection from './MotionSection'

const faqs = [
    {
        question: "What exactly does an AI Automation Agency build?",
        answer: "We build the systems that eliminate manual work in your business — workflow automations that connect your tools, voice bots that handle inbound calls and lead qualification, calling agents that follow up with leads automatically, AI-powered dashboards that update in real time, and data pipelines that keep your records clean without human input."
    },
    {
        question: "What's an Automation Audit and why should I start there?",
        answer: "The Automation Audit is a one-week engagement where we map your current workflows, identify where you're losing the most time to manual work, and produce a prioritised Automation Roadmap. It's the lowest-risk way to start — you get a clear, actionable plan regardless of whether you hire us to build it."
    },
    {
        question: "How is Trixon different from a no-code automation tool like Zapier or Make?",
        answer: "No-code tools are great for simple, two-step automations. Trixon builds what no-code can't handle — multi-step custom workflows, AI-powered decision logic, voice bots with real conversation handling, calling agents that adapt to responses, and dashboards connected to your specific data sources. We build custom, which means it fits your business exactly."
    },
    {
        question: "How long does a typical build take?",
        answer: "The Automation Audit takes one week. An AI Integration Sprint (a single, scoped automation or AI feature) typically takes two to four weeks. A Full Automation Build — a complete automation layer across your ops — runs four to eight weeks depending on complexity. All timelines and scope are agreed upfront."
    },
    {
        question: "Do we own the automations you build?",
        answer: "Yes. Every system we build is fully yours at handover — code, credentials, documentation, and access. We don't create dependency. If you ever want to modify or extend what we've built, you can do it yourself, hire someone else, or come back to us."
    },
    {
        question: "What tools and platforms do you build on?",
        answer: "We build on the tools that give you the most flexibility and ownership — Python and Node.js for custom builds; n8n and Make for workflow orchestration; Retell AI, Vapi, and Twilio for voice and calling agents; OpenAI, Anthropic, and Gemini APIs for LLM integration; and PostgreSQL, MongoDB, and Airtable for data. We use whatever fits your stack, not a fixed template."
    },
    {
        question: "Can you integrate with tools we already use?",
        answer: "Yes. We build integrations with HubSpot, Salesforce, Notion, Airtable, Google Sheets, Slack, WhatsApp, Telegram, and most tools with an API. If you're already using a tool, we connect to it — we don't ask you to switch."
    },
    {
        question: "Do you do ongoing work or just one-off builds?",
        answer: "Both. Most clients start with a fixed-scope build (Automation Audit → Sprint or Full Build). After handover, many choose a monthly retainer to keep expanding the automation layer as the business grows. There's no obligation — the retainer is optional."
    },
    {
        question: "How do I start?",
        answer: "Book a free 30-minute Automation Audit call. We'll ask about your current workflows, identify the biggest opportunity for automation, and tell you exactly what we'd build and how long it would take. No pitch deck required — just a direct conversation."
    }
]

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null)

    const toggleIndex = (index) => {
        setOpenIndex(prev => (prev === index ? null : index))
    }

    return (
        <section id="faqs" className="py-24 bg-stone-900 text-stone-50 overflow-hidden relative">
            {/* Subtle Texture */}
            <div className="absolute inset-0 opacity-[0.05] text-stone-100 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)', backgroundSize: '24px 24px' }}>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <MotionSection className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif italic font-light tracking-wide text-stone-200 mb-6">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto text-stone-400">
                        Everything you need to know about working with an AI automation partner.
                    </p>
                </MotionSection>

                <div className="border-b border-stone-800">
                    {faqs.map((item, index) => {
                        const isOpen = openIndex === index
                        return (
                            <MotionSection key={index} delay={index * 0.05} className="border-t border-stone-800">
                                <button
                                    onClick={() => toggleIndex(index)}
                                    className="w-full flex justify-between items-center py-6 text-left focus:outline-none group cursor-pointer"
                                    aria-expanded={isOpen}
                                >
                                    <h3 className="text-lg font-bold text-stone-200 font-sans pr-6 group-hover:text-stone-50 transition-colors">
                                        {item.question}
                                    </h3>
                                    <span className="relative flex items-center justify-center h-5 w-5 shrink-0">
                                        <span className={`absolute h-0.5 w-5 bg-stone-500 group-hover:bg-stone-300 transition-all duration-300 ${isOpen ? 'rotate-90' : ''}`} />
                                        <span className={`absolute h-5 w-0.5 bg-stone-500 group-hover:bg-stone-300 transition-all duration-300 ${isOpen ? 'rotate-90 opacity-0' : ''}`} />
                                    </span>
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial="collapsed"
                                            animate="open"
                                            exit="collapsed"
                                            variants={{
                                                open: { opacity: 1, height: "auto", marginBottom: 24 },
                                                collapsed: { opacity: 0, height: 0, marginBottom: 0 }
                                            }}
                                            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                                            className="overflow-hidden"
                                        >
                                            <p className="text-stone-400 leading-relaxed text-base">
                                                {item.answer}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </MotionSection>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default FAQSection
