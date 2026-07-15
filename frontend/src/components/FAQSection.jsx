"use client";
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import MotionSection from './MotionSection'

const faqs = [
    {
        question: "What is a fractional CTO, and do I actually need one?",
        answer: "A fractional CTO gives you C-level technical leadership — architecture decisions, hiring, tech strategy — without a full-time salary or equity. If you're a non-technical founder with a live product, fundraising conversations that keep hitting technical questions, or a prototype that needs to scale, you need this kind of leadership now, not in 100 days."
    },
    {
        question: "What is the Build-Operate-Transfer (BOT) model?",
        answer: "BOT is a three-phase engagement: we Build your technical foundation (Months 1–3), Operate and recruit your permanent team (Months 4–9), then Transfer full ownership — code, credentials, and leadership — to your internal team (Months 10–12). Unlike an agency, we're structured to make ourselves unnecessary."
    },
    {
        question: "How is Trixon different from a dev agency or freelance developer?",
        answer: "Agencies optimize for retainers, which means your codebase often stays a black box you depend on forever. Trixon is fixed-fee, fixed-scope, and built around a defined exit. You get 100% IP ownership transferred at the end — no lock-in, no ongoing dependency."
    },
    {
        question: "How much does a Trixon engagement cost?",
        answer: "Pricing is fixed-fee per engagement, not hourly or retainer-based. The entry point is the Technical Audit and Roadmap, a lower-cost 4-week engagement, before any larger commitment. Book a strategy session for a scoped quote based on your stage."
    },
    {
        question: "What is the Technical Audit & Roadmap, and how long does it take?",
        answer: "It's a 4-week deep-dive into your existing codebase or product idea, identifying architectural bottlenecks and producing an investor-ready technical roadmap. It's the lowest-risk way to work with us before committing to a full BOT engagement."
    },
    {
        question: "I built my MVP with AI tools like Cursor, Replit, or Lovable — can Trixon help me scale it?",
        answer: "Yes, this is one of our most common engagements. We call it the AI Prototype Founder pattern: a working demo that breaks down under real users or enterprise security and scalability questions. We re-architect on an AI-first foundation that meets professional and investor-ready standards, typically within 90 days."
    },
    {
        question: "I've been burned by a dev shop before. How do I know Trixon won't do the same thing?",
        answer: "100% IP ownership — code, domains, credentials, accounts — is formally transferred at exit, no exceptions. We also build your internal team during the engagement specifically so you're never dependent on us. Our own success metric is your independence, not your renewal."
    },
    {
        question: "We just raised funding — do we need Trixon or a full-time CTO?",
        answer: "Many funded startups need technical leadership while they search for a permanent CTO, since that search alone takes 100+ days. Trixon provides interim scaling and technical debt cleanup so there's a clean, documented foundation ready for whoever you hire."
    },
    {
        question: "Does Trixon only work with non-technical founders?",
        answer: "Our core focus is non-technical or solo technical founders who need senior leadership they don't have in-house. But we also work with funded teams needing interim leadership, and repeat founders who want to avoid past dev-shop mistakes."
    },
    {
        question: "What happens after the engagement ends — are we on our own?",
        answer: "No. Transfer includes a 60 to 90 day shadowing period for your new internal lead, plus 3 months of post-handover hypercare where we stay on-call to close any knowledge gaps. The goal is a clean, supported exit, not an abrupt one."
    },
    {
        question: "Do you hire the engineering team for us, or do we do that?",
        answer: "We run the entire hiring process during the Operate phase, defining role scorecards, conducting all technical interviews, and surfacing only top-tier candidates. You keep every hire; we step back once your team is in place."
    },
    {
        question: "Is Trixon a good fit for a very early-stage or pre-seed startup?",
        answer: "Yes, particularly through the Technical Audit, which is designed as a low-commitment way to get expert-level technical judgment before you've raised or hired anyone, so your foundation is right from day one."
    },
    {
        question: "Is Trixon a big agency, or is it run by one person?",
        answer: "Trixon is led by founder Mohammed Saqib Junaid Khan, who works alongside a growing team of engineers, designers, and product specialists on every engagement. We're upfront about being an early-stage, founder-led practice rather than a large firm, because founders who've been burned by black-box agencies tend to value that directness. What you get instead of a big-firm name is direct access to the person accountable for your technical foundation, and a fixed, transparent process."
    },
    {
        question: "Can Trixon build AI features into my existing product, not just fix my architecture?",
        answer: "Yes. Our AI-First Architecture engagement is built specifically for this: integrating agentic AI features into your product while future-proofing the codebase so it doesn't accumulate unmanageable technical debt as you scale."
    },
    {
        question: "How do I start working with Trixon?",
        answer: "Book a free 30-minute strategy session. There's no pitch deck required and no upfront commitment, just a direct conversation about where your technical foundation stands and whether an Audit, Hiring Sprint, or full BOT engagement is the right starting point."
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
                    <p className="text-lg text-stone-405 max-w-2xl mx-auto text-stone-400">
                        Everything you need to know about fractional technical co-founder leadership and build-operate-transfer.
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
