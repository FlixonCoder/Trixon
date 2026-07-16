"use client";
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import MotionSection from './MotionSection'

const faqs = [
    {
        question: "What is a fractional CTO, and do I actually need one?",
        answer: "A fractional CTO gives you senior technical leadership — architecture decisions, hiring judgment, fundraising-readiness — without the cost or commitment of a full-time hire. You likely need one if you're non-technical and about to make expensive, hard-to-reverse technical decisions (choosing a stack, scoping an MVP, prepping for investor technical diligence)."
    },
    {
        question: "What is the Build-Operate-Transfer (BOT) model?",
        answer: "I take ownership of building or fixing your product over a fixed tenure, then transfer full IP and documentation to you at the end — so you're never dependent on me continuing."
    },
    {
        question: "How is Trixon different from a dev agency or freelance developer?",
        answer: "You work directly with the person doing the work — no account manager, no junior developer executing while someone senior takes the meetings. That also means I'm selective about how many engagements I take on at once, so the work stays hands-on."
    },
    {
        question: "How much does a Trixon engagement cost?",
        answer: "Engagements are typically a monthly retainer, with equity discussed only for longer-term TTCF partnerships — scoped after an initial call and, often, a Technical Audit. I don't have a fixed price sheet because scope varies a lot by codebase and stage."
    },
    {
        question: "What is the Technical Audit, and how long does it take?",
        answer: "A focused review of your codebase — architecture, scalability, and technical risk — with a prioritized set of recommendations. Usually 1–3 weeks depending on codebase size. It's also the lowest-commitment way to work together before anything bigger."
    },
    {
        question: "I built my MVP with AI tools like Cursor, Replit, or Lovable — can Trixon help me scale it?",
        answer: "Yes. AI-assisted prototypes are usually fast to build and fragile to scale — I specialize in taking that first pass and making it production-ready without a full rewrite where avoidable."
    },
    {
        question: "I've been burned by a dev shop before. How do I know Trixon won't do the same thing?",
        answer: "Documentation happens as I build, not at the end, and full IP transfers to you at exit — every account, credential, and decision record. Because it's just me, there's no incentive structure pushing toward a longer engagement than you actually need."
    },
    {
        question: "We just raised funding — do we need Trixon or a full-time CTO?",
        answer: "Often neither, yet. I can stabilize your technical foundation and help define what a full-time CTO hire actually needs to walk into, so you're not making that hire under pressure."
    },
    {
        question: "Does Trixon only work with non-technical founders?",
        answer: "No — semi-technical founders who want a second set of senior hands, or who don't have bandwidth to own the technical side alone, are a great fit too."
    },
    {
        question: "What happens after the engagement ends — are we on our own?",
        answer: "You get full IP and documentation transfer, and a defined post-handover window where I'm available for questions. After that, the goal is that you don't need me — that's the point of BOT."
    },
    {
        question: "Do you hire the engineering team for us, or do we do that?",
        answer: "I'll help you structure the hiring process — role definitions, interview structure, technical evaluation criteria — but the hiring and final decisions are yours. I don't run a recruiting pipeline."
    },
    {
        question: "Is Trixon a good fit for a very early-stage or pre-seed startup?",
        answer: "Yes, especially through a Technical Audit or a scoped MVP build — that's often the right entry point before a larger TTCF or BOT engagement makes sense."
    },
    {
        question: "Is Trixon a big agency, or is it run by one person?",
        answer: "It's run by one person — me. That's intentional: you get direct access to the person actually building your product, not a layer of account management."
    },
    {
        question: "Can Trixon build AI features into my existing product, not just fix my architecture?",
        answer: "Yes — LLM integration, RAG, agentic workflows, and custom AI features are a core part of what I build, not an add-on."
    },
    {
        question: "How do I start working with Trixon?",
        answer: "Book a free strategy session, or start with a Technical Audit if you want a lower-commitment first step."
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
                        Everything you need to know about working with an independent technical partner.
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
