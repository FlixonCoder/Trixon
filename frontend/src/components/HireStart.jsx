"use client";
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import MotionSection from '../components/MotionSection'
import Footer from '../components/Footer'
import { useContact } from '../context/ContactContext'

const HireStart = () => {
    const { openContact } = useContact()

    const stages = [
        {
            number: "01",
            title: "Defining the DNA",
            subtitle: "The Role Scorecard",
            content: [
                "We don't hire based on generic \"years of experience.\" We hire based on Outcome-Driven Scorecards.",
                "Before a single job description is written, we define exactly what \"good\" looks like for the first 90 days. We build a Founding Engineer Scorecard that maps every hire to a measurable business outcome — not a keyword on a resume."
            ],
            details: [
                "Mission-critical outcomes defined before recruiting begins",
                "90-day success metrics tied to product velocity",
                "Culture-fit criteria aligned with founder DNA"
            ]
        },
        {
            number: "02",
            title: "The Vetting Engine",
            subtitle: "Filtering the Top 5%",
            content: [
                "Our technical screening process is designed to surface the engineers who will thrive in a startup — not just those who can pass an algorithm quiz.",
                "We conduct every first-round technical screen personally, ensuring only the most elite talent reaches your desk."
            ],
            details: [
                "First-round technical screens conducted by us, not outsourced",
                "The \"Judgment\" Test — how candidates handle systemic failures and technical debt",
                "Zero LeetCode puzzles. Real-world architecture and decision-making scenarios"
            ]
        },
        {
            number: "03",
            title: "Mentorship & Culture Injection",
            subtitle: "Integration, Not Just Onboarding",
            content: [
                "Hiring the person is only half the battle. You have to integrate them into a culture of engineering excellence that outlasts any single individual.",
                "We implement the rituals and documentation practices that turn a group of hires into a self-sustaining engineering team."
            ],
            details: [
                "Code Reviews & Tech Talks from Day 1 to spread institutional knowledge",
                "Standardized documentation for every architectural decision",
                "No \"tribal knowledge\" barriers — new hires hit the ground running"
            ]
        },
        {
            number: "04",
            title: "The Handover Protocol",
            subtitle: "The \"Shadow\" Period",
            content: [
                "The final 60–90 days of our engagement are the most critical. This is where we prove we built something that doesn't need us.",
                "Your new internal lead — whether a VP of Engineering or CTO — shadows us in every leadership meeting, every architectural review, every vendor call."
            ],
            details: [
                "Formal shadowing period for your new internal lead",
                "\"Keys to the Kingdom\" checklist — AWS/GCP accounts, domain registries, legal IP assignments",
                "3-month Post-Handover Hypercare for resolving any lingering knowledge gaps"
            ]
        }
    ]

    return (
        <main>
            {/* Breadcrumb */}
            <div className="bg-stone-50 pt-4 pb-0">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="text-sm text-stone-400">
                        <Link href="/" className="hover:text-stone-900 transition-colors">Home</Link>
                        <span className="mx-2">→</span>
                        <span className="text-stone-600">Our Process</span>
                    </nav>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative pt-8 pb-16 lg:pt-24 lg:pb-32 bg-stone-50 overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03] text-stone-900"
                    style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)', backgroundSize: '40px 40px' }}>
                </div>

                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium text-stone-600 ring-1 ring-stone-900/10 bg-white/50 backdrop-blur-sm mb-8 shadow-sm"
                    >
                        <span className="flex h-2 w-2 rounded-full bg-emerald-500 mr-2"></span> Success is Our Absence
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl md:text-6xl mb-8 font-sans"
                    >
                        <span className="block mb-1">How We Hire Our Own Replacement: </span>
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-stone-800 to-stone-600">
                            The Trixon 4-Stage Process
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="max-w-2xl mx-auto text-xl text-stone-600 leading-relaxed"
                    >
                        Most technical partners want to stay forever. We do the opposite. Here is the exact process we use to find, vet, and integrate your permanent engineering leadership — and then walk away for good.
                    </motion.p>
                </div>

                {/* Background shapes */}
                <div className="absolute top-0 left-1/2 w-full -translate-x-1/2 h-full overflow-hidden -z-10 pointer-events-none opacity-50">
                    <div className="absolute top-[-20%] left-[-10%] w-[50rem] h-[50rem] bg-orange-100/40 rounded-full blur-3xl mix-blend-multiply filter"></div>
                    <div className="absolute top-[10%] right-[-10%] w-[40rem] h-[40rem] bg-indigo-50/40 rounded-full blur-3xl mix-blend-multiply filter"></div>
                </div>
            </section>

            {/* Agency vs. Trixon vs In-House CTO Contrast */}
            <section className="py-24 bg-stone-900 text-stone-50 overflow-hidden relative">
                <div className="absolute inset-0 opacity-[0.05] text-stone-100"
                    style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)', backgroundSize: '24px 24px' }}>
                </div>

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <MotionSection className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif italic font-light tracking-wide mb-6 text-stone-200">
                            The "Black Box" Agency vs. The Trixon Model vs. In-House CTO
                        </h2>
                    </MotionSection>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
                        {/* Agency column */}
                        <MotionSection delay={0.2} className="p-10 rounded-3xl bg-stone-800/50 border border-stone-700/50 opacity-70 hover:opacity-100 transition-opacity">
                            <h3 className="text-lg font-bold text-stone-500 uppercase tracking-widest mb-8">
                                The "Sticky" Agency
                            </h3>
                            <ul className="space-y-5">
                                {[
                                    "Keeps the codebase opaque to maintain control",
                                    "No documentation — only they can maintain it",
                                    "Hires offshore juniors billed at senior rates",
                                    "Success = longer engagement, more billing"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start text-stone-500 line-through decoration-stone-600">
                                        <span className="w-2 h-2 rounded-full bg-stone-600 mr-4 mt-2 shrink-0"></span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </MotionSection>

                        {/* Trixon column */}
                        <MotionSection delay={0.4} className="p-10 rounded-3xl bg-stone-50 text-stone-900 shadow-2xl shadow-stone-900/30">
                            <h3 className="text-lg font-bold text-emerald-600 uppercase tracking-widest mb-8">
                                The Trixon Model
                            </h3>
                            <ul className="space-y-5">
                                {[
                                    "Every decision documented for your future CTO",
                                    "Full IP ownership transferred at exit",
                                    "We personally vet every engineer we hire",
                                    "Success = we became redundant"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start text-stone-800 text-lg font-medium">
                                        <svg className="w-6 h-6 mr-4 text-emerald-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </MotionSection>

                        {/* In-House CTO column */}
                        <MotionSection delay={0.6} className="p-10 rounded-3xl bg-stone-800/50 border border-stone-700/50 opacity-80 hover:opacity-100 transition-opacity">
                            <h3 className="text-lg font-bold text-amber-400 uppercase tracking-widest mb-8">
                                In-House CTO
                            </h3>
                            <ul className="space-y-5">
                                {[
                                    "Codebase visible but knowledge is siloed to one person",
                                    "Documentation only if they prioritise it",
                                    "You recruit, they may or may not own hiring",
                                    "Success = personal equity and career growth"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start text-stone-400">
                                        <span className="w-2 h-2 rounded-full bg-amber-400/60 mr-4 mt-2 shrink-0"></span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </MotionSection>
                    </div>
                </div>
            </section>

            {/* The 4 Stages */}
            <section className="py-24 bg-stone-50 relative">
                <div className="absolute inset-0 opacity-[0.03] text-stone-900"
                    style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)', backgroundSize: '40px 40px' }}>
                </div>

                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <MotionSection className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-stone-900 font-sans">
                            The 4-Stage Replacement Process
                        </h2>
                        <p className="mt-4 text-xl text-stone-600 font-serif italic max-w-2xl mx-auto">
                            From defining who to hire, to walking away with confidence.
                        </p>
                    </MotionSection>

                    {/* Vertical timeline connector */}
                    <div className="relative">
                        <div className="hidden md:block absolute top-0 left-[39px] w-px h-full bg-stone-200"></div>

                        <div className="space-y-16">
                            {stages.map((stage, index) => (
                                <MotionSection key={index} delay={index * 0.15} className="relative">
                                    <div className="md:flex md:gap-12 items-start">
                                        {/* Stage number indicator */}
                                        <div className="shrink-0 mb-6 md:mb-0">
                                            <div className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-serif italic bg-stone-900 text-white shadow-lg relative z-10">
                                                {stage.number}
                                            </div>
                                        </div>

                                        {/* Stage content */}
                                        <div className="flex-1 pb-8">
                                            <div className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4 border border-stone-200 bg-white text-stone-600">
                                                {stage.subtitle}
                                            </div>
                                            <h3 className="text-3xl font-bold text-stone-900 mb-6 font-sans">{stage.title}</h3>

                                            <div className="space-y-4 mb-8">
                                                {stage.content.map((paragraph, pi) => (
                                                    <p key={pi} className="text-lg text-stone-600 leading-relaxed">{paragraph}</p>
                                                ))}
                                            </div>

                                            {/* Detail cards */}
                                            <div className="bg-white rounded-2xl border border-stone-100 p-8 shadow-sm">
                                                <ul className="space-y-4">
                                                    {stage.details.map((detail, di) => (
                                                        <li key={di} className="flex items-start">
                                                            <svg className="w-5 h-5 mr-4 text-emerald-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                            </svg>
                                                            <span className="text-stone-700">{detail}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </MotionSection>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* The Hypercare Promise */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-stone-200 to-transparent"></div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <MotionSection>
                        <div className="mb-10">
                            <span className="font-sans text-sm font-bold tracking-widest uppercase text-stone-400">The Final Guarantee</span>
                        </div>

                        <blockquote className="text-3xl md:text-5xl font-serif leading-tight text-stone-900 mb-12">
                            "When we leave, you won't feel the gap. <span className="italic text-stone-500">Your team will be running sprints, shipping features, and making architectural decisions</span> — without a single call back to us."
                        </blockquote>

                        <div className="grid md:grid-cols-3 gap-8 mt-16">
                            {[
                                { metric: "60–90", label: "Day shadowing period", desc: "Your new lead learns by doing, not reading." },
                                { metric: "100%", label: "IP transferred", desc: "Every account, domain, and credential — formally." },
                                { metric: "3 Mo.", label: "Post-handover hypercare", desc: "We stay on-call to close any knowledge gaps." }
                            ].map((item, i) => (
                                <MotionSection key={i} delay={i * 0.2} className="p-8 rounded-3xl bg-stone-50 border border-stone-100">
                                    <div className="text-4xl font-bold text-stone-900 mb-2 font-sans">{item.metric}</div>
                                    <div className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-3">{item.label}</div>
                                    <p className="text-stone-500 text-sm">{item.desc}</p>
                                </MotionSection>
                            ))}
                        </div>
                    </MotionSection>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </main>
    )
}

export default HireStart
