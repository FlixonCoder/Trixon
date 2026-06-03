import React from 'react'
import MotionSection from './MotionSection'

const WhatWeDo = () => {
    const items = [
        {
            title: "Technical Audit & Roadmap",
            desc: "A 4-week deep dive to identify systemic bottlenecks and build an investor-ready technical roadmap. The lowest-risk way to start.",
            support: "Fixed scope. Fixed price. The lowest-risk way to start."
        },
        {
            title: "The Hiring Sprint",
            desc: "We define your Role Scorecards and conduct all technical screenings to find your first elite engineers. You keep the talent, we step back.",
            support: "You keep every hire. We step back when the team is set."
        },
        {
            title: "AI-First Architecture",
            desc: "Leverage the 2026 shift toward agentic engineering. We future-proof your startup without creating unmanageable technical debt.",
            support: "Future-proof infrastructure without unmanageable technical debt."
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
                        Start with a Fixed-Fee Engagement
                    </h2>
                    <p className="mt-4 text-xl text-stone-600 max-w-2xl mx-auto">
                        No long-term contracts. No ambiguity. Clear outcomes, fixed price.
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
