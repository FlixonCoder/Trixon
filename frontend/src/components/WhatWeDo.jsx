import React from 'react'
import MotionSection from './MotionSection'

const WhatWeDo = () => {
    const items = [
        {
            title: "Automation Audit",
            desc: "A one-week deep dive into your current workflows and tools. We identify the highest-ROI automation opportunities, map what to build first, and deliver a prioritised Automation Roadmap — actionable with or without hiring us. The lowest-risk way to start.",
            support: "The lowest-risk way to see how we work before committing to anything larger."
        },
        {
            title: "AI Integration Sprint",
            desc: "We integrate AI into a specific part of your product or workflow — a voice bot, a calling agent, an LLM-powered feature, or a connected automation. Fixed scope, fixed timeline (typically 2–4 weeks), clear deliverable. No equity, no retainer required.",
            support: "No account manager. No junior devs executing while someone else takes the calls."
        },
        {
            title: "Full Automation Build",
            desc: "We design and build your complete automation layer — multi-step workflows, voice agents, dashboards, data pipelines, and CRM integrations — delivered as a fully owned, documented system. Monthly retainer engagement for ongoing expansion available after the initial build.",
            support: "Documentation happens as we build, not retrofitted at the end."
        }
    ]

    return (
        <section id="solution" className="py-24 bg-stone-50 relative overflow-hidden">
            {/* Subtle Texture */}
            <div className="absolute inset-0 opacity-[0.03] text-stone-900"
                style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)', backgroundSize: '40px 40px' }}>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <MotionSection className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-stone-900 mb-6 font-sans">
                        What We Build
                    </h2>
                    <p className="mt-4 text-xl text-stone-600 max-w-2xl mx-auto">
                        Fixed-scope engagements. Every build is scoped upfront — no retainer lock-ins, no ambiguity.
                    </p>
                </MotionSection>

                <div className="grid gap-8 md:grid-cols-3">
                    {items.map((item, index) => (
                        <MotionSection key={index} delay={index * 0.2} className="group p-10 bg-white rounded-3xl shadow-sm border border-stone-100/50 hover:shadow-xl hover:border-stone-200 transition-all duration-300">
                            <div className="mb-6">
                                <span className="font-serif italic text-4xl text-stone-300 group-hover:text-stone-900 transition-colors duration-300">
                                    0{index + 1}
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold text-stone-900 mb-4 font-sans">{item.title}</h3>
                            <p className="text-stone-600 leading-relaxed mb-4">{item.desc}</p>
                            <p className="text-sm text-stone-400 italic">{item.support}</p>
                        </MotionSection>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WhatWeDo
